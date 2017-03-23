/**
 * Created by 46607 on 2017/3/23.
 */
/**
 *
 * @param array
 * @param callback
 */
function forEach(array, callback) {
    if (!isArray(array)) {
        return;
    }
    var i = 0,
        len = array.length;
    for (i; i < len; i++) {
        isFunction(callback) && callback(array[i], i);
    }
}
/**
 *
 * @param array
 * @param who
 * @returns {number}
 */
function findIndex(array, who) {
    var i = 0,
        result = -1,
        len = array.length;
    if (!isArray(array)) {
        return result;
    }
    for (i; i < len; i++) {
        var item = array[i];
        if (item.name === who) {
            result = i;
            return result;
        }
    }
    return result;
}
var objString = Object.prototype.toString,

    browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            var result = {
//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                weixin: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger',
                // mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };

            return result;
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };

browser.versions.PC = !(browser.versions.android || browser.versions.iPhone || browser.versions.iPad);

/**
 *
 * @param obj
 * @returns {boolean}
 */
function isArray(obj) {
    return objString.call(obj) === '[object Array]';
}

/**
 *
 * @param fun
 * @returns {boolean}
 */
function isFunction(fun) {
    return objString.call(fun) === '[object Function]';
}

function Detector(name, platform) {

}

Detector.prototype = {
    constructor: Detector,
    detects: [],
    init: function () {
        // forEach(this.detects, function (item, index) {
        //     console.log(item);
        // });
    },

    push: function (name, platform) {
        if (findIndex(this.detects, name) === -1) {
            this.detects.push({
                name: name,
                platform: platform
            });
        }
    },

    detection: function () {
        forEach(this.detects, function (item, index) {
            document.getElementById(item.name).style.display = 'none';
            forEach(item.platform, function (subItem, subIndex) {
                if (browser.versions[subItem]) {
                    document.getElementById(item.name).style.display = 'block';
                }
            });
        });
    }
};