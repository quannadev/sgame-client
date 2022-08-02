cc.Class({
    extends: cc.Component,

    properties: {
        _isSelected: false,
        bg : cc.Node,
        _card: null,
        _cbSelect : null,
        _removeSelect: true
    },
    onLoad(){

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
    loadCardBack(cb){
        Utils.loadRes(this.bg.getComponent(cc.Sprite), "images/baccarat/cards/card_up", function () {
            if (cb){
                cb();
            }
        })
    },
    _loadCard(){
        Utils.loadRes(this.bg.getComponent(cc.Sprite), "images/baccarat/cards/"+this._card.nameFile)
    },
    init(card, _removeSelect){
        this.node.active = true;
        if(card == null){
            this.loadCardBack();
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
    reveal(card, pIsFaceUp, cb){
        this.node.active = true;
        this.loadCardBack();
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
            self.node.runAction(cc.sequence(cc.delayTime(1), action,callFunc,action2, cc.delayTime(0.5), cc.callFunc(function () {
                if (cb)
                    cb();
            })));
        }else
        {
            self.node.skewY = 180;
            let action = cc.skewBy(timeFlip/2,0,-35);
            let action2 = cc.skewTo(timeFlip/2,0,0);
            self.node.runAction(cc.sequence(cc.delayTime(1), action,callFunc,action2, cc.delayTime(0.5), cc.callFunc(function () {
                if (cb)
                    cb();
            })));
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
        this.loadCardBack();
        this.node._zIndex = 0;
        this.node.x = 0;
        this.node.y = 0;
        this._isSelected = false;
        this._card = null;
        this._cbSelect = null;
        this._removeSelect = true;
    },
    eventSelect(){
        mm.audio.playButton();
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
