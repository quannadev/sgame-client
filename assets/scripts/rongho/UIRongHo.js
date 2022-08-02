let PokerCard = require('PokerCard');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        ChatEmojiLayer: cc.Node,
        listNodeBet: {
            type: cc.Node,
            default: []
        },
        listNodePot: {
            type: cc.Node,
            default: []
        },
        _myChipBet : [],
        _currentType : -1,
        _currentBet: 1000,
        Timer: cc.Node,
        ChipPrefab: cc.Prefab,
        POS: cc.Node,
        Result: cc.Node,
        CardRong: cc.Node,
        CardHo: cc.Node,
        ListMenu: cc.Node,
        Notice: cc.Node,
        Toast: cc.Node,
        lb_countUser: cc.Label,
        _isRongHo: -1
    },
    onLoad(){
        this._currentBet = 1000;
        this._myChipBet     = [];
        this._isDat         = false;
        this._isDatLast     = false;
        this.poolChip = [];
        for(let i = 0; i < 20;i++){
            let chip = cc.instantiate(this.ChipPrefab);
            this.node.addChild(chip);
            chip.active = false;
            chip.scale = 0.33;
            this.poolChip.push(chip);
        }
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (this.node != null)
                SmartFoxSDK.RongHoController.resumeGame();
        }.bind(this));
        this._isRongHo = -1;
    },
    resetBetRongHo(){
        this._isRongHo = -1;
    },
    onEnable(){
        this.Timer.active = false;
        this.Result.active = false;
        this._stopEffectWinPot();
        this.listMyChipBet = [];
        for(let i = 0; i < this.listNodePot.length;i++){
            this.listMyChipBet.push(this.listNodePot[i].getChildByName("mybet").getComponent(cc.Label));
        }
        this.listChipBet = [];
        for(let i = 0; i < this.listNodePot.length;i++){
            this.listChipBet.push(this.listNodePot[i].getChildByName("pot").getComponent(cc.Label));
        }
    },
    getChipNode(){
        for(let i = 0; i < this.poolChip.length;i++){
            if(!this.poolChip[i].active){
                this.poolChip[i].active = true;
                return this.poolChip[i];
            }
        }
        let chip = cc.instantiate(this.ChipPrefab);
        this.node.addChild(chip);
        chip.active = true;
        chip.scale = 0.33;
        this.poolChip.push(chip);
        return chip;
    },
    returnChipNode(chipNode){
        chipNode.active = false;
    },
    _stopEffectWinPot(){
        for(let i = 0; i < this.listNodePot.length;i++){
            let nodePot = this.listNodePot[i];
            let line = nodePot.getChildByName("Line-1");
            line.active = false;
        }
    },
    showListUsers(listUserShow){
        for(let i = 0; i < 6;i++){
            let nodeUser = this.POS.getChildByName("pos_"+i);
            let lb_name = nodeUser.getChildByName("name").getComponent(cc.Label);
            let lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
            let user = (i >= listUserShow.length) ? null : listUserShow[i];
            if(user && (user.getVariable("role").value != "admin")){
                nodeUser.active = true;
                nodeUser._username = user.name;
                lb_name.string = GameVariables.getDisplayName(user);
                lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user));
                if(user.isItMe){
                    Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/"+Config.getDefaultAvatar());
                }else{
                    let rand = (Math.floor(Math.random()* 9) + 1);
                    Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/"+rand);
                }
            }else{
                nodeUser.active = false;
                nodeUser._username = null;
            }
        }
    },
    getPosFromName(username){
        for(let i = 0; i < 6;i++){
            let nodeUser = this.POS.getChildByName("pos_"+i);
            if(nodeUser.active && nodeUser._username && nodeUser._username == username){
                return i;
            }
        }
        return 6 ;
    },
    updateUserCount(){
        let room = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho");
        let count = room.getUserList().length;
        if (count > 1){
            if(cc.isValid(this.lb_countUser))
                this.lb_countUser.string = count;
        }
    },
    showNotice(delay, content, cb) {
        this.Notice.active = true;
        this.Notice.stopAllActions();
        let self = this;
        this.Notice.getChildByName("lb_noti").getComponent(cc.Label).string = content;
        this.Notice.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function () {
            self.Notice.active = false;
            if(cb)
                cb();
        })));
    },
    showToast(delay, content) {
        this.Toast.active = true;
        this.Toast.stopAllActions();
        let self = this;
        this.Toast.getChildByName("lb_noti").getComponent(cc.Label).string = content;
        this.Toast.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function () {
            self.Toast.active = false;
        })));
    },
    ToastDatCua(cb){
        this.isFirst = true;
        this.showNotice(2, "Đặt cửa", cb);
    },
    removeNodePlayer(user){
        for(let i = 0; i < 6;i++){
            let nodeUser = this.POS.getChildByName("pos_"+i);
            if(nodeUser._username == user.name){
                nodeUser.active = false;
            }
        }
    },
    addNodePlayerEnterRoom(user){
        if (user && (user.getVariable("role").value != "admin")){
            for(let i = 1; i < 6;i++){
                let nodeUser = this.POS.getChildByName("pos_"+i);
                let lb_name = nodeUser.getChildByName("name").getComponent(cc.Label);
                let lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
                if(!nodeUser.active){
                    nodeUser.active = true;
                    nodeUser._username = user.name;
                    lb_name.string = GameVariables.getDisplayName(user);
                    lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user));
                    if(user.isItMe){
                        Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/"+Config.getDefaultAvatar());
                    }else{
                        let rand = (Math.floor(Math.random()* 9) + 1);
                        Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/"+rand);
                    }
                    break;
                }
            }
        }
    },
    updateChip(user){
        for(let i = 0; i < 6;i++){
            let nodeUser = this.POS.getChildByName("pos_"+i);
            let lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
            if(nodeUser.active && nodeUser._username && nodeUser._username == user.name){
                lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user));
                return;
            }
        }
    },
    xocxoc(result, winpot, isWin){
        this._runEffectPotWin(winpot, isWin);
        this.Result.active = true;
        this.CardRong.getComponent("Card").reveal(new PokerCard.Card(result[0]));
        this.CardHo.getComponent("Card").reveal(new PokerCard.Card(result[1]));
    },
    _runEffectPotWin(winPot, isWin){
        if(winPot == null)
            return;
        for(let i = 0; i < winPot.length;i++){
            if(winPot[i] >= 0 && winPot[i] <= 6){
                let nodePot = this.listNodePot[winPot[i]];
                let line = nodePot.getChildByName("Line-1");
                line.active = true;
                let animation = line.getComponent(sp.Skeleton);
                animation.setAnimation(1, 'Idle', true);
            }
        }
        if (isWin){
            let posUser       = this.POS.children[0];
            let animationGame = posUser.getChildByName("InGame-Thang-2");
            let textGame      = posUser.getChildByName("thang-text");
            let node_txt_win = posUser.getChildByName("money_win");
            node_txt_win.position = cc.v2(0, 0);
            node_txt_win.getComponent(cc.Label).string = "+"+Utils.addDotToNumber(SmartFoxSDK.RongHoController.m_tableInfo.winChip);
            node_txt_win.active = true;
            animationGame.active = true;
            textGame.active      = true;
            animationGame.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
            let actionScale =   cc.moveTo(1.5, cc.v2(0, 100));
            let scaleCallback =  cc.sequence(
                actionScale,
                cc.delayTime(2.5),
                cc.callFunc(function () {
                    animationGame.active = false;
                    textGame.active      = false;
                    node_txt_win.active = false;
                })
            );
            node_txt_win.runAction(scaleCallback);
        }
        this._isDat = false;
    },
    _turnOnTime(time, isBetting){
        this.Timer.active = true;
        this.CardRong.getComponent("Card").init(null);
        this.CardHo.getComponent("Card").init(null);
        this._stopEffectWinPot();
        let js = this.Timer.getComponent(this.Timer.name);
        js.setTotalProgress(30);
        js.setCurrentProgress(time);
        js.turnOnTimer();
    },
    _turnOffTime(){
        this.Timer.active = false;
    },
    showListMyChipBet(bets){
        if (this._isHaveChipBet(bets)){
            this._myChipBet = bets;
        }else {
            if (!this._isDatLast)
                this._myChipBet = bets;
            if (this._isDatLast)
                this._isDatLast = false;
        }
        for(let i = 0; i < bets.length;i++){
            this.listMyChipBet[i].string = Utils.addDotToNumber(bets[i]);
        }
    },
    showListChipBet(bets){
        for(let i = 0; i < bets.length;i++){
            this.listChipBet[i].string = Utils.addDotToNumber(bets[i]);
        }
    },
    selectBetChip(event, betChip){
        for(let i = 0; i < this.listNodeBet.length;i++){
            this.listNodeBet[i].scale = 1;
            this.listNodeBet[i].getChildByName("label").color = cc.Color.WHITE;
        }
        this._currentBet = betChip;

        event.currentTarget.scale = 1.3;
        event.currentTarget.getChildByName("label").color = cc.Color.YELLOW;
    },
    requestBet(event, type){
        if(!SmartFoxSDK.RongHoController.m_tableInfo.isBetting){
            this.showToast(1, "Đang mở bài không được đặt");
            return;
        }
        type = parseInt(type);

        if (type == 0 || type == 2) {
            if (this._isRongHo >=0 && type !==  this._isRongHo){
                this.showToast(1, "Không được phép đặt nhiều cửa");
                return;
            }
            this._isRongHo     = type;
        }
        this._isDat        = true;
        mm.audio.playDatCua();
        this.sendRequestBet(this._currentBet, type);
    },
    sendRequestBet(bet, type) {
        this._currentType = type;
        this._isDatLast    = true;
        if(this._currentType < 0 || this._currentType >= 7){
            this.showToast(1, "Của đặt không hợp lệ");
        }else if(GameVariables.getChip(SmartFoxSDK.RongHoController.ZoneInstance.mySelf) < bet){
            this.showToast(1, "Không đủ tiền!");
        }else{
            let betRequest = new RongHoRequest.BetRequest();
            betRequest.setBetChip(bet);
            betRequest.setTypePot(this._currentType);
            SmartFoxSDK.RongHoController.ZoneInstance.send(betRequest.toSRequest());
        }
    },
    actionFlyChipToPot(username, potType, money){
        let pos = this.getPosFromName(username);
        let chipName = "chip2";
        if(money >= 1000 && money < 5000){
            chipName = "chip1";
        }else if(money >= 5000 && money < 20000){
            chipName = "chip2";
        }else if(money >= 20000 && money < 50000){
            chipName = "chip3";
        }else if(money >= 100000 && money < 500000){
            chipName = "chip4";
        }else if(money >= 500000){
            chipName = "chip5";
        }
        for(let i = 0;  i < 3; i++){
            let chipNode = this.getChipNode();
            Utils.loadRes(chipNode.getComponent(cc.Sprite),"images/xocdia/"+chipName);
            let nodeAvatar = this.POS.getChildByName("pos_"+pos);
            chipNode.position = nodeAvatar.position;
            let nodeFrom = this.listNodePot[potType];
            let posTo = this.getPositionInOtherNode(nodeFrom, this.node);
            let self = this;
            chipNode.runAction(cc.sequence(cc.delayTime(i*0.06), cc.moveTo(0.2, cc.v2(posTo.x, posTo.y)), cc.callFunc(function () {
                self.returnChipNode(this);
            }, chipNode)));
        }
    },
    clickExitRoom(event){
        let room = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho");
        if(room){
            SmartFoxSDK.RongHoController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
            mm.Loading.show();
        }else{
            UIManger.show("UIHome");
        }
    },
    eventShowMenu() {
        this.ListMenu.active = !this.ListMenu.active;
    },
    eventRank() {
        mm.Loading.show();
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.RongHoController.ZoneInstance.send(request.toSRequest())
    },
    eventHelper() {
        this.show("UIRongHoHelper", {pop: true, src: 'rongho'});
    },
    eventHistory() {
        mm.Loading.show();
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.RongHoController.ZoneInstance.send(request.toSRequest());
    },
    eventGapThep(){
        if (this._isHaveChipBet(this._myChipBet) &&  !this._isDat){
            if(!SmartFoxSDK.RongHoController.m_tableInfo.isBetting){
                this.showToast(1, "Đang trả thưởng, không được cược");
                return;
            }
            this._isDat        = true;
            for (let i=0; i< this._myChipBet.length; i++){
                if (this._myChipBet[i] > 0)
                    this.sendRequestBet(2*this._myChipBet[i], i);
            }
        }
    },
    eventDatLai() {
        if (this._isHaveChipBet(this._myChipBet) &&  !this._isDat){
            if(!SmartFoxSDK.RongHoController.m_tableInfo.isBetting){
                this.showToast(1, "Đang trả thưởng, không được cược");
                return;
            }
            this._isDat        = true;
            for (let i=0; i< this._myChipBet.length; i++){
                if (this._myChipBet[i] > 0)
                    this.sendRequestBet(this._myChipBet[i], i);
            }
        }
    },
    _isHaveChipBet(listChipBet) {
        let haveChip = false;
        for (let i=0; i< listChipBet.length; i++){
            if (listChipBet[i] > 0){
                haveChip = true;
                return haveChip;
            }
        }
        return haveChip;
    },
    eventShowChat(event, data) {
        this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
        if (this.ChatEmojiLayer.active)
            this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.RongHoController.ZoneInstance);
    },
    onPublicMessage(messData){
        let msgItem    = messData.msg;
        let pos        = this.getPosFromName(messData.sender.name);
        let emojiBox   = this.POS.children[pos].getChildByName("EMOJ");
        if (emojiBox != undefined){
            let self    = this;
            let isEmoij = msgItem.indexOf("emoij_") >= 0;
            let emojiNode = emojiBox.getChildByName("EMOJ");
            let boxNode   = emojiBox.getChildByName("box");
            emojiNode.active = false;
            boxNode.active   = false;
            if (isEmoij){
                emojiNode.active   = true;
                emojiNode.opacity  = 255;
                let type = msgItem.replace("emoij_", "");
                emojiNode.stopAllActions();
                emojiNode.getComponent(sp.Skeleton).setAnimation(0, type, false);
                emojiNode.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function () {
                    emojiNode.active = false;
                })));
            }else {
                boxNode.active   = true;
                boxNode.opacity  = 255;
                boxNode.stopAllActions();
                boxNode.getChildByName("lb_chat").getComponent(cc.Label).string = msgItem;
                boxNode.getComponent(cc.Layout).updateLayout();
                boxNode.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function () {
                    boxNode.active = false;
                })));
            }
        }
    },
    updateUserVariable(subChip){
        let nodeUser = this.POS.children[0]
        nodeUser.getChildByName("money").getComponent(cc.Label).string =  Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.RongHoController.ZoneInstance.mySelf)-subChip);
    },
});
