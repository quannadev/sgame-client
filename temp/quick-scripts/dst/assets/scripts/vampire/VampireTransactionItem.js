
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e67cauYkXNE8KbOSZ73WR9f', 'VampireTransactionItem');
// scripts/vampire/VampireTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbWin: cc.Label,
    lbDetail: cc.Label,
    _dataRank: null
  },
  init: function init(stt, dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UIVampireHistoryDetail", {
      pop: true,
      src: "vampire",
      data: this._dataRank
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVmFtcGlyZVRyYW5zYWN0aW9uSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYlRpbWUiLCJsYk11Y0RhdCIsImxiV2luIiwibGJEZXRhaWwiLCJfZGF0YVJhbmsiLCJpbml0Iiwic3R0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwidGltZSIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJzdGFrZXMiLCJ3aW4iLCJldmVudERldGFpbCIsInNob3ciLCJwb3AiLCJzcmMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsUUFBUSxFQUFNUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsS0FBSyxFQUFTUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsUUFBUSxFQUFNVCxFQUFFLENBQUNLLEtBTFQ7QUFNUkssSUFBQUEsU0FBUyxFQUFNO0FBTlAsR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBQyxHQVhBLEVBV0tDLFFBWEwsRUFXZTtBQUNoQixTQUFLSCxTQUFMLEdBQWlCRyxRQUFqQjtBQUNBLFNBQUtULFNBQUwsQ0FBZVUsTUFBZixHQUEwQixNQUFJRCxRQUFRLENBQUNFLE9BQXZDO0FBQ0EsU0FBS1QsTUFBTCxDQUFZUSxNQUFaLEdBQTBCRCxRQUFRLENBQUNHLElBQW5DO0FBQ0EsU0FBS1QsUUFBTCxDQUFjTyxNQUFkLEdBQTBCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ00sTUFBOUIsQ0FBMUI7QUFDQSxTQUFLWCxLQUFMLENBQVdNLE1BQVgsR0FBMEJHLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkwsUUFBUSxDQUFDTyxHQUE5QixDQUExQjtBQUNILEdBakJJO0FBa0JMQyxFQUFBQSxXQWxCSyx5QkFrQlM7QUFDVixTQUFLQyxJQUFMLENBQVUsd0JBQVYsRUFBb0M7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLFNBQWpCO0FBQTRCQyxNQUFBQSxJQUFJLEVBQUUsS0FBS2Y7QUFBdkMsS0FBcEM7QUFDSDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTXVjRGF0ICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYkRldGFpbCAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIF9kYXRhUmFuayAgIDogIG51bGwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChzdHQsIGRhdGFSYW5rKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhUmFuaztcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IFwiI1wiK2RhdGFSYW5rLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBkYXRhUmFuay50aW1lO1xyXG4gICAgICAgIHRoaXMubGJNdWNEYXQuc3RyaW5nICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsuc3Rha2VzKTtcclxuICAgICAgICB0aGlzLmxiV2luLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLndpbik7XHJcbiAgICB9LFxyXG4gICAgZXZlbnREZXRhaWwoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlWYW1waXJlSGlzdG9yeURldGFpbFwiLCB7cG9wOiB0cnVlLCBzcmM6IFwidmFtcGlyZVwiLCBkYXRhOiB0aGlzLl9kYXRhUmFua30pXHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19