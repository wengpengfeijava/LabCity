/**
 * Created by 小灰灰 on 2017/8/29.
 ${customer.Address}
 */
jsPlumb.bind("ready", function () {
    // your jsPlumb related init code goes here

    var promise = $.get('./data.json')

    var workflow = new WorkFlow({
        id: 'workflow'
    })

    workflow.$el.css({
        width: 1300,

    })
    // .draggable()
    /**
     *
     * @param array
     */
    var theIndex = 0;

    var mapper = {}

    promise.then(function (data) {

        workflow.$el.append(workflow.addNode({
            type: data.initialFlowNode.type,
            data: data.initialFlowNode
        }).$el)


        nodeMapper(data.initialFlowNode, theIndex)

        nodeCreator(mapper);

        nodeConnectAble()
    });


    function nodeMapper(obj) {
        obj.outgoingNodes.forEach(function (item) {
            if (item.level) {
                if (!mapper[item.level]) {
                    mapper[item.level] = {nodes: []}
                }
                mapper[item.level].nodes.push({
                    id: item.id,
                    name: item.name,
                    type: item.type,
                    incomingConditionMap: item.incomingConditionMap
                });
                if (item.outgoingNodes && item.outgoingNodes.length) {
                    nodeMapper(item, item.id);
                }
            }
        })
    }

    function nodeCreator(nodes, parentId) {
        var html = [];
        Object.keys(nodes).forEach(function (item, index) {
            var temp = '<div id="' + item + '">'
            nodes[item].nodes.forEach(function (node, nodeIndex) {
                temp += workflow.addNode({
                    type: node.type,
                    data: node
                }).$el
            });
            temp += '</div>';
            html.push(temp);
        });

        workflow.$el.append(html.join(''))
    }

    function nodeConnectAble(nodes) {
        workflow.$el.find('.shape').each(function (index, item) {
            // workflow.connectAble({
            //     $el: $(item)
            // })

            var incoming = $(item).data().incoming,
                myId = $(item).attr('id')

            Object.keys(incoming).forEach(function (incom) {
                jsPlumb.batch(function () {
                    // import here
                    workflow.connectNode(incom, myId, {
                        content: incoming[incom]
                    })
                });

            })
        })
    }


});