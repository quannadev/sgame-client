
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9VSVNpbmJhZEJvbnVzLmpzIl0sIm5hbWVzIjpbIkhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGFyYWN0ZXIiLCJzcCIsIlNrZWxldG9uIiwibGJIZVNvTmhhbiIsIkxhYmVsIiwibGJUaW1lIiwibGJMdW90Qm9jIiwibGJNb25leVdpbiIsInRvdGFsU2VsZWN0IiwidG90YWxUaW1lIiwicmVzdWx0Qm9udXMiLCJOb2RlIiwidm9uZ1Ryb25Ob2RlIiwib25FbmFibGUiLCJfZGF0YSIsImxlbmd0aCIsInN0cmluZyIsInNjaGVkdWxlIiwiY291bnRUaW1lIiwicXVheSIsInJvdGF0ZUJ5IiwiYWN0aW9uUXVheSIsInJlcGVhdEZvcmV2ZXIiLCJydW5BY3Rpb24iLCJ1bnNjaGVkdWxlIiwiZXZlbnRDbG9zZSIsInNob3dNb25leVdpbiIsInNlbGYiLCJhY3RpdmUiLCJtb25leVdpbiIsImkiLCJub2RlIiwibnVtYmVyVG8iLCJzZXRUaW1lb3V0IiwiZXZlbnRTZWxlY3QiLCJldmVudCIsImRhdGEiLCJ0YXJnZXQiLCJnZXRDaGlsZEJ5TmFtZSIsImlkbGUiLCJzZXRBbmltYXRpb24iLCJzZXRUcmFja0NvbXBsZXRlTGlzdGVuZXIiLCJzdG9wQWN0aW9uIiwiZ2V0Q29tcG9uZW50IiwiYmluZCIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtDLEVBQUUsQ0FBQ0MsUUFEVDtBQUVSQyxJQUFBQSxVQUFVLEVBQUlQLEVBQUUsQ0FBQ1EsS0FGVDtBQUdSQyxJQUFBQSxNQUFNLEVB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LFVBQWpDO0FBQ0g7O0FBQ0QsZUFBS2YsU0FBTCxDQUFlVSxNQUFmLEdBQTBCLEtBQUtSLFdBQS9COztBQUNBLGNBQUksS0FBS0EsV0FBTCxJQUFvQixDQUF4QixFQUEwQjtBQUN0QixpQkFBS2tCLFlBQUw7QUFDSDtBQUNKLFNBckI0QyxDQXFCM0NrQixJQXJCMkMsQ0FxQnRDLElBckJzQyxDQUE3QztBQXNCSDtBQUNKO0FBQ0osR0EzRUk7QUE0RUxuQixFQUFBQSxVQTVFSyx3QkE0RVE7QUFDVCxTQUFLb0IsSUFBTDtBQUNIO0FBOUVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBIZWxwZXIgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNoYXJhY3RlciAgIDogc3AuU2tlbGV0b24sXG4gICAgICAgIGxiSGVTb05oYW4gIDogY2MuTGFiZWwsXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTHVvdEJvYyAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTW9uZXlXaW4gIDogY2MuTGFiZWwsXG4gICAgICAgIHRvdGFsU2VsZWN0IDogMCxcbiAgICAgICAgdG90YWxUaW1lICAgOiAxNSxcbiAgICAgICAgcmVzdWx0Qm9udXMgOiBjYy5Ob2RlLFxuICAgICAgICB2b25nVHJvbk5vZGU6IGNjLk5vZGUsXG4gICAgfSxcbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIHRoaXMudG90YWxUaW1lICAgICAgICAgID0gMzA7XG4gICAgICAgIHRoaXMudG90YWxTZWxlY3QgICAgICAgID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICAgIC8vIHRoaXMubGJIZVNvTmhhbi5zdHJpbmcgID0gXCJ4XCIrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMwKTtcbiAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IHRoaXMudG90YWxUaW1lO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRUaW1lLCAxKTtcbiAgICAgICAgbGV0IHF1YXkgPSBjYy5yb3RhdGVCeSgyMCwgMzYwKTtcbiAgICAgICAgdGhpcy5hY3Rpb25RdWF5ID0gcXVheS5yZXBlYXRGb3JldmVyKCk7XG4gICAgICAgIHRoaXMudm9uZ1Ryb25Ob2RlLnJ1bkFjdGlvbih0aGlzLmFjdGlvblF1YXkpO1xuICAgIH0sXG4gICAgY291bnRUaW1lKCkge1xuICAgICAgICB0aGlzLnRvdGFsVGltZS0tO1xuICAgICAgICBpZiAoIHRoaXMudG90YWxUaW1lIDwgMSl7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5ldmVudENsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSB0aGlzLnRvdGFsVGltZTtcbiAgICB9LFxuICAgIHNob3dNb25leVdpbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLnJlc3VsdEJvbnVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBtb25leVdpbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBtb25leVdpbiArPSB0aGlzLl9kYXRhW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJNb25leVdpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIDAgLG1vbmV5V2luLCAxMjAwLCB0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudENsb3NlKCk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBldmVudFNlbGVjdChldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImRhdWhvaVwiKS5hY3RpdmUpe1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxTZWxlY3QgPiAwKXtcbiAgICAgICAgICAgICAgICBsZXQgaWRsZSA9IHRoaXMuY2hhcmFjdGVyLnNldEFuaW1hdGlvbigwLCBcIlBoaVRpZXVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldFRyYWNrQ29tcGxldGVMaXN0ZW5lcihpZGxlLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52b25nVHJvbk5vZGUuc3RvcEFjdGlvbih0aGlzLmFjdGlvblF1YXkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsU2VsZWN0LS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW3RoaXMudG90YWxTZWxlY3RdID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiZGF1aG9pXCIpLmFjdGl2ZSAgID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0cnVvdFwiKS5hY3RpdmUgICAgID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5zZXRBbmltYXRpb24oMCwgXCJUaGFuZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIZWxwZXIubnVtYmVyVG8oZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwibGJfbW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgMCAsIHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0sIDEzMDAsIHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZvbmdUcm9uTm9kZS5ydW5BY3Rpb24odGhpcy5hY3Rpb25RdWF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImRhdWhvaVwiKS5hY3RpdmUgICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwidHJ1b3RcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52b25nVHJvbk5vZGUucnVuQWN0aW9uKHRoaXMuYWN0aW9uUXVheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbFNlbGVjdCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbmV5V2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudENsb3NlKCkge1xuICAgICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG59KTtcbiJdfQ==