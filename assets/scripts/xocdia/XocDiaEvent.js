let XocDiaEvent = {};
XocDiaEvent.RESPONSE_NAME = {
    LOAD_GAME_RES: "xd1",
    BET_RES: "xd2",
    END_BETTING: "xd3",
    HISTORY_RESULT: "xd4"
};
XocDiaEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(XocDiaEvent.RESPONSE_NAME.LOAD_GAME_RES);
    },
    fromEvent(event){
        this.isBetting = event.getBool("b");
        this.time = event.getInt("t");
        this.listChipPot = event.getDoubleArray("lcp");
        this.listMyChipPot = event.getDoubleArray("lmcp");
        if(!this.isBetting){
            this.result = event.getByteArray("rs");
            this.winpot = event.getByteArray("wp");
        }
        return this;
    }
})
XocDiaEvent.BetEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(XocDiaEvent.RESPONSE_NAME.BET_RES);
    },
    fromEvent(event){
        this.userName = event.getUtfString("un");
        this.betChip = event.getDouble("c");
        this.typePot = event.getByte("t");
        return this;
    }
});
XocDiaEvent.EndBetting = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(XocDiaEvent.RESPONSE_NAME.END_BETTING);
    },
    fromEvent(event){
        this.result = event.getByteArray("rs");
        this.winChip = event.getDouble("wc");
        this.winpot = event.getByteArray("wp");
        this.refund = event.getDouble("rfc");
        return this;
    }
});
XocDiaEvent.HistoryResponse = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(XocDiaEvent.RESPONSE_NAME.HISTORY_RESULT);
    },
    fromEvent(event){
        this.result = event.getByteArray("lr");
        return this;
    }
});
XocDiaEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
    ctor() {
        this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
        this.items = [];
        this.ITEM_NAME = ["Lẻ", "Chẵn", "3 Đen", "3 Trắng", "4 Đen", "4 Trắng"];
    },
    fromEvent(event){
        let data = event.getSArray("d");
        for(let i = 0; i < data.size(); i++){
            let sItem = data.get(i).getObject();
            let session = "#"+sItem.getDouble("id").toFixed(0);
            let time = sItem.getUtfString("t");
            let hoan_tra = sItem.getDouble("rf");
            let ketqua = this.getKeQua(sItem.getIntArray("rs"));
            let betValues = sItem.getDoubleArray("b");
            let prizeValues = sItem.getDoubleArray("w");
            for(let j = 0; j < betValues.length;j++){
                if(betValues[j] > 0){
                    let item = {};
                    item.session = session;
                    item.time = time;
                    item.ketqua = ketqua;
                    item.stakes = betValues[j];
                    item.win = prizeValues[j];
                    item.cuadat = this.ITEM_NAME[j]
                    item.hoan_tra = 0;
                    if(betValues[1] - betValues[0] > 0){
                        // hoan tra cua chan
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
    },
    getKeQua(result){
        let kq = "";
        let countWhite = 0; // black = 0
        let countBlack = 0; // white = 1;
        for(let i = 0; i < result.length;i++){
            if(result[i] == 0)
                countBlack++;
            else
                countWhite++;
        }
        if(countWhite % 2 == 0){
            kq = "Chẵn "
        }else{
            kq = "Lẻ ";
        }
        if(countWhite == 3){
            kq += "3 Trắng";
        }
        if (countWhite == 4){
            kq += "4 Trắng"
        }
        if(countWhite == 0){
            kq += "4 Đen";
        }
        if(countWhite == 1){
            kq += "3 Đen";
        }
        return kq;
    }
});
XocDiaEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
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
window.XocDiaEvent = module.exports = XocDiaEvent;
