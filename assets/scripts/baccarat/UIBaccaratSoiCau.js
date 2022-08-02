const NHA_CON = 0;
const NHA_CAI = 1;
const HOA     = 2;
const CON_DOI = 3;
const CAI_DOI = 4;
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        dishRoad   : cc.Node,
        bigRoad    : cc.Node,
        thongKe     : cc.Node,
        scoreRoad   : cc.Node,
        bigEyeRoad  : cc.Node,
        smallRoad   : cc.Node,
        cockRoach   : cc.Node,
        allPage     : cc.PageView,
        _MaxRow      : 6,
        bgDishBoard : {
            type: cc.SpriteFrame,
            default: []
        },
        bgBigRoad : {
            type: cc.SpriteFrame,
            default: []
        },
        bgScoreRoad : {
            type: cc.SpriteFrame,
            default: []
        },
        bgCockRoad : {
            type: cc.SpriteFrame,
            default: []
        },
        listCauNew: [],
        _lastType : 0,
        listColor : {
            type: cc.Color,
            default: []
        },
        _isFirst: true
    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    },
    onEnable() {
        mm.Loading.hide();
        this.MaxRow = 6;
        this.setDataDishRoad();
        this.reformatDataCau(this._data);
        this.setDatBigRoad();
        this.setDataStatistical();
        this._isFirst = true;
        this.allPage.node.on('scroll-ended', function () {
            this.setDataForPage2();
        }, this);
    },
    setDataDishRoad() {
        let self = this;
        let total    = this._data.length;
        let totalCol = Math.ceil(total/this.MaxRow);
        let startPos = total-72;
        if (startPos < 0)
            startPos = 0;
        Promise.all(this.dishRoad.children.map(function(nodeDish, indexDish){
            if (indexDish < totalCol){
                if (!nodeDish.active)
                    nodeDish.active = true;
                Promise.all(nodeDish.children.map(function(nodeCau, index){
                    if (!nodeCau.active)
                        nodeCau.active = true;
                    let pos = startPos+indexDish*self.MaxRow+index;
                    if (pos < total){
                        let type = self._data[pos].type;
                        self.setCauInfo(type, nodeCau);
                    }else {
                        nodeCau.active = false;
                    }
                }));
            }else {
                nodeDish.active = false;
            }
        }));
    },
    setDatBigRoad() {
        let  self       = this;
        let totalBig    = this.listCauNew.length;
        let startPosBig = totalBig-29;
        if (startPosBig < 0)
            startPosBig = 0;
        Promise.all(this.bigRoad.children.map(function(nodeBig, indexBig){
            if (indexBig < totalBig){
                if (!nodeBig.active)
                    nodeBig.active = true;
                let colCauData = self.listCauNew[indexBig+startPosBig];
                let totalData  = colCauData.length;
                Promise.all(nodeBig.children.map(function(nodeCau, index){
                    if (!nodeCau.active)
                        nodeCau.active = true;
                    if (index < totalData){
                        self.setCauBigInfo(colCauData[index].type, nodeCau);
                    }else {
                        nodeCau.active = false;
                    }
                }));
            }else {
                nodeBig.active = false;
            }
        }));
    },
    setDataStatistical() {
        let caiWin = 0;
        let conWin = 0;
        let hoa    = 0;
        let caiDoi = 0;
        let conDoi = 0;
        let total  = this._data.length;
        let self   = this;
        Promise.all(this._data.map(function(typeCau, index){
            Promise.all(typeCau.type.map(function(type, index){
                if (type == NHA_CAI)
                    caiWin++;
                if (type == NHA_CON)
                    conWin++;
                if (type == HOA)
                    hoa++;
                if (type == CAI_DOI)
                    caiDoi++;
                if (type == CON_DOI)
                    conDoi++;
            }));
        })).then(result => {
            self.thongKe.getChildByName("lb_cai_thang").getComponent(cc.Label).string = caiWin;
            self.thongKe.getChildByName("lb_con_thang").getComponent(cc.Label).string = conWin;
            self.thongKe.getChildByName("lb_hoa").getComponent(cc.Label).string = hoa;
            self.thongKe.getChildByName("lb_cai_doi").getComponent(cc.Label).string = caiDoi;
            self.thongKe.getChildByName("lb_con_doi").getComponent(cc.Label).string = conDoi;
            self.thongKe.getChildByName("lb_total").getComponent(cc.Label).string = total;

            self.thongKe.getChildByName("lb_cai_thang_percent").getComponent(cc.Label).string = Math.round(caiWin/total*100)+"%";
            self.thongKe.getChildByName("lb_con_thang_percent").getComponent(cc.Label).string = Math.round(conWin/total*100)+"%";
            self.thongKe.getChildByName("lb_hoa_percent").getComponent(cc.Label).string = Math.round(hoa/total*100)+"%";
            self.thongKe.getChildByName("lb_cai_doi_percent").getComponent(cc.Label).string = Math.round(caiDoi/total*100)+"%";
            self.thongKe.getChildByName("lb_con_doi_percent").getComponent(cc.Label).string = Math.round(conDoi/total*100)+"%";
        })
    },
    setDataSmallRoad() {
        let  self   = this;
        let totalBig    = this.listCauNew.length;
        let startPosBig = totalBig-13;
        if (startPosBig < 0)
            startPosBig = 0;
        Promise.all(this.smallRoad.children.map(function(nodeBig, indexBig){
            if (indexBig < totalBig){
                if (!nodeBig.active)
                    nodeBig.active = true;
                let colCauData = self.listCauNew[indexBig+startPosBig];
                let totalData  = colCauData.length;
                Promise.all(nodeBig.children.map(function(nodeCau, index){
                    nodeCau.active = false;
                    if (index < totalData){
                        let type = self.getTypeCau(colCauData[index].type);
                        if (type != HOA){
                            self.setCauSmallInfo(colCauData[index].type, nodeCau);
                            nodeCau.active = true;
                        }
                    }
                }));
            }else {
                nodeBig.active = false;
            }
        }));
    },
    setBigEyeRoad() {
        let  self   = this;
        let totalBig    = this.listCauNew.length;
        let startPosBig = totalBig-13;
        if (startPosBig < 0)
            startPosBig = 0;
        Promise.all(this.bigEyeRoad.children.map(function(nodeBig, indexBig){
            if (indexBig < totalBig){
                if (!nodeBig.active)
                    nodeBig.active = true;
                let colCauData = self.listCauNew[indexBig+startPosBig];
                let totalData  = colCauData.length;
                Promise.all(nodeBig.children.map(function(nodeCau, index){
                    nodeCau.active = false;
                    if (index < totalData){
                        let type = self.getTypeCau(colCauData[index].type);
                        if (type != HOA){
                            self.setCauBigEye(colCauData[index].type, nodeCau);
                            nodeCau.active = true;
                        }
                    }
                }));
            }else {
                nodeBig.active = false;
            }
        }));
    },
    setCockRoad() {
        let  self   = this;
        let totalBig    = this.listCauNew.length;
        let startPosBig = totalBig-13;
        if (startPosBig < 0)
            startPosBig = 0;
        Promise.all(this.cockRoach.children.map(function(nodeBig, indexBig){
            if (indexBig < totalBig){
                if (!nodeBig.active)
                    nodeBig.active = true;
                let colCauData = self.listCauNew[indexBig+startPosBig];
                let totalData  = colCauData.length;
                Promise.all(nodeBig.children.map(function(nodeCau, index){
                    nodeCau.active = false;
                    if (index < totalData){
                        let type = self.getTypeCau(colCauData[index].type);
                        if (type != HOA){
                            self.setCauCockInfo(colCauData[index].type, nodeCau);
                            nodeCau.active = true;
                        }
                    }
                }));
            }else {
                nodeBig.active = false;
            }
        }));
    },
    setScoreRoad() {
        let  self   = this;
        let totalBig    = this.listCauNew.length;
        let startPosBig = totalBig-13;
        if (startPosBig < 0)
            startPosBig = 0;
        Promise.all(this.scoreRoad.children.map(function(nodeBig, indexBig){
            if (indexBig < totalBig){
                if (!nodeBig.active)
                    nodeBig.active = true;
                let colCauData = self.listCauNew[indexBig+startPosBig];
                let totalData  = colCauData.length;
                Promise.all(nodeBig.children.map(function(nodeCau, index){
                    nodeCau.active = false;
                    if (index < totalData){
                        self.setScoreInfo(colCauData[index], nodeCau);
                        nodeCau.active = true;
                    }
                }));
            }else {
                nodeBig.active = false;
            }
        }));
    },
    eventBackPage() {
        mm.audio.playButton();
        this.setDataForPage2();
        this.allPage.scrollToPage((this.allPage.getCurrentPageIndex()+1)%2);
    },
    eventNextPage(){
        mm.audio.playButton();
        this.setDataForPage2();
        this.allPage.scrollToPage((this.allPage.getCurrentPageIndex()+1)%2);
    },
    setDataForPage2() {
        if (this._isFirst){
            this.setDataSmallRoad();
            this.setCockRoad();
            this.setBigEyeRoad();
            this.setScoreRoad();
        }
        this._isFirst = false;
    },
    reformatDataCau(listCau) {
        this.listCauNew= [];
        let rowCau     = [];
        let lastType   = -1;
        for (let i=0; i< listCau.length; i++){
            let typeCau = listCau[i];
            let type    = this.getTypeCau(typeCau.type);
            if (lastType < 0){
                if (type != HOA){
                    rowCau.push(typeCau);
                    lastType = type;
                }
            }else {
                if (type == HOA){
                    rowCau.push(typeCau);
                }else {
                    if (type == lastType){
                        rowCau.push(typeCau);
                    }else {
                        if (rowCau.length <= this.MaxRow){
                            this.listCauNew.push(rowCau);
                        }else {
                            let maxCat = Math.ceil(rowCau.length / this.MaxRow);
                            for (let j=0; j< maxCat ; j++){
                                this.listCauNew.push(rowCau.slice(j, j+this.MaxRow));
                            }
                        }
                        rowCau = [];
                        rowCau.push(typeCau);
                        lastType = type;
                    }
                }
            }
        }
        if (rowCau.length <= this.MaxRow){
            this.listCauNew.push(rowCau);
        }else {
            let maxCat = Math.ceil(rowCau.length / this.MaxRow);
            for (let j=0; j< maxCat ; j++){
                this.listCauNew.push(rowCau.slice(j, j+this.MaxRow));
            }
        }
    },
    getTypeCau(typeCau) {
        if (typeCau.length <2)
            return typeCau[0];
        for (let i=0; i<typeCau.length; i++){
            if (typeCau[i] < 3)
                return typeCau[i];
        }
        return HOA;
    },
    setCauInfo(type, nodeCau) {
        let cai = nodeCau.getChildByName("cai");
        let con = nodeCau.getChildByName("con");
        cai.active = false;
        con.active = false;
        for (let i=0; i< type.length; i++){
            if (type[i] > 2){
                if (type == 3){
                    con.active = true;
                }else {
                    cai.active = true;
                }
            }else {
                nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgDishBoard[type[i]];
            }
        }
    },
    setCauSmallInfo(type, nodeCau) {
        for (let i=0; i< type.length; i++){
            if (type[i] < 2){
                nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgDishBoard[type[i]];
            }
        }
    },
    setCauBigInfo(type, nodeCau) {
        let cai = nodeCau.getChildByName("cai");
        let con = nodeCau.getChildByName("con");
        cai.active = false;
        con.active = false;
        for (let i=0; i< type.length; i++){
            if (type[i] > 2){
                if (type == 3){
                    con.active = true;
                }else {
                    cai.active = true;
                }
            }else {
                if (type[i] == 2){
                    type[i] = this._lastType +2;
                }else {
                    if (type[i] < 2)
                        this._lastType == type[i];
                }
                nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgBigRoad[type[i]];
            }
        }
    },
    setCauBigEye(type, nodeCau) {
        for (let i=0; i< type.length; i++){
            if (type[i] < 2){
                nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgBigRoad[type[i]];
            }
        }
    },
    setCauCockInfo(type, nodeCau) {
        for (let i=0; i< type.length; i++){
            if (type[i] < 2){
                nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgCockRoad[type[i]];
            }
        }
    },
    setScoreInfo(cauInfo, nodeCau){
        let type = cauInfo.type;
        for (let i=0; i< type.length; i++){
            if (type[i] < 3){
                nodeCau.getComponent(cc.Sprite).spriteFrame   = this.bgScoreRoad[type[i]];
                nodeCau.getChildByName("lb_win").color  = this.listColor[type[i]];
                nodeCau.getChildByName("lb_win").getComponent(cc.Label).string  = cauInfo.con;
                nodeCau.getChildByName("lb_lose").getComponent(cc.Label).string = cauInfo.cai;
            }
        }
    },
});
