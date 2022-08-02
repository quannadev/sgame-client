let RongHoEvent = {};
RongHoEvent.RESPONSE_NAME = {
    LOAD_GAME_RES: "rh1",
    BET_RES: "rh2",
    END_BETTING: "rh3"
};
RongHoEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(RongHoEvent.RESPONSE_NAME.LOAD_GAME_RES);
    },
    fromEvent(event){
        this.isBetting      = event.getBool("b");
        this.time           = event.getInt("t");
        this.listChipPot    = event.getDoubleArray("lcp");
        this.listMyChipPot  = event.getDoubleArray("lmcp");
        if(!this.isBetting){
            this.result = event.getByteArray("rs");
            this.winpot = event.getByteArray("wp");
        }
        return this;
    }
})
RongHoEvent.BetEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(RongHoEvent.RESPONSE_NAME.BET_RES);
    },
    fromEvent(event){
        this.userName = event.getUtfString("un");
        this.betChip = event.getDouble("c");
        this.typePot = event.getByte("t");
        return this;
    }
});
RongHoEvent.EndBetting = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(RongHoEvent.RESPONSE_NAME.END_BETTING);
    },
    fromEvent(event){
        this.result = event.getByteArray("rs");
        this.winChip = event.getDouble("wc");
        this.winpot = event.getByteArray("wp");
        return this;
    }
});
RongHoEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
    ctor() {
        this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
        this.items = [];
        this.ITEM_NAME = ["Rồng", "Hòa", "Hổ", "3 Trắng", "4 Đen", "4 Trắng"];
    },
    fromEvent(event){
        let data = event.getSArray("d");
        for(let i = 0; i < data.size(); i++){
            let sItem = data.get(i).getObject();
            let session = "#"+sItem.getDouble("id").toFixed(0);
            let time = sItem.getUtfString("t");
            let betValues = sItem.getDoubleArray("b");
            let hoan_tra  = 0;
            let dices = sItem.getIntArray("di");
            let result = sItem.getIntArray("rs");
            let prizeValues = sItem.getDoubleArray("w");
            for(let j = 0; j < betValues.length-1;j++){
                if(betValues[j] >= 0){
                    let item = {};
                    item.session = session;
                    item.time = time;
                    item.dices = dices;
                    item.ketqua = result;
                    item.stakes = betValues[j];
                    item.win = prizeValues[j];
                    item.cuadat = this.ITEM_NAME[j]
                    item.hoan_tra = 0;
                    if(betValues[1] - betValues[0] > 0){
                        if(j == 1)
                            item.hoan_tra = hoan_tra;
                    }else{
                        if(j == 0)
                            item.hoan_tra = hoan_tra;
                    }
                    this.items.push(item);
                }
            }
        }
        return this;
    }
});
RongHoEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
    ctor() {
        this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
        this.items = [];
    },
    fromEvent(event){
        let data = event.getSArray("d");
        for(let i = 0;i < data.size();i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = i;
            item.account = sItem.getUtfString("dn");
            item.win = sItem.getDouble("m");
            item.time = sItem.getUtfString("t");
            this.items.push(item);
        }
        return this;
    }
});
window.RongHoEvent = module.exports = RongHoEvent;
