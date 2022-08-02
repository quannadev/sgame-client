
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/XocDiaListCauItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxYb2NEaWFMaXN0Q2F1SXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwiY2F1SXRlbSIsIlByZWZhYiIsImxpc3RDYXUiLCJOb2RlIiwiaW5pdCIsInNlbGYiLCJyZW1vdmVBbGxDaGlsZHJlbiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjYXVEYXRhIiwiaW5kZXgiLCJjYXVQcmVmYWIiLCJpbnN0YW50aWF0ZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBR0osRUFBRSxDQUFDSyxNQURMO0FBRVJDLElBQUFBLE9BQU8sRUFBR04sRUFBRSxDQUFDTztBQUZMLEdBSFA7QUFPTEMsRUFBQUEsSUFQSyxnQkFPQUYsT0FQQSxFQU9TO0FBQ1YsUUFBSUcsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLSCxPQUFMLENBQWFJLGlCQUFiLENBQStCLElBQS9CO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFPLENBQUNPLEdBQVIsQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxLQUFsQixFQUF3QjtBQUM1QyxVQUFJQyxTQUFTLEdBQUdoQixFQUFFLENBQUNpQixXQUFILENBQWVSLElBQUksQ0FBQ0wsT0FBcEIsQ0FBaEI7QUFDQUssTUFBQUEsSUFBSSxDQUFDSCxPQUFMLENBQWFZLFFBQWIsQ0FBc0JGLFNBQXRCO0FBQ0FBLE1BQUFBLFNBQVMsQ0FBQ0csWUFBVixDQUF1QkgsU0FBUyxDQUFDSSxJQUFqQyxFQUF1Q1osSUFBdkMsQ0FBNENNLE9BQTVDO0FBQ0gsS0FKVyxDQUFaO0FBS0g7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2F1SXRlbSA6IGNjLlByZWZhYixcclxuICAgICAgICBsaXN0Q2F1IDogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBpbml0KGxpc3RDYXUpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5saXN0Q2F1LnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGxpc3RDYXUubWFwKGZ1bmN0aW9uKGNhdURhdGEsIGluZGV4KXtcclxuICAgICAgICAgICAgbGV0IGNhdVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuY2F1SXRlbSk7XHJcbiAgICAgICAgICAgIHNlbGYubGlzdENhdS5hZGRDaGlsZChjYXVQcmVmYWIpO1xyXG4gICAgICAgICAgICBjYXVQcmVmYWIuZ2V0Q29tcG9uZW50KGNhdVByZWZhYi5uYW1lKS5pbml0KGNhdURhdGEpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=