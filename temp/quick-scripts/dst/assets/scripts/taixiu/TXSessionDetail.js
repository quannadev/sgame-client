
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/TXSessionDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e047XDGmtJ6LTOAeD9TJnQ', 'TXSessionDetail');
// scripts/taixiu/TXSessionDetail.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbTime: cc.Label,
    lbDat: cc.Label,
    lbName: cc.Label
  },
  init: function init(dataSession) {
    this.lbTime.string = Utils.reFormatDisplayTime(dataSession.time).split(" ")[0];
    this.lbDat.string = dataSession.betTai > 0 ? Utils.addDotToNumber(dataSession.betTai) : Utils.addDotToNumber(dataSession.betXiu);
    this.lbName.string = dataSession.displayName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RhaXhpdS9UWFNlc3Npb25EZXRhaWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiVGltZSIsIkxhYmVsIiwibGJEYXQiLCJsYk5hbWUiLCJpbml0IiwiZGF0YVNlc3Npb24iLCJzdHJpbmciLCJVdGlscyIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwic3BsaXQiLCJiZXRUYWkiLCJhZGREb3RUb051bWJlciIsImJldFhpdSIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFRSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsS0FBSyxFQUFNTixFQUFFLENBQUNLLEtBRk47QUFHUkUsSUFBQUEsTUFBTSxFQUFTUCxFQUFFLENBQUNLO0FBSFYsR0FIUDtBQVFMRyxFQUFBQSxJQVJLLGdCQVFBQyxXQVJBLEVBUWE7QUFDZCxTQUFLTCxNQUFMLENBQVlNLE1BQVosR0FBcUJDLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJILFdBQVcsQ0FBQ0ksSUFBdEMsRUFBNENDLEtBQTVDLENBQWtELEdBQWxELEVBQXVELENBQXZELENBQXJCO0FBQ0EsU0FBS1IsS0FBTCxDQUFXSSxNQUFYLEdBQXFCRCxXQUFXLENBQUNNLE1BQVosR0FBcUIsQ0FBckIsR0FBeUJKLEtBQUssQ0FBQ0ssY0FBTixDQUFxQlAsV0FBVyxDQUFDTSxNQUFqQyxDQUF6QixHQUFxRUosS0FBSyxDQUFDSyxjQUFOLENBQXFCUCxXQUFXLENBQUNRLE1BQWpDLENBQTFGO0FBQ0EsU0FBS1YsTUFBTCxDQUFZRyxNQUFaLEdBQXFCRCxXQUFXLENBQUNTLFdBQWpDO0FBQ0g7QUFaSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiRGF0ICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTmFtZSAgICAgICA6IGNjLkxhYmVsLFxuICAgIH0sXG4gICAgaW5pdChkYXRhU2Vzc2lvbikge1xuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgPSBVdGlscy5yZUZvcm1hdERpc3BsYXlUaW1lKGRhdGFTZXNzaW9uLnRpbWUpLnNwbGl0KFwiIFwiKVswXTtcbiAgICAgICAgdGhpcy5sYkRhdC5zdHJpbmcgID0gZGF0YVNlc3Npb24uYmV0VGFpID4gMCA/IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFTZXNzaW9uLmJldFRhaSkgOiAgVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVNlc3Npb24uYmV0WGl1KTtcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YVNlc3Npb24uZGlzcGxheU5hbWU7XG4gICAgfVxufSk7XG4iXX0=