import Status from '../../support/Status.js';

export default class ChartBase {
    constructor() {
        ///////////////////////
        // 公有成员变量
        ///////////////////////


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._parentDiv = null;                 //子组件: 图表各个子组件的父容器
        this._canvas = null;
        this._tipDiv = null;

        this._painter = null;                   //画家引用

        this._status = '';                      //状态

        this._eventListenersAddedFlag = false;  //由于js无法判断事件监听函数是否已经存在，因此自定义标志位来判断
        this._surfaceImageData = null;          //Canvas绘图表面，用于保存Canvas图片

        this._animationFrameID;


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    stop () {
        this._status = Status.STOP;
    }


    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _setPainter (painter) {
        this._painter = painter.getInstance();
    }

    _paint () {
        this._painter.setChart(this);
        this._painter.paint();
    }

    /*
    * 动态生成tip对象
    * 在本图表系列中，tip是由段落p对象和table对象构成，其外观由外部指定的CSS控制
    */
    _createTip (className) {
        let tip;

        //生成tip的div对象,并增加class样式。注意：是增加而不是替换
        tip = document.createElement('div');
        tip.className += ' ' + className;

        //生成段落对象，用于显示类目名称
        tip.appendChild(document.createElement('p'));

        //生成表格对象，用于系列名称和数据
        tip.appendChild(document.createElement('table'));

        //返回
        return tip;
    }
}