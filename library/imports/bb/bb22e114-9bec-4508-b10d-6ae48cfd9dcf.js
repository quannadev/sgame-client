"use strict";
cc._RF.push(module, 'bb22eEUm+xFCLENauSM/Z3P', 'ButtonScaler');
// _smartfox/gui/action/ButtonScaler.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    pressedScale: 0.9,
    transDuration: 0.1,
    sound: false
  },
  onLoad: function onLoad() {
    var self = this;
    self.initScale = this.node.scale;
    self.button = self.getComponent(cc.Button);
    self.scaleDownAction = cc.scaleTo(0.05, this.pressedScale);
    self.scaleUpAction = cc.scaleTo(0.05, self.initScale);

    function onTouchDown(event) {
      this.stopAllActions();
      this.runAction(self.scaleDownAction);
    }

    function onTouchUp(event) {
      this.stopAllActions();
      this.runAction(self.scaleUpAction);
    }

    this.node.on('touchstart', onTouchDown, this.node);
    this.node.on('touchend', onTouchUp, this.node);
    this.node.on('touchcancel', onTouchUp, this.node);
  }
});

cc._RF.pop();