import ChartBase from '../../base/chart/ChartBase.js';
import PartBase from '../../base/chart/PartBase.js';

import ChartInfo_In from './info/ChartInfo_In.js';

import Legend from './parts/Legend.js';
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
        this.chartInfo_In = new ChartInfo_In();                     //图表信息。例：图表名称

        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._angles = [];                          //每个指标所在的角度  
        this._radians = [];                          //每个指标所在的角度对应的弧度
        this._labels = [];
        this._maxData = [];
        this._legends = [];

        this._itemArray = [];         //存放扇形的一维数组
        this._indicatorPositions = [];

        this._pointPool = null;        //点对象对象池
        this._legendPool = null;        //图例对象对象池

        this._parentDivClassName = 'radarChartDiv';    //样式名

        this._twEngine = new TWEngine();     //缓动动画相关
        this._tweenCallBackBind = this._tweenCallBack.bind(this);


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
        this._pointPool = new ObjectPool(PartBase);
        this._legendPool = new ObjectPool(Legend);

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
        this._getItemsAndSetTween();

        //启动帧循环，在循环内部绘制图表
        this._startPaint();
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _check () {
        let rtn = true;

        //检查1： 数据是否为空
        if (this.chartInfo_In.series.length == 0) {
            rtn = false;
        }

        return rtn;
    }


    _reset () {

        let canvas = this._canvas,
            div = this._parentDiv,
            itemArr = this._itemArray,
            i, len;


        //移除鼠标事件监听器
        this._addOrRemoveEventListener(Constants.REMOVE);

        //设置尺寸
        canvas.width = div.offsetWidth;
        canvas.height = div.offsetHeight;

        //初始化图例数据、line对象数组
        itemArr.length = 0;
        len = this.chartInfo_In.series.length;
        for (i = 0; i < len; i++) {
            itemArr[i] = [];
        }

        //从对象池中释放曾经使用过的扇形
        this._pointPool.releaseAll();
        this._legendPool.releaseAll();

        //释放缓动资源
        this._twEngine.releaseAllTWData();
        this._twEngine.releaseAllTWAction();

        //取消上一次绑定的动画函数
        window.cancelAnimationFrame(this._animationFrameID);
    }


    _getItemsAndSetTween () {
        let chartInfo_In = this.chartInfo_In,
            indicator = chartInfo_In.indicator,
            chartRadius = chartInfo_In.radius,
            series = chartInfo_In.series,
            colors = chartInfo_In.colors,

            itemArray = this._itemArray,

            labels = this._labels,
            maxData = this._maxData,
            angles = this._angles,
            radians = this._radians,
            legends = this._legends,

            indicatorPositions = this._indicatorPositions,

            pointPool = this._pointPool,
            legendPool = this._legendPool,

            twEngine = this._twEngine,
            twFlag,
            from, to, twData, twAction,
            twDataArr = [],
            tweenCallBack = this._tweenCallBack,

            i, j, len1, len2,
            angle,
            num,
            obj,
            arr,
            ser,
            point,
            p,
            radianUnit,
            radian,
            rate,

            legend;


        //【1】计算各个指标所在的角度，并存入数组
        len1 = indicator.length;
        num = 360 / len1;
        angle = -90;
        radianUnit = Constants.RADIAN_UNIT;
        for (i = 0; i < len1; i++) {
            obj = indicator[i];

            labels[i] = obj.name;
            maxData[i] = obj.max;

            angles[i] = angle;
            radians[i] = angle * radianUnit;
            angle += num;
        }

        //【3】遍历数据系列，生成项目，设置属性，并存入数组，加入到显示列表
        for (i = 0; i < len1; i++) {
            radian = radians[i];

            //计算指示点位置，存入数组
            point = pointPool.getObj();
            point.x = chartRadius * Math.cos(radian);
            point.y = chartRadius * Math.sin(radian);
            indicatorPositions[i] = point;
        }

        len1 = series.length;
        for (i = 0; i < len1; i++) {
            ser = series[i];
            twFlag = ser.selected;

            legend = legendPool.getObj();
            legend.name = ser.name;
            legend.color = colors[i];
            legend.selected = ser.selected;
            legends[i] = legend;

            arr = [];
            len2 = ser.data.length;
            for (j = 0; j < len2; j++) {
                //根据数值计算比率
                num = ser.data[j];
                rate = num / maxData[j];

                //根据指标点和比率计算数据系列点的位置，并加入数组
                p = indicatorPositions[j];
                point = pointPool.getObj();
                point.x = p.x * rate;
                point.y = p.y * rate;
                arr[j] = point;

                //取得缓动数据
                if (twFlag == true) {
                    from = [0, 0];
                    to = [point.x, point.y];

                    twData = twEngine.getTWData();
                    twData.setData(point, from, to, tweenCallBack);
                    twDataArr.push(twData);
                }
            }

            itemArray[i] = arr;
        }

        twAction = twEngine.getTWAction();
        twAction.setData(twDataArr, TWAlgorithm.Bounce.easeOut, 1000);

        twEngine.setFirstTWAction(twAction);

    }


    _addOrRemoveEventListener (command) {
        let canvas = this._canvas,

            legends = this._legends,
            legend,
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
            len = legends.length;
            for (i = 0; i < len; i++) {
                legend = legends[i];

                //判断鼠标位于哪个对象之上
                if (legend.isPointInPath(position.x, position.y) == true) {
                    legend.selected = !legend.selected;

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
                case Status.STEP1:                    //绘制图表框架（标题、图例等），为缓动效果做准备

                    me._paint();
                    me._twEngine.start();

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
        target.x = resultArray[0];
        target.y = resultArray[1];
    }


}