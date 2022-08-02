const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
    },
    onLoad () {
        this.listRank = [];
    },
    onEnable(){
        if(this._data && this._data.items){
            this.listRank = this._data.items;
            this.listview.numItems = this.listRank.length;
        }
    },
    onListRender(item, idx) {
        let rank = this.listRank[idx];
        item.getComponent(item.name).init(rank);
    },
    eventClose() {
        this.back();
    }
});
