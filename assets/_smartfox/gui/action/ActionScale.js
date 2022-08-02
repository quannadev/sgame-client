cc.Class({
    extends: cc.Component,

    properties: {

    },
    onEnable () {
        this.node.scale = 0;
        this.node.runAction(
            cc.sequence(
                cc.scaleTo(0.2, 1.05),
                cc.delayTime(0.1),
                cc.scaleTo(0.1, 1)
            )
        );
    },
});
