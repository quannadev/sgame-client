const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
    },
    onLoad() {
        this.listTransaction = [
            {
                "session"     : "1234567",
                "time"      : "22/07/2020 19: 04",
                "stakes"   : "1000",
                "win"       : "10.000"
            },
            {
                "session"     : "1234567",
                "time"      : "22/07/2020 19: 04",
                "stakes"   : "1000",
                "win"       : "10.000"
            },
            {
                "session"     : "1234567",
                "time"      : "22/07/2020 19: 04",
                "stakes"   : "1000",
                "win"       : "10.000"
            },
            {
                "session"     : "1234567",
                "time"      : "22/07/2020 19: 04",
                "stakes"   : "1000",
                "win"       : "10.000"
            },
            {
                "session"     : "1234567",
                "time"      : "22/07/2020 19: 04",
                "stakes"   : "1000",
                "win"       : "10.000"
            },
            {
                "session"     : "1234567",
                "time"      : "22/07/2020 19: 04",
                "stakes"   : "1000",
                "win"       : "10.000"
            },

        ];
        this.listview.numItems = this.listTransaction.length;
    },
    onEnable(){
        if(this._data && this._data.items){
            this.listTransaction = this._data.items;
            this.listview.numItems = this.listTransaction.length;
        }
    },
    eventClose() {
        this.back();
    },
    onListRender(item, idx) {
        let rank = this.listTransaction[idx];
        item.getComponent(item.name).init(rank);
    },
    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        let list = item.listItem._list;
        let str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;
        if (list.selectedMode == 2) { //Nếu nó là chế độ đa lựa chọn
            str += '，Giá trị hiện tại：' + val;
        }
        console.log(str);
    },
    eventHistoryWin() {

    },
    eventAll() {

    }
});
