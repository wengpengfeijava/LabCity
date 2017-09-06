/**
 * Created by 46607 on 2017/8/14.
 ${customer.Address}
 */
let user = {
    userName: 'wengpengfeui',
    test() {
        console.log(this.userName);
    },
    test1: v => 3
}

user.test('123')
console.log(user.test1());