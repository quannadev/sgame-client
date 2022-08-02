
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/UISinbadBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4ec0rTDwJKGKQqtws24dkN', 'UISinbadBonus');
// scripts/sinbad/UISinbadBonus.js

"use strict";

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    character: sp.Skeleton,
    lbHeSoNhan: cc.Label,
    lbTime: cc.Label,
    lbLuotBoc: cc.Label,
    lbMoneyWin: cc.Label,
    totalSelect: 0,
    totalTime: 15,
    resultBonus: cc.Node,
    vongTronNode: cc.Node
  },
  onEnable: function onEnable() {
    this.totalTime = 30;
    this.totalSelect = this._data.length; // this.lbHeSoNhan.string  = "x"+Math.floor(Math.random()*30);

    this.lbLuotBoc.string = this.totalSelect;
    this.lbTime.string = this.totalTime;
    this.schedule(this.countTime, 1);
    var quay = cc.rotateBy(20, 360);
    this.actionQuay = quay.repeatForever();
    this.vongTronNode.runAction(this.actionQuay);
  },
  countTime: function countTime() {
    this.totalTime--;

    if (this.totalTime < 1) {
      this.unschedule(this.countTime);
      this.eventClose();
    }

    this.lbTime.string = this.totalTime;
  },
  showMoneyWin: function showMoneyWin() {
    var self = this;
    self.resultBonus.active = true;
    var moneyWin = 0;

    for (var i = 0; i < this._data.length; i++) {
      moneyWin += this._data[i];
    }

    this.lbMoneyWin.node.active = true;
    Helper.numberTo(this.lbMoneyWin, 0, moneyWin, 1200, true, function () {
      setTimeout(function () {
        self.eventClose();
      }, 2000);
    });
  },
  eventSelect: function eventSelect(event, data) {
    if (event.target.getChildByName("dauhoi").active) {
      if (this.totalSelect > 0) {
        var idle = this.character.setAnimation(0, "PhiTieu", false);
        this.character.setTrackCompleteListener(idle, function () {
          this.vongTronNode.stopAction(this.actionQuay);
          this.totalSelect--;

          if (this._data[this.totalSelect] > 0) {
            event.target.getChildByName("lb_money").active = true;
            event.target.getChildByName("dauhoi").active = false;
            event.target.getChildByName("truot").active = false;
            this.character.setAnimation(0, "Thang", false);
            Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0, this._data[this.totalSelect], 1300, true, function () {
              this.vongTronNode.runAction(this.actionQuay);
            }.bind(this));
          } else {
            event.target.getChildByName("dauhoi").active = false;
            event.target.getChildByName("truot").active = true;
            this.character.setAnimation(0, "Idle", false);
            this.vongTronNode.runAction(this.actionQuay);
          }

          this.lbLuotBoc.string = this.totalSelect;

          if (this.totalSelect == 0) {
            this.showMoneyWin();
          }
        }.bind(this));
      }
    }
  },
  eventClose: function eventClose() {
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxVSVNpbmJhZEJvbnVzLmpzIl0sIm5hbWVzIjpbIkhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGFyYWN0ZXIiLCJzcCIsIlNrZWxldG9uIiwibGJIZVNvTmhhbiIsIkxhYmVsIiwibGJUaW1lIiwibGJMdW90Qm9jIiwibGJNb25leVdpbiIsInRvdGFsU2VsZWN0IiwidG90YWxUaW1lIiwicmVzdWx0Qm9udXMiLCJOb2RlIiwidm9uZ1Ryb25Ob2RlIiwib25FbmFibGUiLCJfZGF0YSIsImxlbmd0aCIsInN0cmluZyIsInNjaGVkdWxlIiwiY291bnRUaW1lIiwicXVheSIsInJvdGF0ZUJ5IiwiYWN0aW9uUXVheSIsInJlcGVhdEZvcmV2ZXIiLCJydW5BY3Rpb24iLCJ1bnNjaGVkdWxlIiwiZXZlbnRDbG9zZSIsInNob3dNb25leVdpbiIsInNlbGYiLCJhY3RpdmUiLCJtb25leVdpbiIsImkiLCJub2RlIiwibnVtYmVyVG8iLCJzZXRUaW1lb3V0IiwiZXZlbnRTZWxlY3QiLCJldmVudCIsImRhdGEiLCJ0YXJnZXQiLCJnZXRDaGlsZEJ5TmFtZSIsImlkbGUiLCJzZXRBbmltYXRpb24iLCJzZXRUcmFja0NvbXBsZXRlTGlzdGVuZXIiLCJzdG9wQWN0aW9uIiwiZ2V0Q29tcG9uZW50IiwiYmluZCIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtDLEVBQUUsQ0FBQ0MsUUFEVDtBQUVSQyxJQUFBQSxVQUFVLEVBQUlQLEVBQUUsQ0FBQ1EsS0FGVDtBQUdSQyxJQUFBQSxNQUFN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QUtGLFVBQWpDO0FBQ0g7O0FBQ0QsZUFBS2YsU0FBTCxDQUFlVSxNQUFmLEdBQTBCLEtBQUtSLFdBQS9COztBQUNBLGNBQUksS0FBS0EsV0FBTCxJQUFvQixDQUF4QixFQUEwQjtBQUN0QixpQkFBS2tCLFlBQUw7QUFDSDtBQUNKLFNBckI0QyxDQXFCM0NrQixJQXJCMkMsQ0FxQnRDLElBckJzQyxDQUE3QztBQXNCSDtBQUNKO0FBQ0osR0EzRUk7QUE0RUxuQixFQUFBQSxVQTVFSyx3QkE0RVE7QUFDVCxTQUFLb0IsSUFBTDtBQUNIO0FBOUVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBIZWxwZXIgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjaGFyYWN0ZXIgICA6IHNwLlNrZWxldG9uLFxyXG4gICAgICAgIGxiSGVTb05oYW4gIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYkx1b3RCb2MgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTW9uZXlXaW4gIDogY2MuTGFiZWwsXHJcbiAgICAgICAgdG90YWxTZWxlY3QgOiAwLFxyXG4gICAgICAgIHRvdGFsVGltZSAgIDogMTUsXHJcbiAgICAgICAgcmVzdWx0Qm9udXMgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHZvbmdUcm9uTm9kZTogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgICAgICAgICAgPSAzMDtcclxuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ICAgICAgICA9IHRoaXMuX2RhdGEubGVuZ3RoO1xyXG4gICAgICAgIC8vIHRoaXMubGJIZVNvTmhhbi5zdHJpbmcgID0gXCJ4XCIrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMwKTtcclxuICAgICAgICB0aGlzLmxiTHVvdEJvYy5zdHJpbmcgICA9IHRoaXMudG90YWxTZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSB0aGlzLnRvdGFsVGltZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRUaW1lLCAxKTtcclxuICAgICAgICBsZXQgcXVheSA9IGNjLnJvdGF0ZUJ5KDIwLCAzNjApO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUXVheSA9IHF1YXkucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIHRoaXMudm9uZ1Ryb25Ob2RlLnJ1bkFjdGlvbih0aGlzLmFjdGlvblF1YXkpO1xyXG4gICAgfSxcclxuICAgIGNvdW50VGltZSgpIHtcclxuICAgICAgICB0aGlzLnRvdGFsVGltZS0tO1xyXG4gICAgICAgIGlmICggdGhpcy50b3RhbFRpbWUgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRUaW1lKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudENsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gdGhpcy50b3RhbFRpbWU7XHJcbiAgICB9LFxyXG4gICAgc2hvd01vbmV5V2luKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnJlc3VsdEJvbnVzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IG1vbmV5V2luID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBtb25leVdpbiArPSB0aGlzLl9kYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxiTW9uZXlXaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIDAgLG1vbmV5V2luLCAxMjAwLCB0cnVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuZXZlbnRDbG9zZSgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNlbGVjdChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZGF1aG9pXCIpLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsU2VsZWN0ID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRsZSA9IHRoaXMuY2hhcmFjdGVyLnNldEFuaW1hdGlvbigwLCBcIlBoaVRpZXVcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuc2V0VHJhY2tDb21wbGV0ZUxpc3RlbmVyKGlkbGUsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudm9uZ1Ryb25Ob2RlLnN0b3BBY3Rpb24odGhpcy5hY3Rpb25RdWF5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsU2VsZWN0LS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwibGJfbW9uZXlcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZGF1aG9pXCIpLmFjdGl2ZSAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInRydW90XCIpLmFjdGl2ZSAgICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIuc2V0QW5pbWF0aW9uKDAsIFwiVGhhbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBIZWxwZXIubnVtYmVyVG8oZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwibGJfbW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgMCAsIHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0sIDEzMDAsIHRydWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudm9uZ1Ryb25Ob2RlLnJ1bkFjdGlvbih0aGlzLmFjdGlvblF1YXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZGF1aG9pXCIpLmFjdGl2ZSAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcInRydW90XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZvbmdUcm9uTm9kZS5ydW5BY3Rpb24odGhpcy5hY3Rpb25RdWF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsU2VsZWN0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb25leVdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==