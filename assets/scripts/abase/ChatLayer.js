const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        ed_msg: cc.EditBox,
        listview    : Listview,
        dataChat: null
    },
    onLoad(){
        this.dataChat = [];
    },
    onDisable(){

    },
    onEnable(){
        this.listview.numItems = this.dataChat.length;
        this.listview.scrollTo(0);
    },
    initChat(listChat) {
        this.dataChat = listChat;
        this.listview.numItems = this.dataChat.length;
        this.listview.scrollTo(0);
    },
    sendMessage(){
        if(this.ed_msg.string.length > 0){
            let param = new SmartFoxSDK.SObject();
            param.putUtfString("fb", "");
            param.putUtfString("dn", GameVariables.getDisplayName(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf));
            SmartFoxSDK.TaiXiuController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(this.ed_msg.string, param));
            this.ed_msg.string = "";
        }
    },
    addMessage(msgItem){
        this.dataChat.unshift(msgItem);
        this.listview.numItems = this.dataChat.length;
    },
    onListRender(item, idx) {
        let data = this.dataChat[idx];
        item.getComponent(item.name).init(data, idx);
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
});
