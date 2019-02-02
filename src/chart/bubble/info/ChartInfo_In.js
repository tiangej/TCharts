import AxisChartInfoBase_In from '../../../base/info/AxisChartInfoBase_In.js';

export default class ChartInfo_In extends AxisChartInfoBase_In {

    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.minRadius = 5;          //气泡最小半径
        this.maxRadius = 10;       //气泡最大半径
        this.schema = [];              //数据单元代表的含义。比如： ['年龄','身高','体重'] 


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }

}