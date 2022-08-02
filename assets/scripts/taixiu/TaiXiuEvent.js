let TaiXiuEvent = {};
TaiXiuEvent.RESPONSE_NAME = {
    LOAD_GAME_RES: "tx1",
    BET_RES: "tx2",
    END_BETTING: "tx3",
    SESSION_DETAIL: "tx4",
    SOI_CAU_RES: "tx5",
    TAN_LOC: "tx6",
    RUT_LOC: "tx7",
    HISTORY_TAN_LOC: "tx8",
    HISTORY_RUT_LOC: "tx9",
    TOP_BET: "tx10",
    TOP_BET_REWARD: "tx11",
    TOP_BET_RULE: "tx12",
    RANK_TAN_LOC: "tx13",
    RANK_RUT_LOC: "tx14",
    PUBLIC_MSG : "tx15",
    TOP_REWARD_RES : "tx16",
    UPDATE_STATE_POT: "tx17"
};
TaiXiuEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.LOAD_GAME_RES);
        this.listCau = [];
    },
    fromEvent(event){
        this.isBetting = event.getBool("b");
        this.time      = event.getInt("t");
        this.listChipPot = event.getDoubleArray("lcp");
        this.listMyChipPot = event.getDoubleArray("lmcp");
        this.listUsers = event.getIntArray("lu");
        this.allowRutlLoc  = event.getBool("rl");
        this.fundRutloc   = event.getDouble("frl");
        if(this.isBetting){
            this.time += 6.5;
        }else {
            this.result = event.getByteArray("rs");
        }
        if(event.containsKey("c")){
            let arrCau = event.getSArray("c");
            for(let i = 0; i < arrCau.size();i++){
                let sCau = arrCau.get(i).getObject();
                let itemCau = {};
                itemCau.sessionId = sCau.getDouble("id").toFixed(0);
                itemCau.point = sCau.getByte("p");
                this.listCau.push(itemCau);
            }
            cc.listCau = this.listCau;
        }
        let listChatObj = event.getSArray("lc");
        this.listChat = [];
        for(let i = 0; i < listChatObj.size();i++){
            let sLoc = listChatObj.get(i).getObject();
            let itemChat = {};
            itemChat.dataSender= {};
            itemChat.dataSender.dn  = sLoc.getUtfString("un");
            itemChat.msg = sLoc.getUtfString("msg");
            this.listChat.unshift(itemChat);
        }
        return this;
    }
});
TaiXiuEvent.BetEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.BET_RES);
    },
    fromEvent(event){
        this.userName = event.getUtfString("un");
        this.betChip = event.getDouble("c");
        this.typePot = event.getByte("t");
        this.listUsers = event.getIntArray("lu");
        return this;
    }
});
TaiXiuEvent.UpdateStatePotEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.UPDATE_STATE_POT);
    },
    fromEvent(event){
        this.potTai = event.getDouble("bt");
        this.potXiu = event.getDouble("bx");
        this.ccuTai = event.getInt("ut");
        this.ccuXiu = event.getInt("ux");
        return this;
    }
});
TaiXiuEvent.EndBetting = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.END_BETTING);
    },
    fromEvent(event){
        this.result = event.getByteArray("rs");
        this.winChip = event.getDouble("wc");
        this.refundChip = event.getDouble("rc");
        this.playType = event.getByte("te");
        return this;
    }
});
TaiXiuEvent.SessionDetail = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.SESSION_DETAIL);
    },
    fromEvent(event){
        let sessionDetail = {};
        sessionDetail.dices = event.getByteArray("rs");
        sessionDetail.totalTai = event.getDouble("tt");
        sessionDetail.totalXiu = event.getDouble("tx");
        sessionDetail.refundTai = event.getDouble("rt");
        sessionDetail.refundXiu = event.getDouble("rx");
        let sArrayUb = event.getSArray("ub");
        sessionDetail.arrUserBetTai = [];
        sessionDetail.arrUserBetXiu = [];
        for(let i = 0; i < sArrayUb.size();i++){
            let sObj = sArrayUb.get(i).getObject();
            let betDetail = {};
            betDetail.time        = sObj.getUtfString("t");
            betDetail.displayName = sObj.getUtfString("dn");
            betDetail.betTai      = sObj.getDouble("bt");
            betDetail.betXiu      = sObj.getDouble("bx");
            if (betDetail.betTai > 0)
                sessionDetail.arrUserBetTai.push(betDetail);
            if (betDetail.betXiu > 0)
                sessionDetail.arrUserBetXiu.push(betDetail);
        }
        return sessionDetail;
    }
});
TaiXiuEvent.SoiCauEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.SOI_CAU_RES);
    },
    fromEvent(event){
        let arrCau = event.getSArray("c");
        this.listSoiCau = [];
        for(let i = 0; i < arrCau.size();i++){
            let sCau = arrCau.get(i).getObject();
            let itemCau = {};
            itemCau.dices = sCau.getByteArray("d");
            this.listSoiCau.push(itemCau);
        }
        return this.listSoiCau;
    }
});

