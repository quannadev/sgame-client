const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview
    },
    onLoad(){
        this.listRank = [];
        this.listview.numItems = this.listRank.length;
    },
    updateRank(items){
        if(items){
            this.listRank = items;
            this.listview.numItems = this.listRank.length;
        }

    },
    onListRender(item, idx) {
        let rank = this.listRank[idx];
        item.getComponent(item.name).init(rank);
    }
});
