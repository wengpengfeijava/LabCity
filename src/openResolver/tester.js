/**
 * Created by 46607 on 2017/3/31.
 */

var app = require('express')(),
    bodyParser = require('body-parser'),
    request = require('request'),
    _ = require('lodash');

// 算法
var crypto = require('crypto');

var cookieParser = require('cookie-parser');

var appId = 'wxd8e3a13cb8a3bbe0',
    secret = '4499e48797832ddfb36e268b316a53b0',
    token = {
        "access_token": "MLgOBEbHwA92F2GY1E-OEXA4oGHYCZ1EbTxmUhDThbyWZeqKxzjXKu_aicwJC0LHv85sBSKppDlRkaqlTX0jwqfgN8XVxPnBhTlsVH8d2QwKERaAIAAUH",
        "expires_in": 7200
    },
    jsApi = {
        "errcode": 0,
        "errmsg": "ok",
        "ticket": "kgt8ON7yVITDhtdwci0qedzskvQvROln8gb_9Jbb9sWVAXp-geKDmcfzPxJYUl79e9FDYMse8Pl7QRFUA0C_9g",
        "expires_in": 7200
    }

app.use(cookieParser());

app.use(bodyParser.urlencoded());
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/wpf', function (req, res, next) {
    setTimeout(function () {
            res.jsonp({url: 'http://www.jistory.cn'})
        }
        // , 3000
    )
});

app.listen(1616, function () {
    console.log('listen at 1515');
});
