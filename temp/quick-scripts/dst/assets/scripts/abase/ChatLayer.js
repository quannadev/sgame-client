
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/ChatLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b7c4kYnQJM84+fuMd0TjdB', 'ChatLayer');
// scripts/abase/ChatLayer.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    ed_msg: cc.EditBox,
    listview: Listview,
    dataChat: null
  },
  onLoad: function onLoad() {
    this.dataChat = [];
  },
  onDisable: function onDisable() {},
  onEnable: function onEnable() {
    this.listview.numItems = this.dataChat.length;
    this.listview.scrollTo(0);
  },
  initChat: function initChat(listChat) {
    this.dataChat = listChat;
    this.listview.numItems = this.dataChat.length;
    this.listview.scrollTo(0);
  },
  sendMessage: function sendMessage() {
    if (this.ed_msg.string.length > 0) {
      var param = new SmartFoxSDK.SObject();
      param.putUtfString("fb", "");
      param.putUtfString("dn", GameVariables.getDisplayName(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf));
      SmartFoxSDK.TaiXiuController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(this.ed_msg.string, param));
      this.ed_msg.string = "";
    }
  },
  addMessage: function addMessage(msgItem) {
    this.dataChat.unshift(msgItem);
    this.listview.numItems = this.dataChat.length;
  },
  onListRender: function onListRender(item, idx) {
    var data = this.dataChat[idx];
    item.getComponent(item.name).init(data, idx);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXENoYXRMYXllci5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZF9tc2ciLCJFZGl0Qm94IiwibGlzdHZpZXciLCJkYXRhQ2hhdCIsIm9uTG9hZCIsIm9uRGlzYWJsZSIsIm9uRW5hYmxlIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJzY3JvbGxUbyIsImluaXRDaGF0IiwibGlzdENoYXQiLCJzZW5kTWVzc2FnZSIsInN0cmluZyIsInBhcmFtIiwiU21hcnRGb3hTREsiLCJTT2JqZWN0IiwicHV0VXRmU3RyaW5nIiwiR2FtZVZhcmlhYmxlcyIsImdldERpc3BsYXlOYW1lIiwiVGFpWGl1Q29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsIm15U2VsZiIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiUHVibGljTWVzc2FnZVJlcXVlc3QiLCJhZGRNZXNzYWdlIiwibXNnSXRlbSIsInVuc2hpZnQiLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwiZGF0YSIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsIm5vZGUiLCJzZWxlY3RlZE1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0ssT0FESDtBQUVSQyxJQUFBQSxRQUFRLEVBQU1SLFFBRk47QUFHUlMsSUFBQUEsUUFBUSxFQUFFO0FBSEYsR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFHO0FBQ0osU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUNILEdBVkk7QUFXTEUsRUFBQUEsU0FYSyx1QkFXTSxDQUVWLENBYkk7QUFjTEMsRUFBQUEsUUFkSyxzQkFjSztBQUNOLFNBQUtKLFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSixRQUFMLENBQWNLLE1BQXZDO0FBQ0EsU0FBS04sUUFBTCxDQUFjTyxRQUFkLENBQXVCLENBQXZCO0FBQ0gsR0FqQkk7QUFrQkxDLEVBQUFBLFFBbEJLLG9CQWtCSUMsUUFsQkosRUFrQmM7QUFDZixTQUFLUixRQUFMLEdBQWdCUSxRQUFoQjtBQUNBLFNBQUtULFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSixRQUFMLENBQWNLLE1BQXZDO0FBQ0EsU0FBS04sUUFBTCxDQUFjTyxRQUFkLENBQXVCLENBQXZCO0FBQ0gsR0F0Qkk7QUF1QkxHLEVBQUFBLFdBdkJLLHlCQXVCUTtBQUNULFFBQUcsS0FBS1osTUFBTCxDQUFZYSxNQUFaLENBQW1CTCxNQUFuQixHQUE0QixDQUEvQixFQUFpQztBQUM3QixVQUFJTSxLQUFLLEdBQUcsSUFBSUMsV0FBVyxDQUFDQyxPQUFoQixFQUFaO0FBQ0FGLE1BQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQixJQUFuQixFQUF5QixFQUF6QjtBQUNBSCxNQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUJDLGFBQWEsQ0FBQ0MsY0FBZCxDQUE2QkosV0FBVyxDQUFDSyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQXZFLENBQXpCO0FBQ0FQLE1BQUFBLFdBQVcsQ0FBQ0ssZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDRSxJQUExQyxDQUErQyxJQUFJUixXQUFXLENBQUNTLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0Msb0JBQXpDLENBQThELEtBQUszQixNQUFMLENBQVlhLE1BQTFFLEVBQWtGQyxLQUFsRixDQUEvQztBQUNBLFdBQUtkLE1BQUwsQ0FBWWEsTUFBWixHQUFxQixFQUFyQjtBQUNIO0FBQ0osR0EvQkk7QUFnQ0xlLEVBQUFBLFVBaENLLHNCQWdDTUMsT0FoQ04sRUFnQ2M7QUFDZixTQUFLMUIsUUFBTCxDQUFjMkIsT0FBZCxDQUFzQkQsT0FBdEI7QUFDQSxTQUFLM0IsUUFBTCxDQUFjSyxRQUFkLEdBQXlCLEtBQUtKLFFBQUwsQ0FBY0ssTUFBdkM7QUFDSCxHQW5DSTtBQW9DTHVCLEVBQUFBLFlBcENLLHdCQW9DUUMsSUFwQ1IsRUFvQ2NDLEdBcENkLEVBb0NtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBSy9CLFFBQUwsQ0FBYzhCLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQyxFQUF3Q0QsR0FBeEM7QUFDSCxHQXZDSTtBQXdDTEssRUFBQUEsY0F4Q0ssMEJBd0NVTixJQXhDVixFQXdDZ0JPLFVBeENoQixFQXdDNEJDLGNBeEM1QixFQXdDNENDLEdBeEM1QyxFQXdDaUQ7QUFDbEQsUUFBSSxDQUFDVCxJQUFMLEVBQ0k7QUFDSixRQUFJVSxJQUFJLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjQyxLQUF6QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxxQ0FBcUNILElBQUksQ0FBQ0ksSUFBTCxDQUFVVixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSyxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJGLE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7QUFDSjtBQWhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGVkX21zZzogY2MuRWRpdEJveCxcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgICAgIGRhdGFDaGF0OiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhQ2hhdCA9IFtdO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZSgpe1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmRhdGFDaGF0Lmxlbmd0aDtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3LnNjcm9sbFRvKDApO1xyXG4gICAgfSxcclxuICAgIGluaXRDaGF0KGxpc3RDaGF0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhQ2hhdCA9IGxpc3RDaGF0O1xyXG4gICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmRhdGFDaGF0Lmxlbmd0aDtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3LnNjcm9sbFRvKDApO1xyXG4gICAgfSxcclxuICAgIHNlbmRNZXNzYWdlKCl7XHJcbiAgICAgICAgaWYodGhpcy5lZF9tc2cuc3RyaW5nLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgcGFyYW0gPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xyXG4gICAgICAgICAgICBwYXJhbS5wdXRVdGZTdHJpbmcoXCJmYlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgcGFyYW0ucHV0VXRmU3RyaW5nKFwiZG5cIiwgR2FtZVZhcmlhYmxlcy5nZXREaXNwbGF5TmFtZShTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLlB1YmxpY01lc3NhZ2VSZXF1ZXN0KHRoaXMuZWRfbXNnLnN0cmluZywgcGFyYW0pKTtcclxuICAgICAgICAgICAgdGhpcy5lZF9tc2cuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkTWVzc2FnZShtc2dJdGVtKXtcclxuICAgICAgICB0aGlzLmRhdGFDaGF0LnVuc2hpZnQobXNnSXRlbSk7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMuZGF0YUNoYXQubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUNoYXRbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQoZGF0YSwgaWR4KTtcclxuICAgIH0sXHJcbiAgICBvbkxpc3RTZWxlY3RlZChpdGVtLCBzZWxlY3RlZElkLCBsYXN0U2VsZWN0ZWRJZCwgdmFsKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGxpc3QgPSBpdGVtLmxpc3RJdGVtLl9saXN0O1xyXG4gICAgICAgIGxldCBzdHIgPSAnRGFuaCBzw6FjaCBob+G6oXQgxJHhu5luZyBoaeG7h24gdOG6oWkgbMOgOicgKyBsaXN0Lm5vZGUubmFtZSArICfvvIxM4buxYSBjaOG7jW4gaGnhu4duIHThuqFpIGzDoO+8micgKyBzZWxlY3RlZElkICsgJ++8jEzhu7FhIGNo4buNbiBjdeG7kWkgY8O5bmcgbMOg77yaJyArIGxhc3RTZWxlY3RlZElkO1xyXG4gICAgICAgIGlmIChsaXN0LnNlbGVjdGVkTW9kZSA9PSAyKSB7IC8vTuG6v3UgbsOzIGzDoCBjaOG6vyDEkeG7mSDEkWEgbOG7sWEgY2jhu41uXHJcbiAgICAgICAgICAgIHN0ciArPSAn77yMR2nDoSB0cuG7iyBoaeG7h24gdOG6oWnvvJonICsgdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=