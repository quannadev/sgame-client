cc.Class({
    extends: cc.Component,

    properties: {
        HeightReel: 144
    },
    onLoad() {
        this.HeightReel = this.node.height-5;
    },
    init(obj, data){
        this.MNPK = obj;
        this.icons = [];
        let self  = this;
        Promise.all(data.map(function(itemType, index){
            let icon = cc.instantiate(self.MNPK.iconPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('MiniPokerItem');
            icon.init(self.MNPK, itemType);
            return icon;
        })).then(result => {
            this.icons = result;
        });
    },
    spin: function(index){
        let timeMove  = 1;
        if ( this.MNPK.isFast){
            timeMove  = 0.2;
        }
        this.node.stopAllActions();
        let d  = cc.moveTo(timeMove*(index/2+1), cc.v2(this.node.x,-(this.node.height- this.HeightReel))).easing(cc.easeOut(2));
        let p2 = cc.callFunc(function() {
            if (index === 0) {
                this.MNPK.copy();
            }
            this.node.y = 0;
        }, this);
        if (index === 4){
            let EF = cc.callFunc(function() {
                this.node.y = 0;
                this.MNPK.runActionWon();
            }, this);
            this.node.runAction(cc.sequence(d, EF));
        } else{
            this.node.runAction(cc.sequence(d, p2));
        }
    },
    stop: function(){
        this.node.stopAllActions();
        this.MNPK.copy();
        this.node.y = 0;
    },
});
