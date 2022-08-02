
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/poker/PokerRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7f87GFHhxAeqSTT1R7ktC6', 'PokerRankItem');
// scripts/poker/PokerRankItem.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9rZXJcXFBva2VyUmFua0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJBY2NvdW50IiwibGJXaW4iLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiYWNjb3VudCIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtKLEVBQUUsQ0FBQ0ssS0FEVDtBQUVSQyxJQUFBQSxTQUFTLEVBQUtOLEVBQUUsQ0FBQ0ssS0FGVDtBQUdSRSxJQUFBQSxLQUFLLEVBQVNQLEVBQUUsQ0FBQ0s7QUFIVCxHQUhQO0FBUUxHLEVBQUFBLElBUkssZ0JBUUFDLFFBUkEsRUFRVTtBQUNYLFNBQUtMLFNBQUwsQ0FBZU0sTUFBZixHQUEwQkQsUUFBUSxDQUFDRSxPQUFuQztBQUNBLFNBQUtMLFNBQUwsQ0FBZUksTUFBZixHQUEwQkQsUUFBUSxDQUFDRyxPQUFuQztBQUNBLFNBQUtMLEtBQUwsQ0FBV0csTUFBWCxHQUEwQkcsS0FBSyxDQUFDQyxjQUFOLENBQXFCTCxRQUFRLENBQUNNLEdBQTlCLENBQTFCO0FBQ0g7QUFaSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiQWNjb3VudCAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbFxyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YVJhbmspIHtcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IGRhdGFSYW5rLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYkFjY291bnQuc3RyaW5nICAgPSBkYXRhUmFuay5hY2NvdW50O1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==