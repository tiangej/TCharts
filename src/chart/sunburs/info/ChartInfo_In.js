import ChartInfoBase_In from '../../../base/info/ChartInfoBase_In.js';


export default class ChartInfo_In extends ChartInfoBase_In {
    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.centerX = 350;          //旭日图中心位置：相对于div左上角
        this.centerY = 250;

        this.insideRadius = 30;       //最里层扇形的内半径
        this.sectorRadius = 40;       //扇形半径


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }
}
