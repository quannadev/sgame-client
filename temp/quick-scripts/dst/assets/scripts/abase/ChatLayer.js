
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL0NoYXRMYXllci5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZF9tc2ciLCJFZGl0Qm94IiwibGlzdHZpZXciLCJkYXRhQ2hhdCIsIm9uTG9hZCIsIm9uRGlzYWJsZSIsIm9uRW5hYmxlIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJzY3JvbGxUbyIsImluaXRDaGF0IiwibGlzdENoYXQiLCJzZW5kTWVzc2FnZSIsInN0cmluZyIsInBhcmFtIiwiU21hcnRGb3hTREsiLCJTT2JqZWN0IiwicHV0VXRmU3RyaW5nIiwiR2FtZVZhcmlhYmxlcyIsImdldERpc3BsYXlOYW1lIiwiVGFpWGl1Q29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsIm15U2VsZiIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiUHVibGljTWVzc2FnZVJlcXVlc3QiLCJhZGRNZXNzYWdlIiwibXNnSXRlbSIsInVuc2hpZnQiLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwiZGF0YSIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsIm5vZGUiLCJzZWxlY3RlZE1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0ssT0FESDtBQUVSQyxJQUFBQSxRQUFRLEVBQU1SLFFBRk47QUFHUlMsSUFBQUEsUUFBUSxFQUFFO0FBSEYsR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFHO0FBQ0osU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUNILEdBVkk7QUFXTEUsRUFBQUEsU0FYSyx1QkFXTSxDQUVWLENBYkk7QUFjTEMsRUFBQUEsUUFkSyxzQkFjSztBQUNOLFNBQUtKLFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSixRQUFMLENBQWNLLE1BQXZDO0FBQ0EsU0FBS04sUUFBTCxDQUFjTyxRQUFkLENBQXVCLENBQXZCO0FBQ0gsR0FqQkk7QUFrQkxDLEVBQUFBLFFBbEJLLG9CQWtCSUMsUUFsQkosRUFrQmM7QUFDZixTQUFLUixRQUFMLEdBQWdCUSxRQUFoQjtBQUNBLFNBQUtULFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSixRQUFMLENBQWNLLE1BQXZDO0FBQ0EsU0FBS04sUUFBTCxDQUFjTyxRQUFkLENBQXVCLENBQXZCO0FBQ0gsR0F0Qkk7QUF1QkxHLEVBQUFBLFdBdkJLLHlCQXVCUTtBQUNULFFBQUcsS0FBS1osTUFBTCxDQUFZYSxNQUFaLENBQW1CTCxNQUFuQixHQUE0QixDQUEvQixFQUFpQztBQUM3QixVQUFJTSxLQUFLLEdBQUcsSUFBSUMsV0FBVyxDQUFDQyxPQUFoQixFQUFaO0FBQ0FGLE1BQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQixJQUFuQixFQUF5QixFQUF6QjtBQUNBSCxNQUFBQSxLQUFLLENBQUNHLFlBQU4sQ0FBbUIsSUFBbkIsRUFBeUJDLGFBQWEsQ0FBQ0MsY0FBZCxDQUE2QkosV0FBVyxDQUFDSyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQXZFLENBQXpCO0FBQ0FQLE1BQUFBLFdBQVcsQ0FBQ0ssZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDRSxJQUExQyxDQUErQyxJQUFJUixXQUFXLENBQUNTLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0Msb0JBQXpDLENBQThELEtBQUszQixNQUFMLENBQVlhLE1BQTFFLEVBQWtGQyxLQUFsRixDQUEvQztBQUNBLFdBQUtkLE1BQUwsQ0FBWWEsTUFBWixHQUFxQixFQUFyQjtBQUNIO0FBQ0osR0EvQkk7QUFnQ0xlLEVBQUFBLFVBaENLLHNCQWdDTUMsT0FoQ04sRUFnQ2M7QUFDZixTQUFLMUIsUUFBTCxDQUFjMkIsT0FBZCxDQUFzQkQsT0FBdEI7QUFDQSxTQUFLM0IsUUFBTCxDQUFjSyxRQUFkLEdBQXlCLEtBQUtKLFFBQUwsQ0FBY0ssTUFBdkM7QUFDSCxHQW5DSTtBQW9DTHVCLEVBQUFBLFlBcENLLHdCQW9DUUMsSUFwQ1IsRUFvQ2NDLEdBcENkLEVBb0NtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBSy9CLFFBQUwsQ0FBYzhCLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQyxFQUF3Q0QsR0FBeEM7QUFDSCxHQXZDSTtBQXdDTEssRUFBQUEsY0F4Q0ssMEJBd0NVTixJQXhDVixFQXdDZ0JPLFVBeENoQixFQXdDNEJDLGNBeEM1QixFQXdDNENDLEdBeEM1QyxFQXdDaUQ7QUFDbEQsUUFBSSxDQUFDVCxJQUFMLEVBQ0k7QUFDSixRQUFJVSxJQUFJLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjQyxLQUF6QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxxQ0FBcUNILElBQUksQ0FBQ0ksSUFBTCxDQUFVVixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSyxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJGLE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7QUFDSjtBQWhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZWRfbXNnOiBjYy5FZGl0Qm94LFxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxuICAgICAgICBkYXRhQ2hhdDogbnVsbFxuICAgIH0sXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuZGF0YUNoYXQgPSBbXTtcbiAgICB9LFxuICAgIG9uRGlzYWJsZSgpe1xuXG4gICAgfSxcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5kYXRhQ2hhdC5sZW5ndGg7XG4gICAgICAgIHRoaXMubGlzdHZpZXcuc2Nyb2xsVG8oMCk7XG4gICAgfSxcbiAgICBpbml0Q2hhdChsaXN0Q2hhdCkge1xuICAgICAgICB0aGlzLmRhdGFDaGF0ID0gbGlzdENoYXQ7XG4gICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmRhdGFDaGF0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5saXN0dmlldy5zY3JvbGxUbygwKTtcbiAgICB9LFxuICAgIHNlbmRNZXNzYWdlKCl7XG4gICAgICAgIGlmKHRoaXMuZWRfbXNnLnN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IG5ldyBTbWFydEZveFNESy5TT2JqZWN0KCk7XG4gICAgICAgICAgICBwYXJhbS5wdXRVdGZTdHJpbmcoXCJmYlwiLCBcIlwiKTtcbiAgICAgICAgICAgIHBhcmFtLnB1dFV0ZlN0cmluZyhcImRuXCIsIEdhbWVWYXJpYWJsZXMuZ2V0RGlzcGxheU5hbWUoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XG4gICAgICAgICAgICBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uUHVibGljTWVzc2FnZVJlcXVlc3QodGhpcy5lZF9tc2cuc3RyaW5nLCBwYXJhbSkpO1xuICAgICAgICAgICAgdGhpcy5lZF9tc2cuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWRkTWVzc2FnZShtc2dJdGVtKXtcbiAgICAgICAgdGhpcy5kYXRhQ2hhdC51bnNoaWZ0KG1zZ0l0ZW0pO1xuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5kYXRhQ2hhdC5sZW5ndGg7XG4gICAgfSxcbiAgICBvbkxpc3RSZW5kZXIoaXRlbSwgaWR4KSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhQ2hhdFtpZHhdO1xuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQoZGF0YSwgaWR4KTtcbiAgICB9LFxuICAgIG9uTGlzdFNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSWQsIGxhc3RTZWxlY3RlZElkLCB2YWwpIHtcbiAgICAgICAgaWYgKCFpdGVtKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdCA9IGl0ZW0ubGlzdEl0ZW0uX2xpc3Q7XG4gICAgICAgIGxldCBzdHIgPSAnRGFuaCBzw6FjaCBob+G6oXQgxJHhu5luZyBoaeG7h24gdOG6oWkgbMOgOicgKyBsaXN0Lm5vZGUubmFtZSArICfvvIxM4buxYSBjaOG7jW4gaGnhu4duIHThuqFpIGzDoO+8micgKyBzZWxlY3RlZElkICsgJ++8jEzhu7FhIGNo4buNbiBjdeG7kWkgY8O5bmcgbMOg77yaJyArIGxhc3RTZWxlY3RlZElkO1xuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxuICAgICAgICAgICAgc3RyICs9ICfvvIxHacOhIHRy4buLIGhp4buHbiB04bqhae+8micgKyB2YWw7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=