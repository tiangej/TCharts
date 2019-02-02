import ChartInfoBase_In from './ChartInfoBase_In.js';

export default class AxisChartInfoBase_In extends ChartInfoBase_In {

    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.xAxisName = 'X轴';              //显示在x轴尽头，用于表示x轴含义的文字。 <br>例如：时间、月份、国别
        this.yAxisName = 'Y轴';              //显示在y轴尽头，用于表示y轴含义的文字。 <br>例如：金额、浓度、雨量

        this.xAxisNameBottom = 25;        //x轴名称文字上边缘到canvas下边缘的距离
        this.yAxisNameTop = 40;           //y轴名称文字上边缘到canvas上边缘的距离


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }

}