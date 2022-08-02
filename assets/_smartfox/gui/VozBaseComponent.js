cc.VozBaseComponent = cc.Class({
    extends: cc.Component,
    statics: {
    },
    properties: {
        _data       : null,
    },
    onLoad(){
        cc.debug.setDisplayStats(false);
    },
    updateUserVariable(event){

    },
    eventBackDevice(){

    },
    setting(prefab, list) {
        if (!prefab || !list) {
            return
        }
    },
    _getUIFromIndex(from) {
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

    _setOption(node, option) {
        if (option && (option.data !== undefined) && (option.data !== null)) {
            const script = node.getComponent(node.name);
            if (script) {
                script._data = option.data
            }
        }
        node._pop = !!(option && option.pop);
    },
    //pop: true -> khi call back() -> Chi destroy UI dau, UI sau van Active True
    //pop: false-> khi call back() -> Destroy UI dau, Ui sau chuyen tu Active False -> True
    show(name, option, complete) {
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
                    ui.active = false
                }
            }
            // this.setLanguage(option,node);
            if(complete)
                complete();
            let jsUI = node.getComponent(node.name);
            if(jsUI)
                jsUI.resume();
            return
        }
        if (option && (option.src !== undefined) && (option.src !== null)) {
            name = option.src+"/"+ name;
        }
        cc.loader.loadRes(name, (err, prefab) => {
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
                // this.setLanguage(option,node);
                if(complete) complete();
            }
        });
    },
    hide(name) {
        if (!name || name === '') {
            this.node.active = false
        } else {
            const node = cc.find(name);
            if (node) {
                node.active = false
            }
        }
    },
    refresh(){

    },
    getUIFromName(name) {
        if (!name || !name.startsWith('UI')) {
            return;
        }
        const scene = cc.director.getScene();
        return cc.find(name, scene)
    },

    goTo(name, exclude) {
        let ui = this.getUIFromName(name);
        if (ui) {
            let index = ui.getSiblingIndex();
            if (exclude) {
                ui = this._getUIFromIndex(index - 1);
                if (ui) {
                    index = ui.getSiblingIndex()
                } else {
                    return
                }
            }
            const scene = cc.director.getScene();
            for (let i = scene.childrenCount - 1; i > index; i--) {
                const element = scene.children[i];
                element.destroy()
            }
            ui.active = true
        }
    },

    back() {
        let ui = this._getUIFromIndexBack(-1);
        if (ui) {
            ui.destroy();
            ui = this._getUIFromIndex(ui.getSiblingIndex() - 1);
            if (ui) {
                ui.active = true;
                let jsUI = ui.getComponent(ui.name);
                if(jsUI)
                    jsUI.resume();
            }
        }
    },
    _getUIFromIndexBack(from) {
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
            if (element.name.startsWith('UI') && cc.currentUI != element.name) {
                return element
            }
        }
    },
    resume(){
    },
    getPositionInOtherNode(currentNode, nodeTo) {
        //nodeFrom: Node hiện tại, cần chuyển sang tạo độ của node khác
        //nodeTo  : Không gian tạo độ nút mới của nodeFrom4
        // Hiểu đơn giản: Chuyển tọa độ thằng nodeFrom ra ngoài cùng (Con của Scene). Sau đó thì add nó làm con của nodeTo
        if (currentNode.parent == null) {
            let pos = currentNode.convertToWorldSpaceAR(currentNode.getPosition());
            return nodeTo.convertToNodeSpaceAR(pos);
        }
        let pos = currentNode.parent.convertToWorldSpaceAR(currentNode.getPosition());
        return nodeTo.convertToNodeSpaceAR(pos);
    },
    setLanguage(option, currentNode) {
        let srcName = "portal";
        if (option && (option.src !== undefined) && (option.src !== null)) {
            srcName = option.src;
        }
        let currentLanguage = require(srcName+'Language');
        currentLanguage.changeLanguage(currentNode);
    }
});
