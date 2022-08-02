
var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        nodeLine:   cc.Node,
        typeLine: 0
    },
    init: function(obj){
        this.KCV = obj;
        this.eventSelectAll();
    },
    eventOpen: function(){
        this.node.active = true;
    },
    eventClose: function(){
        let total = this.getTotalLineSelect();
        if (this.node.active && total < 1) {
            this.KCV.addNotice('Chọn ít nhất 1 dòng');
        }else{
            this.node.active = false;
        }
    },
    eventSelect: function(event, numberStr) {
        let numberLine = parseInt(numberStr);
        helper.setMaterialGray(event.target.getComponent(cc.Sprite), helper.isMaterialGray(event.target.getComponent(cc.Sprite)));
        this.data[numberLine] = helper.isMaterialGray(event.target.getComponent(cc.Sprite));
        this.updateString();
        this.typeLine = 3;
    },
    eventBoChon: function(){
        Promise.all(this.nodeLine.children.map(function(line, index){
            helper.setMaterialGray(line.getComponent(cc.Sprite), true);
            return false;
        })).then(result => {
            this.data = result;
            this.typeLine = -1;
            this.updateString();
        });
    },
    eventSelectChan: function() {
        Promise.all(this.nodeLine.children.map(function(line, index){
            helper.setMaterialGray(line.getComponent(cc.Sprite), index%2 ==1);
            return index%2 !=1;
        })).then(result => {
            this.data = result;
            this.typeLine = 2;
            this.updateString();
        });
    },
    eventSelectLe: function() {
        Promise.all(this.nodeLine.children.map(function(line, index){
            helper.setMaterialGray(line.getComponent(cc.Sprite), index%2 ==0);
            return index%2 != 0;
        })).then(result => {
            this.data = result;
            this.typeLine = 1;
            this.updateString();
        });
    },
    eventSelectAll: function(e, select) {
        Promise.all(this.nodeLine.children.map(function(line, index){
            helper.setMaterialGray(line.getComponent(cc.Sprite), false);
            return true;
        })).then(result => {
            this.typeLine = 0;
            this.data = result;
            this.updateString();
        });

    },
    updateString: function () {
        let total = this.getTotalLineSelect();
        this.KCV.setNumberLines(total);
        this.KCV.setNumberStake(total);
    },
    getTotalLineChan() {
        return 10;
    },
    getTotalLineLe() {
        return 10;
    },
    getTotalLine() {
        return 20;
    },
    getTotalLineSelect: function () {
        let total = 0;
        for (let i=1; i< this.data.length; i++){
            if (this.data[i])
                total++;
        }
        return total;
    }
});
