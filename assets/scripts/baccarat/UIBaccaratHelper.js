cc.Class({
    extends: cc.VozBaseComponent,

    properties: {

    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    }
});
