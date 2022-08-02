cc.Class({
    extends: cc.Component,

    properties: {
        card: cc.Sprite,
        listCard: null
    },
    init(obj, icon){
        this.listCard         = obj.ListCard;
        this.card.spriteFrame = this.listCard.getSpriteFrame(icon);
    },
    stop: function() {

    },
    setIcon: function(icon, data = false){
        this.card.spriteFrame = this.listCard.getSpriteFrame(icon);
        if (data) {
            this.data = icon;
        }
    },
});
