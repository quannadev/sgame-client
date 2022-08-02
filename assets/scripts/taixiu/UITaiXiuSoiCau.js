const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        totalTai        : cc.Label,
        totalXiu        : cc.Label,
        cauTai          : cc.SpriteFrame,
        cauXiu          : cc.SpriteFrame,
        listviewCau1    : Listview,
        listviewCau2    : Listview,
        lineTemplate    : cc.Node,
        iconXX1Template    : cc.Node,
        iconXX2Template    : cc.Node,
        iconXX3Template    : cc.Node,
        iconTaiTemplate    : cc.Node,
        iconXiuTemplate    : cc.Node,

        xx1Draw    : cc.Node,
        xx2Draw    : cc.Node,
        xx3Draw    : cc.Node,
        xx123Draw    : cc.Node,
        btnBack    : cc.Node,
        btnNext    : cc.Node,
        soiCau1    : cc.Node,
        soiCau2    : cc.Node,
        listCau1       : null,
        listCau2       : null,
        totalTaiValue       : 0,
        totalXiuValue       : 0,
        _isDraw2       : false,
    },
    onEnable(){
        this._isDraw2 = false;
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex;
        }
        this.drawPage2();
        this.btnBack.active = false;
        this.btnNext.active = true;
        this.eventGetAllCau();
    },
    eventGetAllCau() {
        let soiCauRequest = new TaiXiuRequest.SoiCauRequest();
        SmartFoxSDK.TaiXiuController.ZoneInstance.send(soiCauRequest.toSRequest());
    },
    drawPage2() {
        let self = this;
        this.listCau1 = [];
        this.listCau2 = [];
        let subCau1   = [];
        let subCau2   = [];
        let total     = 0;
        this.totalTaiValue     = 0;
        this.totalXiuValue     = 0;
        Promise.all(this._data.map(function(session, index){
            total = 0;
            for (let i=0; i< session.dices.length; i++){
                total += session.dices[i];
            }
            //Cau 1
            if (subCau1.length < 4)
                subCau1.push(total)
            else {
                subCau1.push(total)
                self.listCau1.push(subCau1);
                subCau1 = [];
            }

            //Cau 2
            if (total <= 10){
                self.totalXiuValue ++;
                if (subCau2.length >0){
                    if (subCau2[0] <= 10){
                        subCau2.push(total);
                    }else{
                        if (subCau2.length < 7){
                            self.listCau2.push(subCau2);
                        }else{
                            for (let i=0; i< subCau2.length; i=i+6){
                                self.listCau2.push(subCau2.slice(i, i+6));
                            }
                        }
                        subCau2 = [];
                        subCau2.push(total);
                    }
                }else{
                    subCau2.push(total);
                }

            }else{
                self.totalTaiValue ++;
                if (subCau2.length >0){
                    if (subCau2[0] > 10){
                        subCau2.push(total);
                    }else{
                        if (subCau2.length < 7){
                            self.listCau2.push(subCau2);
                        }else{
                            for (let i=0; i< subCau2.length; i=i+6){
                                self.listCau2.push(subCau2.slice(i, i+6));
                            }
                        }
                        subCau2 = [];
                        subCau2.push(total);
                    }
                }else{
                    subCau2.push(total);
                }
            }
        })).then(result => {
            if (subCau1.length > 0)
                self.listCau1.push(subCau1);
            if (subCau2.length < 7){
                self.listCau2.push(subCau2);
            }else{
                for (let i=0; i< subCau2.length; i=i+6){
                    self.listCau2.push(subCau2.slice(i, i+6));
                }
            }
            self.listviewCau1.numItems = this.listCau1.length;
            self.listviewCau2.numItems = this.listCau2.length;
            self.totalXiu.string       = self.totalXiuValue;
            self.totalTai.string       = self.totalTaiValue;
            self.listviewCau2.node.getComponent(cc.ScrollView).scrollToRight(1);
        });
    },
    setAllCau(allCau){
        mm.Loading.hide();
        this._data = allCau;
        this.drawPage1();
        this.drawPage2();
    },
    updateDataCau(dice) {
        this._data.push({dices: dice});
        this._data.shift();
        this.drawPage1();
        this.drawPage2();
    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    },
    onListRenderCau1(item, idx) {
        let self = this;
        let cau1 = this.listCau1[idx];
        Promise.all(item.children.map(function(itemCau, index){
            itemCau.active = false;
        })).then(function () {
            Promise.all(cau1.map(function(taiXiu, index){
                item.children[index].active = true;
                if (taiXiu <= 10){
                    item.children[index].getComponent(cc.Sprite).spriteFrame =  self.cauXiu;
                }else
                    item.children[index].getComponent(cc.Sprite).spriteFrame =  self.cauTai;
            }))
        })
    },
    onListRenderCau2(itemAll, idx) {
        let self = this;
        let cau2 = this.listCau2[idx];
        Promise.all(itemAll.children.map(function(itemCau, index){
            itemCau.active = false;
        })).then(function () {
            Promise.all(cau2.map(function(taiXiu, index){
                itemAll.children[index].active = true;
                let lbResult = itemAll.children[index].getChildByName("lbResult");
                lbResult.getComponent(cc.Label).string = taiXiu;
                if (taiXiu < 11){
                    lbResult.color = cc.Color.BLACK;
                    itemAll.children[index].getComponent(cc.Sprite).spriteFrame =  self.cauXiu;
                }else{
                    lbResult.color = cc.Color.WHITE;
                    itemAll.children[index].getComponent(cc.Sprite).spriteFrame =  self.cauTai;
                }
            }))
        })
    },
    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        let list = item.listItem._list;
        let str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;
        if (list.selectedMode == 2) { //Nếu nó là chế độ đa lựa chọn
            str += '，Giá trị hiện tại：' + val;
        }
    },
    eventShowHideCau3(target) {
        this.xx123Draw.active = target.isChecked;
    },
    eventShowHideCau41(target){
        this.xx1Draw.active = target.isChecked;
    },
    eventShowHideCau42(target){
        this.xx2Draw.active = target.isChecked;
    },
    eventShowHideCau43(target){
        this.xx3Draw.active = target.isChecked;
    },
    drawPage1() {
        this._isDraw2 = true;
        let data =  this._data;
        let endPosX      = 422;
        let startPosY    = -222;
        let startPosY123 = 16;
        let _i = 0;
        let spacingX = 38;
        let spacingY = 38;
        this.xx1Draw.removeAllChildren();
        this.xx2Draw.removeAllChildren();
        this.xx3Draw.removeAllChildren();
        this.xx123Draw.removeAllChildren();


        for (var i = data.length - 1; i >= 0; i--) {
            var dices = data[i].dices;
            var score = dices[0] + dices[1] + dices[2];

            let startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
            let startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
            let startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
            let startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + (score - 3) * (spacingY / 3));

            let iconXX1 = cc.instantiate(this.iconXX1Template);
            iconXX1.parent = this.xx1Draw;
            iconXX1.position = startPosXX1;

            let iconXX2 = cc.instantiate(this.iconXX2Template);
            iconXX2.parent = this.xx2Draw;
            iconXX2.position = startPosXX2;

            let iconXX3 = cc.instantiate(this.iconXX3Template);
            iconXX3.parent = this.xx3Draw;
            iconXX3.position = startPosXX3;

            let iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
            iconXX123.parent = this.xx123Draw;
            iconXX123.position = startPosXX123;

            if (_i > 0) {
                dices = data[i + 1].dices;
                score = dices[0] + dices[1] + dices[2];

                let endPosXX1 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[0] - 1) * spacingY);
                let endPosXX2 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[1] - 1) * spacingY);
                let endPosXX3 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[2] - 1) * spacingY);
                let endPosXX123 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY123 + (score - 3) * (spacingY / 3));

                let line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx1Draw;
                line.width = Utils.v2Distance(startPosXX1, endPosXX1);
                line.position = startPosXX1;
                line.angle = Utils.v2Degrees(startPosXX1, endPosXX1);
                line.color = cc.Color.BLACK.fromHEX("#ed145b");
                line.zIndex = 0;

                line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx2Draw;
                line.width = Utils.v2Distance(startPosXX2, endPosXX2);
                line.position = startPosXX2;
                line.angle = Utils.v2Degrees(startPosXX2, endPosXX2);
                line.color = cc.Color.BLACK.fromHEX("#598527");
                line.zIndex = 0;

                line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx3Draw;
                line.width = Utils.v2Distance(startPosXX3, endPosXX3);
                line.position = startPosXX3;
                line.angle = Utils.v2Degrees(startPosXX3, endPosXX3);
                line.color = cc.Color.BLACK.fromHEX("#f06eaa");
                line.zIndex = 0;

                line = cc.instantiate(this.lineTemplate);
                line.parent = this.xx123Draw;
                line.width = Utils.v2Distance(startPosXX123, endPosXX123);
                line.position = startPosXX123;
                line.angle = Utils.v2Degrees(startPosXX123, endPosXX123);
                line.color = cc.Color.BLACK.fromHEX("#fedd99");
                line.zIndex = -1;
            }
            _i++;
        }
    },
    eventGotoPage2() {
        this.soiCau1.active = false;
        this.soiCau2.active = true;
        this.btnBack.active = true;
        this.btnNext.active = false;
        if (!this._isDraw2)
            this.drawPage1();
    },
    eventGotoPage1(){
        this.btnBack.active = false;
        this.btnNext.active = true;
        this.soiCau1.active = true;
        this.soiCau2.active = false;
    }
});

