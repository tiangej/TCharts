export default class ChartInfoBase_In {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.title = 'TCharts';       //图表标题

        this.titleTop = 10;         //标题位置：相对于canvas边缘
        this.titleLeft = 10;

        this.legendTop = 10;        //图例位置：相对于canvas边缘
        this.legendLeft = 20;
        this.legendRight = 20;

        this.bodyTop = 70;       //图表主体区域（xy两轴围成的矩形区域）：相对于canvas边缘
        this.bodyBottom = 50;
        this.bodyLeft = 50;
        this.bodyRight = 50;

        //图表使用的颜色数组
        this.colors = ['#C23531', '#2F4554', '#61A0A8', '#D48265', '#91C7AE', '#CA8622', '#BDA29A', '#6E7074'];
        this.series = [];                 //数据系列
        this.selectedIndex = -1;         //选择项的索引 


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }


}