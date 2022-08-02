
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/UITaiXiuSessionDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e065/by1RDmqfIDXx/zqas', 'UITaiXiuSessionDetail');
// scripts/taixiu/UITaiXiuSessionDetail.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbPhien: cc.Label,
    lbNgay: cc.Label,
    taiWin: cc.Node,
    xiuWin: cc.Node,
    lightWin: cc.Node,
    lbResult: cc.Label,
    listDice: [cc.SpriteFrame],
    listDiceResultNode: [cc.Sprite],
    lbTaiTongDat: cc.Label,
    lbXiuTongDat: cc.Label,
    listTai: Listview,
    listXiu: Listview,
    txCurrentSession: 0
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }

    this.txCurrentSession = this._data;
    this.getDataSession();
  },
  init: function init(detailSession) {
    var self = this;
    this.lbPhien.string = "#" + this.txCurrentSession;
    this.lbTaiTongDat.string = Utils.addDotToNumber(detailSession.totalTai);
    this.lbXiuTongDat.string = Utils.addDotToNumber(detailSession.totalXiu);
    var total = 0;
    Promise.all(this.listDiceResultNode.map(function (diceItem, index) {
      diceItem.spriteFrame = self.listDice[detailSession.dices[index] - 1];
      total += detailSession.dices[index];
    })).then(function () {
      self.lbResult.string = " =" + total + " ";

      if (total <= 10) {
        //xiu
        self.lightWin.position = self.xiuWin.position;
      } else {
        //Tai
        self.lightWin.position = self.taiWin.position;
      }

      var a1 = cc.fadeOut(0.1);
      var a2 = cc.fadeIn(0.1);
      self.lightWin.active = true;
      self.lightWin.runAction(cc.repeatForever(cc.sequence(a1, a2)));
    });
    this.arrUserBetTai = detailSession.arrUserBetTai;
    this.listTai.numItems = this.arrUserBetTai.length;
    this.arrUserBetXiu = detailSession.arrUserBetXiu;
    this.listXiu.numItems = this.arrUserBetXiu.length;
    var day = null;
    if (detailSession.arrUserBetXiu.length > 0) day = detailSession.arrUserBetXiu[0];else if (detailSession.arrUserBetTai.length > 0) day = detailSession.arrUserBetTai[0];

    if (day != null) {
      var dayTime = day.time.split(" ")[0];
      var dayTimeArr = dayTime.split("-");
      this.lbNgay.string = dayTimeArr[2] + "/" + dayTimeArr[1] + "/" + dayTimeArr[0];
    }

    mm.Loading.hide();
  },
  onDisable: function onDisable() {
    this.lightWin.stopAllActions();
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRenderTai: function onListRenderTai(item, idx) {
    var data = this.arrUserBetTai[idx];
    item.getComponent('TXSessionDetail').init(data, idx);
  },
  onListRenderXiu: function onListRenderXiu(item, idx) {
    var data = this.arrUserBetXiu[idx];
    item.getComponent('TXSessionDetail').init(data, idx);
  },
  eventBackSession: function eventBackSession() {
    this.txCurrentSession = parseInt(this.txCurrentSession) - 1;
    this.getDataSession();
  },
  eventNextSession: function eventNextSession() {
    this.txCurrentSession = parseInt(this.txCurrentSession) + 1;
    this.getDataSession();
  },
  getDataSession: function getDataSession() {
    mm.Loading.show();
    var sessionDetailRequest = new TaiXiuRequest.SessionDetailRequest();
    sessionDetailRequest.setSessionId(parseInt(this.txCurrentSession));
    SmartFoxSDK.TaiXiuController.ZoneInstance.send(sessionDetailRequest.toSRequest());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxVSVRhaVhpdVNlc3Npb25EZXRhaWwuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJQaGllbiIsIkxhYmVsIiwibGJOZ2F5IiwidGFpV2luIiwiTm9kZSIsInhpdVdpbiIsImxpZ2h0V2luIiwibGJSZXN1bHQiLCJsaXN0RGljZSIsIlNwcml0ZUZyYW1lIiwibGlzdERpY2VSZXN1bHROb2RlIiwiU3ByaXRlIiwibGJUYWlUb25nRGF0IiwibGJYaXVUb25nRGF0IiwibGlzdFRhaSIsImxpc3RYaXUiLCJ0eEN1cnJlbnRTZXNzaW9uIiwib25FbmFibGUiLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCIsIl9kYXRhIiwiZ2V0RGF0YVNlc3Npb24iLCJpbml0IiwiZGV0YWlsU2Vzc2lvbiIsInNlbGYiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwidG90YWxUYWkiLCJ0b3RhbFhpdSIsInRvdGFsIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImRpY2VJdGVtIiwiaW5kZXgiLCJzcHJpdGVGcmFtZSIsImRpY2VzIiwidGhlbiIsInBvc2l0aW9uIiwiYTEiLCJmYWRlT3V0IiwiYTIiLCJmYWRlSW4iLCJhY3RpdmUiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJhcnJVc2VyQmV0VGFpIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJhcnJVc2VyQmV0WGl1IiwiZGF5IiwiZGF5VGltZSIsInRpbWUiLCJzcGxpdCIsImRheVRpbWVBcnIiLCJtbSIsIkxvYWRpbmciLCJoaWRlIiwib25EaXNhYmxlIiwic3RvcEFsbEFjdGlvbnMiLCJldmVudENsb3NlIiwiYmFjayIsIm9uTGlzdFJlbmRlclRhaSIsIml0ZW0iLCJpZHgiLCJkYXRhIiwiZ2V0Q29tcG9uZW50Iiwib25MaXN0UmVuZGVyWGl1IiwiZXZlbnRCYWNrU2Vzc2lvbiIsInBhcnNlSW50IiwiZXZlbnROZXh0U2Vzc2lvbiIsInNob3ciLCJzZXNzaW9uRGV0YWlsUmVxdWVzdCIsIlRhaVhpdVJlcXVlc3QiLCJTZXNzaW9uRGV0YWlsUmVxdWVzdCIsInNldFNlc3Npb25JZCIsIlNtYXJ0Rm94U0RLIiwiVGFpWGl1Q29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFHSixFQUFFLENBQUNLLEtBREw7QUFFUkMsSUFBQUEsTUFBTSxFQUFJTixFQUFFLENBQUNLLEtBRkw7QUFHUkUsSUFBQUEsTUFBTSxFQUFJUCxFQUFFLENBQUNRLElBSEw7QUFJUkMsSUFBQUEsTUFBTSxFQUFJVCxFQUFFLENBQUNRLElBSkw7QUFLUkUsSUFBQUEsUUFBUSxFQUFFVixFQUFFLENBQUNRLElBTEw7QUFNUkcsSUFBQUEsUUFBUSxFQUFFWCxFQUFFLENBQUNLLEtBTkw7QUFPUk8sSUFBQUEsUUFBUSxFQUFjLENBQUNaLEVBQUUsQ0FBQ2EsV0FBSixDQVBkO0FBUVJDLElBQUFBLGtCQUFrQixFQUFJLENBQUNkLEVBQUUsQ0FBQ2UsTUFBSixDQVJkO0FBU1JDLElBQUFBLFlBQVksRUFBVWhCLEVBQUUsQ0FBQ0ssS0FUakI7QUFVUlksSUFBQUEsWUFBWSxFQUFVakIsRUFBRSxDQUFDSyxLQVZqQjtBQVdSYSxJQUFBQSxPQUFPLEVBQWVwQixRQVhkO0FBWVJxQixJQUFBQSxPQUFPLEVBQWVyQixRQVpkO0FBYVJzQixJQUFBQSxnQkFBZ0IsRUFBTTtBQWJkLEdBSFA7QUFrQkxDLEVBQUFBLFFBbEJLLHNCQWtCTTtBQUNQLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CdkIsRUFBRSxDQUFDd0IsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CdkIsRUFBRSxDQUFDd0IsVUFBdEI7QUFDSDs7QUFDRCxTQUFLSixnQkFBTCxHQUEyQixLQUFLSyxLQUFoQztBQUNBLFNBQUtDLGNBQUw7QUFDSCxHQXhCSTtBQXlCTEMsRUFBQUEsSUF6QkssZ0JBeUJBQyxhQXpCQSxFQXlCYztBQUNmLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS3pCLE9BQUwsQ0FBYTBCLE1BQWIsR0FBNEIsTUFBSSxLQUFLVixnQkFBckM7QUFDQSxTQUFLSixZQUFMLENBQWtCYyxNQUFsQixHQUE0QkMsS0FBSyxDQUFDQyxjQUFOLENBQXFCSixhQUFhLENBQUNLLFFBQW5DLENBQTVCO0FBQ0EsU0FBS2hCLFlBQUwsQ0FBa0JhLE1BQWxCLEdBQTRCQyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJKLGFBQWEsQ0FBQ00sUUFBbkMsQ0FBNUI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLdkIsa0JBQUwsQ0FBd0J3QixHQUF4QixDQUE0QixVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUM3REQsTUFBQUEsUUFBUSxDQUFDRSxXQUFULEdBQXVCWixJQUFJLENBQUNqQixRQUFMLENBQWNnQixhQUFhLENBQUNjLEtBQWQsQ0FBb0JGLEtBQXBCLElBQTJCLENBQXpDLENBQXZCO0FBQ0FMLE1BQUFBLEtBQUssSUFBSVAsYUFBYSxDQUFDYyxLQUFkLENBQW9CRixLQUFwQixDQUFUO0FBQ0gsS0FIVyxDQUFaLEVBR0lHLElBSEosQ0FHUyxZQUFZO0FBQ2pCZCxNQUFBQSxJQUFJLENBQUNsQixRQUFMLENBQWNtQixNQUFkLEdBQXVCLE9BQUtLLEtBQUwsR0FBVyxHQUFsQzs7QUFDQSxVQUFJQSxLQUFLLElBQUcsRUFBWixFQUFlO0FBQUM7QUFDWk4sUUFBQUEsSUFBSSxDQUFDbkIsUUFBTCxDQUFja0MsUUFBZCxHQUF5QmYsSUFBSSxDQUFDcEIsTUFBTCxDQUFZbUMsUUFBckM7QUFDSCxPQUZELE1BRUs7QUFBQztBQUNGZixRQUFBQSxJQUFJLENBQUNuQixRQUFMLENBQWNrQyxRQUFkLEdBQXlCZixJQUFJLENBQUN0QixNQUFMLENBQVlxQyxRQUFyQztBQUNIOztBQUNELFVBQUlDLEVBQUUsR0FBRzdDLEVBQUUsQ0FBQzhDLE9BQUgsQ0FBVyxHQUFYLENBQVQ7QUFDQSxVQUFJQyxFQUFFLEdBQUcvQyxFQUFFLENBQUNnRCxNQUFILENBQVUsR0FBVixDQUFUO0FBQ0FuQixNQUFBQSxJQUFJLENBQUNuQixRQUFMLENBQWN1QyxNQUFkLEdBQXVCLElBQXZCO0FBQ0FwQixNQUFBQSxJQUFJLENBQUNuQixRQUFMLENBQWN3QyxTQUFkLENBQXdCbEQsRUFBRSxDQUFDbUQsYUFBSCxDQUFpQm5ELEVBQUUsQ0FBQ29ELFFBQUgsQ0FBWVAsRUFBWixFQUFnQkUsRUFBaEIsQ0FBakIsQ0FBeEI7QUFDSCxLQWREO0FBZUEsU0FBS00sYUFBTCxHQUFxQnpCLGFBQWEsQ0FBQ3lCLGFBQW5DO0FBQ0EsU0FBS25DLE9BQUwsQ0FBYW9DLFFBQWIsR0FBd0IsS0FBS0QsYUFBTCxDQUFtQkUsTUFBM0M7QUFFQSxTQUFLQyxhQUFMLEdBQXFCNUIsYUFBYSxDQUFDNEIsYUFBbkM7QUFDQSxTQUFLckMsT0FBTCxDQUFhbUMsUUFBYixHQUF3QixLQUFLRSxhQUFMLENBQW1CRCxNQUEzQztBQUNBLFFBQUlFLEdBQUcsR0FBRyxJQUFWO0FBQ0EsUUFBSTdCLGFBQWEsQ0FBQzRCLGFBQWQsQ0FBNEJELE1BQTVCLEdBQXFDLENBQXpDLEVBQ0lFLEdBQUcsR0FBRzdCLGFBQWEsQ0FBQzRCLGFBQWQsQ0FBNEIsQ0FBNUIsQ0FBTixDQURKLEtBRUssSUFBSTVCLGFBQWEsQ0FBQ3lCLGFBQWQsQ0FBNEJFLE1BQTVCLEdBQXFDLENBQXpDLEVBQ0RFLEdBQUcsR0FBRzdCLGFBQWEsQ0FBQ3lCLGFBQWQsQ0FBNEIsQ0FBNUIsQ0FBTjs7QUFDSixRQUFJSSxHQUFHLElBQUksSUFBWCxFQUFnQjtBQUNaLFVBQUlDLE9BQU8sR0FBSUQsR0FBRyxDQUFDRSxJQUFKLENBQVNDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQWY7QUFDQSxVQUFJQyxVQUFVLEdBQUdILE9BQU8sQ0FBQ0UsS0FBUixDQUFjLEdBQWQsQ0FBakI7QUFDQSxXQUFLdEQsTUFBTCxDQUFZd0IsTUFBWixHQUE2QitCLFVBQVUsQ0FBQyxDQUFELENBQVYsR0FBYyxHQUFkLEdBQWtCQSxVQUFVLENBQUMsQ0FBRCxDQUE1QixHQUFnQyxHQUFoQyxHQUFvQ0EsVUFBVSxDQUFDLENBQUQsQ0FBM0U7QUFDSDs7QUFDREMsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdDLElBQVg7QUFDSCxHQTlESTtBQStETEMsRUFBQUEsU0EvREssdUJBK0RPO0FBQ1IsU0FBS3ZELFFBQUwsQ0FBY3dELGNBQWQ7QUFDSCxHQWpFSTtBQW1FTEMsRUFBQUEsVUFuRUssd0JBbUVRO0FBQ1QsU0FBS0MsSUFBTDtBQUNILEdBckVJO0FBc0VMQyxFQUFBQSxlQXRFSywyQkFzRVdDLElBdEVYLEVBc0VpQkMsR0F0RWpCLEVBc0VzQjtBQUN2QixRQUFJQyxJQUFJLEdBQUcsS0FBS25CLGFBQUwsQ0FBbUJrQixHQUFuQixDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUM5QyxJQUFyQyxDQUEwQzZDLElBQTFDLEVBQWdERCxHQUFoRDtBQUNILEdBekVJO0FBMkVMRyxFQUFBQSxlQTNFSywyQkEyRVdKLElBM0VYLEVBMkVpQkMsR0EzRWpCLEVBMkVzQjtBQUN2QixRQUFJQyxJQUFJLEdBQUcsS0FBS2hCLGFBQUwsQ0FBbUJlLEdBQW5CLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQzlDLElBQXJDLENBQTBDNkMsSUFBMUMsRUFBZ0RELEdBQWhEO0FBQ0gsR0E5RUk7QUFnRkxJLEVBQUFBLGdCQWhGSyw4QkFnRmM7QUFDZixTQUFLdkQsZ0JBQUwsR0FBNkJ3RCxRQUFRLENBQUMsS0FBS3hELGdCQUFOLENBQVIsR0FBa0MsQ0FBL0Q7QUFDQSxTQUFLTSxjQUFMO0FBQ0gsR0FuRkk7QUFxRkxtRCxFQUFBQSxnQkFyRkssOEJBcUZjO0FBQ2YsU0FBS3pELGdCQUFMLEdBQTZCd0QsUUFBUSxDQUFDLEtBQUt4RCxnQkFBTixDQUFSLEdBQWtDLENBQS9EO0FBQ0EsU0FBS00sY0FBTDtBQUNILEdBeEZJO0FBeUZMQSxFQUFBQSxjQXpGSyw0QkF5Rlc7QUFDWm9DLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXZSxJQUFYO0FBQ0EsUUFBSUMsb0JBQW9CLEdBQUcsSUFBSUMsYUFBYSxDQUFDQyxvQkFBbEIsRUFBM0I7QUFDQUYsSUFBQUEsb0JBQW9CLENBQUNHLFlBQXJCLENBQWtDTixRQUFRLENBQUMsS0FBS3hELGdCQUFOLENBQTFDO0FBQ0ErRCxJQUFBQSxXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsSUFBMUMsQ0FBK0NQLG9CQUFvQixDQUFDUSxVQUFyQixFQUEvQztBQUNIO0FBOUZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJQaGllbiA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTmdheSAgOiBjYy5MYWJlbCxcclxuICAgICAgICB0YWlXaW4gIDogY2MuTm9kZSxcclxuICAgICAgICB4aXVXaW4gIDogY2MuTm9kZSxcclxuICAgICAgICBsaWdodFdpbjogY2MuTm9kZSxcclxuICAgICAgICBsYlJlc3VsdDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGlzdERpY2UgICAgICAgICAgICA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgbGlzdERpY2VSZXN1bHROb2RlICA6IFtjYy5TcHJpdGVdLFxyXG4gICAgICAgIGxiVGFpVG9uZ0RhdCAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlhpdVRvbmdEYXQgICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGlzdFRhaSAgICAgICAgICAgICA6IExpc3R2aWV3LFxyXG4gICAgICAgIGxpc3RYaXUgICAgICAgICAgICAgOiBMaXN0dmlldyxcclxuICAgICAgICB0eEN1cnJlbnRTZXNzaW9uICAgIDogMFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50eEN1cnJlbnRTZXNzaW9uICAgID0gdGhpcy5fZGF0YTtcclxuICAgICAgICB0aGlzLmdldERhdGFTZXNzaW9uKCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdChkZXRhaWxTZXNzaW9uKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sYlBoaWVuLnN0cmluZyAgICAgICA9IFwiI1wiK3RoaXMudHhDdXJyZW50U2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmxiVGFpVG9uZ0RhdC5zdHJpbmcgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGV0YWlsU2Vzc2lvbi50b3RhbFRhaSk7XHJcbiAgICAgICAgdGhpcy5sYlhpdVRvbmdEYXQuc3RyaW5nICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRldGFpbFNlc3Npb24udG90YWxYaXUpO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0RGljZVJlc3VsdE5vZGUubWFwKGZ1bmN0aW9uKGRpY2VJdGVtLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGRpY2VJdGVtLnNwcml0ZUZyYW1lID0gc2VsZi5saXN0RGljZVtkZXRhaWxTZXNzaW9uLmRpY2VzW2luZGV4XS0xXTtcclxuICAgICAgICAgICAgdG90YWwgKz0gZGV0YWlsU2Vzc2lvbi5kaWNlc1tpbmRleF07XHJcbiAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmxiUmVzdWx0LnN0cmluZyA9IFwiID1cIit0b3RhbCtcIiBcIjtcclxuICAgICAgICAgICAgaWYgKHRvdGFsIDw9MTApey8veGl1XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxpZ2h0V2luLnBvc2l0aW9uID0gc2VsZi54aXVXaW4ucG9zaXRpb247XHJcbiAgICAgICAgICAgIH1lbHNley8vVGFpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmxpZ2h0V2luLnBvc2l0aW9uID0gc2VsZi50YWlXaW4ucG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGExID0gY2MuZmFkZU91dCgwLjEpO1xyXG4gICAgICAgICAgICBsZXQgYTIgPSBjYy5mYWRlSW4oMC4xKTtcclxuICAgICAgICAgICAgc2VsZi5saWdodFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZWxmLmxpZ2h0V2luLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGExLCBhMikpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFyclVzZXJCZXRUYWkgPSBkZXRhaWxTZXNzaW9uLmFyclVzZXJCZXRUYWk7XHJcbiAgICAgICAgdGhpcy5saXN0VGFpLm51bUl0ZW1zID0gdGhpcy5hcnJVc2VyQmV0VGFpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJVc2VyQmV0WGl1ID0gZGV0YWlsU2Vzc2lvbi5hcnJVc2VyQmV0WGl1O1xyXG4gICAgICAgIHRoaXMubGlzdFhpdS5udW1JdGVtcyA9IHRoaXMuYXJyVXNlckJldFhpdS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGRheSA9IG51bGw7XHJcbiAgICAgICAgaWYgKGRldGFpbFNlc3Npb24uYXJyVXNlckJldFhpdS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBkYXkgPSBkZXRhaWxTZXNzaW9uLmFyclVzZXJCZXRYaXVbMF07XHJcbiAgICAgICAgZWxzZSBpZiAoZGV0YWlsU2Vzc2lvbi5hcnJVc2VyQmV0VGFpLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIGRheSA9IGRldGFpbFNlc3Npb24uYXJyVXNlckJldFRhaVswXTtcclxuICAgICAgICBpZiAoZGF5ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBsZXQgZGF5VGltZSA9ICBkYXkudGltZS5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgICAgIGxldCBkYXlUaW1lQXJyID0gZGF5VGltZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIHRoaXMubGJOZ2F5LnN0cmluZyAgICAgICAgPSAgZGF5VGltZUFyclsyXStcIi9cIitkYXlUaW1lQXJyWzFdK1wiL1wiK2RheVRpbWVBcnJbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1tLkxvYWRpbmcuaGlkZSgpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0V2luLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyVGFpKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hcnJVc2VyQmV0VGFpW2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ1RYU2Vzc2lvbkRldGFpbCcpLmluaXQoZGF0YSwgaWR4KTtcclxuICAgIH0sXHJcblxyXG4gICAgb25MaXN0UmVuZGVyWGl1KGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hcnJVc2VyQmV0WGl1W2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ1RYU2Vzc2lvbkRldGFpbCcpLmluaXQoZGF0YSwgaWR4KTtcclxuICAgIH0sXHJcblxyXG4gICAgZXZlbnRCYWNrU2Vzc2lvbigpIHtcclxuICAgICAgICB0aGlzLnR4Q3VycmVudFNlc3Npb24gICAgICA9IHBhcnNlSW50KHRoaXMudHhDdXJyZW50U2Vzc2lvbikgLSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YVNlc3Npb24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgZXZlbnROZXh0U2Vzc2lvbigpIHtcclxuICAgICAgICB0aGlzLnR4Q3VycmVudFNlc3Npb24gICAgICA9IHBhcnNlSW50KHRoaXMudHhDdXJyZW50U2Vzc2lvbikgKyAxO1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YVNlc3Npb24oKTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhU2Vzc2lvbigpe1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIGxldCBzZXNzaW9uRGV0YWlsUmVxdWVzdCA9IG5ldyBUYWlYaXVSZXF1ZXN0LlNlc3Npb25EZXRhaWxSZXF1ZXN0KCk7XHJcbiAgICAgICAgc2Vzc2lvbkRldGFpbFJlcXVlc3Quc2V0U2Vzc2lvbklkKHBhcnNlSW50KHRoaXMudHhDdXJyZW50U2Vzc2lvbikpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQoc2Vzc2lvbkRldGFpbFJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=