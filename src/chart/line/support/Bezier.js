export default class Bezier {

    constructor() {

        ///////////////////////
        // 公有成员变量
        ///////////////////////


        ///////////////////////
        // 私有成员变量
        ///////////////////////
        this._coefficient = 0.5;   //系数    


        ///////////////////////
        // 初始化
        ///////////////////////

    }


    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    segment (originalPoints) {
        let i, len,
            point,
            arr = [],
            points = [],
            segmentArr = [];

        //循环设置各个点坐标
        len = originalPoints.length;
        for (i = 0; i < len; i++) {
            point = originalPoints[i];
            if (point.dirtyFlag == true) {
                if (arr.length > 0) {
                    segmentArr.push(arr);
                    arr = [];
                }
            } else {
                arr.push({ x: point.x, y: point.y });
            }
        }

        //最后一次
        if (arr.length > 0) {
            segmentArr.push(arr);
        }

        //转换为Bezier点
        points = this._segmentToBezier(segmentArr);

        //返回
        return points;
    }


    /***************************************************************
     * 私有成员函数
     ***************************************************************/
    _segmentToBezier (segmentArray) {
        let i, j, len1, len2,
            arr = [],
            points = [],
            segment,
            controlPoints;

        //循环设置各个点坐标
        len1 = segmentArray.length;
        for (i = 0; i < len1; i++) {
            arr = [];
            segment = segmentArray[i];

            len2 = segment.length;
            if (len2 < 3) {
                points.push(segment);
            } else if (len2 >= 3) {

                arr[0] = segment[0];  //A点
                arr[1] = segment[0];  //AB的第一个控制点

                for (j = 0; j < len2 - 2; j++) {
                    controlPoints = this._computeContrlPoints(segment[j], segment[j + 1], segment[j + 2]);
                    arr.push(controlPoints[0]);  //AB的第二个控制点
                    arr.push(segment[j + 1]);      //B点
                    arr.push(controlPoints[1]);  //BC的第一个控制点
                }

                //最后的控制点与最后点重合
                arr.push(segment[len2 - 1]);
                arr.push(segment[len2 - 1]);

                points.push(arr);
            }

        }

        return points;

    }

    /**
     * pointA.x ： A点的x坐标
     * pointA.y ： A点的y坐标
     * pointB.x ： B点的x坐标
     * pointB.y ： B点的y坐标
     * pointC.x ： C点的x坐标
     * pointC.y ： C点的y坐标
     * 
     * 【功能】
     *  根据A,B,C三点坐标计算位于B点两侧的两个控制点的坐标。这两个点的连线穿过B点。
     * B点左侧的点是以AB为端点的贝塞尔曲线的一个控制点，
     * B点右侧的点是以BC为端点的塞尔曲线的一个控制点，
     *
     * 该函数被循环调用，如果在内部定义变量，则反复调用的结果会产生大量的需要被回收的垃圾（被释放的变量资源），
     * 因此变量定义都在函数外部定义（那些名如【tXX】的变量）
     */
    _computeContrlPoints (pointA, pointB, pointC) {
        let controlPoints = [],
            num1, num2,
            AB, BC,
            rate1, rate2,
            x1, y1, x2, y2;

        //【1】初始化数组变量
        controlPoints.length = 0;

        //【2】计算ABC三点构成的三角形的边长
        num1 = pointB.x - pointA.x;
        num2 = pointB.y - pointA.y;
        AB = Math.sqrt(num1 * num1 + num2 * num2);

        num1 = pointC.x - pointB.x;
        num2 = pointC.y - pointB.y;
        BC = Math.sqrt(num1 * num1 + num2 * num2);

        //【3】计算AB和BC边长的比率
        rate1 = AB / (AB + BC);
        rate2 = 1 - rate1;

        //【4】计算AB和BC中点连成的线段沿着B角分线平移至B点后，线段两端的坐标
        num1 = (pointC.x - pointA.x) * this._coefficient;
        num2 = (pointC.y - pointA.y) * this._coefficient;
        x1 = pointB.x - rate1 * num1;
        y1 = pointB.y - rate1 * num2;
        x2 = pointB.x + rate2 * num1;
        y2 = pointB.y + rate2 * num2;

        controlPoints[0] = { x: x1, y: y1 };
        controlPoints[1] = { x: x2, y: y2 };

        return controlPoints;
    }

}
