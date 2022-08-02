"use strict";
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