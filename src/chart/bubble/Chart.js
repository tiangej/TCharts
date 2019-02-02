import ChartBase from '../../base/chart/ChartBase.js';
import VAxisInfoBase_In from '../../base/info/VAxisInfoBase_In.js';
import VAxisInfoBase_Out from '../../base/info/VAxisInfoBase_Out.js';

import ChartInfo_In from './info/ChartInfo_In.js';
import ChartInfo_Out from './info/ChartInfo_Out.js';
import Bubble from './parts/Bubble.js';
import Painter from './painter/Painter.js';

import ObjectPool from '../../support/ObjectPool.js';
import Constants from '../../support/Constants.js';
import Status from '../../support/Status.js';
import Utility from '../../support/Utility.js';

import TWAlgorithm from '../../tween/TWAlgorithm.js';
import TWEngine from '../../tween/TWEngine.js';


export default class Chart extends ChartBase {

    constructor(parentDivID) {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////

        //用户输入（图表必备信息）
        this.chartInfo_In = new ChartInfo_In();               //图表信息。例：图表名称
        this.xAxisInfo_In = new VAxisInfoBase_In();           //x值轴信息
        this.yAxisInfo_In = new VAxisInfoBase_In();           //y值轴信息


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._chartInfo_Out = new ChartInfo_Out();      //数据结构体(存储计算结果，供内部用)    
        this._xAxisInfo_Out = new VAxisInfoBase_Out();
        this._yAxisInfo_Out = new VAxisInfoBase_Out();

        this._itemArray = [];                           //存放散点对象的二维数组
        this._itemPool = null;                          //散点对象池

        this._parentDivClassName = 'bubbleChartDiv';    //样式名
        this._tipDivClassName = 'bubbleChartTipDiv';
        this._secondColClassName = 'secondCol';

        this._twEngine = new TWEngine();                //缓动动画相关


        ///////////////////////
        // 初始化
        ///////////////////////

        //设置画家
        this._setPainter(Painter);

        //获取作为图表容器的div对象，并增加特定样式。注意：是增加而不是替换
        this._parentDiv = document.getElementById(parentDivID);
        this._parentDiv.className += ' ' + this._parentDivClassName;

        //动态生成_canvas，并添加到DOM树。同时获取其上下文
        this._canvas = document.createElement('canvas');
        this._parentDiv.appendChild(this._canvas);

        //动态生成tip对象，添加到DOM树，并获取之
        this._tipDiv = this._createTip(this._tipDivClassName);
        this._parentDiv.appendChild(this._tipDiv);

        //初始化对象池
        this._itemPool = new ObjectPool(Bubble);

    }


    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    start () {
        //验证数据合法性
        if (this._check() == false) {
            console.log('[TCharts] Incorrect chart data !');
            return;
        }

        //重设各种状态，数据
        this._reset();

        //为绘制图表，计算各种数据
        this._getItemAndComputeMinMax();
        this._computeValueAxisOtherInfo(Constants.X_AXIS, this.xAxisInfo_In, this._xAxisInfo_Out);
        this._computeValueAxisOtherInfo(Constants.Y_AXIS, this.yAxisInfo_In, this._yAxisInfo_Out);
        this._setItemPositionAndTween();

        //启动帧循环，在循环内部绘制图表
        this._startPaint();
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _check () {
        let rtn = true;

        //检查： 数据是否为空
        if (this.chartInfo_In.series.length == 0) {
            rtn = false;
        }

        return rtn;
    }


    _reset () {
        let canvas = this._canvas,
            div = this._parentDiv,
            chartInfo_In = this.chartInfo_In,
            itemArr = this._itemArray,
            i, len;

        //移除鼠标事件监听器
        this._addOrRemoveEventListener(Constants.REMOVE);

        //设置尺寸
        canvas.width = div.offsetWidth;
        canvas.height = div.offsetHeight;

        //初始化图例数据、散点对象数组
        itemArr.length = 0;
        len = chartInfo_In.series.length;
        for (i = 0; i < len; i++) {
            itemArr[i] = [];
        }

        //初始化Tip
        this._initTip();

        //从对象池中释放曾经使用过的散点对象
        this._itemPool.releaseAll();

        //释放缓动资源
        this._twEngine.releaseAllTWData();
        this._twEngine.releaseAllTWAction();

        //取消上一次绑定的动画函数
        window.cancelAnimationFrame(this._animationFrameID);
    }


    _initTip () {
        let tipDiv = this._tipDiv,
            secondColClassName = this._secondColClassName,
            schema = this.chartInfo_In.schema,
            table, row, td,
            i, len;

        //隐藏tip
        tipDiv.style.display = 'none';

        //删除Table对象的所有行
        table = tipDiv.childNodes[1];
        table.innerHTML = '';

        //根据数据系列循环生成Table对象
        len = schema.length;
        for (i = 0; i < len; i++) {
            //创建行
            row = table.insertRow();

            //创建第一列，并插入标签
            td = row.insertCell();
            td.innerHTML = schema[i];

            //创建第二列，并设定样式名
            td = row.insertCell();
            td.className = secondColClassName;
        }
    }


    _getItemAndComputeMinMax () {
        let chartInfo_In = this.chartInfo_In,
            chartInfo_Out = this._chartInfo_Out,

            xAxisInfo_In = this.xAxisInfo_In,
            xAxisInfo_Out = this._xAxisInfo_Out,

            yAxisInfo_In = this.yAxisInfo_In,
            yAxisInfo_Out = this._yAxisInfo_Out,

            itemArray = this._itemArray,
            itemPool = this._itemPool,
            series = chartInfo_In.series,

            item, data, d,
            num,
            i, j, len1, len2;

        //(1)遍历所有系列，找到第一个有效数据，为最大最小赋初值
        len1 = series.length;

        over:
        for (i = 0; i < len1; i++) {
            data = series[i].data;
            len2 = data.length;

            for (j = 0; j < len2; j++) {

                //取得散点坐标
                d = data[j];
                if (d[0] != Constants.DIRTY &&
                    d[1] != Constants.DIRTY &&
                    d[2] != Constants.DIRTY) {
                    xAxisInfo_Out.min = xAxisInfo_Out.max = d[0];
                    yAxisInfo_Out.min = yAxisInfo_Out.max = d[1];
                    chartInfo_Out.min = chartInfo_Out.max = d[2];
                    break  over;
                }
            }
        }


        //(2)从池中取出项目对象，同时求得最大最小值
        for (i = 0; i < len1; i++) {
            data = series[i].data;
            len2 = data.length;

            //生成项目对象
            for (j = 0; j < len2; j++) {
                //取得散点坐标
                d = data[j];

                //从池中获取项目对象，加入到数组,并重新设置属性
                item = itemPool.getObj();
                itemArray[i].push(item);

                //设置项目
                item.seriesIndex = i;
                item.index = j;
                item.valueX = d[0];
                item.valueY = d[1];
                item.valueRadius = d[2];
                item.dirtyFlag = false;

                //比较x轴最值
                num = item.valueX;
                if (num != Constants.DIRTY) {
                    if (num < xAxisInfo_Out.min) {
                        xAxisInfo_Out.min = num;
                    } else if (num > xAxisInfo_Out.max) {
                        xAxisInfo_Out.max = num;
                    }
                } else {
                    item.dirtyFlag = true;
                }

                //比较y轴最值
                num = item.valueY;
                if (num != Constants.DIRTY) {
                    if (num < yAxisInfo_Out.min) {
                        yAxisInfo_Out.min = num;
                    } else if (num > yAxisInfo_Out.max) {
                        yAxisInfo_Out.max = num;
                    }
                } else {
                    item.dirtyFlag = true;
                }

                //比较圆半径的最值
                num = item.valueRadius;
                if (num != Constants.DIRTY) {
                    if (num < chartInfo_Out.min) {
                        chartInfo_Out.min = num;
                    } else if (num > chartInfo_Out.max) {
                        chartInfo_Out.max = num;
                    }
                } else {
                    item.dirtyFlag = true;
                }
            }
        }


        //(3)判断用户是否指定了最大最小值，并据此调整最值
        if (xAxisInfo_In.min != Number.MIN_VALUE && xAxisInfo_In.min < xAxisInfo_Out.min) {
            xAxisInfo_Out.min = xAxisInfo_In.min;
        }
        if (xAxisInfo_In.max != Number.MAX_VALUE && xAxisInfo_In.max > xAxisInfo_Out.max) {
            xAxisInfo_Out.max = xAxisInfo_In.max;
        }

        if (yAxisInfo_In.min != Number.MIN_VALUE && yAxisInfo_In.min < yAxisInfo_Out.min) {
            yAxisInfo_Out.min = yAxisInfo_In.min;
        }
        if (yAxisInfo_In.max != Number.MAX_VALUE && yAxisInfo_In.max > yAxisInfo_Out.max) {
            yAxisInfo_Out.max = yAxisInfo_In.max;
        }

        //(4)判断是否在值轴上扩展 0，并据此调整最值
        if (xAxisInfo_In.zeroExtend == true) {
            if (xAxisInfo_Out.min > 0 && xAxisInfo_Out.max > 0)           //同为正数
            {
                xAxisInfo_Out.min = 0;
            } else if (xAxisInfo_Out.min < 0 && xAxisInfo_Out.max < 0) {     //同为负数
                xAxisInfo_Out.max = 0;
            }
        }

        if (yAxisInfo_In.zeroExtend == true) {
            if (yAxisInfo_Out.min > 0 && yAxisInfo_Out.max > 0)           //同为正数
            {
                yAxisInfo_Out.min = 0;
            } else if (yAxisInfo_Out.min < 0 && yAxisInfo_Out.max < 0) {     //同为负数
                yAxisInfo_Out.max = 0;
            }
        }

        //(5)计算单位数值的长度，供此后用
        chartInfo_Out.unitValueSize = (chartInfo_In.maxRadius - chartInfo_In.minRadius) / (chartInfo_Out.max - chartInfo_Out.min);

    }


    _computeValueAxisOtherInfo (axisType, vAxisInfo_In, vAxisInfo_Out) {
        let canvas = this._canvas,
            chartInfo_In = this.chartInfo_In,
            scaleUnit,
            arr,
            w, h,
            i;

        //计算标签间隔
        vAxisInfo_Out.scaleUnit = Utility.getScaleUnit(vAxisInfo_Out.min, vAxisInfo_Out.max, vAxisInfo_In.labelMaxCount);

        //计算横轴标签小数位数
        arr = vAxisInfo_Out.scaleUnit.toString().split('.');
        if (arr.length > 1) {
            vAxisInfo_Out.decimalDigit = arr[1].length;
        } else {
            vAxisInfo_Out.decimalDigit = 0;
        }


        //计算最小刻度(同时为最大刻度设初值)
        vAxisInfo_Out.minScale = vAxisInfo_Out.maxScale = Math.floor(vAxisInfo_Out.min / vAxisInfo_Out.scaleUnit) * vAxisInfo_Out.scaleUnit;

        //计算最大刻度，同时记录原点的位置
        vAxisInfo_Out.originIndex = -1;        //初值
        for (i = 0; 1; i++) {
            scaleUnit = vAxisInfo_Out.minScale + vAxisInfo_Out.scaleUnit * i;
            //判断是否是0刻度，如果是则记录之
            if (scaleUnit == 0) {
                vAxisInfo_Out.originIndex = i;
                vAxisInfo_Out.originValue = 0;
            }

            //判断是否为最大刻度，是则退出循环
            if (scaleUnit >= vAxisInfo_Out.max) {
                vAxisInfo_Out.maxScale = scaleUnit;
                break;
            }
        }


        //继续计算原点的位置(原点值不一定是0)
        //判断原点数组索引是否为初值
        //如果为初值，说明前一步骤并没有得出原点结果，则继续计算
        if (vAxisInfo_Out.originIndex == -1) {
            if (vAxisInfo_Out.minScale >= 0) {
                vAxisInfo_Out.originIndex = 0;
                vAxisInfo_Out.originValue = vAxisInfo_Out.minScale;
            } else if (vAxisInfo_Out.maxScale <= 0) {
                vAxisInfo_Out.originIndex = i;
                vAxisInfo_Out.originValue = vAxisInfo_Out.maxScale;
            }
        }

        //计算单位数值在轴上占用的物理尺寸 / 相邻标签之间的物理距离 / 原点
        w = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
        h = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;

        if (axisType == Constants.X_AXIS) {
            vAxisInfo_Out.unitValueSize = w / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
            vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
            vAxisInfo_Out.originPosition = chartInfo_In.bodyLeft + vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
        } else {
            vAxisInfo_Out.unitValueSize = h / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
            vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
            vAxisInfo_Out.originPosition = canvas.height - chartInfo_In.bodyBottom - vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
        }

    }


    _setItemPositionAndTween () {
        let chartInfo_In = this.chartInfo_In,
            chartInfo_Out = this._chartInfo_Out,

            xAxisInfo_Out = this._xAxisInfo_Out,
            yAxisInfo_Out = this._yAxisInfo_Out,

            itemArr = this._itemArray,
            item,

            twEngine = this._twEngine,
            tweenCallBack = this._tweenCallBack,
            from, to, twData, twAction,
            twDataArr = [],

            originPositionX = xAxisInfo_Out.originPosition,
            originPositionY = yAxisInfo_Out.originPosition,

            originValueX = xAxisInfo_Out.originValue,
            originValueY = yAxisInfo_Out.originValue,

            unitValueSizeX = xAxisInfo_Out.unitValueSize,
            unitValueSizeY = yAxisInfo_Out.unitValueSize,

            minRadius = chartInfo_In.minRadius,
            unitValueSizeRadius = chartInfo_Out.unitValueSize,
            minValueRadius = chartInfo_Out.min,

            arr,
            i, j, len1, len2;

        //循环系列
        len1 = itemArr.length;
        for (i = 0; i < len1; i++) {
            arr = itemArr[i];
            len2 = arr.length;

            //循环项目
            for (j = 0; j < len2; j++) {
                //取得项目对象
                item = arr[j];
                if (item.dirty == true) continue;

                //设置坐标
                item.x = originPositionX + unitValueSizeX * (item.valueX - originValueX);
                item.y = originPositionY - unitValueSizeY * (item.valueY - originValueY);

                //设置缓动数据
                from = [0];
                to = [minRadius + unitValueSizeRadius * (item.valueRadius - minValueRadius)];

                twData = twEngine.getTWData();
                twData.setData(item, from, to, tweenCallBack);
                twDataArr.push(twData);
            }
        }

        twAction = twEngine.getTWAction();
        twAction.setData(twDataArr, TWAlgorithm.Bounce.easeOut, 1000);

        twEngine.setFirstTWAction(twAction);

    }


    _addOrRemoveEventListener (command) {
        let canvas = this._canvas,

            tip = this._tipDiv,
            table, row, p,

            series = this.chartInfo_In.series,
            ser,

            itemArray = this._itemArray,
            item,

            position = { x: -1, y: -1 },
            data,
            rect,       //Canvas包围盒相关

            foundFlg = false,
            arr,

            i, j, len1, len2,
            num,

            me = this;

        function doMouseClick (e) {
            //获取鼠标相对于Canvas的位置
            rect = canvas.getBoundingClientRect();
            Utility.windowToCanvas(rect.left,
                rect.top,
                rect.width,
                rect.height,
                canvas.width,
                canvas.height,
                e.clientX,
                e.clientY,
                position);

            //按照散点显示的逆序,找到鼠标位于哪个对象之上
            foundFlg = false;
            len1 = itemArray.length;

            outFor:
            for (i = len1 - 1; i >= 0; i--) {
                arr = itemArray[i];
                len2 = arr.length;

                for (j = len2 - 1; j >= 0; j--) {
                    item = arr[j];

                    //判断鼠标位于哪个对象之上
                    if (item.isPointInBubble(position.x, position.y) == true) {
                        foundFlg = true;
                        break outFor;
                    }
                }
            }

            //判断鼠标位于某个对象之上，如果不是则隐藏tip，然后退出
            if (foundFlg == false) {
                tip.style.display = 'none';
                return;
            }

            //显示tip
            tip.style.display = 'block';

            //更新系列名称        
            ser = series[item.seriesIndex];
            p = tip.childNodes[0];
            p.innerText = ser.name;

            //更新数据系列
            table = tip.childNodes[1];

            data = ser.data[item.index];

            for (i = 0; i < 3; i++) {
                table.rows[i].cells[1].innerText = data[i];
            }

            //移动tip
            //设定tip的X坐标
            num = tip.offsetWidth;
            if (position.x + num > rect.width) {
                tip.style.left = (position.x - num) + 'px';
            } else {
                tip.style.left = position.x + 'px';
            }

            //设定tip的Y坐标
            num = tip.offsetHeight;
            if (position.y + num > rect.height) {
                tip.style.top = (position.y - num) + 'px';
            } else {
                tip.style.top = position.y + 'px';
            }

        }

        //执行
        if (command == Constants.ADD && me._eventListenersAddedFlag == false) {
            canvas.addEventListener('click', doMouseClick);
            me.eventListenersAddedFlag = true;
        } else if (command == Constants.REMOVE && me._eventListenersAddedFlag == true) {
            canvas.removeEventListener('click', doMouseClick);
            me.eventListenersAddedFlag = false;

        }

    }


    _startPaint () {
        let me = this;

        function paint () {
            switch (me._status) {
                case Status.STEP1:

                    me._paint();                                  //绘制图表并保存绘图表面
                    me._twEngine.start();                        //启动缓动，从下一帧开始缓动

                    me._status = Status.STEP2;
                    break;

                case Status.STEP2:

                    //绘制缓动效果
                    //      如果缓动没有结束，就绘制
                    //      反之，设置状态，在下一停止绘制
                    if (me._twEngine.nextFrame() == true) {
                        me._paint();

                    } else {
                        me._twEngine.stop();      //停止缓动

                        me._status = Status.STEP3;
                    }

                    break;

                case Status.STEP3:

                    //添加事件监听器
                    me._addOrRemoveEventListener(Constants.ADD);

                    //设置状态
                    me._status = Status.STOP;
                    break;
            }

            //循环调用自己，进行绘画
            if (me._status != Status.STOP) {
                me._animationFrameID = window.requestNextAnimationFrame(paint);
            }
        }

        //设置初始状态，开始绘制
        me._status = Status.STEP1;
        paint();
    }


    /*
     * 缓动效果
     */
    _tweenCallBack (target, resultArray) {
        target.radius = resultArray[0];
    }

}