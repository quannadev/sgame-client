
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0945uEP3FNqrz9E+Qg4zYZ', 'VampireController');
// scripts/vampire/VampireController.js

"use strict";

var VampireEvent = require('VampireEvent');

var VampireController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(VampireEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(VampireEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    UIManger.show("UIVampireLobby", {
      pop: true,
      src: "vampire"
    });
  },
  onUserVariablesUpdate: function onUserVariablesUpdate(event) {
    this._super(event);

    if (this.getUI() != null) this.getUI().updateUserVariableSlot(event);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = sItem.getDouble("id").toFixed(0);
      item.time = sItem.getUtfString("t");
      item.stakes = sItem.getDouble("b");
      item.win = sItem.getDouble("w");
      item.resultMap = sItem.getByteArray("rs");
      item.linewin = sItem.getByteArray("lw");
      items.push(item);
    }

    UIManger.show("UIVampireHistoryTransaction", {
      pop: true,
      src: 'vampire',
      data: {
        items: items
      }
    });
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i + 1;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      item.time = sItem.getUtfString("t");
      item.win_type = "Thắng";
      items.push(item);
    }

    UIManger.show("UIVampireRank", {
      pop: true,
      src: 'vampire',
      data: {
        items: items
      }
    });
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      if (this.getUI() != null) this.getUI().node.active = false;
      UIManger.show("UIHome");
    }
  },
  onUserResultEvent: function onUserResultEvent(event) {
    var userBet = new VampireEvent.ResultEvent().fromEvent(event);
    this.getUI().VampireRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new VampireController("UIVampire", "vampire");
  return instance;
};

