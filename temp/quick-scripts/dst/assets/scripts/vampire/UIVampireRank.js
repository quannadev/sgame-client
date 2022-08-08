
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/UIVampireRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1f24jPKQBLV61BryLaP0+J', 'UIVampireRank');
// scripts/vampire/UIVampireRank.js

"use strict";

var Listview = require('Listview');

var Helper = require('Helper');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    allRank: cc.Sprite,
    allHu: cc.Sprite,
    listRank: [],
    listHu: []
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(idx, rank);
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventAllRank: function eventAllRank() {
    Helper.setMaterialGray(this.allRank, false);
    Helper.setMaterialGray(this.allHu, true);

    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  eventHu: function eventHu() {
    Helper.setMaterialGray(this.allRank, true);
    Helper.setMaterialGray(this.allHu, false);

    if (this._data && this._data.items) {
      this.listHu = [];
      this.listview.numItems = this.listHu.length;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVUlWYW1waXJlUmFuay5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJIZWxwZXIiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0dmlldyIsImFsbFJhbmsiLCJTcHJpdGUiLCJhbGxIdSIsImxpc3RSYW5rIiwibGlzdEh1Iiwib25FbmFibGUiLCJfZGF0YSIsIml0ZW1zIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0IiwiZXZlbnRDbG9zZSIsImJhY2siLCJldmVudEFsbFJhbmsiLCJzZXRNYXRlcmlhbEdyYXkiLCJldmVudEh1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFLRCxPQUFPLENBQUMsUUFBRCxDQUF4Qjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1QLFFBRE47QUFFUlEsSUFBQUEsT0FBTyxFQUFPTCxFQUFFLENBQUNNLE1BRlQ7QUFHUkMsSUFBQUEsS0FBSyxFQUFTUCxFQUFFLENBQUNNLE1BSFQ7QUFJUkUsSUFBQUEsUUFBUSxFQUFFLEVBSkY7QUFLUkMsSUFBQUEsTUFBTSxFQUFFO0FBTEEsR0FGUDtBQVNMQyxFQUFBQSxRQVRLLHNCQVNLO0FBQ04sUUFBRyxLQUFLQyxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLSixRQUFMLEdBQWdCLEtBQUtHLEtBQUwsQ0FBV0MsS0FBM0I7QUFDQSxXQUFLUixRQUFMLENBQWNTLFFBQWQsR0FBeUIsS0FBS0wsUUFBTCxDQUFjTSxNQUF2QztBQUNIO0FBQ0osR0FkSTtBQWVMQyxFQUFBQSxZQWZLLHdCQWVRQyxJQWZSLEVBZWNDLEdBZmQsRUFlbUI7QUFDcEIsUUFBSUMsSUFBSSxHQUFHLEtBQUtWLFFBQUwsQ0FBY1MsR0FBZCxDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQkgsSUFBSSxDQUFDSSxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NKLEdBQWxDLEVBQXVDQyxJQUF2QztBQUNILEdBbEJJO0FBbUJMSSxFQUFBQSxVQW5CSyx3QkFtQlE7QUFDVCxTQUFLQyxJQUFMO0FBQ0gsR0FyQkk7QUFzQkxDLEVBQUFBLFlBdEJLLDBCQXNCVTtBQUNYekIsSUFBQUEsTUFBTSxDQUFDMEIsZUFBUCxDQUF1QixLQUFLcEIsT0FBNUIsRUFBcUMsS0FBckM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDMEIsZUFBUCxDQUF1QixLQUFLbEIsS0FBNUIsRUFBbUMsSUFBbkM7O0FBQ0EsUUFBRyxLQUFLSSxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLSixRQUFMLEdBQWdCLEtBQUtHLEtBQUwsQ0FBV0MsS0FBM0I7QUFDQSxXQUFLUixRQUFMLENBQWNTLFFBQWQsR0FBeUIsS0FBS0wsUUFBTCxDQUFjTSxNQUF2QztBQUNIO0FBQ0osR0E3Qkk7QUE4QkxZLEVBQUFBLE9BOUJLLHFCQThCSztBQUNOM0IsSUFBQUEsTUFBTSxDQUFDMEIsZUFBUCxDQUF1QixLQUFLcEIsT0FBNUIsRUFBcUMsSUFBckM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDMEIsZUFBUCxDQUF1QixLQUFLbEIsS0FBNUIsRUFBbUMsS0FBbkM7O0FBQ0EsUUFBRyxLQUFLSSxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLSCxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtMLFFBQUwsQ0FBY1MsUUFBZCxHQUF5QixLQUFLSixNQUFMLENBQVlLLE1BQXJDO0FBQ0g7QUFDSjtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XG5jb25zdCBIZWxwZXIgICA9IHJlcXVpcmUoJ0hlbHBlcicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxuICAgICAgICBhbGxSYW5rICAgICA6IGNjLlNwcml0ZSxcbiAgICAgICAgYWxsSHUgICAgICAgOiBjYy5TcHJpdGUsXG4gICAgICAgIGxpc3RSYW5rOiBbXSxcbiAgICAgICAgbGlzdEh1OiBbXVxuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxpc3RSZW5kZXIoaXRlbSwgaWR4KSB7XG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0UmFua1tpZHhdO1xuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQoaWR4LCByYW5rKTtcbiAgICB9LFxuICAgIGV2ZW50Q2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgIH0sXG4gICAgZXZlbnRBbGxSYW5rKCkge1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsUmFuaywgZmFsc2UpO1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsSHUsIHRydWUpO1xuICAgICAgICBpZih0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuaXRlbXMpe1xuICAgICAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50SHUoKSB7XG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxSYW5rLCB0cnVlKTtcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbEh1LCBmYWxzZSk7XG4gICAgICAgIGlmKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyl7XG4gICAgICAgICAgICB0aGlzLmxpc3RIdSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdEh1Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19