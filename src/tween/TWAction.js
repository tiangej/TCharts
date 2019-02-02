export default class TWAction {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.totleTimes = 0;           //缓动次数
        this.start = 0;              //缓动开始时，从第几次缓动开始  
        this.dataArray = [];          //本动作操控的TWData数据集
        this.algorithm = null;        //缓动算法
        this.nextAction = null;       //本动作结束后的下一个动作


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    setData (dataArray, algorithm, duration) {
        this.dataArray = dataArray;
        this.algorithm = algorithm;

        this.start = 0;
        this.totleTimes = Math.ceil(duration / TWAction.FRAME_DURATION);
    }

    chain (action) {
        this.nextAction = action;
    }

    nextFrame () {
        let target,
            from,
            to,
            callBack,

            arr,
            value,
            i, j, len1, len2,

            rtn = true;

        if (this.start > this.totleTimes) {
            this.start = 0;
            rtn = false;

        } else {

            len1 = this.dataArray.length;

            for (i = 0; i < len1; i++) {
                target = this.dataArray[i].target;
                from = this.dataArray[i].from;
                to = this.dataArray[i].to;
                callBack = this.dataArray[i].callBack;

                arr = [];
                len2 = from.length;

                for (j = 0; j < len2; j++) {
                    value = this.algorithm(this.start,
                        from[j],
                        to[j] - from[j],
                        this.totleTimes);

                    arr.push(value);
                }

                callBack(target, arr);

            }

            this.start++;
        }

        return rtn;
    }

    init () {
        this.totleTimes = 0;
        this.start = 0;
        this.dataArray = [];
        this.algorithm = null;
        this.callBack = null;
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/

}




/***************************************************************
 * 静态变量
 ***************************************************************/
TWAction.FRAME_DURATION = 17;      //帧频为60的状态下，一帧的播放时长为17ms ( 1000ms/60 )
