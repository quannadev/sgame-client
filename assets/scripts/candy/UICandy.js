let WinGame     = require("CandyWinGame");
let Helper      = require("Helper");
let reel        = require("CandyReel");
let line        = require("CandyLine");
let UtilsUI     = require("UtilsUI");
let Language    = require("candyLanguage");
let ListRoom = cc.Enum({
    "1l"   : 100,
    "1k"    : 1000,
    "5k"    : 5000,
    "10k"   : 10000
});
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        reels: {
            default: [],
            type: reel,
        },
        listRoomNode: {
            default: [],
            type: cc.Toggle,
        },
        iconPrefab          : cc.Prefab,
        noticeNode             : cc.Node,
        btnQuay             : cc.Node,
        btnQuayNhanh        : cc.Node,
        btnStopSieuToc      : cc.Node,
        btnStopQuay         : cc.Node,
        btnAutoQuay         : cc.Node,
        WinGame             : WinGame,
        listMainLines       : cc.Node,
        numberLine          : cc.Sprite,
        edtCheat          : cc.EditBox,
        selectLines         : line,
        isAuto              : false,
        isFast              : false,
        isSpin              : false,
        red                 : true,
        lastResult          : [],
        betSelect           : 0,
        roomNumber          : 0,
        posLineWin          : 0,
        totalLineWin        : 0,
        TotalItemRun        : 30,
        _TotalColumn         : 3,
        _totalLine          : 20,
        lb_hu: cc.Label,
        betLevel: "1l",
    },
    onLoad () {
        this.initCandy();
        this.isSpin = false;
        this.WinGame.init(this);
        this.selectLines.init(this);
        this.betLevel = "1k";
        this.roomNumber = ListRoom["1k"];
        this.listRoomNode[1].isChecked = true;
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
    },
    onEnable() {
        if (this.node.zIndex <= cc.lastZIndex){
            cc.lastZIndex   += 1;
            this.node.zIndex = cc.lastZIndex;
        }
        cc.currentUI     = "UICandy";
        this._totalLine = 20;
    },
    onDisable(){
        this.node.stopAllActions();
    },
    updateJackpot(){
        let key = "candy"+this.betLevel;
        if(SmartFoxSDK.CandyController.ZoneInstance.mySelf){
            let variableJackpot = SmartFoxSDK.CandyController.ZoneInstance.mySelf.getVariable(key);
            if(variableJackpot){
                let jackpot = variableJackpot.value;
                let current_lb_jackpot = this.lb_hu.string;
                current_lb_jackpot = current_lb_jackpot.split(".").join("");
                let currentHu = parseFloat(current_lb_jackpot);
                Utils.numberTo(this.lb_hu, currentHu, jackpot, 1000, true);
            }
        }
    },
    initCandy: function() {
        let self = this;
        let lineArr1 = [];
        let lineArr2 = [];
        let lineArr3 = [];
        Promise.all(this.reels.map(function(reel, index) {
            let lastArray = [];
            lastArray = self.initRandomItems(self.TotalItemRun, 0, 6);
            lineArr1.push(lastArray[lastArray.length-1]);
            lineArr2.push(lastArray[lastArray.length-2]);
            lineArr3.push(lastArray[lastArray.length-3]);
            reel.init(self, lastArray);
        })).then(result => {
            self.lastResult = lineArr3.concat(lineArr2).concat(lineArr1);
        });
    },
    setMoneyWin: function(totalMoney) {
    },
    updateDataPhong(roomId) {

    },
    eventQuay: function() {
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        this.isSpin = true;
        let betRequest = new CandyRequest.BetRequest();
        this.showLineWin(false);
        this.pauseSystemEventNode(this.btnQuay, true);
        this.setLinesBet(betRequest);
        betRequest.setBet(this.roomNumber);
        SmartFoxSDK.CandyController.ZoneInstance.send(betRequest.toSRequest());
        this.updateChipAll(this._totalLine*this.roomNumber);
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
    eventSieuToc: function() {
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        this.isFast                = true;
        this.isAuto                = true;
        this.btnStopSieuToc.active = true;
        this.btnStopQuay.active    = false;
        this.isSpin                = true;
        this.autoQuay();
    },
    eventAutoQuay: function() {
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        this.isSpin                 = true;
        this.isAuto                 = true;
        this.isFast                 = false;
        this.btnStopQuay.active     = true;
        this.btnStopSieuToc.active  = false;
        this.pauseSystemEventNode(this.btnQuay, true);
        this.autoQuay();
    },
    eventStopAuto: function() {
        this.isAuto = false;
        this.btnStopQuay.active = false;
        this.pauseSystemEventNode(this.btnQuay, false);
    },
    eventStopSieuToc: function() {
        this.isAuto = false;
        this.isFast = false;
        this.btnStopSieuToc.active = false;
    },
    eventPhong: function(event, data) {
        if (this.isSpin){
            if(this.roomNumber == 100){
                this.listRoomNode[0].isChecked = true;
            }else if(this.roomNumber == 1000){
                this.listRoomNode[1].isChecked = true;
            }else if(this.roomNumber == 5000){
                this.listRoomNode[2].isChecked = true;
            }else if(this.roomNumber == 10000){
                this.listRoomNode[3].isChecked = true;
            }
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        this.roomNumber = parseInt(data);
        if(this.roomNumber == 100){
            this.betLevel = "1l";
        }else if(this.roomNumber == 1000){
            this.betLevel = "1k";
        }else if(this.roomNumber == 5000){
            this.betLevel = "5k";
        }else if(this.roomNumber == 10000){
            this.betLevel = "10k";
        }
        this.updateJackpot();
    },
    eventSelectLines: function(){
        if (this.isSpin){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        this.selectLines.eventOpen();
    },
    checkEnoughMoney(){
        if(GameVariables.Poker.getChip(SmartFoxSDK.CandyController.ZoneInstance.mySelf) < this.roomNumber*this._totalLine){
            return false;
        }
        return true;
    },
    pauseSystemEventNode: function(nodeEvent, isPause) {
        Helper.setMaterialGray( nodeEvent.getComponent(cc.Sprite), isPause);
        if (isPause){
            nodeEvent.pauseSystemEvents(true);
        }else
            nodeEvent.resumeSystemEvents(true);
    },

    eventBack: function() {
        if (this.isSpin){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        let room = SmartFoxSDK.CandyController.ZoneInstance.getRoomByName("candy");
        if(room){
            SmartFoxSDK.CandyController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
        }else{
            this.back();
        }
    },
    eventSetting: function() {

    },
    eventVinhDanh: function() {
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.CandyController.ZoneInstance.send(request.toSRequest());
    },
    eventLichSuGiaoDich: function() {
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.CandyController.ZoneInstance.send(request.toSRequest());
    },
    eventOpenHelper: function() {
        this.show("UICandyHelper", {pop: true, src: 'candy'});
    },
    finishSpin: function (){
        this.isSpin = false;
    },
    CandyRun: function(data){
        var self = this;
        if (void 0 !== data.status) {
            if (data.status === 1) {
                data.result = this.getDataResult(data.result);
                Promise.all(data.result.map(function(cel, cel_index){
                    Promise.all(cel.map(function(icon, index){
                        self.reels[cel_index].icons[index].setIcon(icon, true);
                    }));
                })).then(result =>{
                    self.runReels();
                });
                this.lineWin    = data.lineWin;
                this.winMoney   = data.winMoney;
                this.isNoHu     = data.isNohu;
                this.isThangLon = data.isThangLon;
            }else{
                this.resetSpin();
            }
        }else {
            this.resetSpin();
        }
    },
    initRandomItems: function(numberItem, min, maxRandom) {
        let listItem = [];
        for (let i=0; i< numberItem; i++){
            listItem[i] = this.random(min, maxRandom);
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
            let randomArr = this.initRandomItems(this.TotalItemRun-6, 0, 6);
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
        this.WinGame.runWinGame();
        this.showLineWin(true);
        if (!this.isAuto)
            this.pauseSystemEventNode(this.btnQuay, false);
    },
    resume() {
        if (this.winMoney > 0){
            this.scheduleOnce(function (){
                this.WinGame.runWinGame();
            },0.5);
        }else {
            this.WinGame.runWinGame();
        }
    },
    autoQuay() {
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        if (this.isAuto){
            this.scheduleOnce(function (){
                this.eventQuay();
            },0.5)
        }
    },
    showLineWin: function(isShow) {
        let self = this;
        if (isShow){
            this.totalLineWin   = this.lineWin.length;
            this.posLineWin     = 0;
            if (this.totalLineWin > 0){
                Promise.all(this.lineWin.map(function(posLine){
                    self.listMainLines.children[posLine].active = true;
                }));
                this.scheduleOnce(function(){

                }, 2);
                Promise.all(self.lineWin.map(function(posLine){
                    self.listMainLines.children[posLine].active = false;
                })).then(result =>{
                    self.schedule( this.showMainLine, 1.5);
                });
            }
        }else {
            for (let i=0; i< this.listMainLines.childrenCount; i++)
                if (this.listMainLines.children[i].active)
                    this.listMainLines.children[i].active = false;
            self.unschedule(this.showMainLine);
        }
    },
    showMainLine: function() {
        Promise.all(this.listMainLines.children.map(function(line, index) {
            if (line.active)
                line.active = false;
        })).then(result =>{
            this.totalLineWin = this.lineWin.length;
            if (this.totalLineWin > 0){
                this.posLineWin = (this.posLineWin+1)%this.totalLineWin;
                this.listMainLines.children[this.lineWin[this.posLineWin]].active = true;
            }
        }, this);
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
    setNumberLines: function(totalLine) {
        this._totalLine = totalLine;
        UtilsUI.loadImageRes(this.numberLine, "candy/img/number-button/"+totalLine);
    },
    random: function(min, max){
        return  min+ ~~(Math.random()*max);
    },
    resetSpin: function () {
        this.isSpin                 = false;
        this.isAuto                 = false;
        this.isFast                 = false;
        this.btnStopQuay.active     = false;
        this.btnStopSieuToc.active  = false;
        this.pauseSystemEventNode(this.btnQuay, false);
        mm.Toast.showToast(1, Language.getString("noti_not_money"));
    },
    checkHasMoney: function() {
        return true;
    },
    addNotice: function (message) {
        let self = this;
        this.noticeNode.active = true;
        this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = message;
        this.scheduleOnce(function (){
            self.noticeNode.active = false;
        },1.5);
    },
    updateChipAll(subChip) {
        SmartFoxSDK.CandyController.onEventUpdateChip(subChip);
    },
});
