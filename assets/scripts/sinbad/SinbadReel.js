
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {

    },
    onEnable () {},

    init(obj, data){
        this.SLV = obj;
        this.icons = [];
        var self  = this;
        Promise.all(data.map(function(itemType, index){
            let icon = cc.instantiate(self.SLV.iconPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('SinbadItem');
            icon.init(self.SLV, itemType);
            return icon;
        }))
            .then(result => {
                this.icons = result;
            });
    },
    spin: function(index){
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(1.8, cc.v2(this.node.x,-(this.node.height-418))).easing(cc.easeInOut(3));
        var p2 = cc.callFunc(function() {
            if (index === 0) {
                this.SLV.copy();
            }
            this.node.y = 0;
        }, this);

        if (index === 4){
            var EF = cc.callFunc(function() {
                this.node.y = 0;
                this.SLV.runActionWon();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index*0.2), d, EF ));
        } else
            this.node.runAction(cc.sequence(cc.delayTime(index*0.2), d, p2));
    },
    stop: function(){
        this.node.stopAllActions();
        this.SLV.copy();
        this.node.y = 0;
    },
});
