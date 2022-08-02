cc.BaseGame = cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        poses: {
            default: [],
            type: cc.Node
        },
        nodePlayers: cc.Node,
        WaitingTimer: cc.Node,
        BaseController: cc.Node,
        prefabPlayer: cc.Prefab,
        _number_desk: 4,
        _CURRENT_POS: cc.Node,
        controller: null,
        _room: null,
        lb_bet_title: cc.Label,
        lb_id_table: cc.Label
    },
    requestLeaveRoom(){
        mm.Loading.show();
        this.controller.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(this._room));
    },
    setInfoTable(table_name, table_bet){
        this.lb_id_table.string = table_name;
        this.lb_bet_title.string = table_bet;
    },
    eventBack(){

    },
    setWaitingTimer(isOn, totalProcess, currentProcess){
        if(isOn){
            this.WaitingTimer.active = true;
            let timer = this.WaitingTimer.getComponent(this.WaitingTimer.name);
            timer.setTotalProgress(totalProcess);
            timer.setCurrentProgress(currentProcess);
            timer.turnOnTimer();
        }else{
            this.WaitingTimer.active = false;
        }
    },
    showDeskEmpty(){
        if(this._isPlayer(this.controller.ZoneInstance.mySelf.name))
            return;
        for(let i = 0; i < this._CURRENT_POS._children.length; i++){
            let player = this._getJSPlayerById(i);
            if(!player){
                this._CURRENT_POS._children[i].active = true;
            }
        }
    },
    hideDeskEmpty(){
        for(let i = 0; i < this._number_desk; i++){
            let player = this._getJSPlayerById(i);
            if(!player){
                this._CURRENT_POS._children[i].active = false;
            }
        }
    },
    _changeToMyView(){
        if(this._isPlayer(this.controller.ZoneInstance.mySelf.name)){
            let myId = this._getPlayerId(this.controller.ZoneInstance.mySelf.name);
            let myPos = myId;
            let maxUsers = this._number_desk;
            let distanceToZero = maxUsers - myPos;
            for(let i = 0; i < maxUsers; i++){
                let nodePlayer = this._getNodePlayerById(i);
                if(cc.isValid(nodePlayer)){
                    let newIndex = (i + distanceToZero) % maxUsers;
                    nodePlayer.position = this.poses[newIndex];
                    let js = this._getJSPlayer(nodePlayer);
                    js.newPos = newIndex;
                    js.number_desk = this._number_desk;
                    js.updatePosHand();
                }
            }
        }
    },
    _updateNodePlayers(m_listDesk){
        // process List Desk for player
        for(let i = 0; i < m_listDesk.length;i++){
            let desk = m_listDesk[i];
            let nodePlayer = this._getNodePlayerById(desk.DeskId);
            if(nodePlayer == null){
                nodePlayer = cc.instantiate(this.prefabPlayer);
                this.nodePlayers.addChild(nodePlayer);
            }
            nodePlayer.position = this.poses[desk.DeskId].position;
            nodePlayer.playerId = desk.DeskId;
            desk.displayName = GameVariables.getDisplayName(this._room.getUserByName(desk.UserName));
            this._getJSPlayer(nodePlayer).setDesk(desk);
        }
        this._changeToMyView();
    },

    removePlayer(userOut){
        // remove player in active
        // remove desk in listDesk mm.mm_tableInfo
        // remove user in mm.m_tableInfo.m_listUser
        for(let i = 0; i < userOut.length; i++){
            let player = this._getJSPlayerByName(userOut);
            if(player && player.getDesk().UserName == userOut[i]){
                this._removeNodePlayerById(player.getDesk().DeskId);
                this.controller.m_tableInfo.m_listDesk.splice(this.controller.m_tableInfo.m_listDesk.indexOf(player.getDesk()), 1);
                this.controller.m_tableInfo.m_listUser.splice(this.controller.m_tableInfo.m_listUser.indexOf(userOut[i]), 1);
            }
        }
    },
    turnOffAllTimerPlayers(){
        if(this.controller.m_tableInfo && this.controller.m_tableInfo.m_listActiveUserName){
            for(let i = 0; i < this.controller.m_tableInfo.m_listActiveUserName.length;i++){
                let player = this._getJSPlayerByName(this.controller.m_tableInfo.m_listActiveUserName[i]);
                if(player){
                    player.turnOffTimer();
                }
            }
        }
    },
    _getNodePlayerById(idPlayer){
        for(let i = 0; i < this.nodePlayers._children.length;i++){
            if(this.nodePlayers._children[i].playerId == idPlayer){
                return this.nodePlayers._children[i];
            }
        }
        return null;
    },
    _removeNodePlayerById(idPlayer){
        for(let i = 0; i < this.nodePlayers._children.length;i++){
            if(this.nodePlayers._children[i].playerId == idPlayer){
                this.nodePlayers._children[i].active = false;
                this.nodePlayers.removeChild(this.nodePlayers._children[i], true);
                break;
            }
        }
    },
    _getJSPlayer(nodePlayer){
        return nodePlayer.getComponent(nodePlayer.name);
    },
    _getJSPlayerById(idPlayer){
        let nodePlayer = this._getNodePlayerById(idPlayer);
        if(cc.isValid(nodePlayer))
            return this._getJSPlayer(nodePlayer);
        return null;
    },
    _getJSPlayerByName(username){
        let deskId = this._getPlayerId(username);
        let player = this._getJSPlayerById(deskId);
        return player;
    },
    _getPlayerId(username){
        if(this.controller.m_tableInfo && this.controller.m_tableInfo.m_listDesk){
            for(let i = 0; i < this.controller.m_tableInfo.m_listDesk.length;i++){
                let desk = this.controller.m_tableInfo.m_listDesk[i];
                if(desk.UserName == username){
                    return desk.DeskId;
                }
            }
        }
        return -1;
    },
    _isPlayer(username){
        if(this.controller.m_tableInfo && this.controller.m_tableInfo.m_listDesk){
            for(let i = 0; i < this.controller.m_tableInfo.m_listDesk.length;i++){
                let desk = this.controller.m_tableInfo.m_listDesk[i];
                if(desk.UserName == username){
                    return true;
                }
            }
        }
        return false;
    }
});
