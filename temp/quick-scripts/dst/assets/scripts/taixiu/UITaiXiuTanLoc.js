
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RhaXhpdS9VSVRhaVhpdVRhbkxvYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZHRUYW5Mb2MiLCJFZGl0Qm94IiwidGFuTG9jIiwiTm9kZSIsIm9uRW5hYmxlIiwic3RyaW5nIiwiYWN0aXZlIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENsb3NlIiwiYmFjayIsImV2ZW50QmV0TG9jIiwiZXZlbnQiLCJkYXRhIiwiZXZlbnRUYW5Mb2MiLCJjaGlwIiwicGFyc2VJbnQiLCJiZXRSZXF1ZXN0IiwiVGFpWGl1UmVxdWVzdCIsIlRhbkxvY1JlcXVlc3QiLCJzZXRDaGlwIiwiU21hcnRGb3hTREsiLCJUYWlYaXVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwic2VuZCIsInRvU1JlcXVlc3QiLCJzaG93VG9hc3QiLCJ0YW5Mb2NSZXMiLCJ0YW5Mb2NJbmZvIiwibWVzVGFuIiwibWVzc2FnZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzY2hlZHVsZU9uY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLE9BRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNPO0FBRlQsR0FIUDtBQVFMQyxFQUFBQSxRQVJLLHNCQVFPO0FBQ1IsU0FBS0osU0FBTCxDQUFlSyxNQUFmLEdBQXdCLEdBQXhCO0FBQ0EsU0FBS0gsTUFBTCxDQUFZSSxNQUFaLEdBQXFCLEtBQXJCOztBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CWixFQUFFLENBQUNhLFVBQTNCLEVBQXNDO0FBQ2xDYixNQUFBQSxFQUFFLENBQUNhLFVBQUgsSUFBbUIsQ0FBbkI7QUFDQSxXQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBbUJaLEVBQUUsQ0FBQ2EsVUFBdEI7QUFDSDtBQUNKLEdBZkk7QUFnQkxDLEVBQUFBLFVBaEJLLHdCQWdCUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQWxCSTtBQW1CTEMsRUFBQUEsV0FuQkssdUJBbUJPQyxLQW5CUCxFQW1CY0MsSUFuQmQsRUFtQm9CO0FBQ3JCLFNBQUtkLFNBQUwsQ0FBZUssTUFBZixHQUF3QlMsSUFBeEI7QUFDSCxHQXJCSTtBQXNCTEMsRUFBQUEsV0F0QksseUJBc0JRO0FBQ1QsUUFBSUMsSUFBSSxHQUFHLEtBQUtoQixTQUFMLENBQWVLLE1BQTFCO0FBQ0FXLElBQUFBLElBQUksR0FBT0MsUUFBUSxDQUFDRCxJQUFELENBQW5COztBQUNBLFFBQUlBLElBQUksR0FBRyxDQUFYLEVBQWE7QUFDVCxVQUFJRSxVQUFVLEdBQUcsSUFBSUMsYUFBYSxDQUFDQyxhQUFsQixFQUFqQjtBQUNBRixNQUFBQSxVQUFVLENBQUNHLE9BQVgsQ0FBbUJMLElBQW5CO0FBQ0FNLE1BQUFBLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDQyxJQUExQyxDQUErQ1AsVUFBVSxDQUFDUSxVQUFYLEVBQS9DO0FBQ0gsS0FKRCxNQUlNO0FBQ0YsV0FBS0MsU0FBTCxDQUFlLDZCQUFmO0FBQ0g7QUFDSixHQWhDSTtBQWlDTEMsRUFBQUEsU0FqQ0sscUJBaUNLQyxVQWpDTCxFQWlDZ0I7QUFDakIsUUFBSUEsVUFBVSxDQUFDQyxNQUFYLElBQXFCLElBQXpCLEVBQThCO0FBQzFCLFdBQUtILFNBQUwsQ0FBZSwwQkFDWCxrQkFESjtBQUVILEtBSEQsTUFHTTtBQUNGLFdBQUtBLFNBQUwsQ0FBZUUsVUFBVSxDQUFDQyxNQUExQjtBQUNIO0FBQ0osR0F4Q0k7QUF5Q0xILEVBQUFBLFNBekNLLHFCQXlDS0ksT0F6Q0wsRUF5Q2M7QUFDZixTQUFLN0IsTUFBTCxDQUFZSSxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0osTUFBTCxDQUFZOEIsY0FBWixDQUEyQixRQUEzQixFQUFxQ0MsWUFBckMsQ0FBa0RyQyxFQUFFLENBQUNzQyxLQUFyRCxFQUE0RDdCLE1BQTVELEdBQXFFMEIsT0FBckU7QUFDQSxTQUFLSSxZQUFMLENBQWtCLFlBQVk7QUFDMUIsV0FBS2pDLE1BQUwsQ0FBWUksTUFBWixHQUFxQixLQUFyQjtBQUNILEtBRkQsRUFFRyxDQUZIO0FBR0g7QUEvQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGVkdFRhbkxvYyAgIDogY2MuRWRpdEJveCxcbiAgICAgICAgdGFuTG9jICAgICAgOiBjYy5Ob2RlXG4gICAgfSxcblxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgdGhpcy5lZHRUYW5Mb2Muc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMudGFuTG9jLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcbiAgICAgICAgICAgIGNjLmxhc3RaSW5kZXggICArPSAxO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXg7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50Q2xvc2UoKSB7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgIH0sXG4gICAgZXZlbnRCZXRMb2MoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5lZHRUYW5Mb2Muc3RyaW5nID0gZGF0YTtcbiAgICB9LFxuICAgIGV2ZW50VGFuTG9jKCl7XG4gICAgICAgIGxldCBjaGlwID0gdGhpcy5lZHRUYW5Mb2Muc3RyaW5nO1xuICAgICAgICBjaGlwICAgICA9IHBhcnNlSW50KGNoaXApO1xuICAgICAgICBpZiAoY2hpcCA+IDApe1xuICAgICAgICAgICAgbGV0IGJldFJlcXVlc3QgPSBuZXcgVGFpWGl1UmVxdWVzdC5UYW5Mb2NSZXF1ZXN0KCk7XG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldENoaXAoY2hpcCk7XG4gICAgICAgICAgICBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGJldFJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJUaeG7gW4gdMOhbiBs4buZYyBwaOG6o2kgbOG7m24gaMahbiAwXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0YW5Mb2NSZXModGFuTG9jSW5mbyl7XG4gICAgICAgIGlmICh0YW5Mb2NJbmZvLm1lc1RhbiA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiVMOhbiBs4buZYyB0aMOgbmggY8O0bmcuXFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiQ2jDumMgYuG6oW4gbWF5IG3huq9uXCIpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdCh0YW5Mb2NJbmZvLm1lc1Rhbik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dUb2FzdChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudGFuTG9jLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFuTG9jLmdldENoaWxkQnlOYW1lKFwibGJOb3RpXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50YW5Mb2MuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDIpXG4gICAgfVxufSk7XG4iXX0=