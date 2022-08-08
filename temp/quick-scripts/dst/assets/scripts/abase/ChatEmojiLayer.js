
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL0NoYXRFbW9qaUxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdENvbnRyb2xsZXIiLCJjb250cm9sZXJTZW5kIiwiY2hhdENvbnRyb2xsZXIiLCJvbkV2ZW50U2VsZWN0IiwiZXZlbnQiLCJkYXRhIiwidGFyZ2V0IiwicGFyZW50IiwiYWN0aXZlIiwibXNnIiwic2VuZE1lc3NhZ2UiLCJtZXNzIiwicGFyYW0iLCJTbWFydEZveFNESyIsIlNPYmplY3QiLCJwdXRVdGZTdHJpbmciLCJHYW1lVmFyaWFibGVzIiwiZ2V0RGlzcGxheU5hbWUiLCJteVNlbGYiLCJzZW5kIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIlB1YmxpY01lc3NhZ2VSZXF1ZXN0IiwiZXZlbnRTZW5kQ2hhdCIsImVkdENoYXQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJFZGl0Qm94Iiwic3RyaW5nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQUtMQyxFQUFBQSxjQUxLLDBCQUtVQyxhQUxWLEVBS3lCO0FBQzFCLFNBQUtDLGNBQUwsR0FBc0JELGFBQXRCO0FBQ0gsR0FQSTtBQVFMRSxFQUFBQSxhQVJLLHlCQVFTQyxLQVJULEVBUWdCQyxJQVJoQixFQVFzQjtBQUN2QkQsSUFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQXBCLEdBQTZCLEtBQTdCO0FBQ0EsUUFBSUMsR0FBRyxHQUFJLFdBQVNKLElBQXBCO0FBQ0EsU0FBS0ssV0FBTCxDQUFpQkQsR0FBakI7QUFDSCxHQVpJO0FBYUxDLEVBQUFBLFdBYkssdUJBYU9DLElBYlAsRUFhWTtBQUNiLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxXQUFXLENBQUNDLE9BQWhCLEVBQVo7QUFDQUYsSUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CLElBQW5CLEVBQXlCLEVBQXpCO0FBQ0FILElBQUFBLEtBQUssQ0FBQ0csWUFBTixDQUFtQixJQUFuQixFQUF5QkMsYUFBYSxDQUFDQyxjQUFkLENBQTZCLEtBQUtmLGNBQUwsQ0FBb0JnQixNQUFqRCxDQUF6QjtBQUNBLFNBQUtoQixjQUFMLENBQW9CaUIsSUFBcEIsQ0FBeUIsSUFBSU4sV0FBVyxDQUFDTyxRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLG9CQUF6QyxDQUE4RFosSUFBOUQsRUFBb0VDLEtBQXBFLENBQXpCO0FBQ0gsR0FsQkk7QUFtQkxZLEVBQUFBLGFBbkJLLHlCQW1CU3BCLEtBbkJULEVBbUJnQkMsSUFuQmhCLEVBbUJzQjtBQUN2QixRQUFJb0IsT0FBTyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixTQUF6QixFQUFvQ0MsWUFBcEMsQ0FBaURoQyxFQUFFLENBQUNpQyxPQUFwRCxDQUFkOztBQUNBLFFBQUdKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlQyxNQUFmLEdBQXdCLENBQTNCLEVBQTZCO0FBQ3pCLFdBQUtyQixXQUFMLENBQWlCZSxPQUFPLENBQUNLLE1BQXpCO0FBQ0FMLE1BQUFBLE9BQU8sQ0FBQ0ssTUFBUixHQUFpQixFQUFqQjtBQUNBMUIsTUFBQUEsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BQXBCLEdBQTZCLEtBQTdCO0FBQ0g7QUFDSjtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgIH0sXG4gICAgaW5pdENvbnRyb2xsZXIoY29udHJvbGVyU2VuZCkge1xuICAgICAgICB0aGlzLmNoYXRDb250cm9sbGVyID0gY29udHJvbGVyU2VuZDtcbiAgICB9LFxuICAgIG9uRXZlbnRTZWxlY3QoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1zZyA9ICBcImVtb2lqX1wiK2RhdGE7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnKTtcbiAgICB9LFxuICAgIHNlbmRNZXNzYWdlKG1lc3Mpe1xuICAgICAgICBsZXQgcGFyYW0gPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xuICAgICAgICBwYXJhbS5wdXRVdGZTdHJpbmcoXCJmYlwiLCBcIlwiKTtcbiAgICAgICAgcGFyYW0ucHV0VXRmU3RyaW5nKFwiZG5cIiwgR2FtZVZhcmlhYmxlcy5nZXREaXNwbGF5TmFtZSh0aGlzLmNoYXRDb250cm9sbGVyLm15U2VsZikpO1xuICAgICAgICB0aGlzLmNoYXRDb250cm9sbGVyLnNlbmQobmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5QdWJsaWNNZXNzYWdlUmVxdWVzdChtZXNzLCBwYXJhbSkpO1xuICAgIH0sXG4gICAgZXZlbnRTZW5kQ2hhdChldmVudCwgZGF0YSkge1xuICAgICAgICBsZXQgZWR0Q2hhdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImVkdENoYXRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xuICAgICAgICBpZihlZHRDaGF0LnN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoZWR0Q2hhdC5zdHJpbmcpO1xuICAgICAgICAgICAgZWR0Q2hhdC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==