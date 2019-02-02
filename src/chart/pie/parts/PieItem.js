import PartBase from '../../../base/chart/ChartBase.js';

export default class PieItem extends PartBase {

    constructor() {
        super();

        ///////////////////////
        // 公有成员变量
        ///////////////////////
        this.index;                    //扇形对象对应的数据项在数据系列中的索引    
        this.value;                    //扇形对象对应的数据项中的值

        this.percent;                 //value占所有饼块总值的百分比

        this.sectorRadius;         //扇形半径
        this.insideRadius;         //扇形内圆半径

        this.startAngle;            //扇形的起始角度
        this.startRadian;          //扇形的起始弧度（角度转弧度）

        this.angle;                 //扇形的角度
        this.radian;                //扇形的弧度（角度转弧度）

        this.bisectingAngle;             //扇形的角分线角度
        this.bisectingRadian;           //扇形的角分线弧度（角度转弧度）

        this.backgroundColor;        //扇形颜色


        ///////////////////////
        // 私有成员变量
        ///////////////////////


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    /*****************************************************************
     * 公有成员函数
     ****************************************************************/
    isPointInPath (x, y) {
        let rtn = false,
            diffX, diffY,
            radius, angle;


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