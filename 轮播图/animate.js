function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器里
            // if (callback) {
            //     callback();
            // }
            // 短路运算符
            callback && callback();
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }

    }, 15);
}