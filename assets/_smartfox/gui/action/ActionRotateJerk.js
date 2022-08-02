cc.Class({
    extends: cc.Component,
    properties: {
        _seq2: null,
    },
    onLoad () {
        const seq = cc.sequence(
            cc.rotateTo(0.5, -30),
            cc.rotateTo(0.5, 30)
        );
        this._seq2 = seq.clone().repeatForever();
    },
    runActionRotateJerk(nodeRun) {
        nodeRun.runAction(
            cc.sequence(
                this._seq2,
                cc.delayTime(1)
            ).bind(this));
    }
});
