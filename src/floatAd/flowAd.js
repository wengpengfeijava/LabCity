/**
 * Created by 46607 on 2017/8/7.
 * 翁鹏飞
 ${customer.Address}
 */
(function () {
    var x = 0, y = 0;
    var xin = false, yin = true;
    var step = 1;
    var delay = 10;
    var obj = document.getElementById("flow_intro"),
        closer = document.getElementById('closer');
    closer.style.cursor = 'pointer';
    closer.style.textDecoration = 'underline';
    closer.style.position = 'absolute';
    closer.style.top = 0;
    closer.style.right = 0;
    closer.style.padding = '5px';
    closer.style.color = 'blue';
    closer.style.fontSize = '12px';
    function float() {
        var TOP = 0;
        var LEFT = 0;
        var RIGHT = (document.body.clientWidth || document.documentElement.clientWidth) - obj.offsetWidth;
        var BOTTOM = (document.body.clientHeight || document.documentElement.clientHeight) - obj.offsetHeight;
        obj.style.left = x + (document.body.scrollLeft || document.documentElement.scrollLeft) + 'px';
        obj.style.top = y + (document.body.scrollTop || document.documentElement.scrollTop) + 'px';
        x = x + step * (xin ? 1 : -1);
        if (x < LEFT) {
            xin = true;
            x = LEFT
        }
        if (x > RIGHT) {
            xin = false;
            x = RIGHT
        }
        y = y + step * (yin ? 1 : -1);
        if (y < TOP) {
            yin = true;
            y = TOP
        }
        if (y > BOTTOM) {
            yin = false;
            y = BOTTOM
        }
    }

    var itl = setInterval(float, delay);
    obj.onmouseover = function () {
        clearInterval(itl)
    };
    obj.onmouseout = function () {
        itl = setInterval(float, delay)
    };

    document.getElementById('closer').onclick = function () {
        obj.remove();
        clearInterval(itl);
    }
})();