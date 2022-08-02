let self;
let Helper = require("Helper");
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbMoneyWin          : cc.Label,
        BonusFreeSpine      : cc.Node,
        NoHuCoin    		: cc.Node,
        ThangText   		: cc.Node,
        ThangLonCoin		: cc.Node,
        FreeCount           : cc.Node
    },

    onLoad () {
        self = this;
    },
    init(obj) {
        this.SLV = obj;
    },
    runWinGame() {
        let bgAll     = this.node.getChildByName("bg_all");
        bgAll.active  = true;
        if (this.SLV.isThangLon && !this.SLV.isNoHu) {
            this.SLV.playBigWin();
            this.runZeusThangLon();
        }else if (this.SLV.isNoHu){
            this.SLV.playJackpot();
            this.runZeusNoHu();
        }else if (this.SLV.isFree){
            this.runFreeSpine();
        }else if (this.SLV.isBonus){
            this.SLV.playBonus();
            this.runBonusSpine();
        }else{
            self.SLV.setMoneyWin(self.SLV.winMoney);
            self.updateFreeSpin();
            if (this.SLV.winMoney > 0){
                this.SLV.playSpinWin();
                this.lbMoneyWin.node.active = true;
                Helper.numberTo(this.lbMoneyWin, 0, this.SLV.winMoney, 1200, true, function () {
                    self.scheduleOnce(function(){
                        self.lbMoneyWin.node.active = false;
                        bgAll.active  = false;
                        self.SLV.autoQuay();
                    }, 1);
                });
                this.SLV.winMoney   = 0;
            }else{
                bgAll.active  = false;
                self.SLV.autoQuay();
            }
        }
        if (this.SLV.type == 0)
            this.SLV.playSpinMis();
    },
    updateFreeSpin() {
        if (this.SLV.freeSpin < 1)
            this.FreeCount.active       = false;
        else{
            this.FreeCount.active       = true;
            this.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = this.SLV.freeSpin;
        }
    },
    checkRunAgainWin() {
        if (this.SLV.isBonus || this.SLV.winMoney > 0 || this.SLV.isFree || this.SLV.isNoHu || this.SLV.isThangLon || this.SLV.isAuto)
            this.runWinGame();
    },
    runFreeSpine() {
        this.SLV.isFree             = false;
        this.BonusFreeSpine.active  = true;
        this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, 'FreeSpine', true);
        this.scheduleOnce(function(){
            self.node.getChildByName("bg_all").active = false;
            self.BonusFreeSpine.active  = false;
            self.FreeCount.active       = true;
            self.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = self.SLV.freeSpin;
            self.checkRunAgainWin();
        }, 3);
    },
    runBonusSpine() {
        this.SLV.isBonus            = false;
        this.BonusFreeSpine.active  = true;
        this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, 'BonusGame', true);
        this.scheduleOnce(function(){
            self.BonusFreeSpine.active = false;
            self.show("UIZeusBonus", {src: 'zeus', pop: true, data: {"gifts": self.SLV.freeGift, "xSpecial": self.SLV.xSpecial, "total": self.SLV.winMoney}});
        }, 2);
    },
    runZeusNoHu(){
        this.SLV.isNoHu               = false;
        this.NoHuCoin.active  = true;
        let lbMoney = self.node.getChildByName("lb_number_win");
        lbMoney.setPosition(cc.v2(0, -50));
        lbMoney.active = true;
        this.ThangText.active    = true;
        this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", true);
        Helper.numberTo(lbMoney.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, true, function () {
            self.scheduleOnce(function(){
                let d = cc.moveTo(0.5, cc.v2(0, 190));
                lbMoney.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
                    self.node.getChildByName("bg_all").active  = false;
                    self.NoHuCoin.active  = false;
                    self.ThangText.active  = false;
                    lbMoney.active                = false;
                    self.checkRunAgainWin();
                })));
            }, 5);
        });
    },
    runZeusThangLon(){
        this.SLV.isThangLon = false;
        this.ThangLonCoin.active = true;
        this.ThangText.active    = true;
        this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", true);
        let lbMoney = self.node.getChildByName("lb_number_win");
        lbMoney.setPosition(cc.v2(0, -30));
        lbMoney.active = true;
        Helper.numberTo(lbMoney.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, true, function () {
            self.scheduleOnce(function(){
                let d = cc.moveTo(0.5, cc.v2(0, 170));
                lbMoney.runAction(cc.sequence(d, cc.delayTime(0.5), cc.callFunc(function () {
                    lbMoney.active = false;
                    self.node.getChildByName("bg_all").active  = false;
                    self.ThangLonCoin.active    = false;
                    self.ThangText.active       = false;
                    self.checkRunAgainWin();
                })));
            }, 3);
        });
    },
});
