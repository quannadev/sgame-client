const Listview = require('Listview');
const Helper   = require('Helper');
cc.Class({
    extends: cc.VozBaseComponent,
    properties: {
        listview    : Listview,
        lbTitle     : cc.Label,
        allRank     : cc.Sprite,
        allHu       : cc.Sprite,
        listRank: [],
        listHu: []
    },
    onEnable(){
        if(this._data && this._data.items){
            this.listRank = this._data.items;
            this.listview.numItems = this.listRank.length;
            this.lbTitle.string    = "Bảng Vinh Danh";
        }
    },
    onListRender(item, idx) {
        let rank = this.listRank[idx];
        item.getComponent(item.name).init(idx, rank);
    },
    eventClose() {
        this.back();
    },
    eventAllRank() {
        this.lbTitle.string    = "Bảng Vinh Danh";
        Helper.setMaterialGray(this.allRank, false);
        Helper.setMaterialGray(this.allHu, true);
        if(this._data && this._data.items){
            this.listRank = this._data.items;
            this.listview.numItems = this.listRank.length;
        }
    },
    eventHu() {
        this.lbTitle.string    = "Lịch Sử Hũ";
        Helper.setMaterialGray(this.allRank, true);
        Helper.setMaterialGray(this.allHu, false);
        if(this._data && this._data.items){
            this.listHu = [];
            this.listview.numItems = this.listHu.length;
        }
    }
});
