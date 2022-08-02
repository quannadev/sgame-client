
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXExvYWRpbmcuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50Iiwic3RhdGljcyIsImluc3QiLCJwcm9wZXJ0aWVzIiwiaWNvbl9sb2FkaW5nIiwiTm9kZSIsIm9uTG9hZCIsIm1tIiwiaGlkZSIsIm5vZGUiLCJ6SW5kZXgiLCJzaG93IiwiaGlkZUljb25Mb2FkIiwiYWN0aXZlIiwidW5kZWZpbmVkIiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciIsInJvdGF0ZUJ5IiwiX3NlbGVjdEdhbWVOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNuQixhQUFTRCxFQUFFLENBQUNFLGdCQURPO0FBR25CQyxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFHO0FBREYsR0FIVTtBQU1uQkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRU4sRUFBRSxDQUFDTztBQURULEdBTk87QUFVbkJDLEVBQUFBLE1BVm1CLG9CQVVUO0FBQ05ULElBQUFBLE9BQU8sQ0FBQ0ssSUFBUixHQUFlLElBQWY7QUFDQUssSUFBQUEsRUFBRSxDQUFDVixPQUFILEdBQWEsSUFBYjtBQUNBLFNBQUtXLElBQUw7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDSCxHQWZrQjtBQWdCbkJDLEVBQUFBLElBaEJtQixnQkFnQmRDLFlBaEJjLEVBZ0JEO0FBQ2QsU0FBS0gsSUFBTCxDQUFVSSxNQUFWLEdBQW1CLElBQW5COztBQUNBLFFBQUdELFlBQVksSUFBSUUsU0FBaEIsSUFBNkJGLFlBQWhDLEVBQTZDO0FBQ3pDLFdBQUtSLFlBQUwsQ0FBa0JTLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS1QsWUFBTCxDQUFrQlMsTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxXQUFLVCxZQUFMLENBQWtCVyxTQUFsQixDQUE0QmpCLEVBQUUsQ0FBQ2tCLGFBQUgsQ0FBaUJsQixFQUFFLENBQUNtQixRQUFILENBQVksSUFBWixFQUFrQixFQUFsQixDQUFqQixDQUE1QjtBQUNIO0FBQ0osR0F4QmtCO0FBeUJuQlQsRUFBQUEsSUF6Qm1CLGtCQXlCYjtBQUNGLFNBQUtDLElBQUwsQ0FBVUksTUFBVixHQUFtQixLQUFuQjtBQUNBLFFBQUlmLEVBQUUsQ0FBQ29CLGVBQVAsRUFDSXBCLEVBQUUsQ0FBQ29CLGVBQUgsQ0FBbUJDLGNBQW5CLENBQWtDLE1BQWxDLEVBQTBDTixNQUExQyxHQUFtRCxLQUFuRDtBQUNQO0FBN0JrQixDQUFULENBQWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMb2FkaW5nID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBzdGF0aWNzOiB7XHJcbiAgICAgICAgaW5zdDogIG51bGwsXHJcbiAgICB9LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGljb25fbG9hZGluZzogY2MuTm9kZVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIExvYWRpbmcuaW5zdCA9IHRoaXM7XHJcbiAgICAgICAgbW0uTG9hZGluZyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDEwMDA7XHJcbiAgICB9LFxyXG4gICAgc2hvdyhoaWRlSWNvbkxvYWQpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGhpZGVJY29uTG9hZCAhPSB1bmRlZmluZWQgJiYgaGlkZUljb25Mb2FkKXtcclxuICAgICAgICAgICAgdGhpcy5pY29uX2xvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbl9sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbl9sb2FkaW5nLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnJvdGF0ZUJ5KDAuMDEsIDEwKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChjYy5fc2VsZWN0R2FtZU5vZGUpXHJcbiAgICAgICAgICAgIGNjLl9zZWxlY3RHYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvYWRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=