cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        arr_lb_hu: {
            type: cc.Label,
            default: []
        },
        lb_sodu: cc.Label
    },
    onLoad () {
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
    },
    onEnable(){
        this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
    },
    updateJackpot(){
        let keys = ["sinbad1l","sinbad1k","sinbad10k"];
        for(let i = 0; i < keys.length;i++){
            if(SmartFoxSDK.SinbadController.ZoneInstance.mySelf){
                let variableJackpot = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(keys[i]);
                if(variableJackpot){
                    let jackpot = variableJackpot.value;
                    let lb_hu = this.arr_lb_hu[i];
                    let current_lb_jackpot = lb_hu.string;
                    current_lb_jackpot = current_lb_jackpot.split(".").join("");
                    let currentHu = parseFloat(current_lb_jackpot);
                    Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
                }
            }

        }
    },
    eventPlayGame(event, customData) {
        cc.betLevel = customData;
        mm.Loading.show();
        this.show("UISinbad", {pop: true, src: "sinbad"});
    },
    eventSetting() {

    },
    back(){
        let room = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad");
        if(room){
            SmartFoxSDK.SinbadController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
        }else{
            this.show('UIHome');
        }
    },
    updateUserVariable(subChip){
        this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf)-subChip);
    },
});
