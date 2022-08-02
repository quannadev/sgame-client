"use strict";
cc._RF.push(module, '3b9ce9coy1Ig6hUA/v95xVb', 'DaiLyCKItem');
// scripts/portal/DaiLyCKItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbName: cc.Label,
    lbUserName: cc.Label,
    lbSTT: cc.Label,
    _isSelect: false
  },
  onEnable: function onEnable() {
    this._isSelect = false;
    var menuChon = this.node.getChildByName("menuchon");
    menuChon.active = false;
    this.node.on(cc.Node.EventType.MOUSE_ENTER, function (event) {
      menuChon.active = true;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      menuChon.active = this._isSelect;
    }, this);
  },
  showMenuChon: function showMenuChon(isShow) {
    this._isSelect = isShow;
    this.node.getChildByName("menuchon").active = isShow;
  },
  init: function init(data) {
    this.lbName.string = data.agName;
    this.lbUserName.string = data.name;
    this.lbSTT.string = data.stt;
  }
});

cc._RF.pop();