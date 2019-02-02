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
        this._cAxisInfo_In;
        this._cAxisInfo_Out;            //数值轴输入、输出数据
        this._vAxisInfo_In;
        this._vAxisInfo_Out;

        this._itemArray;                //存储散点的数组
        this._vAxisLabelCount;          //值轴数字标签个数
        this._selectedIndex;


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

        this._cAxisInfo_In = chart.cAxisInfo_In;
        this._cAxisInfo_Out = chart._cAxisInfo_Out;
        this._vAxisInfo_In = chart.vAxisInfo_In;
        this._vAxisInfo_Out = chart._vAxisInfo_Out;

        this._itemArray = chart._itemArray;
        this._selectedIndex = this._chartInfo_In.selectedIndex;

        //计算值轴标签个数，供此后使用
        this._vAxisLabelCount = Math.floor((this._vAxisInfo_Out.maxScale - this._vAxisInfo_Out.minScale) / this._vAxisInfo_Out.scaleUnit) + 1;
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

                //绘制柱状体
                this._paintColumns();

                break;

            case Status.STEP3:         //缓存Canvas绘图表面（完整的图表）

                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

                //绘制选择项
                this._paintSelector();

                break;

            case Status.STEP4:         //绘制选择项

                //恢复_ctx的绘图表面
                ctx.putImageData(this._canvasSurface, 0, 0);

                //绘制选择项
                this._paintSelector();

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
        x = this._canvas.width - chartInfo_In.legendRight;

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
            scaleUnitSize = this._vAxisInfo_Out.scaleUnitSize,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,
            vAxisLabelCount = this._vAxisLabelCount,
            x1, x2, y1,
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

        for (i = 0; i < vAxisLabelCount; i++) {
            y1 = Utility.adjustPosition(num - scaleUnitSize * i);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y1);
            ctx.stroke();
        }

        ctx.restore();
    }


    _paintAxis () {
        let ctx = this._ctx,

            chartInfo_In = this._chartInfo_In,

            cAxisInfo_Out = this._cAxisInfo_Out,
            vAxisInfo_Out = this._vAxisInfo_Out,

            originPosition = this._vAxisInfo_Out.originPosition,
            vAxisLabelCount = this._vAxisLabelCount,

            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,

            categorys = this._cAxisInfo_In.categorys,

            integer,
            num,

            x1, x2, y1, y2,
            i, len;

        ctx.save();

        //(1)设置样式
        ctx.lineWidth = Styles.AXIS_LINE_WIDTH;
        ctx.strokeStyle = Styles.AXIS_LINE_COLOR;

        //(2)绘制横轴
        x1 = chartInfo_In.bodyLeft - Styles.AXIS_SCALE_UNIT_LINE_SIZE;                    //横向起点
        x2 = canvasWidth - chartInfo_In.bodyRight + Styles.AXIS_SCALE_UNIT_LINE_SIZE;    //横向终点

        //计算值轴原点Y坐标
        y1 = Utility.adjustPosition(originPosition);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        ctx.stroke();

        //(3)绘制横轴刻度
        y2 = y1 + Styles.AXIS_SCALE_UNIT_LINE_SIZE;
        integer = cAxisInfo_Out.interval + 1;

        len = categorys.length;
        for (i = 0; i < len; i += integer) {
            x1 = Utility.adjustPosition(chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * i);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1, y2);
            ctx.stroke();
        }

        //(4)绘制纵轴
        x1 = Utility.adjustPosition(chartInfo_In.bodyLeft);
        y1 = chartInfo_In.bodyTop - Styles.AXIS_SCALE_UNIT_LINE_SIZE;
        y2 = canvasHeight - chartInfo_In.bodyBottom + Styles.AXIS_SCALE_UNIT_LINE_SIZE;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1, y2);
        ctx.stroke();

        //(5)绘制纵轴刻度
        x1 = chartInfo_In.bodyLeft - Styles.AXIS_SCALE_UNIT_LINE_SIZE;
        x2 = chartInfo_In.bodyLeft;
        num = canvasHeight - chartInfo_In.bodyBottom;

        for (i = 0; i < vAxisLabelCount; i++) {
            y1 = Utility.adjustPosition(num - vAxisInfo_Out.scaleUnitSize * i);

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

            cAxisInfo_In = this._cAxisInfo_In,
            cAxisInfo_Out = this._cAxisInfo_Out,
            vAxisInfo_In = this._vAxisInfo_In,
            vAxisInfo_Out = this._vAxisInfo_Out,

            categorys = cAxisInfo_In.categorys,
            vAxisLabelCount = this._vAxisLabelCount,
            canvasHeight = this._canvas.height,

            x1, y1, y2,
            integer, num, str,
            angle,
            i, len;

        ctx.save();

        //(1)设置文本样式
        ctx.font = Styles.LABEL_FONT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;

        //(2)绘制横轴标签
        angle = cAxisInfo_In.labelRotate % 360;
        len = categorys.length;
        integer = cAxisInfo_Out.interval + 1;

        if (angle == 0) {
            //设置文本横向对齐方式
            ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

            //绘制文本
            y1 = canvasHeight - chartInfo_In.bodyBottom + Styles.XAXIS_LABEL_OFFSET;
            for (i = 0; i < len; i += integer) {
                x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * (i + 0.5);
                ctx.fillText(categorys[i], x1, y1);
            }

        } else {
            //转换为弧度
            angle = -angle * Math.PI / 180;

            //设置文本横向对齐方式
            ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;

            //绘制文本
            y1 = canvasHeight - chartInfo_In.bodyBottom + Styles.XAXIS_LABEL_OFFSET_FOR_ROTATE;
            for (i = 0; i < len; i += integer) {
                ctx.save();

                x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * (i + 0.5);
                ctx.translate(x1, y1);
                ctx.rotate(angle);
                ctx.fillText(categorys[i], 0, 0);

                ctx.restore();
            }

        }

        //获取旋转角度
        angle = vAxisInfo_In.labelRotate % 360;

        //设置文本横向对齐方式
        ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;

        //绘制文本
        x1 = chartInfo_In.bodyLeft - Styles.YAXIS_LABEL_OFFSET;
        y1 = canvasHeight - chartInfo_In.bodyBottom;
        if (angle == 0) {

            for (i = 0; i < vAxisLabelCount; i++) {
                y2 = y1 - vAxisInfo_Out.scaleUnitSize * i;
                num = vAxisInfo_Out.minScale + vAxisInfo_Out.scaleUnit * i;
                str = num.toFixed(vAxisInfo_Out.decimalDigit);
                ctx.fillText(str, x1, y2);
            }

        } else {
            //转换为弧度
            angle = -angle * Math.PI / 180;

            //绘制文本
            for (i = 0; i < vAxisLabelCount; i++) {
                ctx.save();

                y2 = y1 - vAxisInfo_Out.scaleUnitSize * i;
                ctx.translate(x1, y2);
                ctx.rotate(angle);

                num = vAxisInfo_Out.minScale + vAxisInfo_Out.scaleUnit * i;
                str = num.toFixed(vAxisInfo_Out.decimalDigit);
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
        x = canvasWidth - chartInfo_In.bodyRight;
        y = canvasHeight - chartInfo_In.xAxisNameBottom;
        ctx.fillText(chartInfo_In.xAxisName, x, y);

        ctx.restore();
    }


    _paintColumns () {
        let ctx = this._ctx,
            colors = this._chartInfo_In.colors,
            itemArray = this._itemArray,
            item,
            arr,
            i, j, len1, len2;

        ctx.save();

        //循环系列
        len1 = itemArray.length;
        len2 = itemArray[0].length;
        for (i = 0; i < len1; i++) {
            arr = itemArray[i];
            for (j = 0; j < len2; j++) {
                item = arr[j];
                if (item.dirtyFlag == false) {
                    ctx.fillStyle = colors[i];
                    ctx.fillRect(item.x,
                        item.y,
                        item.width,
                        item.height);
                    ctx.fill();
                }
            }
        }

        ctx.restore();
    }


    _paintSelector () {

        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            cAxisInfo_Out = this._cAxisInfo_Out,
            selectedIndex = this._selectedIndex,
            canvasHeight = this._canvas.height,

            x, y, w, h;

        if (selectedIndex >= 0) {
            ctx.save();

            x = Utility.adjustPosition(chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * selectedIndex);
            y = Utility.adjustPosition(chartInfo_In.bodyTop);
            w = Math.floor(cAxisInfo_Out.categorySize);
            h = canvasHeight - chartInfo_In.bodyTop - chartInfo_In.bodyBottom;

            ctx.lineWidth = Styles.COLUMN_SELECTOR_LINE_WIDTH;
            ctx.strokeStyle = Styles.COLUMN_SELECTOR_LINE_COLOR;

            ctx.strokeRect(x, y, w, h);

            ctx.restore();
        }
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