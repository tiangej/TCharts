export default class Line {

    /***************************************************************
     * 公有成员函数
     ***************************************************************/
    segment (originalPoints) {
        let i, len,
            point,
            arr = [],
            points = [];

        //循环设置各个点坐标
        len = originalPoints.length;
        for (i = 0; i < len; i++) {
            point = originalPoints[i];
            if (point.dirtyFlag == true) {
                if (arr.length > 0) {
                    points.push(arr);
                    arr = [];
                }
            } else {
                arr.push({ x: point.x, y: point.y });
            }
        }

        //最后一次
        points.push(arr);

        //返回
        return points;
    }

}
