
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSVRyYW5zZmVyTW9uZXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdF91c2VyX3JlIiwiRWRpdEJveCIsImVkaXRfdXNlcl9yZV9hZ2FpbiIsImVkaXRfbW9uZXkiLCJlZGl0X3JlYXNvbiIsIkRhaWx5Q0siLCJOb2RlIiwib25FbmFibGUiLCJqc0RhaWx5Q0siLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiYWRkRXZlbnRTZWxlY3QiLCJkYXRhRGFpTHkiLCJ1cGRhdGVEYWlMeUluZm8iLCJiaW5kIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJ1c2VybmFtZSIsInN0cmluZyIsImNsaWNrVHJhbnNmZXJNb25leSIsImV2ZW50IiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJUb2FzdCIsInNob3dUb2FzdCIsInBhcnNlSW50IiwicmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJUcmFuc2Zlck1vbmV5UmVxdWVzdCIsInNldE1vbmV5VHJhbnNmZXIiLCJzZXRVc2VyUmVjaXZlZCIsIlNtYXJ0Rm94U0RLIiwiUG9ydGFsQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwiTG9hZGluZyIsInNob3ciLCJ1cGRhdGVMaXN0QWdlbmN5IiwibGlzdEFnZW5jeSIsInVwZGF0ZUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRUosRUFBRSxDQUFDSyxPQURUO0FBRVJDLElBQUFBLGtCQUFrQixFQUFFTixFQUFFLENBQUNLLE9BRmY7QUFHUkUsSUFBQUEsVUFBVSxFQUFFUCxFQUFFLENBQUNLLE9BSFA7QUFJUkcsSUFBQUEsV0FBVyxFQUFFUixFQUFFLENBQUNLLE9BSlI7QUFLUkksSUFBQUEsT0FBTyxFQUFHVCxFQUFFLENBQUNVO0FBTEwsR0FIUDtBQVVMQyxFQUFBQSxRQVZLLHNCQVVNO0FBQ1AsUUFBSUMsU0FBUyxHQUFHLEtBQUtILE9BQUwsQ0FBYUksWUFBYixDQUEwQixLQUFLSixPQUFMLENBQWFLLElBQXZDLENBQWhCO0FBQ0FGLElBQUFBLFNBQVMsQ0FBQ0csY0FBVixDQUF5QixVQUFVQyxTQUFWLEVBQXFCO0FBQzFDLFdBQUtDLGVBQUwsQ0FBcUJELFNBQVMsQ0FBQ0YsSUFBL0I7QUFDSCxLQUZ3QixDQUV2QkksSUFGdUIsQ0FFbEIsSUFGa0IsQ0FBekI7O0FBR0EsUUFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JwQixFQUFFLENBQUNxQixVQUEzQixFQUFzQztBQUNsQyxXQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBbUJwQixFQUFFLENBQUNxQixVQUFILEdBQWMsQ0FBakM7QUFDSDtBQUNKLEdBbEJJO0FBbUJMSixFQUFBQSxlQW5CSywyQkFtQldLLFFBbkJYLEVBbUJxQjtBQUN0QixTQUFLbEIsWUFBTCxDQUFrQm1CLE1BQWxCLEdBQWtDRCxRQUFsQztBQUNBLFNBQUtoQixrQkFBTCxDQUF3QmlCLE1BQXhCLEdBQWtDRCxRQUFsQztBQUNILEdBdEJJO0FBdUJMRSxFQUFBQSxrQkF2QkssOEJBdUJjQyxLQXZCZCxFQXVCb0I7QUFDckJDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUcsS0FBS3hCLFlBQUwsQ0FBa0JtQixNQUFsQixJQUE0QixFQUEvQixFQUFrQztBQUM5QkcsTUFBQUEsRUFBRSxDQUFDRyxLQUFILENBQVNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsaUNBQXRCO0FBQ0E7QUFDSCxLQUxvQixDQU1yQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBRyxLQUFLdkIsVUFBTCxDQUFnQmdCLE1BQWhCLElBQTBCLEVBQTdCLEVBQWdDO0FBQzVCRyxNQUFBQSxFQUFFLENBQUNHLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQix1QkFBdEI7QUFDQTtBQUNIOztBQUNELFFBQUdDLFFBQVEsQ0FBQyxLQUFLeEIsVUFBTCxDQUFnQmdCLE1BQWpCLENBQVIsR0FBbUMsS0FBdEMsRUFBNEM7QUFDeENHLE1BQUFBLEVBQUUsQ0FBQ0csS0FBSCxDQUFTQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLDBCQUF0QjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSUUsT0FBTyxHQUFHLElBQUlDLGFBQWEsQ0FBQ0Msb0JBQWxCLEVBQWQ7QUFDQUYsSUFBQUEsT0FBTyxDQUFDRyxnQkFBUixDQUF5QkosUUFBUSxDQUFDLEtBQUt4QixVQUFMLENBQWdCZ0IsTUFBakIsQ0FBakM7QUFDQVMsSUFBQUEsT0FBTyxDQUFDSSxjQUFSLENBQXVCLEtBQUtoQyxZQUFMLENBQWtCbUIsTUFBekM7QUFDQWMsSUFBQUEsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLElBQTFDLENBQStDUixPQUFPLENBQUNTLFVBQVIsRUFBL0M7QUFDQWYsSUFBQUEsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXQyxJQUFYO0FBQ0gsR0E5Q0k7QUErQ0xDLEVBQUFBLGdCQS9DSyw0QkErQ1lDLFVBL0NaLEVBK0N1QjtBQUN4QixRQUFJakMsU0FBUyxHQUFHLEtBQUtILE9BQUwsQ0FBYUksWUFBYixDQUEwQixLQUFLSixPQUFMLENBQWFLLElBQXZDLENBQWhCO0FBQ0FGLElBQUFBLFNBQVMsQ0FBQ2tDLFdBQVYsQ0FBc0JELFVBQXRCO0FBQ0g7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZWRpdF91c2VyX3JlOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGVkaXRfdXNlcl9yZV9hZ2FpbjogY2MuRWRpdEJveCxcclxuICAgICAgICBlZGl0X21vbmV5OiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGVkaXRfcmVhc29uOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIERhaWx5Q0sgOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgbGV0IGpzRGFpbHlDSyA9IHRoaXMuRGFpbHlDSy5nZXRDb21wb25lbnQodGhpcy5EYWlseUNLLm5hbWUpO1xyXG4gICAgICAgIGpzRGFpbHlDSy5hZGRFdmVudFNlbGVjdChmdW5jdGlvbiAoZGF0YURhaUx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGFpTHlJbmZvKGRhdGFEYWlMeS5uYW1lKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZURhaUx5SW5mbyh1c2VybmFtZSkge1xyXG4gICAgICAgIHRoaXMuZWRpdF91c2VyX3JlLnN0cmluZyAgICAgICAgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLmVkaXRfdXNlcl9yZV9hZ2Fpbi5zdHJpbmcgID0gdXNlcm5hbWU7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tUcmFuc2Zlck1vbmV5KGV2ZW50KXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5lZGl0X3VzZXJfcmUuc3RyaW5nID09IFwiXCIpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJUw6puIG5nxrDhu51pIG5o4bqtbiBraMO0bmcgxJHGsOG7o2MgdHLhu5FuZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZih0aGlzLmVkaXRfdXNlcl9yZS5zdHJpbmcgIT0gdGhpcy5lZGl0X3VzZXJfcmVfYWdhaW4uc3RyaW5nKXtcclxuICAgICAgICAvLyAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiTmlja25hbWUga2jDtG5nIGto4bubcFwiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0aGlzLmVkaXRfbW9uZXkuc3RyaW5nID09IFwiXCIpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJUaeG7gW4ga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocGFyc2VJbnQodGhpcy5lZGl0X21vbmV5LnN0cmluZykgPCAxMDAwMCl7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlRp4buBbiBwaOG6o2kgbOG7m24gaMahbiAxMC4wMDBcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5UcmFuc2Zlck1vbmV5UmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0TW9uZXlUcmFuc2ZlcihwYXJzZUludCh0aGlzLmVkaXRfbW9uZXkuc3RyaW5nKSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRVc2VyUmVjaXZlZCh0aGlzLmVkaXRfdXNlcl9yZS5zdHJpbmcpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUxpc3RBZ2VuY3kobGlzdEFnZW5jeSl7XHJcbiAgICAgICAgbGV0IGpzRGFpbHlDSyA9IHRoaXMuRGFpbHlDSy5nZXRDb21wb25lbnQodGhpcy5EYWlseUNLLm5hbWUpO1xyXG4gICAgICAgIGpzRGFpbHlDSy51cGRhdGVJdGVtcyhsaXN0QWdlbmN5KTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==