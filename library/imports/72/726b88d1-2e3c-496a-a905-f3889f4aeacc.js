"use strict";
cc._RF.push(module, '726b8jRLjxJaqkF84ifSurM', 'ChatEmojiLayer');
// scripts/abase/ChatEmojiLayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  initController: function initController(controlerSend) {
    this.chatController = controlerSend;
  },
  onEventSelect: function onEventSelect(event, data) {
    event.target.parent.active = false;
    var msg = "emoij_" + data;
    this.sendMessage(msg);
  },
  sendMessage: function sendMessage(mess) {
    var param = new SmartFoxSDK.SObject();
    param.putUtfString("fb", "");
    param.putUtfString("dn", GameVariables.getDisplayName(this.chatController.mySelf));
    this.chatController.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(mess, param));
  },
  eventSendChat: function eventSendChat(event, data) {
    var edtChat = this.node.getChildByName("edtChat").getComponent(cc.EditBox);

    if (edtChat.string.length > 0) {
      this.sendMessage(edtChat.string);
      edtChat.string = "";
      event.target.parent.active = false;
    }
  }
});

cc._RF.pop();