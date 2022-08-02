cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        arr_lb_hu: {
            type: cc.Label,
            default: []
        }
    },
    onLoad () {
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
    },
    updateJackpot(){
        let keys = ["vampire1l","vampire1k","vampire10k"];
        for(let i = 0; i < keys.length;i++){
            if(SmartFoxSDK.VampireController.ZoneInstance.mySelf){
                let variableJackpot = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(keys[i]);
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
        this.show("UIVampire", {pop: true, src: "vampire"});
    },
    eventSetting() {

    },
    back(){
        let room = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire");
        if(room){
            SmartFoxSDK.VampireController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
        }else{
            this.show('UIHome');
        }
    },
    updateUserVariable(subChip){

    },
});
