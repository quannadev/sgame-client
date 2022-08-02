const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbPhien : cc.Label,
        lbNgay  : cc.Label,
        taiWin  : cc.Node,
        xiuWin  : cc.Node,
        lightWin: cc.Node,
        lbResult: cc.Label,
        listDice            : [cc.SpriteFrame],
        listDiceResultNode  : [cc.Sprite],
        lbTaiTongDat        : cc.Label,
        lbXiuTongDat        : cc.Label,
        listTai             : Listview,
        listXiu             : Listview,
        txCurrentSession    : 0
    },
    onEnable() {
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex;
        }
        this.txCurrentSession    = this._data;
        this.getDataSession();
    },
    init(detailSession){
        let self = this;
        this.lbPhien.string       = "#"+this.txCurrentSession;
        this.lbTaiTongDat.string  = Utils.addDotToNumber(detailSession.totalTai);
        this.lbXiuTongDat.string  = Utils.addDotToNumber(detailSession.totalXiu);
        let total = 0;
        Promise.all(this.listDiceResultNode.map(function(diceItem, index){
            diceItem.spriteFrame = self.listDice[detailSession.dices[index]-1];
            total += detailSession.dices[index];
        })).then(function () {
            self.lbResult.string = " ="+total+" ";
            if (total <=10){//xiu
                self.lightWin.position = self.xiuWin.position;
            }else{//Tai
                self.lightWin.position = self.taiWin.position;
            }
            let a1 = cc.fadeOut(0.1);
            let a2 = cc.fadeIn(0.1);
            self.lightWin.active = true;
            self.lightWin.runAction(cc.repeatForever(cc.sequence(a1, a2)));
        });
        this.arrUserBetTai = detailSession.arrUserBetTai;
        this.listTai.numItems = this.arrUserBetTai.length;

        this.arrUserBetXiu = detailSession.arrUserBetXiu;
        this.listXiu.numItems = this.arrUserBetXiu.length;
        let day = null;
        if (detailSession.arrUserBetXiu.length > 0)
            day = detailSession.arrUserBetXiu[0];
        else if (detailSession.arrUserBetTai.length > 0)
            day = detailSession.arrUserBetTai[0];
        if (day != null){
            let dayTime =  day.time.split(" ")[0];
            let dayTimeArr = dayTime.split("-");
            this.lbNgay.string        =  dayTimeArr[2]+"/"+dayTimeArr[1]+"/"+dayTimeArr[0];
        }
        mm.Loading.hide();
    },
    onDisable() {
        this.lightWin.stopAllActions();
    },

    eventClose() {
        this.back();
    },
    onListRenderTai(item, idx) {
        let data = this.arrUserBetTai[idx];
        item.getComponent('TXSessionDetail').init(data, idx);
    },

    onListRenderXiu(item, idx) {
        let data = this.arrUserBetXiu[idx];
        item.getComponent('TXSessionDetail').init(data, idx);
    },

    eventBackSession() {
        this.txCurrentSession      = parseInt(this.txCurrentSession) - 1;
        this.getDataSession();
    },

    eventNextSession() {
        this.txCurrentSession      = parseInt(this.txCurrentSession) + 1;
        this.getDataSession();
    },
    getDataSession(){
        mm.Loading.show();
        let sessionDetailRequest = new TaiXiuRequest.SessionDetailRequest();
        sessionDetailRequest.setSessionId(parseInt(this.txCurrentSession));
        SmartFoxSDK.TaiXiuController.ZoneInstance.send(sessionDetailRequest.toSRequest());
    }

});
