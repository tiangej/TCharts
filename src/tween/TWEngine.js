import ObjectPool from '../support/ObjectPool.js';
import TWAction from "../tween/TWAction.js";
import TWData from "../tween/TWData.js";

export default class TWEngine {

    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._actions = [];
        this._firstAction = null;
        this._currentAction = null;

        this._actionPool = new ObjectPool(TWAction);
        this._dataPool = new ObjectPool(TWData);

        this._isPlaying = false;


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    getTWAction () {
        let obj;

        obj = this._actionPool.getObj();
        obj.init();
        this._actions.push(obj);

        return obj;
    }

    getTWData () {
        let obj;

        obj = this._dataPool.getObj();
        obj.init();

        return obj;
    }

    releaseAllTWData () {
        this._dataPool.releaseAll();
    }

    releaseAllTWAction () {
        this._actions.length = 0;
        this._actionPool.releaseAll();
    }

    setFirstTWAction (action) {
        this._firstAction = action;
        this._currentAction = this._firstAction;
    }


    nextFrame () {
        let rtn = true;

        if (this._isPlaying == true) {
            if (this._currentAction.nextFrame() == false)   //当前action的缓动已经结束 
            {
                if (this._currentAction.nextAction != null) {
                    this._currentAction = this._currentAction.nextAction;
                } else {
                    rtn = false;
                }
            }
        } else {
            rtn = false;
        }

        return rtn;
    }

    start () {
        this._isPlaying = true;
    }

    stop () {
        let i, len;

        this._isPlaying = false;
        this._currentAction = this._firstAction;

        len = this._actions.length;
        for (i = 0; i < len; i++) {
            this._actions[i].init();
        }
    }

}
