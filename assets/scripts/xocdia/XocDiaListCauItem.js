cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        cauItem : cc.Prefab,
        listCau : cc.Node,
    },
    init(listCau) {
        let self = this;
        this.listCau.removeAllChildren(true);
        Promise.all(listCau.map(function(cauData, index){
            let cauPrefab = cc.instantiate(self.cauItem);
            self.listCau.addChild(cauPrefab);
            cauPrefab.getComponent(cauPrefab.name).init(cauData);
        }));
    },
});
