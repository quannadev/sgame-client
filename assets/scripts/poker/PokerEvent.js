let PokerEvent = {};
PokerEvent.RESPONSE_NAME = {
    FINISH_GAME_RES : "game_finish_res",
    STAND_UP_RES: "stand_up_res",
    LOAD_TABLE_INFO_RES: "load_table_info_res",
    USER_SIT_ON_RES: "user_sit_on_res",
    USER_SIT_OUT_RES: "user_sit_out_res",
    START: "start_res",
    PRE_START: "pre_start_res",
    KICK_USER_RES: "kick_user_res",
    USER_READY_RES: "user_ready_res",
    SHOW_DOWN_RES: "show_down_res",
    USER_BET_RES: "user_bet_res",
    USER_CALL_RES: "user_call_res",
    USER_CHECK_RES: "user_check_res",
    USER_FOLD_RES: "user_fold_res",
    USER_RAISE_RES: "user_raise_res",
    USER_GOING_ALL_RES: "user_going_all_res",
    GAME_TURN_RES: "game_turn_res",
    USER_TURN_RES: "user_turn_res",
    USER_BUY_IN_RES: "user_buy_in_res",
    LEVEL_TURN_RES: "level_turn_res",
    PAY_ANTE_RES: "pay_ante_res"
}
PokerEvent.LoadTableInfoEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.LOAD_TABLE_INFO_RES);
        this.m_isGameStart = false;
        this.m_isPrestart = false;
        this.m_prestartTime = 0;
        this.m_listDesk = [];
        this.m_listUserSitOut = [];
        this.m_listUser = [];
        this.m_listActiveUserName = [];
        this.m_listHandCard = [];
        this.m_listBetChip = [];
        this.m_listCommunityCard = [];
        this.m_potChip = 0;
        this.m_dealer = "";
        this.m_smallBlind = 0;
        this.m_bigBlind = 0;
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.LOAD_TABLE_INFO_RES);
        this.m_isGameStart = param.getBool("is_game_start");
        this.m_isPrestart = param.getBool("is_prestart");
        this.m_prestartTime = param.getInt("prestart_time");
        this.m_potChip = param.getDouble("pot_chip");

        this.m_dealer = param.getUtfString("dealer");
        this.m_smallBlind = param.getUtfString("small_blind");
        this.m_bigBlind = param.getUtfString("big_blind");

        let sfsListDesk = param.getSArray("list_desk");
        for(let i = 0; i < sfsListDesk.size(); i++){
            let desk = this.deskFromSObject(sfsListDesk.get(i).getObject());
            this.m_listDesk.push(desk);
        }

        let sfsListUserSitOut = param.getSArray("list_user_sit_out");
        for(let i = 0; i < sfsListUserSitOut.size();i++){
            this.m_listUserSitOut.push(sfsListUserSitOut.get(i).getObject());
        }

        let sfsListUser = param.getSArray("list_player");
        for(let i = 0; i < sfsListUser.size();i++){
            this.m_listUser.push(sfsListUser.get(i).getObject());
        }

        let sfsListUserPlaying = param.getSArray("list_active_user");
        for(let i = 0; i < sfsListUserPlaying.size();i++){
            this.m_listActiveUserName.push(sfsListUserPlaying.get(i).getObject());
        }

        let sfsListHandCard = param.getSArray("list_Hand_Card");
        for(let i = 0; i < sfsListHandCard.size();i++){
            let sfsHandCards = sfsListHandCard.get(i).getObject();
            let cards = [];
            for(let j = 0; j < sfsHandCards.size();j++){
                cards.push(sfsHandCards.get(j).getObject());
            }
            this.m_listHandCard[i] = cards;
        }

        let sfsListBetChip = param.getSArray("list_bet_chip");
        for(let i = 0; i < sfsListBetChip.size();i++){
            this.m_listBetChip.push(sfsListBetChip.get(i).getObject());
        }

        let sfsListCommunityCard = param.getSArray("list_comminity_card");
        for(let i = 0; i < sfsListCommunityCard.size();i++){
            this.m_listCommunityCard.push(sfsListCommunityCard.get(i).getObject());
        }
        return this;
    },
    deskFromSObject(obj){
        let desk = {};
        desk.DeskId = obj.getInt("deskID");
        desk.UserName = obj.getUtfString("userName");
        desk.DeskState = obj.getUtfString("deskState");
        desk.UserChip = obj.getDouble("chip");
        return desk;
    }
});
PokerEvent.UserSitOnEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_SIT_ON_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_SIT_ON_RES);
        this.m_deskId = param.getInt("deskID");
        this.m_userName = param.getUtfString("username");
        this.m_userChip = param.getDouble("chip");
        this.m_buyIn = param.getDouble("buy_in");
        this.m_deskState = param.getUtfString("deskState");
        this.m_currentUser = param.getUtfString("currentUser");
        return this;
    }
});
PokerEvent.UserSitOutEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_SIT_OUT_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_SIT_OUT_RES);
        this.m_username = param.getUtfString("user_name");
        this.m_isSitOut = param.getBool("is_sit_out");
        return this;
    }
})
PokerEvent.PreStartEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.PRE_START);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.PRE_START);
        this.m_isPrestart = param.getBool("is_prestart");
        this.m_prestartTime = param.getInt("time");
        return this;
    }
});
PokerEvent.StartEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.START);
        this.m_listCard = [];
        this.m_listActiveUserName = [];
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.START);
        this.m_dealer = param.getUtfString("dealer");
        this.m_smallBlind = param.getUtfString("small_blind");
        this.m_bigBlind = param.getUtfString("big_blind");
        this.m_currentUser = param.getUtfString("current_user");
        this.m_userTime = param.getInt("user_time");
        this.m_betChipGame = param.getDouble("bet_chip_game");

        this.m_isTurnNextLevel = param.getBool("is_turn_next_level");
        if(param.containsKey("level_time_life")){
            this.m_levelTimeLife = param.getInt("level_time_life");
        }else{
            this.m_levelTimeLife = -1;
        }

        let sfsCards = param.getSArray("list_card");
        for(let i = 0; i < sfsCards.size(); i++){
            this.m_listCard.push(sfsCards.get(i).getObject());
        }

        let sfsActiveUsers = param.getSArray("list_active_user_name");
        for(let i = 0; i < sfsActiveUsers.size(); i++){
            this.m_listActiveUserName.push(sfsActiveUsers.get(i).getObject());
        }
        return this;
    }
});
PokerEvent.UserTurnEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_TURN_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_TURN_RES);
        this.m_username = param.getUtfString("user_name");
        this.m_betchip = param.getDouble("bet_chip");
        this.m_time = param.getInt("time");
        return this;
    }
});
PokerEvent.UserFoldEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_FOLD_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_FOLD_RES);
        this.m_username = param.getUtfString("user_name");
        return this;
    }
});
PokerEvent.UserCallEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_CALL_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_CALL_RES);
        this.m_username = param.getUtfString("user_name");
        this.m_chip = param.getDouble("chip");
        return this;
    }
});
PokerEvent.UserCheckEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_CHECK_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_CHECK_RES);
        this.m_username = param.getUtfString("user_name");
        return this;
    }
});
PokerEvent.UserRaiseEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_RAISE_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_RAISE_RES);
        this.m_username = param.getUtfString("user_name");
        this.m_chip = param.getDouble("chip");
        return this;
    }
});
PokerEvent.UserAllInEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.USER_GOING_ALL_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.USER_GOING_ALL_RES);
        this.m_username = param.getUtfString("user_name");
        this.m_chip = param.getDouble("chip");
        return this;
    }
});
PokerEvent.GameTurnEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.GAME_TURN_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.GAME_TURN_RES);
        this.m_currentUser = param.getUtfString("current_user");
        this.m_currentGameTurn = param.getUtfString("current_game_turn");
        this.m_time = param.getInt("time");

        this.m_listCommunityCard = [];
        let sfsCards = param.getSArray("list_community_card");
        for(let j = 0; j < sfsCards.size(); j++){
            this.m_listCommunityCard.push(sfsCards.get(j).getObject());
        }
        return this;
    }
});
PokerEvent.ShowDownEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.SHOW_DOWN_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.SHOW_DOWN_RES);
        this.m_currentGameTurn = param.getUtfString("current_game_turn");
        this.m_listUser = [];
        let sfsUsers = param.getSArray("list_user");
        for(let i = 0; i < sfsUsers.size(); i++){
            this.m_listUser.push(sfsUsers.get(i).getObject());
        }

        this.m_listCard = [];
        let sfsListCard = param.getSArray("list_card");
        for(let i = 0; i < sfsListCard.size(); i++){
            let sfsCards = sfsListCard.get(i).getObject();
            let cards = [];
            for(let j = 0; j < sfsCards.size(); j++){
                cards.push(sfsCards.get(j).getObject());
            }
            this.m_listCard.push(cards);
        }

        this.m_listComCard = [];
        let sfsComCards = param.getSArray("list_community_card");
        for(let i = 0; i < sfsComCards.size(); i++){
            this.m_listComCard.push(sfsComCards.get(i).getObject());
        }
        return this;
    }
});
PokerEvent.FinishGameEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.FINISH_GAME_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.FINISH_GAME_RES);
        this.m_listUser = [];
        var sfsUsers = param.getSArray("list_user");
        for(let i = 0; i < sfsUsers.size(); i++){
            this.m_listUser.push(sfsUsers.get(i).getObject());
        }

        this.m_listPokerHand = [];
        var sfsPokerHands = param.getSArray("list_poker_Hand");
        for(let i = 0; i < sfsPokerHands.size(); i++){
            this.m_listPokerHand.push(sfsPokerHands.get(i).getObject());
        }

        this.m_listChip = [];
        var sfsChip = param.getSArray("list_chip");
        for(let i = 0; i < sfsChip.size(); i++){
            this.m_listChip.push(sfsChip.get(i).getObject());
        }

        this.m_listPokerHandCard = [];
        var sfsPokerHandCard = param.getSArray("list_poker_hand_card");
        for(let i = 0; i < sfsPokerHandCard.size(); i++){
            this.m_listPokerHandCard.push(sfsPokerHandCard.get(i).getObject());
        }

        this.m_listWinner = [];
        var sfsWinners = param.getSArray("list_winner");
        for(let i = 0; i < sfsWinners.size(); i++){
            this.m_listWinner.push(sfsWinners.get(i).getObject());
        }
        return this;
    }
});
PokerEvent.KickUserEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(PokerEvent.RESPONSE_NAME.KICK_USER_RES);
    },
    fromEvent(event){
        let param = event.get(PokerEvent.RESPONSE_NAME.KICK_USER_RES);
        this.m_resType = param.getInt("response_type");
        this.m_username = param.getUtfString("user_name");
        return this;
    }
})
window.PokerEvent = module.exports = PokerEvent;