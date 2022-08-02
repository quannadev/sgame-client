let WinGame     = require("MiniPokerWinGame");
let Helper      = require("Helper");
let reel        = require("MiniPokerReel");
let UtilsUI     = require("UtilsUI");
let PokerCard   = require("PokerCard");
let Language    = require("sinbadLanguage");
let ListRoom = cc.Enum({
    "1l"   : 100,
    "1k"    : 1000,
    "10k"   : 10000
});
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        reels: {
            default: [],
            type: reel,
        },
        iconPrefab          : cc.Prefab,
        selectRoom          : cc.Node,
        noticeNode          : cc.Node,
        btnQuay             : cc.Node,
        btnQuayNhanh        : cc.Node,
        btnStopQuayNhanh    : cc.Node,
        btnAutoQuay         : cc.Node,
        btnStopAutoQuay     : cc.Node,
        WinGame             : WinGame,
        isAuto              : false,
        isFast              : false,
        isSpin              : false,
        red                 : true,
        lastResult          : [],
        betSelect           : 0,
        roomNumber          : 0,
        posLineWin          : 0,
        totalLineWin        : 0,
        TotalItemRun        : 15,
        _TotalColumn        : 5,
        ListCard           : [],
        _isQuay             : true,
        lb_hu: cc.Label,
        betLevel: "1l",
    },
    onLoad () {
        this._TotalColumn = 5;
        this.TotalItemRun = 15;
        this.isFast       = false;
        this._isQuay      = false;
        this.isAuto       = false;
        cc.loader.loadRes("images/minigame/minipoker/card2d", cc.SpriteAtlas, function (err, atlas) {
            if(err){
                console.log(err);
                return;
            }
            this.ListCard   = atlas;
            this.initMiniPoker();
            this.WinGame.init(this);
        }.bind(this));
        let self = this;
        Promise.all(this.selectRoom.children.map(function(room, index){
            Helper.setMaterialGray(room.getComponent(cc.Sprite), true);
        })).then(result =>{
            Helper.setMaterialGray(self.selectRoom.children[0].getComponent(cc.Sprite), false);
        });
        this.betLevel = "1l";
        this.roomNumber = ListRoom["1l"];
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
    },
    onEnable() {
        if (this.node.zIndex <= cc.lastZIndex){
            cc.lastZIndex   += 1;
            this.node.zIndex = cc.lastZIndex;
        }
        cc.currentUI  = "UIMiniPoker";
        mm.Loading.hide();
    },
    onDisable(){
        this.node.stopAllActions();
    },
    updateJackpot(){
        let key = "minipoker"+this.betLevel;
        let variableJackpot = SmartFoxSDK.MiniPokerController.ZoneInstance.mySelf.getVariable(key);
        if(variableJackpot){
            let jackpot = variableJackpot.value;
            let current_lb_jackpot = this.lb_hu.string;
            current_lb_jackpot = current_lb_jackpot.split(".").join("");
            let currentHu = parseFloat(current_lb_jackpot);
            Utils.numberTo(this.lb_hu, currentHu, jackpot, 1000, true);
        }
    },
    initMiniPoker: function() {
        let self = this;
        self.lastResult = [];
        Promise.all(this.reels.map(function(reel, index) {
            let lastArray = self.initRandomItems(self.TotalItemRun, 1, 52);
            self.lastResult.push(lastArray[lastArray.length-1]);
            reel.init(self, lastArray);
        }));
    },
    setMoneyWin: function(totalMoney) {
    },
    updateDataPhong(roomId) {

    },
    // update (dt) {},
    eventSieuToc: function() {
        this.isFast                 = true;
        this.isAuto                 = true;
        this.btnStopAutoQuay.active = false;
        this.btnStopQuayNhanh.active= true;
        this.autoQuay();
    },
    eventAutoQuay: function() {
        this.isAuto                 = true;
        this.isFast                 = false;
        this.btnStopAutoQuay.active = true;
        this.btnQuayNhanh.active    = true;
        this.autoQuay();
    },
    eventStopAuto: function() {
        this.isAuto = false;
        this.btnAutoQuay.active     = true;
        this.btnStopAutoQuay.active = false;
    },
    eventStopSieuToc: function() {
        this.isFast = false;
        this.isAuto = false;
        this.btnQuayNhanh.active    = true;
        this.btnStopQuayNhanh.active= false;
    },
    eventPhong: function(event, data) {
        mm.audio.playButton();
        if (this._isQuay){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        Promise.all(this.selectRoom.children.map(function(room, index){
            Helper.setMaterialGray(room.getComponent(cc.Sprite), true);
        })).then(result =>{
            Helper.setMaterialGray(event.target.getComponent(cc.Sprite), false);
        });
        this.roomNumber = parseInt(data);
        if(this.roomNumber == 100){
            this.betLevel = "1l";
        }else if(this.roomNumber == 1000){
            this.betLevel = "1k";
        }else if(this.roomNumber == 10000){
            this.betLevel = "10k";
        }
        this.updateJackpot();
    },
    checkEnoughMoney(){
        if(GameVariables.Poker.getChip(SmartFoxSDK.MiniPokerController.ZoneInstance.mySelf) < this.roomNumber){
            return false;
        }
        return true;
    },
    eventQuay: function() {
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        if (this._isQuay){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        this._isQuay = true;
        this.btnQuay.getComponent(sp.Skeleton).setAnimation(0, "Spine", false);
        let betRequest = new MiniPokerRequest.BetRequest();
        betRequest.setBet(this.roomNumber);
        this.updateChipAll(this.roomNumber);
        SmartFoxSDK.MiniPokerController.ZoneInstance.send(betRequest.toSRequest());
    },
    pauseSystemEventNode: function(nodeEvent, isPause) {
        Helper.setMaterialGray( nodeEvent.getComponent(cc.Sprite), isPause);
        if (isPause){
            nodeEvent.pauseSystemEvents(true);
        }else
            nodeEvent.resumeSystemEvents(true);
    },
    eventBack: function() {
        mm.audio.playButton();
        if (this._isQuay){
            this.addNotice(Language.getString("noti_is_playing"));
            return;
        }
        let room = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker");
        if(room){
            SmartFoxSDK.MiniPokerController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
        }else{
            this.back();
        }
    },
    eventSetting: function() {
        mm.audio.playButton();
    },
    eventVinhDanh: function() {
        mm.audio.playButton();
        mm.Loading.show();
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.MiniPokerController.ZoneInstance.send(request.toSRequest());
    },
    eventLichSuGiaoDich: function() {
        mm.audio.playButton();
        mm.Loading.show();
        let request = new CasinoRequest.HistoryRequest();
        SmartFoxSDK.MiniPokerController.ZoneInstance.send(request.toSRequest());
    },
    eventOpenHelper: function() {
        mm.audio.playButton();
        this.show("UIMiniPokerHelper", {pop: true, src: 'minipoker'});
    },
    MiniPokerRun: function(data){
        let self      = this;
        let newResult = this._convertPosCard(data.result);
        newResult     = this.getDataResult(newResult);
        Promise.all(newResult.map(function(cel, cel_index){
            Promise.all(cel.map(function(icon, index){
                self.reels[cel_index].icons[index].setIcon(icon, true);
            }));
        })).then(result =>{
            self.runReels();
        });
        this.winMoney   = data.winMoney;
        this.isNoHu     = data.noHu;
        this.handWinType= data.handWinType;
    },
    _convertPosCard(result) {
        let newResult =[];
        for (let i=0; i< result.length; i++){
            let card = new PokerCard.Card(result[i]);
            newResult.push(card.nameFile);
        }
        return newResult;
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
            let randomArr = this.initRandomItems(this.TotalItemRun-2, 1, 52);
            newArray[i]   = newArray[i].concat(randomArr);
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
        this._isQuay = false;
        this.WinGame.runWinGame();
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
    autoQuay() {
        if(!this.checkEnoughMoney()){
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
        }
        if (this.isAuto){
            this.eventQuay();
        }
    },
    runReels: function () {
        Promise.all(this.reels.map(function(reel, index) {
            reel.spin(index);
        }));
    },
    copy: function(){
        Promise.all(this.reels.map(function(reel){
            reel.icons[reel.icons.length-1].setIcon(reel.icons[0].data);
        }));
    },
    random: function(min, max){
        return  min+ ~~(Math.random()*max);
    },
    resetSpin: function () {
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
    },
    updateChipAll(subChip) {
        SmartFoxSDK.MiniPokerController.onEventUpdateChip(subChip);
    },
});
