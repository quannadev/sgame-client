cc.Class({
    extends: cc.Component,

    properties: {
        HeightReel: 300
    },
    onLoad() {
        this.HeightReel = this.node.height-5;
    },
    init(obj, data){
        this.SXV = obj;
        this.icons = [];
        let self  = this;
        Promise.all(data.map(function(itemType, index){
            let icon = cc.instantiate(self.SXV.iconPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('SieuXeItem');
            icon.init(self.SXV, itemType);
            return icon;
        })).then(result => {
                this.icons = result;
            });
    },
    spin: function(index, isFast){
        let timeDelay = 0.2;
        let timeMove  = 2;
        if ( this.SXV.isFast){
            timeDelay = 0.1;
            timeMove  = 0.2;
        }

        this.node.stopAllActions();
        let d = cc.moveTo(timeMove, cc.v2(this.node.x,-(this.node.height- this.HeightReel))).easing(cc.easeInOut(0.5));
        let p2 = cc.callFunc(function() {
            if (index === 0) {
                this.SXV.copy();
            }
            this.node.y = 0;
        }, this);
        if (index === 4){
            let EF = cc.callFunc(function() {
                this.node.y = 0;
                this.SXV.runActionWon();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, EF ));
        } else{
            this.node.runAction(cc.sequence(cc.delayTime(index*timeDelay), d, p2));
        }

    },
    stop: function(){
        this.node.stopAllActions();
        this.SXV.copy();
        this.node.y = 0;
    },
});
