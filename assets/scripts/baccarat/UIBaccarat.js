let BaccaratCard = require('BaccaratCard');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        ChatEmojiLayer: cc.Node,
        listCau     : cc.Node,
        threeCau    : cc.Node,
        lbSession   : cc.Label,
        listNodeBet : cc.Node,
        scrollBet   : cc.ScrollView,
        bgThreeCau : {
            type: cc.SpriteFrame,
            default: []
        },
        bgListCau : {
            type: cc.SpriteFrame,
            default: []
        },
        listNodePot : {
            type: cc.Node,
            default: []
        },
        _currentType         : -1,
        _currentBet          : 1000,
        menuNode             : cc.Node,
        Timer                : cc.Node,
        ChipPrefab           : cc.Prefab,
        baccaratPrefab       : cc.Prefab,
        PlayerPos            : cc.Node,
        Noti                 : cc.Node,
        playerCard1          : cc.Node,
        playerCard2          : cc.Node,
        playerCard3          : cc.Node,
        playerCardUp         : cc.Node,
        playerBgPoint        : cc.Node,
        playerPoint          : cc.Label,

        bankerCard1          : cc.Node,
        bankerCard2          : cc.Node,
        bankerCard3          : cc.Node,
        bankerCardUp         : cc.Node,
        bankerBgPoint        : cc.Node,
        bankerPoint          : cc.Label,
        winNode              : cc.Node,
        playerNode           : cc.Node,
        bankerNode           : cc.Node,
        girl                 : cc.Node,
        ListPosInGirl        : cc.Node,
        fontWin              : cc.Font,
        fontLose             : cc.Font,
        _currentTime : 0,
        _dataCau     : [],
        _myChipBet   : [],
        _poolChip    : [],
        _poolCau     : [],
        _isDat       : false,
        _isDatLast   : false,
        _lastBet     : null,
        _currentPercent     : 0,
    },
    onLoad(){
        cc.director.getCollisionManager().enabled = true;
        let self = this;
        this._myChipBet     = [];
        this.ListChipImg    = {
            "1000"      : "ic_chip1_small",
            "2000"      : "ic_chip2_small",
            "5000"      : "ic_chip3_small",
            "10000"     : "ic_chip4_small",
            "50000"     : "ic_chip5_small",
            "100000"    : "ic_chip6_small",
            "500000"    : "ic_chip7_small",
            "1000000"   : "ic_chip8_small",
            "10000000"  : "ic_chip9_small"
        };
        this._currentBet    = 1000;
        this._lastBet       = this.listNodeBet.children[0];
        this._isDat         = false;
        this._isDatLast     = false;
        this.poolChip = [];
        for(let i = 0; i < 20;i++){
            let chip = cc.instantiate(this.ChipPrefab);
            this.node.addChild(chip);
            chip.active = false;
            this.poolChip.push(chip);
        }
        this.listMyChipBet = [];
        this.listChipBet   = [];
        Promise.all(this.listNodePot.map(function(nodeBet, index){
            self.listMyChipBet.push(nodeBet.getChildByName("bg_cuoc_ca_nhan").getChildByName("mybet").getComponent(cc.Label));
            self.listChipBet.push(nodeBet.getChildByName("bg_tongcuoc").getChildByName("pot").getComponent(cc.Label));
            nodeBet.on(cc.Node.EventType.TOUCH_END, function (event) {
                let polygonCollider = nodeBet.getComponent(cc.PolygonCollider);
                if (cc.Intersection.pointInPolygon(event.getLocation(), polygonCollider.world.points)) {
                    if (!SmartFoxSDK.BaccaratController.m_tableInfo.isBetting){
                        mm.Toast.showToast(1, "Không được cược");
                        return;
                    }
                    self._isDat        = true;
                    mm.audio.playDatCua();
                    self.sendRequestBet(self._currentBet, index);
                }
            });
        }));
    },
    onEnable(){
        this._dataCau            = [];
        this._currentPercent     = 0;
        this.hideAll();
        this._stopEffectWinPot();
    },
    hideAll() {
        this.Timer.active = false;
        this.Noti.active  = false;
        Promise.all(this.listNodePot.map(function(nodeBet, index){
            Promise.all(nodeBet.children.map(function(subBet, index){
                subBet.active = false;
            }));
        }));
        this.playerCard1.active     = false;
        this.playerCard2.active     = false;
        this.playerCard3.active     = false;
        this.playerCardUp.active    = false;
        this.playerBgPoint.active   = false;
        this.bankerCard1.active     = false;
        this.bankerCard2.active     = false;
        this.bankerCard3.active     = false;
        this.bankerCardUp.active    = false;
        this.bankerPoint.active     = false;
        this.bankerBgPoint.active   = false;
        this.winNode.active         = false;
        this.menuNode.active        = false;
    },
    runActionChangeMoney(username, money, speed) {
        this.updateUserVariable(0);
        if (money > 0) {
            mm.audio.playWin();
        }
        if (Math.abs(money) > 0){
            let fontTxt = money > 0? this.fontWin: this.fontLose;
            let pos        = this.getPosFromName(username);
            let nodeAvatar = this.PlayerPos.getChildByName("pos_"+pos);
            let moneyWin   = nodeAvatar.getChildByName("money_win").getComponent(cc.Label);
            moneyWin.node.stopAllActions();
            moneyWin.node.active = true;
            moneyWin.node.stopAllActions();
            moneyWin.node.position = cc.v2(0, 20);
            moneyWin.font        = fontTxt;
            moneyWin.string      = money > 0? "+"+Utils.addDotToNumber(Math.abs(money)): "-"+Utils.addDotToNumber(Math.abs(money));
            let nodeTo           = cc.v2(0, 120);
            if (pos > 6)
                nodeTo           = cc.v2(0, 50);
            moneyWin.node.runAction(cc.sequence(cc.moveTo(0.5*speed, nodeTo).easing(cc.easeOut(0.5)), cc.delayTime(2*speed), cc.callFunc(function () {
                moneyWin.node.active = false;
            })));
        }
    },
    runEffectGirl(effectName) {
        this._isDat = false;
        this.girl.getComponent(sp.Skeleton).setAnimation(0, effectName, false);
    },
    showResult(cardPlayer, cardBanker, winpot, chipUserOnBoard, usersOnboard, speed) {
        let self = this;
        this.runEffectGirl("2");
        this.playerCardUp.active    = true;
        this.bankerCardUp.active    = true;

        this.bankerCardUp.position  = cc.v2(-34, -46);
        this.bankerCardUp.angle     = 0;
        this.bankerCardUp.opacity   = 255;
        this.bankerCardUp.stopAllActions();

        this.playerCardUp.position  = cc.v2(34, -46);
        this.playerCardUp.angle     = 0;
        this.playerCardUp.opacity   = 255;
        this.playerCardUp.stopAllActions();
        let listCardPlayer = [];
        let listCardBanker = [];

        for (let i=0; i< cardPlayer.length; i++){
            listCardPlayer.push(new BaccaratCard.Card(cardPlayer[i]));
        }
        for (let i=0; i< cardBanker.length; i++){
            listCardBanker.push(new BaccaratCard.Card(cardBanker[i]));
        }
        this.playerPoint.string = (listCardPlayer[0].pointNumber + listCardPlayer[1].pointNumber)%10;
        this.bankerPoint.string = (listCardBanker[0].pointNumber + listCardBanker[1].pointNumber)%10;

        this.playerCard2.getComponent("ItemCard").init(listCardPlayer[1]);
        this.bankerCard2.getComponent("ItemCard").init(listCardBanker[1]);

        this.playerCard1.getComponent("ItemCard").reveal(listCardPlayer[0], true);
        this.bankerCard1.getComponent("ItemCard").reveal(listCardBanker[0], true, function (){
            self.runActionOpenCard(self.playerCardUp, speed, function () {
                self.runActionShowPoint(self.playerBgPoint, speed, function () {
                    self.runActionOpenCard(self.bankerCardUp, speed, function () {
                        self.runActionShowPoint(self.bankerBgPoint, speed, function () {
                            //show win
                            if (cardPlayer.length > 2 || cardBanker.length > 2){
                                if (cardPlayer.length == 3){
                                    self.playerCard3.getComponent("ItemCard").reveal(listCardPlayer[2], false, function (){
                                        self.playerPoint.string = (listCardPlayer[0].pointNumber + listCardPlayer[1].pointNumber+listCardPlayer[2].pointNumber)%10;
                                        self.showWin(winpot, chipUserOnBoard, usersOnboard, speed);
                                    });
                                }
                                if (cardBanker.length == 3){
                                    self.bankerCard3.getComponent("ItemCard").reveal(listCardBanker[2], false, function (){
                                        self.bankerPoint.string = (listCardBanker[0].pointNumber + listCardBanker[1].pointNumber+listCardBanker[2].pointNumber)%10;
                                        self.showWin(winpot, chipUserOnBoard, usersOnboard, speed);
                                    });
                                }
                            }else {
                                self.showWin(winpot, chipUserOnBoard, usersOnboard, speed);
                            }

                        });
                    });
                });
            });
        });
    },
    showEffectWinLose(pos){
        this.winNode.active = true;
        let posNode = this.playerNode.position;
        let effectname = "hoa";
        if (pos == 0 || pos ==3){
            effectname = "thangcon_1";
            posNode = this.playerNode.position;
        }else if (pos == 1 || pos ==4){
            effectname = "thangcai_1";
            posNode = this.bankerNode.position;
        }else{
            posNode = cc.v2(0,  this.bankerNode.y);
            effectname = "hoa_1";
        }
        this.winNode.position = posNode;
        this.winNode.getComponent(sp.Skeleton).setAnimation(0, effectname, false);
    },
    runActionOpenCard(nodeCard, speed, cb) {
        let rotate1 = cc.rotateTo(0.5*speed, 6);
        let rotate2 = cc.rotateTo(1*speed, -6);
        let rotate3 = cc.rotateTo(0.5*speed, 0);
        let fadeIn = cc.fadeOut(1.5*speed);
        let moveEnd = cc.moveBy(1.5*speed, cc.v2(nodeCard.x+50, nodeCard.y-50));
        nodeCard.runAction(cc.sequence(rotate1, rotate2, rotate3, cc.spawn(fadeIn, moveEnd), cc.callFunc(function () {
            if (cb)
                cb();
        })));
    },
    runActionShowPoint(nodePoint, speed, cb) {
        if (!nodePoint.active)
            nodePoint.active = true;
        nodePoint.stopAllActions();
        nodePoint.scaleY = 0;
        let scale = cc.scaleTo(0.2*speed, 1, 1);
        nodePoint.runAction(cc.sequence(scale, cc.callFunc(function () {
            if (cb)
                cb();
        })));
    },
    showWin(winPot, chipUserOnBoard, usersOnboard, speed) {
        let self = this;
        for (let i=0; i< winPot.length; i++){
            let pos = winPot[i];
            let blink    = cc.blink(2*speed, 8);
            let bgWin    = this.listNodePot[pos].getChildByName("bg_win");
            bgWin.active = true;
            bgWin.runAction(cc.sequence(blink, cc.delayTime(1*speed), cc.callFunc(function () {
                self.runActionToGirl(function () {
                    if (chipUserOnBoard.length > 0){
                        Promise.all(usersOnboard.map(function(username, index){
                            self.actionFlyChipToPlayer(username, chipUserOnBoard[index], speed);
                        }));
                    }
                });
            })));
        }
        this.showEffectWinLose(winPot[0]);
    },
    getNumberCardFromChip(money) {
        let number10M   = Math.floor(money/10000000);
        money           = money - number10M*10000000;
        let number1M    =  Math.floor(money/1000000);
        money           = money - number1M*1000000;
        let number500k  =  Math.floor(money/500000);
        money           = money - number500k*500000;
        let number100k  =  Math.floor(money/100000);
        money           = money - number100k*100000;
        let number50k   =  Math.floor(money/50000);
        money           = money - number50k*50000;
        let number10k   =  Math.floor(money/10000);
        money           = money - number10k*10000;
        let number5k    =  Math.floor(money/5000);
        money           = money - number5k*5000;
        let number2k    =  Math.floor(money/2000);
        money           = money - number2k*2000;
        let number1k    =  Math.floor(money/1000);
        return [number1k, number2k, number5k, number10k, number50k, number100k, number500k, number1M, number10M];
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
              chipNode.position = cc.v2(0,0);
              let posTo = this.getPositionInOtherNode(chipNode, this.ListPosInGirl);
              chipNode.parent   = this.ListPosInGirl;
              chipNode.position = posTo;
              let positionGirl = cc.v2(Math.random()*50-20, Math.random()*10-10);
              chipNode.runAction(cc.sequence(cc.moveTo(1, positionGirl).easing(cc.easeOut(0.5)), cc.delayTime(0.05*i), cc.callFunc(function () {
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
    resumeGame(cardPlayer, cardBanker, winpot, time, usersOnboard, chipUserOnBoard) {
        this.showResult(cardPlayer, cardBanker, winpot, chipUserOnBoard, usersOnboard, time/20);
    },
    getChipNode() {
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
        chip.active = true;
        this.poolChip.push(chip);
        return chip;
    },
    returnChipNode(chipNode){
        chipNode.active = false;
    },
    _stopEffectWinPot(){

    },
    showListUsers(listUserShow){
        for(let i = 0; i < 7;i++){
            let nodeUser = this.PlayerPos.getChildByName("pos_"+i);
            let lb_name = nodeUser.getChildByName("name").getComponent(cc.Label);
            let lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
            let user = (i >= listUserShow.length) ? null : listUserShow[i];
            if(user && (user.getVariable("role").value != "admin")){
                nodeUser.active = true;
                nodeUser._username = user.name;
                lb_name.string = GameVariables.getDisplayName(user);
                lb_money.string = Utils.formatCurrency(GameVariables.getChip(user));
            }else{
                nodeUser.active = false;
                nodeUser._username = null;
            }
        }
    },
    getPosFromName(username){
        for(let i = 0; i < 7;i++){
            let nodeUser = this.PlayerPos.getChildByName("pos_"+i);
            if(nodeUser.active && nodeUser._username && nodeUser._username == username){
                return i;
            }
        }
        return 7 ;
    },
    updateChip(user){
        for(let i = 0; i < 7;i++){
            let nodeUser = this.PlayerPos.getChildByName("pos_"+i);
            let lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
            if(nodeUser.active && nodeUser._username && nodeUser._username == user.name){
                lb_money.string = Utils.formatCurrency(GameVariables.getChip(user));
                return;
            }
        }
    },
    _turnOnTime(time, maxTime){
        this.Timer.active       = true;
        this.Timer.getComponent("TimeSub").setTotalProgress(maxTime);
        this.Timer.getComponent("TimeSub").setTotalRemain(time);
        this.Timer.getComponent("TimeSub").turnOnTimer();
        this._currentTime       = time;
        this._stopEffectWinPot();
    },
    _turnOffTime(){
        this.Timer.getComponent("TimeSub").turnOffTimer();
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
            if (bets[i] >0){
                if (!this.listMyChipBet[i].node.parent.active)
                    this.listMyChipBet[i].node.parent.active = true;
                this.listMyChipBet[i].string = Utils.formatCurrency(bets[i]);
            }else
                this.listMyChipBet[i].node.parent.active = false;
        }
    },
    showListChipBet(bets){
        for(let i = 0; i < bets.length;i++){
            if (!this.listChipBet[i].node.parent.active)
                this.listChipBet[i].node.parent.active = true;
            this.listChipBet[i].string = Utils.formatCurrency(bets[i]);
        }
    },
    selectBetChip(event, betChip){
        mm.audio.playButton();
        this._lastBet.getChildByName("bg_select").active = false;
        event.currentTarget.getChildByName("bg_select").active = true;
        this._lastBet    = event.currentTarget;
        this._currentBet = parseInt(betChip);
    },
    sendRequestBet(bet, type) {
        this._isDatLast    = true;
        this._currentType  = type;
        if(this._currentType < 0 || this._currentType >= 6){
            mm.Toast.showToast(1, "Của đặt không hợp lệ");
        }else if(GameVariables.getChip(SmartFoxSDK.BaccaratController.ZoneInstance.mySelf) < bet){
            mm.Toast.showToast(1, "Không đủ tiền!");
        }else{
            let betRequest = new BaccaratRequest.BetRequest();
            betRequest.setBetChip(bet);
            betRequest.setTypePot(this._currentType);
            SmartFoxSDK.BaccaratController.ZoneInstance.send(betRequest.toSRequest());
        }
    },
    actionFlyChipToPot(username, potType, money){
        if (this.ListChipImg.hasOwnProperty(money)){
            this.actionFlyOneChipToPot(username, potType, money);
        }else {
            this.actionFlyMutiChipToPot(username, potType, money);
        }
    },
    actionFlyOneChipToPot(username, potType, money){
        let pos = this.getPosFromName(username);
        let chipName = "ic_chip1_small";
        if (this.ListChipImg.hasOwnProperty(money)){
            chipName = this.ListChipImg[money];
            let chipNode = this.getChipNode();
            Utils.loadRes(chipNode.getComponent(cc.Sprite),"images/baccarat/"+chipName);
            let nodeAvatar = this.PlayerPos.getChildByName("pos_"+pos);
            chipNode.position = nodeAvatar.position;
            let nodeFrom = this.getPosBet(potType);
            let posTo = this.getPositionInOtherNode(nodeFrom, this.node);
            chipNode.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(posTo.x, posTo.y)).easing(cc.easeOut(1)), cc.callFunc(function () {
                chipNode.position = cc.v2(0,0);
                chipNode.parent = nodeFrom;
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
                    let chipName = "ic_chip1_small";
                    if (self.ListChipImg.hasOwnProperty(chip))
                        chipName = self.ListChipImg[key]
                    let chipNode = self.getChipNode();
                    Utils.loadRes(chipNode.getComponent(cc.Sprite),"images/baccarat/"+chipName);
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
        let betNode = null;
        if (potType < 2){
            let bet0 = this.listNodePot[potType].getChildByName("Bet0");
            let bet1 = this.listNodePot[potType].getChildByName("Bet1");
            let bet2 = this.listNodePot[potType].getChildByName("Bet2");
            if (bet0.childrenCount < bet1.childrenCount)
                betNode = bet0;
            else if (bet1.childrenCount < bet2.childrenCount){
                betNode = bet1;
            }else
                betNode = bet2;
        }else{
            betNode = this.listNodePot[potType].getChildByName("Bet0");
        }
        if (betNode.childrenCount > 8){
            let card = betNode.children[0];
            card.removeFromParent(true);
            card.active = false;
        }
        if (!betNode.active)
            betNode.active = true;
        return betNode;
    },
    eventCloseMenu(){
        mm.audio.playButton();
        this.menuNode.active = false;
    },
    eventOpenMenu() {
        mm.audio.playButton();
        this.menuNode.active = true;
    },
    eventRank() {
        mm.audio.playButton();
        mm.Loading.show();
        this.menuNode.active = false;
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.BaccaratController.ZoneInstance.send(request.toSRequest())
    },
    eventTransaction() {
        mm.audio.playButton();
        mm.Loading.show();
        this.menuNode.active = false;
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.BaccaratController.ZoneInstance.send(request.toSRequest());
    },
    clickExitRoom(event){
        let room = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat");
        if(room){
            SmartFoxSDK.BaccaratController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
            mm.Loading.show();
        }else{
            UIManger.show("UIHome");
        }
    },
    eventHelper() {
        mm.audio.playButton();
        this.show("UIBaccaratHelper", {pop: true, src: 'baccarat'});
    },
    eventSoiCau() {
        mm.audio.playButton();
        mm.Loading.show();
        if (this._dataCau.length < 1){
            let historyRequest = new BaccaratRequest.HistoryDetailRequest();
            SmartFoxSDK.BaccaratController.ZoneInstance.send(historyRequest.toSRequest());
        }else {
            this.showSoiCau(this._dataCau);
        }
    },
    showSoiCau(dataCau) {
        this._dataCau = dataCau;
        this.show("UIBaccaratSoiCau", {pop: true, src: 'baccarat', data: dataCau});
    },
    eventGapThep(){
        mm.audio.playButton();
        if (this._isHaveChipBet(this._myChipBet) &&  !this._isDat){
            this._isDat        = true;
            for (let i=0; i< this._myChipBet.length; i++){
                if (this._myChipBet[i] > 0)
                    this.sendRequestBet(2*this._myChipBet[i], i);
            }
        }else {
            mm.Toast.showToast(1, "Không có dữ liệu gấp thếp");
        }
    },
    eventDatLai() {
        mm.audio.playButton();
        if (this._isHaveChipBet(this._myChipBet) &&  !this._isDat){
            this._isDat        = true;
            for (let i=0; i< this._myChipBet.length; i++){
                if (this._myChipBet[i] > 0)
                    this.sendRequestBet(this._myChipBet[i], i);
            }
        }else{
            mm.Toast.showToast(1, "Không có dữ liệu đặt lại");
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
    eventScrollLeft() {
        mm.audio.playButton();
        this._currentPercent -= 0.5;
        if (this._currentPercent < 0)
            this._currentPercent = 0;
        this.scrollBet.scrollToPercentHorizontal(this._currentPercent, 1);
    },
    eventScrollRight() {
        mm.audio.playButton();
        this._currentPercent += 0.5;
        if (this._currentPercent > 1)
            this._currentPercent = 1;
        this.scrollBet.scrollToPercentHorizontal(this._currentPercent, 1);
    },
    showNoti(message) {
        this.Noti.active = true;
        this.Noti.getChildByName("lb_noti_content").getComponent(cc.Label).string = message;
        this.scheduleOnce(function () {
            this.Noti.active = false;
        }, 1.5)
    },
    onListRender(item, idx) {
        let cau = this.listCau[idx];
        item.getComponent(item.name).init(cau);
    },
    updateCau(listCau) {
        let self     = this;
        let startPos = listCau.length - this.listCau.childrenCount;
        if (startPos < 0)
            startPos = 0;
        Promise.all(this.listCau.children.map(function(nodeCau, index){
            if (startPos+index < listCau.length){
                let type = listCau[startPos+index].type;
                self.setCauInfo(type, nodeCau);
            }else {
                nodeCau.active = false;
            }
        }));
        this.updateThreeCau(listCau);
    },
    updateThreeCau(listCau) {
        let threeCau = [];
        let totalCau = listCau.length;
        if (totalCau > 3){
            threeCau.push(listCau[totalCau-3]);
            threeCau.push(listCau[totalCau-2]);
            threeCau.push(listCau[totalCau-1]);
        }else {
            threeCau = listCau;
        }
        let self = this;
        let total = threeCau.length;
        Promise.all(this.threeCau.children.map(function(nodeCau, index){
            if (index < total){
                let type = self.getTypeCau(threeCau[index].type);
                nodeCau.getComponent(cc.Sprite).spriteFrame = self.bgThreeCau[type];
                if (type ==0)
                    nodeCau.getChildByName("lb_point").getComponent(cc.Label).string = threeCau[index].con;
                else if (type ==1){
                    nodeCau.getChildByName("lb_point").getComponent(cc.Label).string = threeCau[index].cai;
                }else
                    nodeCau.getChildByName("lb_point").getComponent(cc.Label).string = threeCau[index].con;
            }else
                nodeCau.active = false;

        }));
    },
    setCauInfo(type, nodeCau) {
        let cai = nodeCau.getChildByName("cai");
        let con = nodeCau.getChildByName("con");
        cai.active = false;
        con.active = false;
        for (let i=0; i< type.length; i++){
            if (type[i] > 2){
                if (type == 3){
                    con.active = true;
                }else {
                    cai.active = true;
                }
            }else {
                nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgListCau[type[i]];
            }
        }
    },
    getTypeCau(typeCau) {
        if (typeCau.length <2)
            return typeCau[0];
        for (let i=0; i<typeCau.length; i++){
            if (typeCau[i] < 3)
                return typeCau[i];
        }
        return 2;
    },
    eventShowChat(event, data) {
        this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
        if (this.ChatEmojiLayer.active)
            this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.BaccaratController.ZoneInstance);
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
        let nodeUser = this.PlayerPos.children[0]
        nodeUser.getChildByName("money").getComponent(cc.Label).string =  Utils.formatCurrency(GameVariables.Poker.getChip(SmartFoxSDK.BaccaratController.ZoneInstance.mySelf)-subChip);
    },
});
