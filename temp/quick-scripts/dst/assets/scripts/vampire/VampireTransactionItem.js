
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVmFtcGlyZVRyYW5zYWN0aW9uSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYlRpbWUiLCJsYk11Y0RhdCIsImxiV2luIiwibGJEZXRhaWwiLCJfZGF0YVJhbmsiLCJpbml0Iiwic3R0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwidGltZSIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJzdGFrZXMiLCJ3aW4iLCJldmVudERldGFpbCIsInNob3ciLCJwb3AiLCJzcmMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsUUFBUSxFQUFNUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsS0FBSyxFQUFTUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsUUFBUSxFQUFNVCxFQUFFLENBQUNLLEtBTFQ7QUFNUkssSUFBQUEsU0FBUyxFQUFNO0FBTlAsR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBQyxHQVhBLEVBV0tDLFFBWEwsRUFXZTtBQUNoQixTQUFLSCxTQUFMLEdBQWlCRyxRQUFqQjtBQUNBLFNBQUtULFNBQUwsQ0FBZVUsTUFBZixHQUEwQixNQUFJRCxRQUFRLENBQUNFLE9BQXZDO0FBQ0EsU0FBS1QsTUFBTCxDQUFZUSxNQUFaLEdBQTBCRCxRQUFRLENBQUNHLElBQW5DO0FBQ0EsU0FBS1QsUUFBTCxDQUFjTyxNQUFkLEdBQTBCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ00sTUFBOUIsQ0FBMUI7QUFDQSxTQUFLWCxLQUFMLENBQVdNLE1BQVgsR0FBMEJHLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkwsUUFBUSxDQUFDTyxHQUE5QixDQUExQjtBQUNILEdBakJJO0FBa0JMQyxFQUFBQSxXQWxCSyx5QkFrQlM7QUFDVixTQUFLQyxJQUFMLENBQVUsd0JBQVYsRUFBb0M7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLFNBQWpCO0FBQTRCQyxNQUFBQSxJQUFJLEVBQUUsS0FBS2Y7QUFBdkMsS0FBcEM7QUFDSDtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTXVjRGF0ICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiRGV0YWlsICAgIDogY2MuTGFiZWwsXG4gICAgICAgIF9kYXRhUmFuayAgIDogIG51bGwsXG4gICAgfSxcbiAgICBpbml0KHN0dCwgZGF0YVJhbmspIHtcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhUmFuaztcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBcIiNcIitkYXRhUmFuay5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IGRhdGFSYW5rLnRpbWU7XG4gICAgICAgIHRoaXMubGJNdWNEYXQuc3RyaW5nICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsuc3Rha2VzKTtcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xuICAgIH0sXG4gICAgZXZlbnREZXRhaWwoKSB7XG4gICAgICAgIHRoaXMuc2hvdyhcIlVJVmFtcGlyZUhpc3RvcnlEZXRhaWxcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInZhbXBpcmVcIiwgZGF0YTogdGhpcy5fZGF0YVJhbmt9KVxuICAgIH1cblxufSk7XG4iXX0=