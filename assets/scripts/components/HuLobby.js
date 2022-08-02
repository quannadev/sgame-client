cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        content: cc.Node,
        betLevel: "1l"
    },
    onLoad(){
        this.schedule(this.updateJackpot, 3);
        this.updateJackpot();
    },
    updateJackpot(){
        for(let i = 0; i < this.content._children.length;i++){
            let game = this.content._children[i];
            let key = game.name+this.betLevel;
            if(SmartFoxSDK.PortalController.ZoneInstance.mySelf){
                let variableJackpot = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(key);
                if(variableJackpot){
                    let lb_hu = game.getChildByName("lb_money").getComponent(cc.Label);
                    let jackpot = variableJackpot.value;
                    let current_lb_jackpot = lb_hu.string;
                    current_lb_jackpot = current_lb_jackpot.split(".").join("");
                    let currentHu = parseFloat(current_lb_jackpot);
                    Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
                }
            }
        }


    },
    eventToggleBetMoney(event){
        this.betLevel = event.node.name;
        this.updateJackpot();
        mm.audio.playButton();
    }
});
