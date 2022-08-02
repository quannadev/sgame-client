cc.Class({
    extends: cc.Component,

    properties: {
        _isSelected: false,
        bg : cc.Node,
        _card: null,
        _cbSelect : null,
        _removeSelect: true,
        over: cc.Node
    },
    onLoad(){
        this.over.active = false;
    },
    showOver(){
        this.over.active = true;
    },
    hideOver(){
        this.over.active = false;
    },
    addEventSelect(cb){
        this._cbSelect = cb;
    },
    isSelected(){
        return this._isSelected;
    },
    getCard(){
        return this._card;
    },
    setCard(card){
        this._card = card;
    },
    _loadCardBack(){
        cc.loader.loadRes("images/cards", cc.SpriteAtlas, function (err, atlas) {
            if(err){
                console.log(err);
                return;
            }
            this.bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("-1");
        }.bind(this));
    },
    _loadCard(){
        cc.loader.loadRes("images/cards", cc.SpriteAtlas, function (err, atlas) {
            if(err){
                console.log(err);
                return;
            }
            this.bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(this._card.nameFile);
        }.bind(this));
    },
    init(card, _removeSelect){
        this.node.active = true;
        this.hideOver();
        if(card == null){
            this._loadCardBack();
        }else{
            this._card = card;
            if(_removeSelect != undefined){
                this._removeSelect = _removeSelect;
            }else{
                this._removeSelect = true;
            }
            this._loadCard();
        }
    },
    reveal(card, pIsFaceUp){
        this.node.active = true;
        this.hideOver();
        this._loadCardBack();
        this._card = card;
        let self = this;
        let timeFlip = 0.45;
        let callFunc = cc.callFunc(function () {
            self._loadCard();
            if(!pIsFaceUp)
                self.node.skewY = 170;
            else
                self.node.skewY = 45;
        });
        if(!pIsFaceUp)
        {
            self.node.skewY = 0;
            let action = cc.skewBy(timeFlip/2,0,10);
            let action2 = cc.skewTo(timeFlip/2,0,180);
            self.node.runAction(cc.sequence(action,callFunc,action2));
        }else
        {
            self.node.skewY = 180;
            let action = cc.skewBy(timeFlip/2,0,-35);
            let action2 = cc.skewTo(timeFlip/2,0,0);
            self.node.runAction(cc.sequence(action,callFunc,action2));
        }
    },
    switchCard(pIsFaceUp) {
        let self = this;
        let timeFlip = 0.45;
        let callFunc = cc.callFunc(function () {
            self._loadCard();
            if(!pIsFaceUp)
                self.node.skewY = 170;
            else
                self.node.skewY = 45;
        });
        self.node.skewY = 0;
        let action = cc.skewBy(timeFlip/2,0,10);
        let action2 = cc.skewTo(timeFlip/2,0,180);
        self.node.runAction(cc.sequence(action,callFunc,action2));
        if(!pIsFaceUp)
        {
            self.node.skewY = 0;
            let action = cc.skewBy(timeFlip/2,0,10);
            let action2 = cc.skewTo(timeFlip/2,0,180);
            self.node.runAction(cc.sequence(action,callFunc,action2));
        }else
        {
            self.node.skewY = 180;
            let action = cc.skewBy(timeFlip/2,0,-35);
            let action2 = cc.skewTo(timeFlip/2,0,0);
            self.node.runAction(cc.sequence(action,callFunc,action2));
        }
    },
    reset(){
        this._loadCardBack();
        this.hideOver();
        this.node._zIndex = 0;
        this.node.x = 0;
        this.node.y = 0;
        this._isSelected = false;
        this._card = null;
        this._cbSelect = null;
        this._removeSelect = true;
    },
    eventSelect(){
        if(!this._removeSelect){
            if(!this._isSelected){
                this._isSelected = true;
                this.node.y = this.node.y + 20;
                if(this._cbSelect){
                    this._cbSelect(this.getCard().id);
                }
            }else{
                this._isSelected = false;
                this.node.y = this.node.y - 20;
            }
        }
    },
    setScaleCard(scaleCard){
        this.node.width  *= scaleCard;
        this.node.height *= scaleCard;
    }
});
