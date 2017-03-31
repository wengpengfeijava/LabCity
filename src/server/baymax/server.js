/**
 * Created by 46607 on 2017/3/31.
 */

var server = require('express')();

server.get('/', function (req, res) {
    res.send({
        info: '123'
    })
})

server.listen(5100, function () {
    console.log('listen at 5100');
});
