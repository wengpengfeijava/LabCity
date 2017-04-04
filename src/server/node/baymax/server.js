/**
 * Created by 46607 on 2017/3/31.
 */

var server = require('express')(),
    _ = require('lodash');

//设置跨域访问
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

server.get('/getDomainMap', function (req, res) {
    var domainList = [
            {
                domain: 'www.baymax.com',
                mainJs: 'baymax',
                mainView: 'baymax'
            },
            {
                domain: 'www.spiderman.com',
                mainJs: 'spiderman',
                mainView: 'spiderman'
            }
        ],
        domain = req.query.domain;
    console.log(domain);

    var findOut = _.find(domainList, function (item) {
        return item.domain === domain
    });

    res.send({
        info: findOut,
        status: true
    });
});

server.listen(5100, function () {
    console.log('listen at 5100');
});
