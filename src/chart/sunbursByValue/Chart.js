import ChartBase from '../../base/chart/ChartBase.js';

import ChartInfo_In from './info/ChartInfo_In.js';

import Sector from './parts/Sector.js';
import Painter from './painter/Painter.js';

import ObjectPool from '../../support/ObjectPool.js';
import Constants from '../../support/Constants.js';
import Status from '../../support/Status.js';
import Utility from '../../support/Utility.js';


export default class Chart extends ChartBase {

    constructor(parentDivID) {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////

        //用户输入（图表必备信息）
        this.chartInfo_In = new ChartInfo_In();                     //图表信息。例：图表名称


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._itemArray = [];         //存放扇形的一维数组
        this._itemPool = null;        //扇形对象池
        this._firstDeepItems = [];

        this._selectedItemArray = [];
        this._supportItemArray = [];

        this._parentDivClassName = 'sunbursByValueChartDiv';    //样式名

        this._totalValue = 0;


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

        //初始化对象池
        this._itemPool = new ObjectPool(Sector);

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

        //重新设定各种状态
        this._reset();

        //计算扇形信息
        this._getItemAndComputeSunbursInfo();

        //启动帧循环，在循环内部绘制图表
        this._startPaint();
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _check () {
        let rtn = true,
            data = this.chartInfo_In.series[0].data;

        //检查1： 数据是否为空
        if (data == null || data.length == 0) {
            rtn = false;
        }

        return rtn;
    }


    _reset () {

        let canvas = this._canvas,
            div = this._parentDiv;

        //移除鼠标事件监听器
        this._addOrRemoveEventListener(Constants.REMOVE);

        //设置尺寸
        canvas.width = div.offsetWidth;
        canvas.height = div.offsetHeight;

        //初始化图例数据、line对象数组
        this._itemArray.length = 0;
        this._firstDeepItems.length = 0;

        this._totalValue = 0;

        //从对象池中释放曾经使用过的扇形
        this._itemPool.releaseAll();

        //取消上一次绑定的动画函数
        window.cancelAnimationFrame(this._animationFrameID);
    }


    _getItemAndComputeSunbursInfo () {
        let chartInfo_In = this.chartInfo_In,
            itemArray = this._itemArray,
            firstDeepItems = this._firstDeepItems,
            item,
            radianUnit,
            angle = -90,
            i, len;


        //生成全部扇形对象
        this._createItems();

        //为Deep为0的各项目设置角度
        len = firstDeepItems.length;
        for (i = 0; i < len; i++) {
            item = firstDeepItems[i];
            item.startAngle = angle;
            item.angle = item.value / this._totalValue * 360;
            angle += item.angle;
        }

        //为所有扇形项目设置属性
        radianUnit = Constants.RADIAN_UNIT;
        len = itemArray.length;
        for (i = 0; i < len; i++) {
            item = itemArray[i];

            item.x = chartInfo_In.centerX;
            item.y = chartInfo_In.centerY;

            item.sectorRadius = chartInfo_In.sectorRadius;
            item.insideRadius = chartInfo_In.insideRadius + chartInfo_In.sectorRadius * item.deep;

            if (item.deep > 0) {
                if (item.brsupportItem == null) {
                    item.startAngle = item.parentItem.startAngle;
                } else {
                    item.startAngle = item.brsupportItem.startAngle + item.brsupportItem.angle;
                }

                item.angle = item.value / item.parentItem.value * item.parentItem.angle;

            }

            item.startRadian = item.startAngle * radianUnit;
            item.radian = item.angle * radianUnit;

            item.bisectingAngle = item.startAngle + item.angle / 2;
            item.bisectingRadian = item.bisectingAngle * radianUnit;
        }

        //将选择的项目和未选择的项目分组
        this._select(chartInfo_In.selectedIndex);
    }


    _createItems () {
        let chartInfo_In = this.chartInfo_In,
            colors = chartInfo_In.colors,
            series = chartInfo_In.series,
            itemArr = this._itemArray,
            firstDeepItems = this._firstDeepItems,
            pool = this._itemPool,
            obj,
            arr,

            me = this;

        //定义
        function create (dataArr, deep, parentItem) {
            let item,
                brsupportItem = null,
                i, len = dataArr.length;

            for (i = 0; i < len; i++) {
                obj = dataArr[i];

                item = pool.getObj();

                item.name = obj.name;

                item.deep = deep;
                item.value = parseFloat(obj.value);

                item.parentItem = parentItem;
                item.brsupportItem = brsupportItem;

                if (item.deep == 0) {
                    item.backgroundColor = colors[i % len];
                    item.backgroundColorAlpha = 1.0;

                    firstDeepItems.push(item);
                    me._totalValue += item.value;
                } else {
                    item.backgroundColor = parentItem.backgroundColor;
                    item.backgroundColorAlpha = parentItem.backgroundColorAlpha * 0.8;
                }

                itemArr.push(item);

                arr = obj.children;
                if (arr != null) {
                    create(arr, deep + 1, item);
                }

                brsupportItem = item;
            }
        }

        //执行
        create(series[0].data, 0, null);
    }


    _select (index) {
        let itemArray = this._itemArray,
            selectedItemArray = this._selectedItemArray,
            supportItemArray = this._supportItemArray,
            zero = Constants.CLOSE_TO_ZERO,
            deep,
            startAngle, endAngle,
            item, selectedItem,
            i, len;

        //清空数组
        selectedItemArray.length = 0;
        supportItemArray.length = 0;

        //获取项目总数
        len = itemArray.length;

        //没有项目被选择的时候
        if (index < 0) {
            for (i = 0; i < len; i++) {
                selectedItemArray[i] = itemArray[i];
            }

            return;
        }

        //有项目被选择的时候
        selectedItem = itemArray[index];
        deep = selectedItem.deep;
        startAngle = selectedItem.startAngle;
        endAngle = startAngle + selectedItem.angle;

        for (i = 0; i < len; i++) {
            item = itemArray[i];

            //判断鼠标位于哪个对象之上（这里有浮点数精度问题）
            if (item.deep >= deep &&
                item.startAngle >= startAngle &&
                endAngle - item.startAngle > zero) {
                selectedItemArray.push(item);
            } else {
                supportItemArray.push(item);
            }
        }
    }


    _addOrRemoveEventListener (command) {
        let canvas = this._canvas,
            chartInfo_In = this.chartInfo_In,
            itemArray = this._itemArray,
            item,

            rect,
            position = { x: -1, y: -1 },

            i, len,

            me = this;

        function doMouseClick (e) {
            //获取鼠标相对于Canvas的位置
            rect = me._canvas.getBoundingClientRect();
            Utility.windowToCanvas(rect.left,
                rect.top,
                rect.width,
                rect.height,
                canvas.width,
                canvas.height,
                e.clientX,
                e.clientY,
                position);

            //根据鼠标位置，找到鼠标位于哪个对象之上
            len = itemArray.length;
            for (i = 0; i < len; i++) {
                item = itemArray[i];

                //判断鼠标位于哪个对象之上
                if (item.isPointInPath(position.x, position.y) == true) {
                    if (chartInfo_In.selectedIndex == i) {
                        chartInfo_In.selectedIndex = -1;

                    } else {
                        chartInfo_In.selectedIndex = i;
                    }

                    me._select(chartInfo_In.selectedIndex);
                    me._status = Status.STEP3;
                    break;
                }
            }

        }

        //执行
        if (command == Constants.ADD && me._eventListenersAddedFlag == false) {
            me._canvas.addEventListener('click', doMouseClick);
            me._eventListenersAddedFlag = true;
        } else if (command == Constants.REMOVE && me._eventListenersAddedFlag == true) {
            me._canvas.removeEventListener('click', doMouseClick);
            me._eventListenersAddedFlag = false;
        }

    }


    _startPaint () {
        let me = this;

        function paint () {
            switch (me._status) {
                case Status.STEP1:

                    me._paint();        //绘制图表框架（标题、图例等），为缓动效果做准备                   
                    me._status = Status.STEP2;
                    break;

                case Status.STEP2:

                    me._addOrRemoveEventListener(Constants.ADD);

                    me._status = Status.WAITING;
                    break;

                case Status.STEP3:

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

}
