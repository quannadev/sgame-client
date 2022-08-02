cc.Class({
    extends: cc.Component,

    properties: {
    },
    initController(controlerSend) {
        this.chatController = controlerSend;
    },
    onEventSelect(event, data) {
        event.target.parent.active = false;
        let msg =  "emoij_"+data;
        this.sendMessage(msg);
    },
    sendMessage(mess){
        let param = new SmartFoxSDK.SObject();
        param.putUtfString("fb", "");
        param.putUtfString("dn", GameVariables.getDisplayName(this.chatController.mySelf));
        this.chatController.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(mess, param));
    },
    eventSendChat(event, data) {
        let edtChat = this.node.getChildByName("edtChat").getComponent(cc.EditBox);
        if(edtChat.string.length > 0){
            this.sendMessage(edtChat.string);
            edtChat.string = "";
            event.target.parent.active = false;
        }
    },
});
