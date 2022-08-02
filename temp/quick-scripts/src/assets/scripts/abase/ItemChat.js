"use strict";
cc._RF.push(module, 'd572aGqd6RC44iX8j0ivaRH', 'ItemChat');
// scripts/abase/ItemChat.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    contentText: cc.RichText
  },
  init: function init(data, idx) {
    if (data.dataSender.dn == "ADMIN" || data.dataSender.dn == "CSKH-Van-Hanh" || data.dataSender.dn == "test102") {
      this.contentText.string = "<color=#00FF1F><b>" + data.dataSender.dn + "</b><br/></c><color=#FF0000><b>" + data.msg + "</b></color>";
    } else {
      this.contentText.string = "<color=#FBD200>" + data.dataSender.dn + ": </color>" + data.msg;
    }
  }
});

cc._RF.pop();