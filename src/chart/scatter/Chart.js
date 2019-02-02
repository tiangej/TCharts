import ChartBase from '../../base/chart/ChartBase.js';
import VAxisInfoBase_In from '../../base/info/VAxisInfoBase_In.js';
import VAxisInfoBase_Out from '../../base/info/VAxisInfoBase_Out.js';

import ChartInfo_In from './info/ChartInfo_In.js';
import ScatterPoint from './parts/ScatterPoint.js';
import Painter from './painter/Painter.js';

import ObjectPool from '../../support/ObjectPool.js';
import Constants from '../../support/Constants.js';
import Styles from '../../support/Styles.js';
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
        this._xAxisInfo_Out = new VAxisInfoBase_Out();
        this._yAxisInfo_Out = new VAxisInfoBase_Out();

        this._itemArray = [];                           //存放散点对象的二维数组
        this._itemPool = null;                          //散点对象池

        this._mousePosition = { x: -1, y: -1 };

        this._parentDivClassName = 'scatterChartDiv';    //样式名
        this._tipDivClassName = 'scatterChartTipDiv';
        this._secondColClassName = 'secondCol';

        this._twEngine = new TWEngine();     //缓动动画相关


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
        this._itemPool = new ObjectPool(ScatterPoint);

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
            schema = this.chartInfo_In.schema,
            secondColClassName = this._secondColClassName,
            table, row, td,
            i;

        //隐藏tip
        tipDiv.style.display = 'none';

        //删除Table对象的所有行
        table = tipDiv.childNodes[1];
        table.innerHTML = '';

        //生成Table的2行
        for (i = 0; i < 2; i++) {
            //创建行
            row = table.insertRow();

            //创建第一列，并插入span
            td = row.insertCell();
            td.innerHTML = schema[i];

            //创建第二列，并设定样式名
            td = row.insertCell();
            td.className = secondColClassName;
        }
    }


    _getItemAndComputeMinMax () {

        let xAxisInfo_In = this.xAxisInfo_In,
            xAxisInfo_Out = this._xAxisInfo_Out,

            yAxisInfo_In = this.yAxisInfo_In,
            yAxisInfo_Out = this._yAxisInfo_Out,

            series = this.chartInfo_In.series,
            itemPool = this._itemPool,
            itemArray = this._itemArray,

            data,
            d,

            item,
            num,

            i, j, len1, len2;

        //(1)遍历第一个系列的全部数据，找到第一个有效数据，为最大最小赋初值
        data = series[0].data;
        len1 = data.length;
        for (i = 0; i < len1; i++) {
            d = data[i];
            if (d[0] != Constants.DIRTY &&
                d[1] != Constants.DIRTY) {
                xAxisInfo_Out.min = xAxisInfo_Out.max = d[0];
                yAxisInfo_Out.min = yAxisInfo_Out.max = d[1];
                break;
            }
        }


        //(2)从池中取出项目对象，同时求得最大最小值
        len1 = series.length;
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

    }


    _computeValueAxisOtherInfo (axisType, vAxisInfo_In, vAxisInfo_Out) {
        let canvas = this._canvas,
            chartInfo_In = this.chartInfo_In,
            chartPixelWidth, chartPixelHeight,
            scaleUnit,
            arr,
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
        chartPixelWidth = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
        chartPixelHeight = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;

        if (axisType == Constants.X_AXIS) {
            vAxisInfo_Out.unitValueSize = chartPixelWidth / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
            vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
            vAxisInfo_Out.originPosition = chartInfo_In.bodyLeft + vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
        } else {
            vAxisInfo_Out.unitValueSize = chartPixelHeight / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
            vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
            vAxisInfo_Out.originPosition = canvas.height - chartInfo_In.bodyBottom - vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
        }

    }


    _setItemPositionAndTween () {
        let chartInfo_In = this.chartInfo_In,

            xAxisInfo_Out = this._xAxisInfo_Out,
            yAxisInfo_Out = this._yAxisInfo_Out,

            itemArr = this._itemArray,
            item,

            twEngine = this._twEngine,
            tweenCallBack = this._tweenCallBack,
            from, to, twData, twAction,
            twDataArr = [],

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
                item.x = xAxisInfo_Out.originPosition + xAxisInfo_Out.unitValueSize * (item.valueX - xAxisInfo_Out.originValue);
                item.y = yAxisInfo_Out.originPosition - yAxisInfo_Out.unitValueSize * (item.valueY - yAxisInfo_Out.originValue);

                //设置缓动数据
                from = [0];
                to = [chartInfo_In.radius];

                twData = twEngine.getTWData();
                twData.setData(item, from, to, tweenCallBack);
                twDataArr.push(twData);
            }
        }

        twAction = twEngine.getTWAction();
        twAction.setData(twDataArr, TWAlgorithm.Bounce.easeOut, 500);

        twEngine.setFirstTWAction(twAction);

    }


    _addOrRemoveEventListener (command) {
        let canvas = this._canvas,

            chartInfo_In = this.chartInfo_In,

            xAxisInfo_Out = this._xAxisInfo_Out,
            yAxisInfo_Out = this._yAxisInfo_Out,

            left = chartInfo_In.bodyLeft,　　　　　　　　　　　　　　　　　//图表绘制区域的边界
            right = canvas.width - chartInfo_In.bodyRight,
            top = chartInfo_In.bodyTop,
            bottom = canvas.height - chartInfo_In.bodyBottom,

            tip = this._tipDiv,
            table,

            rect,       //Canvas包围盒相关
            num,

            me = this;

        function doMouseMove (e) {
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
                me._mousePosition);

            //判断鼠标是否位于图表数据显示区域，如果不是则隐藏tip，然后退出
            if (me._mousePosition.x < left ||
                me._mousePosition.x > right ||
                me._mousePosition.y < top ||
                me._mousePosition.y > bottom) {
                //隐藏
                tip.style.display = 'none';

                me._status = Status.STEP5;

            } else {

                //显示
                tip.style.display = 'block';

                //更新tip
                table = tip.childNodes[1];

                num = (me._mousePosition.x - xAxisInfo_Out.originPosition) / xAxisInfo_Out.unitValueSize;
                num += xAxisInfo_Out.originValue;
                table.rows[0].cells[1].innerText = num.toFixed(xAxisInfo_Out.decimalDigit);

                num = (yAxisInfo_Out.originPosition - me._mousePosition.y) / yAxisInfo_Out.unitValueSize;
                num += yAxisInfo_Out.originValue;
                table.rows[1].cells[1].innerText = num.toFixed(yAxisInfo_Out.decimalDigit);

                //移动tip
                //设定tip的X坐标
                num = tip.offsetWidth + Styles.TIP_LOCATION_OFFSET;
                if (me._mousePosition.x + num > rect.width) {
                    tip.style.left = (me._mousePosition.x - num) + 'px';
                } else {
                    tip.style.left = (me._mousePosition.x + Styles.TIP_LOCATION_OFFSET) + 'px';
                }

                //设定tip的Y坐标
                num = tip.offsetHeight + Styles.TIP_LOCATION_OFFSET;
                if (me._mousePosition.y + num > rect.height) {
                    tip.style.top = (me._mousePosition.y - num) + 'px';
                } else {
                    tip.style.top = (me._mousePosition.y + Styles.TIP_LOCATION_OFFSET) + 'px';
                }

                me._status = Status.STEP4;
            }

        }

        function doMouseOut (e) {
            //隐藏
            tip.style.display = 'none';

            me._status = Status.STEP6;
        }

        //执行
        if (command == Constants.ADD && me._eventListenersAddedFlag == false) {
            me._canvas.addEventListener('mousemove', doMouseMove);
            me._canvas.addEventListener('mouseout', doMouseOut);
            me._eventListenersAddedFlag = true;
        } else if (command == Constants.REMOVE && me._eventListenersAddedFlag == true) {
            me._canvas.removeEventListener('mousemove', doMouseMove);
            me._canvas.removeEventListener('mouseout', doMouseOut);
            me._eventListenersAddedFlag = false;

        }

    }


    _startPaint () {
        let me = this;

        function paint () {
            switch (me._status) {
                case Status.STEP1:

                    me._paint();
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

                    me._paint();     //缓存绘图表面

                    //添加事件监听器
                    me._addOrRemoveEventListener(Constants.ADD);

                    me._status = Status.WAITING;
                    break;

                case Status.STEP4:
                case Status.STEP5:

                    me._paint();

                    me._status = Status.WAITING;
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