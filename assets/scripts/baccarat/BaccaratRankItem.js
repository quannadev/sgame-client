cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        listRank      : [cc.SpriteFrame],
        listFont      : [cc.Font],
        spRank        : cc.Sprite,
        lbRank        : cc.Label,
        lbName       : cc.Label,
        lbWin       : cc.Label,
    },
    init(dataRank, stt) {
        if (stt < 3){
            this.spRank.node.active = true;
            this.lbRank.node.active = false;
            this.spRank.spriteFrame = this.listRank[stt];
            this.lbRank.font      = this.listFont[0];
            this.lbWin.font       = this.listFont[0];
            this.lbName.font      = this.listFont[0];
        }else{
            this.spRank.node.active = false;
            this.lbRank.node.active = true;
            this.lbRank.string      = (stt + 1);
            this.lbRank.font        = this.listFont[1];
            this.lbWin.font         = this.listFont[1];
            this.lbName.font        = this.listFont[1];
        }
        this.lbName.string = dataRank.account;
        this.lbWin.string  = Utils.addDotToNumber(dataRank.win);
    }
});
