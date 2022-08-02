const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
    },
    onLoad() {
        this.listRank = [];
        this.listview.numItems = this.listRank.length;
    },
    onEnable(){
        if(this._data && this._data.items){
            this.listRank = this._data.items;
            this.listview.numItems = this.listRank.length;
        }
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    },
    onListRender(item, idx) {
        let rank = this.listRank[idx];
        item.getComponent(item.name).init(rank);
    }
});
