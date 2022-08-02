"use strict";
cc._RF.push(module, 'a8389W/wytOaoy9cNi1sADz', 'XocDiaListCauItem');
// scripts/xocdia/XocDiaListCauItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    cauItem: cc.Prefab,
    listCau: cc.Node
  },
  init: function init(listCau) {
    var self = this;
    this.listCau.removeAllChildren(true);
    Promise.all(listCau.map(function (cauData, index) {
      var cauPrefab = cc.instantiate(self.cauItem);
      self.listCau.addChild(cauPrefab);
      cauPrefab.getComponent(cauPrefab.name).init(cauData);
    }));
  }
});

cc._RF.pop();