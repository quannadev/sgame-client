
cc.Class({
    extends: cc.Component,

    init(obj){
        return this;
    },
    onEnable: function() {
        // this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
        // this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
    },
    onDisable: function() {
        // this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
        // this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
    },
    onhover: function(){
        this.node.active = true;
    },
    offhover: function(){
        this.node.active = false;
    },
    onEf: function(){
        this.onhover();
        this.node.pauseSystemEvents(true);
    },
    offEf: function(){
        this.offhover();
        this.node.resumeSystemEvents(true);
    },
    offAll: function () {

    }
});
