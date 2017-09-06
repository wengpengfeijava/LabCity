/**
 * Created by 小灰灰 on 2017/8/30.
 ${customer.Address}
 */
$(function () {
    var diagram = flowchart.parse(`st=>start: Improve your
        l10n process!
        e=>end: Continue to have fun!:>https://youtu.be/YQryHo1iHb8[blank]
        op1=>operation: Go to locize.com:>https://locize.com[blank]
        sub1=>subroutine: Read the awesomeness
        cond(align-next=no)=>condition: Interested to
        getting started?
        io=>inputoutput: Register:>https://www.locize.io/register[blank]
        sub2=>subroutine: Read about improving
        your localization workflow
        or another source:>https://medium.com/@adrai/8-signs-you-should-improve-your-localization-process-3dc075d53998[blank]
        op2=>operation: Login:>https://www.locize.io/login[blank]
        cond2=>condition: valid password?
        cond3=>condition: reset password?
        op3=>operation: send email
        sub3=>subroutine: Create a demo project
        sub4=>subroutine: Start your real project
        io2=>inputoutput: Subscribe
        
        st->op1->sub1->cond
        cond(yes)->io->op2->cond2
        cond2(no)->cond3
        cond3(no,bottom)->op2
        cond3(yes)->op3
        op3(right)->op2
        cond2(yes)->sub3
        sub3->sub4->io2->e
        cond(no)->sub2(right)->op1
        
        st@>op1({"stroke":"Red"})@>sub1({"stroke":"Red"})@>cond({"stroke":"Red"})@>io({"stroke":"Red"})@>op2({"stroke":"Red"})@>cond2({"stroke":"Red"})@>sub3({"stroke":"Red"})@>sub4({"stroke":"Red"})@>io2({"stroke":"Red"})@>e({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})`);
    diagram.drawSVG(document.getElementById('diagram'), {
        'x': 0,
        'y': 0,
        'line-width': 2,
        'line-length': 50,
        'text-margin': 20,
        'font-size': 12,
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        'scale': 1,
        // style symbol types
        'symbols': {
            'start': {
                'font-color': 'blue',
                'element-color': 'green',
                'fill': 'yellow'
            },
            'end': {
                'class': 'end-element'
            }
        },
        // even flowstate support ;-)
        'flowstate': {
            'past': {'fill': '#CCCCCC', 'font-size': 12},
            'current': {'fill': 'yellow', 'font-color': 'red', 'font-weight': 'bold'},
            'future': {'fill': '#FFFF99'},
            'request': {'fill': 'blue'},
            'invalid': {'fill': '#444444'},
            'approved': {'fill': '#58C4A3', 'font-size': 12, 'yes-text': 'APPROVED', 'no-text': 'n/a'},
            'rejected': {'fill': '#C45879', 'font-size': 12, 'yes-text': 'n/a', 'no-text': 'REJECTED'}
        }
    });
})