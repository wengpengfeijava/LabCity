/**
 * Created by 46607 on 2017/3/31.
 */

var server = require('express')(),
    bodyParser = require('body-parser'),
    _ = require('lodash');

server.use(bodyParser.urlencoded());
//设置跨域访问
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

var command = {}

server.get('/ewang*', function (req, res) {
    var info = {};
    switch (req.query.cmd) {
        case 'loginchk':
            break;
        case 'Logout':
            break;
        case 'GetSession':
            info = {
                info: {},
                item: [
                    {}
                ],
                status: true,
                success: true
            };
            break;
        case 'GetUserDept':
            info = {
                "success": true,
                "message": "",
                "item": [{
                    "ac_dept": {
                        "deptid": 1,
                        "deptcode": "fjhb",
                        "deptname": "福建华博",
                        "parentid": 0,
                        "deptlevel": 0,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:18"
                    },
                    "ac_users": {
                        "userid": 1,
                        "usercode": "8888",
                        "username": "伊诺万管理员",
                        "sex": 1,
                        "birthday": "2011/5/6 0:00:00",
                        "photo": null,
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 2,
                        "tel": null,
                        "address": null,
                        "idcard": null,
                        "onthejob": 1,
                        "createtime": "2011/10/16 13:30:00",
                        "ismutidept": 1,
                        "employeetype": 0,
                        "jobstate": 0,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2011/10/28 18:09:41",
                        "pinyin": "YNWGLY              "
                    },
                    "id": 2,
                    "userid": 1,
                    "deptid": 1,
                    "lastmodifytime": "2012/3/29 17:05:21"
                }, {
                    "ac_dept": {
                        "deptid": 2,
                        "deptcode": "jsb",
                        "deptname": "技术部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:32"
                    },
                    "ac_users": {
                        "userid": 2,
                        "usercode": "6666",
                        "username": "陈清建",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 15:50:39",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 15:53:22",
                        "pinyin": "CQJ                 "
                    },
                    "id": 3,
                    "userid": 2,
                    "deptid": 2,
                    "lastmodifytime": "2012/5/26 15:53:22"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 3,
                        "usercode": "0006",
                        "username": "唐婷婷",
                        "sex": 2,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:34:09",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:34:09",
                        "pinyin": "TTT                 "
                    },
                    "id": 4,
                    "userid": 3,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:34:09"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 4,
                        "usercode": "0002",
                        "username": "陈燕",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:34:35",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:34:35",
                        "pinyin": "CY                  "
                    },
                    "id": 5,
                    "userid": 4,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:34:35"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 5,
                        "usercode": "0007",
                        "username": "陈玲玲",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:34:53",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:34:53",
                        "pinyin": "CLL                 "
                    },
                    "id": 6,
                    "userid": 5,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:34:53"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 7,
                        "usercode": "0009",
                        "username": "江娜",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:35:44",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2017/1/22 8:51:48",
                        "pinyin": "JN                  "
                    },
                    "id": 8,
                    "userid": 7,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:35:44"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 8,
                        "usercode": "0001",
                        "username": "胡晓静",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:36:03",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:36:03",
                        "pinyin": "HXJ                 "
                    },
                    "id": 9,
                    "userid": 8,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:36:03"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 9,
                        "usercode": "0003",
                        "username": "陈婧",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "670b14728ad9902aecba32e22fa4f6bd",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:36:22",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2017/4/17 17:15:45",
                        "pinyin": "CJ                  "
                    },
                    "id": 10,
                    "userid": 9,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:36:22"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 10,
                        "usercode": "0008",
                        "username": "饶芳",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:36:47",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/10/30 10:26:05",
                        "pinyin": "RF                  "
                    },
                    "id": 11,
                    "userid": 10,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:36:47"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 11,
                        "usercode": "0010",
                        "username": "徐文琳",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:37:12",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:37:11",
                        "pinyin": "XWL                 "
                    },
                    "id": 12,
                    "userid": 11,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:37:11"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 12,
                        "usercode": "0004",
                        "username": "郭锦",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:37:33",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:37:33",
                        "pinyin": "GJ                  "
                    },
                    "id": 13,
                    "userid": 12,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:37:33"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 13,
                        "usercode": "0005",
                        "username": "黄榕",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:37:51",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/26 17:37:51",
                        "pinyin": "HR                  "
                    },
                    "id": 14,
                    "userid": 13,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/26 17:37:51"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 6,
                        "usercode": "0011",
                        "username": "杨欣",
                        "sex": 0,
                        "birthday": "2012/5/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/5/26 17:35:23",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/5/29 9:09:31",
                        "pinyin": "YML                 "
                    },
                    "id": 15,
                    "userid": 6,
                    "deptid": 3,
                    "lastmodifytime": "2012/5/29 9:09:31"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 14,
                        "usercode": "0012",
                        "username": "黄茜莉",
                        "sex": 2,
                        "birthday": "2012/6/12 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/6/12 9:52:19",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/6/12 9:52:19",
                        "pinyin": "HQL                 "
                    },
                    "id": 16,
                    "userid": 14,
                    "deptid": 3,
                    "lastmodifytime": "2012/6/12 9:52:19"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 15,
                        "usercode": "0013",
                        "username": "谢莉莉",
                        "sex": 0,
                        "birthday": "2012/11/23 0:00:00",
                        "photo": "",
                        "password": "1b4555b04d80307bcc8ecd80f8eff03b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/11/23 11:13:22",
                        "ismutidept": 1,
                        "employeetype": 0,
                        "jobstate": 1,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2015/12/24 8:43:15",
                        "pinyin": "XLL                 "
                    },
                    "id": 17,
                    "userid": 15,
                    "deptid": 3,
                    "lastmodifytime": "2012/11/23 11:13:21"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 16,
                        "usercode": "0014",
                        "username": "小陈燕",
                        "sex": 0,
                        "birthday": "2012/11/23 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/11/23 11:14:20",
                        "ismutidept": 1,
                        "employeetype": 0,
                        "jobstate": 1,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/11/23 11:14:20",
                        "pinyin": "XCY                 "
                    },
                    "id": 18,
                    "userid": 16,
                    "deptid": 3,
                    "lastmodifytime": "2012/11/23 11:14:20"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 17,
                        "usercode": "0015",
                        "username": "许川燕",
                        "sex": 0,
                        "birthday": "2012/11/23 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2012/11/23 11:16:25",
                        "ismutidept": 1,
                        "employeetype": 0,
                        "jobstate": 1,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2012/11/23 11:16:25",
                        "pinyin": "XCY                 "
                    },
                    "id": 19,
                    "userid": 17,
                    "deptid": 3,
                    "lastmodifytime": "2012/11/23 11:16:25"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 18,
                        "usercode": "0016",
                        "username": "aaa",
                        "sex": 0,
                        "birthday": "2013/1/28 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2013/1/28 10:36:27",
                        "ismutidept": 2,
                        "employeetype": 1,
                        "jobstate": 2,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2013/1/28 11:11:33",
                        "pinyin": "                    "
                    },
                    "id": 22,
                    "userid": 18,
                    "deptid": 3,
                    "lastmodifytime": "2013/1/28 11:11:33"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 19,
                        "usercode": "0018",
                        "username": "肖梅珍",
                        "sex": 0,
                        "birthday": "2014/4/8 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2014/4/8 16:16:13",
                        "ismutidept": 2,
                        "employeetype": 1,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2014/4/8 16:38:04",
                        "pinyin": "XMZ                 "
                    },
                    "id": 24,
                    "userid": 19,
                    "deptid": 3,
                    "lastmodifytime": "2014/4/8 16:38:04"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 21,
                        "usercode": "0020",
                        "username": "张先花",
                        "sex": 0,
                        "birthday": "2015/1/26 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2015/1/26 11:07:21",
                        "ismutidept": 2,
                        "employeetype": 1,
                        "jobstate": 3,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2015/1/26 11:15:50",
                        "pinyin": "ZXH                 "
                    },
                    "id": 26,
                    "userid": 21,
                    "deptid": 3,
                    "lastmodifytime": "2015/1/26 11:15:50"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 22,
                        "usercode": "0021",
                        "username": "李惠真",
                        "sex": 0,
                        "birthday": "2016/3/21 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2016/3/21 9:21:00",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 1,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2016/3/21 9:38:42",
                        "pinyin": "LHZ                 "
                    },
                    "id": 28,
                    "userid": 22,
                    "deptid": 3,
                    "lastmodifytime": "2016/3/21 9:38:42"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 23,
                        "usercode": "0022",
                        "username": "林莹",
                        "sex": 2,
                        "birthday": "2016/6/6 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2016/6/6 11:37:36",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 1,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2016/6/6 11:38:04",
                        "pinyin": "LY                  "
                    },
                    "id": 29,
                    "userid": 23,
                    "deptid": 3,
                    "lastmodifytime": "2016/6/12 10:46:26"
                }, {
                    "ac_dept": {
                        "deptid": 3,
                        "deptcode": "kfb",
                        "deptname": "客服部",
                        "parentid": 1,
                        "deptlevel": 1,
                        "isvisible": 2,
                        "lastmodifytime": "2012/5/26 15:52:46"
                    },
                    "ac_users": {
                        "userid": 20,
                        "usercode": "0019",
                        "username": "测试",
                        "sex": 3,
                        "birthday": "2014/6/20 0:00:00",
                        "photo": "",
                        "password": "4a7d1ed414474e4033ac29ccb8653d9b",
                        "islock": 3,
                        "tel": "",
                        "address": "",
                        "idcard": "",
                        "onthejob": 1,
                        "createtime": "2014/6/20 15:39:31",
                        "ismutidept": 2,
                        "employeetype": 0,
                        "jobstate": 1,
                        "entryfrom": 0,
                        "degree": 0,
                        "entrynote": null,
                        "graduation": 0,
                        "professional": 0,
                        "qq": null,
                        "email": null,
                        "lastmodifytime": "2016/11/1 10:28:32",
                        "pinyin": "CS                  "
                    },
                    "id": 30,
                    "userid": 20,
                    "deptid": 3,
                    "lastmodifytime": "2016/12/20 8:49:45"
                }]
            }
            break;
        case 'GetSeatInfo':
            break;
        case 'SeatLogin':
            break;
        case 'GetNotice':
            break;
        case 'GetCallRecord':
            break;
        default:
            info = {
                info: {},
                item: [
                    {}
                ],
                status: true,
                success: true
            };
            break;
    }

    res.send(info);
});
server.post('/ewang*', function (req, res) {

    var info = {};
    switch (req.body.cmd) {
        case 'loginchk':
            break;
        case 'Logout':
            break;
        case 'GetSession':
            info = {
                info: {},
                item: [
                    {}
                ],
                status: true,
                success: true
            };
            break;
        case 'GetUserDept':
            break;
        case 'GetSeatInfo':

            break;
        case 'SeatLogin':
            break;
        case 'GetNotice':
            break;
        case 'GetCallRecord':
            break;
        default:
            info = {
                info: {},
                item: [
                    {}
                ],
                status: true,
                success: true
            };
            break;
    }

    res.send(info);
});


