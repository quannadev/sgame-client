"use strict";
cc._RF.push(module, '5c257J0xqFK/rnC395+zKFq', 'VozBaseComponent');
// _smartfox/gui/VozBaseComponent.js

"use strict";

cc.VozBaseComponent = cc.Class({
  "extends": cc.Component,
  statics: {},
  properties: {
    _data: null
  },
  onLoad: function onLoad() {
    cc.debug.setDisplayStats(false);
  },
  updateUserVariable: function updateUserVariable(event) {},
  eventBackDevice: function eventBackDevice() {},
  setting: function setting(prefab, list) {
    if (!prefab || !list) {
      return;
    }
  },
  _getUIFromIndex: function _getUIFromIndex(from) {
    var scene = cc.director.getScene();

    if (!Number.isInteger(from)) {
      from = scene.childrenCount - 1;
    }

    if (from < 0) {
      from += scene.childrenCount;
    }

    if (from < 0 || from > scene.childrenCount - 1) {
      cc.log('_getUIFromIndex error, from = ' + from + '!');
      return;
    }

    for (var index = from; index >= 0; index--) {
      var element = scene.children[index];

      if (element.name.startsWith('UI')) {
        return element;
      }
    }
  },
  _setOption: function _setOption(node, option) {
    if (option && option.data !== undefined && option.data !== null) {
      var script = node.getComponent(node.name);

      if (script) {
        script._data = option.data;
      }
    }

    node._pop = !!(option && option.pop);
  },
  //pop: true -> khi call back() -> Chi destroy UI dau, UI sau van Active True
  //pop: false-> khi call back() -> Destroy UI dau, Ui sau chuyen tu Active False -> True
  show: function show(name, option, complete) {
    var _this = this;

    if (!name || name === '') {
      cc.error('name is empty!');
      return;
    }

    var scene = cc.director.getScene();
    var node = cc.find(name, scene);

    if (node) {
      node.active = false;

      this._setOption(node, option);

      node.setSiblingIndex(-1);
      node.active = true;

      if (!node._pop) {
        var ui = this._getUIFromIndex(-2);

        if (ui) {
          ui.active = false;
        }
      } // this.setLanguage(option,node);


      if (complete) complete();
      var jsUI = node.getComponent(node.name);
      if (jsUI) jsUI.resume();
      return;
    }

    if (option && option.src !== undefined && option.src !== null) {
      name = option.src + "/" + name;
    }

    cc.loader.loadRes(name, function (err, prefab) {
      if (err) {
        console.log(err);
        return;
      }

      if (cc.find(name, scene)) {
        if (complete) complete();
        return;
      }

      cc.loader.setAutoReleaseRecursively(prefab, true);
      var node = cc.instantiate(prefab);

      if (!node) {
        cc.error('prefab instantiation failed!');
      } else {
        var _ui = _this._getUIFromIndex(-1);

        if (_ui) {
          _ui.active = !!(option && option.pop);
        }

        _this._setOption(node, option);

        scene.addChild(node); // this.setLanguage(option,node);

        if (complete) complete();
      }
    });
  },
  hide: function hide(name) {
    if (!name || name === '') {
      this.node.active = false;
    } else {
      var node = cc.find(name);

      if (node) {
        node.active = false;
      }
    }
  },
  refresh: function refresh() {},
  getUIFromName: function getUIFromName(name) {
    if (!name || !name.startsWith('UI')) {
      return;
    }

    var scene = cc.director.getScene();
    return cc.find(name, scene);
  },
  goTo: function goTo(name, exclude) {
    var ui = this.getUIFromName(name);

    if (ui) {
      var index = ui.getSiblingIndex();

      if (exclude) {
        ui = this._getUIFromIndex(index - 1);

        if (ui) {
          index = ui.getSiblingIndex();
        } else {
          return;
        }
      }

      var scene = cc.director.getScene();

      for (var i = scene.childrenCount - 1; i > index; i--) {
        var element = scene.children[i];
        element.destroy();
      }

      ui.active = true;
    }
  },
  back: function back() {
    var ui = this._getUIFromIndexBack(-1);

    if (ui) {
      ui.destroy();
      ui = this._getUIFromIndex(ui.getSiblingIndex() - 1);

      if (ui) {
        ui.active = true;
        var jsUI = ui.getComponent(ui.name);
        if (jsUI) jsUI.resume();
      }
    }
  },
  _getUIFromIndexBack: function _getUIFromIndexBack(from) {
    var scene = cc.director.getScene();

    if (!Number.isInteger(from)) {
      from = scene.childrenCount - 1;
    }

    if (from < 0) {
      from += scene.childrenCount;
    }

    if (from < 0 || from > scene.childrenCount - 1) {
      cc.log('_getUIFromIndex error, from = ' + from + '!');
      return;
    }

    for (var index = from; index >= 0; index--) {
      var element = scene.children[index];

      if (element.name.startsWith('UI') && cc.currentUI != element.name) {
        return element;
      }
    }
  },
  resume: function resume() {},
  getPositionInOtherNode: function getPositionInOtherNode(currentNode, nodeTo) {
    //nodeFrom: Node hiện tại, cần chuyển sang tạo độ của node khác
    //nodeTo  : Không gian tạo độ nút mới của nodeFrom4
    // Hiểu đơn giản: Chuyển tọa độ thằng nodeFrom ra ngoài cùng (Con của Scene). Sau đó thì add nó làm con của nodeTo
    if (currentNode.parent == null) {
      var _pos = currentNode.convertToWorldSpaceAR(currentNode.getPosition());

      return nodeTo.convertToNodeSpaceAR(_pos);
    }

    var pos = currentNode.parent.convertToWorldSpaceAR(currentNode.getPosition());
    return nodeTo.convertToNodeSpaceAR(pos);
  },
  setLanguage: function setLanguage(option, currentNode) {
    var srcName = "portal";

    if (option && option.src !== undefined && option.src !== null) {
      srcName = option.src;
    }

    var currentLanguage = require(srcName + 'Language');

    currentLanguage.changeLanguage(currentNode);
  }
});

cc._RF.pop();