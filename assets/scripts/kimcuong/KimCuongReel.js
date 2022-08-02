
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad () {

    },
    onEnable () {},

    init(obj, data){
        this.KCV = obj;
        this.icons = [];
        var self  = this;
        Promise.all(data.map(function(itemType, index){
            let icon = cc.instantiate(self.KCV.iconPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('KimCuongItem');
            icon.init(self.KCV, itemType);
            return icon;
        }))
            .then(result => {
                this.icons = result;
            });
    },
    spin: function(index){
        this.node.stopAllActions();
        var self = this;
        let timeDelay = 0.4;
        let timeMove  = 1.8;
        if ( this.KCV.isFast){
            timeDelay = 0.2;
            timeMove  = 0.9;
        }
        var d = cc.moveTo(timeMove, cc.v2(this.node.x,-(this.node.height-418))).easing(cc.easeInOut(1));
        var p2 = cc.callFunc(function() {
            if (index === 0) {
                this.KCV.copy();
            }
            this.node.y = 0;
        }, this);

        if (index === 4){
            var EF = cc.callFunc(function() {
                this.node.y = 0;
                this.KCV.runActionWon();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, EF ));
        } else
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, p2));
    },
    stop: function(){
        this.node.stopAllActions();
        this.KCV.copy();
        this.node.y = 0;
    },
});
