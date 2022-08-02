cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        helperNode: cc.Node
    },
    onEnable() {
        let pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
        pageHelp.scrollToPage(0, 0);
    },
    eventClose() {
        this.back();
    },
    eventHelperLeft() {
        let pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
        pageHelp.scrollToPage((pageHelp.getCurrentPageIndex() +4)%5, 0.2);
    },
    eventHelperRight() {
        let pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
        pageHelp.scrollToPage((pageHelp.getCurrentPageIndex() +1)%5, 0.2);
    },
});
