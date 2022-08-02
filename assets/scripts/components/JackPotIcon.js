cc.Class({
    extends: cc.Component,

    properties: {
        arr_lb_hu: {
            type: cc.Label,
            default: []
        },
        game: "kimcuong"
    },
    onLoad () {
        let random = Math.floor(Math.random()* 3) + 1;
        this.schedule(this.updateJackpot, random);
        this.updateJackpot();
    },
    updateJackpot(){
        let prefixkeys = ["1l","1k","10k"];
        let keys = [];
        for(let i = 0; i < prefixkeys.length;i++){
            keys[i] = this.game + prefixkeys[i];
        }
        for(let i = 0; i < keys.length;i++){
            let random = Math.floor(Math.random()*2);
            if(SmartFoxSDK.PortalController.ZoneInstance.mySelf && random == 0){
                let variableJackpot = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(keys[i]);
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
});
