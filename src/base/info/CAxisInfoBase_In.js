export default class CAxisInfoBase_In {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.categorys = [];               //类目名称数组
        this.interval = -1;                //标签跨度。当类目非常多的时候，类目轴标签会重叠。因此必须按照相等的间隔不连续显示标签。保持默认值代表自动计算间隔
        this.labelRotate = 0;              //标签旋转角度        
        this.labelGap = 20;                //跨度为1时，相邻标签的间距


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }

}