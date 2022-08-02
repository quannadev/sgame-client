cc.Class({
    extends: cc.Component,

    properties: {
        HeightReel: 300
    },
    onLoad() {
        this.HeightReel = this.node.height-5;
    },
    init(obj, data){
        this.CDV = obj;
        this.icons = [];
        let self  = this;
        Promise.all(data.map(function(itemType, index){
            let icon = cc.instantiate(self.CDV.iconPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('CandyItem');
            icon.init(self.CDV, itemType);
            return icon;
        })).then(result => {
            this.icons = result;
        });
    },
    spin: function(index, isFast){
        let timeDelay = 0.4;
        let timeMove  = 1;
        if ( this.CDV.isFast){
            timeDelay = 0.2;
            timeMove  = 0.4;
        }

        this.node.stopAllActions();
        let d = cc.moveTo(timeMove, cc.v2(this.node.x,-(this.node.height- this.HeightReel))).easing(cc.easeOut(1));
        let p2 = cc.callFunc(function() {
            if (index === 0) {
                this.CDV.copy();
            }
            this.node.y = 0;
        }, this);
        if (index === 2){
            let EF = cc.callFunc(function() {
                this.node.y = 0;
                this.CDV.runActionWon();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, EF ));
        } else{
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, p2));
        }

    },
    stop: function(){
        this.node.stopAllActions();
        this.CDV.copy();
        this.node.y = 0;
    },
});
