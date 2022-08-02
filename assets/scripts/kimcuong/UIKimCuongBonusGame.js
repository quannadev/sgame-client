let Helper = require("Helper");
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbHeSoNhan  : cc.Label,
        lbTime      : cc.Label,
        lbLuotBoc   : cc.Label,
        lbMoneyWin  : cc.Label,
        resultWin   : cc.Node,
        totalSelect : 0,
        totalTime   : 15,
    },
    onEnable () {
        this.totalTime          = 15;
        this.resultWin.active   = false;
        this.totalSelect        = this._data.length;
        this.lbHeSoNhan.string  = "x"+Math.floor(Math.random()*30);
        this.lbLuotBoc.string   = this.totalSelect;
        this.lbTime.string      = this.totalTime;
        this.schedule(this.countTime, 1);
    },
    countTime() {
        this.totalTime--;
        if ( this.totalTime < 1){
            this.unschedule(this.countTime);
            this.eventClose();
        }
        this.lbTime.string      = this.totalTime;
    },
    showMoneyWin() {
        let self = this;
        this.resultWin.active = true;
        let moneyWin = 0;
        for (let i=0; i< this._data.length; i++){
            moneyWin += this._data[i];
        }
        this.lbMoneyWin.node.active = true;
        Helper.numberTo(this.lbMoneyWin, 0 ,moneyWin, 600, true, function () {
            setTimeout(function(){
                self.eventClose();
                self.resultWin.active = false;
            }, 1500);
        });
    },
    eventSelect(event, data) {
        if (this.totalSelect > 0){
            this.totalSelect--;
            if (this._data[this.totalSelect] > 0){
                event.target.getChildByName("lb_money").active = true;
                event.target.getChildByName("KimCuongBonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack-KimCuong", false);
                Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0 , this._data[this.totalSelect], 1200, true);
            } else{
                event.target.getChildByName("KimCuongBonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack-Miss", false);
            }
            this.lbLuotBoc.string   = this.totalSelect;
            if (this.totalSelect == 0){
                this.showMoneyWin();
            }
        }
    },
    eventClose() {
        this.back();
    }
});