TaiXiuEvent.TanLocEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.TAN_LOC);
    },
    fromEvent(event){
        let tanLoc  = {};
        tanLoc.chipTan = event.getDouble("c");
        tanLoc.fund    = event.getDouble("f");
        tanLoc.mesTan  = event.getUtfString("ec");
        return tanLoc;
    }
});
TaiXiuEvent.RutLocEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.RUT_LOC);
    },
    fromEvent(event){
        let rutLoc  = {};
        rutLoc.chipTan = event.getDouble("c");
        rutLoc.fund    = event.getDouble("f");
        rutLoc.mesTan  = event.getUtfString("ec");
        return rutLoc;
    }
});
TaiXiuEvent.HistoryTanLocEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.HISTORY_TAN_LOC);
    },
    fromEvent(event){
        let arrLoc = event.getSArray("d");
        let listTanLoc = [];
        for(let i = 0; i < arrLoc.size();i++){
            let sLoc = arrLoc.get(i).getObject();
            let itemLoc = {};
            itemLoc.account = sLoc.getUtfString("u");
            itemLoc.win     = sLoc.getDouble("c");
            itemLoc.time    =  Utils.reFormatDisplayTime(sLoc.getUtfString("t"));
            listTanLoc.push(itemLoc);
        }
        return listTanLoc;
    }
});
TaiXiuEvent.HistoryRutLocEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.HISTORY_RUT_LOC);
    },
    fromEvent(event){
        let arrLoc = event.getSArray("d");
        let listTanLoc = [];
        for(let i = 0; i < arrLoc.size();i++){
            let sLoc = arrLoc.get(i).getObject();
            let itemLoc = {};
            itemLoc.account = sLoc.getUtfString("u");
            itemLoc.win = sLoc.getDouble("c");
            itemLoc.time =  Utils.reFormatDisplayTime(sLoc.getUtfString("t"));
            listTanLoc.push(itemLoc);
        }
        return listTanLoc;
    }
});

TaiXiuEvent.TopBetEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.TOP_BET);
    },
    fromEvent(event){
        let arrLoc = event.getSArray("d");
        let listTopBet = [];
        for(let i = 0; i < arrLoc.size();i++){
            let sLoc = arrLoc.get(i).getObject();
            let itemTop = {};
            itemTop.account = sLoc.getUtfString("u");
            itemTop.win     = sLoc.getDouble("c");
            itemTop.time    =  i+1;
            listTopBet.push(itemTop);
        }
        return listTopBet;
    }
});
TaiXiuEvent.TopBetRewardEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.TOP_BET_REWARD);
    },
    fromEvent(event){
        let rewardObj = {};
        rewardObj.reward = event.getDouble("c");
        rewardObj.top    = event.getInt("t");
        return rewardObj;
    }
});
TaiXiuEvent.TopBetRuleEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.TOP_BET_RULE);
    },
    fromEvent(event){
        let arrLoc = event.getDoubleArray("d");
        let listBetRule = [];
        for (let i=0; i< arrLoc.length; i++){
            let rule = {};
            rule.account = arrLoc[i];
            rule.win     = "";
            rule.time    = i+1;
            listBetRule.push(rule);
        }
        return listBetRule;
    }
});

TaiXiuEvent.RankRutLocEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.RANK_RUT_LOC);
    },
    fromEvent(event){
        let arrLoc = event.getSArray("d");
        let listRank = [];
        for(let i = 0; i < arrLoc.size();i++){
            let sLoc = arrLoc.get(i).getObject();
            let rankRut = {};
            rankRut.account = sLoc.getUtfString("u");
            rankRut.win     = sLoc.getDouble("c");
            rankRut.time    = i+1;
            listRank.push(rankRut);
        }
        return listRank;
    }
});
TaiXiuEvent.RankTanLocEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.RANK_TAN_LOC);
    },
    fromEvent(event){
        let arrLoc = event.getSArray("d");
        let listRank = [];
        for(let i = 0; i < arrLoc.size();i++){
            let sLoc = arrLoc.get(i).getObject();
            let rankTan = {};
            rankTan.account = sLoc.getUtfString("u");
            rankTan.win     = sLoc.getDouble("c");
            rankTan.time    = i+1;
            listRank.push(rankTan);
        }
        return listRank;
    }
});
TaiXiuEvent.PublicMessagecEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.PUBLIC_MSG);
    },
    fromEvent(event){
        this.un = event.getUtfString("un");
        this.msg = event.getUtfString("msg");
        return this;
    }
});

TaiXiuEvent.TopRewardResEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(TaiXiuEvent.RESPONSE_NAME.TOP_REWARD_RES);
    },
    fromEvent(event){
        let arrReward = event.getSArray("d");
        let listReward = [];
        for(let i = 0; i < arrReward.size();i++){
            let sLoc = arrReward.get(i).getObject();
            let reward = {};
            reward.account = sLoc.getUtfString("u");
            reward.win     = sLoc.getDouble("c");
            reward.time    = i+1;
            listReward.push(reward);
        }
        return listReward;
    }
});
window.TaiXiuEvent = module.exports = TaiXiuEvent;
