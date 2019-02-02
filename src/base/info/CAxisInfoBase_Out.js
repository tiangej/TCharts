export default class CAxisInfoBase_Out {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.labels = [];               //保存类目轴上显示的标签文字
        this.labelSizes = [];            //保存所有类目标签文字的长度

        //标签间隔个数
        //CAxisInfoBase_In.interval >= 0时 :  CAxisInfoBase_Out.interval = CAxisInfoBase_In.interval
        //CAxisInfoBase_In.interval < 0时   :  CAxisInfoBase_Out.interval的值是内部算法计算的结果
        this.interval = 0;
        this.intervalSize = 0;           //根据interval和categorySize计算出的长度

        this.categorySize = 0;          //一个类目在轴上占用的长度


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }

}