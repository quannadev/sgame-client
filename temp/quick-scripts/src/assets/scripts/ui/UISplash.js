"use strict";
cc._RF.push(module, '63fe0aI/sFDUpVbzTV9FG4l', 'UISplash');
// scripts/ui/UISplash.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    hoiXoayDapXoay: cc.Node,
    progressBar: cc.ProgressBar,
    lb_loading: cc.Label
  },
  onLoad: function onLoad() {
    this.progressBar.progress = 0;

    if (!cc.sys.isNative) {
      this.scheduleOnce(this.initGame, 0);
    } else {
      if (cc.isValid(this.hoiXoayDapXoay)) {
        var self = this;
        var script = this.hoiXoayDapXoay.getComponent("HoiXoayServer");
        script.hotUpdate(function () {
          self.scheduleOnce(self.initGame, 0);
        });
      } else {
        this.scheduleOnce(this.initGame, 0);
      }
    }
  },
  initGame: function initGame() {
    var self = this;
    this.show('UIPortal', {
      pop: true
    });
  }
});

cc._RF.pop();