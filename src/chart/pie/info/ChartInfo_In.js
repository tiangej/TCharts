import ChartInfoBase_In from '../../../base/info/ChartInfoBase_In.js';


export default class ChartInfo_In extends ChartInfoBase_In {
    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.centerX = 350;          //圆环中心位置：相对于canvas左上角
        this.centerY = 150;

        this.insideRadius = 0;               //扇形内半径
        this.sectorRadius = 100;           //扇形半径

        this.labelInnerFlag = false;       //标签显示位置
        this.percentDecimalDigits = 2;  //扇形角度百分比小数位数


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////
        this.legendTop = 50;
        this.legendLeft = 20;

    }
}