server.get('/loginPlatform', function (req, res) {
    res.send({
        info: {},
        status: true,
        success: true
    });
});

server.get('/login', function (req, res) {

    res.send({
        info: {},
        status: true,
        success: true
    });
});

server.get('/getPlatforms', function (req, res) {
    res.send({
        info: [
            {
                id: 'www.kjjxjy.com',
                url: 'www.kjjxjy.com',
                name: '省会计'
            },
            {
                id: 'www.surveyor.com',
                url: 'www.surveyor.com',
                name: '测绘'
            }, {
                id: 'ynmd.59iedu.com',
                url: 'ynmd.59iedu.com',
                name: '云南民族大学'
            }
        ],
        status: true,
        success: true
    });
});


server.get('/getPlatformByPhone', function (req, res) {
    res.send({
        info: [
            {
                id: Date.now(),
                phoneNumber: 15060428936,
                userName: '翁pengfei ',
                identify: 350181199000000000,
                url: 'http://ynmd.59iedu.com',
                platformId: 'ynmd.59iedu.com',
                name: '云南民族大学'
            },
            {
                id: Date.now(),
                phoneNumber: 15060428936,
                userName: '翁pengfei ',
                identify: 350181199000000000,
                url: 'http://www.kjjxjy.com',
                platformId: 'www.kjjxjy.com',
                name: '省会计'
            }
        ],
        status: true,
        success: true
    });
});

server.listen(1111, function () {
    console.log('listen at 5100');
});
