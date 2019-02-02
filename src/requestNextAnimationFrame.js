/*****************************************************************************
 * 定义window动画循环控制函数（利用立即执行函数）
 *****************************************************************************/
window.requestNextAnimationFrame = (function () {
        return (window.requestAnimationFrame
                || window.msRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.webkitRequestAnimationFrame)
                || function (func) {
                        setTimeout(func, 16);
                };
})();
