const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
        MaxRow      : 5,
    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    },
    onEnable() {
        mm.Loading.hide();
        this._reformatDataCau();
        this.listview.numItems = this.listCau.length;
        this.listview.node.getComponent(cc.ScrollView).scrollToRight(1);

    },
    _reformatDataCau() {
        this.listCau = [];
        let cauCol = [];
        let isChan = true;
        isChan = this._data[0] %2 ==0;
        cauCol.push(this._data[0]);
        for (let i=1; i< this._data.length; i++){
            if (isChan){
                isChan = this._data[i] %2 ==0;
                if (isChan){
                    cauCol.push(this._data[i]);
                }else {
                    if (cauCol.length <= this.MaxRow){
                        this.listCau.push(cauCol);
                    }else {
                        let maxCat = Math.ceil(cauCol.length / this.MaxRow);
                        for (let j=0; j< maxCat; j++){
                            this.listCau.push(cauCol.slice(j*this.MaxRow, (j+1)*this.MaxRow));
                        }
                        if (cauCol.length>maxCat*this.MaxRow){
                            this.listCau.push(cauCol.slice(maxCat*this.MaxRow, cauCol.length));
                        }
                    }
                    cauCol = [];
                    cauCol.push(this._data[i]);
                }
            }else {
                isChan = this._data[i] %2 == 0;
                if (!isChan){
                    cauCol.push(this._data[i]);
                }else {
                    if (cauCol.length <= this.MaxRow){
                        this.listCau.push(cauCol);
                    }else {
                        let maxCat = Math.ceil(cauCol.length / this.MaxRow);
                        for (let j=0; j< maxCat; j++){
                            this.listCau.push(cauCol.slice(j*this.MaxRow, (j+1)*this.MaxRow));
                        }
                        if (cauCol.length>maxCat*this.MaxRow){
                            this.listCau.push(cauCol.slice(maxCat*this.MaxRow, cauCol.length));
                        }
                    }
                    cauCol = [];
                    cauCol.push(this._data[i]);
                }
            }
        }
        if (cauCol.length <= this.MaxRow){
            this.listCau.push(cauCol);
        }else {
            let maxCat = Math.ceil(cauCol.length / this.MaxRow);
            for (let j=0; j< maxCat; j++){
                this.listCau.push(cauCol.slice(j*this.MaxRow, (j+1)*this.MaxRow));
            }
            if (cauCol.length>maxCat*this.MaxRow){
                this.listCau.push(cauCol.slice(maxCat*this.MaxRow, cauCol.length));
            }
        }
    },
    onListRender(item, idx) {
        let cau = this.listCau[idx];
        item.getComponent(item.name).init(cau);
    },
    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        let list = item.listItem._list;
        let str = 'Danh s??ch ho???t ?????ng hi???n t???i l??:' + list.node.name + '???L???a ch???n hi???n t???i l?????' + selectedId + '???L???a ch???n cu???i c??ng l?????' + lastSelectedId;
        if (list.selectedMode == 2) { //N???u n?? l?? ch??? ????? ??a l???a ch???n
            str += '???Gi?? tr??? hi???n t???i???' + val;
        }
        console.log(str);
    },
});
