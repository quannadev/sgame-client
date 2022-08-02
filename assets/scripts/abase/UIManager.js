let UIManger = {};
UIManger.show = function(name, option, complete){
    if (!name || name === '') {
        cc.error('name is empty!');
        return;
    }
    const scene = cc.director.getScene();
    const node = cc.find(name, scene);
    if (node) {
        node.active = false;
        this._setOption(node, option);
        node.setSiblingIndex(-1);
        node.active = true;
        if (!node._pop) {
            let ui = this._getUIFromIndex(-2);
            if (ui) {
                if (ui.name!= cc.currentUI){
                    ui.active = false;
                }

            }
        }
        mm.Loading.hide();
        if(complete)
            complete();
        return
    }
    if (option && (option.src !== undefined) && (option.src !== null)) {
        name = option.src+"/"+ name;
    }
    cc.loader.loadRes(name,(err, prefab) => {
        if(err){
            console.log(err);
            return;
        }
        if (cc.find(name, scene)) {
            if(complete)
                complete();
            return
        }
        cc.loader.setAutoReleaseRecursively(prefab, true);
        const node = cc.instantiate(prefab);
        if (!node) {
            cc.error('prefab instantiation failed!')
        } else {
            let ui = this._getUIFromIndex(-1);
            if (ui) {
                ui.active = !!(option && option.pop);
            }
            this._setOption(node, option);
            scene.addChild(node);
            mm.Loading.hide();
            if(complete) complete();
        }
    });
},
UIManger._getUIFromIndex = function(from) {
    const scene = cc.director.getScene();
    if (!Number.isInteger(from)) {
        from = scene.childrenCount - 1
    }
    if (from < 0) {
        from += scene.childrenCount
    }
    if ((from < 0) || (from > scene.childrenCount - 1)) {
        cc.log('_getUIFromIndex error, from = ' + from + '!');
        return
    }
    for (let index = from; index >= 0; index--) {
        let element = scene.children[index];

        if (element.name.startsWith('UI')) {
            return element
        }
    }
},
UIManger._setOption = function(node, option) {
    if (option && (option.data !== undefined) && (option.data !== null)) {
        const script = node.getComponent(node.name);
        if (script) {
            script._data = option.data
        }
    }
    node._pop = !!(option && option.pop);
}
UIManger.getUIFromName = function(name){
    if (!name || !name.startsWith('UI')) {
        return;
    }
    const scene = cc.director.getScene();
    return cc.find(name, scene)
}
window.UIManger = module.exports = UIManger;
