let BaccaratEvent = {};
BaccaratEvent.RESPONSE_NAME = {
    LOAD_GAME_RES: "b1",
    BET_RES: "b2",
    END_BETTING: "b3",
    HISTORY_RESULT: "b4",
    HISTORY_DETAIL: "b5",
};
BaccaratEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(BaccaratEvent.RESPONSE_NAME.LOAD_GAME_RES);
    },
    fromEvent(event){
        this.isBetting      = event.getBool("b");
        this.time           = event.getInt("t");
        this.listChipPot    = event.getDoubleArray("lcp");
        this.listMyChipPot  = event.getDoubleArray("lmcp");
        this.cardPlayer     = event.getByteArray("cp");
        this.cardBanker     = event.getByteArray("cb");
        this.usersOnboard   = event.getUtfStringArray("lu");
        if(!this.isBetting){
            this.winpot = event.getByteArray("wp");
            this.chipUserOnBoard  = event.getDoubleArray("lc");
        }
        let resultArray = event.getSArray("h");
        this.allCau = [];
        for(let i = 0; i < resultArray.size(); i++) {
            let sItem = resultArray.get(i).getObject();
            let type  = sItem.getByteArray("rs");
            this.allCau.push({
                "cai": sItem.getByte("pb"),
                "con": sItem.getByte("pp"),
                "type": sItem.getByteArray("rs")
            });

        }
        return this;
    }
})
BaccaratEvent.BetEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(BaccaratEvent.RESPONSE_NAME.BET_RES);
    },
    fromEvent(event){
        this.userName = event.getUtfString("un");
        this.betChip = event.getDouble("c");
        this.typePot = event.getByte("t");
        return this;
    }
});
BaccaratEvent.EndBetting = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(BaccaratEvent.RESPONSE_NAME.END_BETTING);
    },
    fromEvent(event){
        this.cardPlayer = event.getByteArray("cp");
        this.cardBanker = event.getByteArray("cb");
        this.winpot     = event.getByteArray("wp");
        this.chipUserOnBoard  = event.getDoubleArray("lc");
        this.usersOnboard     = event.getUtfStringArray("lu");
        return this;
    }
});
BaccaratEvent.HistoryResponse = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(BaccaratEvent.RESPONSE_NAME.HISTORY_RESULT);
    },
    fromEvent(event){
        this.result = event.getByteArray("lr");
        return this;
    }
});
BaccaratEvent.HistoryDetailEvent= CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(BaccaratEvent.RESPONSE_NAME.HISTORY_DETAIL);
    },
    fromEvent(event){
        let resultArray = event.getSArray("d");
        this.allCau   = [];
        this.allScore = [];
        for(let i = 0; i < resultArray.size(); i++) {
            let sItem = resultArray.get(i).getObject();
            this.allCau.push({
                "cai": sItem.getByte("pb"),
                "con": sItem.getByte("pp"),
                "type": sItem.getByteArray("rs")
            })
        }
        return this.allCau;
    }
});
BaccaratEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
    ctor() {
        this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
        this.items = [];
    },
    fromEvent(event){
        let data = event.getSArray("d");
        for(let i = 0; i < data.size(); i++){
            let sItem   = data.get(i).getObject();
            let item = {};
            item.session     = sItem.getDouble("id").toFixed(0);
            item.time        = sItem.getUtfString("t");
            item.bet         = sItem.getDoubleArray("b");
            item.win         = sItem.getDoubleArray("w");
            item.bankerIds   = sItem.getIntArray("cb");
            item.playerIds   = sItem.getIntArray("cp");
            item.bankerPoint = sItem.getInt("pb");
            item.playerPoint = sItem.getInt("pp");
            this.items.push(item);
        }
        return this.items;
    }
});
BaccaratEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
    ctor() {
        this._super(CasinoEvent.RESPONSE_NAME.LEADERBOARD_RES);
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
            this.items.push(item);
        }
        return this.items;
    }
});
window.BaccaratEvent = module.exports = BaccaratEvent;
