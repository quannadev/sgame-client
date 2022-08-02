let WinGame     = require("VampireWinGame");
let Helper      = require("Helper");
let reel        = require("VampireReel");
let line        = require("VampireLine");
let TrialResult = require("TrialResult");
let Language    = require("vampireLanguage");
let ListRoom = cc.Enum({
    "1l"   : 1,
    "1k"    : 2,
    "10k"   : 3
});
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        reels: {
            default: [],
            type: reel,
        },
        iconPrefab          : cc.Prefab,
        noticeNode             : cc.Node,
        bgBangThuong        : cc.Node,
        btnQuay             : cc.Node,
        btnQuayNhanh        : cc.Node,
        btnStopQuay         : cc.Node,
        btnAutoQuay         : cc.Node,
        lbNumberLine        : cc.Label,
        lbNumberStake       : cc.Label,
        lbMoneyWin          : cc.Label,
        lbSession           : cc.Label,
        selectLines         : line,
        WinGame             : WinGame,
        listMainLines       : cc.Node,
        // edtCheat           : cc.EditBox,
        isAuto              : false,
        isFast              : false,
        isSpin              : false,
        isFreeSpin          : false,
        red                 : true,
        lastResult          : [],
        betSelect           : 0,
        roomNumber          : 0,
        posLineWin          : 0,
        totalLineWin        : 0,
        _TotalColumn        : 5,
        lb_phong: cc.Label,
        lb_sodu: cc.Label,
        lb_hu: cc.Label,
        toggleMusic: cc.Toggle,
        toggleSound: cc.Toggle,
        bgSound: cc.AudioClip,
        soundSpinMis: cc.AudioClip,
        soundSpinWin: cc.AudioClip,
        soundBigWin: cc.AudioClip,
        soundJackpot: cc.AudioClip,
        soundBonus: cc.AudioClip,
        soundClick: cc.AudioClip,
        soundSpin: cc.AudioClip,
        menuSetting: cc.Node,
        _keyMusic: "music_kc",
        _keySound: "sound_kc",
        _musicSlotState : 0,
        _soundSlotState : 0,
        _isFreeTrial : false,
        _myMoneyTrial : 0,
        _mySession : 0,
    },
    onLoad () {
        this._TotalColumn     = 5;
        this.TotalItemRun     = 20;
        this.totalSymbol      = 7;
        this.winMoney         = 0;
        this.freeSpin         = 0;
        this.init();
        this.roomNumber       = ListRoom["1l"];
        this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf));
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
        this.initSound();
    },
    initSound() {
        var musicSave = cc.sys.localStorage.getItem(this._keyMusic);
        if (musicSave != null) {
            this._musicSlotState = parseInt(musicSave);
        } else {
            this._musicSlotState = 1;
            cc.sys.localStorage.setItem(this._keyMusic, "1");
        }

        var soundSave = cc.sys.localStorage.getItem(this._keySound);
        if (soundSave != null) {
            this._soundSlotState = parseInt(soundSave);
        } else {
            this._soundSlotState = 1;
            cc.sys.localStorage.setItem(this._keySound, "1");
        }
        if(this.bgSound != null && !this.toggleMusic.isChecked) {
            this.musicId = cc.audioEngine.play(this.bgSound, true, 1);
        }else{
            cc.audioEngine.pause(this.musicId);
        }
    },
    onDisable(){
        cc.audioEngine.pause(this.musicId);
    },
    eventMusic() {
        this._musicSlotState         = this.toggleSound.isChecked? 0: 1;
        if (!this.toggleMusic.isChecked){
            cc.audioEngine.resume(this.musicId);
        }else
            cc.audioEngine.pause(this.musicId);
        cc.sys.localStorage.setItem(this._keyMusic,  this._musicSlotState);
    },
    eventSound() {
        this._soundSlotState = this.toggleSound.isChecked? 0: 1;
        cc.sys.localStorage.setItem(this._keySound,  this._soundSlotState);
    },
    playSpin() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpin, false, 1);
        }
    },
    playSpinMis() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpinMis, false, 1);
        }
    },
    playSpinWin() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpinWin, false, 1);
        }
    },
    playBigWin() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundBigWin, false, 1);
        }
    },
    playJackpot() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundJackpot, false, 1);
        }
    },
    playBonus() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundBonus, false, 1);
        }
    },
    playClick() {
        if (this._soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
    },
    updateJackpot(){
        let key = "vampire"+cc.betLevel;
        if(SmartFoxSDK.VampireController.ZoneInstance.mySelf){
            if(SmartFoxSDK.VampireController.ZoneInstance.mySelf){
                let variableJackpot = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(key);
                if(variableJackpot){
                    let jackpot = variableJackpot.value;
                    let current_lb_jackpot = this.lb_hu.string;
                    current_lb_jackpot = current_lb_jackpot.split(".").join("");
                    let currentHu = parseFloat(current_lb_jackpot);
                    Utils.numberTo(this.lb_hu, currentHu, jackpot, 1000, true);
                }
            }

        }
    },
    updateUserVariableSlot(event){
        let key = "fsvampire"+cc.betLevel;
        if(event.changedVars.indexOf(key) >= 0){
            // get free spine of room in here
            //key: "fs" + "vampire1l" free spin of bet 100
            // key: "fs" + "vampire1k" free spin of bet 1000
            // key: "fs" + "vampire10k" free spin of bet 1000
            if(event.user.isItMe){
                let freeSpin    = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(key).value;
                this.freeSpin   = freeSpin;
                this.WinGame.updateFreeSpin();
            }
        }
    },
    updateUserVariable(subChip){
        if (!this._isFreeTrial && cc.currentUI != "")
            this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf)-subChip);
    },
    onEnable(){
        mm.audio.pauseMusic();
        if (cc.betLevel == "choithu"){
            this._isFreeTrial     = true;
            this._myMoneyTrial    = 50000000;
            this.lb_sodu.string   = Utils.addDotToNumber(50000000);
            this._mySession       = 0;
            this.lbSession.string = "#"+this._mySession;
        }else{
            this._myMoneyTrial = 0;
            this._isFreeTrial  = false;
        }
        this.roomNumber = ListRoom[cc.betLevel];
        if(this.roomNumber === undefined){
            cc.betLevel = "1l";
        }
        this.roomNumber = ListRoom[cc.betLevel];
        this.roomNumber = (this.roomNumber)%4;
        this.roomNumber = this.roomNumber < 1 ? 1: this.roomNumber;
        this.lb_phong.string = Helper.numberWithCommas(this.getMoneyInRoom());
        this.selectLines.init(this);
        this.WinGame.init(this);
        this.lbMoneyWin.string = "0";
        this.showLineWin(false);
        mm.Loading.hide();
    },
    init: function() {
        let self = this;
        let lineArr1 = [];
        let lineArr2 = [];
        let lineArr3 = [];
        Promise.all(this.reels.map(function(reel, index) {
            let lastArray = [];
            lastArray = self.initRandomItems(self.TotalItemRun);

            lineArr1.push(lastArray[lastArray.length-1]);
            lineArr2.push(lastArray[lastArray.length-2]);
            lineArr3.push(lastArray[lastArray.length-3]);
            reel.init(self, lastArray);
        })).then(result => {
            self.lastResult = lineArr3.concat(lineArr2).concat(lineArr1);
        });
    },
    setNumberLines: function(totalLines) {
        this.lbNumberLine.string = totalLines;
    },
    setNumberStake: function(totalStake) {
        this.lbNumberStake.string = Helper.numberWithCommas(totalStake*this.getMoneyInRoom());
    },
    setMoneyWin: function(totalMoney) {
        Helper.numberTo(this.lbMoneyWin, parseInt(this.lbMoneyWin.string), totalMoney, 1200, true);
        if (!this._isFreeTrial){
            this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf));
        }else{
            this._myMoneyTrial = this._myMoneyTrial + this.winMoney;
            this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
        }
        this.isSpin    = false;
    },
    updateDataPhong(roomId) {

    },
    // update (dt) {},
    eventQuayNhanh: function() {
        if (this._isFreeTrial){
            this.addNotice(Language.getString("noti_not_trial"));
            return;
        }
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        if (this.isSpin){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }

        this.isSpin = true;
        this.isFast = true;
        this.isAuto = true;
        this.pauseSystemEventNode(this.btnAutoQuay, false);
        this.pauseSystemEventNode(this.btnQuayNhanh, true);
        this.btnStopQuay.active = true;
        this.autoQuay();
    },
    eventAutoQuay: function() {
        if (this._isFreeTrial){
            this.addNotice(Language.getString("noti_not_trial"));
            return;
        }
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        if (this.isSpin){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        this.isSpin = true;
        this.isFast = false;
        this.isAuto = true;
        this.pauseSystemEventNode(this.btnAutoQuay, true);
        this.pauseSystemEventNode(this.btnQuayNhanh, false);
        this.btnStopQuay.active = true;
        this.autoQuay();
    },
    runQuay() {
        if (this._isFreeTrial){
            this.isSpin    = true;
            this._myMoneyTrial = this._myMoneyTrial-this.getTotalBet();
            if (this.freeSpin < 1)
                this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
            if (this._myMoneyTrial < 1)
                mm.Toast.showToast(1, Language.getString("noti_not_money"));
            this._mySession++;
            this.VampireRun(TrialResult.getItemTrial());
            this.freeSpin--;
        }else{
            this.playSpin();
            this.isSpin    = true;
            let betRequest = new VampireRequest.BetRequest();
            this.showLineWin(false);
            betRequest.setBet(this.getMoneyInRoom());
            this.setLinesBet(betRequest);
            if(!this.checkEnoughMoney()){
                mm.Toast.showToast(1, Language.getString("noti_not_money"));
                return;
            }
            SmartFoxSDK.VampireController.ZoneInstance.send(betRequest.toSRequest());
            // sub money
            if (this.freeSpin < 1)
                this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - this.getTotalBet());
        }
    },
    eventStopQuay: function() {
        this.isFast = false;
        this.isAuto = false;
        this.btnStopQuay.active = false;
        this.pauseSystemEventNode(this.btnAutoQuay, false);
        this.pauseSystemEventNode(this.btnQuayNhanh, false);

        let request = new VampireRequest.StopAutoPlayRequest();
        SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
    },
    eventPhong: function(event, data) {
        if (this._isFreeTrial){
            this.addNotice(Language.getString("noti_not_trial"));
            return;
        }
        if (this.isSpin || this.isAuto || this.isFast){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        this.roomNumber = (this.roomNumber + 1)%4;
        this.roomNumber = this.roomNumber < 1 ? 1: this.roomNumber;
        this.lb_phong.string = Helper.numberWithCommas(this.getMoneyInRoom());
       this.setNumberStake(this.selectLines.getTotalLineSelect());
        if(this.roomNumber == 1){
            cc.betLevel = "1l";
        }else if(this.roomNumber == 2){
            cc.betLevel = "1k";
        }else if(this.roomNumber == 3){
            cc.betLevel = "10k";
        }
        this.updateJackpot();
    },
    eventSelectLines: function(){
        if (this._isFreeTrial){
            this.addNotice(Language.getString("noti_not_trial"));
            return;
        }
        if (this.isSpin || this.isAuto || this.isFast){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        this.selectLines.eventOpen();
    },
    checkEnoughMoney(){
        let totalBet = this.getMoneyInRoom() * 25;
        switch (this.selectLines.typeLine) {
            case 1:
                totalBet = this.getMoneyInRoom() * 13;
                break;
            case 2:
                totalBet = this.getMoneyInRoom() * 12;
                break;
            case 3:
                let listLine = [];
                for (let i=1; i< this.selectLines.data.length; i++){
                    if (this.selectLines.data[i]){
                        listLine.push(i);
                    }
                }
                totalBet = this.getMoneyInRoom() * listLine.length;
                break;
        }
        if(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) < totalBet){
            return false;
        }
        return true;
    },
    autoQuay() {
        if (this._isFreeTrial){
            if (this.freeSpin > 0){
                this.eventQuay();
            }
        }else {
            if (this.freeSpin < 1){
                if (this.isAuto){
                    let request    = new VampireRequest.AutoPlayRequest();
                    request.setBet(this.getMoneyInRoom());
                    this.setLinesBet(request);
                    if(!this.checkEnoughMoney()){
                        mm.Toast.showToast(1, Language.getString("noti_not_money"));
                        return;
                    }
                    SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
                    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - this.getTotalBet());
                }
            }else{
                this.eventQuay();
            }
        }
    },

    getTotalBet(){
        let bet = this.getMoneyInRoom();
        switch (this.selectLines.typeLine) {
            case 0: // all
                return this.selectLines.getTotalLine() * bet;
            case 1: // le
                return this.selectLines.getTotalLineLe()* bet;
            case 2: // chan
                return this.selectLines.getTotalLineChan()* bet;
            case 3:
                return this.selectLines.getTotalLineSelect() * bet;
        }
        return bet;
    },
    setLinesBet(request){
        switch (this.selectLines.typeLine) {
            case 1:
                request.setLineLe();
                break;
            case 2:
                request.setLineChan();
                break;
            case 3:
                let listLine = [];
                for (let i=1; i< this.selectLines.data.length; i++){
                    if (this.selectLines.data[i]){
                        listLine.push(i);
                    }
                }
                request.setLine(listLine);
                break;
        }
    },
    eventQuay: function() {
        if(!this._isFreeTrial && !this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        this.pauseSystemEventNode(this.btnQuay, true);
        this.runQuay();
    },
    pauseSystemEventNode: function(nodeEvent, isPause) {
        Helper.setMaterialGray( nodeEvent.getComponent(cc.Sprite), isPause);
        if (isPause){
            nodeEvent.pauseSystemEvents(true);
        }else
            nodeEvent.resumeSystemEvents(true);
    },
    eventBack: function() {
        if (this.isSpin || this.isAuto || this.isFast){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        UIManger.show("UIVampireLobby", {pop: true, src: "vampire"});
    },
    eventSetting: function() {
        this.menuSetting.active = !this.menuSetting.active;
    },
    eventVinhDanh: function() {
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
    },
    eventLichSuGiaoDich: function() {
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
    },
    eventBangThuong: function() {
        this.bgBangThuong.active = true;
    },
    eventCloseBangThuong: function() {
        this.bgBangThuong.active = false;
    },
    VampireRun: function(data){
        this.showLineWin(false);
        var self = this;
        let result = this.getDataResult(data.result);
        Promise.all(result.map(function(cel, cel_index){
            Promise.all(cel.map(function(icon, index){
                self.reels[cel_index].icons[index].setIcon(icon, true);
            }));
        }));
        this.lineWin    = data.lineWin;
        this.winMoney   = data.winMoney;
        this.freeGift   = data.freeGift;
        this.isBonus    = data.isBonus;
        this.isFree     = data.isFreeSpin;
        this.session    = data.session;
        this.isNoHu     = data.isNohu;
        this.isThangLon = data.isThangLon;
        this.freeSpin   = data.freeSpin;
        this.type       = data.type;
        this.runReels();
        if (!data.isFreeSpin)
            this.WinGame.updateFreeSpin();
        if (this._isFreeTrial){
            this.lbSession.string = "#"+this._mySession;
        }else{
            this.lbSession.string = "#"+this.session;
        }
    },
    initRandomItems: function(numberItem) {
        let listItem = [];
        for (let i=0; i< numberItem; i++){
            listItem[i] = this.random();
        }
        return listItem;
    },
    getDataResult: function(result) {
        let self = this;
        let newArray = [];
        for (let i=0; i< this._TotalColumn; i++){
            newArray[i] = [];
        }
        for (let i=0; i< result.length; i++) {
            newArray[i%self._TotalColumn].push(result[i]);
        }
        for (let i=0; i< this._TotalColumn; i++){
            let randomArr = this.initRandomItems(this.TotalItemRun-6);
            newArray[i] = newArray[i].concat(randomArr);
        }
        for (let i=0; i<  this.lastResult.length; i++) {
            newArray[i%self._TotalColumn].push( this.lastResult[i]);
        }
        this.lastResult = result;
        return newArray;
    },
    reformatResult(result, size) {
        let res = [];
        for(let i=0;i < result.length; i = i+size)
            res.push(result.slice(i,i+size));
        return res;
    },
    runActionWon: function() {
        this.showLineWin(true);
        this.WinGame.runWinGame();
        this.pauseSystemEventNode(this.btnQuay, false);
    },
    resume() {
        if (this.winMoney > 0){
            setTimeout(function(){
                this.WinGame.runWinGame();
            }.bind(this), 300);
        }else {
            this.WinGame.runWinGame();
        }
    },
    setEventMainLine: function(isPause) {
        Promise.all(this.listMainLines.children.map(function(mainLine, index){
            if (isPause)
                mainLine.pauseSystemEvents(true);
            else
                mainLine.resumeSystemEvents(true);
        }));
    },
    showLineWin: function(isShow) {
        // add money
        let self = this;
        if (isShow){
            this.setEventMainLine(isShow);
            this.totalLineWin   = this.lineWin.length;
            this.posLineWin     = 0;
            if (this.totalLineWin > 0){
                Promise.all(this.lineWin.map(function(posLine){
                    self.listMainLines.children[posLine].getComponent("VampireMainLine").onEf();
                }));
                this.scheduleOnce(function(){
                    Promise.all(self.lineWin.map(function(posLine){
                        self.listMainLines.children[posLine].getComponent("VampireMainLine").offEf();
                    }));
                    self.schedule( this.showMainLine, 1);
                }, 2);
            }
        }else {
            this.unschedule(this.showMainLine);
            if (this.lineWin && this.lineWin.length > 0) {
                Promise.all(this.lineWin.map(function (posLine) {
                    self.listMainLines.children[posLine].getComponent("VampireMainLine").offhover();
                    self.listMainLines.children[posLine].pauseSystemEvents(true);
                }));
            }
        }
    },
    showMainLine: function() {
        if (this.lineWin.length > 0){
            if (this.listMainLines.children[this.lineWin[this.posLineWin%this.totalLineWin]] != undefined)
                this.listMainLines.children[this.lineWin[this.posLineWin%this.totalLineWin]].getComponent("VampireMainLine").offEf();
            this.posLineWin = (this.posLineWin+1)%this.totalLineWin;
            if (this.listMainLines.children[this.lineWin[this.posLineWin]] != undefined)
                this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("VampireMainLine").onEf();
        }
    },
    runReels: function () {
        Promise.all(this.reels.map(function(reel, index) {
            reel.spin(index);
        }));
    },
    copy: function(){
        Promise.all(this.reels.map(function(reel){
            reel.icons[reel.icons.length-1].setIcon(reel.icons[2].data);
            reel.icons[reel.icons.length-2].setIcon(reel.icons[1].data);
            reel.icons[reel.icons.length-3].setIcon(reel.icons[0].data);
        }));
    },
    random: function(){
        return  ~~(Math.random()*this.totalSymbol);
    },
    getMoneyInRoom: function() {
        return 10*Math.pow(10, this.roomNumber);
    },
    checkHasMoney: function() {
        return true;
    },
    addNotice: function (message) {
        let self = this;
        this.noticeNode.active = true;
        this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = message;
        setTimeout(function(){
            self.noticeNode.active = false;
        }, 1200);
    }
});
