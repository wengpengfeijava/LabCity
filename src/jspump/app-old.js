/**
 * Created by 小灰灰 on 2017/8/29.
 ${customer.Address}
 */
jsPlumb.bind("ready", function () {
    // your jsPlumb related init code goes here

    var workflow = new WorkFlow({
        id: 'workflow'
    })
    var firstInstance = jsPlumb.getInstance({
        PaintStyle: {
            strokeWidth: 2,
            stroke: 'rgb(68, 85, 102)'
        },
        ConnectionOverlays: [
            ["Arrow", {
                location: 0.97,
                visible: true,
                width: 11,
                length: 11,
                id: "ARROW",
                events: {
                    click: function () {
                        alert("you clicked on the arrow overlay")
                    }
                }
            }],
            ["Label", {
                location: 0.5,
                id: "label",
                cssClass: "aLabel",
                events: {
                    tap: function () {
                        alert("hey");
                    }
                }
            }]
        ],
        Connector: ['Flowchart', {alwaysRespectStubs: true, cornerRadius: 5}]
    })
    jsPlumb.addEndpoint("state1", {
        anchors: 'Left'
    });
    jsPlumb.addEndpoint("state1", {
        anchors: 'Bottom'
    });
    jsPlumb.addEndpoint("state1", {
        anchors: 'Right'
    });
    jsPlumb.addEndpoint("state1", {
        anchors: 'Top'
    });
    jsPlumb.addEndpoint("state2", {
        anchors: 'Left'
    });

    jsPlumb.addEndpoint("state2", {
        anchors: 'Top'
    });

    jsPlumb.addEndpoint("state3", {
        anchors: 'Left'
    });
    jsPlumb.addEndpoint("state3", {
        anchors: 'Bottom'
    });
    jsPlumb.addEndpoint("state3", {
        anchors: 'Right'
    });
    jsPlumb.addEndpoint("state3", {
        anchors: 'Top'
    });

    jsPlumb.addEndpoint("state4", {
        anchors: 'Top'
    });

    // listen for new connections; initialise them the same way we initialise the connections at startup.
    firstInstance.bind("connection", function (connInfo, originalEvent) {
        connInfo.connection.getOverlay("label").setLabel('哈哈哈');
    });


    firstInstance.connect({
        source: 'state1',
        target: 'state3',
        anchor: ['Bottom', 'Top'],
        isSource: true,
        isTarget: true
    })


    firstInstance.connect({
        source: 'state1',
        target: 'state2',
        anchor: ['Bottom', 'Top'],
        isSource: true,
        isTarget: true
    })


    firstInstance.connect({
        source: 'state1',
        target: 'state4',
        anchor: ['Bottom', 'Top'],
        isSource: true,
        isTarget: true
    })


    firstInstance.connect({
        source: 'state2',
        target: 'state4',
        anchor: ['Left', 'Top'],
        isSource: true,
        isTarget: true
    })
})
;