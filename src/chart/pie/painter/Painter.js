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

        this._canvasBak;
        this._ctxBak;                     //Canvas上下文
        this._canvasSurfaceBak;            //Canvas绘图表面

        this._chartInfo_In;             //图表各类数据 

        this._itemArray;                 //存储扇形点的数组

        this._selectedIndex;     //被选择的扇形
        this._selectorRowHeight;

        this._selectorRectWidth;
        this._selectorRectHeight;
        this._selectorPositionX;
        this._selectorPositionOffsetY;

        this._maskRadian;         //缓动效果相关
        this._maskRadius;


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

        this._selectedIndex = this._chartInfo_In.selectedIndex;
        this._itemArray = chart._itemArray;

        //缓动效果相关
        this._maskRadian = chart._maskRadian;
        this._maskRadius = chart._maskRadius;

    }


    paint () {
        let ctx = this._ctx,
            ctxBak = this._ctxBak,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height;

        switch (this._chart._status) {
            case Status.STEP1:         //绘制图表并缓存Canvas绘图表面

                //清空画布
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                ctxBak.clearRect(0, 0, canvasWidth, canvasHeight);

                //在_ctx上绘制图表固定的内容
                this._paintTitle();
                this._paintLegend();

                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

                //在_ctxBak上绘制扇形和标签
                this._paintPie(ctxBak);
                this._paintLabel(ctxBak);

                break;

            case Status.STEP2:         //绘制缓动效果


                this._paintMaskImage();

                break;

            case Status.STEP3:

                this._paintSelector();
                break;

            case Status.STEP4:         //绘制选择项

                //恢复绘图表面，将在此之上绘制圆环
                ctx.putImageData(this._canvasSurface, 0, 0);

                //在ctx上绘制扇形和标签
                this._paintPie(ctx);
                this._paintLabel(ctx);
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
            itemArray = this._itemArray,
            colors = chartInfo_In.colors,
            legendWidth, valueWidth,
            decimalDigits,
            percentWidth,
            items, item,
            str, num,
            gapH, gapV,
            h,
            x1, x2, x3, x4, y1,
            i, len;

        ctx.save();

        //设置文字样式
        ctx.font = Styles.LEGEND_FONT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;

        //计算各个要素的最大长度
        legendWidth = valueWidth = 0;
        items = itemArray[0];
        len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];

            //比较图例文字的长度
            str = item.name;
            num = Utility.getTextWidth(ctx, str);
            if (num > legendWidth) {
                legendWidth = num;
            }

            //比较数值文字的长度
            str = item.value;
            num = Utility.getTextWidth(ctx, str);
            if (num > valueWidth) {
                valueWidth = num;
            }
        }

        decimalDigits = chartInfo_In.percentDecimalDigits;
        num = Math.pow(10, decimalDigits);
        str = num.toString();
        if (str.length == 1)  // str == '1'
        {
            str = '99 %';
        } else {
            str = str.substr(1);
            str = '99.' + str + ' %';
        }
        percentWidth = Utility.getTextWidth(ctx, str);

        //获取文字高度
        h = Utility.getTextHeight(ctx);

        //计算各个元素之间的横向、纵向间隔
        gapH = h;
        gapV = h * 1.5;

        //计算各个要素的x坐标
        x1 = chartInfo_In.legendLeft;                        //色块
        x2 = x1 + h + gapH;                           //图例文字
        x3 = x2 + legendWidth + gapH + percentWidth;  //百分比（右对齐）
        x4 = x3 + gapH + valueWidth;                  //数值（右对齐）

        //设定初始y坐标
        y1 = chartInfo_In.legendTop;

        //保存相关信息
        this._selectorRectWidth = Math.ceil(x4 - x1 + h);
        this._selectorRectHeight = Math.ceil(gapV);
        this._selectorRowHeight = gapV;

        this._selectorPositionX = Utility.adjustPosition(x1 - h / 2);
        this._selectorPositionOffsetY = (gapV - h) / 2;

        //依次绘制图例色块、文字、百分率、数值
        for (i = 0; i < len; i++) {
            item = items[i];

            //绘制色块
            ctx.fillStyle = colors[i];
            ctx.fillRect(x1, y1, h, h);

            //绘制图例文字
            ctx.textAlign = Constants.TEXT_ALIGN_LEFT;
            ctx.fillStyle = Styles.FONT_FILL_COLOR;
            ctx.fillText(item.name, x2, y1);

            //绘制百分比
            ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;
            num = item.percent * 10000 / 100;
            str = num.toFixed(decimalDigits) + ' %';
            ctx.fillText(str, x3, y1);

            //绘制数值
            ctx.fillText(item.value, x4, y1);

            y1 += gapV;
        }

        ctx.restore();
    }

    _paintPie (ctx) {
        let itemArray = this._itemArray,
            items, item,
            radius,
            i, len;

        ctx.save();

        //循环绘制圆环
        items = itemArray[0];
        len = items.length;
        for (i = 0; i < len; i++) {
            ctx.save();

            //取得扇形对象
            item = items[i];

            //设置填充颜色
            ctx.fillStyle = item.backgroundColor;

            //平移到扇形中心
            ctx.translate(item.x, item.y);

            //根据偏移角度进行旋转
            ctx.rotate(item.startRadian);

            //构建路径
            radius = item.insideRadius + item.sectorRadius;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, item.radian);
            if (item.insideRadius == 0)        //根据内半径是否为0分别处理
            {
                ctx.lineTo(0, 0);
            } else {
                ctx.rotate(item.radian);
                ctx.lineTo(item.insideRadius, 0);
                ctx.rotate(-item.radian);
                ctx.arc(0, 0, item.insideRadius, item.radian, 0, true);
            }
            ctx.closePath();

            //填充颜色
            ctx.fill();

            ctx.restore();
        }

        ctx.restore();
    }


    _paintLabel (ctx) {
        let labelInnerFlag = this._chartInfo_In.labelInnerFlag,
            itemArray = this._itemArray,
            items, item,
            r1, r2,
            x1, y1, x2, y2, x3, y3,
            h,
            i, len;

        ctx.save();

        //(1)设置共同样式
        ctx.font = Styles.LABEL_FONT;

        //(2)获取文字高度
        h = Utility.getTextHeight(ctx);

        //(3)绘制标签：根据标签是否绘制在扇形内部分别进行处理
        if (labelInnerFlag == true) {
            //设置文字对齐方式
            ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;
            ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

            //设置填充颜色(白色)
            ctx.fillStyle = Styles.PIE_LABEL_INNER_FONT_COLOR;

            //循环绘制标签
            items = itemArray[0];
            len = items.length;
            for (i = 0; i < len; i++) {
                ctx.save();

                //取得扇形对象
                item = items[i];

                //平移到扇形中心
                ctx.translate(item.x, item.y);

                //计算文字绘制位置
                r1 = item.insideRadius + item.sectorRadius / 2;
                x1 = r1 * Math.cos(item.bisectingRadian);
                y1 = r1 * Math.sin(item.bisectingRadian);

                ctx.fillText(item.name, x1, y1);

                ctx.restore();
            }

        } else {

            //循环绘制标签以及引导线
            items = itemArray[0];
            len = items.length;
            for (i = 0; i < len; i++) {
                ctx.save();

                //取得扇形对象
                item = items[i];

                //设置描边和填充颜色
                ctx.strokeStyle = item.backgroundColor;
                ctx.fillStyle = item.backgroundColor;


                //计算引导线前两个点坐标
                r1 = item.insideRadius + item.sectorRadius;
                r2 = r1 + Styles.PIE_LABEL_GUIDE_LINE1_SIZE;

                x1 = r1 * Math.cos(item.bisectingRadian);
                y1 = r1 * Math.sin(item.bisectingRadian);

                x2 = r2 * Math.cos(item.bisectingRadian);
                y2 = r2 * Math.sin(item.bisectingRadian);

                //计算第三个点坐标
                //下面逻辑中的1.0是一个像素的概念。是一种粗糙的比较，但是足够用
                y3 = y2;

                if (x2 - x1 > 1.0) {
                    x3 = x2 + Styles.PIE_LABEL_GUIDE_LINE2_SIZE;

                } else if (x1 - x2 > 1.0) {

                    x3 = x2 - Styles.PIE_LABEL_GUIDE_LINE2_SIZE;

                } else {
                    x3 = x2;
                }

                if (Math.abs(y1 - y2) < 1.0) {
                    x3 = x2;
                }

                //平移到扇形中心
                ctx.translate(item.x, item.y);

                //绘制引导线
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineTo(x3, y3);
                ctx.stroke();

                //绘制标签
                if (item.bisectingAngle > -90 && item.bisectingAngle < 90) {
                    ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;
                    ctx.textAlign = Constants.TEXT_ALIGN_LEFT;

                    x1 = x3 + Styles.PIE_LABEL_OFFSET;
                    y1 = y3;

                } else if (item.bisectingAngle > 90 && item.bisectingAngle < 270) {
                    ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;
                    ctx.textAlign = Constants.TEXT_ALIGN_RIGHT;

                    x1 = x3 - Styles.PIE_LABEL_OFFSET;
                    y1 = y3;

                } else if (item.bisectingAngle == -90) {
                    ctx.textBaseline = Constants.TEXT_BASE_LINE_BOTTOM;
                    ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

                    x1 = x3;
                    y1 = y3 - Styles.PIE_LABEL_OFFSET;

                } else if (item.bisectingAngle == 90) {
                    ctx.textBaseline = Constants.TEXT_BASE_LINE_TOP;
                    ctx.textAlign = Constants.TEXT_ALIGN_CENTER;

                    x1 = x3;
                    y1 = y3 + Styles.PIE_LABEL_OFFSET;
                }

                ctx.fillText(item.name, x1, y1);

                ctx.restore();

            }

        }

        ctx.restore();

    }

    _paintMaskImage () {
        let ctx = this._ctx,
            ctxBak = this._ctxBak,
            chartInfo_In = this._chartInfo_In,
            centerX = chartInfo_In.centerX,
            centerY = chartInfo_In.centerY,
            canvasWidth = this._canvas.width,
            canvasHeight = this._canvas.height,
            maskRadius = this._maskRadius,
            maskRadian = this._maskRadian;

        //恢复绘图表面，将在此之上绘制圆环
        ctx.putImageData(this._canvasSurface, 0, 0);

        ctx.save();

        //构建剪切路径
        ctx.beginPath();
        ctx.arc(centerX, centerY, maskRadius, -Math.PI / 2, (-Math.PI / 2 + maskRadian));
        ctx.lineTo(centerX, centerY);
        ctx.closePath();

        //剪切
        ctx.clip();

        //将_ctxBak的内容绘制到剪切区域
        ctx.drawImage(ctxBak.canvas, 0, 0, canvasWidth, canvasHeight);

        ctx.restore();
    }

    _paintSelector () {
        let ctx = this._ctx,
            selectedIndex = this._selectedIndex,
            legendTop = this._chartInfo_In.legendTop,
            selectorPositionX = this._selectorPositionX,
            selectorPositionOffsetY = this._selectorPositionOffsetY,
            selectorRectWidth = this._selectorRectWidth,
            selectorRectHeight = this._selectorRectHeight,
            selectorRowHeight = this._selectorRowHeight;

        if (selectedIndex >= 0) {
            ctx.save();

            ctx.lineWidth = Styles.PIE_SELECTOR_LINE_WIDTH;
            ctx.strokeStyle = Styles.PIE_SELECTOR_LINE_COLOR;

            ctx.strokeRect(selectorPositionX,
                Utility.adjustPosition(legendTop + selectorRowHeight * selectedIndex - selectorPositionOffsetY),
                selectorRectWidth,
                selectorRectHeight);

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