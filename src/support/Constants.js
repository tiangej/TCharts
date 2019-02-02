const Constants = {
    DIRTY: '-',                             //定义数据时，用来表示没有数据，或脏数据（无效数据）
    HALF_PIXEL: 0.5,                        //半个像素

    CLOSE_TO_ZERO: 0.0000001,               //浮点数计算会有精度误差，该常量用于判断两个浮点数是否相等。如果两个浮点数的差值小于该数，则认为相等。

    TEXT_BASE_LINE_MIDDLE: 'middle',        //在Canvas上绘制文字时，设置Context上下文的文字纵向排列属性
    TEXT_BASE_LINE_TOP: 'top',
    TEXT_BASE_LINE_BOTTOM: 'bottom',

    TEXT_ALIGN_CENTER: 'center',            //在Canvas上绘制文字时，设置Context上下文的文字横向排列属性
    TEXT_ALIGN_LEFT: 'left',
    TEXT_ALIGN_RIGHT: 'right',

    TEXT_BASE_LINE_IDEOGRAPHIC: 'ideographic',      //在Canvas上绘制文字时，设置Context上下文的文字基线属性

    ADD: 'add',
    REMOVE: 'remove',

    X_AXIS: 'x-axis',               //代表是x轴还是y轴
    Y_AXIS: 'y-axis',

    RADIAN_UNIT: Math.PI / 180      //弧度单位
}


export default Constants;
