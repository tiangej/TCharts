import ChartBase from '../../base/chart/ChartBase.js';
import AxisChartInfoBase_In from '../../base/info/AxisChartInfoBase_In.js';
import VAxisInfoBase_In from '../../base/info/VAxisInfoBase_In.js';
import VAxisInfoBase_Out from '../../base/info/VAxisInfoBase_Out.js';

import CAxisInfo_In from './info/CAxisInfo_In.js';
import CAxisInfo_Out from './info/CAxisInfo_Out.js';
import Column from './parts/Column.js';
import Painter from './painter/Painter.js';

import ObjectPool from '../../support/ObjectPool.js';
import Constants from '../../support/Constants.js';
import Status from '../../support/Status.js';
import Utility from '../../support/Utility.js';
import Styles from '../../support/Styles.js';

import TWAlgorithm from '../../tween/TWAlgorithm.js';
import TWEngine from '../../tween/TWEngine.js';


export default class Chart extends ChartBase {

    constructor(parentDivID) {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        //用户输入（图表必备信息）
        this.chartInfo_In = new AxisChartInfoBase_In();                //图表信息。例：图表名称
        this.cAxisInfo_In = new CAxisInfo_In();                  //类目轴信息
        this.vAxisInfo_In = new VAxisInfoBase_In();           //值轴信息


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._cAxisInfo_Out = new CAxisInfo_Out();    //数据结构体(存储计算结果，供内部用)
        this._vAxisInfo_Out = new VAxisInfoBase_Out();

        this._itemArray = [];         //存放柱状体的二维数组
        this._itemPool = null;        //柱状体对象池

        this._chartPixelWidth;        //图表有效尺寸
        this._chartPixelHeight;

        this._parentDivClassName = 'columnChartDiv';    //样式名
        this._tipDivClassName = 'columnChartTipDiv';
        this._thirdColClassName = 'thirdCol';

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
        this._itemPool = new ObjectPool(Column);

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
        this._computeCategoryInfo();
        this._getCategoryInterval();
        this._getItemAndComputeMinMax();   //获取项目对象，计算值轴的最大/最小值
        this._computeValueAxisOtherInfo(Constants.Y_AXIS, this.vAxisInfo_In, this._vAxisInfo_Out);
        this._setItemSizeAndPositionAndTween();

        //启动帧循环，在循环内部绘制图表
        this._startPaint();
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _check () {
        let series,
            ser,
            i,
            len1, len2,
            rtn = true;

        series = this.chartInfo_In.series;
        len1 = this.cAxisInfo_In.categorys.length;
        len2 = series.length;

        //检查1： 数据是否为空
        if ((len1 == 0) || (len2 == 0)) {
            rtn = false;
        } else {

            //检查2： 数据系列是否与类目数据长度一致
            for (i = 0; i < len2; i++) {
                ser = series[i];
                if (ser.data.length != len1) {
                    rtn = false;
                }
            }
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
        this._chartPixelWidth = canvas.width - chartInfo_In.bodyLeft - chartInfo_In.bodyRight;
        this._chartPixelHeight = canvas.height - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;

        //初始化图例数据、Column对象数组
        itemArr.length = 0;
        len = chartInfo_In.series.length;
        for (i = 0; i < len; i++) {
            itemArr[i] = [];
        }

        //初始化Tip
        this._initTip();

        //从对象池中释放曾经使用过的柱状体
        this._itemPool.releaseAll();

        //释放缓动资源
        this._twEngine.releaseAllTWData();
        this._twEngine.releaseAllTWAction();

        //取消上一次绑定的动画函数
        window.cancelAnimationFrame(this._animationFrameID);
    }


    _initTip () {
        let tipDiv = this._tipDiv,
            colors = this.chartInfo_In.colors,
            series = this.chartInfo_In.series,
            table, row, td, span,
            i, len;

        //隐藏tip
        tipDiv.style.display = 'none';

        //删除Table对象的所有行
        table = tipDiv.childNodes[1];
        table.innerHTML = '';

        //根据数据系列循环生成Table对象
        len = series.length;
        for (i = 0; i < len; i++) {
            //创建行
            row = table.insertRow();

            //创建第一列，并插入span
            td = row.insertCell();
            span = document.createElement('span');
            span.style.backgroundColor = colors[i];
            td.appendChild(span);

            //创建第二列，并插入系列名称
            td = row.insertCell();
            td.innerHTML = series[i].name;

            //创建第三列，并设定样式名
            td = row.insertCell();
            td.className = this._thirdColClassName;
        }
    }


    _computeCategoryInfo () {
        let cAxisInfo_In = this.cAxisInfo_In,
            cAxisInfo_Out = this._cAxisInfo_Out,
            series = this.chartInfo_In.series,
            ser,
            stackName = '',
            count = 0,
            num,
            i, len;

        //(1)计算在一个分类中并排有几个柱状项目(累积的项目不算)
        len = series.length;
        for (i = 0; i < len; i++) {
            ser = series[i];
            if (ser.stackName == '' || ser.stackName != stackName) {
                count++;
                stackName = ser.stackName;
            }
        }

        //(2)计算一个分类在轴上占用的长度
        cAxisInfo_Out.categorySize = this._chartPixelWidth / cAxisInfo_In.categorys.length;

        //(3)计算一个柱状项目在轴上占用的宽度
        //       某分类中第一个柱状项目在轴上距离左侧最近刻度的距离
        if (count > 0) {
            num = cAxisInfo_Out.categorySize * cAxisInfo_In.sizeRate;
            cAxisInfo_Out.itemSize = num / count;
            cAxisInfo_Out.offsetSize = (cAxisInfo_Out.categorySize - num) / 2;
        }

    }


    _getCategoryInterval () {
        let cAxisInfo_In = this.cAxisInfo_In,
            cAxisInfo_Out = this._cAxisInfo_Out,
            categorys = cAxisInfo_In.categorys,
            ctx,
            w,
            i, len;


        //如果人为指定了间隔，则不需要做相关计算
        if (cAxisInfo_In.interval >= 0) {
            cAxisInfo_Out.interval = cAxisInfo_In.interval;

        } else {
            //计算标签文本尺寸，并存入数组，用于后面的标签重叠比较
            ctx = this._canvas.getContext('2d');
            ctx.font = Styles.LABEL_FONT;    //设置字体，这是度量文字宽度的必备条件

            len = categorys.length;
            for (i = 0; i < len; i++) {
                w = ctx.measureText(categorys[i]).width;
                cAxisInfo_Out.labelSizes[i] = { size: w, withGapSize: w + cAxisInfo_In.labelGap };
            }

            //计算间隔
            this._computeCategoryInterval();
        }

        cAxisInfo_Out.intervalSize = cAxisInfo_Out.categorySize * (cAxisInfo_Out.interval + 1);
    }


    _computeCategoryInterval () {
        //定义
        let cAxisInfo_Out = this._cAxisInfo_Out,
            categorySize = cAxisInfo_Out.categorySize,
            labelSizes = cAxisInfo_Out.labelSizes,
            distance,
            i = 0, j = 0,
            len = this.cAxisInfo_In.categorys.length;

        function compute (interval) {
            i = 0;
            j = interval + 1;

            //循环遍历数组
            while (i < len && j < len) {
                //比较相邻标签是否重叠
                distance = categorySize * (j - i) - (labelSizes[j].withGapSize + labelSizes[i].withGapSize) / 2;
                if (distance < 0) {
                    //如果重叠，间隔加一，然后递归
                    compute(interval + 1);
                    //结束本循环
                    return;
                } else {
                    //如果不重叠，为下次循环确定数组索引
                    i = j;
                    j = i + interval + 1;
                }
            }

            //如果遍历结束，设置
            cAxisInfo_Out.interval = interval;
        }

        //执行
        compute(0);
    }


    _getItemAndComputeMinMax () {

        let vAxisInfo_In = this.vAxisInfo_In,
            vAxisInfo_Out = this._vAxisInfo_Out,
            series = this.chartInfo_In.series,
            ser,

            itemPool = this._itemPool,
            itemArray = this._itemArray,
            item,

            plusArr = [],
            minusArr = [],
            stackName,

            i, j, len1, len2;

        //(1)遍历第一个系列的全部数据，找到第一个有效数据，为最大最小赋初值
        ser = series[0];
        len1 = ser.data.length;
        for (i = 0; i < len1; i++) {
            if (ser.data[i] != Constants.DIRTY) {
                vAxisInfo_Out.min = vAxisInfo_Out.max = ser.data[i];
                break;
            }
        }

        //(2)从池中取出项目对象，同时求得最大最小值
        len2 = series.length;
        for (i = 0; i < len1; i++) {
            //(2-1)初始化
            stackName = '';
            plusArr.length = minusArr.length = 0;

            //(2-2)生成项目对象
            for (j = 0; j < len2; j++) {
                //(2-2-1)取得系列
                ser = series[j];

                //(2-2-2)比较求得最值
                //比较该系列和上一系列是否具有相同的(累积名称)
                //如果(累积名称)不相同或为null(不需要累积)，则把此前积累的数据传给比较函数，然后初始化相关变量，为新的累积做准备
                if (ser.stackName == '' || ser.stackName != stackName) {
                    //比较
                    this._compare(plusArr, minusArr);
                    //为新的累积做准备
                    stackName = ser.stackName;                             //更新(累积名称)，用于此后的比较
                    plusArr.length = minusArr.length = 0;                        //清空数组
                }

                //(2-2-3)从池中获取项目对象，并重新设置属性
                item = itemPool.getObj();

                //判断是否为脏数据(无效数据)
                if (ser.data[i] == Constants.DIRTY) {
                    item.dirtyFlag = true;
                    item.value = Number.NaN;
                    item.stackValue = Number.NaN;

                } else {
                    item.dirtyFlag = false;
                    item.value = ser.data[i];
                    item.stackValue = 0;
                }

                item.stackName = ser.stackName;

                //(2-2-4)加入到数组
                itemArray[j].push(item);

                //(2-2-5)积累相同(累积名称)的项目，用于(2-2-2)的比较
                if (item.dirtyFlag == false) {
                    if (item.value >= 0) {
                        plusArr.push(item);
                    } else if (item.value < 0) {
                        minusArr.push(item);
                    }
                }
            }

            //(2-3)最后一次比较
            this._compare(plusArr, minusArr);
        }

        //(3)判断用户是否指定了最大最小值
        if (vAxisInfo_In.min != Number.MIN_VALUE && vAxisInfo_In.min < vAxisInfo_Out.min) {
            vAxisInfo_Out.min = vAxisInfo_In.min;
        }
        if (vAxisInfo_In.max != Number.MAX_VALUE && vAxisInfo_In.max > vAxisInfo_Out.max) {
            vAxisInfo_Out.max = vAxisInfo_In.max;
        }

        //(4)判断是否在值轴上扩展 0，并据此调整最值
        if (vAxisInfo_In.zeroExtend == true) {
            if (vAxisInfo_Out.min > 0 && vAxisInfo_Out.max > 0)     //同为正数
            {
                vAxisInfo_Out.min = 0;
            } else if (vAxisInfo_Out.min < 0 && vAxisInfo_Out.max < 0) {     //同为负数
                vAxisInfo_Out.max = 0;
            }
        }

    }

    _compare (plusArr, minusArr) {
        //累计正值，并比较最值
        let item,
            num,
            i, len;

        num = 0;
        len = plusArr.length;
        if (len > 0) {
            for (i = 0; i < len; i++) {
                item = plusArr[i];
                item.stackValue = num;
                num += item.value;
            }
            this._setMinMax(num);
        }

        //累计负值，并比较最值
        num = 0;
        len = minusArr.length;
        if (len > 0) {
            for (i = 0; i < len; i++) {
                item = minusArr[i];
                item.stackValue = num;
                num += item.value;
            }
            this._setMinMax(num);
        }

    }


    _setMinMax (num) {
        let vAxisInfo_Out = this._vAxisInfo_Out;

        if (num < vAxisInfo_Out.min) {
            vAxisInfo_Out.min = num;
        } else if (num > vAxisInfo_Out.max) {
            vAxisInfo_Out.max = num;
        }
    }


    _computeValueAxisOtherInfo (axisType, vAxisInfo_In, vAxisInfo_Out) {
        let canvas = this._canvas,
            chartInfo_In = this.chartInfo_In,
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
        if (axisType == Constants.X_AXIS) {
            vAxisInfo_Out.unitValueSize = this._chartPixelWidth / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
            vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
            vAxisInfo_Out.originPosition = chartInfo_In.bodyLeft + vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
        } else {
            vAxisInfo_Out.unitValueSize = this._chartPixelHeight / (vAxisInfo_Out.maxScale - vAxisInfo_Out.minScale);
            vAxisInfo_Out.scaleUnitSize = vAxisInfo_Out.unitValueSize * vAxisInfo_Out.scaleUnit;
            vAxisInfo_Out.originPosition = canvas.height - chartInfo_In.bodyBottom - vAxisInfo_Out.scaleUnitSize * vAxisInfo_Out.originIndex;
        }

    }


    _setItemSizeAndPositionAndTween () {

        let chartInfo_In = this.chartInfo_In,
            cAxisInfo_Out = this._cAxisInfo_Out,
            vAxisInfo_Out = this._vAxisInfo_Out,
            itemArr = this._itemArray,
            item,
            stackName = '',
            offset,

            twEngine = this._twEngine,
            tweenCallBack = this._tweenCallBack,
            from, to, twData, twAction,
            twDataArr = [],

            num, arr,
            i, j, len1, len2,
            y;

        //预先算出一些中间结果，用于此后的循环
        y = vAxisInfo_Out.originPosition;

        //循环项目对象进行设定
        len1 = itemArr.length;
        len2 = itemArr[0].length;
        for (i = 0; i < len1; i++) {
            //获取指定系列对应的项目数组
            arr = itemArr[i];
            item = arr[0];

            //计算偏移量
            if (i == 0) {
                offset = chartInfo_In.bodyLeft + cAxisInfo_Out.offsetSize;
            } else {
                if (item.stackName == '' || item.stackName != stackName) {
                    offset += cAxisInfo_Out.itemSize;
                }
            }

            stackName = item.stackName;

            //为各个项目设定大小和位置
            for (j = 0; j < len2; j++) {
                //取得项目对象
                item = arr[j];
                if (item.dirty == true) continue;

                //设置坐标
                item.x = Utility.adjustPosition(offset + j * cAxisInfo_Out.categorySize);
                if (item.value >= 0) {
                    item.y = y - vAxisInfo_Out.unitValueSize * (item.value + item.stackValue - vAxisInfo_Out.originValue);
                } else {
                    item.y = y - vAxisInfo_Out.unitValueSize * (item.stackValue - vAxisInfo_Out.originValue);
                }

                item.y = Utility.adjustPosition(item.y);


                //设置项目尺寸（将值转换为尺寸（需根据是否<累积>来计算值））
                if (item.stackValue != 0) {
                    num = Math.abs(item.value);
                } else {
                    num = Math.abs(item.value - vAxisInfo_Out.originValue);
                }

                item.width = cAxisInfo_Out.itemSize;
                item.height = vAxisInfo_Out.unitValueSize * num;

                //设置缓动数据
                from = [0];
                to = [item.height];

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

            chartInfo_In = this.chartInfo_In,
            series = chartInfo_In.series,
            ser,

            left = chartInfo_In.bodyLeft,　　　　　　　　　　　　　　　　　//图表绘制区域的边界
            right = canvas.width - chartInfo_In.bodyRight,
            top = chartInfo_In.bodyTop,
            bottom = canvas.height - chartInfo_In.bodyBottom,

            categorys = this.cAxisInfo_In.categorys,
            categorySize = this._cAxisInfo_Out.categorySize,

            tip = this._tipDiv,
            table, p,

            rect,       //Canvas包围盒相关

            num,
            index,
            position = { x: -1, y: -1 },

            i, len,
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
                position);

            //判断鼠标是否位于图表数据显示区域，如果不是则隐藏tip，然后退出
            if (position.x < left ||
                position.x > right ||
                position.y < top ||
                position.y > bottom) {
                tip.style.display = 'none';
                return;
            }

            //根据位置计算其代表的类目索引
            index = Math.floor((position.x - left) / categorySize);

            //显示tip
            tip.style.display = 'block';

            //更新tip
            p = tip.childNodes[0];
            if (p.innerText == '' || p.innerText != categorys[index]) {
                //更新类目名称
                p.innerText = categorys[index];

                //更新数据系列
                table = tip.childNodes[1];
                len = series.length;
                for (i = 0; i < len; i++) {
                    ser = series[i];
                    table.rows[i].cells[2].innerText = ser.data[index];
                }
            }

            //移动tip
            //设定tip的X坐标
            num = tip.offsetWidth + Styles.TIP_LOCATION_OFFSET;
            if (position.x + num > rect.width) {
                tip.style.left = (position.x - num) + 'px';
            } else {
                tip.style.left = (position.x + Styles.TIP_LOCATION_OFFSET) + 'px';
            }

            //设定tip的Y坐标
            num = tip.offsetHeight + Styles.TIP_LOCATION_OFFSET;
            if (position.y + num > rect.height) {
                tip.style.top = (position.y - num) + 'px';
            } else {
                tip.style.top = (position.y + Styles.TIP_LOCATION_OFFSET) + 'px';
            }

            //更新选择项，并重绘
            if (index != chartInfo_In.selectedIndex) {
                chartInfo_In.selectedIndex = index;
                me._status = Status.STEP4;
            }

        }

        function doMouseOut (e) {
            //隐藏tip
            tip.style.display = 'none';
        }


        //执行
        if (command == Constants.ADD && me._eventListenersAddedFlag == false) {
            canvas.addEventListener('mousemove', doMouseMove);
            canvas.addEventListener('mouseout', doMouseOut);
            me.eventListenersAddedFlag = true;
        } else if (command == Constants.REMOVE && me._eventListenersAddedFlag == true) {
            canvas.removeEventListener('mousemove', doMouseMove);
            canvas.removeEventListener('mouseout', doMouseOut);
            me.eventListenersAddedFlag = false;

        }

    }


    _startPaint () {
        let me = this;

        function paint () {
            switch (me._status) {
                case Status.STEP1:
                    me._paint();                           //绘制图表并保存绘图表面
                    me._twEngine.start();                  //启动缓动，从下一帧开始缓动

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

                    me._paint();                     //缓存Canvas绘图表面，绘制选项
                    me._addOrRemoveEventListener(Constants.ADD);

                    me._status = Status.WAITING;
                    break;

                case Status.STEP4:

                    me._paint();                       //恢复Canvas绘图表面，绘制选项

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
        target.height = resultArray[0];
    }

}
