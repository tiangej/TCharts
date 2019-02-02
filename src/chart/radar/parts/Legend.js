import PartBase from '../../../base/chart/ChartBase.js';

export default class Legend extends PartBase {

    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.name = '';
        this.color = '#000000';
        this.selected = true;


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    /*****************************************************************
     * 公有成员函数
     ****************************************************************/
    isPointInPath (x, y) {
        if (x >= this.x &&
            x <= (this.x + this.width) &&
            y >= this.y &&
            y <= (this.y + this.height)) {
            return true;
        } else {
            return false;
        }
    }

}
