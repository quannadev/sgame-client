let self;
let Helper = require("Helper");
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbMoneyWin          : cc.Label,
        lbNumberWin         : cc.Label,
        animationWin        : cc.Node,
        winText             : cc.Node,
    },

    onLoad () {
        self = this;
    },
    init(obj) {
        this.MNPK = obj;
    },
    runWinGame() {
        this.winText.active = false;
        if (this.MNPK.isNoHu){
            this.runNoHu();
        }else {
            if (this.MNPK.winMoney > 0){
                if (this.MNPK.handWinType > 0){
                    this.winText.active = true;
                    Promise.all(this.winText.children.map(function(text, index){
                        text.active = false;
                    })).then(result =>{
                        self.winText.children[this.MNPK.handWinType].active = true;
                    });
                    this.lbMoneyWin.node.y = -50;
                }else
                    this.lbMoneyWin.node.y = 0;
                this.MNPK.setMoneyWin(this.MNPK.winMoney);
                this.lbMoneyWin.node.active = true;
                Helper.numberTo(this.lbMoneyWin, 0, this.MNPK.winMoney, 1200, true, function () {
                    self.MNPK.updateChipAll();
                    self.scheduleOnce(function () {
                        self.lbMoneyWin.node.active = false;
                        self.winText.active         = false;
                        self.checkRunAgainWin();
                    }, 1)
                });
                this.MNPK.winMoney   = 0;
            }else{
                this.MNPK.autoQuay();
            }
        }
    },
    checkRunAgainWin() {
        if (this.MNPK.winMoney > 0 || this.MNPK.isNoHu || this.MNPK.isAuto)
            this.runWinGame();
    },
    runNoHu(){
        this.animationWin.active = true;
        this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "Idle", false);
        this.lbNumberWin.node.active = true;
        Helper.numberTo(this.lbNumberWin, 0, this.MNPK.winMoney, 1200, true, function () {
            this.scheduleOnce(function () {
                var d = cc.moveTo(0.5, cc.v2(-75, 170));
                self.lbNumberWin.node.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
                    self.lbNumberWin.node.active = false;
                    self.checkRunAgainWin();
                })));
            }, 3)
        });
        this.scheduleOnce(function () {
            self.animationWin.active  = false;
        }, 4)
        this.MNPK.isNoHu     = false;
    },
});
