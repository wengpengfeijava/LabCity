/**
 * Created by 46607 on 2017/3/31.
 */

var server = require('express')();

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
    res.send({
        info: [
            {
                domain: 'www.baymax.com',
                pages: [
                    {
                        name: 'index',
                        stateName: ''
                    }
                ]
            },
            {
                domain: 'www.spiderman.com',
                pages: []
            }
        ]
    });
});

server.listen(5100, function () {
    console.log('listen at 5100');
});
