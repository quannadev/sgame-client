
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '342e0L42ZRPhbc9fD/cm/MF', 'MiniPokerTransactionItem');
// scripts/minipoker/MiniPokerTransactionItem.js

"use strict";

var PokerCard = require("PokerCard");

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    listBoBai: cc.Node,
    lbWin: cc.Label,
    _dataRank: null
  },
  init: function init(dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbWin.string = dataRank.win;
    var self = this;

    var newResult = this._convertPosCard(dataRank.resultMap);

    cc.loader.loadRes("images/minigame/minipoker/card2d", cc.SpriteAtlas, function (err, atlas) {
      if (err) {
        console.log(err);
        return;
      }

      self.ListCard = atlas;
      Promise.all(self.listBoBai.children.map(function (cardNode, index) {
        cardNode.getComponent('MiniPokerItem').init(self, newResult[index]);
      }));
    }.bind(this));
  },
  eventDetail: function eventDetail() {
    mm.audio.playButton();
  },
  _convertPosCard: function _convertPosCard(result) {
    var newResult = [];

    for (var i = 0; i < result.length; i++) {
      var card = new PokerCard.Card(result[i]);
      newResult.push(card.nameFile);
    }

    return newResult;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21pbmlwb2tlci9NaW5pUG9rZXJUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiUG9rZXJDYXJkIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiTXVjRGF0IiwibGlzdEJvQmFpIiwiTm9kZSIsImxiV2luIiwiX2RhdGFSYW5rIiwiaW5pdCIsImRhdGFSYW5rIiwic3RyaW5nIiwic2Vzc2lvbiIsIlV0aWxzIiwicmVGb3JtYXREaXNwbGF5VGltZSIsInRpbWUiLCJ3aW4iLCJzZWxmIiwibmV3UmVzdWx0IiwiX2NvbnZlcnRQb3NDYXJkIiwicmVzdWx0TWFwIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYXRsYXMiLCJjb25zb2xlIiwibG9nIiwiTGlzdENhcmQiLCJQcm9taXNlIiwiYWxsIiwiY2hpbGRyZW4iLCJtYXAiLCJjYXJkTm9kZSIsImluZGV4IiwiZ2V0Q29tcG9uZW50IiwiYmluZCIsImV2ZW50RGV0YWlsIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiY2FyZCIsIkNhcmQiLCJwdXNoIiwibmFtZUZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFLQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLFNBQVMsRUFBS1IsRUFBRSxDQUFDUyxJQUpUO0FBS1JDLElBQUFBLEtBQUssRUFBU1YsRUFBRSxDQUFDSyxLQUxUO0FBTVJNLElBQUFBLFNBQVMsRUFBTTtBQU5QLEdBSFA7QUFXTEMsRUFBQUEsSUFYSyxnQkFXQUMsUUFYQSxFQVdVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLVCxTQUFMLENBQWVVLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtULE1BQUwsQ0FBWVEsTUFBWixHQUEwQkUsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkosUUFBUSxDQUFDSyxJQUFuQyxDQUExQjtBQUNBLFNBQUtSLEtBQUwsQ0FBV0ksTUFBWCxHQUEwQkQsUUFBUSxDQUFDTSxHQUFuQztBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxlQUFMLENBQXFCVCxRQUFRLENBQUNVLFNBQTlCLENBQWhCOztBQUNBdkIsSUFBQUEsRUFBRSxDQUFDd0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLGtDQUFsQixFQUFzRHpCLEVBQUUsQ0FBQzBCLFdBQXpELEVBQXNFLFVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUN4RixVQUFHRCxHQUFILEVBQU87QUFDSEUsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFDQTtBQUNIOztBQUNEUCxNQUFBQSxJQUFJLENBQUNXLFFBQUwsR0FBZ0JILEtBQWhCO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFJLENBQUNaLFNBQUwsQ0FBZTBCLFFBQWYsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQVNDLFFBQVQsRUFBbUJDLEtBQW5CLEVBQXlCO0FBQzdERCxRQUFBQSxRQUFRLENBQUNFLFlBQVQsQ0FBc0IsZUFBdEIsRUFBdUMxQixJQUF2QyxDQUE0Q1EsSUFBNUMsRUFBa0RDLFNBQVMsQ0FBQ2dCLEtBQUQsQ0FBM0Q7QUFDSCxPQUZXLENBQVo7QUFHSCxLQVRxRSxDQVNwRUUsSUFUb0UsQ0FTL0QsSUFUK0QsQ0FBdEU7QUFVSCxHQTVCSTtBQTZCTEMsRUFBQUEsV0E3QksseUJBNkJTO0FBQ1ZDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0gsR0EvQkk7QUFnQ0xyQixFQUFBQSxlQWhDSywyQkFnQ1dzQixNQWhDWCxFQWdDbUI7QUFDcEIsUUFBSXZCLFNBQVMsR0FBRSxFQUFmOztBQUNBLFNBQUssSUFBSXdCLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUQsTUFBTSxDQUFDRSxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFvQztBQUNoQyxVQUFJRSxJQUFJLEdBQUcsSUFBSWpELFNBQVMsQ0FBQ2tELElBQWQsQ0FBbUJKLE1BQU0sQ0FBQ0MsQ0FBRCxDQUF6QixDQUFYO0FBQ0F4QixNQUFBQSxTQUFTLENBQUM0QixJQUFWLENBQWVGLElBQUksQ0FBQ0csUUFBcEI7QUFDSDs7QUFDRCxXQUFPN0IsU0FBUDtBQUNIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb2tlckNhcmQgICA9IHJlcXVpcmUoXCJQb2tlckNhcmRcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTXVjRGF0ICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxpc3RCb0JhaSAgIDogY2MuTm9kZSxcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgX2RhdGFSYW5rICAgOiAgbnVsbCxcbiAgICB9LFxuICAgIGluaXQoZGF0YVJhbmspIHtcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhUmFuaztcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBcIiNcIitkYXRhUmFuay5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IFV0aWxzLnJlRm9ybWF0RGlzcGxheVRpbWUoZGF0YVJhbmsudGltZSk7XG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gZGF0YVJhbmsud2luO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBuZXdSZXN1bHQgPSB0aGlzLl9jb252ZXJ0UG9zQ2FyZChkYXRhUmFuay5yZXN1bHRNYXApO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImltYWdlcy9taW5pZ2FtZS9taW5pcG9rZXIvY2FyZDJkXCIsIGNjLlNwcml0ZUF0bGFzLCBmdW5jdGlvbiAoZXJyLCBhdGxhcykge1xuICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuTGlzdENhcmQgPSBhdGxhcztcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHNlbGYubGlzdEJvQmFpLmNoaWxkcmVuLm1hcChmdW5jdGlvbihjYXJkTm9kZSwgaW5kZXgpe1xuICAgICAgICAgICAgICAgIGNhcmROb2RlLmdldENvbXBvbmVudCgnTWluaVBva2VySXRlbScpLmluaXQoc2VsZiwgbmV3UmVzdWx0W2luZGV4XSk7XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuICAgIGV2ZW50RGV0YWlsKCkge1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgfSxcbiAgICBfY29udmVydFBvc0NhcmQocmVzdWx0KSB7XG4gICAgICAgIGxldCBuZXdSZXN1bHQgPVtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHJlc3VsdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY2FyZCA9IG5ldyBQb2tlckNhcmQuQ2FyZChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgbmV3UmVzdWx0LnB1c2goY2FyZC5uYW1lRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICB9LFxuXG59KTtcbiJdfQ==