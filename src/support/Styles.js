const Styles = {
    
    //共同部分
    TITLE_FONT: '16px Microsoft YaHei',          //标题字体        
    LEGEND_FONT: '14px Microsoft YaHei',         //图例字体  
    LABEL_FONT: '10px Microsoft YaHei',          //标签字体  
    AXIS_NAME_FONT: '14px Microsoft YaHei',      //轴名称字体  
    FONT_FILL_COLOR: '#000000',                  //默认字体填充颜色
    AXIS_LINE_WIDTH: 0.5,                        //轴线的线宽
    AXIS_LINE_COLOR: '#333333',                  //轴线颜色
    AXIS_SCALE_UNIT_LINE_SIZE: 5,                //刻度线的长度
    GRID_LINE_WIDTH: 0.5,                        //网格虚线的线宽
    GRID_LINE_COLOR: '#BBCCDD',                  //网格虚线颜色
    GRID_LINE_DASH: [5, 5],                      //网格虚线点的间隔
    XAXIS_LABEL_OFFSET: 16,                      //x轴标签文字中心点到x轴线的距离
    XAXIS_LABEL_OFFSET_FOR_ROTATE: 16,           //x轴标签旋转时，文字中心点到x轴线的距离
    YAXIS_LABEL_OFFSET: 16,                      //y轴标签文字中心点到y轴线的距离
    YAXIS_LABEL_OFFSET_FOR_ROTATE: 16,           //y轴标签旋转时，文字中心点到y轴线的距离
    LEGEND_SHAPE_TEXT_GAP: 5,                    //图例中，色块和文字的间隔
    LEGEND_GAP: 15,                              //图例横向排列时，图例之间的间隔
    TIP_LOCATION_OFFSET: 20,                     //定位Tip位置时，相对鼠标位置的偏移量


    //气泡图
    BUBBLE_ALPHA: 0.7,                         //气泡的透明度


    //柱状图
    COLUMN_SELECTOR_LINE_WIDTH: 1.0,           //用于框选项目的方框的边框线线宽
    COLUMN_SELECTOR_LINE_COLOR: '#C23531',     //用于框选项目的方框的边框线颜色


    //折线图
    LINE_LINE_WIDTH: 1.0,                      //折线的线宽
    LINE_AREA_ALPHA: 0.7,                      //绘制面积图时的透明度
    LINE_MARKPOINT_WIDTH: 1.0,                 //标记点的线宽
    LINE_MARKPOINT_RADIUS: 2,                  //标记点的圆半径
    LINE_MARKPOINT_BAK_COLOR: '#F3F3F3',       //标记点的背景颜色
    LINE_SELECTOR_LINE_WIDTH: 1.0,             //用于标志选择项的线段的线宽
    LINE_SELECTOR_LINE_COLOR: '#C23531',       //用于标志选择项的线段的颜色


    //饼图
    PIE_LABEL_INNER_FONT_COLOR: '#FFFFFF',     //当标签文字在饼内显示时，文字的颜色
    PIE_LABEL_GUIDE_LINE1_SIZE: 20,            //当标签文字在饼外显示时，连接饼块和标签文字的引导线1的长度
    PIE_LABEL_GUIDE_LINE2_SIZE: 15,            //当标签文字在饼外显示时，连接饼块和标签文字的引导线2的长度
    PIE_LABEL_OFFSET: 5,                       //引导线和标签文字的间距
    PIE_SELECTOR_TRANSLATE: 10,                //被选择的饼块的位移量
    PIE_SELECTOR_LINE_WIDTH: 1.0,              //框选数据项的方框的边框线线宽
    PIE_SELECTOR_LINE_COLOR: '#FF0000',        //框选数据项的方框的边框颜色


    //雷达图
    RADAR_LABEL_FONT: '12px Microsoft YaHei',  //指标文字的字体
    RADAR_LABEL_COLOR: '#000000',              //指标文字的颜色
    RADAR_LABEL_POSITION_OFFSET: 10,           //指标文字和对应多边形顶点之间的间距
    RADAR_LINE_WIDTH: 3.0,                     //数据雷达线的线宽
    RADAR_BAK_LINE_WIDTH: 1.0,                 //指标多边形框线和半径分割线的线宽
    RADAR_BAK_LINE_COLOR: '#C9C9C9',           //指标多边形框线和半径分割线的颜色
    RADAR_BAK_FILL_COLOR: '#E6E6E6',           //指标多边形的背景颜色


    //散点图
    SCATTER_POINT_ALPHA: 0.7,                  //散点的透明度
    SCATTER_CROSS_LINE_WIDTH: 1.0,             //用于标识鼠标位置的十字线的线宽
    SCATTER_CROSS_COLOR: '#FF0000',            //用于标识鼠标位置的十字线的颜色


    //旭日图
    SUNBURS_LABEL_COLOR: '#000000',            //标签文字的颜色
    SUNBURS_BORDER_COLOR: '#000000'            //扇形块的边框颜色
}


export default Styles;