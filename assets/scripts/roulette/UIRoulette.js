const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        ChatEmojiLayer: cc.Node,
        lbSession   : cc.Label,
        lbRoom      : cc.Label,
        lbTotalBet  : cc.Label,
        listNodeBet : cc.Node,
        listPosBet  : cc.Node,
        rouletteXoay  : cc.Node,
        Timer       : cc.Node,
        Ball        : cc.Node,
        canXoay        : cc.Node,
        boarXoay        : cc.Node,
        menu        : cc.Node,
        soiCau        : cc.Node,
        listviewCau        : Listview,
        _currentType         : -1,
        _currentBet          : 1000,
        ChipPrefab           : cc.Prefab,
        PlayerPos            : cc.Node,
        Noti                 : cc.Node,
        listCauTop           : cc.Node,
        fontWin              : cc.Font,
        fontLose             : cc.Font,
        _currentTime : 0,
        _dataCau     : [],
        _isDat       : false,
        _lastBet     : null,
        _currentPercent     : 0,
        _resultPos     : 0,
        _totalBet      : 0,
        _listChipBet   : [],
        _listTypeBet   : [],
        listDataCau   : [],
        _ListRed   : [],
        _isShowCau   : false,
    },
    onLoad(){
        cc.director.getCollisionManager().enabled = true;
        let self = this;
        this._listTypeBet     = [];
        this._listChipBet     = [];
        this.ListChipImg    = {
            "1000"       : "1k",
            "5000"       : "5k",
            "10000"      : "10k",
            "500000"     : "500k",
            "1000000"    : "1m",
            "5000000"    : "5m"
        };
        this._currentBet    = 1000;
        this._lastBet       = this.listNodeBet.children[0];
        this.listNodePot    = this.listPosBet.children;
        this._isDat         = false;
        this.poolChip = [];
        for(let i = 0; i < 20;i++){
            let chip = cc.instantiate(this.ChipPrefab);
            chip.scale = 0.33;
            this.node.addChild(chip);
            chip.active = false;
            this.poolChip.push(chip);
        }
        this.listMyChipBet = [];
        this._ListRed   = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

    },
    onDisable() {
        cc.director.getCollisionManager().enabled = false;
    },
    onEnable(){
        cc.director.getCollisionManager().enabled = true;
        this._dataCau            = [];
        this._currentPercent     = 0;
        this.hideAll();
        this.Ball.getComponent("Ball").addEventOnCollisionEnter(function (tag) {
            if (tag == this._resultPos){
                this.rouletteXoay.stopAllActions();
                this.canXoay.stopAllActions();
                this.Ball.stopAllActions();
                this.scheduleOnce(this.showResultWin, 2);
            }
        }.bind(this))
        this._isShowCau   = false;
        this.sendRequestSoiCau();
    },
    eventBet(event, data){
        mm.audio.playButton();
        if (!SmartFoxSDK.RouletteController.m_tableInfo.isBetting){
            this.showNoti("Không được cược!");
            return;
        }
        if (!this._isDat){
            this._listTypeBet = [];
            this._listChipBet = [];
        }
        this._isDat        = true;
        mm.audio.playDatCua();
        this.sendRequestBet(this._currentBet, data);
    },
    hideAll() {
        this._isDat               = false;
        this.Noti.active          = false;
        this.Timer.active         = false;
        this.rouletteXoay.stopAllActions();
        this.canXoay.stopAllActions();
        this.Ball.stopAllActions();
        this.boarXoay.stopAllActions();
        this.updateTotalBet(0);
        this.rouletteXoay.active  = false;
        Promise.all(this.listNodePot.map(function(nodeBet, index){
            nodeBet.getChildByName("bg_win").active = false;
        }));
        Promise.all(this.poolChip.map(function(chip, index){
            if (chip.active){
                chip.removeFromParent(true);
                chip.active = false;
            }
        }));
    },
    runActionChangeMoney(username, money, speed) {
        let fontTxt = money > 0? this.fontWin: this.fontLose;
        let pos        = this.getPosFromName(username);
        let nodeAvatar = this.PlayerPos.getChildByName("pos_"+pos);
        if (nodeAvatar){
            let moneyWin   = nodeAvatar.getChildByName("money_win").getComponent(cc.Label);
            if (moneyWin.node.active){
                money += this.getMoneyFromString(moneyWin.string);
            }
            if (money == 0)
                return ;
            moneyWin.node.active = true;
            moneyWin.node.stopAllActions();
            moneyWin.node.position = cc.v2(0, 20);
            moneyWin.font        = fontTxt;
            moneyWin.string      = money > 0? "+"+Utils.addDotToNumber(money): Utils.addDotToNumber(money);
            let nodeTo           = cc.v2(0, 120);
            if (pos > 6)
                nodeTo           = cc.v2(0, 50);
            moneyWin.node.runAction(cc.sequence(cc.moveTo(0.5*speed, nodeTo).easing(cc.easeOut(0.5)), cc.delayTime(1.5*speed), cc.callFunc(function () {
                moneyWin.string      = 0;
                moneyWin.node.active = false;
            })));
            this.updateMoney(money, nodeAvatar);
        }
    },
    getMoneyFromString(moneyString) {
        moneyString = moneyString.replace("+", "");
        // moneyString = moneyString.replace("-", "");
        moneyString = moneyString.split(".").join("");
       return parseFloat(moneyString)
    },
    showResult(result) {
        if (this._dataCau.length > this.listCauTop.length){
            this._dataCau.shift();
        }
        this._dataCau.push(result);
        this.runActionRotationBall(result);
    },
    getNumberCardFromChip(money) {
        let number5m    =  Math.floor(money/5000000);
        money           = money - number5m*5000000;
        let number1m    =  Math.floor(money/1000000);
        money           = money - number1m*1000000;
        let number500k  =  Math.floor(money/500000);
        money           = money - number500k*500000;
        let number10k   =  Math.floor(money/10000);
        money           = money - number10k*10000;
        let number5k   =  Math.floor(money/5000);
        money           = money - number5k*5000;
        let number1k    =  Math.floor(money/1000);
        return [number1k, number5k, number10k, number500k, number1m, number5m];
    },
    addChipToPot(listTypePotBet, listMyChipPot) {
        for (let i=0; i< listTypePotBet.length; i++){
            this.actionFlyChipToPot(SmartFoxSDK.RouletteController.ZoneInstance.mySelf, listTypePotBet[i], listMyChipPot[i]);
        }
    },
    resumeGame(winPot, time, usersOnboard, chipUserOnBoard, result, winChip) {
        if (this._dataCau.length > this.listCauTop.length){
            this._dataCau.shift();
        }
        this._dataCau.push(result);
        if (time <= 10)
            this.showResultWin();
        else
            this.showResult(result);
    },
    getChipNode(){
        for(let i = 0; i < this.poolChip.length;i++){
            if(!this.poolChip[i].active){
                this.poolChip[i].active = true;
                this.poolChip[i].position = cc.v2(0,0);
                this.poolChip[i].parent = this.node
                return this.poolChip[i];
            }
        }
        let chip = cc.instantiate(this.ChipPrefab);
        this.node.addChild(chip);
        chip.scale = 0.33;
        chip.active = true;
        this.poolChip.push(chip);
        return chip;
    },
    returnChipNode(chipNode){
        chipNode.active = false;
    },
    showListUsers(listUserShow){
        for(let i = 0; i < this.PlayerPos.childrenCount-1;i++){
            let nodeUser    = this.PlayerPos.getChildByName("pos_"+i);
            let userFrame   = nodeUser.getChildByName("user_frame");
            let lb_name     = userFrame.getChildByName("name").getComponent(cc.Label);
            let user = (i >= listUserShow.length) ? null : listUserShow[i];
            if(user && (user.getVariable("role").value != "admin")){
                nodeUser.active = true;
                nodeUser._username = user.name;
                lb_name.string = GameVariables.getDisplayName(user);
                this.updateMoney(GameVariables.getChip(user), nodeUser);
            }else{
                nodeUser.active = false;
                nodeUser._username = null;
            }
        }
    },
    getPosFromName(username){
        for(let i = 0; i < this.PlayerPos.childrenCount-1;i++){
            let nodeUser = this.PlayerPos.getChildByName("pos_"+i);
            if(nodeUser.active && nodeUser._username && nodeUser._username == username){
                return i;
            }
        }
        return this.PlayerPos.childrenCount-1 ;
    },
    updateChip(user){
        for(let i = 0; i < this.PlayerPos.childrenCount-1;i++){
            let nodeUser = this.PlayerPos.getChildByName("pos_"+i);
            if(nodeUser.active && nodeUser._username && nodeUser._username == user.name){
                this.updateMoney(GameVariables.getChip(user), nodeUser)
                return;
            }
        }
    },
    updateListChipBet(typePot, betChip) {
        this._listTypeBet.push(typePot);
        this._listChipBet.push(betChip);
    },
    selectBetChip(event, betChip){
        mm.audio.playButton();
        this._lastBet.getChildByName("bg_select").active = false;
        event.currentTarget.getChildByName("bg_select").active = true;
        this._lastBet    = event.currentTarget;
        this._currentBet = parseInt(betChip);
    },
    updateTotalBet(totalBet){
        this.lbTotalBet.string = Utils.addDotToNumber(Math.abs(totalBet));
    },
    sendRequestBet(bet, type) {
        this._currentType  = type;
        if(this._currentType < 0 || this._currentType > 48){
            this.showNoti("Chọn lại giá trị cược");
        }else if(GameVariables.getChip(SmartFoxSDK.RouletteController.ZoneInstance.mySelf) < bet){
            this.showNoti("Không đủ tiền cược!");
        }else{
            let betRequest = new RouletteRequest.BetRequest();
            betRequest.setBetChip(bet);
            betRequest.setTypePot(this._currentType);
            SmartFoxSDK.RouletteController.ZoneInstance.send(betRequest.toSRequest());
        }
    },
    actionFlyChipToPot(username, potType, money){
        if (this.ListChipImg.hasOwnProperty(money)){
            this.actionFlyOneChipToPot(username, potType, money);
        }else {
            this.actionFlyMutiChipToPot(username, potType, money);
        }
    },
    runActionToGirl(cb) {
        let totalActive = 0;
        for (let i=0; i< this.poolChip.length; i++){
            if (this.poolChip[i].active)
                totalActive++;
        }
        let count = 0;
        for (let i=0; i< this.poolChip.length; i++){
            let chipNode = null;
            if (this.poolChip[i].active){
                count ++;
                chipNode = this.poolChip[i];
                let posTo = this.getPositionInOtherNode(chipNode, this.node);
                chipNode.parent   = this.node;
                chipNode.position = posTo;
                let positionGirl = cc.v2(Math.random()*50-25, Math.random()*50-25);
                chipNode.runAction(cc.sequence(cc.moveTo(1, positionGirl), cc.delayTime(0.05*i), cc.callFunc(function () {
                    chipNode.stopAllActions();
                    chipNode.active = false;
                    chipNode.removeFromParent(true);
                    if (count >= totalActive){
                        count = -1;
                        if (cb)
                            cb();
                    }
                })));
            }
        }
    },
    actionFlyOneChipToPot(username, potType, money){
        let pos = this.getPosFromName(username);
        let chipName = "1k";
        if (this.ListChipImg.hasOwnProperty(money)){
            chipName = this.ListChipImg[money];
            let chipNode = this.getChipNode();
            Utils.loadRes(chipNode.getComponent(cc.Sprite),"roulette/phinh/"+chipName);
            let nodeAvatar = this.PlayerPos.getChildByName("pos_"+pos);
            chipNode.position = nodeAvatar.position;
            let nodeFrom = this.getPosBet(potType);
            let posTo = this.getPositionInOtherNode(nodeFrom, this.node);
            chipNode.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(posTo.x, posTo.y)).easing(cc.easeOut(1)), cc.callFunc(function () {
                chipNode.position   = cc.v2(Math.random()*nodeFrom.width-nodeFrom.width/2,Math.random()*nodeFrom.height-nodeFrom.height/2);
                chipNode.parent     = nodeFrom;
            })));
        }
    },
    actionFlyMutiChipToPot(username, potType, money){
        let self = this;
        let listCard = this.getNumberCardFromChip(money);
        let allKey   = Object.keys(this.ListChipImg);
        Promise.all(allKey.map(function(key, index){
            if (listCard[index] > 0){
                let chip = parseInt(key);
                for (let i=0; i< listCard[index]; i++){
                    self.actionFlyOneChipToPot(username, potType, chip);
                }
            }
        }))
    },
    actionFlyChipToPlayer(username, money, speed){
        let self = this;
        let listCard = this.getNumberCardFromChip(money);
        let allKey = Object.keys(this.ListChipImg);
        let pos        = self.getPosFromName(username);
        let nodeAvatar = self.PlayerPos.getChildByName("pos_"+pos);
        let positionTo = nodeAvatar.position;
        let total = 0;
        let allChipNode = [];
        Promise.all(allKey.map(function(key, index){
            if (listCard[index] > 0){
                let chip = parseInt(key);
                for (let i=0; i< listCard[index]; i++){
                    let chipName = "1k";
                    if (self.ListChipImg.hasOwnProperty(chip))
                        chipName = self.ListChipImg[key]
                    let chipNode = self.getChipNode();
                    Utils.loadRes(chipNode.getComponent(cc.Sprite),"roulette/phinh/"+chipName);
                    chipNode.position = cc.v2(Math.random()*50-20, Math.random()*10-10);
                    allChipNode.push(chipNode);
                }
            }
        })).then(result => {
            Promise.all(allChipNode.map(function(chipNode, index){
                if (chipNode != null){
                    total ++;
                    chipNode.runAction(cc.sequence(cc.delayTime(total*0.1*speed), cc.moveTo(1*speed, positionTo).easing(cc.easeOut(1)), cc.callFunc(function () {
                        chipNode.removeFromParent(true);
                        chipNode.active = false;
                    })));
                }
            })).then(result => {
                self.runActionChangeMoney(username, money, speed);
            })
        });
    },
    getPosBet(potType) {
        let betNode = this.listNodePot[potType].getChildByName("nodeBet");
        if (betNode.childrenCount > 30){
            let card = betNode.children[0];
            card.removeFromParent(true);
            card.active = false;
        }
        if (!betNode.active)
            betNode.active = true;
        return betNode;
    },
    clickExitRoom(event){
        mm.audio.playButton();
        let room = SmartFoxSDK.RouletteController.ZoneInstance.getRoomByName("roulette");
        if(room){
            SmartFoxSDK.RouletteController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
            mm.Loading.show();
        }else{
            UIManger.show("UIHome");
        }
    },
    eventHelper() {
        mm.audio.playButton();
        this.show("UIRouletteHelper", {pop: true, src: 'roulette'});
    },
    eventSoiCau() {
        mm.audio.playButton();
        this._isShowCau = true;
        if (this.soiCau.active)
            this.soiCau.active = false;
        else {
            if (this._dataCau.length < 1){
                mm.Loading.show();
                this.sendRequestSoiCau();
            }else {
                this.showSoiCau(this._dataCau);
            }
        }
    },
    sendRequestSoiCau() {
        let historyRequest = new RouletteRequest.HistoryRequest();
        SmartFoxSDK.RouletteController.ZoneInstance.send(historyRequest.toSRequest());
    },
    showSoiCau(dataCau) {
        mm.Loading.hide();
        this._dataCau = dataCau;
        if (this._isShowCau || this.soiCau.active){
            this._reformatDataCau();
            this.soiCau.active = true;
            this.listviewCau.numItems = this.listDataCau.length;
            this.listviewCau.node.getComponent(cc.ScrollView).scrollToRight(1);
        }
        this.updateListCauTop();
        this._isShowCau = false;
    },
    eventGapThep(){
        mm.audio.playButton();
        if (this._listTypeBet.length > 0 &&  !this._isDat){
            this._isDat        = true;
            for (let i=0; i< this._listTypeBet.length; i++){
                this.sendRequestBet(2*this._listChipBet[i], this._listTypeBet[i]);
            }
            this._listChipBet  = [];
            this._listTypeBet  = [];
        }else{
            this.showNoti("No data!");
        }
    },
    eventDatLai() {
        mm.audio.playButton();
        if (this._listTypeBet.length > 0 &&  !this._isDat){
            this._isDat        = true;
            for (let i=0; i< this._listTypeBet.length; i++){
                this.sendRequestBet(this._listChipBet[i], this._listTypeBet[i]);
            }
            this._listChipBet  = [];
            this._listTypeBet  = [];
        }else{
            this.showNoti("Không có dữ liệu cược!");
        }
    },
    showNoti(message) {
        this.Noti.active = true;
        this.Noti.getChildByName("lb_noti_content").getComponent(cc.Label).string = message;
        this.scheduleOnce(function () {
            this.Noti.active = false;
        }, 1.5)
    },
    onListRender(item, idx) {
        let cau = this.listDataCau[idx];
        item.getComponent(item.name).init(cau);
    },
    showResultWin() {
        let self = this;
        this.showSoiCau(this._dataCau);
        this.rouletteXoay.active = false;
        let winPot          = SmartFoxSDK.RouletteController.m_tableInfo.winpot;
        let usersOnboard    = SmartFoxSDK.RouletteController.m_tableInfo.usersOnboard;
        let chipUserOnBoard = SmartFoxSDK.RouletteController.m_tableInfo.chipUserOnBoard;
        if (winPot != undefined){
            let speed  = 1;
            let isRun = true;
            for (let i=0; i< winPot.length; i++){
                let pos = winPot[i];
                let blink    = cc.blink(2*speed, 8);
                let bgWin    = this.listNodePot[pos].getChildByName("bg_win");
                bgWin.active = true;
                bgWin.runAction(cc.sequence(blink, cc.delayTime(speed), cc.callFunc(function () {
                    if (isRun){
                        isRun = false;
                        self.runActionToGirl(function () {
                            if (chipUserOnBoard.length > 0){
                                Promise.all(usersOnboard.map(function(username, index){
                                    self.actionFlyChipToPlayer(username, chipUserOnBoard[index], speed);
                                }));
                            }
                        });
                    }
                })));
            }
        }
    },
    runActionRotationBall(pos) {
        let self                 = this;
        this._resultPos          = pos;
        this.rouletteXoay.active = true;
        this.rouletteXoay.scale  = 0;
        this.boarXoay.stopAllActions();
        this.canXoay.stopAllActions();
        this.Ball.stopAllActions();
        let scaleTo  = cc.scaleTo(0.3, 1);
        this.rouletteXoay.runAction(cc.sequence(scaleTo, cc.delayTime(0.2), cc.callFunc(function () {
            let pos1     = cc.v2(376, 0);
            let pos2     = cc.v2(324, 0);
            let pos3     = cc.v2(212, 0);
            let moveTo2  = cc.moveTo(1, pos2);
            let moveTo3  = cc.moveTo(1, pos3);
            let actionBy = cc.rotateBy(4, 360);
            let action1 = cc.rotateBy(1, -360);
            let action2 = cc.rotateBy(1.5, -360);
            let action3 = cc.rotateBy(2, -360);
            let jumpUp  = cc.jumpBy(0.5, cc.v2(0, 0), 20, 5);
            self.boarXoay.runAction(actionBy.repeatForever());
            self.Ball.position = pos1;
            self.canXoay.runAction(cc.sequence(action1.repeat(3), cc.callFunc(function () {
                self.Ball.runAction(moveTo2);
                self.canXoay.runAction(cc.sequence(action2.repeat(0.05), cc.callFunc(function () {
                    self.Ball.runAction(cc.sequence(moveTo3, cc.delayTime(0.5), jumpUp));
                    self.canXoay.runAction(action3.repeat(2));
                })));
            })));
        })));
    },
    eventOpenMenu() {
        mm.audio.playButton();
        this.menu.active = !this.menu.active;
    },
    updateListCauTop() {
        let self = this;
        let start = 0;
        let cauLength = this._dataCau.length;
        if (this._dataCau.length <= this.listCauTop.childrenCount)
            start = 0;
        else
            start = this._dataCau.length - this.listCauTop.childrenCount;
        Promise.all(this.listCauTop.children.map(function(cauNode, index){
            cauNode.active = false;
            if (index < cauLength){
                cauNode.active = true;

                cauNode.getComponent(cc.Label).string = self._dataCau[start+index];
                cauNode.color = self._ListRed.indexOf(self._dataCau[start+index]) > 0 ? cc.Color.RED : cc.Color.BLACK;
            }
        }));
    },
    _reformatDataCau() {
        this.MaxRow  = 4;
        this.listDataCau = [];
        let maxCat = Math.ceil(this._dataCau.length / this.MaxRow);
        for (let j=0; j< maxCat ; j++){
            this.listDataCau.push(this._dataCau.slice(j*this.MaxRow, (j+1)*this.MaxRow));
        }
    },
    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        let list = item.listItem._list;
        let str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;
        if (list.selectedMode == 2) { //Nếu nó là chế độ đa lựa chọn
            str += '，Giá trị hiện tại：' + val;
        }
        console.log(str);
    },
    eventRank() {
        mm.audio.playButton();
        mm.Loading.show();
        this.menu.active = false;
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.RouletteController.ZoneInstance.send(request.toSRequest())
    },
    eventHistory() {
        mm.audio.playButton();
        mm.Loading.show();
        this.menu.active = false;
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.RouletteController.ZoneInstance.send(request.toSRequest());
    },
    _turnOnTime(time, maxTime){
        this.Timer.active       = true;
        this.Timer.getComponent("TimeSubRoulette").setTotalProgress(maxTime);
        this.Timer.getComponent("TimeSubRoulette").setTotalRemain(time);
        this.Timer.getComponent("TimeSubRoulette").turnOnTimer();
        this._currentTime       = time;
    },
    _turnOffTime(){
        this.Timer.getComponent("TimeSubRoulette").turnOffTimer();
        this.Timer.active = false;
    },
    eventShowChat(event, data) {
        mm.audio.playButton();
        this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
        if (this.ChatEmojiLayer.active)
            this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.RouletteController.ZoneInstance);
    },
    onPublicMessage(messData){
        let msgItem    = messData.msg;
        let pos        = this.getPosFromName(messData.sender.name);
        let emojiBox   = this.PlayerPos.children[pos].getChildByName("EMOJ");
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
        this.updateMoney(GameVariables.Poker.getChip(SmartFoxSDK.RouletteController.ZoneInstance.mySelf)-subChip, this.PlayerPos.children[0]);
    },
    updateMoney(money, nodePlayer) {
        nodePlayer.getChildByName("user_frame").getChildByName("money").getComponent(cc.Label).string =  Utils.formatCurrency(money);
    }
});
