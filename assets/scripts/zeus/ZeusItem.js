cc.Class({
    extends: cc.Component,

    properties: {
    },
    init(obj, icon){
        this.RedT = obj;
        Promise.all(this.node.children.map(function(node){
            node.active = false;
        })).then(result=>{
            this.node.children[icon].active = true;
        });

    },
    stop: function() {

    },
    random: function(){
        let icon = ~~(Math.random()*11);
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
