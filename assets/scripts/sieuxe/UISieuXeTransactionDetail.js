let reel        = require("SieuXeReel");

cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        reels: {
            default: [],
            type: cc.Node,
        },
        lbSession   : cc.Label,
        lbTotalWin  : cc.Label,
        TotalItemRun  : 20,
        TotalColumn         : 5,
    },
    onEnable () {
        this.TotalItemRun = 20;
        this.lbSession.string = "#"+this._data.session;
        this.lbTotalWin.string = Utils.addDotToNumber(this._data.win);
        let result = this._data.map;
        // reformat
        for (let i=0; i< result.length; i++){
            let count = i%5;
            if (count > 2){
                result[i] = result[i] + 1;
            }
        }
        result = this.getDataResult(result);
        Promise.all(this.reels.map(function(itemReel, pos) {
            Promise.all(itemReel.children.map(function(itemXe, index) {
                itemXe.getComponent("SieuXeItem").init(this, result[pos][index]);
            }));
        }));
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex;
        }
    },
    getDataResult: function(result) {
        let newArray = [];
        for (let i=0; i< this.TotalColumn; i++){
            newArray[i] = [];
        }
        for (let i=0; i< result.length; i++) {
            newArray[i%this.TotalColumn].push(result[i]);
        }
        return newArray;
    },
    eventClose() {
        this.back();
    }
    // update (dt) {},
});
