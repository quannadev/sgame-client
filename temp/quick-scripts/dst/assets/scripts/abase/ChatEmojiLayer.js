
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/ChatEmojiLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '726b8jRLjxJaqkF84ifSurM', 'ChatEmojiLayer');
// scripts/abase/ChatEmojiLayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  initController: function initController(controlerSend) {
    this.chatController = controlerSend;
  },
  onEventSelect: function onEventSelect(event, data) {
    event.target.parent.active = false;
    var msg = "emoij_" + data;
    this.sendMessage(msg);
  },
  sendMessage: function sendMessage(mess) {
    var param = new SmartFoxSDK.SObject();
    param.putUtfString("fb", "");
    param.putUtfString("dn", GameVariables.getDisplayName(this.chatController.mySelf));
    this.chatController.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(mess, param));
  },
  eventSendChat: function eventSendChat(event, data) {
    var edtChat = this.node.getChildByName("edtChat").getComponent(cc.EditBox);

    if (edtChat.string.length > 0) {
      this.sendMessage(edtChat.string);
      edtChat.string = "";
      event.target.parent.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXENoYXRFbW9qaUxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdENvbnRyb2xsZXIiLCJjb250cm9sZXJTZW5kIiwiY2hhdENvbnRyb2xsZXIiLCJvbkV2ZW50U2VsZWN0IiwiZXZlbnQiLCJkYXRhIiwidGFyZ2V0IiwicGFyZW50IiwiYWN0aXZlIiwibXNnIiwic2VuZE1lc3NhZ2UiLCJtZXNzIiwicGFyYW0iLCJTbWFydEZveFNESyIsIlNPYmplY3QiLCJwdXRVdGZTdHJpbmciLCJHYW1lVmFyaWFibGVzIiwiZ2V0RGlzcGxheU5hbWUiLCJteVNlbGYiLCJzZW5kIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIlB1YmxpY01lc3NhZ2VSZXF1ZXN0IiwiZXZlbnRTZW5kQ2hhdCIsImVkdENoYXQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJFZGl0Qm94Iiwic3RyaW5nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQUtMQyxFQUFBQSxjQUxLLDBCQUtVQyxhQUxWLEVBS3lCO0FBQzFCLFNBQUtDLGNBQUwsR0FBc0JELGFBQXRCO0FBQ0gsR0FQSTtBQVFMRSxFQUFBQSxhQVJLLHlCQVFTQyxLQVJULEVBUWdCQyxJQVJoQixFQVFzQjtBQUN2QkQsSUFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQXBCLEdBQTZCLEtBQTdCO0FBQ0EsUUFBSUMsR0FBRyxHQUFJLFdBQVNKLElBQXBCO0FBQ0EsU0FBS0ssV0FBTCxDQUFpQkQsR0FBakI7QUFDSCxHQVpJO0FBYUxDLEVBQUFBLFdBYkssdUJBYU9DLElBYlAsRUFhWTtBQUNiLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxXQUFXLENBQUNDLE9BQWhCLEVBQVo7QUFDQUYsSUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CLElBQW5CLEVBQXlCLEVBQXpCO0FBQ0FILElBQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQixJQUFuQixFQUF5QkMsYUFBYSxDQUFDQyxjQUFkLENBQTZCLEtBQUtmLGNBQUwsQ0FBb0JnQixNQUFqRCxDQUF6QjtBQUNBLFNBQUtoQixjQUFMLENBQW9CaUIsSUFBcEIsQ0FBeUIsSUFBSU4sV0FBVyxDQUFDTyxRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLG9CQUF6QyxDQUE4RFosSUFBOUQsRUFBb0VDLEtBQXBFLENBQXpCO0FBQ0gsR0FsQkk7QUFtQkxZLEVBQUFBLGFBbkJLLHlCQW1CU3BCLEtBbkJULEVBbUJnQkMsSUFuQmhCLEVBbUJzQjtBQUN2QixRQUFJb0IsT0FBTyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixTQUF6QixFQUFvQ0MsWUFBcEMsQ0FBaURoQyxFQUFFLENBQUNpQyxPQUFwRCxDQUFkOztBQUNBLFFBQUdKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlQyxNQUFmLEdBQXdCLENBQTNCLEVBQTZCO0FBQ3pCLFdBQUtyQixXQUFMLENBQWlCZSxPQUFPLENBQUNLLE1BQXpCO0FBQ0FMLE1BQUFBLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQixFQUFqQjtBQUNBMUIsTUFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQXBCLEdBQTZCLEtBQTdCO0FBQ0g7QUFDSjtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuICAgIGluaXRDb250cm9sbGVyKGNvbnRyb2xlclNlbmQpIHtcclxuICAgICAgICB0aGlzLmNoYXRDb250cm9sbGVyID0gY29udHJvbGVyU2VuZDtcclxuICAgIH0sXHJcbiAgICBvbkV2ZW50U2VsZWN0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbXNnID0gIFwiZW1vaWpfXCIrZGF0YTtcclxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZyk7XHJcbiAgICB9LFxyXG4gICAgc2VuZE1lc3NhZ2UobWVzcyl7XHJcbiAgICAgICAgbGV0IHBhcmFtID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcclxuICAgICAgICBwYXJhbS5wdXRVdGZTdHJpbmcoXCJmYlwiLCBcIlwiKTtcclxuICAgICAgICBwYXJhbS5wdXRVdGZTdHJpbmcoXCJkblwiLCBHYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lKHRoaXMuY2hhdENvbnRyb2xsZXIubXlTZWxmKSk7XHJcbiAgICAgICAgdGhpcy5jaGF0Q29udHJvbGxlci5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uUHVibGljTWVzc2FnZVJlcXVlc3QobWVzcywgcGFyYW0pKTtcclxuICAgIH0sXHJcbiAgICBldmVudFNlbmRDaGF0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IGVkdENoYXQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJlZHRDaGF0XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBpZihlZHRDaGF0LnN0cmluZy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShlZHRDaGF0LnN0cmluZyk7XHJcbiAgICAgICAgICAgIGVkdENoYXQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19