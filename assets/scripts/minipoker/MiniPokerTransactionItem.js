let PokerCard   = require("PokerCard");
cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbSession   : cc.Label,
        lbTime      : cc.Label,
        lbMucDat    : cc.Label,
        listBoBai   : cc.Node,
        lbWin       : cc.Label,
        _dataRank   :  null,
    },
    init(dataRank) {
        this._dataRank = dataRank;
        this.lbSession.string   = "#"+dataRank.session;
        this.lbTime.string      = Utils.reFormatDisplayTime(dataRank.time);
        this.lbWin.string       = dataRank.win;
        let self = this;
        let newResult = this._convertPosCard(dataRank.resultMap);
        cc.loader.loadRes("images/minigame/minipoker/card2d", cc.SpriteAtlas, function (err, atlas) {
            if(err){
                console.log(err);
                return;
            }
            self.ListCard = atlas;
            Promise.all(self.listBoBai.children.map(function(cardNode, index){
                cardNode.getComponent('MiniPokerItem').init(self, newResult[index]);
            }))
        }.bind(this));
    },
    eventDetail() {
        mm.audio.playButton();
    },
    _convertPosCard(result) {
        let newResult =[];
        for (let i=0; i< result.length; i++){
            let card = new PokerCard.Card(result[i]);
            newResult.push(card.nameFile);
        }
        return newResult;
    },

});
