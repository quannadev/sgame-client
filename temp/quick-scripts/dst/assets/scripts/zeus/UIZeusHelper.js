
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/UIZeusHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '569a0hfmHhHS6Z7otbFzfYD', 'UIZeusHelper');
// scripts/zeus/UIZeusHelper.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    helperNode: cc.Node
  },
  onEnable: function onEnable() {
    var pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
    pageHelp.scrollToPage(0, 0);
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventHelperLeft: function eventHelperLeft() {
    var pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
    pageHelp.scrollToPage((pageHelp.getCurrentPageIndex() + 4) % 5, 0.2);
  },
  eventHelperRight: function eventHelperRight() {
    var pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
    pageHelp.scrollToPage((pageHelp.getCurrentPageIndex() + 1) % 5, 0.2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pldXMvVUlaZXVzSGVscGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlbHBlck5vZGUiLCJOb2RlIiwib25FbmFibGUiLCJwYWdlSGVscCIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiUGFnZVZpZXciLCJzY3JvbGxUb1BhZ2UiLCJldmVudENsb3NlIiwiYmFjayIsImV2ZW50SGVscGVyTGVmdCIsImdldEN1cnJlbnRQYWdlSW5kZXgiLCJldmVudEhlbHBlclJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSztBQURQLEdBSFA7QUFNTEMsRUFBQUEsUUFOSyxzQkFNTTtBQUNQLFFBQUlDLFFBQVEsR0FBRyxLQUFLSCxVQUFMLENBQWdCSSxjQUFoQixDQUErQixVQUEvQixFQUEyQ0MsWUFBM0MsQ0FBd0RULEVBQUUsQ0FBQ1UsUUFBM0QsQ0FBZjtBQUNBSCxJQUFBQSxRQUFRLENBQUNJLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekI7QUFDSCxHQVRJO0FBVUxDLEVBQUFBLFVBVkssd0JBVVE7QUFDVCxTQUFLQyxJQUFMO0FBQ0gsR0FaSTtBQWFMQyxFQUFBQSxlQWJLLDZCQWFhO0FBQ2QsUUFBSVAsUUFBUSxHQUFHLEtBQUtILFVBQUwsQ0FBZ0JJLGNBQWhCLENBQStCLFVBQS9CLEVBQTJDQyxZQUEzQyxDQUF3RFQsRUFBRSxDQUFDVSxRQUEzRCxDQUFmO0FBQ0FILElBQUFBLFFBQVEsQ0FBQ0ksWUFBVCxDQUFzQixDQUFDSixRQUFRLENBQUNRLG1CQUFULEtBQWdDLENBQWpDLElBQW9DLENBQTFELEVBQTZELEdBQTdEO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLGdCQWpCSyw4QkFpQmM7QUFDZixRQUFJVCxRQUFRLEdBQUcsS0FBS0gsVUFBTCxDQUFnQkksY0FBaEIsQ0FBK0IsVUFBL0IsRUFBMkNDLFlBQTNDLENBQXdEVCxFQUFFLENBQUNVLFFBQTNELENBQWY7QUFDQUgsSUFBQUEsUUFBUSxDQUFDSSxZQUFULENBQXNCLENBQUNKLFFBQVEsQ0FBQ1EsbUJBQVQsS0FBZ0MsQ0FBakMsSUFBb0MsQ0FBMUQsRUFBNkQsR0FBN0Q7QUFDSDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaGVscGVyTm9kZTogY2MuTm9kZVxuICAgIH0sXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGxldCBwYWdlSGVscCA9IHRoaXMuaGVscGVyTm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhZ2V2aWV3XCIpLmdldENvbXBvbmVudChjYy5QYWdlVmlldyk7XG4gICAgICAgIHBhZ2VIZWxwLnNjcm9sbFRvUGFnZSgwLCAwKTtcbiAgICB9LFxuICAgIGV2ZW50Q2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgIH0sXG4gICAgZXZlbnRIZWxwZXJMZWZ0KCkge1xuICAgICAgICBsZXQgcGFnZUhlbHAgPSB0aGlzLmhlbHBlck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYWdldmlld1wiKS5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xuICAgICAgICBwYWdlSGVscC5zY3JvbGxUb1BhZ2UoKHBhZ2VIZWxwLmdldEN1cnJlbnRQYWdlSW5kZXgoKSArNCklNSwgMC4yKTtcbiAgICB9LFxuICAgIGV2ZW50SGVscGVyUmlnaHQoKSB7XG4gICAgICAgIGxldCBwYWdlSGVscCA9IHRoaXMuaGVscGVyTm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhZ2V2aWV3XCIpLmdldENvbXBvbmVudChjYy5QYWdlVmlldyk7XG4gICAgICAgIHBhZ2VIZWxwLnNjcm9sbFRvUGFnZSgocGFnZUhlbHAuZ2V0Q3VycmVudFBhZ2VJbmRleCgpICsxKSU1LCAwLjIpO1xuICAgIH0sXG59KTtcbiJdfQ==