export default class VAxisInfoBase_Out {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        //数值轴的最小值
        //VAxisInfoBase_In.min = 默认值时 :  VAxisInfoBase_Out.min的值是内部算法计算的结果
        //VAxisInfoBase_In.min != 默认值时 :  VAxisInfoBase_Out.min = VAxisInfoBase_In.min
        this.min = 0;
        this.max = 0;                     //同理

        this.minScale;                   //最小刻度值
        this.maxScale;                  //最大刻度值

        this.labels = [];                 //保存数值轴上显示的标签文字
        this.originIndex = -1;        //原点标签在labels数组中的索引，用于绘制轴线
        this.originValue;               //原点的值
        this.originPosition;           //原点在Canvas上的相对位置
        this.unitValueSize = -1;      //数值1在轴上占用的长度
        this.scaleUnit = 0;              //单位刻度值
        this.scaleUnitSize = 0;        //单位刻度在轴上占用的长度

        this.decimalDigit;              //数字标签小数位数


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }

}