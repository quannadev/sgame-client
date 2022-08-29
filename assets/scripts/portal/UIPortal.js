cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        hoiXoayDapXoay: cc.Node,
        progressBar: cc.ProgressBar,
        lb_loading: cc.Label,
        lbUpdate: cc.Label,
    },
    onEnable(){
        cc.debug.setDisplayStats(false);
        this.updateProcess(0);
        if (!cc.sys.isNative) {
            this.scheduleOnce(this.loadResources, 0);
        }else {
            if(cc.isValid(this.hoiXoayDapXoay)){
                let self = this;
                let script = this.hoiXoayDapXoay.getComponent("HoiXoayServer");
                script.hotUpdate(function () {
                    self.scheduleOnce(self.loadResources, 0);
                });
            }else {
                this.scheduleOnce(this.loadResources, 0);
            }
        }
    },
    loadResources(){
        let self = this;
        let ui = [];
        this.lbUpdate.string = "Tải tài nguyên, không tốn dung lượng.";
        ui.push('UIHome');
        ui.push('UILogin');
        ui.push('taixiu/UITaiXiu');
        ui.push('taixiu/UITaiXiuSoiCau');
        ui.push('taixiu/UITaiXiuSessionDetail');
        if (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) {
            ui.push('UIRegister');
            ui.push('UILobby');
            ui.push('UIDialogOne');
            ui.push('UIDialogBuyIn');
            ui.push('portal/UIMenu');
            ui.push('portal/UIPayment');
            ui.push('rongho/UIRongHo');
            ui.push('xocdia/UIXocDia');
            ui.push('tlmn/UITLMN');
            ui.push('bacay/UIBaCay');
            ui.push('maubinh/UIMauBinh');
            ui.push('baccarat/UIBaccarat');
            ui.push('zeus/UIZeus');
            ui.push('kimcuong/UIKimCuong');
            ui.push('minipoker/UIMiniPoker');
            ui.push('candy/UICandy');
            ui.push('roulette/UIRoulette');
            ui.push('baccarat/UIBaccarat');
        }

        cc.loader.loadResArray(ui, cc.Asset, function (completedCount, totalCount, item) {
            self.updateProcess(completedCount / totalCount);
        },function (err, assets) {
            if(err){
                console.log("load resource error: ", err);
                self.loadFinish();
                return;
            }
            for(let i = 0 ;i < assets.length;i++){
                cc.loader.setAutoReleaseRecursively(assets[i], true);
            }
            self.loadFinish();
        });
    },
    updateProcess(process){
        let percent = parseFloat( process);
        this.progressBar.progress = percent;
        this.lb_loading.string = Math.floor(percent * 100) + "%";
    },
    loadFinish(){
        this.show('UIHome');
    },
});
