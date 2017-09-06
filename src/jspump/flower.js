/**
 * Created by 小灰灰 on 2017/8/31.
 ${customer.Address}
 */
(function (window) {
    var instance = jsPlumb.getInstance({
        paintStyle: {
            strokeWidth: 2
        },
        ConnectionOverlays: [
            ["Arrow", {
                location: 0.95,
                visible: true,
                width: 5,
                length: 5,
                id: "ARROW",
                events: {
                    click: function () {
                        alert("you clicked on the arrow overlay")
                    }
                }
            }]
        ]
    })

    instance.importDefaults({
        Connector: ["Flowchart", {stub: 0, alwaysRespectStubs: true, gap: 0}],
        Endpoint: ['Dot', {radius: 3}]
    });

    instance.bind("connection", function (connInfo, originalEvent) {
        if (connInfo.connection.getParameter("content")) {
            connInfo.connection.getOverlay("label").setLabel(connInfo.connection.getParameter("content"));
        }
    });

    /**
     *
     * @param options
     * @returns {*}
     * @constructor
     */
    function Shape(options) {
        this.options = options;
        this.$el = this.el(options);
        return this
    }

    Shape.prototype = {
        constructor: Shape,
        el: function (options) {
            return '<div class="shape ' + this.getClassByType(options.type) + '" id="' + options.data.id + '" data-incoming=\'' + JSON.stringify(options.data.incomingConditionMap) + '\'><span>' + options.data.name + '</span></div>';
        },
        getClassByType: function (type) {
            return ({
                USER_TASK: 'rectangle',
                GATEWAY: 'diamond',
                SCRIPT_TASK: 'rectangle',
                END_EVENT: 'circle',
                START_EVENT: 'circle'
            })[type]
        }
    };

    /**
     *
     * @param el
     * @param position
     */
    function addPoint(el, position) {
        jsPlumb.addEndpoint(el, {
            paintStyle: {
                fill: 'rgb(68, 85, 102)',
                stroke: 'rgb(68, 85, 102)',
                radius: 3,
                strokeWidth: 1
            },
            Connector: ['Flowchart'],
            anchors: position
        })
    }

    /**
     *
     * @param shape
     */
    function connectAble(shape) {
        addPoint(shape.$el, 'Top');
        addPoint(shape.$el, 'Left');
        addPoint(shape.$el, 'Bottom');
        addPoint(shape.$el, 'Right');
    }

    function getStateColor(state) {
        return ({
            NONE: '#d3d0d1',
            RUNNING: '#ff6964',
            FINISHED: '#3f8015'
        })[state]
    }

    /**
     *
     * @param source 连接点开始
     * @param target 连接点目标
     * @param anchor 毛
     */
    function connect(source, target, parameter) {
        var options = {
            source: source,
            target: target,
            paintStyle: {
                fill: 'rgb(68, 85, 102)',
                stroke: 'rgb(68, 85, 102)',
                strokeWidth: 1
            },
            isSource: false,
            isTarget: false,
            editable: false,
            parameters: parameter
        };

        var listDirection = ['Bottom', 'Right', 'Left'],
            $source = $('#' + source),
            sourceDirection = $source.data().directions;


        var direction = 'Bottom';

        // if (sourceDirection) {
        //     console.log(sourceDirection, listDirection);
        //     for (var i = 0; i < listDirection.length; i++) {
        //         console.log(sourceDirection.indexOf(listDirection[i]));
        //         if (sourceDirection.indexOf(listDirection[i]) === -1) {
        //             direction = listDirection[i];
        //             sourceDirection.push(direction);
        //             $source.data('directions', sourceDirection);
        //             break;
        //         }
        //     }
        //     console.log(12313, direction);
        // } else {
        //     sourceDirection = [direction]
        //     $source.data('directions', sourceDirection);
        // }

        options.anchors = [direction, "Top"]

        if (parameter.content) {
            options.overlays = [
                ["Label", {
                    location: 0.5,
                    id: "label",
                    cssClass: "condition"
                }]
            ]
        }
        instance.connect(options)
    }

    /**
     *
     * @param options
     * @constructor
     */
    function WorkFlow(options) {
        this.$el = $('#' + options.id).addClass('workflow');
        this.shapes = [];
        return this;
    }

    WorkFlow.prototype = {
        constructor: WorkFlow,
        /**
         *
         * @param options
         *  {
     *      type: ''  // 1 Circle 2 Diamond 3 Elipse 4 Triangle 5 Rectangle 6
     *      // 基于画布
     *      position: {
     *          left: 0,
     *          top: 0
     *      }
     *  }
         */
        addNode: function (options) {
            return new Shape(options)
        },
        wrap: function ($el, id) {
            var $wrap = $('<div data-id="' + id + '">');
            return $wrap.append($el);
        },
        /**
         *
         */
        connectNode: connect,
        /**
         *
         */
        connectAble: connectAble,
        /**
         *
         * @returns {WorkFlow}
         */
        draggable: function () {
            instance.draggable(jsPlumb.getSelector("#workflow"), {grid: [20, 20]});
            return this
        }
    };
    return window.WorkFlow = WorkFlow, WorkFlow
})(window);