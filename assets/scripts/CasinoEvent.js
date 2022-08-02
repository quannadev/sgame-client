let CasinoEvent = {};
CasinoEvent.RESPONSE_NAME = {
    GROUP_GAME_RES : "g1",
    QUICK_JOIN_GAME_RES:  "g2",
    HISTORY_RES: "g4",
    LEADER_BOARD_RES : "g5",
    TRANSFER_MONEY_RES: "p1",
    CHANGE_PASS_RES: "p2",
    GIFT_CODE_RES: "p3",
    LIST_AGENCY_RES: "p4"
}
CasinoEvent._BaseEvent = SmartFoxSDK.Class.extend({
    ctor(name){
        this._eventName = name;
    },
    getEventName(){
        return this._eventName;
    },
    fromEvent(event){
        return this;
    },
    toEvent(){
        return this;
    }
});
CasinoEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
    },
    fromEvent(event){
        this.game = event.getUtfString("g");
        this.data = event.getSArray("d");
        return this;
    }
});
CasinoEvent.LeaderboardEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
    },
    fromEvent(event){
        this.game = event.getUtfString("g");
        this.data = event.getSArray("d");
        return this;
    }
});
CasinoEvent.LoginEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(SmartFoxSDK.SmartFox.Event.LOGIN);
    },
    fromEvent(event){
        this.user = event.user;
        this.data = event.data;
        return this;
    },
    getUserInfo(){
        return this.user;
    },
    getData(){
        return this.data;
    }
});
CasinoEvent.RoomJoinEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(SmartFoxSDK.SmartFox.Event.ROOM_JOIN);
    },
    fromEvent(event){
        this.room = event.room;
        return this;
    },
    getRoomInfo(){
        return this.room;
    }
})
CasinoEvent.QuickJoinGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES);
    },
    fromEvent(event){
        this.roomId = event.getInt("id");
        return this;
    }
});
CasinoEvent.GroupGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES);
    },
    fromEvent(event){
        this.groups = [];
        let groups = event.getSArray("groups");
        for(let i = 0; i < groups.size();i++){
            let objGroup = groups.get(i).getObject();
            let groupId = objGroup.getUtfString("group");
            let groupVars = objGroup.getSArray("vars");

            let vars = {};
            for(let j = 0; j < groupVars.size();j++){
                let roomVar = SmartFoxSDK.SmartFox.Entities.Variables.RoomVariable.fromArray(groupVars.get(j).getObject());
                vars[roomVar.name] = roomVar.value.value;
            }
            let obj = {};
            obj.group_id = groupId;
            obj.group_vars = vars;
            this.groups.push(obj);
        }
        this.groups.sort(function (a, b) {
            return a.group_vars.bet_chip - b.group_vars.bet_chip;
        });
        return this;
    }
})
CasinoEvent.TransferMoneyEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES);
    },
    fromEvent(event){
        this.code = event.getByte("c");
        return this;
    }
});
CasinoEvent.ChangePassEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES);
    },
    fromEvent(event){
        this.code = event.getByte("c");
        return this;
    }
});
CasinoEvent.GiftCodeEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES);
    },
    fromEvent(event){
        if(event.getUtfString("ec") != null){
            this.ec = event.getUtfString("ec");
        }else{
            this.gift_value = event.getDouble("c");
        }
        return this;
    }
});
CasinoEvent.ListAgencyEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES);
    },
    fromEvent(event){
        let listAgency = [];
        let arr = event.getSArray("d");
        for(let i = 0; i < arr.size();i++){
            let sItem = arr.get(i).getObject();
            let agency = {};
            agency.username = sItem.getUtfString("un");
            agency.name = sItem.getUtfString("dn");
            agency.agName = sItem.getUtfString("ag");
            agency.zone = sItem.getUtfString("lo");
            agency.telegram = sItem.getUtfString("tl");
            agency.phone = sItem.getUtfString("p");
            agency.address = sItem.getUtfString("add");
            agency.face = sItem.getUtfString("fb");
            agency.stt = i+1;
            listAgency.push(agency);
        }
        return listAgency;
    }
});
CasinoEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
    },
    fromEvent(event){
        return this;
    }
});
CasinoEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
    },
    fromEvent(event){
        return this;
    }
});
window.CasinoEvent = CasinoEvent;
