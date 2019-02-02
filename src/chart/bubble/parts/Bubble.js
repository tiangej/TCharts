import PartBase from '../../../base/chart/ChartBase.js';

export default class Bubble extends PartBase {

    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.seriesIndex = -1;
        this.index = -1;
        this.valueX;
        this.valueY;
        this.valueRadius;
        this.radius = 10;


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    isPointInBubble (x, y) {
        if (Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) < this.radius) {
            return true;
        } else {
            return false;
        }
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/


}