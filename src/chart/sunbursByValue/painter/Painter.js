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

        this._itemArray;                 //存储扇形点的数组
        this._selectedItemArray;
        this._supportItemArray;

        this._selectedIndex;     //被选择的扇形


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

        this._itemArray = chart._itemArray;
        this._selectedItemArray = chart._selectedItemArray;
        this._supportItemArray = chart._supportItemArray;

        this._selectedIndex = chart.chartInfo_In.selectedIndex;
    }


    paint () {
        let canvas = this._canvas,
            ctx = this._ctx,
            selectedItemArray = this._selectedItemArray,
            supportItemArray = this._supportItemArray,
            canvasWidth = canvas.width,
            canvasHeight = canvas.height;

        switch (this._chart._status) {
            case Status.STEP1:         //绘制图表并缓存Canvas绘图表面

                //清空画布
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                //在_ctx上绘制图表固定的内容
                this._paintTitle();

                //缓存此时的_ctx绘图表面（全尺寸）
                this._canvasSurface = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

                //绘制扇形和标签
                this._paintSunburs(selectedItemArray, true);
                this._paintSunburs(supportItemArray, false);
                this._paintLabel(selectedItemArray, true);
                this._paintLabel(supportItemArray, false);

                break;

            case Status.STEP3:         //绘制选择项

                //恢复绘图表面，将在此之上绘制圆环
                ctx.putImageData(this._canvasSurface, 0, 0);

                //绘制扇形和标签
                this._paintSunburs(selectedItemArray, true);
                this._paintSunburs(supportItemArray, false);
                this._paintLabel(selectedItemArray, true);
                this._paintLabel(supportItemArray, false);

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

    _paintSunburs (itemArr, selectedFlag) {
        let ctx = this._ctx,
            item,
            radius,
            i, len;

        ctx.save();

        ctx.strokeStyle = Styles.SUNBURS_BORDER_COLOR;

        //循环绘制圆环
        len = itemArr.length;
        for (i = 0; i < len; i++) {
            ctx.save();

            //取得扇形对象
            item = itemArr[i];

            //设置填充颜色
            ctx.globalAlpha = item.backgroundColorAlpha;
            if (selectedFlag == false) {
                ctx.globalAlpha *= 0.1;
            }
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

            //填充，描边
            ctx.fill();
            ctx.stroke();

            ctx.restore();
        }

        ctx.restore();
    }

    _paintLabel (itemArr, selectedFlag) {

        let ctx = this._ctx,
            radianUnit = Constants.RADIAN_UNIT,
            item,
            r,
            x, y,
            i, len;

        ctx.save();

        //设置共同样式
        ctx.font = Styles.LABEL_FONT;
        ctx.textBaseline = Constants.TEXT_BASE_LINE_MIDDLE;
        ctx.textAlign = Constants.TEXT_ALIGN_CENTER;
        ctx.fillStyle = Styles.SUNBURS_LABEL_COLOR;
        if (selectedFlag == false) {
            ctx.globalAlpha *= 0.1;
        }

        //循环绘制标签
        len = itemArr.length;
        for (i = 0; i < len; i++) {
            ctx.save();

            //取得扇形对象
            item = itemArr[i];

            //计算文字绘制位置
            r = item.insideRadius + item.sectorRadius / 2;
            x = item.x + r * Math.cos(item.bisectingRadian);
            y = item.y + r * Math.sin(item.bisectingRadian);

            //平移到扇形中心
            ctx.translate(x, y);

            //根据角分线角度进行旋转
            if (item.bisectingAngle >= -90 && item.bisectingAngle < 90) {
                ctx.rotate(item.bisectingRadian);
            } else {
                ctx.rotate((item.bisectingAngle - 180) * radianUnit);
            }


            ctx.fillText(item.name, 0, 0);

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