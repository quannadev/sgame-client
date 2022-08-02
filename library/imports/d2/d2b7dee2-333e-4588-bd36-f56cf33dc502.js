"use strict";
cc._RF.push(module, 'd2b7d7iMz5FiL029WzzPcUC', 'BaccaratListCauItem');
// scripts/baccarat/BaccaratListCauItem.js

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