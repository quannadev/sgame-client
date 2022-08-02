var MM = cc.Class({
    extends: cc.Component,
    statics: {
        inst: null,
    },
    // use this for initialization
    onLoad () {
        MM.inst = this;
        let gameObj = cc.find('MM')
        if (gameObj) {
            cc.game.addPersistRootNode(gameObj);
        }
        cc.lastZIndex = 0;
        cc.currentUI  = "";
    },

    start () {
        cc.screen.fullScreen();
    },
    //去左空格;
    ltrim (s) {
        return s.replace(/(^\s*)/g, "");
    },
    //去右空格;
    rtrim (s) {
        return s.replace(/(\s*$)/g, "");
    },
    //去左右空格;
    trim (s) {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }
});
window.mm = MM;
