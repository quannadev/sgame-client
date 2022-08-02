"use strict";
cc._RF.push(module, '24959Fm7pdDmb0wGbtw/yw8', 'PortalController');
// scripts/portal/PortalController.js

"use strict";

var UIManager = require("UIManager");

var PortalController = SmartFoxSDK.BaseController.extend({
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES, this.onTransferMoney, this);
    this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES, this.onChangePassword, this);
    this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES, this.onGiftCode, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES, this.onTransferMoney, this);
    this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES, this.onChangePassword, this);
    this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES, this.onGiftCode, this);
  },
  onEventConnection: function onEventConnection(event) {
    if (event.success) {
      if (this.register) {
        this.register = false;
        var uiRegister = UIManager.getUIFromName("UIRegister");
        uiRegister.getComponent(uiRegister.name).eventClickRegister();
      } else {
        this.loginZone(this.un, this.pass);
      }
    } else {
      this._reset();
    }
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    mm.isLogin = true;
    UIManger.show("UIHome");
    Config.saveUsername(this.un);
    Config.savePass(this.pass);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    mm.Loading.hide();
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i + 1;
      item.time = sItem.getUtfString("t");
      item.amount = sItem.getDouble("am");
      item.chip = sItem.getDouble("c");
      item.tax = sItem.getDouble("tx");
      item.des = sItem.getUtfString("des");
      items.push(item);
    }

    UIManger.show("UIBankLog", {
      pop: true,
      src: 'portal',
      data: {
        items: items
      }
    });
  },
  onTransferMoney: function onTransferMoney(event) {
    var transfer = new CasinoEvent.TransferMoneyEvent().fromEvent(event);
    var code = transfer.code;

    if (code == 1) {
      // true
      mm.Toast.showToast(1, "Chuyển tiền thành công");
    } else if (code == 0) {
      // false
      mm.Toast.showToast(1, "Tài khoản nhận không đúng");
    } else if (code == 2) {
      mm.Toast.showToast(1, "Bạn không đủ số dư");
    }

    mm.Loading.hide();
  },
  onChangePassword: function onChangePassword(event) {
    var changePass = new CasinoEvent.ChangePassEvent().fromEvent(event);
    var code = changePass.code;

    if (code == 1) {
      // true
      Config.clearUserPass();
      mm.Toast.showToast(1, "Đổi mật khẩu thành công");
    } else {
      // false
      mm.Toast.showToast(1, "Đổi mật khẩu thất bại");
    }
  },
  onGiftCode: function onGiftCode(event) {
    mm.Loading.hide();
    var giftCodeRes = new CasinoEvent.GiftCodeEvent().fromEvent(event);

    if (giftCodeRes.ec !== undefined && giftCodeRes.ec !== null) {
      mm.Toast.showToast(1, giftCodeRes.ec);
    } else {
      mm.Toast.showToast(1, "Bạn được quà " + Utils.addDotToNumber(giftCodeRes.gift_value));
    }
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new PortalController("UIPortal", 'portal');
  return instance;
};

SmartFoxSDK.PortalController = module.exports = getInstance();

cc._RF.pop();