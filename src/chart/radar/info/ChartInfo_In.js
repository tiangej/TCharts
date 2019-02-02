import ChartInfoBase_In from '../../../base/info/ChartInfoBase_In.js';


export default class ChartInfo_In extends ChartInfoBase_In {
    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.centerX = 350;          //雷达图中心位置：相对于div左上角
        this.centerY = 150;

        this.radius = 120;             //雷达图正多边形半径
        this.splitNumber = 5;        //半径分割数

        this.indicator = [];              //指标数组，例：  [ {name: 'AQI', max: 400} ,  {name: 'PM2.5', max: 250} ]


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
