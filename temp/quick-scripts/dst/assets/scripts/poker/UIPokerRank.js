
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/poker/UIPokerRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7646Q9hVJHWoaeuM57B/H8', 'UIPokerRank');
// scripts/poker/UIPokerRank.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listRank = [];
    this.listview.numItems = this.listRank.length;
  },
  updateRank: function updateRank(items) {
    if (items) {
      this.listRank = items;
      this.listview.numItems = this.listRank.length;
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9rZXJcXFVJUG9rZXJSYW5rLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3Iiwib25Mb2FkIiwibGlzdFJhbmsiLCJudW1JdGVtcyIsImxlbmd0aCIsInVwZGF0ZVJhbmsiLCJpdGVtcyIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1OO0FBRE4sR0FIUDtBQU1MTyxFQUFBQSxNQU5LLG9CQU1HO0FBQ0osU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0csUUFBZCxHQUF5QixLQUFLRCxRQUFMLENBQWNFLE1BQXZDO0FBQ0gsR0FUSTtBQVVMQyxFQUFBQSxVQVZLLHNCQVVNQyxLQVZOLEVBVVk7QUFDYixRQUFHQSxLQUFILEVBQVM7QUFDTCxXQUFLSixRQUFMLEdBQWdCSSxLQUFoQjtBQUNBLFdBQUtOLFFBQUwsQ0FBY0csUUFBZCxHQUF5QixLQUFLRCxRQUFMLENBQWNFLE1BQXZDO0FBQ0g7QUFFSixHQWhCSTtBQWlCTEcsRUFBQUEsWUFqQkssd0JBaUJRQyxJQWpCUixFQWlCY0MsR0FqQmQsRUFpQm1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLUixRQUFMLENBQWNPLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQztBQUNIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGlzdHZpZXcgICAgOiBMaXN0dmlld1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMubGlzdFJhbmsgPSBbXTtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlUmFuayhpdGVtcyl7XHJcbiAgICAgICAgaWYoaXRlbXMpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSYW5rID0gaXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RSYW5rLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuayk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=