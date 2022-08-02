const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
    },
    onLoad() {
        this.listDaiLy = [];
        this.listview.numItems = this.listDaiLy.length;
    },
    eventClose() {
        this.back();
    },
    updateItems(listAgency){
        this.listDaiLy = listAgency;
        this.listview.numItems = this.listDaiLy.length;
    },
    onListRender(item, idx) {
        let rank = this.listDaiLy[idx];
        item.getComponent(item.name).init(rank);
    },

    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        if (this.cb){
            selectedId     = parseInt(selectedId);
            this.cb(this.listDaiLy[selectedId]);
            item.getComponent(item.name).showMenuChon(true);
            if (lastSelectedId != null){
                lastSelectedId = parseInt(lastSelectedId);
                if ( this.listview.getItemByListId(lastSelectedId))
                    this.listview.getItemByListId(lastSelectedId).getComponent(item.name).showMenuChon(false);
            }
        }

    },
    addEventSelect(callBack) {
        this.cb = callBack;
    }
});
