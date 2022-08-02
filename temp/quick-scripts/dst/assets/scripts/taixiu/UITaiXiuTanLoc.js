
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/UITaiXiuTanLoc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1daf1TMa/RH14YEUuQ9IzmW', 'UITaiXiuTanLoc');
// scripts/taixiu/UITaiXiuTanLoc.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    edtTanLoc: cc.EditBox,
    tanLoc: cc.Node
  },
  onEnable: function onEnable() {
    this.edtTanLoc.string = "0";
    this.tanLoc.active = false;

    if (this.node.zIndex <= cc.lastZIndex) {
      cc.lastZIndex += 1;
      this.node.zIndex = cc.lastZIndex;
    }
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventBetLoc: function eventBetLoc(event, data) {
    this.edtTanLoc.string = data;
  },
  eventTanLoc: function eventTanLoc() {
    var chip = this.edtTanLoc.string;
    chip = parseInt(chip);

    if (chip > 0) {
      var betRequest = new TaiXiuRequest.TanLocRequest();
      betRequest.setChip(chip);
      SmartFoxSDK.TaiXiuController.ZoneInstance.send(betRequest.toSRequest());
    } else {
      this.showToast("Tiền tán lộc phải lớn hơn 0");
    }
  },
  tanLocRes: function tanLocRes(tanLocInfo) {
    if (tanLocInfo.mesTan == null) {
      this.showToast("Tán lộc thành công.\n" + "Chúc bạn may mắn");
    } else {
      this.showToast(tanLocInfo.mesTan);
    }
  },
  showToast: function showToast(message) {
    this.tanLoc.active = true;
    this.tanLoc.getChildByName("lbNoti").getComponent(cc.Label).string = message;
    this.scheduleOnce(function () {
      this.tanLoc.active = false;
    }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxVSVRhaVhpdVRhbkxvYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZHRUYW5Mb2MiLCJFZGl0Qm94IiwidGFuTG9jIiwiTm9kZSIsIm9uRW5hYmxlIiwic3RyaW5nIiwiYWN0aXZlIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENsb3NlIiwiYmFjayIsImV2ZW50QmV0TG9jIiwiZXZlbnQiLCJkYXRhIiwiZXZlbnRUYW5Mb2MiLCJjaGlwIiwicGFyc2VJbnQiLCJiZXRSZXF1ZXN0IiwiVGFpWGl1UmVxdWVzdCIsIlRhbkxvY1JlcXVlc3QiLCJzZXRDaGlwIiwiU21hcnRGb3hTREsiLCJUYWlYaXVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwic2VuZCIsInRvU1JlcXVlc3QiLCJzaG93VG9hc3QiLCJ0YW5Mb2NSZXMiLCJ0YW5Mb2NJbmZvIiwibWVzVGFuIiwibWVzc2FnZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzY2hlZHVsZU9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLE9BRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNPO0FBRlQsR0FIUDtBQVFMQyxFQUFBQSxRQVJLLHNCQVFPO0FBQ1IsU0FBS0osU0FBTCxDQUFlSyxNQUFmLEdBQXdCLEdBQXhCO0FBQ0EsU0FBS0gsTUFBTCxDQUFZSSxNQUFaLEdBQXFCLEtBQXJCOztBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CWixFQUFFLENBQUNhLFVBQTNCLEVBQXNDO0FBQ2xDYixNQUFBQSxFQUFFLENBQUNhLFVBQUgsSUFBbUIsQ0FBbkI7QUFDQSxXQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBbUJaLEVBQUUsQ0FBQ2EsVUFBdEI7QUFDSDtBQUNKLEdBZkk7QUFnQkxDLEVBQUFBLFVBaEJLLHdCQWdCUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQWxCSTtBQW1CTEMsRUFBQUEsV0FuQkssdUJBbUJPQyxLQW5CUCxFQW1CY0MsSUFuQmQsRUFtQm9CO0FBQ3JCLFNBQUtkLFNBQUwsQ0FBZUssTUFBZixHQUF3QlMsSUFBeEI7QUFDSCxHQXJCSTtBQXNCTEMsRUFBQUEsV0F0QksseUJBc0JRO0FBQ1QsUUFBSUMsSUFBSSxHQUFHLEtBQUtoQixTQUFMLENBQWVLLE1BQTFCO0FBQ0FXLElBQUFBLElBQUksR0FBT0MsUUFBUSxDQUFDRCxJQUFELENBQW5COztBQUNBLFFBQUlBLElBQUksR0FBRyxDQUFYLEVBQWE7QUFDVCxVQUFJRSxVQUFVLEdBQUcsSUFBSUMsYUFBYSxDQUFDQyxhQUFsQixFQUFqQjtBQUNBRixNQUFBQSxVQUFVLENBQUNHLE9BQVgsQ0FBbUJMLElBQW5CO0FBQ0FNLE1BQUFBLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDQyxJQUExQyxDQUErQ1AsVUFBVSxDQUFDUSxVQUFYLEVBQS9DO0FBQ0gsS0FKRCxNQUlNO0FBQ0YsV0FBS0MsU0FBTCxDQUFlLDZCQUFmO0FBQ0g7QUFDSixHQWhDSTtBQWlDTEMsRUFBQUEsU0FqQ0sscUJBaUNLQyxVQWpDTCxFQWlDZ0I7QUFDakIsUUFBSUEsVUFBVSxDQUFDQyxNQUFYLElBQXFCLElBQXpCLEVBQThCO0FBQzFCLFdBQUtILFNBQUwsQ0FBZSwwQkFDWCxrQkFESjtBQUVILEtBSEQsTUFHTTtBQUNGLFdBQUtBLFNBQUwsQ0FBZUUsVUFBVSxDQUFDQyxNQUExQjtBQUNIO0FBQ0osR0F4Q0k7QUF5Q0xILEVBQUFBLFNBekNLLHFCQXlDS0ksT0F6Q0wsRUF5Q2M7QUFDZixTQUFLN0IsTUFBTCxDQUFZSSxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0osTUFBTCxDQUFZOEIsY0FBWixDQUEyQixRQUEzQixFQUFxQ0MsWUFBckMsQ0FBa0RyQyxFQUFFLENBQUNzQyxLQUFyRCxFQUE0RDdCLE1BQTVELEdBQXFFMEIsT0FBckU7QUFDQSxTQUFLSSxZQUFMLENBQWtCLFlBQVk7QUFDMUIsV0FBS2pDLE1BQUwsQ0FBWUksTUFBWixHQUFxQixLQUFyQjtBQUNILEtBRkQsRUFFRyxDQUZIO0FBR0g7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZWR0VGFuTG9jICAgOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHRhbkxvYyAgICAgIDogY2MuTm9kZVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkVuYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5lZHRUYW5Mb2Muc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy50YW5Mb2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIGNjLmxhc3RaSW5kZXggICArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH0sXHJcbiAgICBldmVudEJldExvYyhldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZWR0VGFuTG9jLnN0cmluZyA9IGRhdGE7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRUYW5Mb2MoKXtcclxuICAgICAgICBsZXQgY2hpcCA9IHRoaXMuZWR0VGFuTG9jLnN0cmluZztcclxuICAgICAgICBjaGlwICAgICA9IHBhcnNlSW50KGNoaXApO1xyXG4gICAgICAgIGlmIChjaGlwID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBiZXRSZXF1ZXN0ID0gbmV3IFRhaVhpdVJlcXVlc3QuVGFuTG9jUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldENoaXAoY2hpcCk7XHJcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQoYmV0UmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJUaeG7gW4gdMOhbiBs4buZYyBwaOG6o2kgbOG7m24gaMahbiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0YW5Mb2NSZXModGFuTG9jSW5mbyl7XHJcbiAgICAgICAgaWYgKHRhbkxvY0luZm8ubWVzVGFuID09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlTDoW4gbOG7mWMgdGjDoG5oIGPDtG5nLlxcblwiICtcclxuICAgICAgICAgICAgICAgIFwiQ2jDumMgYuG6oW4gbWF5IG3huq9uXCIpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QodGFuTG9jSW5mby5tZXNUYW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93VG9hc3QobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMudGFuTG9jLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50YW5Mb2MuZ2V0Q2hpbGRCeU5hbWUoXCJsYk5vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy50YW5Mb2MuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMilcclxuICAgIH1cclxufSk7XHJcbiJdfQ==