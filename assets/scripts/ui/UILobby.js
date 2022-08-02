let Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        roomList: Listview,
        roomContent: [],
        lb_name: cc.Label,
        lb_chip: cc.Label,
        _currentGroup: null,
        Avatar: cc.Sprite,
        titleGame: cc.Label,
        UIPokerRank: cc.Node
    },
    onLoad(){
        // update avatar image
        Utils.loadRes(this.Avatar, "images/avatar/"+Config.getDefaultAvatar());
    },
    onEnable(){
        this.updateUserVariable(null);
        if(mm.game && mm.game[this._data.game]){
            this.roomContent = mm.game[this._data.game].groups;
            this.roomList.numItems = this.roomContent.length;
        }
        if(this._data.game == "poker"){
            this.titleGame.string = "Poker"
        }else if(this._data.game == "tlmn"){
            this.titleGame.string = "TLMN"
        }else if(this._data.game == "bacay"){
            this.titleGame.string = "Ba Cây"
        }else if(this._data.game == "maubinh"){
            this.titleGame.string = "Mậu binh";
        }else{
            this.titleGame.string = "Casino";
        }
        mm.Loading.hide();
    },
    updateRank(arr){
        if(this.UIPokerRank)
            this.UIPokerRank.getComponent(this.UIPokerRank.name).updateRank(arr);
    },
    updateUserVariable(subChip){
        if(PortalManager.getGameController(this._data.game)){
            this.lb_name.string = Utils.formatText(GameVariables.Poker.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf), 20);
            this.lb_chip.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf)-subChip);
        }
    },
    back(){
        mm.audio.playButton();
        UIManger.show("UIHome");
    },
    onRenderLobby(item, idx){
        let jsItem = item.getComponent(item.name);
        jsItem.init(this.roomContent[idx]);
    },
    onSelectRoom(item, idx){
        mm.audio.playButton();
        let self = this;
        let groupId = this.roomContent[idx].group_id;
        let minChip = this.roomContent[idx].group_vars.bet_chip*100;
        if(GameVariables.Poker.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf) < minChip){
            mm.Toast.showToast(1, "Bạn cần tối thiểu "+Utils.addDotToNumber(minChip) +'đ');
            return;
        }
        if(groupId.includes("poker")){
            let bet = this.roomContent[idx].group_vars.bet_chip;
            let min = this.roomContent[idx].group_vars.min_chip;
            let max = this.roomContent[idx].group_vars.max_chip;
            let remainChip = GameVariables.Poker.getChip(PortalManager.getGameController(this._data.game).ZoneInstance.mySelf);
            let currentChip = min;
            let distance = bet;
            if(GameVariables.Poker.getChip(PortalManager.getGameController(this._data.game).ZoneInstance.mySelf) < min){
                mm.Toast.showToast(1, "Bạn cần tối thiểu "+Utils.addDotToNumber(min) +' Chip ');
                return;
            }
            this.show("UIDialogBuyIn", {data: {
                    distance: distance,
                    remainChip: remainChip,
                    currentChip: currentChip,
                    min : min,
                    max: max,
                    cbYes: function (err) {
                        if(err){
                            mm.Toast.showToast(0.5, err);
                            return;
                        }
                        mm.Loading.show();
                        SmartFoxSDK.PokerController.QuickJoinRoomConfig.buy_in = this.getBuyIn();
                        SmartFoxSDK.PokerController.QuickJoinRoomConfig.number_desk = this._sizeDesk;
                        let quickRequest = new CasinoRequest.QuickJoinGameRequest();
                        quickRequest.setGame(self._data.game);
                        quickRequest.setSizeDesk(this._sizeDesk);
                        quickRequest.setGroup(groupId);
                        SmartFoxSDK.PokerController.ZoneInstance.send(quickRequest.toSRequest());
                        this.back();
                    }
             }, pop: true});
        }else {
            mm.Loading.show();
            let sizeDesk = 4;
            if(this._data.game == "bacay")
                sizeDesk = 6;
            let quickRequest = new CasinoRequest.QuickJoinGameRequest();
            quickRequest.setGroup(groupId);
            quickRequest.setSizeDesk(sizeDesk);
            PortalManager.getGameController(this._data.game).ZoneInstance.send(quickRequest.toSRequest());
        }
    }
});
