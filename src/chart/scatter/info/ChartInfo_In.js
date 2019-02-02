import AxisChartInfoBase_In from '../../../base/info/AxisChartInfoBase_In.js';


export default class ChartInfo_In extends AxisChartInfoBase_In {
    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.radius = 5;         //散点圆形半径
        this.schema = [];      //数据单元代表的含义。比如： ['年龄','身高','体重'] 


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }
}
