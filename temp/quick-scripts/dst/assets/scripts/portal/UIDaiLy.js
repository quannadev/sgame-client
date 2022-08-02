
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIDaiLy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7698dZ+jKBGNYlNkP0acvxs', 'UIDaiLy');
// scripts/portal/UIDaiLy.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    listArea: [cc.Sprite],
    listBg: [cc.SpriteFrame],
    _listArea: []
  },
  onLoad: function onLoad() {
    this.listDaiLy = [];
    this._listArea = ["ja", "ko"];
    this.listview.numItems = this.listDaiLy.length;
  },
  onEnable: function onEnable() {
    mm.Loading.show();
    SmartFoxSDK.PortalController.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
    var request = new CasinoRequest.ListAgencyRequest();
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  onDisable: function onDisable() {
    SmartFoxSDK.PortalController.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onListAgency: function onListAgency(event) {
    mm.Loading.hide();
    var listAgency = new CasinoEvent.ListAgencyEvent().fromEvent(event);
    this.listBaseDaiLy = listAgency;
    this.listDaiLy = listAgency;
    console.log(listAgency);
    this.eventSelectArea(null, this.getLastArea());
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listDaiLy[idx];
    item.getComponent(item.name).init(rank, idx);
    item.getComponent(item.name).addEventSelect(function (dataSelect) {
      mm.audio.playButton();
      this.show('UIPayment', {
        pop: true,
        src: 'portal',
        data: {
          nickname: dataSelect.name,
          agName: dataSelect.agName,
          area: dataSelect.zone
        }
      });
    });
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }

    console.log(str);
  },
  eventSelectArea: function eventSelectArea(event, data) {
    if (event != null) mm.audio.playButton();
    var listArea = this.getDailyInArea(data);
    this.listDaiLy = listArea;
    this.listview.numItems = listArea.length;

    for (var i = 0; i < 3; i++) {
      this.listArea[i].spriteFrame = this.listBg[0];
    }

    this.listArea[data].spriteFrame = this.listBg[1];
  },
  getDailyInArea: function getDailyInArea(posArea) {
    var area = this._listArea[posArea];
    var listArea = [];

    for (var i = 0; i < this.listBaseDaiLy.length; i++) {
      if (this.listBaseDaiLy[i].zone == area) listArea.push(this.listBaseDaiLy[i]);
    }

    return listArea;
  },
  getLastArea: function getLastArea() {
    var localStorage = cc.sys.localStorage;

    if (localStorage.getItem("last_area") === null || localStorage.getItem("last_area") === undefined) {
      localStorage.setItem("last_area", "ja");
    }

    var area = localStorage.getItem("last_area");
    if (area == "ja") return 0;else return 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSURhaUx5LmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3IiwibGlzdEFyZWEiLCJTcHJpdGUiLCJsaXN0QmciLCJTcHJpdGVGcmFtZSIsIl9saXN0QXJlYSIsIm9uTG9hZCIsImxpc3REYWlMeSIsIm51bUl0ZW1zIiwibGVuZ3RoIiwib25FbmFibGUiLCJtbSIsIkxvYWRpbmciLCJzaG93IiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwiYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbiIsIkNhc2lub0V2ZW50IiwiUkVTUE9OU0VfTkFNRSIsIkxJU1RfQUdFTkNZX1JFUyIsIm9uTGlzdEFnZW5jeSIsInJlcXVlc3QiLCJDYXNpbm9SZXF1ZXN0IiwiTGlzdEFnZW5jeVJlcXVlc3QiLCJzZW5kIiwidG9TUmVxdWVzdCIsIm5vZGUiLCJ6SW5kZXgiLCJsYXN0WkluZGV4Iiwib25EaXNhYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbiIsImV2ZW50Q2xvc2UiLCJhdWRpbyIsInBsYXlCdXR0b24iLCJiYWNrIiwiZXZlbnQiLCJoaWRlIiwibGlzdEFnZW5jeSIsIkxpc3RBZ2VuY3lFdmVudCIsImZyb21FdmVudCIsImxpc3RCYXNlRGFpTHkiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRTZWxlY3RBcmVhIiwiZ2V0TGFzdEFyZWEiLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0IiwiYWRkRXZlbnRTZWxlY3QiLCJkYXRhU2VsZWN0IiwicG9wIiwic3JjIiwiZGF0YSIsIm5pY2tuYW1lIiwiYWdOYW1lIiwiYXJlYSIsInpvbmUiLCJvbkxpc3RTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJsYXN0U2VsZWN0ZWRJZCIsInZhbCIsImxpc3QiLCJsaXN0SXRlbSIsIl9saXN0Iiwic3RyIiwic2VsZWN0ZWRNb2RlIiwiZ2V0RGFpbHlJbkFyZWEiLCJpIiwic3ByaXRlRnJhbWUiLCJwb3NBcmVhIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTixRQUROO0FBRVJPLElBQUFBLFFBQVEsRUFBTSxDQUFDTCxFQUFFLENBQUNNLE1BQUosQ0FGTjtBQUdSQyxJQUFBQSxNQUFNLEVBQVEsQ0FBQ1AsRUFBRSxDQUFDUSxXQUFKLENBSE47QUFJUkMsSUFBQUEsU0FBUyxFQUFJO0FBSkwsR0FIUDtBQVNMQyxFQUFBQSxNQVRLLG9CQVNJO0FBQ0wsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtGLFNBQUwsR0FBaUIsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFqQjtBQUNBLFNBQUtMLFFBQUwsQ0FBY1EsUUFBZCxHQUF5QixLQUFLRCxTQUFMLENBQWVFLE1BQXhDO0FBQ0gsR0FiSTtBQWNMQyxFQUFBQSxRQWRLLHNCQWNLO0FBQ05DLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXQyxJQUFYO0FBQ0FDLElBQUFBLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDQyx5QkFBMUMsQ0FBb0VDLFdBQVcsQ0FBQ0MsYUFBWixDQUEwQkMsZUFBOUYsRUFBK0csS0FBS0MsWUFBcEgsRUFBa0ksSUFBbEk7QUFDQSxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsYUFBYSxDQUFDQyxpQkFBbEIsRUFBZDtBQUNBVixJQUFBQSxXQUFXLENBQUND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UztBQUNWLFFBQUkrQixZQUFZLEdBQUdoRixFQUFFLENBQUNpRixHQUFILENBQU9ELFlBQTFCOztBQUNBLFFBQUlBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixXQUFyQixNQUFzQyxJQUF0QyxJQUE4Q0YsWUFBWSxDQUFDRSxPQUFiLENBQXFCLFdBQXJCLE1BQXNDQyxTQUF4RixFQUFtRztBQUMvRkgsTUFBQUEsWUFBWSxDQUFDSSxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLElBQWxDO0FBQ0g7O0FBQ0QsUUFBSXBCLElBQUksR0FBR2dCLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixXQUFyQixDQUFYO0FBQ0EsUUFBSWxCLElBQUksSUFBSSxJQUFaLEVBQ0ksT0FBUSxDQUFSLENBREosS0FHSSxPQUFPLENBQVA7QUFDUDtBQXRGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICAgICAgbGlzdEFyZWEgICAgOiBbY2MuU3ByaXRlXSxcclxuICAgICAgICBsaXN0QmcgICAgICA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgX2xpc3RBcmVhICA6IFtdXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubGlzdERhaUx5ID0gW107XHJcbiAgICAgICAgdGhpcy5fbGlzdEFyZWEgPSBbXCJqYVwiLCBcImtvXCJdO1xyXG4gICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3REYWlMeS5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuTElTVF9BR0VOQ1lfUkVTLCB0aGlzLm9uTGlzdEFnZW5jeSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5MaXN0QWdlbmN5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleCsxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRpc2FibGUoKXtcclxuICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuTElTVF9BR0VOQ1lfUkVTLCB0aGlzLm9uTGlzdEFnZW5jeSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0QWdlbmN5KGV2ZW50KXtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICBsZXQgbGlzdEFnZW5jeSA9IG5ldyBDYXNpbm9FdmVudC5MaXN0QWdlbmN5RXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMubGlzdEJhc2VEYWlMeSA9IGxpc3RBZ2VuY3k7XHJcbiAgICAgICAgdGhpcy5saXN0RGFpTHkgPSBsaXN0QWdlbmN5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RBZ2VuY3kpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRTZWxlY3RBcmVhKG51bGwsIHRoaXMuZ2V0TGFzdEFyZWEoKSk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0RGFpTHlbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuaywgaWR4KTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmFkZEV2ZW50U2VsZWN0KGZ1bmN0aW9uIChkYXRhU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCdVSVBheW1lbnQnLCB7cG9wOiB0cnVlLCBzcmM6ICdwb3J0YWwnLCBkYXRhIDoge25pY2tuYW1lOiBkYXRhU2VsZWN0Lm5hbWUsIGFnTmFtZTogZGF0YVNlbGVjdC5hZ05hbWUsIGFyZWEgOiBkYXRhU2VsZWN0LnpvbmV9fSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcclxuICAgICAgICBsZXQgc3RyID0gJ0Rhbmggc8OhY2ggaG/huqF0IMSR4buZbmcgaGnhu4duIHThuqFpIGzDoDonICsgbGlzdC5ub2RlLm5hbWUgKyAn77yMTOG7sWEgY2jhu41uIGhp4buHbiB04bqhaSBsw6DvvJonICsgc2VsZWN0ZWRJZCArICfvvIxM4buxYSBjaOG7jW4gY3Xhu5FpIGPDuW5nIGzDoO+8micgKyBsYXN0U2VsZWN0ZWRJZDtcclxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxyXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH0sXHJcbiAgICBldmVudFNlbGVjdEFyZWEoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBpZiAoZXZlbnQgIT0gbnVsbClcclxuICAgICAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGxldCBsaXN0QXJlYSAgICAgICAgICAgPSB0aGlzLmdldERhaWx5SW5BcmVhKGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGlzdERhaUx5ICAgICAgICAgPSBsaXN0QXJlYTtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gbGlzdEFyZWEubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgMzsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0QXJlYVtpXS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RBcmVhW2RhdGFdLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0QmdbMV07XHJcbiAgICB9LFxyXG4gICAgZ2V0RGFpbHlJbkFyZWEocG9zQXJlYSkge1xyXG4gICAgICAgIGxldCBhcmVhID0gdGhpcy5fbGlzdEFyZWFbcG9zQXJlYV07XHJcbiAgICAgICAgbGV0IGxpc3RBcmVhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLmxpc3RCYXNlRGFpTHkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgIGlmICggdGhpcy5saXN0QmFzZURhaUx5W2ldLnpvbmUgPT0gYXJlYSlcclxuICAgICAgICAgICAgICAgbGlzdEFyZWEucHVzaCh0aGlzLmxpc3RCYXNlRGFpTHlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdEFyZWE7XHJcbiAgICB9LFxyXG4gICAgZ2V0TGFzdEFyZWEoKSB7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdF9hcmVhXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdF9hcmVhXCIpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0X2FyZWFcIiwgXCJqYVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFyZWEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3RfYXJlYVwiKTtcclxuICAgICAgICBpZiAoYXJlYSA9PSBcImphXCIpXHJcbiAgICAgICAgICAgIHJldHVybiAgMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG59KTtcclxuIl19