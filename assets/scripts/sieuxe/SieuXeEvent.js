let SieuXeEvent = {};
SieuXeEvent.RESPONSE_NAME = {
    BET_RES : "sx1"
};
SieuXeEvent.BetEvent = CasinoEvent._BaseEvent.extend({
    ctor(){
        this._super(SieuXeEvent.RESPONSE_NAME.BET_RES);
        this.freeSpin = 0;
        this.freeGift = [];
    },
    fromEvent(event){
        this.status     = 1;
        this.winMoney   = event.getDouble("w");
        this.lineWin    = event.getIntArray("lw");
        this.isNohu     = event.getBool("nh");
        this.isThangLon = event.getBool("tl");
        this.result     = event.getIntArray("r");
        if(event.containsKey("fs")){
            this.freeSpin = event.getInt("fs");
        }
        if(event.containsKey("fg")){
            this.freeGift = event.getDoubleArray("fg");
        }
        return this;
    },
});
window.SieuXeEvent = module.exports = SieuXeEvent;