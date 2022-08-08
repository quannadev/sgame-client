
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44eaadBqMZBmZM/NTjZ76z8', 'CandyRankItem');
// scripts/candy/CandyRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbStt: cc.Label,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label,
    lbWinType: cc.Label
  },
  init: function init(dataRank) {
    this.lbStt.string = dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
    this.lbWinType.string = dataRank.win_type;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L0NhbmR5UmFua0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU3R0IiwiTGFiZWwiLCJsYlRpbWUiLCJsYkFjY291bnQiLCJsYldpbiIsImxiV2luVHlwZSIsImluaXQiLCJkYXRhUmFuayIsInN0cmluZyIsInNlc3Npb24iLCJ0aW1lIiwiYWNjb3VudCIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJ3aW5fdHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBU0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFNBQVMsRUFBS1AsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBS1QsRUFBRSxDQUFDSztBQUxULEdBSFA7QUFVTEssRUFBQUEsSUFWSyxnQkFVQUMsUUFWQSxFQVVVO0FBQ1gsU0FBS1AsS0FBTCxDQUFXUSxNQUFYLEdBQTBCRCxRQUFRLENBQUNFLE9BQW5DO0FBQ0EsU0FBS1AsTUFBTCxDQUFZTSxNQUFaLEdBQTBCRCxRQUFRLENBQUNHLElBQW5DO0FBQ0EsU0FBS1AsU0FBTCxDQUFlSyxNQUFmLEdBQTBCRCxRQUFRLENBQUNJLE9BQW5DO0FBQ0EsU0FBS1AsS0FBTCxDQUFXSSxNQUFYLEdBQTBCSSxLQUFLLENBQUNDLGNBQU4sQ0FBcUJOLFFBQVEsQ0FBQ08sR0FBOUIsQ0FBMUI7QUFDQSxTQUFLVCxTQUFMLENBQWVHLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ1EsUUFBbkM7QUFDSDtBQWhCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiU3R0ICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiQWNjb3VudCAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiV2luVHlwZSAgIDogY2MuTGFiZWwsXG4gICAgfSxcbiAgICBpbml0KGRhdGFSYW5rKSB7XG4gICAgICAgIHRoaXMubGJTdHQuc3RyaW5nICAgICAgID0gZGF0YVJhbmsuc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBkYXRhUmFuay50aW1lO1xuICAgICAgICB0aGlzLmxiQWNjb3VudC5zdHJpbmcgICA9IGRhdGFSYW5rLmFjY291bnQ7XG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcbiAgICAgICAgdGhpcy5sYldpblR5cGUuc3RyaW5nICAgPSBkYXRhUmFuay53aW5fdHlwZTtcbiAgICB9XG59KTtcbiJdfQ==