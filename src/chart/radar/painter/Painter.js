import Status from '../../../support/Status.js';
import Styles from '../../../support/Styles.js';
import Constants from '../../../support/Constants.js';
import Utility from '../../../support/Utility.js';

export default class Painter {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        //Painter中无公有成员变量


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._chart;                    //图表各类数据 

        this._canvas;
        this._ctx;                     //Canvas上下文
        this._canvasSurface1;            //Canvas绘图表面
        this._canvasSurface2;            //Canvas绘图表面

        this._chartInfo_In;             //图表各类数据 

        this._indicatorPositions;
        this._labels;
        this._angles;
        this._legends;

        this._itemArray;                 //存储扇形点的数组

        this._selectedIndex;    //被选择的扇形


        ///////////////////////
        // 初始化
        ///////////////////////

    }



    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    setChart (chart) {
        this._chart = chart;

        this._canvas = chart._canvas;
        this._ctx = this._canvas.getContext('2d');

        this._chartInfo_In = chart.chartInfo_In;

        this._indicatorPositions = chart._indicatorPositions;
        this._labels = chart._labels;
        this._angles = chart._angles;
        this._legends = chart._legends;

        this._itemArray = chart._itemArray;

        this._selectedIndex = this._chartInfo_In.selectedIndex;
    }


    paint () {
        let ctx = this._ctx,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height;

        switch (this._chart._status) {
            case Status.STEP1:         //绘制图表并缓存Canvas绘图表面

                //清空画布
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                //在_ctx上绘制图表固定的内容
                this._paintTitle();
                this._paintBak();
                this._paintLabel();

                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface1 = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

                this._paintLegend();
                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface2 = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
                break;

            case Status.STEP2:         //绘制缓动效果

                ctx.putImageData(this._canvasSurface2, 0, 0);
                this._paintRadar();

                break;

            case Status.STEP4:         //绘制选择

                ctx.putImageData(this._canvasSurface1, 0, 0);
                this._paintLegend();
                this._paintRadar();

                break;
        }
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _paintTitle () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In;

        ctx.save();

        ctx.font = Styles.TITLE_FONT;
        ctx.textAlign = Constants.TEXT_ALIGN_LEFT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;
        ctx.fillText(chartInfo_In.title, chartInfo_In.titleLeft, chartInfo_In.titleTop);

        ctx.restore();
    }


    _paintBak () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            indicatorPositions = this._indicatorPositions,

            pointItem,
            obj,

            points1 = [], points2 = [],

            rate,
            x1, x2, y1, y2,
            i, j, len1, len2, len3;


        ctx.save();

        //设置样式
        ctx.lineWidth = Styles.RADAR_BAK_LINE_WIDTH;
        ctx.strokeStyle = Styles.RADAR_BAK_LINE_COLOR;
        ctx.fillStyle = Styles.RADAR_BAK_FILL_COLOR;

        //平移到中心
        ctx.translate(chartInfo_In.centerX, chartInfo_In.centerY);

        //绘制带有背景颜色的多边形
        len1 = chartInfo_In.splitNumber;
        len2 = indicatorPositions.length;
        for (i = 1; i < len1; i += 2) {
            points1.length = 0;
            points2.length = 0;

            //计算相邻两个多边形各个顶点坐标
            for (j = 0; j < len2; j++) {
                pointItem = indicatorPositions[j];

                rate = i / len1;
                x1 = pointItem.x * rate;
                y1 = pointItem.y * rate;
                points1[j] = { x: x1, y: y1 };

                rate = (i + 1) / len1;
                x2 = pointItem.x * rate;
                y2 = pointItem.y * rate;
                points2[j] = { x: x2, y: y2 };
            }

            //开始新的路径
            //此后逻辑使用路径缠绕特性绘制有背景颜色的区域
            ctx.beginPath();

            //顺时针连接第一个多边形所有顶点
            pointItem = points1[0];
            ctx.moveTo(pointItem.x, pointItem.y);

            len3 = points1.length;
            for (j = 1; j < len3; j++) {
                obj = points1[j];

                ctx.lineTo(obj.x, obj.y);
            }

            obj = points1[0];
            ctx.lineTo(obj.x, obj.y);

            //逆时针连接第二个多边形所有顶点
            obj = points2[0];
            ctx.moveTo(obj.x, obj.y);

            len3 = points2.length;
            for (j = len3 - 1; j >= 0; j--) {
                obj = points2[j];

                ctx.lineTo(obj.x, obj.y);
            }

            obj = points2[0];
            ctx.lineTo(obj.x, obj.y);

            //闭合路径
            ctx.closePath();

            //填充并描边
            ctx.fill();
            ctx.stroke();

        }

        //绘制最外层多边形
        if (len1 % 2 == 1) {
            pointItem = indicatorPositions[0];
            ctx.moveTo(pointItem.x, pointItem.y);

            //循环绘制圆环
            len3 = indicatorPositions.length;
            for (i = 1; i < len3; i++) {
                pointItem = indicatorPositions[i];

                ctx.lineTo(pointItem.x, pointItem.y);
            }
            ctx.closePath();
            ctx.stroke();
        }

        //绘制中心点到最外层多边形顶点的连线
        for (j = 0; j < len2; j++) {
            pointItem = indicatorPositions[j];
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(pointItem.x, pointItem.y);
            ctx.stroke();
        }

        ctx.restore();
    }

    _paintLegend () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            legends = this._legends,
            legend,
            str,
            w, h,
            x1, x2, y1,
            i, len;

        ctx.save();

        //设置文字样式
        ctx.font = Styles.LEGEND_FONT;
        ctx.textAlign = Constants.TEXT_ALIGN_LEFT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;

        //获取文字高度
        h = Utility.getTextHeight(ctx);

        //第一个图例的位置
        x1 = chartInfo_In.legendLeft;
        y1 = chartInfo_In.legendTop;

        x2 = x1 + h + Styles.LEGEND_SHAPE_TEXT_GAP;

        //逆序依次绘制图例文字和色块
        len = legends.length;
        for (i = 0; i < len; i++) {
            legend = legends[i];

            //绘制色块
            if (legend.selected == false) {
                ctx.fillStyle = '#999999';
            } else {
                ctx.fillStyle = legend.color;
            }
            ctx.fillRect(x1, y1, h, h);

            legend.x = x1;
            legend.y = y1;

            //计算图例文字宽度
            str = legend.name;
            w = ctx.measureText(str).width;

            //绘制文字
            ctx.fillText(str, x2, y1);

            legend.width = h + Styles.LEGEND_SHAPE_TEXT_GAP + w;
            legend.height = h;
            //
            y1 += Styles.LEGEND_SHAPE_TEXT_GAP + h;

        }

        ctx.restore();
    }

    _paintRadar () {

        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            itemArray = this._itemArray,
            items, pointItem,
            legends = this._legends,
            legend,
            i, j, len1, len2;

        ctx.save();

        //设置样式
        ctx.lineWidth = Styles.RADAR_LINE_WIDTH;

        //平移到中心
        ctx.translate(chartInfo_In.centerX, chartInfo_In.centerY);

        //绘制带有背景颜色的多边形
        len1 = itemArray.length;
        for (i = 0; i < len1; i++) {
            legend = legends[i];
            if (legend.selected == false) {
                continue;
            }

            //设置填充样式
            ctx.strokeStyle = legend.color;

            //开始新路径
            ctx.beginPath();

            //获取某数据系列对应的坐标点集合
            items = itemArray[i];

            pointItem = items[0];
            ctx.moveTo(pointItem.x, pointItem.y);

            len2 = items.length;
            for (j = 1; j < len2; j++) {
                pointItem = items[j];
                ctx.lineTo(pointItem.x, pointItem.y);
            }

            //闭合路径
            ctx.closePath();

            //描边
            ctx.stroke();

        }

        ctx.restore();
    }

    _paintLabel () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            indicatorPositions = this._indicatorPositions,
            angles = this._angles,
            labels = this._labels,
            pointItem,
            angle, label, rate,
            x, y,
            i, len;

        ctx.save();

        //(1)设置共同样式
        ctx.font = Styles.RADAR_LABEL_FONT;
        ctx.fillStyle = Styles.RADAR_LABEL_COLOR;

        //平移到中心
        ctx.translate(chartInfo_In.centerX, chartInfo_In.centerY);

        //(3)绘制标签：根据标签是否绘制在扇形内部分别进行处理
        //循环绘制标签以及引导线
        rate = (chartInfo_In.radius + Styles.RADAR_LABEL_POSITION_OFFSET) / chartInfo_In.radius;
        len = indicatorPositions.length;
        for (i = 0; i < len; i++) {
            ctx.save();

            //绘制标签
            angle = angles[i];
            if (angle > -90 && angle < 90) {
                ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;
                ctx.textAlign = Constants.TEXT_ALIGN_LEFT;

            } else if (angle > 90 && angle < 270) {
                ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;
                ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;

            } else if (angle == -90) {
                ctx.textBaseline = Constants.TEXT_BASE_LINE_BOTTOM;
                ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

            } else if (angle == 90) {
                ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;
                ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

            }


            //取得扇形对象
            label = labels[i];
            pointItem = indicatorPositions[i];

            x = pointItem.x * rate;
            y = pointItem.y * rate;

            ctx.fillText(label, x, y);

            ctx.restore();

        }

        ctx.restore();

    }

}





//////////////////////////////////////////////////////////////////////////////////////////
//  利用闭包和立即执行函数创建单例
//////////////////////////////////////////////////////////////////////////////////////////
Painter.getInstance = (function () {
    let instance;

    return function () {
        if (!instance) {
            instance = new Painter();
        }

        return instance;
    }
})();