SmartFoxSDK.VampireController = module.exports = getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVmFtcGlyZUNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiVmFtcGlyZUV2ZW50IiwicmVxdWlyZSIsIlZhbXBpcmVDb250cm9sbGVyIiwiU21hcnRGb3hTREsiLCJCYXNlQ29udHJvbGxlciIsImV4dGVuZCIsIm1fdGFibGVJbmZvIiwicmVnaXN0ZXJFdmVudHMiLCJfc3VwZXIiLCJab25lSW5zdGFuY2UiLCJhZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uIiwiUkVTUE9OU0VfTkFNRSIsIlJFU1VMVF9SRVMiLCJvblVzZXJSZXN1bHRFdmVudCIsInJlbW92ZUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24iLCJvbkV2ZW50TG9naW4iLCJldmVudCIsIl9yZXF1ZXN0Sm9pblJvb20iLCJ6b25lTmFtZSIsIm9uRXZlbnRSb29tSm9pbiIsIlVJTWFuZ2VyIiwic2hvdyIsInBvcCIsInNyYyIsIm9uVXNlclZhcmlhYmxlc1VwZGF0ZSIsImdldFVJIiwidXBkYXRlVXNlclZhcmlhYmxlU2xvdCIsIm9uSGlzdG9yeUV2ZW50IiwiZGF0YSIsImdldFNBcnJheSIsIml0ZW1zIiwiaSIsInNpemUiLCJzSXRlbSIsImdldCIsImdldE9iamVjdCIsIml0ZW0iLCJzZXNzaW9uIiwiZ2V0RG91YmxlIiwidG9GaXhlZCIsInRpbWUiLCJnZXRVdGZTdHJpbmciLCJzdGFrZXMiLCJ3aW4iLCJyZXN1bHRNYXAiLCJnZXRCeXRlQXJyYXkiLCJsaW5ld2luIiwicHVzaCIsIm9uTGVhZGVyQm9hcmRFdmVudCIsImFjY291bnQiLCJ3aW5fdHlwZSIsIm9uRXZlbnRVc2VyRXhpdFJvb20iLCJ1c2VyIiwiaXNJdE1lIiwibm9kZSIsImFjdGl2ZSIsInVzZXJCZXQiLCJSZXN1bHRFdmVudCIsImZyb21FdmVudCIsIlZhbXBpcmVSdW4iLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBw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QUNILEdBckRxRDtBQXNEdERxQixFQUFBQSxtQkF0RHNELCtCQXNEbENuQyxLQXREa0MsRUFzRDVCO0FBQ3RCLFFBQUlvQyxJQUFJLEdBQUdwQyxLQUFLLENBQUNvQyxJQUFqQjs7QUFDQSxRQUFHQSxJQUFJLENBQUNDLE1BQVIsRUFBZTtBQUNYLFVBQUksS0FBSzVCLEtBQUwsTUFBZ0IsSUFBcEIsRUFDSSxLQUFLQSxLQUFMLEdBQWE2QixJQUFiLENBQWtCQyxNQUFsQixHQUEyQixLQUEzQjtBQUNKbkMsTUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWMsUUFBZDtBQUNIO0FBQ0osR0E3RHFEO0FBOER0RFQsRUFBQUEsaUJBOURzRCw2QkE4RHBDSSxLQTlEb0MsRUE4RDlCO0FBQ3BCLFFBQUl3QyxPQUFPLEdBQUcsSUFBSXpELFlBQVksQ0FBQzBELFdBQWpCLEdBQStCQyxTQUEvQixDQUF5QzFDLEtBQXpDLENBQWQ7QUFDQSxTQUFLUyxLQUFMLEdBQWFrQyxVQUFiLENBQXdCSCxPQUF4QjtBQUNIO0FBakVxRCxDQUFsQyxDQUF4QjtBQW9FQSxJQUFJSSxRQUFRLEdBQUcsSUFBZjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQzFCLE1BQUdELFFBQVEsSUFBSSxJQUFmLEVBQ0lBLFFBQVEsR0FBRyxJQUFJM0QsaUJBQUosQ0FBc0IsV0FBdEIsRUFBbUMsU0FBbkMsQ0FBWDtBQUNKLFNBQU8yRCxRQUFQO0FBQ0gsQ0FKRDs7QUFLQTFELFdBQVcsQ0FBQ0QsaUJBQVosR0FBZ0M2RCxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLFdBQVcsRUFBNUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBWYW1waXJlRXZlbnQgPSByZXF1aXJlKCdWYW1waXJlRXZlbnQnKVxyXG5sZXQgVmFtcGlyZUNvbnRyb2xsZXIgPSBTbWFydEZveFNESy5CYXNlQ29udHJvbGxlci5leHRlbmQoe1xyXG4gICAgbV90YWJsZUluZm86IG51bGwsXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihWYW1waXJlRXZlbnQuUkVTUE9OU0VfTkFNRS5SRVNVTFRfUkVTLCB0aGlzLm9uVXNlclJlc3VsdEV2ZW50LCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVFdmVudHMoKXtcclxuICAgICAgICB0aGlzLl9zdXBlcigpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oVmFtcGlyZUV2ZW50LlJFU1BPTlNFX05BTUUuUkVTVUxUX1JFUywgdGhpcy5vblVzZXJSZXN1bHRFdmVudCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25FdmVudExvZ2luKGV2ZW50KXtcclxuICAgICAgICB0aGlzLl9zdXBlcihldmVudCk7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEpvaW5Sb29tKHRoaXMuem9uZU5hbWUpO1xyXG4gICAgfSxcclxuICAgIG9uRXZlbnRSb29tSm9pbihldmVudCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoZXZlbnQpO1xyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVZhbXBpcmVMb2JieVwiLCB7cG9wOiB0cnVlLCBzcmM6IFwidmFtcGlyZVwifSk7XHJcbiAgICB9LFxyXG4gICAgb25Vc2VyVmFyaWFibGVzVXBkYXRlKGV2ZW50KXtcclxuICAgICAgICB0aGlzLl9zdXBlcihldmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VUkoKSAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmdldFVJKCkudXBkYXRlVXNlclZhcmlhYmxlU2xvdChldmVudCk7XHJcbiAgICB9LFxyXG4gICAgb25IaXN0b3J5RXZlbnQoZXZlbnQpe1xyXG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZ2V0U0FycmF5KFwiZFwiKTtcclxuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGF0YS5zaXplKCk7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBzSXRlbSA9IGRhdGEuZ2V0KGkpLmdldE9iamVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHt9O1xyXG4gICAgICAgICAgICBpdGVtLnNlc3Npb24gPSBzSXRlbS5nZXREb3VibGUoXCJpZFwiKS50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJ0XCIpO1xyXG4gICAgICAgICAgICBpdGVtLnN0YWtlcyA9IHNJdGVtLmdldERvdWJsZShcImJcIik7XHJcbiAgICAgICAgICAgIGl0ZW0ud2luID0gc0l0ZW0uZ2V0RG91YmxlKFwid1wiKTtcclxuICAgICAgICAgICAgaXRlbS5yZXN1bHRNYXAgPSBzSXRlbS5nZXRCeXRlQXJyYXkoXCJyc1wiKTtcclxuICAgICAgICAgICAgaXRlbS5saW5ld2luID0gc0l0ZW0uZ2V0Qnl0ZUFycmF5KFwibHdcIik7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVZhbXBpcmVIaXN0b3J5VHJhbnNhY3Rpb25cIiwge3BvcDogdHJ1ZSwgc3JjOiAndmFtcGlyZScsIGRhdGE6IHtpdGVtczogaXRlbXN9fSk7XHJcbiAgICB9LFxyXG4gICAgb25MZWFkZXJCb2FyZEV2ZW50KGV2ZW50KXtcclxuICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmdldFNBcnJheShcImRcIik7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgZGF0YS5zaXplKCk7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHNJdGVtID0gZGF0YS5nZXQoaSkuZ2V0T2JqZWN0KCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge307XHJcbiAgICAgICAgICAgIGl0ZW0uc2Vzc2lvbiA9IGkgKyAxO1xyXG4gICAgICAgICAgICBpdGVtLmFjY291bnQgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJkblwiKTtcclxuICAgICAgICAgICAgaXRlbS53aW4gPSBzSXRlbS5nZXREb3VibGUoXCJtXCIpO1xyXG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJ0XCIpO1xyXG4gICAgICAgICAgICBpdGVtLndpbl90eXBlID0gXCJUaOG6r25nXCI7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVZhbXBpcmVSYW5rXCIsIHtwb3A6IHRydWUsIHNyYzogJ3ZhbXBpcmUnLCBkYXRhOiB7aXRlbXM6IGl0ZW1zfX0pO1xyXG4gICAgfSxcclxuICAgIG9uRXZlbnRVc2VyRXhpdFJvb20oZXZlbnQpe1xyXG4gICAgICAgIGxldCB1c2VyID0gZXZlbnQudXNlcjtcclxuICAgICAgICBpZih1c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFVJKCkgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlIb21lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblVzZXJSZXN1bHRFdmVudChldmVudCl7XHJcbiAgICAgICAgbGV0IHVzZXJCZXQgPSBuZXcgVmFtcGlyZUV2ZW50LlJlc3VsdEV2ZW50KCkuZnJvbUV2ZW50KGV2ZW50KTtcclxuICAgICAgICB0aGlzLmdldFVJKCkuVmFtcGlyZVJ1bih1c2VyQmV0KTtcclxuICAgIH0sXHJcblxyXG59KTtcclxubGV0IGluc3RhbmNlID0gbnVsbDtcclxubGV0IGdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoaW5zdGFuY2UgPT0gbnVsbClcclxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBWYW1waXJlQ29udHJvbGxlcihcIlVJVmFtcGlyZVwiLCBcInZhbXBpcmVcIik7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIgPSBtb2R1bGUuZXhwb3J0cyA9IGdldEluc3RhbmNlKCk7XHJcbiJdfQ==