export default class TWData {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.target = null;
        this.from = [];
        this.to = [];
        this.callBack = null;


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
    init () {
        this.target = null;
        this.from = [];
        this.to = [];
        this.callBack = null;
    }

    setData (target, fromArray, toArray, callBack) {
        this.target = target;
        this.from = fromArray;
        this.to = toArray;
        this.callBack = callBack;
    }



    /***************************************************************
     * 私有成员函数
     ***************************************************************/

}
