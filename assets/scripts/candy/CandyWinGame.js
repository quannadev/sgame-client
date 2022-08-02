let self;
let Helper = require("Helper");
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbMoneyWin          : cc.Label,
        lbNumberWin         : cc.Label,
        animationWin        : cc.Node,
    },

    onLoad () {
        self = this;
    },
    init(obj) {
        this.CDV = obj;
    },
    runWinGame() {
        if (this.CDV.isThangLon && !this.CDV.isNoHu) {
            this.runThangLon();
        }else if (this.CDV.isNoHu){
            this.runNoHu();
        }else {
            if (this.CDV.winMoney > 0){
                this.CDV.setMoneyWin(this.CDV.winMoney);
                this.lbMoneyWin.node.active = true;
                Helper.numberTo(this.lbMoneyWin, 0, this.CDV.winMoney, 1200, true, function () {
                    self.CDV.updateChipAll();
                    self.scheduleOnce(function () {
                        self.lbMoneyWin.node.active = false;
                        self.checkRunAgainWin();
                    }, 1);
                });
                this.CDV.winMoney   = 0;
            }else{
                this.CDV.autoQuay();
            }
            self.CDV.finishSpin();
        }
    },
    checkRunAgainWin() {
        if (this.CDV.winMoney > 0 || this.CDV.isNoHu || this.CDV.isThangLon || this.CDV.isAuto)
            this.runWinGame();
    },
    runNoHu(){
        this.animationWin.active = true;
        this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "NoHu-112", false);
        this.lbNumberWin.node.active = true;
        Helper.numberTo(this.lbNumberWin, 0, this.CDV.winMoney, 1200, true, function () {
            this.scheduleOnce(function () {
                let d = cc.moveTo(0.5, cc.v2(-75, 170));
                self.lbNumberWin.node.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
                    self.lbNumberWin.node.active = false;
                    self.checkRunAgainWin();
                })));
            }, 3)
        });
        this.scheduleOnce(function () {
            self.animationWin.active    = false;
        }, 2.5);
        this.CDV.isNoHu     = false;
    },
    runThangLon(){
        this.animationWin.active = true;
        this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "ThangSieuLown-112", false);
        this.lbNumberWin.node.active = true;
        Helper.numberTo(this.lbNumberWin, 0, this.CDV.winMoney, 1200, true, function () {
            this.scheduleOnce(function () {
                let d = cc.moveTo(0.5, cc.v2(-75, 170));
                self.lbNumberWin.node.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
                    self.lbNumberWin.node.active = false;
                    self.checkRunAgainWin();
                })));
            }, 3)
        });
        this.scheduleOnce(function () {
            self.animationWin.active    = false;
        }, 2.5)
        this.CDV.isThangLon = false;
    },
});
