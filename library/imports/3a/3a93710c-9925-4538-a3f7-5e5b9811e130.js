"use strict";
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