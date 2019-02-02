import ChartBase from '../../base/chart/ChartBase.js';

import ChartInfo_In from './info/ChartInfo_In.js';

import PieItem from './parts/PieItem.js';
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
        this.chartInfo_In = new ChartInfo_In();                     //图表信息。例：图表名称

        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._canvasBak = null;       //不显示的Canvas，用于后台绘制

        this._itemArray = [];         //存放扇形的一维数组
        this._itemPool = null;        //扇形对象池

        this._maskRadian = 0;      //用于缓动效果的参数
        this._maskRadius = 0;

        this._twEngine = new TWEngine();                //缓动动画相关
        this._tweenCallBackBind = this._tweenCallBack.bind(this);
        this._parentDivClassName = 'pieChartDiv';    //样式名


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
        this._canvasBak = document.createElement('canvas');
        this._parentDiv.appendChild(this._canvas);

        //初始化对象池
        this._itemPool = new ObjectPool(PieItem);

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

        //计算扇形信息
        this._getItemAndComputePieInfo();

        //设置缓动动画
        this._setTween();

        //启动帧循环，在循环内部绘制图表
        this._startPaint();
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _check () {
        let rtn = true;

        //检查1： 数据是否为空
        if (this.chartInfo_In.series.length != 1) {
            rtn = false;
        }

        return rtn;
    }


    _reset () {

        let canvas = this._canvas,
            canvasBak = this._canvasBak,
            div = this._parentDiv,
            chartInfo_In = this.chartInfo_In,
            itemArr = this._itemArray,
            centerX = chartInfo_In.centerX,
            centerY = chartInfo_In.centerY,
            offsetX, offsetY,
            canvasWidth, canvasHeight,
            i, len;

        //移除鼠标事件监听器
        this._addOrRemoveEventListener(Constants.REMOVE);

        //设置尺寸
        canvasWidth = canvas.width = canvasBak.width = div.offsetWidth;
        canvasHeight = canvas.height = canvasBak.height = div.offsetHeight;

        //计算缓动效果需要的半径
        if (centerX >= canvasWidth / 2) {
            if (centerY >= canvasHeight / 2) {
                this._maskRadius = Math.sqrt(centerX * centerX + centerY * centerY);
            } else {
                offsetX = centerX;
                offsetY = canvasHeight - centerY;
                this._maskRadius = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            }
        } else {
            if (centerY >= canvasHeight / 2) {
                offsetX = canvasWidth - centerX;
                offsetY = centerY;
                this._maskRadius = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            } else {
                offsetX = canvasWidth - centerX;
                offsetY = canvasHeight - centerY;
                this._maskRadius = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            }
        }


        //初始化图例数据、line对象数组
        itemArr.length = 0;

        len = chartInfo_In.series.length;
        for (i = 0; i < len; i++) {
            itemArr[i] = [];
        }

        //从对象池中释放曾经使用过的扇形
        this._itemPool.releaseAll();

        //释放缓动资源
        this._twEngine.releaseAllTWData();
        this._twEngine.releaseAllTWAction();

        //取消上一次绑定的动画函数
        window.cancelAnimationFrame(this._animationFrameID);
    }


    _getItemAndComputePieInfo () {
        let chartInfo_In = this.chartInfo_In,
            colors = chartInfo_In.colors,
            itemArray = this._itemArray[0],
            pool = this._itemPool,
            arr,
            total,
            obj,
            item,
            currentstartAngle,
            radianUnit,
            i, len;

        radianUnit = Constants.RADIAN_UNIT;

        total = 0;
        arr = chartInfo_In.series[0].data;
        len = arr.length;

        for (i = 0; i < len; i++) {
            obj = arr[i];
            total += Number(obj.value);
        }

        //生成扇形项目，设置属性
        currentstartAngle = -90;
        for (i = 0; i < len; i++) {
            obj = arr[i];

            item = pool.getObj();

            item.index = i;
            item.name = obj.name;
            item.value = obj.value;

            item.percent = item.value / total;

            item.startAngle = currentstartAngle;
            item.startRadian = currentstartAngle * radianUnit;

            item.angle = item.percent * 360;
            item.radian = item.angle * radianUnit;

            item.bisectingAngle = item.startAngle + item.angle / 2;
            item.bisectingRadian = item.bisectingAngle * radianUnit;

            item.insideRadius = chartInfo_In.insideRadius;
            item.sectorRadius = chartInfo_In.sectorRadius;

            item.backgroundColor = colors[i];

            if (i == chartInfo_In.selectedIndex) {
                this._setItemPosition(item, true);
            } else {
                this._setItemPosition(item, false);
            }

            itemArray.push(item);

            currentstartAngle += item.angle;
        }

    }


    _setItemPosition (item, selectedFlag) {
        let chartInfo_In = this.chartInfo_In,
            centerX = chartInfo_In.centerX,
            centerY = chartInfo_In.centerY,
            num;

        if (selectedFlag == true) {
            num = Styles.PIE_SELECTOR_TRANSLATE * Math.cos(item.bisectingRadian);
            item.x = centerX + num;

            num = Styles.PIE_SELECTOR_TRANSLATE * Math.sin(item.bisectingRadian);
            item.y = centerY + num;

        } else {
            item.x = centerX;
            item.y = centerY;
        }
    }


    _setTween () {
        let radianUnit = Constants.RADIAN_UNIT,
            twEngine = this._twEngine,
            tweenCallBackBind = this._tweenCallBackBind,
            from, to, twData, twAction;

        from = [1 * radianUnit];
        to = [360 * radianUnit];

        twData = twEngine.getTWData();
        twData.setData(null, from, to, tweenCallBackBind);

        twAction = twEngine.getTWAction();
        twAction.setData([twData], TWAlgorithm.linear, 1000);

        twEngine.setFirstTWAction(twAction);

    }


    _addOrRemoveEventListener (command) {
        let canvas = this._canvas,
            chartInfo_In = this.chartInfo_In,
            itemArray = this._itemArray,
            items,
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
            items = itemArray[0];
            len = items.length;
            for (i = 0; i < len; i++) {
                item = items[i];

                //判断鼠标位于哪个对象之上
                if (item.isPointInPath(position.x, position.y) == true) {
                    if (chartInfo_In.selectedIndex == i) {
                        me._setItemPosition(item, false);
                        chartInfo_In.selectedIndex = -1;

                    } else if (chartInfo_In.selectedIndex == -1) {
                        me._setItemPosition(item, true);
                        chartInfo_In.selectedIndex = i;

                    } else {
                        me._setItemPosition(items[chartInfo_In.selectedIndex], false);
                        me._setItemPosition(item, true);
                        chartInfo_In.selectedIndex = i;
                    }

                    me._status = Status.STEP4;
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

                    me._paint();                                      //绘制图表并保存绘图表面
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

                    me._paint();
                    me._addOrRemoveEventListener(Constants.ADD);

                    me._status = Status.WAITING;
                    break;

                case Status.STEP4:

                    me._paint();   //绘制选择项

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
        this._maskRadian = resultArray[0];
    }

}