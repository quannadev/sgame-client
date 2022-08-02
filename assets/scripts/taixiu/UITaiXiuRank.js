const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
    },
    onEnable(){
        this.listRank = this._data.items;
        this.listview.numItems = this.listRank.length;
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex;
        }
        let request = new CasinoRequest.LeaderBoardRequest();
        SmartFoxSDK.TaiXiuController.ZoneInstance.send(request.toSRequest());
    },
    updateData(items) {
        mm.Loading.hide();
        this.listRank = items;
        this.listview.numItems = this.listRank.length;
    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    },
    onListRender(item, idx) {
        let rank = this.listRank[idx];
        item.getComponent(item.name).init(rank, idx);
    },
    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        let list = item.listItem._list;
        let str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;
        if (list.selectedMode == 2) { //Nếu nó là chế độ đa lựa chọn
            str += '，Giá trị hiện tại：' + val;
        }
    }
});

