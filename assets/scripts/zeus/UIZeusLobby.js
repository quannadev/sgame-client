cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lbSoDu  : cc.Label,
        arr_lb_hu: {
            type: cc.Label,
            default: []
        }
    },
    onLoad () {
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
    },
    onEnable(){
        this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
    },
    updateJackpot(){
        let keys = ["zeus1l","zeus1k","zeus10k"];
        for(let i = 0; i < keys.length;i++){
            let variableJackpot = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(keys[i]);
            if(variableJackpot){
                let jackpot = variableJackpot.value;
                let lb_hu = this.arr_lb_hu[i];
                let current_lb_jackpot = lb_hu.string;
                current_lb_jackpot = current_lb_jackpot.split(".").join("");
                let currentHu = parseFloat(current_lb_jackpot);
                Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
            }
        }
    },
    eventPlayGame(event, customData) {
        cc.betLevel = customData;
        mm.Loading.show();
        this.show("UIZeus", {pop: true, src: "zeus"});
    },
    eventBack(){
        let room = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus");
        if(room){
            SmartFoxSDK.ZeusController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
        }else{
            this.show('UIHome');
        }
    },
    updateUserVariable(subChip){
        this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf)-subChip);
    },
});
