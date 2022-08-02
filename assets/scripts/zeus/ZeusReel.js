
cc.Class({
    extends: cc.Component,

    properties: {

    },

    init(obj, data){
        this.SLV = obj;
        this.icons = [];
        var self  = this;
        Promise.all(data.map(function(itemType, index){
            let icon = cc.instantiate(self.SLV.iconPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('ZeusItem');
            icon.init(self.SLV, itemType);
            return icon;
        })).then(result => {
                this.icons = result;
            });
    },
    spin: function(index){
        this.node.stopAllActions();
        let timeDelay = 0.4;
        let timeMove  = 2;
        if ( this.SLV.isFast){
            timeDelay = 0.2;
            timeMove  = 1;
        }
        var d = cc.moveTo(timeMove, cc.v2(this.node.x,-(this.node.height-420))).easing(cc.easeInOut(1));
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
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, EF ));
        } else
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, p2));
    },
    stop: function(){
        this.node.stopAllActions();
        this.SLV.copy();
        this.node.y = 0;
    },
});
