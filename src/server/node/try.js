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


app.get('/tete', function (req, res, next) {
    var request = require('request');
    request.post({
        url: 'http://jxjy.jnhrss.gov.cn:9092/login.gson?flag=true',
        form: {
            roleSystem: 9,
            cardType: 1,
            account: 'admin',
            password: 'sdfsf'
        }
    }, function (err, httpResponse, body) { /* ... */
        console.log(body);
        res.send(body)
    })

})

app.listen(1515, function () {
    console.log('listen at 1515');
});
