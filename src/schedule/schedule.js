/**
 * Created by 46607 on 2017/8/23.
 ${customer.Address}
 */

var schedule = require('node-schedule');


schedule.scheduleJob('1 * * * * *', function () {
    console.log('The answer to life, the universe, and everything!');
});
