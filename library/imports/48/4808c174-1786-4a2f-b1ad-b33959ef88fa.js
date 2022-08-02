"use strict";
cc._RF.push(module, '4808cF0F4ZKL7GtszlZ74j6', 'UITaiXiuDuaTop');
// scripts/taixiu/UITaiXiuDuaTop.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    theLeContent: cc.Node,
    lbTheLeContent: cc.Label,
    rankContent: cc.Node,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbValue: cc.Label,
    lbVinhDanh: cc.Label,
    lbLichSu: cc.Label,
    listview: Listview,
    listBgLeft: [cc.SpriteFrame],
    listBgTop: [cc.SpriteFrame],
    listTabLef: [cc.Sprite],
    listTabTop: [cc.Sprite],
    _tabLeft: 0,
    _tabTop: "TheLe",
    _listTheLe: []
  },
  onLoad: function onLoad() {
    this._listTheLe = ["Thể lệ đua top Tài Xỉu:\n" + "Hàng ngày, hệ thống sẽ lọc ra 50 người chơi có số tiền cược tổng các phiên tài xỉu cao nhất trong ngày để trao thưởng.\n" + "Lưu ý: Chỉ ghi nhận tiền cược sau khi được cân cửa, phần tiền trả lại sẽ không được tính.\n" + "Thời gian trao thưởng: 00h01 ngày hôm sau\n" + "Cách thức nhận thưởng: Hệ thống tự động cộng vào tài khoản người chơi", "Khi thắng game, người chơi muốn tán lộc cho anh em chơi cùng có thể vào chức năng tán lộc để chuyển tiền vào quỹ lộc. \n" + "Một lần tối đa 10 triệu Coin\n" + "Không giới hạn số lần tán lộc", "Người chơi khi hết tiền có thể vào chức năng rút lộc để nhận lộc từ người chơi khác.\n" + "Giới hạn 10 phút 1 lần\n" + "Chỉ những user đã từng tiêu tiền mới được rút lộc\n" + "1 lần rút lộc tương đương ngẫu nhiên 1-10% giá trị quỹ"];
  },
  onEnable: function onEnable() {
    this._tabLeft = 0;
    this._tabTop = this._data;

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }

    this.requestData();
    this.setUITab();
  },
  setUITab: function setUITab() {
    var self = this;
    Promise.all(this.listTabLef.map(function (bgNode, index) {
      if (self._tabLeft == index) bgNode.spriteFrame = self.listBgLeft[1];else bgNode.spriteFrame = self.listBgLeft[0];
    }));
    Promise.all(this.listTabTop.map(function (bgNode, index) {
      if (bgNode.node.name == self._tabTop) bgNode.spriteFrame = self.listBgTop[1];else bgNode.spriteFrame = self.listBgTop[0];
    }));
  },
  requestData: function requestData() {
    switch (this._tabTop) {
      case "TheLe":
        {
          this.theLeContent.active = true;
          this.rankContent.active = false;
          if (this._tabLeft == 0) this.setTextDuaTop();else this.setTextTanRut();
          this.lbTheLeContent.string = this._listTheLe[this._tabLeft];
          break;
        }

      case "VinhDanh":
        {
          this.lbTime.string = "STT";
          this.lbAccount.string = "TÊN TÀI KHOẢN";
          this.lbValue.string = "TRỊ GIÁ";
          this.theLeContent.active = false;
          this.rankContent.active = true;

          switch (this._tabLeft) {
            case 0:
              {
                this.setTextDuaTop();
                mm.Loading.show();
                var topBetRequest = new TaiXiuRequest.TopBetRequest();
                SmartFoxSDK.TaiXiuController.ZoneInstance.send(topBetRequest.toSRequest());
                break;
              }

            case 1:
              {
                this.setTextTanRut();
                mm.Loading.show();
                var rankTanLocRequest = new TaiXiuRequest.RankTanLocRequest();
                SmartFoxSDK.TaiXiuController.ZoneInstance.send(rankTanLocRequest.toSRequest());
                break;
              }

            case 2:
              {
                this.setTextTanRut();
                mm.Loading.show();
                var rankRutLocRequest = new TaiXiuRequest.RankRutLocRequest();
                SmartFoxSDK.TaiXiuController.ZoneInstance.send(rankRutLocRequest.toSRequest());
                break;
              }
          }

          break;
        }

      case "LichSu":
        {
          this.theLeContent.active = false;
          this.rankContent.active = true;
          this.lbTime.string = "THỜI GIAN";
          this.lbAccount.string = "TÊN TÀI KHOẢN";
          this.lbValue.string = "TRỊ GIÁ";

          switch (this._tabLeft) {
            case 0:
              {
                this.setTextDuaTop();
                this.lbAccount.string = "TÊN TÀI KHOẢN";
                this.lbValue.string = "PHẦN THƯỞNG";
                this.lbTime.string = "STT";
                mm.Loading.show();
                var topRewardResRequest = new TaiXiuRequest.TopRewardResRequest();
                SmartFoxSDK.TaiXiuController.ZoneInstance.send(topRewardResRequest.toSRequest());
                break;
              }

            case 1:
              {
                this.setTextTanRut();
                mm.Loading.show();
                var historyTanLocRequest = new TaiXiuRequest.HistoryTanLocRequest();
                SmartFoxSDK.TaiXiuController.ZoneInstance.send(historyTanLocRequest.toSRequest());
                this.rankContent.active = true;
                break;
              }

            case 2:
              {
                this.setTextTanRut();
                mm.Loading.show();
                var historyRutLocRequest = new TaiXiuRequest.HistoryRutLocRequest();
                SmartFoxSDK.TaiXiuController.ZoneInstance.send(historyRutLocRequest.toSRequest());
                this.rankContent.active = true;
                break;
              }
          }

          break;
        }
    }
  },
  setTextTanRut: function setTextTanRut() {
    this.lbVinhDanh.string = "VINH DANH";
    this.lbLichSu.string = "LỊCH SỬ";
  },
  setTextDuaTop: function setTextDuaTop() {
    this.lbVinhDanh.string = "TOP CƯỢC";
    this.lbLichSu.string = "THƯỞNG TOP";
  },
  updateDataList: function updateDataList(listData) {
    this.listRank = this.removeChimmoi(listData);
    this.listview.numItems = this.listRank.length;
    mm.Loading.hide();
  },
  removeChimmoi: function removeChimmoi(listData) {
    var listUser = [];

    if (listData.length > 0) {
      var isNumber = typeof listData[0].time == "number";
      var index = 1;

      for (var i = 0; i < listData.length; i++) {
        if (listData[i].account.indexOf("chimmoi") < 0) {
          listUser.push(listData[i]);

          if (isNumber) {
            listData[i].time = index++;
          }
        }
      }
    }

    return listUser;
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank, idx);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }
  },
  eventTabLeft: function eventTabLeft(event, data) {
    this._tabLeft = parseInt(data);
    this.requestData();
    this.setUITab();
  },
  eventTheLe: function eventTheLe() {
    this._tabTop = "TheLe";
    this.requestData();
    this.setUITab();
  },
  eventRank: function eventRank() {
    this._tabTop = "VinhDanh";
    this.requestData();
    this.setUITab();
  },
  eventHistory: function eventHistory() {
    this._tabTop = "LichSu";
    this.requestData();
    this.setUITab();
  }
});

cc._RF.pop();