let BaccaratCard = require('BaccaratCard');
cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbPhien     : cc.Label,
        lbBetConDoi : cc.Label,
        lbBetCon    : cc.Label,
        lbBetHoa    : cc.Label,
        lbBetCai    : cc.Label,
        lbBetCaiDoi : cc.Label,
        lbWin       : cc.Label,
        baiCon      : cc.Node,
        baiCai      : cc.Node,
        lbTime      : cc.Label,
    },
    init(dataTransaction) {
        this.lbPhien.string     = "#"+dataTransaction.session;
        this.lbBetConDoi.string        = Utils.addDotToNumber(dataTransaction.bet[0]);
        this.lbBetCon.string           = Utils.addDotToNumber(dataTransaction.bet[1]);
        this.lbBetHoa.string           = Utils.addDotToNumber(dataTransaction.bet[2]);
        this.lbBetCai.string           = Utils.addDotToNumber(dataTransaction.bet[3]);
        this.lbBetCaiDoi.string        = Utils.addDotToNumber(dataTransaction.bet[4]);
        this.lbWin.string              = Utils.addDotToNumber(this.getWin(dataTransaction.win));
        this.lbTime.string             = Utils.reFormatDisplayTime(dataTransaction.time);
        if (dataTransaction.playerIds.length>2){
            this.baiCon.getChildByName("card3").active = true;
            this.baiCon.getChildByName("card3").getComponent("ItemCard").init(new BaccaratCard.Card(dataTransaction.playerIds[2]));
        }else
            this.baiCon.getChildByName("card3").active = false;
        this.baiCon.getChildByName("card1").getComponent("ItemCard").init(new BaccaratCard.Card(dataTransaction.playerIds[0]));
        this.baiCon.getChildByName("card2").getComponent("ItemCard").init(new BaccaratCard.Card(dataTransaction.playerIds[1]));

        this.baiCai.getChildByName("card1").getComponent("ItemCard").init(new BaccaratCard.Card(dataTransaction.bankerIds[0]));
        this.baiCai.getChildByName("card2").getComponent("ItemCard").init(new BaccaratCard.Card(dataTransaction.bankerIds[1]));
        if (dataTransaction.bankerIds.length>2){
            this.baiCai.getChildByName("card3").active = true;
            this.baiCai.getChildByName("card3").getComponent("ItemCard").init(new BaccaratCard.Card(dataTransaction.bankerIds[2]));
        }else
            this.baiCai.getChildByName("card3").active = false;

        this.baiCon.getChildByName("lb_point").getComponent(cc.Label).string = dataTransaction.playerPoint;
        this.baiCai.getChildByName("lb_point").getComponent(cc.Label).string = dataTransaction.bankerPoint;
    },
    getWin(prizes){
        let total = 0;
        for (let i=0; i< prizes.length; i++){
            total += prizes[i];
        }
        return total;
    }
});
