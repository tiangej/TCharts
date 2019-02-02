export default class VAxisInfoBase_In {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.min = Number.MIN_VALUE;       //数值轴的最小值。保持默认值代表需要自动计算
        this.max = Number.MAX_VALUE;     //数值轴的最大值。保持默认值代表需要自动计算
        this.labelMaxCount = 7;                   //标签显示的最大个数
        this.zeroExtend = true;                    //当数值范围不包括0时，是否将范围扩展到0
        this.labelRotate = 0;                        //标签旋转角度    


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }
}