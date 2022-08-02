const MOVE_TYPE = cc.Enum({
    MoveTop       : 1,
    MoveBottom    : 2,
    MoveLeft      : 3,
    MoveRight     : 4,
});

cc.Class({
    extends: cc.Component,

    properties: {
        timeMoveIn    : 1,
        timeMoveOut   : 1,
        typeIn    : {
            default : MOVE_TYPE.MoveTop,
            type    : MOVE_TYPE
        },
        typeOut    : {
            default : MOVE_TYPE.MoveTop,
            type    : MOVE_TYPE
        },
        _currentPos : 0
    },

    onEnable () {
        this._currentPos = this.node.position;
        switch (this.typeIn) {
            case MOVE_TYPE.MoveTop: {
                this.topIn(this.timeMoveIn);
                break;
            }
            case MOVE_TYPE.MoveBottom: {
                this.bottomIn(this.timeMoveIn);
                break;
            }
            case MOVE_TYPE.MoveLeft: {
                this.leftIn(this.timeMoveIn);
                break;
            }
            case MOVE_TYPE.MoveRight: {
                this.rightIn(this.timeMoveIn);
                break;
            }
            default: {
                this.topIn(this.timeMoveIn);
                break;
            }
        }
    },
    onDisable() {
        this.node.stopAllActions();
        this.node.position = this._currentPos;
    },
    runActionOutGame () {
        this.node.stopAllActions();
        // switch (this.typeOut) {
        //     case MOVE_TYPE.MoveTop: {
        //         this.topOut(this.timeMoveOut);
        //         break;
        //     }
        //     case MOVE_TYPE.MoveBottom: {
        //         this.bottomOut(this.timeMoveOut);
        //         break;
        //     }
        //     case MOVE_TYPE.MoveLeft: {
        //         this.leftOut(this.timeMoveOut);
        //         break;
        //     }
        //     case MOVE_TYPE.MoveRight: {
        //         this.rightOut(this.timeMoveOut);
        //         break;
        //     }
        //     default: {
        //         this.topOut(this.timeMoveOut);
        //         break;
        //     }
        // }
    },
    topIn(timeMove) {
        if (!timeMove)
            timeMove =  1;
        const currentPos = this.node.position;
        this.node.setPosition(currentPos.x, cc.winSize.height);
        let widget =   this.node.getComponent(cc.Widget);
        if (widget) {
            if (widget.isAlignBottom)
                widget.bottom   += cc.winSize.height;
            if (widget.isAlignTop)
                widget.top      -= cc.winSize.height;
            widget.updateAlignment();
        }
        let move     = cc.moveTo(timeMove, currentPos);
        let moveIn   = move.clone().easing(cc.easeElasticOut(0.8));
        this.node.runAction(moveIn);
    },
    topOut(timeMove) {
        if (!timeMove)
            timeMove =  1;
        let move      = cc.moveTo(timeMove, this.node.x, cc.winSize.height);
        let moveOut   = move.clone().easing(cc.easeElasticIn(0.6));
        this.node.runAction(moveOut);
    },
    bottomIn(timeMove) {
        if (!timeMove)
            timeMove =  1;
        const currentPos = this.node.position;
        this.node.setPosition(currentPos.x, -cc.winSize.height);
        let widget =   this.node.getComponent(cc.Widget);
        if (widget) {
            if (widget.isAlignBottom)
                widget.bottom   -= cc.winSize.height;
            if (widget.isAlignTop)
                widget.top      += cc.winSize.height;
            widget.updateAlignment();
        }
        let move     = cc.moveTo(timeMove, currentPos);
        let moveIn   = move.clone().easing(cc.easeElasticOut(0.8));
        this.node.runAction(moveIn);
    },
    bottomOut(timeMove) {
        if (!timeMove)
            timeMove =  1;
        let move      = cc.moveTo(timeMove, this.node.x, -cc.winSize.height);
        let moveOut   = move.clone().easing(cc.easeElasticIn(0.6));
        this.node.runAction(moveOut);
    },
    leftIn(timeMove) {
        if (!timeMove)
            timeMove =  1;
        const currentPos = this.node.position;
        this.node.setPosition(-cc.winSize.width, currentPos.y);
        let widget =   this.node.getComponent(cc.Widget);
        if (widget) {
            if (widget.isAlignLeft)
                widget.left   -= cc.winSize.width;
            if (widget.isAlignRight)
                widget.right      += cc.winSize.width;
            widget.updateAlignment();
        }
        let move     = cc.moveTo(timeMove, currentPos);
        let moveIn   = move.clone().easing(cc.easeElasticOut(0.8));
        this.node.runAction(moveIn);
    },
    leftOut(timeMove) {
        if (!timeMove)
            timeMove =  1;
        let move      = cc.moveTo(timeMove, -cc.winSize.width, this.node.y);
        let moveOut   = move.clone().easing(cc.easeElasticIn(0.6));
        this.node.runAction(moveOut);
    },
    rightIn(timeMove) {
        if (!timeMove)
            timeMove =  1;
        const currentPos = this.node.position;
        this.node.setPosition(cc.winSize.width, currentPos.y);
        let widget =   this.node.getComponent(cc.Widget);
        if (widget) {
            if (widget.isAlignLeft)
                widget.left   += cc.winSize.width;
            if (widget.isAlignRight)
                widget.right  -= cc.winSize.width;
            widget.updateAlignment();
        }
        let move     = cc.moveTo(timeMove, currentPos);
        let moveIn   = move.clone().easing(cc.easeElasticOut(0.8));
        this.node.runAction(moveIn);
    },
    rightOut(timeMove) {
        if (!timeMove)
            timeMove =  1;
        let move      = cc.moveTo(timeMove, cc.winSize.width, this.node.y);
        let moveOut   = move.clone().easing(cc.easeElasticIn(0.6));
        this.node.runAction(moveOut);
    },
    // moveIn() {
    //     let delay   = cc.delayTime(0.1);
    //     let move    = cc.moveBy(2, cc.v2(cc.winSize.width - 80, 0));
    //     let move_ease_inout3 = move.clone().easing(cc.easeElasticInOut(0.6));
    //     let move_ease_inout_back3 = move_ease_inout3.reverse();
    //     let seq3 = cc.sequence(move_ease_inout3, delay.clone(), move_ease_inout_back3, delay.clone());
    //     this.node.runAction(seq3.repeatForever());
    // },
    // moveOut() {
    //     let delay   = cc.delayTime(0.1);
    //     let move    = cc.moveBy(2, cc.v2(cc.winSize.width - 80, 0));
    //     let move_ease_inout3 = move.clone().easing(cc.easeElasticInOut(0.6));
    //     let seq3 = cc.sequence(move_ease_inout3, delay.clone());
    //     this.node.runAction(seq3);
    // },
    // update (dt) {},\

});
