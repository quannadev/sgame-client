const MOVE_TYPE = cc.Enum({
    MoveTop       : 1,
    MoveBottom    : 2,
    MoveLeft      : 3,
    MoveRight     : 4,
});

cc.Class({
    extends: cc.Component,
    properties: {
        timer         : 4,
    },
    onLoad () {
        let actionBy = cc.rotateBy(this.timer, 360);
        this.node.runAction(actionBy.repeatForever());
    }
});
