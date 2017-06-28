/**
 * Created by 46607 on 2017/3/31.
 */

var server = require('express')(),
    _ = require('lodash'),
    mock = require('mockjs'),
    db = mock.Random;

//设置跨域访问
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

server.get('/api', function (req, res, next) {
    res.send({info: 1})
})

server.get('/getPracticePaper', function (req, res) {
    var practices = [];

    for (var i = 0; i < 10; i++) {
        practices.push(db.uuid())
    }


    res.send({
        data: {
            practicePaper: practices
        },
        head: {
            code: 200
        }
    });
});

server.get('/getQuestionById/:id', function (req, res) {
    var practice = {
        questionType: db.integer(1, 3),
        title: db.csentence(10, 20),
        id: req.params.id
    };
    var configItems = [];

    var configItemLength = practice.questionType === 1 ? 2 : 4;
    for (var j = 1; j <= configItemLength; j++) {
        var configItem = {
            content: db.csentence(5, 20),
            id: db.uuid()
        };
        configItems.push(configItem);
    }

    practice.configItems = configItems;
    if (practice.questionType === 1) {
        practice.userAnswers = [practice.configItems[db.integer(0, 1)].id];
    }

    if (practice.questionType === 2) {
        practice.userAnswers = [practice.configItems[db.integer(0, 3)].id];
    }

    if (practice.questionType === 3) {
        practice.userAnswers = [];
        var randoms = [];

        var answerItem = db.integer(1, 3);
        for (var k = 0; k < answerItem; k++) {
            random(randoms);
        }

        for (var q = 0; q < randoms.length; q++) {
            practice.userAnswers.push(practice.configItems[q].id);
        }

    }

    if (practice.questionType === 1) {
        practice.correct = [true, false][db.integer(0, 1)];
    }

    if (practice.questionType === 2) {
        practice.correctAnswer = practice.configItems[db.integer(0, 3)].id;
    }

    if (practice.questionType === 3) {
        practice.correctAnswers = [];
        var randoms = [];

        var answerItem = db.integer(1, 3);
        for (var k = 0; k < answerItem; k++) {
            random(randoms);
        }

        for (var q = 0; q < randoms.length; q++) {
            practice.correctAnswers.push(practice.configItems[q].id);
        }

        practice.userCorrect = [true, false][db.integer(0, 1)];

    }

    function random(randoms) {
        var randomNumber = db.integer(0, 3);
        if (randoms.indexOf(randomNumber) == -1) {
            randoms.push(randomNumber);
        } else {
            random(randoms, randomNumber);
        }
    }

    practice.description = db.cparagraph(0, 100);

    res.send({
        data: practice,
        head: {
            code: 200
        }
    })

});


server.post('/submitQuestion', function (req, res) {

    res.send({
        data: {},
        head: {
            code: 200
        }
    });
});

server.get('/getHistoryPracticeList/:type', function (req, res) {


    var practices = [];

    for (var i = 0; i < 10; i++) {
        practices.push(db.uuid())
    }

    res.send({
        data: {
            historyPractice: practices,
            opinionCount: db.integer(50, 100),
            radioCount: db.integer(50, 200),
            multiCount: db.integer(20, 300)
        },
        head: {
            code: 200
        }
    });
});

server.listen(1010, function () {
    console.log('listen at 1010');
});
