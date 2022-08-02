let PokerEvent = require('PokerEvent')
let PokerController = SmartFoxSDK.BaseController.extend({
    m_tableInfo: null,
    QuickJoinRoomConfig: {},
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES, this.onGroupRoomEvent, this);
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES, this.onQuickJoinRoom, this);

        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.LOAD_TABLE_INFO_RES, this.onLoadTableEvent, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_ON_RES, this.onUserSitOn, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.PRE_START, this.onPreStart, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.START, this.onStartEvent, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_TURN_RES, this.onUserTurn, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_OUT_RES, this.onUserSitOut, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.STAND_UP_RES, this.onUserStandUp, this);

        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_FOLD_RES, this.onUserFold, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CALL_RES, this.onUserCall, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CHECK_RES, this.onUserCheck, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_RAISE_RES, this.onUserRaise, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_GOING_ALL_RES, this.onUserAllIn, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.GAME_TURN_RES, this.onGameTurn, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.SHOW_DOWN_RES, this.onShowDown, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.FINISH_GAME_RES, this.onFinishGame, this);
        this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.KICK_USER_RES, this.onKickUser, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES, this.onGroupRoomEvent, this);
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES, this.onQuickJoinRoom, this);

        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.LOAD_TABLE_INFO_RES, this.onLoadTableEvent, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_ON_RES, this.onUserSitOn, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.PRE_START, this.onPreStart, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.START, this.onStartEvent, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_TURN_RES, this.onUserTurn, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_OUT_RES, this.onUserSitOut, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.STAND_UP_RES, this.onUserStandUp, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_FOLD_RES, this.onUserFold, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CALL_RES, this.onUserCall, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CHECK_RES, this.onUserCheck, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_RAISE_RES, this.onUserRaise, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_GOING_ALL_RES, this.onUserAllIn, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.GAME_TURN_RES, this.onGameTurn, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.SHOW_DOWN_RES, this.onShowDown, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.FINISH_GAME_RES, this.onFinishGame, this);
        this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.KICK_USER_RES, this.onKickUser, this);
    },
    onEventLogin(event){
        this._super(event);
        let groupRequest = new CasinoRequest.GroupGameRequest();
        groupRequest.setGame(this.zoneName);
        this.ZoneInstance.send(groupRequest.toSRequest());
    },
    getUILobby(){
        const scene = cc.director.getScene();
        let uiLobby =  cc.find("UILobby", scene);
        return uiLobby.getComponent(uiLobby.name);
    },
    onLeaderBoardEvent(event){
        let arr =[];
        let data = event.getSArray("d");
        for(let i = 0;i < data.size();i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = i +1;
            item.account = sItem.getUtfString("dn");
            item.win = sItem.getDouble("m");
            arr.push(item);
        }
        if(this.getUILobby()){
            this.getUILobby().updateRank(arr);
        }
    },
    onGroupRoomEvent(event){
        let groupRoom = new CasinoEvent.GroupGameEvent().fromEvent(event);
        if(mm.game == undefined)
            mm.game = {};
        mm.game[this.zoneName] = {};
        mm.game[this.zoneName].groups = groupRoom.groups;
        mm.game[this.zoneName].displayname = GameVariables.getDisplayName(this.ZoneInstance.mySelf);
        mm.game[this.zoneName].chip = GameVariables.getChip(this.ZoneInstance.mySelf);
        UIManger.show("UILobby", {pop: true, data: {game: this.zoneName, ZoneInstance: this.ZoneInstance}}, function () {
            let request = new CasinoRequest.LeaderBoardRequest();
            this.ZoneInstance.send(request.toSRequest());
        }.bind(this));
    },
    onQuickJoinRoom(event){
        let quickJoin = new CasinoEvent.QuickJoinGameEvent().fromEvent(event);
        if(quickJoin.roomId >= 0){
            this.ZoneInstance.send(new CasinoRequest.JoinRoomRequest(quickJoin.roomId, "1", true).toSRequest());
        }else{
            mm.Toast.showToast(1, "Phòng đã đầy vui vòng chọn phòng khác");
        }
    },
    onLoadTableEvent(event){
        let _data = {pop: true, data: {room: this.room, buy_in : this.QuickJoinRoomConfig.buy_in, number_desk: this.QuickJoinRoomConfig.number_desk}};
        this.preLoadUI(_data, function () {
            mm.Loading.hide();
            this.getUI().controller = this;
            this.QuickJoinRoomConfig.betChip = GameVariables.Poker.getBetChip(this.room);
            this.QuickJoinRoomConfig.roomId = this.room.id;
            this.getUI().setInfoTable("Poker / #"+this.room.id, Utils.formatCurrency(this.QuickJoinRoomConfig.betChip));
            this.m_tableInfo = new PokerEvent.LoadTableInfoEvent().fromEvent(event);
            this.m_tableInfo.room = this.room;
            if(!this.m_tableInfo.m_isGameStart || this.m_tableInfo.m_listActiveUserName.indexOf(this.ZoneInstance.mySelf.name) < 0){
                this.getUI().requestSitOn();
            }
            this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
            if(this.m_tableInfo.m_isPrestart && !this.m_tableInfo.m_isGameStart){
                this.getUI().setWaitingTimer(true, 5, this.m_tableInfo.m_isPrestart / 100);
            }
            if(this.m_tableInfo.m_isGameStart){
                this.getUI().turnOffAllTimerPlayers();
                // update community card
                this.getUI().getCommunityCard().showCommunityCard(mm.m_tableInfo.m_listCommunityCard);

                // update state for each user
                for(let i = 0; i < this.m_tableInfo.m_listActiveUserName.length;i++){
                    let player = this.getUI()._getJSPlayerByName(this.m_tableInfo.m_listActiveUserName[i]);
                    if(player){
                        player.addCardHand(this.m_tableInfo.m_listHandCard[i]);
                        player.showBetChip(this.m_tableInfo.m_listBetChip[i]);
                    }
                }
                this.getUI().setMoneyPot(this.m_tableInfo.m_potChip);
            }
            this.getUI().hideDeskEmpty();
        }.bind(this))
    },
    onUserSitOn(event){
        let userSitOnEvent = new PokerEvent.UserSitOnEvent().fromEvent(event);
        // add to list desk
        let desk = {};
        desk.DeskId = userSitOnEvent.m_deskId;
        desk.UserName = userSitOnEvent.m_userName;
        desk.DeskState = userSitOnEvent.m_deskState;
        desk.UserChip = userSitOnEvent.m_buyIn;
        this.m_tableInfo.m_listDesk.push(desk);

        // add to list user
        this.m_tableInfo.m_listUser.push(userSitOnEvent.m_userName);

        this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
    },
    onPreStart(event){
        let preStart = new PokerEvent.PreStartEvent().fromEvent(event);
        this.m_tableInfo.m_isPrestart = preStart.m_isPrestart;
        this.m_tableInfo.m_prestartTime = preStart.m_prestartTime;
        this.m_tableInfo.m_isGameStart = false;
        // reset card comminity
        this.getUI().getCommunityCard().reset();
        this.getUI().setMoneyPot(-1);
        this.m_tableInfo.m_total_bet = 0;
        // reset poker text win
        this.getUI().hidePokerTextWinner();
        // hide all hold em of players
        for(let i = 0; i < this.m_tableInfo.m_listDesk.length;i++){
            let desk = this.m_tableInfo.m_listDesk[i];
            let player = this.getUI()._getJSPlayerById(desk.DeskId);
            player.onPreStartEvent(preStart);
        }
        if(preStart.m_isPrestart){
            this.getUI().setWaitingTimer(true,preStart.m_prestartTime / 1000, preStart.m_prestartTime / 1000);
        }
        this.getUI().showDeskEmpty();

        if(this.m_tableInfo.m_listUserSitOut.indexOf(this.ZoneInstance.mySelf.name) >= 0){
            this.getUI().requestLeaveRoom();
        }

        // check count out
        if(this.getUI().countOut >= 1){
            this.getUI().requestLeaveRoom();
        }
    },
    onStartEvent(event){
        this.getUI().countOut++;
        this.getUI().setWaitingTimer(false);
        let start = new PokerEvent.StartEvent().fromEvent(event);
        this.m_tableInfo.m_dealer = start.m_dealer;
        this.m_tableInfo.m_smallBlind = start.m_smallBlind;
        this.m_tableInfo.m_bigBlind = start.m_bigBlind;
        this.m_tableInfo.m_betChipGame = start.m_betChipGame;
        this.m_tableInfo.m_currentUser =  start.m_currentUser;
        this.m_tableInfo.m_userTime = start.m_userTime;
        this.m_tableInfo.m_isGameStart = true;
        if(this.m_tableInfo.m_listActiveUserName){
            let userOut = [];
            for(let i = 0; i < this.m_tableInfo.m_listActiveUserName.length;i++){
                if(start.m_listActiveUserName.indexOf(this.m_tableInfo.m_listActiveUserName[i]) < 0){
                    userOut.push(this.m_tableInfo.m_listActiveUserName[i]);
                }
            }
            this.getUI().removePlayer(userOut);
        }
        this.m_tableInfo.m_listActiveUserName = start.m_listActiveUserName;
        this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
        // set Actions Controller For mySelf
        if(this.getUI()._isPlayer(this.ZoneInstance.mySelf.name)){
            let deskId = this.getUI()._getPlayerId(this.ZoneInstance.mySelf.name);
            let player = this.getUI()._getJSPlayerById(deskId);
            player.setActionController(this.getUI().getAction());
        }

        for(let i = 0; i < this.m_tableInfo.m_listDesk.length;i++){
            let desk = this.m_tableInfo.m_listDesk[i];
            let jsPlayer = this.getUI()._getJSPlayerById(desk.DeskId);
            jsPlayer.onStartEvent(start);
        }
        this.getUI().hideDeskEmpty();
    },
    onUserTurn(event){
        this.getUI().turnOffAllTimerPlayers();
        // next user turn
        let userTurnRes = new PokerEvent.UserTurnEvent().fromEvent(event);
        this.m_tableInfo.m_currentUser = userTurnRes.m_username;
        this.m_tableInfo.m_userTime = userTurnRes.m_time;
        let deskId = this.getUI()._getPlayerId(userTurnRes.m_username);
        let player = this.getUI()._getJSPlayerById(deskId);
        if(player)
            player.onTurnEvent(userTurnRes);
    },
    onGameTurn(event){
        this.getUI().turnOffAllTimerPlayers();
        let gameTurnRes = new PokerEvent.GameTurnEvent().fromEvent(event);
        let userFirstBetting = gameTurnRes.m_currentUser;
        let communityCard = this.getUI().getCommunityCard();
        let currentGameTurn = gameTurnRes.m_currentGameTurn;
        let process = false;
        this.getUI().processBetChipToPot(function () {
            if(!process){
                process = true;
                if(currentGameTurn == "BETTING"){

                }else if(currentGameTurn == "FLOP"){
                    communityCard.dealFlop(gameTurnRes.m_listCommunityCard);
                }else if(currentGameTurn == "TURN"){
                    communityCard.dealTurn(gameTurnRes.m_listCommunityCard);
                }else if(currentGameTurn == "RIVER"){
                    communityCard.dealRiver(gameTurnRes.m_listCommunityCard);
                }else if(currentGameTurn == "END"){

                }else{
                    console.log("UNKOWN TURN "+currentGameTurn);
                }
            }
        });
        let playerBet = this.getUI()._getJSPlayerByName(userFirstBetting);
        if(playerBet)
            playerBet.showBetting();
    },
    onUserFold(event){
        let userFoldRes = new PokerEvent.UserFoldEvent().fromEvent(event);
        let player = this.getUI()._getJSPlayerByName(userFoldRes.m_username);
        if(player)
            player.onFoldEvent(userFoldRes);
        if(userFoldRes.m_username == this.ZoneInstance.mySelf.name){
            this.getUI().countOut = 0;
        }
    },
    onUserCall(event){
        let userCallRes = new PokerEvent.UserCallEvent().fromEvent(event);
        let player = this.getUI()._getJSPlayerByName(userCallRes.m_username);
        if(player)
            player.onCallEvent(userCallRes);
        if(userCallRes.m_username == this.ZoneInstance.mySelf.name){
            this.getUI().countOut = 0;
        }
    },
    onUserCheck(event){
        let userCheckRes = new PokerEvent.UserCheckEvent().fromEvent(event);
        let player = this.getUI()._getJSPlayerByName(userCheckRes.m_username);
        if(player)
            player.onCheckEvent(userCheckRes);
        if(userCheckRes.m_username == this.ZoneInstance.mySelf.name){
            this.getUI().countOut = 0;
        }
    },
    onUserRaise(event){
        let userRaiseRes = new PokerEvent.UserRaiseEvent().fromEvent(event);
        let player = this.getUI()._getJSPlayerByName(userRaiseRes.m_username);
        if(player)
            player.onRaiseEvent(userRaiseRes);
        if(userRaiseRes.m_username == this.ZoneInstance.mySelf.name){
            this.getUI().countOut = 0;
        }
    },
    onUserAllIn(event){
        let userAllInRes = new PokerEvent.UserAllInEvent().fromEvent(event);
        let player = this.getUI()._getJSPlayerByName(userAllInRes.m_username);
        if(player)
            player.onAllInEvent(userAllInRes);
        if(userAllInRes.m_username == this.ZoneInstance.mySelf.name){
            this.getUI().countOut = 0;
        }
    },
    onShowDown(event){
        this.getUI().processBetChipToPot();
        let showDownRes = new PokerEvent.ShowDownEvent().fromEvent(event);
        let communityCard = this.getUI().getCommunityCard();
        communityCard.showDown(showDownRes.m_listComCard);
        // stop all timer of player
        for(let i = 0; i < showDownRes.m_listUser.length;i++){
            let name = showDownRes.m_listUser[i];
            let player = this.getUI()._getJSPlayerByName(name);
            if(player)
                player.onShowDownEvent(showDownRes.m_listCard[i]);
        }
    },
    onFinishGame(event){
        this.getUI().turnOffAllTimerPlayers();
        let finishGameRes = new PokerEvent.FinishGameEvent().fromEvent(event);
        let communityCard = this.getUI().getCommunityCard();

        communityCard.showCommunityCardWin(finishGameRes.m_listPokerHandCard);

        for(let i = 0; i < finishGameRes.m_listUser.length;i++){
            let name = finishGameRes.m_listUser[i];
            let player = this.getUI()._getJSPlayerByName(name);
            if(player){
                if(finishGameRes.m_listWinner.indexOf(name) >= 0){
                    let typeBestWin = finishGameRes.m_listPokerHand[i];
                    this.getUI().showPokerTextWinner(typeBestWin);
                    this.getUI().runActionPotChipToWinner(finishGameRes.m_listChip[i], name, function (chip, target) {
                        target.onWinnerEvent();
                    }, player);
                }
                player.onGameFinishEvent(finishGameRes.m_listPokerHandCard, finishGameRes.m_listPokerHand[i],finishGameRes.m_listChip[i]);
            }

        }
        this.m_tableInfo.m_potChip = 0;
        this.m_tableInfo.m_isGameStart = false;
        this.getUI().setMoneyPot(this.m_tableInfo.m_potChip);
    },
    onUserSitOut(event){
        mm.Loading.hide();
        let sitOutRes = new PokerEvent.UserSitOutEvent().fromEvent(event);
        let indexUser = this.m_tableInfo.m_listUserSitOut.indexOf(sitOutRes.m_username);
        if(indexUser < 0){
            this.m_tableInfo.m_listUserSitOut.push(sitOutRes.m_username);
        }else if(!sitOutRes.m_isSitOut){
            this.m_tableInfo.m_listUserSitOut.splice(indexUser, 1);
        }
        let player = this.getUI()._getJSPlayerByName(sitOutRes.m_username);
        if(player)
            player.setSitOut(sitOutRes.m_isSitOut);
        if(this.ZoneInstance.mySelf.name == sitOutRes.m_username){
            if(sitOutRes.m_isSitOut)
                mm.Toast.showToast(1, "Đăng ký rời bàn!");
            else
                mm.Toast.showToast(1, "Hủy rời bàn!");
        }
    },
    onKickUser(event){
        let kickRes = new PokerEvent.KickUserEvent().fromEvent(event);
        if(kickRes.m_resType == 2){
            if(this.getUI()._getJSPlayerByName(kickRes.m_username) != null){
                this.getUI().removePlayer([kickRes.m_username]);
                if(this.ZoneInstance.mySelf.name == kickRes.m_username){
                    this.getUI().requestLeaveRoom();
                }
            }
        }
    },
    onUserStandUp(event){

    },
    onPublicMessage(event){
        let sender = event.sender;
        let msg = event.message;
        let data = event.data;
        let dataSender = data != null ? {dn: data.get("dn"), fb : data.get("fb")} : {dn: "...", fb : ""};
        let msgItem = {};
        msgItem.sender = sender;
        msgItem.msg = msg;
        msgItem.dataSender = dataSender;
        this.getUI().onPublicMessage(msgItem);
    },
});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new PokerController("UIPoker", "poker");
    return instance;
}
SmartFoxSDK.PokerController = module.exports = getInstance();
