"use strict";
cc._RF.push(module, 'fa9ebx6Fq9Lza7nAIGoXXOU', 'BaseItemCustom');
// scripts/abase/BaseItemCustom.js

"use strict";

/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/5/15
 * @doc List Item component..
 * 说明：
 *      1. This component must be used in conjunction with the List component. (Supporting ..)
 * @end
 ******************************************/
var SelectedType = cc.Enum({
  NONE: 0,
  TOGGLE: 1,
  // Single (Single node show / hide)
  SWITCH: 2 // Switch (single Sprite switch SpriteFrame)

});
cc.BaseItemCustom = cc.Class({
  editor: {
    disallowMultiple: false,
    menu: 'Custom component / List Item',
    executionOrder: -5001 // Before List

  },
  "extends": cc.VozBaseComponent,
  properties: {
    selectedMode: {
      "default": SelectedType.NONE,
      type: SelectedType,
      tooltip: CC_DEV && 'Select mode' // get: function () {
      //     return this._slideType;
      // },
      // set: function (val) {
      //     if (val != null)
      //         this._slideType = val;
      // }

    },
    selectedFlag: {
      "default": null,
      type: cc.Node,
      visible: function visible() {
        var bool = this.selectedMode > 0;
        if (!bool) this.selectedFlag = null;
        return bool;
      }
    },
    selectedSpriteFrame: {
      "default": null,
      type: cc.SpriteFrame,
      visible: function visible() {
        var bool = this.selectedMode == SelectedType.SWITCH;
        if (!bool) this.selectedSpriteFrame = null;
        return bool;
      }
    },
    adaptiveSize: {
      "default": false,
      tooltip: CC_DEV && 'Adaptive size (width or height)'
    },
    _selected: false,
    selected: {
      visible: false,
      get: function get() {
        return this._selected;
      },
      set: function set(val) {
        this._selected = val;
        if (!this.selectedFlag) return;

        switch (this.selectedMode) {
          case SelectedType.TOGGLE:
            this.selectedFlag.active = val;
            break;

          case SelectedType.SWITCH:
            // this.selectedFlag.node.active = true;
            this.selectedFlag.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
            break;
        }
      }
    },
    _btnCom: null,
    btnCom: {
      visible: false,
      get: function get() {
        if (!this._btnCom) this._btnCom = this.node.getComponent(cc.Button);
        return this._btnCom;
      }
    }
  },
  onDestroy: function onDestroy() {
    this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
  },
  _registerEvent: function _registerEvent() {
    if (!this.eventReg) {
      if (this.btnCom && this._list.selectedMode > 0) {
        this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
      }

      if (this.adaptiveSize) {
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
      }

      this.eventReg = true;
    }
  },
  _onSizeChange: function _onSizeChange() {
    this._list._onItemAdaptive(this.node);
  },

  /**
   * Create event
   * @param {cc.Component} component Component script
   * @param {string} handlerName Trigger function name
   * @param {cc.Node} node Where the components are node（Take it without transmitting component.node）
   * @returns cc.Component.EventHandler
   */
  createEvt: function createEvt(component, handlerName, node) {
    if (!component.isValid) return; //Some are loaded asynchronously, and nodes are destroyed as well.

    component.comName = component.comName || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
    var evt = new cc.Component.EventHandler();
    evt.target = node || component.node;
    evt.component = component.comName;
    evt.handler = handlerName;
    return evt;
  },
  showAni: function showAni(aniType, callFunc, del) {
    var _this = this;

    var acts;

    switch (aniType) {
      case 0:
        //Disappearance
        acts = [new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, this.node.height * 2)];
        break;

      case 1:
        //Disappear right
        acts = [new cc.scaleTo(.2, .7), new cc.moveBy(.3, this.node.width * 2, 0)];
        break;

      case 2:
        //Disappear down
        acts = [new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, this.node.height * -2)];
        break;

      case 3:
        //Disappear left
        acts = [new cc.scaleTo(.2, .7), new cc.moveBy(.3, this.node.width * -2, 0)];
        break;

      default:
        // Default: zoom out
        acts = [new cc.scaleTo(.3, .1)];
        break;
    }

    if (callFunc || del) {
      acts.push(new cc.CallFunc(function () {
        if (del) {
          _this._list._delSingleItem(_this.node);

          for (var n = _this._list.displayData.length - 1; n >= 0; n--) {
            if (_this._list.displayData[n].listId == _this.node._listId) {
              _this._list.displayData.splice(n, 1);

              break;
            }
          }
        }

        callFunc();
      }));
    }

    this.node.runAction(new cc.Sequence(acts));
  },
  onClickThis: function onClickThis() {
    // if (this._list.selectedMode == 1)
    this._list.selectedId = this.node._listId;
  }
});

cc._RF.pop();