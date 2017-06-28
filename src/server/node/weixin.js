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

app.get('/accessToken', function (req, res, next) {
    if (!token) {
        request({
            method: 'get',
            uri: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + secret
        }, function (error, response) {
            if (error) {
                return console.error('Get failed:', error);
            }
            token = response.body;
            // res.send(token);
            return token;
        })
    } else {
        getTicket(token.access_token, function (error, response) {
            res.send(response.body);
        })
    }
});

function getTicket(token, callback) {
    if (!jsApi) {
        return request({
            uri: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi'
        }, callback)
    } else {
        callback({}, {
            body: jsApi
        })
    }

}


app.get('/hashed', function (req, res, next) {
    var sha1 = crypto.createHash('sha1');

    var noncestr = "kskdhf5555WJKHBBCCJK";
    var jsapi_ticket = jsApi.ticket;
    var timestamp = Date.now();
    var url = 'http://www.baidu.com';
    var to = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url;
    sha1.update(to);
    res.send({
        info: sha1.digest('hex')
    })
})

app.listen(1515, function () {
    console.log('listen at 1515');
});
