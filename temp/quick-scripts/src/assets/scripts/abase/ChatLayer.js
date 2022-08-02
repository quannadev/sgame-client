"use strict";
cc._RF.push(module, '1b7c4kYnQJM84+fuMd0TjdB', 'ChatLayer');
// scripts/abase/ChatLayer.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    ed_msg: cc.EditBox,
    listview: Listview,
    dataChat: null
  },
  onLoad: function onLoad() {
    this.dataChat = [];
  },
  onDisable: function onDisable() {},
  onEnable: function onEnable() {
    this.listview.numItems = this.dataChat.length;
    this.listview.scrollTo(0);
  },
  initChat: function initChat(listChat) {
    this.dataChat = listChat;
    this.listview.numItems = this.dataChat.length;
    this.listview.scrollTo(0);
  },
  sendMessage: function sendMessage() {
    if (this.ed_msg.string.length > 0) {
      var param = new SmartFoxSDK.SObject();
      param.putUtfString("fb", "");
      param.putUtfString("dn", GameVariables.getDisplayName(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf));
      SmartFoxSDK.TaiXiuController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(this.ed_msg.string, param));
      this.ed_msg.string = "";
    }
  },
  addMessage: function addMessage(msgItem) {
    this.dataChat.unshift(msgItem);
    this.listview.numItems = this.dataChat.length;
  },
  onListRender: function onListRender(item, idx) {
    var data = this.dataChat[idx];
    item.getComponent(item.name).init(data, idx);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }
  }
});

cc._RF.pop();