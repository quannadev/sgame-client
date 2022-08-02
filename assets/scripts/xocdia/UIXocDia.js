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
        _currentType : -1,
        _currentBet  : 5000,
        Timer        : cc.Node,
        XocXocBat    : cc.Node,
        openBat      : cc.Node,
        Result       : cc.Node,
        ChipPrefab   : cc.Prefab,
        POS          : cc.Node,
        isNan        : cc.Toggle,
        _currentTime : 0,
        _isOpen      : false,
        _TimeWaitOpenBat : 3,
        _dataCau         : [],
        _myChipBet       : [],
        _isDat           : false,
        _isDatLast       : false,
        lb_countUser: cc.Label,
        Notice: cc.Node,
        ListMenu     : cc.Node,
    },
    onLoad(){
        cc.director.getCollisionManager().enabled = true;
        this._myChipBet     = [];
        this._currentBet    = 5000;
        this._isDat         = false;
        this._isDatLast     = false;
        this.poolChip = [];
        this.isNan.isChecked = false;
        for(let i = 0; i < 20;i++){
            let chip = cc.instantiate(this.ChipPrefab);
            chip.scale = 0.33;
            this.node.addChild(chip);
            chip.active = false;
            this.poolChip.push(chip);
        }
        this.isFirst = true;
        this.openBat.on(cc.Node.EventType.TOUCH_MOVE, function (touch, event) {
            this.openBat.position =  this.openBat.parent.convertToNodeSpaceAR(touch.getLocation());
            this._isOpen          = !cc.Intersection.pointInPolygon(touch.getLocation(), this.XocXocBat.getComponent(cc.BoxCollider).world.points);
            if(this.isFirst && this._isOpen){
                this.isFirst = false;
                this.showNotice(1, "Trả thưởng!");
                this._openBat(SmartFoxSDK.XocDiaController.m_tableInfo.winpot, 0, SmartFoxSDK.XocDiaController.m_tableInfo.isWin);
                this.openBat.stopAllActions();
            }}, this);
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (this.node != null)
                SmartFoxSDK.XocDiaController.resumeGame();
        }.bind(this));
    },
    onEnable(){
        this._dataCau     = [];
        this.Notice.active = false;
        this.Timer.active = false;
        this._stopEffectWinPot();
        this.XocXocBat.active = false;
        this.Result.active    = false;
        this.listMyChipBet = [];
        for(let i = 0; i < this.listNodePot.length;i++){
            this.listMyChipBet.push(this.listNodePot[i].getChildByName("mybet").getComponent(cc.Label));
        }
        this.listChipBet = [];
        for(let i = 0; i < this.listNodePot.length;i++){
            this.listChipBet.push(this.listNodePot[i].getChildByName("pot").getComponent(cc.Label));
        }
        this.updateUserCount();
        this.suggestBetChip();
    },
    suggestBetChip(){
        for(let i = 0; i < this.listNodeBet.length;i++){
            this.listNodeBet[i].scale = 1;
            this.listNodeBet[i].getChildByName("label").color = cc.Color.WHITE;
        }
        let indexSuggest = 0;
        this._currentBet = 5000;
        if(GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 50000000){
            indexSuggest = this.listNodeBet.length -1;
            this._currentBet = 1000000;
        }else if(GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 10000000){
            indexSuggest = this.listNodeBet.length - 2;
            this._currentBet = 500000;
        }else if(GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 5000000){
            indexSuggest = this.listNodeBet.length - 3;
            this._currentBet = 100000;
        }else if(GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 100000){
            indexSuggest = this.listNodeBet.length - 4;
            this._currentBet = 20000;
        }else if(GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 50000){
            indexSuggest = this.listNodeBet.length - 5;
            this._currentBet = 5000;
        }
        if(indexSuggest >= 0 && indexSuggest < this.listNodeBet.length){
            let nodeBet = this.listNodeBet[indexSuggest];
            nodeBet.scale = 1.3;
            nodeBet.getChildByName("label").color = cc.Color.YELLOW;
        }
    },
    renewRound(){
        this.isFirst = true;
        if(SmartFoxSDK.XocDiaController.m_tableInfo.isBetting){
            this.Result.active = false;
            for(let i = 0; i < this.listNodePot.length;i++){
                let nodePot = this.listNodePot[i];
                let line = nodePot.getChildByName("Line-1");
                line.active = false;
            }
        }
    },
    updateUserCount(){
        let room = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia");
        let count = room.getUserList().length;
        if (count > 5){
            this.POS.children[6].active = true;
            if(cc.isValid(this.lb_countUser))
                this.lb_countUser.string = count-5;
        }else {
            this.POS.children[6].active = false;
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
    ToastCanCua(cb, delay){
        let self = this;
        this.showNotice(delay, "Bắt đầu cân cửa!", function () {
            if(SmartFoxSDK.XocDiaController.m_tableInfo.refund > 0){
                self.updateRefundChip(function () {
                    if(cb)
                        cb();
                });
            }else{
                if(cb)
                    cb();
            }
        });
        let lb_tai = this.listChipBet[0].string;
        let lb_xiu = this.listChipBet[1].string;
        let balance = Math.min(parseFloat(lb_tai.split(".").join("")) , parseFloat(lb_xiu.split(".").join("")));
        this.listChipBet[0].string = Utils.addDotToNumber(balance);
        this.listChipBet[1].string = Utils.addDotToNumber(balance);
    },
    ToastDatCua(cb){
        this.isFirst = true;
        this.showNotice(1, "Đặt cửa", cb);
    },
    getChipNode(){
        for(let i = 0; i < this.poolChip.length;i++){
            if(!this.poolChip[i].active){
                this.poolChip[i].active = true;
                return this.poolChip[i];
            }
        }
        let chip = cc.instantiate(this.ChipPrefab);
        chip.scale = 0.33;
        this.node.addChild(chip);
        chip.active = true;
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
    updateUserVariable(subChip){
        this.updateChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf, subChip);
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
    getPosFromName(username){
        for(let i = 0; i < 6;i++){
            let nodeUser = this.POS.getChildByName("pos_"+i);
            if(nodeUser.active && nodeUser._username && nodeUser._username == username){
                return i;
            }
        }
        return 6 ;
    },
    updateChip(user, subChip){
        if(user){
            for(let i = 0; i < 6;i++){
                let nodeUser = this.POS.getChildByName("pos_"+i);
                let lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
                if(nodeUser.active && nodeUser._username && nodeUser._username == user.name){
                    lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user)-subChip);
                    return;
                }
            }
        }
    },
    updateRefundChip(cb){
        if(SmartFoxSDK.XocDiaController.m_tableInfo && SmartFoxSDK.XocDiaController.m_tableInfo.refund){
            let amount = SmartFoxSDK.XocDiaController.m_tableInfo.refund;
            let posUser       = this.POS.children[0];
            let node_txt_win = posUser.getChildByName("money_win");
            node_txt_win.getComponent(cc.Label).string = "+"+Utils.addDotToNumber(amount);
            node_txt_win.active = true;

            // update user chip
            let lb_money = posUser.getChildByName("money").getComponent(cc.Label);
            let currentMoney = lb_money.string.split(".").join("");
            currentMoney = parseFloat(currentMoney) + amount;
            lb_money.string = Utils.addDotToNumber(currentMoney);
            let actionScale =   cc.moveTo(1, cc.v2(0, 100));
            let scaleCallback =  cc.sequence(
                actionScale,
                cc.callFunc(function () {
                    node_txt_win.active = false;
                    if(cb){
                        cb();
                    }
                })
            );
            node_txt_win.stopAllActions();
            node_txt_win.runAction(scaleCallback);
        }else{
            if(cb){
                cb();
            }
        }
    },
    showResult(){
        let result = SmartFoxSDK.XocDiaController.m_tableInfo.result;
        if(!result)
            return;
        this.Result.active  = true;
        let totalBlack = 0;
        for(let i = 0; i < this.Result._children.length;i++){
            let icon = this.Result._children[i];
            if (result[i] == 0){
                Utils.loadRes(icon.getComponent(cc.Sprite),"/images/xocdia/den-result");
                totalBlack++;
            }else{
                Utils.loadRes(icon.getComponent(cc.Sprite),"/images/xocdia/trang-result");
            }
        }
    },
    xocxoc(result, winpot, isWin) {
        let self = this;
        this._stopEffectWinPot();
        this._isOpen          = false;
        this.openBat.active   = false;
        this.XocXocBat.active = true;
        this.showNotice(1, "Mở bát!", function () {
            this.XocXocBat.getComponent(sp.Skeleton).setAnimation(0,'Atack-1', false);
            this.scheduleOnce(function () {
                this.XocXocBat.getComponent(sp.Skeleton).setAnimation(0, 'Atack-3', false);
                this.openBat.active   = true;
                this.openBat.position = cc.v2(0, 0);
                this.openBat.stopAllActions();
                this.showResult();
                if(this.isNan.isChecked){
                    this.openBat.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(function () {
                        self._openBat(winpot, 0, isWin);
                    })));
                }else{
                    this.openBat.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                        self._openBat(winpot, 0, isWin);
                    })));
                }
            }, 1.4)

        }.bind(this));

    },

    resumeXocXoc(result, winpot, time, isWin) {
        let self = this;
        this._isOpen          = false;
        self.openBat.active   = false;
        this.XocXocBat.active = true;
        let animation = this.XocXocBat.getComponent(sp.Skeleton);
        animation.setAnimation(1, "Atack-3",true);
        self.Result.active  = true;
        for(let i = 0; i < self.Result._children.length;i++){
            let icon = self.Result._children[i];
            Utils.loadRes(icon.getComponent(cc.Sprite),"/images/xocdia/"+ (result[i] == 0 ? 'den-result' : 'trang-result'));
        }
        this._openBat(winpot, 0, isWin);
    },
    _openBat(winpot, timeWait, isWin) {
        let self = this;
        this.openBat.position = cc.v2(0, 0);
        this.openBat.active   = true;
        let moveBat = cc.moveTo(1, cc.v2(146, 88)).easing(cc.easeIn(2));
        if (this.isNan.isChecked){
            self._runEffectPotWin(winpot, isWin);
            self.openBat.active   = false;
        }else {
            this.openBat.stopAllActions();
            this.openBat.runAction(cc.sequence(moveBat, cc.callFunc(function () {
                self._runEffectPotWin(winpot, isWin);
                self.openBat.active   = false;
            })));
        }
    },
    _runEffectPotWin(winPot, isWin){
        if(SmartFoxSDK.XocDiaController.m_tableInfo.isBetting)
            return;
        if(!winPot || isWin == undefined){
            return;
        }
        let self = this;
        for(let i = 0; i < winPot.length;i++){
            if(winPot[i] >= 0 && winPot[i] < 6){
                let nodePot = this.listNodePot[winPot[i]];
                let line = nodePot.getChildByName("Line-1");
                line.active = true;
                line.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
            }
        }
        if (isWin){
            let posUser       = this.POS.children[0];
            let animationGame = posUser.getChildByName("InGame-Thang-2");
            let textGame      = posUser.getChildByName("thang-text");
            let node_txt_win = posUser.getChildByName("money_win");
            node_txt_win.position = cc.v2(0, 0);
            node_txt_win.getComponent(cc.Label).string = "+"+Utils.addDotToNumber(SmartFoxSDK.XocDiaController.m_tableInfo.winChip);
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
            this.updateUserVariable(0);
        }
        this._isDat = false;
    },

    _runCountTimer() {
        if (this._currentTime > 0)
            this._currentTime--;
        if (this._currentTime < 6){
            this.Timer.color = cc.Color.RED;
        }else
            this.Timer.color = cc.Color.WHITE;
        if (this._currentTime < 10){
            this.Timer.getComponent(cc.Label).string = "0"+ this._currentTime;
        }else
            this.Timer.getComponent(cc.Label).string = this._currentTime;
    },
    _turnOnTime(time, isBetting){
        this.Timer.active       = true;
        this.XocXocBat.active   = false;
        this.Result.active      = false;
        this._currentTime       = time;
        this._runCountTimer();
        this._stopEffectWinPot();
        this.schedule(this._runCountTimer, 1);
    },
    _turnOffTime(){
        this.Timer.active = false;
        this.unschedule(this._runCountTimer);
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
            this.listMyChipBet[i].string = "(" + Utils.addDotToNumber(bets[i]) + ")";
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
        if (this.XocXocBat.active){
            mm.Toast.showToast(1, "Đang mở bát không được đặt");
            return;
        }
        this._isDat        = true;
        mm.audio.playDatCua();
        this.sendRequestBet(this._currentBet, type);
    },
    sendRequestBet(bet, type) {
        this._isDatLast    = true;
        this._currentType  = type;
        if(this._currentType < 0 || this._currentType >= 6){
            mm.Toast.showToast(1, "Của đặt không hợp lệ");
        }else if(GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) < bet){
            mm.Toast.showToast(1, "Không đủ tiền!");
        }else{
            let betRequest = new XocDiaRequest.BetRequest();
            betRequest.setBetChip(bet);
            betRequest.setTypePot(this._currentType);
            SmartFoxSDK.XocDiaController.ZoneInstance.send(betRequest.toSRequest());
        }
    },
    actionFlyChipToPot(username, potType, money){
        let pos = this.getPosFromName(username);
        let chipName = "chip1";
        if(money > 1000 && money <= 5000){
            chipName = "chip1";
        }else if(money > 5000 && money <= 20000){
            chipName = "chip2";
        }else if(money > 20000 && money <= 100000){
            chipName = "chip3";
        }else if(money > 100000 && money <= 500000){
            chipName = "chip4";
        }else if(money > 500000){
            chipName = "chip5";
        }
        for(let i = 0;  i < 5; i++){
            let chipNode = this.getChipNode();
            Utils.loadRes(chipNode.getComponent(cc.Sprite),"images/xocdia/"+chipName);
            let nodeAvatar = this.POS.getChildByName("pos_"+pos);
            chipNode.position = nodeAvatar.position;
            let nodeFrom = this.listNodePot[potType];
            let posTo = this.getPositionInOtherNode(nodeFrom, this.node);
            let self = this;
            chipNode.runAction(cc.sequence(cc.delayTime(i*0.1), cc.moveTo(0.3, cc.v2(posTo.x, posTo.y)).easing(cc.easeOut(3)), cc.callFunc(function () {
                self.returnChipNode(this);
            }, chipNode)));
        }
    },
    clickExitRoom(event){
        let room = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia");
        if(room){
            SmartFoxSDK.XocDiaController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
            mm.Loading.show();
        }else{
            UIManger.show("UIHome");
        }
    },
    eventSoiCau() {
        mm.audio.playButton();
        mm.Loading.show();
        let historyRequest = new XocDiaRequest.HistoryResultRequest();
        SmartFoxSDK.XocDiaController.ZoneInstance.send(historyRequest.toSRequest());
    },
    showSoiCau(dataCau) {
        this._dataCau = dataCau;
        console.log(dataCau);
        this.show("UIXocDiaSoiCau", {pop: true, src: 'xocdia', data: dataCau});
    },
    eventGapThep(){
        mm.audio.playButton();
        if (this._isHaveChipBet(this._myChipBet) &&  !this._isDat){
            if (this.XocXocBat.active){
                mm.Toast.showToast(1, "Đang mở bát không được đặt");
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
        mm.audio.playButton();
        if (this._isHaveChipBet(this._myChipBet) &&  !this._isDat){
            if (this.XocXocBat.active){
                mm.Toast.showToast(1, "Đang mở bát không được đặt");
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
    eventNan() {
        mm.audio.playButton();
    },
    eventShowMenu() {
        mm.audio.playButton();
        this.ListMenu.active = !this.ListMenu.active;
    },
    eventRank() {
        mm.audio.playButton();
        mm.Loading.show();
        this.ListMenu.active = false;
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.XocDiaController.ZoneInstance.send(request.toSRequest())
    },
    eventHelper() {
        mm.audio.playButton();
        this.ListMenu.active = false;
        this.show("UIXocDiaHelper", {pop: true, src: 'xocdia'});
    },
    eventHistory() {
        mm.audio.playButton();
        mm.Loading.show();
        this.ListMenu.active = false;
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.XocDiaController.ZoneInstance.send(request.toSRequest());
    },
    eventShowChat(event, data) {
        mm.audio.playButton();
        this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
        if (this.ChatEmojiLayer.active)
            this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.XocDiaController.ZoneInstance);
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
});
