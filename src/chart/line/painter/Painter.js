import Status from '../../../support/Status.js';
import Styles from '../../../support/Styles.js';
import Constants from '../../../support/Constants.js';
import Utility from '../../../support/Utility.js';

import Line from '../support/Line.js';
import Bezier from '../support/Bezier.js';


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

        this._canvasBak;
        this._ctxBak;                     //Canvas上下文
        this._canvasSurfaceBak;            //Canvas绘图表面

        this._chartInfo_In;             //图表各类数据 
        this._cAxisInfo_In;
        this._cAxisInfo_Out;            //数值轴输入、输出数据
        this._vAxisInfo_In;
        this._vAxisInfo_Out;

        this._itemArray;                //存储散点的数组
        this._filteredItemArray = [];    //存储折线点的数组

        this._tweenPositionLeft;         //缓动效果相关
        this._tweenPositionWidth;

        this._line = new Line();         //计算直线和贝塞尔曲线点的工具类
        this._bezier = new Bezier();
        this._points = [];                              //计算后的线上的各个点

        this._chartPixelWidth;
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

        this._canvasBak = chart._canvasBak;
        this._ctxBak = this._canvasBak.getContext('2d');

        this._chartInfo_In = chart.chartInfo_In;
        this._cAxisInfo_In = chart.cAxisInfo_In;
        this._cAxisInfo_Out = chart._cAxisInfo_Out;
        this._vAxisInfo_In = chart.vAxisInfo_In;
        this._vAxisInfo_Out = chart._vAxisInfo_Out;

        this._itemArray = chart._itemArray;

        this._chartPixelWidth = chart._chartPixelWidth;

        //缓动效果相关
        this._tweenPositionLeft = chart._tweenPositionLeft;
        this._tweenPositionWidth = chart._tweenPositionWidth;

        this._selectedIndex = this._chartInfo_In.selectedIndex;

        //计算值轴标签个数，供此后使用
        this._vAxisLabelCount = Math.floor((this._vAxisInfo_Out.maxScale - this._vAxisInfo_Out.minScale) / this._vAxisInfo_Out.scaleUnit) + 1;
    }


    paint () {
        let ctx = this._ctx,
            ctxBak = this._ctxBak,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,
            tweenPositionLeft = this._tweenPositionLeft,
            tweenPositionWidth = this._tweenPositionWidth,
            chartInfo_In = this._chartInfo_In;

        switch (this._chart._status) {
            case Status.STEP1:         //绘制图表并缓存Canvas绘图表面

                //清空画布
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxBak.clearRect(0, 0, canvasWidth, canvasHeight);

                //在_ctx上绘制图表固定的内容
                this._paintTitle();
                this._paintLegend();
                this._paintGrid();
                this._paintAxis();
                this._paintLabel();
                this._paintAxisName();

                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

                //将缓存的绘图表面绘制到_ctxBak上
                ctxBak.putImageData(this._canvasSurface, 0, 0);

                //在_ctxBak上绘制折线
                this._paintLineOrBezier();

                //在_ctxBak上绘制标记点
                if (chartInfo_In.showMarkPoint == true) {
                    this._paintMarkPoints();
                }

                break;

            case Status.STEP2:         //绘制缓动效果

                //恢复this._ctx的绘图表面
                ctx.putImageData(this._canvasSurface, 0, 0);


                //从_ctxBak上取得指定区域的绘图表面
                this._canvasSurfaceBak = ctxBak.getImageData(tweenPositionLeft,
                    0,
                    tweenPositionWidth,
                    canvasHeight);

                //将取得的绘图表面绘制在_ctx上
                ctx.putImageData(this._canvasSurfaceBak, tweenPositionLeft, 0);

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

            vAxisLabelCount = this._vAxisLabelCount,

            categorys = cAxisInfo_In.categorys,

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
                x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * i;
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

                x1 = chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * i;
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

    _paintLineOrBezier () {
        let chartInfo_In = this._chartInfo_In,
            filteredItemArray = this._filteredItemArray,
            chartPixelWidth = this._chartPixelWidth;

        //过滤数据（将过多的数据按照像素为单位进行过滤）
        this._filterItems();

        //根据过滤后的数据绘制折线
        if (chartInfo_In.areaFlag == true) {
            if (chartInfo_In.smoothFlag == true && filteredItemArray[0].length < chartPixelWidth) {
                this._paintSmoothArea();
            } else {
                this._paintArea();
            }
        } else {
            if (chartInfo_In.smoothFlag == true && filteredItemArray[0].length < chartPixelWidth) {
                this._paintSmoothLine();
            } else {
                this._paintLine();
            }
        }
    }

    _paintLine () {
        let ctxBak = this._ctxBak,
            filteredItemArray = this._filteredItemArray,
            line = this._line,
            colors = this._chartInfo_In.colors,
            points = this._points,
            item,
            arr,
            i, j, k, len1, len2, len3;

        //设置共同样式
        ctxBak.lineWidth = Styles.LINE_LINE_WIDTH;

        //循环系列
        len1 = filteredItemArray.length;
        for (i = 0; i < len1; i++) {
            //设置该系列折现颜色
            ctxBak.strokeStyle = colors[i];

            //将原始折线点根据'脏数据标记'进行分组
            points = line.segment(filteredItemArray[i]);

            //循环该系列所有片段
            len2 = points.length;
            for (j = 0; j < len2; j++) {
                arr = points[j];
                len3 = arr.length;

                if (len3 > 1) {
                    ctxBak.beginPath();

                    //移动到第一个点
                    item = arr[0];
                    ctxBak.moveTo(item.x, item.y);

                    //连接折线
                    for (k = 1; k < len3; k++) {
                        item = arr[k];
                        ctxBak.lineTo(item.x, item.y);
                    }

                    ctxBak.stroke();

                } else if (len3 == 1) {

                    ctxBak.fillStyle = Styles.LINE_MARKPOINT_BAK_COLOR;

                    ctxBak.beginPath();

                    item = arr[0];
                    ctxBak.arc(item.x, item.y,
                        Styles.LINE_MARKPOINT_RADIUS,
                        0, 2 * Math.PI);
                    ctxBak.closePath();

                    ctxBak.fill();
                    ctxBak.stroke();
                }
            }
        }

        ctxBak.restore();
    }

    _paintSmoothLine () {
        let ctxBak = this._ctxBak,
            filteredItemArray = this._filteredItemArray,
            bezier = this._bezier,
            colors = this._chartInfo_In.colors,
            points = this._points,
            item,
            arr,
            i, j, k, len1, len2, len3;

        ctxBak.save();

        //设置共同样式
        ctxBak.lineWidth = Styles.LINE_LINE_WIDTH;

        //循环系列
        len1 = filteredItemArray.length;
        for (i = 0; i < len1; i++) {
            //设置该系列折现颜色
            ctxBak.strokeStyle = colors[i];

            //将原始折线点根据'脏数据标记'进行分组
            points = bezier.segment(filteredItemArray[i]);

            //循环该系列所有片段
            len2 = points.length;
            for (j = 0; j < len2; j++) {
                arr = points[j];
                len3 = arr.length;

                if (len3 >= 4) {
                    ctxBak.beginPath();

                    ctxBak.moveTo(arr[0].x, arr[0].y);

                    for (k = 1; k < len3; k += 3) {
                        ctxBak.bezierCurveTo(arr[k].x, arr[k].y,
                            arr[k + 1].x, arr[k + 1].y,
                            arr[k + 2].x, arr[k + 2].y);
                    }
                    ctxBak.stroke();

                } else if (len3 == 2) {

                    item = arr[0];
                    ctxBak.moveTo(item.x, item.y);

                    item = arr[1];
                    ctxBak.lineTo(item.x, item.y);

                    ctxBak.stroke();

                } else if (len3 == 1) {

                    ctxBak.fillStyle = Styles.LINE_MARKPOINT_BAK_COLOR;

                    ctxBak.beginPath();
                    item = arr[0];
                    ctxBak.arc(item.x, item.y,
                        Styles.LINE_MARKPOINT_RADIUS,
                        0, 2 * Math.PI);
                    ctxBak.closePath();

                    ctxBak.fill();
                    ctxBak.stroke();

                }
            }
        }

        ctxBak.restore();
    }

    _paintArea () {
        let ctxBak = this._ctxBak,
            vAxisInfo_Out = this._vAxisInfo_Out,
            filteredItemArray = this._filteredItemArray,
            line = this._line,
            colors = this._chartInfo_In.colors,
            points = this._points,
            item,
            arr,
            i, j, k, len1, len2, len3;

        ctxBak.save();

        //设置共同样式
        ctxBak.globalAlpha = Styles.LINE_AREA_ALPHA;

        //逆序循环系列
        len1 = filteredItemArray.length;
        for (i = len1 - 1; i >= 0; i--) {
            //设置该系列折线颜色
            ctxBak.fillStyle = colors[i];
            ctxBak.strokeStyle = colors[i];

            //将原始折线点根据'脏数据标记'进行分组
            points = line.segment(filteredItemArray[i]);

            //循环该系列所有片段
            len2 = points.length;
            for (j = 0; j < len2; j++) {
                arr = points[j];
                len3 = arr.length;

                if (len3 > 1) {
                    ctxBak.beginPath();

                    //移动到第一个点
                    item = arr[0];
                    ctxBak.moveTo(item.x, item.y);

                    //连接折线
                    for (k = 1; k < len3; k++) {
                        item = arr[k];
                        ctxBak.lineTo(item.x, item.y);
                    }

                    //连接折线两个端点在轴上的映射点
                    ctxBak.lineTo(arr[len3 - 1].x, vAxisInfo_Out.originPosition);
                    ctxBak.lineTo(arr[0].x, vAxisInfo_Out.originPosition);

                    ctxBak.closePath();
                    ctxBak.fill();

                } else if (len3 == 1) {

                    ctxBak.save();

                    ctxBak.fillStyle = Styles.LINE_MARKPOINT_BAK_COLOR;

                    ctxBak.beginPath();
                    item = arr[0];
                    ctxBak.arc(item.x, item.y,
                        Styles.LINE_MARKPOINT_RADIUS,
                        0, 2 * Math.PI);
                    ctxBak.closePath();

                    ctxBak.fill();
                    ctxBak.stroke();

                    ctxBak.restore();

                }
            }
        }

        ctxBak.restore();
    }

    _paintSmoothArea () {
        let ctxBak = this._ctxBak,
            vAxisInfo_Out = this._vAxisInfo_Out,
            filteredItemArray = this._filteredItemArray,
            bezier = this._bezier,
            colors = this._chartInfo_In.colors,
            points = this._points,
            item,
            arr,
            i, j, k, len1, len2, len3;

        ctxBak.save();

        //设置共同样式
        ctxBak.globalAlpha = Styles.LINE_AREA_ALPHA;

        //逆序循环系列
        len1 = filteredItemArray.length;
        for (i = len1 - 1; i >= 0; i--) {
            //设置该系列折线颜色
            ctxBak.fillStyle = colors[i];
            ctxBak.strokeStyle = colors[i];

            //将原始折线点根据'脏数据标记'进行分组
            points = bezier.segment(filteredItemArray[i]);

            //循环该系列所有片段
            len2 = points.length;
            for (j = 0; j < len2; j++) {
                arr = points[j];
                len3 = arr.length;

                if (len3 >= 4) {
                    ctxBak.beginPath();

                    //移动到第一个点
                    ctxBak.moveTo(arr[0].x, arr[0].y);

                    //连接曲线
                    for (k = 1; k < len3; k += 3) {
                        ctxBak.bezierCurveTo(arr[k].x, arr[k].y,
                            arr[k + 1].x, arr[k + 1].y,
                            arr[k + 2].x, arr[k + 2].y);
                    }

                    //连接曲线两个端点在轴上的映射点
                    ctxBak.lineTo(arr[len3 - 1].x, vAxisInfo_Out.originPosition);
                    ctxBak.lineTo(arr[0].x, vAxisInfo_Out.originPosition);

                    ctxBak.closePath();
                    ctxBak.fill();

                } else if (len3 == 2) {

                    ctxBak.beginPath();

                    //连接直线的两个点
                    item = arr[0];
                    ctxBak.moveTo(item.x, item.y);
                    item = arr[1];
                    ctxBak.lineTo(item.x, item.y);

                    //连接直线两个端点在轴上的映射点
                    ctxBak.lineTo(item.x, vAxisInfo_Out.originPosition);
                    item = arr[0];
                    ctxBak.lineTo(item.x, vAxisInfo_Out.originPosition);

                    ctxBak.closePath();

                    ctxBak.fill();

                } else if (len3 == 1) {

                    ctxBak.save();

                    ctxBak.fillStyle = Styles.LINE_MARKPOINT_BAK_COLOR;

                    ctxBak.beginPath();
                    item = arr[0];
                    ctxBak.arc(item.x, item.y,
                        Styles.LINE_MARKPOINT_RADIUS,
                        0, 2 * Math.PI);
                    ctxBak.closePath();

                    ctxBak.fill();
                    ctxBak.stroke();

                    ctxBak.restore();

                }
            }
        }

        ctxBak.restore();
    }

    _paintMarkPoints () {
        let ctxBak = this._ctxBak,
            filteredItemArray = this._filteredItemArray,
            colors = this._chartInfo_In.colors,
            item,
            arr,
            i, j, len1, len2;

        ctxBak.save();

        //设置共同样式
        ctxBak.lineWidth = Styles.LINE_MARKPOINT_WIDTH;
        ctxBak.fillStyle = Styles.LINE_MARKPOINT_BAK_COLOR;

        //画圆点
        len1 = filteredItemArray.length;
        for (i = 0; i < len1; i++) {
            ctxBak.strokeStyle = colors[i];

            arr = filteredItemArray[i];
            len2 = arr.length;
            for (j = 0; j < len2; j++) {
                item = arr[j];
                if (item.dirtyFlag == false) {
                    ctxBak.beginPath();
                    ctxBak.arc(item.x, item.y,
                        Styles.LINE_MARKPOINT_RADIUS,
                        0, 2 * Math.PI);
                    ctxBak.closePath();

                    ctxBak.fill();
                    ctxBak.stroke();
                }
            }
        }

        ctxBak.restore();
    }

    _paintSelector () {
        let ctx = this._ctx,
            chartInfo_In = this._chartInfo_In,
            cAxisInfo_Out = this._cAxisInfo_Out,
            itemArray = this._itemArray,
            colors = chartInfo_In.colors,
            selectedIndex = this._selectedIndex,
            canvasHeight = this._canvas.height,
            item,
            i, len1,
            x1, y1, y2;

        if (selectedIndex >= 0) {
            ctx.save();

            //画圆点
            ctx.lineWidth = Styles.LINE_MARKPOINT_WIDTH;
            ctx.fillStyle = Styles.LINE_MARKPOINT_BAK_COLOR;
            len1 = itemArray.length;
            for (i = 0; i < len1; i++) {
                item = itemArray[i][selectedIndex];
                if (item.dirtyFlag == false) {
                    ctx.strokeStyle = colors[i];

                    ctx.beginPath();
                    ctx.arc(item.x, item.y,
                        Styles.LINE_MARKPOINT_RADIUS * 2,
                        0, 2 * Math.PI);
                    ctx.closePath();

                    ctx.fill();
                    ctx.stroke();
                }

            }

            //画线
            x1 = Utility.adjustPosition(chartInfo_In.bodyLeft + cAxisInfo_Out.categorySize * selectedIndex);
            y1 = Utility.adjustPosition(chartInfo_In.bodyTop);
            y2 = Utility.adjustPosition(canvasHeight - chartInfo_In.bodyBottom);

            ctx.lineWidth = Styles.LINE_SELECTOR_LINE_WIDTH;
            ctx.strokeStyle = Styles.LINE_SELECTOR_LINE_COLOR;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x1, y2);
            ctx.closePath();
            ctx.stroke();

            ctx.restore();
        }
    }

    _filterItems () {
        let filteredItemArray = this._filteredItemArray,
            itemArray = this._itemArray,
            chartPixelWidth = this._chartPixelWidth,
            onePixelPointCount,
            i, len;

        //初始化数组
        filteredItemArray.length = 0;
        len = itemArray.length;
        for (i = 0; i < len; i++) {
            filteredItemArray[i] = [];
        }

        //计算一个像素内要绘制几个点
        onePixelPointCount = itemArray[0].length / chartPixelWidth;

        //如果一个像素内需要绘制的点数多于1个，则过滤
        if (onePixelPointCount > 1) {
            for (i = 0; i < len; i++) {

                this._filter(itemArray[i], filteredItemArray[i], onePixelPointCount);
            }
        } else {
            for (i = 0; i < len; i++) {
                filteredItemArray[i] = itemArray[i];
            }
        }

    }

    _filter (items, filteredItems, onePixelPointCount) {
        let chartPixelWidth = this._chartPixelWidth,
            index = 0,
            pixelIndex = 1,
            count = items.length,
            plusArr = [], minusArr = [], dirtyArr = [],
            indexEnd,
            item;

        //循环过滤数据
        while (pixelIndex < chartPixelWidth) {

            //每次循环都要初始化相关数组
            plusArr.length = 0;
            minusArr.length = 0;
            dirtyArr.length = 0;

            //计算循环上限值并校正
            indexEnd = Math.floor(onePixelPointCount * pixelIndex);
            if (indexEnd > count) {
                indexEnd = count;
            }

            //将1个像素内的点分类为正值、负值、无效值
            for (; index < indexEnd; index++) {
                item = items[index];

                if (item.dirtyFlag == true) {
                    dirtyArr.push(item);
                } else if (item.value >= 0) {
                    plusArr.push(item);
                } else {
                    minusArr.push(item);
                }
            }

            //将这一像素内的最大正值点，最小负值点 或无效值点存入数组中
            this._setFilteredItemArray(plusArr, minusArr, dirtyArr, filteredItems);

            //像素点索引加一，进行下次循环
            pixelIndex++;
        }

    }

    _setFilteredItemArray (plusArr, minusArr, dirtyArr, filteredItems) {
        let plusMax = 0,
            minusMin = 0,
            plusIndex = -1,
            minusIndex = -1,
            i, len,
            num;

        //计算正值的最大值
        len = plusArr.length;
        for (i = 0; i < len; i++) {
            num = plusArr[i].value;
            if (num >= plusMax) {
                plusIndex = i;
            }
        }

        //计算负值的最小值
        len = minusArr.length;
        for (i = 0; i < len; i++) {
            num = minusArr[i].value;
            if (num <= minusMin) {
                minusIndex = i;
            }
        }

        //将整数最大值和负数最小值存入数组
        if (plusIndex != -1 && minusIndex != -1) {
            //比较最大正值和最小负值对应的X坐标
            if (plusArr[plusIndex].x <= minusArr[minusIndex].x) {
                filteredItems.push(plusArr[plusIndex]);
                filteredItems.push(minusArr[minusIndex]);
            } else {
                filteredItems.push(minusArr[minusIndex]);
                filteredItems.push(plusArr[plusIndex]);
            }

        } else if (plusIndex != -1) {

            filteredItems.push(plusArr[plusIndex]);

        } else if (minusIndex != -1) {

            filteredItems.push(minusArr[minusIndex]);

        } else {

            if (dirtyArr.length > 0) {
                filteredItems.push(dirtyArr[0]);
            }
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