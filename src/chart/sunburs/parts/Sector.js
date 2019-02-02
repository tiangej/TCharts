import PartBase from '../../../base/chart/ChartBase.js';

export default class Sector extends PartBase {

    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.sectorRadius;         //扇形半径
        this.insideRadius;         //扇形内圆半径

        this.startAngle;           //扇形的起始角度
        this.startRadian;          //扇形的起始弧度（角度转弧度）

        this.angle;               //扇形的角度
        this.radian;              //扇形的弧度（角度转弧度）

        this.bisectingAngle;      //扇形的角分线角度
        this.bisectingRadian;     //扇形的角分线弧度（角度转弧度）

        this.backgroundColor;      //扇形颜色
        this.backgroundColorAlpha;  //扇形颜色透明度

        this.deep;                //扇形在径向所在的层级，最里层为0，向外逐层增加1
        this.no;
        this.span;


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
    isPointInPath (x, y) {
        let rtn = false,
            diffX, diffY,
            radius,
            angle;

        //计算指定点和本扇形坐标之间的横向，纵向距离
        diffX = x - this.x;
        diffY = y - this.y;

        //计算指定点和本扇形坐标之间的距离
        radius = Math.sqrt(diffX * diffX + diffY * diffY);

        //计算指定点和本扇形坐标连线与x轴的夹角
        angle = Math.atan2(diffY, diffX) * 180 / Math.PI;

        //校正第四象限角度
        if (angle > -180 && angle < -90) {
            angle += 360;
        }

        //判断指定点与本扇形的关系
        if (radius >= this.insideRadius &&
            radius <= (this.insideRadius + this.sectorRadius) &&
            angle >= this.startAngle &&
            angle < (this.startAngle + this.angle)) {
            rtn = true;
        }

        return rtn;
    }
}