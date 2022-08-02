let self;
let Helper = require("Helper");
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbMoneyWin          : cc.Label,
        lbNumberWin         : cc.Label,
        ThangText   : cc.Node,
        ThangLonCoin: cc.Node,
    },

    onLoad () {
        self = this;
    },
    init(obj) {
        this.SXV = obj;
    },
    runWinGame() {
        if (this.SXV.isThangLon && !this.SXV.isNoHu) {
            this.runThangLon();
        }else if (this.SXV.isNoHu){
            this.runNoHu();
        }else {
            if (this.SXV.winMoney > 0){
                this.SXV.setMoneyWin(this.SXV.winMoney);
                this.lbMoneyWin.node.active = true;
                Helper.numberTo(this.lbMoneyWin, 0, this.SXV.winMoney, 1200, true, function () {
                    self.SXV.updateChipAll();
                    self.scheduleOnce(function () {
                        self.lbMoneyWin.node.active = false;
                        self.checkRunAgainWin();
                    }, 1);
                });
                this.SXV.winMoney   = 0;
            }else{
                this.SXV.autoQuay();
            }
            self.SXV.finishSpin();
        }
    },
    checkRunAgainWin() {
        if (this.SXV.winMoney > 0 || this.SXV.isNoHu || this.SXV.isThangLon || this.SXV.isAuto)
            this.runWinGame();
    },
    runNoHu(){
        this.ThangLonCoin.active = true;
        this.ThangText.active    = true;
        this.ThangLonCoin.getComponent(sp.Skeleton).setAnimation(0, "NoHu", false);
        this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", false);
        this.lbNumberWin.node.active = true;
        Helper.numberTo(this.lbNumberWin, 0, this.SXV.winMoney, 1200, true, function () {
            this.scheduleOnce(function () {
                let d = cc.moveTo(0.5, cc.v2(0, 50));
                self.lbNumberWin.node.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
                    self.lbNumberWin.node.active = false;
                    self.checkRunAgainWin();
                })));
            }, 2.9);
        });
        this.scheduleOnce(function () {
            self.ThangLonCoin.active    = false;
            self.ThangText.active       = false;
        }, 4);
        this.SXV.isNoHu     = false;
    },
    runThangLon(){
        this.ThangLonCoin.active = true;
        this.ThangText.active    = true;
        this.ThangLonCoin.getComponent(sp.Skeleton).setAnimation(0, "Thang-Lon", false);
        this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "Thang-Lon", false);
        this.lbNumberWin.node.active = true;
        Helper.numberTo(this.lbNumberWin, 0, this.SXV.winMoney, 1200, true, function () {
            this.scheduleOnce(function () {
                let d = cc.moveTo(0.5, cc.v2(0, 50));
                self.lbNumberWin.node.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
                    self.lbNumberWin.node.active = false;
                    self.checkRunAgainWin();
                })));
            }, 3);
        });
        this.scheduleOnce(function () {
            self.ThangLonCoin.active    = false;
            self.ThangText.active       = false;
        }, 2.5);
        this.SXV.isThangLon = false;
    },
});
