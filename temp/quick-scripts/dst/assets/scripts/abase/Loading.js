
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05429VhJqJPza6444t1eZ5u', 'Loading');
// scripts/abase/Loading.js

"use strict";

var Loading = cc.Class({
  "extends": cc.VozBaseComponent,
  statics: {
    inst: null
  },
  properties: {
    icon_loading: cc.Node
  },
  onLoad: function onLoad() {
    Loading.inst = this;
    mm.Loading = this;
    this.hide();
    this.node.zIndex = 1000;
  },
  show: function show(hideIconLoad) {
    this.node.active = true;

    if (hideIconLoad != undefined && hideIconLoad) {
      this.icon_loading.active = false;
    } else {
      this.icon_loading.active = true;
      this.icon_loading.runAction(cc.repeatForever(cc.rotateBy(0.01, 10)));
    }
  },
  hide: function hide() {
    this.node.active = false;
    if (cc._selectGameNode) cc._selectGameNode.getChildByName("load").active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL0xvYWRpbmcuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50Iiwic3RhdGljcyIsImluc3QiLCJwcm9wZXJ0aWVzIiwiaWNvbl9sb2FkaW5nIiwiTm9kZSIsIm9uTG9hZCIsIm1tIiwiaGlkZSIsIm5vZGUiLCJ6SW5kZXgiLCJzaG93IiwiaGlkZUljb25Mb2FkIiwiYWN0aXZlIiwidW5kZWZpbmVkIiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciIsInJvdGF0ZUJ5IiwiX3NlbGVjdEdhbWVOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNuQixhQUFTRCxFQUFFLENBQUNFLGdCQURPO0FBR25CQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFHO0FBREYsR0FIVTtBQU1uQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRU4sRUFBRSxDQUFDTztBQURULEdBTk87QUFVbkJDLEVBQUFBLE1BVm1CLG9CQVVUO0FBQ05ULElBQUFBLE9BQU8sQ0FBQ0ssSUFBUixHQUFlLElBQWY7QUFDQUssSUFBQUEsRUFBRSxDQUFDVixPQUFILEdBQWEsSUFBYjtBQUNBLFNBQUtXLElBQUw7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDSCxHQWZrQjtBQWdCbkJDLEVBQUFBLElBaEJtQixnQkFnQmRDLFlBaEJjLEVBZ0JEO0FBQ2QsU0FBS0gsSUFBTCxDQUFVSSxNQUFWLEdBQW1CLElBQW5COztBQUNBLFFBQUdELFlBQVksSUFBSUUsU0FBaEIsSUFBNkJGLFlBQWhDLEVBQTZDO0FBQ3pDLFdBQUtSLFlBQUwsQ0FBa0JTLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS1QsWUFBTCxDQUFrQlMsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxXQUFLVCxZQUFMLENBQWtCVyxTQUFsQixDQUE0QmpCLEVBQUUsQ0FBQ2tCLGFBQUgsQ0FBaUJsQixFQUFFLENBQUNtQixRQUFILENBQVksSUFBWixFQUFrQixFQUFsQixDQUFqQixDQUE1QjtBQUNIO0FBQ0osR0F4QmtCO0FBeUJuQlQsRUFBQUEsSUF6Qm1CLGtCQXlCYjtBQUNGLFNBQUtDLElBQUwsQ0FBVUksTUFBVixHQUFtQixLQUFuQjtBQUNBLFFBQUlmLEVBQUUsQ0FBQ29CLGVBQVAsRUFDSXBCLEVBQUUsQ0FBQ29CLGVBQUgsQ0FBbUJDLGNBQW5CLENBQWtDLE1BQWxDLEVBQTBDTixNQUExQyxHQUFtRCxLQUFuRDtBQUNQO0FBN0JrQixDQUFULENBQWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMb2FkaW5nID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluc3Q6ICBudWxsLFxuICAgIH0sXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpY29uX2xvYWRpbmc6IGNjLk5vZGVcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgTG9hZGluZy5pbnN0ID0gdGhpcztcbiAgICAgICAgbW0uTG9hZGluZyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMTAwMDtcbiAgICB9LFxuICAgIHNob3coaGlkZUljb25Mb2FkKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmKGhpZGVJY29uTG9hZCAhPSB1bmRlZmluZWQgJiYgaGlkZUljb25Mb2FkKXtcbiAgICAgICAgICAgIHRoaXMuaWNvbl9sb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaWNvbl9sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmljb25fbG9hZGluZy5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5yb3RhdGVCeSgwLjAxLCAxMCkpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZSgpe1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5fc2VsZWN0R2FtZU5vZGUpXG4gICAgICAgICAgICBjYy5fc2VsZWN0R2FtZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb2FkXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0pO1xuIl19