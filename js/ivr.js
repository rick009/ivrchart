/**
 * Created by LouXin on 2014/11/12.
 */
jsPlumb.ready(function () {
    $('#canvas').height($(document).height() - 130);
    $('#info').height($(document).height() - 130);
    var UID = 1;

    var instance = jsPlumb.getInstance({
        // default drag options
        DragOptions : { cursor: 'pointer', zIndex:2000 },
        // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
        // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
        ConnectionOverlays : [
            [ "Arrow", { location:1 } ],
            [ "Label", {
                location:0.1,
                id:"label",
                cssClass:"aLabel"
            }]
        ],
        LogEnabled: true,
        LabelStyle : { color : "red" },
        Container:"canvas"
    });

    // this is the paint style for the connecting lines..
    var connectorPaintStyle = {
        lineWidth:4,
        strokeStyle:"#61B7CF",
        joinstyle:"round",
        outlineColor:"white",
        outlineWidth:2
    };
    // .. and this is the hover style.
    var connectorHoverStyle = {
        lineWidth:4,
        strokeStyle:"#216477",
        outlineWidth:2,
        outlineColor:"white"
    };
    var endpointHoverStyle = {
        fillStyle:"#216477",
        strokeStyle:"#216477"
    };
    var sourceEndpoint = {
        endpoint:"Rectangle",
        paintStyle:{
            strokeStyle:"#7AB02C",
            fillStyle:"transparent",
            lineWidth:3,
            width: 10,
            height: 20
        },
        isSource:true,
        connector:[ "Flowchart", { stub:[40, 60], gap:0, cornerRadius:5, alwaysRespectStubs:true } ],
        connectorStyle:connectorPaintStyle,
        hoverPaintStyle:endpointHoverStyle,
        connectorHoverStyle:connectorHoverStyle,
        dragOptions:{}
    };

    var _curryAnchor = function(x, y, ox, oy, type, fnInit) {
        jsPlumb.Anchors[type] = function(params) {
            console.log('params=', params);
            var a = params.jsPlumbInstance.makeAnchor([ x, y, ox, oy, 0, 0 ], params.elementId, params.jsPlumbInstance);
            a.type = type;
            if (fnInit) fnInit(a, params);
            return a;
        };
    };

    //添加锚点
    _curryAnchor(0.0, 1, 0, 1, "Bottom0");
    _curryAnchor(0.1, 1, 0, 1, "Bottom1");
    _curryAnchor(0.2, 1, 0, 1, "Bottom2");
    _curryAnchor(0.3, 1, 0, 1, "Bottom3");
    _curryAnchor(0.4, 1, 0, 1, "Bottom4");
    _curryAnchor(0.5, 1, 0, 1, "Bottom5");
    _curryAnchor(0.6, 1, 0, 1, "Bottom6");
    _curryAnchor(0.7, 1, 0, 1, "Bottom7");
    _curryAnchor(0.8, 1, 0, 1, "Bottom8");
    _curryAnchor(0.9, 1, 0, 1, "Bottom9");
    _curryAnchor(1.0, 1, 0, 1, "Bottom10");

    $('#node-start').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node node-start"><strong>开始</strong></div>');
        $('#canvas').append($node);
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
        //添加链接点
        var $endpoint = instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom5'});
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom0'}).setLabel({
            location:[0.5, 1.5],
            label:"0",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom1'}).setLabel({
            location:[0.5, 1.5],
            label:"1",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom2'}).setLabel({
            location:[0.5, 1.5],
            label:"2",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom3'}).setLabel({
            location:[0.5, 1.5],
            label:"3",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom4'}).setLabel({
            location:[0.5, 1.5],
            label:"4",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom6'}).setLabel({
            location:[0.5, 1.5],
            label:"5",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom7'}).setLabel({
            location:[0.5, 1.5],
            label:"6",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom8'}).setLabel({
            location:[0.5, 1.5],
            label:"7",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom9'}).setLabel({
            location:[0.5, 1.5],
            label:"8",
            cssClass:"endpointSourceLabel"
        });
        instance.addEndpoint($node, sourceEndpoint, {uuid: node_id+'default', anchor: 'Bottom10'}).setLabel({
            location:[0.5, 1.5],
            label:"9",
            cssClass:"endpointSourceLabel"
        });
        $endpoint.setLabel({
            location:[0.5, 1.5],
            label:"D",
            cssClass:"endpointSourceLabel"
        });
    });
    $('#node-sound').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>放音</strong></div>');
        $('#canvas').append($node);
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-queue').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>转技能组</strong></div>');
        $('#canvas').append($node);
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-keys').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>按键导航</strong></div>');
        $('#canvas').append($node);
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-phone').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>转电话</strong></div>');
        $('#canvas').append($node);
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-end').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>结束</strong></div>');
        $('#canvas').append($node);
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
});
