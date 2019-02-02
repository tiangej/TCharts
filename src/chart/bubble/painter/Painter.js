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
        this._canvasSurface;            //Canvas绘图表面

        this._chartInfo_In;             //图表各类数据 
        this._xAxisInfo_In;
        this._xAxisInfo_Out;            //数值轴输入、输出数据
        this._yAxisInfo_In;
        this._yAxisInfo_Out;

        this._itemArray;                //存储散点的数组

        this._xAxisLabelCount;          //值轴数字标签个数
        this._yAxisLabelCount;


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
        this._ctx = this._canvas.getContext('2d');;

        this._chartInfo_In = chart.chartInfo_In;
        this._xAxisInfo_In = chart.xAxisInfo_In;
        this._xAxisInfo_Out = chart._xAxisInfo_Out;
        this._yAxisInfo_In = chart.yAxisInfo_In;
        this._yAxisInfo_Out = chart._yAxisInfo_Out;

        this._itemArray = chart._itemArray;

        //计算供此后使用
        //值轴标签个数
        this._xAxisLabelCount = Math.floor((this._xAxisInfo_Out.maxScale - this._xAxisInfo_Out.minScale) / this._xAxisInfo_Out.scaleUnit) + 1;
        this._yAxisLabelCount = Math.floor((this._yAxisInfo_Out.maxScale - this._yAxisInfo_Out.minScale) / this._yAxisInfo_Out.scaleUnit) + 1;
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
                this._paintLegend();
                this._paintGrid();
                this._paintAxis();
                this._paintLabel();
                this._paintAxisName();

                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
                break;

            case Status.STEP2:         //绘制缓动效果

                //恢复this._ctx的绘图表面
                ctx.putImageData(this._canvasSurface, 0, 0);

                //绘制散点
                this._paintBubbles();

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

    _paintLegend () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            series = chartInfo_In.series,
            colors = chartInfo_In.colors,
            canvasWidth = this._canvas.width,
            w, h,
            x,
            i, len,
            str;

        ctx.save();

        //设置文字样式
        ctx.font = Styles.LEGEND_FONT;
        ctx.textAlign = Constants.TEXT_ALIGN_LEFT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;

        //获取文字高度
        h = Utility.getTextHeight(ctx);

        //计算最后一个图例文字的结束点
        x = canvasWidth - chartInfo_In.legendRight;

        //逆序依次绘制图例文字和色块
        len = series.length;
        for (i = len - 1; i >= 0; i--) {
            //图例数据
            str = series[i].name;

            //根据图例文字宽度计算文字起始位置
            w = ctx.measureText(str).width;
            x -= w;

            //绘制文字
            ctx.fillStyle = Styles.FONT_FILL_COLOR;
            ctx.fillText(str, x, chartInfo_In.legendTop);

            //计算色块位置
            x -= Styles.LEGEND_SHAPE_TEXT_GAP + h;

            //绘制色块
            ctx.fillStyle = colors[i];
            ctx.fillRect(x, chartInfo_In.legendTop, h, h);

            //间隔
            x -= Styles.LEGEND_GAP;
        }

        ctx.restore();
    }

    _paintGrid () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            xScaleUnitSize = this._xAxisInfo_Out.scaleUnitSize,
            yScaleUnitSize = this._yAxisInfo_Out.scaleUnitSize,
            xAxisLabelCount = this._xAxisLabelCount,
            yAxisLabelCount = this._yAxisLabelCount,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,
            x1, x2, y1, y2,
            num,
            i;

        ctx.save();

        //设置样式
        ctx.lineWidth = Styles.GRID_LINE_WIDTH;
        ctx.strokeStyle = Styles.GRID_LINE_COLOR;
        ctx.setLineDash(Styles.GRID_LINE_DASH);

        //绘制横向虚线
        x1 = chartInfo_In.bodyLeft;
        x2 = canvasWidth - chartInfo_In.bodyRight;
        num = canvasHeight - chartInfo_In.bodyBottom;

        for (i = 0; i < yAxisLabelCount; i++) {
            y1 = Utility.adjustPosition(num - yScaleUnitSize * i);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y1);
            ctx.stroke();
        }

        //绘制纵向虚线
        y1 = chartInfo_In.bodyTop;
        y2 = canvasHeight - chartInfo_In.bodyBottom;
        num = chartInfo_In.bodyLeft;

        for (i = 0; i < xAxisLabelCount; i++) {
            x1 = Utility.adjustPosition(num + xScaleUnitSize * i);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1, y2);
            ctx.stroke();
        }

        ctx.restore();
    }

    _paintAxis () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,

            xScaleUnitSize = this._xAxisInfo_Out.scaleUnitSize,
            yScaleUnitSize = this._yAxisInfo_Out.scaleUnitSize,

            xOriginPosition = this._xAxisInfo_Out.originPosition,
            yOriginPosition = this._yAxisInfo_Out.originPosition,

            xAxisLabelCount = this._xAxisLabelCount,
            yAxisLabelCount = this._yAxisLabelCount,

            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,
            x1, x2, y1, y2,
            offsetX, offsetY,
            angle,
            i;

        ctx.save();

        //(1)设置样式
        ctx.lineWidth = Styles.AXIS_LINE_WIDTH;
        ctx.strokeStyle = Styles.AXIS_LINE_COLOR;

        //(2)绘制横轴
        x1 = chartInfo_In.bodyLeft - Styles.AXIS_SCALE_UNIT_LINE_SIZE;                    //横向起点
        x2 = canvasWidth - chartInfo_In.bodyRight + Styles.AXIS_SCALE_UNIT_LINE_SIZE;    //横向终点
        y1 = Utility.adjustPosition(yOriginPosition);                   //纵向位置

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.stroke();

        //(3)绘制横轴刻度
        y2 = y1 + Styles.AXIS_SCALE_UNIT_LINE_SIZE;
        offsetX = chartInfo_In.bodyLeft;

        for (i = 0; i < xAxisLabelCount; i++) {
            x1 = Utility.adjustPosition(offsetX + xScaleUnitSize * i);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1, y2);
            ctx.stroke();
        }

        //(4)绘制纵轴
        y1 = chartInfo_In.bodyTop - Styles.AXIS_SCALE_UNIT_LINE_SIZE;                      //纵向起点
        y2 = canvasHeight - chartInfo_In.bodyBottom + Styles.AXIS_SCALE_UNIT_LINE_SIZE;   //纵向终点
        x1 = Utility.adjustPosition(xOriginPosition);                    //横向位置

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.stroke();

        //(5)绘制纵轴刻度
        x2 = x1 - Styles.AXIS_SCALE_UNIT_LINE_SIZE;
        offsetY = canvasHeight - chartInfo_In.bodyBottom;

        for (i = 0; i < yAxisLabelCount; i++) {
            y1 = Utility.adjustPosition(offsetY - yScaleUnitSize * i);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y1);
            ctx.stroke();
        }

        ctx.restore();
    }

    _paintLabel () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,

            xLabelRotate = this._xAxisInfo_In.labelRotate,
            yLabelRotate = this._yAxisInfo_In.labelRotate,

            xMinScale = this._xAxisInfo_Out.minScale,
            yMinScale = this._yAxisInfo_Out.minScale,

            xScaleUnit = this._xAxisInfo_Out.scaleUnit,
            yScaleUnit = this._yAxisInfo_Out.scaleUnit,

            xScaleUnitSize = this._xAxisInfo_Out.scaleUnitSize,
            yScaleUnitSize = this._yAxisInfo_Out.scaleUnitSize,

            xDecimalDigit = this._xAxisInfo_Out.decimalDigit,
            yDecimalDigit = this._yAxisInfo_Out.decimalDigit,

            xAxisLabelCount = this._xAxisLabelCount,
            yAxisLabelCount = this._yAxisLabelCount,

            canvasHeight = this._canvas.height,
            x, y,
            offsetX, offsetY,
            num, str,
            angle,
            i;

        ctx.save();

        //(1)设置文本样式
        ctx.font = Styles.LABEL_FONT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;

        //根据横轴标签的旋转角度进行绘制        
        offsetX = chartInfo_In.bodyLeft;
        angle = xLabelRotate % 360;

        if (angle == 0) {
            //设置文本横向对齐方式
            ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

            //计算文本纵向位置
            y = canvasHeight - chartInfo_In.bodyBottom + Styles.XAXIS_LABEL_OFFSET;

            //绘制文本
            for (i = 0; i < xAxisLabelCount; i++) {
                //计算文本横向位置
                x = Utility.adjustPosition(offsetX + xScaleUnitSize * i);

                //计算标签文字
                num = xMinScale + xScaleUnit * i;
                str = num.toFixed(xDecimalDigit);

                //绘制文字
                ctx.fillText(str, x, y);
            }

        } else {
            //转换为弧度
            angle = -angle * Math.PI / 180;

            //设置文本横向对齐方式
            ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;

            //计算文本纵向位置
            y = canvasHeight - chartInfo_In.bodyBottom + Styles.XAXIS_LABEL_OFFSET_FOR_ROTATE;

            //绘制文本
            for (i = 0; i < xAxisLabelCount; i++) {
                ctx.save();

                //计算文本横向位置
                x1 = Utility.adjustPosition(offsetX + xScaleUnitSize * i);

                //坐标平移并旋转
                ctx.translate(x, y);
                ctx.rotate(angle);

                //计算标签文字
                num = xMinScale + xScaleUnit * i;
                str = num.toFixed(xDecimalDigit);

                //绘制文字
                ctx.fillText(str, 0, 0);

                ctx.restore();
            }

        }

        //(3-2)设置文本横向对齐方式
        ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;

        //(3-3)根据纵轴标签的旋转角度进行绘制        
        x = chartInfo_In.bodyLeft - Styles.YAXIS_LABEL_OFFSET;
        offsetY = canvasHeight - chartInfo_In.bodyBottom;
        angle = yLabelRotate % 360;

        if (angle == 0) {
            for (i = 0; i < yAxisLabelCount; i++) {
                //计算文本纵向位置
                y = offsetY - yScaleUnitSize * i;

                //计算标签文字
                num = yMinScale + yScaleUnit * i;
                str = num.toFixed(yDecimalDigit);

                //绘制文字
                ctx.fillText(str, x, y);
            }

        } else {
            //转换为弧度
            angle = -angle * Math.PI / 180;

            for (i = 0; i < yAxisLabelCount; i++) {
                ctx.save();

                //计算文本纵向位置
                y = offsetY - yScaleUnitSize * i;

                //坐标平移并旋转
                ctx.translate(x, y);
                ctx.rotate(angle);

                //计算标签文字
                num = yMinScale + yScaleUnit * i;
                str = num.toFixed(yDecimalDigit);

                //绘制文字
                ctx.fillText(str, 0, 0);

                ctx.restore();
            }

        }

        ctx.restore();
    }

    _paintAxisName () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,
            x, y;

        ctx.save();

        //设置文字样式
        ctx.font = Styles.AXIS_NAME_FONT;
        ctx.textAlign = Constants.TEXT_ALIGN_CENTER;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;

        //绘制y轴单位文字
        x = chartInfo_In.bodyLeft;
        y = chartInfo_In.yAxisNameTop;
        ctx.fillText(chartInfo_In.yAxisName, x, y);

        //绘制X轴单位文字
        //      this._ctx.textBaseline = Constants.TEXT_BASE_LINE_BOTTOM ;
        x = canvasWidth - chartInfo_In.bodyRight;
        y = canvasHeight - chartInfo_In.xAxisNameBottom;
        ctx.fillText(chartInfo_In.xAxisName, x, y);

        ctx.restore();
    }

    _paintBubbles () {
        let ctx = this._ctx,
            colors = this._chartInfo_In.colors,
            itemArray = this._itemArray,
            i, j, len1, len2,
            arr,
            item;

        ctx.save();

        //设置共同样式
        ctx.globalAlpha = Styles.BUBBLE_ALPHA;

        //循环系列
        len1 = itemArray.length;
        for (i = 0; i < len1; i++) {
            ctx.fillStyle = colors[i];

            arr = itemArray[i];
            len2 = arr.length;
            for (j = 0; j < len2; j++) {
                item = arr[j];
                if (item.dirtyFlag == false) {
                    ctx.beginPath();
                    ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
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