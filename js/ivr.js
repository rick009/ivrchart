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

    $('#node-start').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>开始</strong></div>');
        $('#canvas').append($node);
        console.log(jsPlumb.getSelector("div[datatype=node]"));
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-sound').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>放音</strong></div>');
        $('#canvas').append($node);
        console.log(jsPlumb.getSelector("div[datatype=node]"));
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-queue').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>转技能组</strong></div>');
        $('#canvas').append($node);
        console.log(jsPlumb.getSelector("div[datatype=node]"));
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-keys').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>按键导航</strong></div>');
        $('#canvas').append($node);
        console.log(jsPlumb.getSelector("div[datatype=node]"));
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-phone').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>转电话</strong></div>');
        $('#canvas').append($node);
        console.log(jsPlumb.getSelector("div[datatype=node]"));
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
    $('#node-end').on('click', function() {
        var node_id = 'node'+UID;
        var $node = $('<div datatype="node" id="'+node_id+'" class="node"><strong>结束</strong></div>');
        $('#canvas').append($node);
        console.log(jsPlumb.getSelector("div[datatype=node]"));
        instance.draggable(jsPlumb.getSelector("div[datatype=node]"), { grid: [20, 20] });
        UID++;
    });
});
