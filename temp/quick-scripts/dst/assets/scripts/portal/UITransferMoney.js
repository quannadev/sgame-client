
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UITransferMoney.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a937EMmSVFOKP3XluYEeEw', 'UITransferMoney');
// scripts/portal/UITransferMoney.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    edit_user_re: cc.EditBox,
    edit_user_re_again: cc.EditBox,
    edit_money: cc.EditBox,
    edit_reason: cc.EditBox,
    DailyCK: cc.Node
  },
  onEnable: function onEnable() {
    var jsDailyCK = this.DailyCK.getComponent(this.DailyCK.name);
    jsDailyCK.addEventSelect(function (dataDaiLy) {
      this.updateDaiLyInfo(dataDaiLy.name);
    }.bind(this));

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  updateDaiLyInfo: function updateDaiLyInfo(username) {
    this.edit_user_re.string = username;
    this.edit_user_re_again.string = username;
  },
  clickTransferMoney: function clickTransferMoney(event) {
    mm.audio.playButton();

    if (this.edit_user_re.string == "") {
      mm.Toast.showToast(1, "Tên người nhận không được trống");
      return;
    } // if(this.edit_user_re.string != this.edit_user_re_again.string){
    //     mm.Toast.showToast(1, "Nickname không khớp");
    //     return;
    // }


    if (this.edit_money.string == "") {
      mm.Toast.showToast(1, "Tiền không được trống");
      return;
    }

    if (parseInt(this.edit_money.string) < 10000) {
      mm.Toast.showToast(1, "Tiền phải lớn hơn 10.000");
      return;
    }

    var request = new CasinoRequest.TransferMoneyRequest();
    request.setMoneyTransfer(parseInt(this.edit_money.string));
    request.setUserRecived(this.edit_user_re.string);
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
    mm.Loading.show();
  },
  updateListAgency: function updateListAgency(listAgency) {
    var jsDailyCK = this.DailyCK.getComponent(this.DailyCK.name);
    jsDailyCK.updateItems(listAgency);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9VSVRyYW5zZmVyTW9uZXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdF91c2VyX3JlIiwiRWRpdEJveCIsImVkaXRfdXNlcl9yZV9hZ2FpbiIsImVkaXRfbW9uZXkiLCJlZGl0X3JlYXNvbiIsIkRhaWx5Q0siLCJOb2RlIiwib25FbmFibGUiLCJqc0RhaWx5Q0siLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiYWRkRXZlbnRTZWxlY3QiLCJkYXRhRGFpTHkiLCJ1cGRhdGVEYWlMeUluZm8iLCJiaW5kIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJ1c2VybmFtZSIsInN0cmluZyIsImNsaWNrVHJhbnNmZXJNb25leSIsImV2ZW50IiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJUb2FzdCIsInNob3dUb2FzdCIsInBhcnNlSW50IiwicmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJUcmFuc2Zlck1vbmV5UmVxdWVzdCIsInNldE1vbmV5VHJhbnNmZXIiLCJzZXRVc2VyUmVjaXZlZCIsIlNtYXJ0Rm94U0RLIiwiUG9ydGFsQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwiTG9hZGluZyIsInNob3ciLCJ1cGRhdGVMaXN0QWdlbmN5IiwibGlzdEFnZW5jeSIsInVwZGF0ZUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRUosRUFBRSxDQUFDSyxPQURUO0FBRVJDLElBQUFBLGtCQUFrQixFQUFFTixFQUFFLENBQUNLLE9BRmY7QUFHUkUsSUFBQUEsVUFBVSxFQUFFUCxFQUFFLENBQUNLLE9BSFA7QUFJUkcsSUFBQUEsV0FBVyxFQUFFUixFQUFFLENBQUNLLE9BSlI7QUFLUkksSUFBQUEsT0FBTyxFQUFHVCxFQUFFLENBQUNVO0FBTEwsR0FIUDtBQVVMQyxFQUFBQSxRQVZLLHNCQVVNO0FBQ1AsUUFBSUMsU0FBUyxHQUFHLEtBQUtILE9BQUwsQ0FBYUksWUFBYixDQUEwQixLQUFLSixPQUFMLENBQWFLLElBQXZDLENBQWhCO0FBQ0FGLElBQUFBLFNBQVMsQ0FBQ0csY0FBVixDQUF5QixVQUFVQyxTQUFWLEVBQXFCO0FBQzFDLFdBQUtDLGVBQUwsQ0FBcUJELFNBQVMsQ0FBQ0YsSUFBL0I7QUFDSCxLQUZ3QixDQUV2QkksSUFGdUIsQ0FFbEIsSUFGa0IsQ0FBekI7O0FBR0EsUUFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JwQixFQUFFLENBQUNxQixVQUEzQixFQUFzQztBQUNsQyxXQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBbUJwQixFQUFFLENBQUNxQixVQUFILEdBQWMsQ0FBakM7QUFDSDtBQUNKLEdBbEJJO0FBbUJMSixFQUFBQSxlQW5CSywyQkFtQldLLFFBbkJYLEVBbUJxQjtBQUN0QixTQUFLbEIsWUFBTCxDQUFrQm1CLE1BQWxCLEdBQWtDRCxRQUFsQztBQUNBLFNBQUtoQixrQkFBTCxDQUF3QmlCLE1BQXhCLEdBQWtDRCxRQUFsQztBQUNILEdBdEJJO0FBdUJMRSxFQUFBQSxrQkF2QkssOEJBdUJjQyxLQXZCZCxFQXVCb0I7QUFDckJDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUcsS0FBS3hCLFlBQUwsQ0FBa0JtQixNQUFsQixJQUE0QixFQUEvQixFQUFrQztBQUM5QkcsTUFBQUEsRUFBRSxDQUFDRyxLQUFILENBQVNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsaUNBQXRCO0FBQ0E7QUFDSCxLQUxvQixDQU1yQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBRyxLQUFLdkIsVUFBTCxDQUFnQmdCLE1BQWhCLElBQTBCLEVBQTdCLEVBQWdDO0FBQzVCRyxNQUFBQSxFQUFFLENBQUNHLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQix1QkFBdEI7QUFDQTtBQUNIOztBQUNELFFBQUdDLFFBQVEsQ0FBQyxLQUFLeEIsVUFBTCxDQUFnQmdCLE1BQWpCLENBQVIsR0FBbUMsS0FBdEMsRUFBNEM7QUFDeENHLE1BQUFBLEVBQUUsQ0FBQ0csS0FBSCxDQUFTQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLDBCQUF0QjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSUUsT0FBTyxHQUFHLElBQUlDLGFBQWEsQ0FBQ0Msb0JBQWxCLEVBQWQ7QUFDQUYsSUFBQUEsT0FBTyxDQUFDRyxnQkFBUixDQUF5QkosUUFBUSxDQUFDLEtBQUt4QixVQUFMLENBQWdCZ0IsTUFBakIsQ0FBakM7QUFDQVMsSUFBQUEsT0FBTyxDQUFDSSxjQUFSLENBQXVCLEtBQUtoQyxZQUFMLENBQWtCbUIsTUFBekM7QUFDQWMsSUFBQUEsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLElBQTFDLENBQStDUixPQUFPLENBQUNTLFVBQVIsRUFBL0M7QUFDQWYsSUFBQUEsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXQyxJQUFYO0FBQ0gsR0E5Q0k7QUErQ0xDLEVBQUFBLGdCQS9DSyw0QkErQ1lDLFVBL0NaLEVBK0N1QjtBQUN4QixRQUFJakMsU0FBUyxHQUFHLEtBQUtILE9BQUwsQ0FBYUksWUFBYixDQUEwQixLQUFLSixPQUFMLENBQWFLLElBQXZDLENBQWhCO0FBQ0FGLElBQUFBLFNBQVMsQ0FBQ2tDLFdBQVYsQ0FBc0JELFVBQXRCO0FBQ0g7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGVkaXRfdXNlcl9yZTogY2MuRWRpdEJveCxcbiAgICAgICAgZWRpdF91c2VyX3JlX2FnYWluOiBjYy5FZGl0Qm94LFxuICAgICAgICBlZGl0X21vbmV5OiBjYy5FZGl0Qm94LFxuICAgICAgICBlZGl0X3JlYXNvbjogY2MuRWRpdEJveCxcbiAgICAgICAgRGFpbHlDSyA6IGNjLk5vZGVcbiAgICB9LFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBsZXQganNEYWlseUNLID0gdGhpcy5EYWlseUNLLmdldENvbXBvbmVudCh0aGlzLkRhaWx5Q0submFtZSk7XG4gICAgICAgIGpzRGFpbHlDSy5hZGRFdmVudFNlbGVjdChmdW5jdGlvbiAoZGF0YURhaUx5KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhaUx5SW5mbyhkYXRhRGFpTHkubmFtZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleCsxO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVEYWlMeUluZm8odXNlcm5hbWUpIHtcbiAgICAgICAgdGhpcy5lZGl0X3VzZXJfcmUuc3RyaW5nICAgICAgICA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLmVkaXRfdXNlcl9yZV9hZ2Fpbi5zdHJpbmcgID0gdXNlcm5hbWU7XG4gICAgfSxcbiAgICBjbGlja1RyYW5zZmVyTW9uZXkoZXZlbnQpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGlmKHRoaXMuZWRpdF91c2VyX3JlLnN0cmluZyA9PSBcIlwiKXtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDqm4gbmfGsOG7nWkgbmjhuq1uIGtow7RuZyDEkcaw4bujYyB0cuG7kW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmKHRoaXMuZWRpdF91c2VyX3JlLnN0cmluZyAhPSB0aGlzLmVkaXRfdXNlcl9yZV9hZ2Fpbi5zdHJpbmcpe1xuICAgICAgICAvLyAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiTmlja25hbWUga2jDtG5nIGto4bubcFwiKTtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZih0aGlzLmVkaXRfbW9uZXkuc3RyaW5nID09IFwiXCIpe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVGnhu4FuIGtow7RuZyDEkcaw4bujYyB0cuG7kW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHBhcnNlSW50KHRoaXMuZWRpdF9tb25leS5zdHJpbmcpIDwgMTAwMDApe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVGnhu4FuIHBo4bqjaSBs4bubbiBoxqFuIDEwLjAwMFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LlRyYW5zZmVyTW9uZXlSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3Quc2V0TW9uZXlUcmFuc2ZlcihwYXJzZUludCh0aGlzLmVkaXRfbW9uZXkuc3RyaW5nKSk7XG4gICAgICAgIHJlcXVlc3Quc2V0VXNlclJlY2l2ZWQodGhpcy5lZGl0X3VzZXJfcmUuc3RyaW5nKTtcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xuICAgIH0sXG4gICAgdXBkYXRlTGlzdEFnZW5jeShsaXN0QWdlbmN5KXtcbiAgICAgICAgbGV0IGpzRGFpbHlDSyA9IHRoaXMuRGFpbHlDSy5nZXRDb21wb25lbnQodGhpcy5EYWlseUNLLm5hbWUpO1xuICAgICAgICBqc0RhaWx5Q0sudXBkYXRlSXRlbXMobGlzdEFnZW5jeSk7XG4gICAgfVxufSk7XG4iXX0=