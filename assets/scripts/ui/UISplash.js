cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        hoiXoayDapXoay: cc.Node,
        progressBar: cc.ProgressBar,
        lb_loading: cc.Label
    },
    onLoad(){
        this.progressBar.progress = 0;
        if (!cc.sys.isNative) {
            this.scheduleOnce(this.initGame, 0);
        }else {
            if(cc.isValid(this.hoiXoayDapXoay)){
                let self = this;
                let script = this.hoiXoayDapXoay.getComponent("HoiXoayServer");
                script.hotUpdate(function () {
                    self.scheduleOnce(self.initGame, 0);
                });
            }else {
                this.scheduleOnce(this.initGame, 0);
            }
        }
    },
    initGame(){
        let self = this;
        this.show('UIPortal', {pop: true});
    }
});
