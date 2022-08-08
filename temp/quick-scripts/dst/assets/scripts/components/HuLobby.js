
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/HuLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58b69emvVtCYYFPfXmaEGra', 'HuLobby');
// scripts/components/HuLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    content: cc.Node,
    betLevel: "1l"
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  updateJackpot: function updateJackpot() {
    for (var i = 0; i < this.content._children.length; i++) {
      var game = this.content._children[i];
      var key = game.name + this.betLevel;

      if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(key);

        if (variableJackpot) {
          var lb_hu = game.getChildByName("lb_money").getComponent(cc.Label);
          var jackpot = variableJackpot.value;
          var current_lb_jackpot = lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
        }
      }
    }
  },
  eventToggleBetMoney: function eventToggleBetMoney(event) {
    this.betLevel = event.node.name;
    this.updateJackpot();
    mm.audio.playButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvSHVMb2JieS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsImJldExldmVsIiwib25Mb2FkIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90IiwiaSIsIl9jaGlsZHJlbiIsImxlbmd0aCIsImdhbWUiLCJrZXkiLCJuYW1lIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJsYl9odSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJqYWNrcG90IiwidmFsdWUiLCJjdXJyZW50X2xiX2phY2twb3QiLCJzdHJpbmciLCJzcGxpdCIsImpvaW4iLCJjdXJyZW50SHUiLCJwYXJzZUZsb2F0IiwiVXRpbHMiLCJudW1iZXJUbyIsImV2ZW50VG9nZ2xlQmV0TW9uZXkiLCJldmVudCIsIm5vZGUiLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0ssSUFESjtBQUVSQyxJQUFBQSxRQUFRLEVBQUU7QUFGRixHQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0c7QUFDSixTQUFLQyxRQUFMLENBQWMsS0FBS0MsYUFBbkIsRUFBa0MsQ0FBbEM7QUFDQSxTQUFLQSxhQUFMO0FBQ0gsR0FWSTtBQVdMQSxFQUFBQSxhQVhLLDJCQVdVO0FBQ1gsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS04sT0FBTCxDQUFhTyxTQUFiLENBQXVCQyxNQUExQyxFQUFpREYsQ0FBQyxFQUFsRCxFQUFxRDtBQUNqRCxVQUFJRyxJQUFJLEdBQUcsS0FBS1QsT0FBTCxDQUFhTyxTQUFiLENBQXVCRCxDQUF2QixDQUFYO0FBQ0EsVUFBSUksR0FBRyxHQUFHRCxJQUFJLENBQUNFLElBQUwsR0FBVSxLQUFLVCxRQUF6Qjs7QUFDQSxVQUFHVSxXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsTUFBN0MsRUFBb0Q7QUFDaEQsWUFBSUMsZUFBZSxHQUFHSixXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsTUFBMUMsQ0FBaURFLFdBQWpELENBQTZEUCxHQUE3RCxDQUF0Qjs7QUFDQSxZQUFHTSxlQUFILEVBQW1CO0FBQ2YsY0FBSUUsS0FBSyxHQUFHVCxJQUFJLENBQUNVLGNBQUwsQ0FBb0IsVUFBcEIsRUFBZ0NDLFlBQWhDLENBQTZDeEIsRUFBRSxDQUFDeUIsS0FBaEQsQ0FBWjtBQUNBLGNBQUlDLE9BQU8sR0FBR04sZUFBZSxDQUFDTyxLQUE5QjtBQUNBLGNBQUlDLGtCQUFrQixHQUFHTixLQUFLLENBQUNPLE1BQS9CO0FBQ0FELFVBQUFBLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW1DLEVBQW5DLENBQXJCO0FBQ0EsY0FBSUMsU0FBUyxHQUFHQyxVQUFVLENBQUNMLGtCQUFELENBQTFCO0FBQ0FNLFVBQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlYixLQUFmLEVBQXNCVSxTQUF0QixFQUFpQ04sT0FBakMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDSDtBQUNKO0FBQ0o7QUFHSixHQTdCSTtBQThCTFUsRUFBQUEsbUJBOUJLLCtCQThCZUMsS0E5QmYsRUE4QnFCO0FBQ3RCLFNBQUsvQixRQUFMLEdBQWdCK0IsS0FBSyxDQUFDQyxJQUFOLENBQVd2QixJQUEzQjtBQUNBLFNBQUtOLGFBQUw7QUFDQThCLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0g7QUFsQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXG4gICAgICAgIGJldExldmVsOiBcIjFsXCJcbiAgICB9LFxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xuICAgIH0sXG4gICAgdXBkYXRlSmFja3BvdCgpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Ll9jaGlsZHJlbi5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBnYW1lID0gdGhpcy5jb250ZW50Ll9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBnYW1lLm5hbWUrdGhpcy5iZXRMZXZlbDtcbiAgICAgICAgICAgIGlmKFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZil7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlSmFja3BvdCA9IFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpO1xuICAgICAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYl9odSA9IGdhbWUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfbGJfamFja3BvdCA9IGxiX2h1LnN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sYl9qYWNrcG90ID0gY3VycmVudF9sYl9qYWNrcG90LnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEh1ID0gcGFyc2VGbG9hdChjdXJyZW50X2xiX2phY2twb3QpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyhsYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfSxcbiAgICBldmVudFRvZ2dsZUJldE1vbmV5KGV2ZW50KXtcbiAgICAgICAgdGhpcy5iZXRMZXZlbCA9IGV2ZW50Lm5vZGUubmFtZTtcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICB9XG59KTtcbiJdfQ==