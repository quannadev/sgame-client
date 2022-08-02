cc.Class({
    extends: cc.Component,

    properties: {
    },
    init(obj, icon){
        this.RedT = obj;
        this.node.children[icon].active = true;
    },
    stop: function() {

    },
    random: function(){
        let icon = ~~(Math.random()*7);
        this.setIcon(icon);
        return icon;
    },
    setIcon: function(icon, data = false){
        Promise.all(this.node.children.map(function(node){
            node.active = false;
        }));
        this.node.children[icon].active = true;
        if (data) {
            this.data = icon;
        }
    },
});
