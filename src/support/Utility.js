import Constants from './Constants.js';

export default class Utility {


    /***************************************************************
     * 静态函数
     ***************************************************************/

    /*
    * 计算【值轴】的刻度单位
    */
    static getScaleUnit (min, max, scaleMaxCount) {
        let i, len,
            avg,
            gaps = [1, 2, 2.5, 5, 10],
            scaleUnit,
            magnitude;

        //计算均分值
        avg = (max - min) / (scaleMaxCount-1);

        //计算均分值的数量级
        magnitude = this.getMagnitude(avg);

        //循环，直至第一个大于或等于均分值的整数值出现
        len = gaps.length;
        for (i = 0; i < len; i++) {
            scaleUnit = gaps[i] * magnitude;
            if (scaleUnit >= avg) {
                break;
            }
        }

        //返回
        return scaleUnit;
    }



    /*
    * 计算指定数值的数量级
    */
    static getMagnitude (num) {
        //计算数值的10的幂
        let pow = Math.floor(Math.log(num) / Math.log(10));;

        //计算数值的数量级
        let magnitude = Math.pow(10, pow);

        return magnitude;
    }



    /*
    * Canvas绘制时对坐标进行微调
    * 四舍五入取整后减小0.5像素。这样，在Canvas时位置处于两个像素之间，避免发虚。
    */
    static adjustPosition (xORy) {
        return Math.round(xORy) - Constants.HALF_PIXEL;
    }



    static windowToCanvas (boundingClientRectLeft,
        boundingClientRectTop,
        boundingClientRectWidth,
        boundingClientRectHeight,
        canvasWidth,
        canvasHeight,
        globleX,
        globleY,
        position) {
        position.x = globleX - boundingClientRectLeft * (canvasWidth / boundingClientRectWidth);
        position.y = globleY - boundingClientRectTop * (canvasHeight / boundingClientRectHeight);
    }



    static getTextWidth (canvasContext, text) {
        return canvasContext.measureText(text).width;
    }



    static getTextHeight (canvasContext) {
        return canvasContext.measureText('M').width * 7 / 6;
    }
}
