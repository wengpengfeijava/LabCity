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
                mappers: [
                    {
                        name: 'home',
                        source: {
                            mainJs: 'baymax',
                            mainView: 'baymax',
                            mainStyle: 'baymax'
                        }
                    },
                    {
                        name: 'carts',
                        source: {
                            mainJs: 'spiderman',
                            mainView: 'spiderman',
                            mainStyle: 'spiderman'
                        }
                    }
                ]
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

server.get('/getDomainMapArea', function (req, res) {
    var domainList = [
            {
                domain: 'www.baymax.com',
                pages: [
                    {
                        name: 'home',
                        areas: [
                            {
                                name: 'footer',
                                js: '', view: 'green',
                                style: 'green'
                            },

                            {
                                name: 'content',
                                js: 'green',
                                view: 'green',
                                style: 'green'
                            }
                        ]
                    }
                ]
            },
            {
                domain: 'www.spiderman.com',
                mainJs: 'spiderman',
                mainView: 'spiderman'
            }
        ],
        domain = req.query.domain;

    var findOut = _.find(domainList, function (item) {
        return item.domain === domain
    });

    res.send({
        info: findOut,
        status: true
    });
});


server.get('/test', function (req, res) {

    console.log('sdfsdfsdf');

    res.jsonp({
        status: true
    });
});

server.post('/loginTest', function (req, res) {

    res.send({a: 1})
});

var english_LETTER = [],
    english_letter = [],
    math_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 65; i < 91; i++) {
    english_LETTER.push(String.fromCharCode(i));
}

for (var i = 97; i < 123; i++) {
    english_letter.push(String.fromCharCode(i));
}
server.listen(5100, function () {
    console.log('listen at 5100');
});
