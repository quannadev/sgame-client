cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        username: cc.Label,
        displayName: cc.Label,
        money: cc.Label
    },
    onEnable(){
        this.username.string = SmartFoxSDK.PortalController.ZoneInstance.mySelf.name;
        this.displayName.string = GameVariables.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf);
        this.money.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    eventChangePassword(event){
        mm.audio.playButton();
        this.show("UIChangePassword", {pop: true, src: 'portal'});
    },
    eventClose(){
        this.back();
        mm.audio.playButton();
    }
});
