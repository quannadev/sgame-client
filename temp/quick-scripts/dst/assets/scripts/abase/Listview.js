
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/Listview.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89918rG0PdPhYMDa0KzPrcE', 'Listview');
// scripts/abase/Listview.js

"use strict";

/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/1/5
 * @doc List component.
 * @end
 ******************************************/
var TemplateType = cc.Enum({
  'NODE': 1,
  'PREFAB': 2
});
var SlideType = cc.Enum({
  'NORMAL': 1,
  //Normal
  'ADHERING': 2,
  //Sticky mode that will force off rolling inertia
  'PAGE': 3 //Page mode, which will force the scroll inertia off

});
var SelectedType = cc.Enum({
  'NONE': 0,
  'SINGLE': 1,
  //Single choice
  'MULT': 2 //Multiple choice

});
cc.Class({
  "extends": cc.Component,
  editor: {
    disallowMultiple: false,
    menu: 'Custom component / List',
    requireComponent: cc.ScrollView,
    // The execution priority of the script lifecycle callback. Scripts less than 0 are executed first, and scripts greater than 0 are executed last. This priority is only valid for onLoad, onEnable, start, update and lateUpdate, and not for onDisable and onDestroy。
    executionOrder: -5000
  },
  properties: {
    templateType: {
      "default": TemplateType.NODE,
      type: TemplateType
    },
    tmpNode: {
      "default": null,
      type: cc.Node,
      tooltip: CC_DEV && 'Item template, type: cc.Node',
      visible: function visible() {
        var bool = this.templateType == TemplateType.NODE;
        if (!bool) this.tmpNode = null;
        return bool;
      }
    },
    tmpPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: CC_DEV && 'Item template, type: cc.Prefab',
      visible: function visible() {
        var bool = this.templateType == TemplateType.PREFAB;
        if (!bool) this.tmpPrefab = null;
        return bool;
      }
    },
    _slideMode: 1,
    slideMode: {
      type: SlideType,
      tooltip: CC_DEV && 'Sliding mode',
      get: function get() {
        return this._slideMode;
      },
      set: function set(val) {
        if (val != null) this._slideMode = val;
      }
    },
    pageDistance: {
      "default": .3,
      type: cc.Float,
      range: [0, 1, .1],
      tooltip: CC_DEV && 'Page turning distance',
      slide: true,
      visible: function visible() {
        return this._slideMode == SlideType.PAGE;
      }
    },
    pageChangeEvent: {
      "default": null,
      type: cc.Component.EventHandler,
      tooltip: CC_DEV && 'Page change event',
      visible: function visible() {
        var bool = this._slideMode == SlideType.PAGE;
        if (!bool) this.pageChangeEvent = null;
        return bool;
      }
    },
    _virtual: true,
    virtual: {
      tooltip: CC_DEV && 'Whether it is a virtual list (dynamic list)',
      get: function get() {
        return this._virtual;
      },
      set: function set(val) {
        if (val != null) this._virtual = val;

        if (!CC_DEV && this._numItems != 0) {
          this._onScrolling();
        }
      }
    },
    cyclic: {
      "default": false,
      tooltip: CC_DEV && 'Whether it is a circular list',
      visible: function visible() {
        var val = this.virtual && this.slideMode == SlideType.NORMAL;
        if (!val) this.cyclic = false;
        return val;
      }
    },
    lackCenter: {
      "default": false,
      tooltip: CC_DEV && 'When the number of items is not enough to fill the Content, whether to display the items in the center (Grid layout is not supported)',
      visible: function visible() {
        return this.virtual;
      }
    },
    lackSlide: {
      "default": false,
      tooltip: CC_DEV && 'Whether the number of items is sufficient to fill the content',
      visible: function visible() {
        var val = this.virtual && !this.lackCenter;
        if (!val) this.lackSlide = false;
        return val;
      }
    },
    _updateRate: 0,
    updateRate: {
      type: cc.Integer,
      range: [0, 6, 1],
      tooltip: CC_DEV && 'Refresh frequency (the larger the value, the lower the refresh frequency and the higher the performance)',
      slide: true,
      get: function get() {
        return this._updateRate;
      },
      set: function set(val) {
        if (val >= 0 && val <= 6) {
          this._updateRate = val;
        }
      }
    },
    frameByFrameRenderNum: {
      "default": 0,
      type: cc.Integer,
      range: [0, 12, 1],
      tooltip: CC_DEV && 'When rendering frame by frame, the number of items rendered per frame (frame rendering is turned off when <= 0)',
      slide: true
    },
    renderEvent: {
      "default": null,
      type: cc.Component.EventHandler,
      tooltip: CC_DEV && 'Rendering event (renderer)'
    },
    selectedMode: {
      "default": SelectedType.NONE,
      type: SelectedType,
      tooltip: CC_DEV && 'Select mode'
    },
    repeatEventSingle: {
      "default": false,
      tooltip: CC_DEV && 'Whether to repeatedly respond to radio events',
      visible: function visible() {
        return this.selectedMode == SelectedType.SINGLE;
      }
    },
    selectedEvent: {
      "default": null,
      type: cc.Component.EventHandler,
      tooltip: CC_DEV && 'Trigger selection event',
      visible: function visible() {
        var bool = this.selectedMode > 0;
        if (!bool) this.selectedEvent = null;
        return bool;
      }
    },
    _selectedId: -1,
    selectedId: {
      visible: false,
      get: function get() {
        return this._selectedId;
      },
      set: function set(val) {
        var t = this;
        var item;

        switch (t.selectedMode) {
          case SelectedType.SINGLE:
            {
              if (!t.repeatEventSingle && val == t._selectedId) return;
              item = t.getItemByListId(val); // if (!item && val >= 0)
              //     return;

              if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;else //If it is less than 0, cancel the selection. Leave _lastSelectedId empty, and change it if you have special needs in the future.
                t._lastSelectedId = null;
              t._selectedId = val;
              if (item) item.listItem.selected = true;

              if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                var lastItem = t.getItemByListId(t._lastSelectedId);

                if (lastItem) {
                  lastItem.listItem.selected = false;
                }
              }

              if (t.selectedEvent) {
                cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualNumItems);
              }

              break;
            }

          case SelectedType.MULT:
            {
              item = t.getItemByListId(val);
              if (!item) return;
              if (t._selectedId >= 0) t._lastSelectedId = t._selectedId;
              t._selectedId = val;
              var bool = !item.listItem.selected;
              item.listItem.selected = bool;
              var sub = t.multSelected.indexOf(val);

              if (bool && sub < 0) {
                t.multSelected.push(val);
              } else if (!bool && sub >= 0) {
                t.multSelected.splice(sub, 1);
              }

              if (t.selectedEvent) {
                cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : t._lastSelectedId % this._actualNumItems, bool);
              }

              break;
            }
        }
      }
    },
    _numItems: {
      "default": 0,
      serializable: false
    },
    numItems: {
      visible: false,
      get: function get() {
        return this._actualNumItems;
      },
      set: function set(val) {
        var t = this;
        if (!t.checkInited()) return;

        if (val == null || val < 0) {
          cc.error('numItems set the wrong::', val);
          return;
        }

        t._actualNumItems = t._numItems = val;
        t._forceUpdate = true;

        if (t._virtual) {
          t._resizeContent();

          if (t.cyclic) {
            t._numItems = t._cyclicNum * t._numItems;
          }

          t._onScrolling();

          if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE) t.curPageNum = t.nearestListId;
        } else {
          var layout = t.content.getComponent(cc.Layout);

          if (layout) {
            layout.enabled = true;
          }

          t._delRedundantItem();

          t.firstListId = 0;

          if (t.frameByFrameRenderNum > 0) {
            //Render a few first
            var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;

            for (var n = 0; n < len; n++) {
              t._createOrUpdateItem2(n);
            }

            if (t.frameByFrameRenderNum < t._numItems) {
              t._updateCounter = t.frameByFrameRenderNum;
              t._updateDone = false;
            }
          } else {
            for (var _n = 0; _n < val; _n++) {
              t._createOrUpdateItem2(_n);
            }

            t.displayItemNum = val;
          }
        }
      }
    }
  },
  onLoad: function onLoad() {
    this._init();
  },
  onDestroy: function onDestroy() {
    var t = this;
    if (t._itemTmp && t._itemTmp.isValid) t._itemTmp.destroy();
    if (t.tmpNode && t.tmpNode.isValid) t.tmpNode.destroy(); // let total = t._pool.size();

    while (t._pool.size()) {
      var node = t._pool.get();

      node.destroy();
    } // if (total)
    //     cc.log('-----------------' + t.node.name + '<List> destroy node total num. =>', total);

  },
  onEnable: function onEnable() {
    // if (!CC_EDITOR)
    this._registerEvent();

    this._init();
  },
  onDisable: function onDisable() {
    // if (!CC_EDITOR)
    this._unregisterEvent();
  },
  //Registration Event
  _registerEvent: function _registerEvent() {
    var t = this;
    t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
    t.node.on('touch-up', t._onTouchUp, t, true);
    t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
    t.node.on('scroll-began', t._onScrollBegan, t, true);
    t.node.on('scroll-ended', t._onScrollEnded, t, true);
    t.node.on('scrolling', t._onScrolling, t, true);
    t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
  },
  //Unregister Event
  _unregisterEvent: function _unregisterEvent() {
    var t = this;
    t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
    t.node.off('touch-up', t._onTouchUp, t, true);
    t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
    t.node.off('scroll-began', t._onScrollBegan, t, true);
    t.node.off('scroll-ended', t._onScrollEnded, t, true);
    t.node.off('scrolling', t._onScrolling, t, true);
    t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
  },
  //Initialize various:
  _init: function _init() {
    var t = this;
    if (t._inited) return;
    t._scrollView = t.node.getComponent(cc.ScrollView);
    t.content = t._scrollView.content;

    if (!t.content) {
      cc.error(t.node.name + "'s cc.ScrollView unset content!");
      return;
    }

    t._layout = t.content.getComponent(cc.Layout);
    t._align = t._layout.type; //Arrange mode

    t._resizeMode = t._layout.resizeMode; // Adaptive Mode

    t._startAxis = t._layout.startAxis;
    t._topGap = t._layout.paddingTop; //Top margin

    t._rightGap = t._layout.paddingRight; //Right margin

    t._bottomGap = t._layout.paddingBottom; //Bottom margin

    t._leftGap = t._layout.paddingLeft; //Left margin

    t._columnGap = t._layout.spacingX; //Column spacing

    t._lineGap = t._layout.spacingY; //Line spacing

    t._colLineNum; //Number of columns or rows (= 1 for non-GRID mode, which means single column or single row);

    t._verticalDir = t._layout.verticalDirection; //Orientation of child nodes vertically

    t._horizontalDir = t._layout.horizontalDirection; //Orient the children horizontally

    t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode)); // Specific sliding mode processing

    if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
      t._scrollView.inertia = false;

      t._scrollView._onMouseWheel = function () {
        return;
      };
    }

    if (!t.virtual) // lackCenter only supports Virtual mode
      t.lackCenter = false;
    t._lastDisplayData = []; //Last refreshed data

    t.displayData = []; //Current data

    t._pool = new cc.NodePool(); //This is a pool ...

    t._forceUpdate = false; //Whether to force updates

    t._updateCounter = 0; //Framed Rendering Frames

    t._updateDone = true; //Whether framed rendering is complete

    t.curPageNum = 0; //Current page number

    if (t.cyclic) {
      // If it is a loop list, override some cc.ScrollView functions
      t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);

      t._scrollView._startBounceBackIfNeeded = function () {
        return false;
      };
    }

    switch (t._align) {
      case cc.Layout.Type.HORIZONTAL:
        {
          switch (t._horizontalDir) {
            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
              t._alignCalcType = 1;
              break;

            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
              t._alignCalcType = 2;
              break;
          }

          break;
        }

      case cc.Layout.Type.VERTICAL:
        {
          switch (t._verticalDir) {
            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              t._alignCalcType = 3;
              break;

            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              t._alignCalcType = 4;
              break;
          }

          break;
        }

      case cc.Layout.Type.GRID:
        {
          switch (t._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              switch (t._verticalDir) {
                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                  t._alignCalcType = 3;
                  break;

                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                  t._alignCalcType = 4;
                  break;
              }

              break;

            case cc.Layout.AxisDirection.VERTICAL:
              switch (t._horizontalDir) {
                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                  t._alignCalcType = 1;
                  break;

                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                  t._alignCalcType = 2;
                  break;
              }

              break;
          }

          break;
        }
    } // // Clear content
    // t.content.children.forEach(child => {
    //     child.removeFromParent();
    //     if (child.isValid)
    //         child.destroy();
    // });


    t.content.removeAllChildren();
    t._inited = true;
  },

  /**
   * In order to implement a circular list, some functions of cc.ScrollView must be overridden
   * @param {Number} dt
   */
  _processAutoScrolling: function _processAutoScrolling(dt) {
    // let isAutoScrollBrake = this._scrollView._isNecessaryAutoScrollBrake();
    var brakingFactor = 1;
    this._scrollView._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
    var percentage = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);

    if (this._scrollView._autoScrollAttenuate) {
      var time = percentage - 1;
      percentage = time * time * time * time * time + 1;
    }

    var newPosition = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(percentage));

    var EPSILON = this._scrollView.getScrollEndedEventTiming();

    var reachedEnd = Math.abs(percentage - 1) <= EPSILON; // cc.log(reachedEnd, Math.abs(percentage - 1), EPSILON)

    var fireEvent = Math.abs(percentage - 1) <= this._scrollView.getScrollEndedEventTiming();

    if (fireEvent && !this._scrollView._isScrollEndedWithThresholdEventFired) {
      this._scrollView._dispatchEvent('scroll-ended-with-threshold');

      this._scrollView._isScrollEndedWithThresholdEventFired = true;
    } // if (this._scrollView.elastic && !reachedEnd) {
    //     let brakeOffsetPosition = newPosition.sub(this._scrollView._autoScrollBrakingStartPosition);
    //     if (isAutoScrollBrake) {
    //         brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor);
    //     }
    //     newPosition = this._scrollView._autoScrollBrakingStartPosition.add(brakeOffsetPosition);
    // } else {
    //     let moveDelta = newPosition.sub(this._scrollView.getContentPosition());
    //     let outOfBoundary = this._scrollView._getHowMuchOutOfBoundary(moveDelta);
    //     if (!outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
    //         newPosition = newPosition.add(outOfBoundary);
    //         reachedEnd = true;
    //     }
    // }


    if (reachedEnd) {
      this._scrollView._autoScrolling = false;
    }

    var deltaMove = newPosition.sub(this._scrollView.getContentPosition()); // cc.log(deltaMove)

    this._scrollView._moveContent(this._scrollView._clampDelta(deltaMove), reachedEnd);

    this._scrollView._dispatchEvent('scrolling'); // scollTo API controll move


    if (!this._scrollView._autoScrolling) {
      this._scrollView._isBouncing = false;
      this._scrollView._scrolling = false;

      this._scrollView._dispatchEvent('scroll-ended');
    }
  },
  //Set template Item
  setTemplateItem: function setTemplateItem(item) {
    if (!item) return;
    var t = this;
    t._itemTmp = item;
    if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN) t._itemSize = t._layout.cellSize;else t._itemSize = new cc.size(item.width, item.height); //Get ListItem, or deselect mode if not

    var com = item.getComponent(item.name);
    var remove = false;
    if (!com) remove = true; // if (com) {
    //     if (!com._btnCom && !item.getComponent(cc.Button)) {
    //         remove = true;
    //     }
    // }

    if (remove) {
      t.selectedMode = SelectedType.NONE;
    }

    com = item.getComponent(cc.Widget);

    if (com && com.enabled) {
      t._needUpdateWidget = true;
    }

    if (t.selectedMode == SelectedType.MULT) t.multSelected = [];

    switch (t._align) {
      case cc.Layout.Type.HORIZONTAL:
        t._colLineNum = 1;
        t._sizeType = false;
        break;

      case cc.Layout.Type.VERTICAL:
        t._colLineNum = 1;
        t._sizeType = true;
        break;

      case cc.Layout.Type.GRID:
        switch (t._startAxis) {
          case cc.Layout.AxisDirection.HORIZONTAL:
            //计算列数
            var trimW = t.content.width - t._leftGap - t._rightGap;
            t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
            t._sizeType = true;
            break;

          case cc.Layout.AxisDirection.VERTICAL:
            //计算行数
            var trimH = t.content.height - t._topGap - t._bottomGap;
            t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
            t._sizeType = false;
            break;
        }

        break;
    }
  },

  /**
   * Check if initialized
   * @param {Boolean} printLog Whether to print error messages
   * @returns
   */
  checkInited: function checkInited(printLog) {
    printLog = printLog == null ? true : printLog;

    if (!this._inited) {
      if (printLog) {
        cc.error('List initialization not completed!');
      }

      return false;
    }

    return true;
  },
  //Disable Layout component and calculate Content size by yourself
  _resizeContent: function _resizeContent() {
    var t = this;
    var result;

    switch (t._align) {
      case cc.Layout.Type.HORIZONTAL:
        {
          if (t._customSize) {
            var fixed = t._getFixedSize();

            result = t._leftGap + fixed.val + t._itemSize.width * (t._numItems - fixed.count) + t._columnGap * (t._numItems - 1) + t._rightGap;
          } else {
            result = t._leftGap + t._itemSize.width * t._numItems + t._columnGap * (t._numItems - 1) + t._rightGap;
          }

          break;
        }

      case cc.Layout.Type.VERTICAL:
        {
          if (t._customSize) {
            var _fixed = t._getFixedSize();

            result = t._topGap + _fixed.val + t._itemSize.height * (t._numItems - _fixed.count) + t._lineGap * (t._numItems - 1) + t._bottomGap;
          } else {
            result = t._topGap + t._itemSize.height * t._numItems + t._lineGap * (t._numItems - 1) + t._bottomGap;
          }

          break;
        }

      case cc.Layout.Type.GRID:
        {
          //Grid mode does not support centering
          if (t.lackCenter) t.lackCenter = false;

          switch (t._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              var lineNum = Math.ceil(t._numItems / t._colLineNum);
              result = t._topGap + t._itemSize.height * lineNum + t._lineGap * (lineNum - 1) + t._bottomGap;
              break;

            case cc.Layout.AxisDirection.VERTICAL:
              var colNum = Math.ceil(t._numItems / t._colLineNum);
              result = t._leftGap + t._itemSize.width * colNum + t._columnGap * (colNum - 1) + t._rightGap;
              break;
          }

          break;
        }
    }

    var layout = t.content.getComponent(cc.Layout);
    if (layout) layout.enabled = false;
    t._allItemSize = result;
    t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? t._topGap + t._bottomGap : t._leftGap + t._rightGap);

    if (t.cyclic) {
      var totalSize = t._sizeType ? t.node.height : t.node.width;
      t._cyclicPos1 = 0;
      totalSize -= t._cyclicPos1;
      t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
      var spacing = t._sizeType ? t._lineGap : t._columnGap;
      t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
      t._cyclicAllItemSize = t._allItemSize + t._allItemSizeNoEdge * (t._cyclicNum - 1) + spacing * (t._cyclicNum - 1);
      t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
      t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1); // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
    }

    t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
    var slideOffset = (!t._lack || !t.lackCenter) && t.lackSlide ? 0 : .1;
    var targetWH = t._lack ? (t._sizeType ? t.node.height : t.node.width) - slideOffset : t.cyclic ? t._cyclicAllItemSize : t._allItemSize;
    if (targetWH < 0) targetWH = 0;

    if (t._sizeType) {
      t.content.height = targetWH;
    } else {
      t.content.width = targetWH;
    } // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);

  },
  //While scrolling ...
  _onScrolling: function _onScrolling(ev) {
    if (this.frameCount == null) this.frameCount = this._updateRate;

    if (!this._forceUpdate && ev && ev.type != 'scroll-ended' && this.frameCount > 0) {
      this.frameCount--;
      return;
    } else this.frameCount = this._updateRate;

    if (this._aniDelRuning) return; //循环列表处理

    if (this.cyclic) {
      var scrollPos = this.content.getPosition();
      scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
      var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
      var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);

      switch (this._alignCalcType) {
        case 1:
          //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
          if (scrollPos > -this._cyclicPos1) {
            this.content.x = -this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            } // if (this._beganPos) {
            //     this._beganPos += add;
            // }

          } else if (scrollPos < -this._cyclicPos2) {
            this.content.x = -this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            } // if (this._beganPos) {
            //     this._beganPos -= add;
            // }

          }

          break;

        case 2:
          //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
          if (scrollPos < this._cyclicPos1) {
            this.content.x = this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            }
          } else if (scrollPos > this._cyclicPos2) {
            this.content.x = this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            }
          }

          break;

        case 3:
          //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
          if (scrollPos < this._cyclicPos1) {
            this.content.y = this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            }
          } else if (scrollPos > this._cyclicPos2) {
            this.content.y = this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            }
          }

          break;

        case 4:
          //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
          if (scrollPos > -this._cyclicPos1) {
            this.content.y = -this._cyclicPos2;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(add);
            }
          } else if (scrollPos < -this._cyclicPos2) {
            this.content.y = -this._cyclicPos1;

            if (this._scrollView.isAutoScrolling()) {
              this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(add);
            }
          }

          break;
      }
    }

    this._calcViewPos();

    var vTop, vRight, vBottom, vLeft;

    if (this._sizeType) {
      vTop = this.viewTop;
      vBottom = this.viewBottom;
    } else {
      vRight = this.viewRight;
      vLeft = this.viewLeft;
    }

    if (this._virtual) {
      this.displayData = [];
      var itemPos;
      var curId = 0;
      var endId = this._numItems - 1;

      if (this._customSize) {
        var breakFor = false; //If the item's position is within the visible area, push it in displayData

        for (; curId <= endId && !breakFor; curId++) {
          itemPos = this._calcItemPos(curId);

          switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
              if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                this.displayData.push(itemPos);
              } else if (curId != 0 && this.displayData.length > 0) {
                breakFor = true;
              }

              break;

            case cc.Layout.Type.VERTICAL:
              if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                this.displayData.push(itemPos);
              } else if (curId != 0 && this.displayData.length > 0) {
                breakFor = true;
              }

              break;

            case cc.Layout.Type.GRID:
              switch (this._startAxis) {
                case cc.Layout.AxisDirection.HORIZONTAL:
                  if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                    this.displayData.push(itemPos);
                  } else if (curId != 0 && this.displayData.length > 0) {
                    breakFor = true;
                  }

                  break;

                case cc.Layout.AxisDirection.VERTICAL:
                  if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                    this.displayData.push(itemPos);
                  } else if (curId != 0 && this.displayData.length > 0) {
                    breakFor = true;
                  }

                  break;
              }

              break;
          }
        }
      } else {
        var ww = this._itemSize.width + this._columnGap;
        var hh = this._itemSize.height + this._lineGap;

        switch (this._alignCalcType) {
          case 1:
            //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
            curId = (vLeft + this._leftGap) / ww;
            endId = (vRight + this._rightGap) / ww;
            break;

          case 2:
            //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
            curId = (-vRight - this._rightGap) / ww;
            endId = (-vLeft - this._leftGap) / ww;
            break;

          case 3:
            //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
            curId = (-vTop - this._topGap) / hh;
            endId = (-vBottom - this._bottomGap) / hh;
            break;

          case 4:
            //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
            curId = (vBottom + this._bottomGap) / hh;
            endId = (vTop + this._topGap) / hh;
            break;
        }

        curId = Math.floor(curId) * this._colLineNum;
        endId = Math.ceil(endId) * this._colLineNum;
        endId--;
        if (curId < 0) curId = 0;
        if (endId >= this._numItems) endId = this._numItems - 1; // cc.log(curId, endId);

        for (; curId <= endId; curId++) {
          this.displayData.push(this._calcItemPos(curId));
        }
      }

      this._delRedundantItem();

      if (this.displayData.length <= 0 || !this._numItems) {
        //if none, delete all.
        this._lastDisplayData = [];
        return;
      }

      this.firstListId = this.displayData[0].id;
      this.displayItemNum = this.displayData.length;
      var len = this._lastDisplayData.length;
      var haveDataChange = this.displayItemNum != len;

      if (haveDataChange) {
        // 如果是逐帧渲染，需要排序
        if (this.frameByFrameRenderNum > 0) {
          this._lastDisplayData.sort(function (a, b) {
            return a - b;
          });
        } // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。


        haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
      }

      if (this._forceUpdate || haveDataChange) {
        //如果是强制更新
        if (this.frameByFrameRenderNum > 0) {
          // if (this._updateDone) {
          // this._lastDisplayData = [];
          //逐帧渲染
          if (this._numItems > 0) {
            if (!this._updateDone) {
              this._doneAfterUpdate = true;
            } else {
              this._updateCounter = 0;
            }

            this._updateDone = false;
          } else {
            this._updateCounter = 0;
            this._updateDone = true;
          } // }

        } else {
          //直接渲染
          this._lastDisplayData = []; // cc.log('List Display Data II::', this.displayData);

          for (var c = 0; c < this.displayItemNum; c++) {
            this._createOrUpdateItem(this.displayData[c]);
          }

          this._forceUpdate = false;
        }
      }

      this._calcNearestItem();
    }
  },
  //Calculate View Position
  _calcViewPos: function _calcViewPos() {
    var scrollPos = this.content.getPosition();

    switch (this._alignCalcType) {
      case 1:
        //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
        this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
        this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
        this.viewRight = this.viewLeft + this.node.width;
        this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
        this.viewRight += this.elasticRight; // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);

        break;

      case 2:
        //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
        this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
        this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
        this.viewLeft = this.viewRight - this.node.width;
        this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
        this.viewLeft -= this.elasticLeft; // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);

        break;

      case 3:
        //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
        this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
        this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
        this.viewBottom = this.viewTop - this.node.height;
        this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
        this.viewBottom += this.elasticBottom; // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);

        break;

      case 4:
        //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
        this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
        this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
        this.viewTop = this.viewBottom + this.node.height;
        this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
        this.viewTop -= this.elasticTop; // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);

        break;
    }
  },
  getItemHeight: function getItemHeight(id) {},
  //Calculate location based on id
  _calcItemPos: function _calcItemPos(id) {
    var width, height, top, bottom, left, right, itemX, itemY;

    switch (this._align) {
      case cc.Layout.Type.HORIZONTAL:
        switch (this._horizontalDir) {
          case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
            {
              if (this._customSize) {
                var fixed = this._getFixedSize(id);

                left = this._leftGap + (this._itemSize.width + this._columnGap) * (id - fixed.count) + (fixed.val + this._columnGap * fixed.count);
                var cs = this._customSize[id];
                width = cs > 0 ? cs : this._itemSize.width;
              } else {
                left = this._leftGap + (this._itemSize.width + this._columnGap) * id;
                width = this._itemSize.width;
              }

              right = left + width;

              if (this.lackCenter) {
                var offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;
                left += offset;
                right += offset;
              }

              return {
                id: id,
                left: left,
                right: right,
                x: left + this._itemTmp.anchorX * width,
                y: this._itemTmp.y
              };
            }

          case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
            {
              if (this._customSize) {
                var _fixed2 = this._getFixedSize(id);

                right = -this._rightGap - (this._itemSize.width + this._columnGap) * (id - _fixed2.count) - (_fixed2.val + this._columnGap * _fixed2.count);
                var _cs = this._customSize[id];
                width = _cs > 0 ? _cs : this._itemSize.width;
              } else {
                right = -this._rightGap - (this._itemSize.width + this._columnGap) * id;
                width = this._itemSize.width;
              }

              left = right - width;

              if (this.lackCenter) {
                var _offset = this.content.width / 2 - this._allItemSizeNoEdge / 2;

                left -= _offset;
                right -= _offset;
              }

              return {
                id: id,
                right: right,
                left: left,
                x: left + this._itemTmp.anchorX * width,
                y: this._itemTmp.y
              };
            }
        }

        break;

      case cc.Layout.Type.VERTICAL:
        {
          switch (this._verticalDir) {
            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
              {
                if (this._customSize) {
                  var _fixed3 = this._getFixedSize(id);

                  top = -this._topGap - (this._itemSize.height + this._lineGap) * (id - _fixed3.count) - (_fixed3.val + this._lineGap * _fixed3.count);
                  var _cs2 = this._customSize[id];
                  height = _cs2 > 0 ? _cs2 : this._itemSize.height;
                  bottom = top - height;
                } else {
                  top = -this._topGap - (this._itemSize.height + this._lineGap) * id;
                  height = this._itemSize.height;
                }

                bottom = top - height;

                if (this.lackCenter) {
                  var _offset2 = this.content.height / 2 - this._allItemSizeNoEdge / 2;

                  top -= _offset2;
                  bottom -= _offset2;
                }

                return {
                  id: id,
                  top: top,
                  bottom: bottom,
                  x: this._itemTmp.x,
                  y: bottom + this._itemTmp.anchorY * height
                };
              }

            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
              {
                if (this._customSize) {
                  var _fixed4 = this._getFixedSize(id);

                  bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * (id - _fixed4.count) + (_fixed4.val + this._lineGap * _fixed4.count);
                  var _cs3 = this._customSize[id];
                  height = _cs3 > 0 ? _cs3 : this._itemSize.height;
                } else {
                  bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * id;
                  height = this._itemSize.height;
                }

                top = bottom + height;

                if (this.lackCenter) {
                  var _offset3 = this.content.height / 2 - this._allItemSizeNoEdge / 2;

                  top += _offset3;
                  bottom += _offset3;
                }

                return {
                  id: id,
                  top: top,
                  bottom: bottom,
                  x: this._itemTmp.x,
                  y: bottom + this._itemTmp.anchorY * height
                };
                break;
              }
          }
        }

      case cc.Layout.Type.GRID:
        {
          var colLine = Math.floor(id / this._colLineNum);

          switch (this._startAxis) {
            case cc.Layout.AxisDirection.HORIZONTAL:
              {
                switch (this._verticalDir) {
                  case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                    {
                      top = -this._topGap - (this._itemSize.height + this._lineGap) * colLine;
                      bottom = top - this._itemSize.height;
                      itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
                      break;
                    }

                  case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                    {
                      bottom = this._bottomGap + (this._itemSize.height + this._lineGap) * colLine;
                      top = bottom + this._itemSize.height;
                      itemY = bottom + this._itemTmp.anchorY * this._itemSize.height;
                      break;
                    }
                }

                itemX = this._leftGap + id % this._colLineNum * (this._itemSize.width + this._columnGap);

                switch (this._horizontalDir) {
                  case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    {
                      itemX += this._itemTmp.anchorX * this._itemSize.width;
                      itemX -= this.content.anchorX * this.content.width;
                      break;
                    }

                  case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    {
                      itemX += (1 - this._itemTmp.anchorX) * this._itemSize.width;
                      itemX -= (1 - this.content.anchorX) * this.content.width;
                      itemX *= -1;
                      break;
                    }
                }

                return {
                  id: id,
                  top: top,
                  bottom: bottom,
                  x: itemX,
                  y: itemY
                };
              }

            case cc.Layout.AxisDirection.VERTICAL:
              {
                switch (this._horizontalDir) {
                  case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                    {
                      left = this._leftGap + (this._itemSize.width + this._columnGap) * colLine;
                      right = left + this._itemSize.width;
                      itemX = left + this._itemTmp.anchorX * this._itemSize.width;
                      itemX -= this.content.anchorX * this.content.width;
                      break;
                    }

                  case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                    {
                      right = -this._rightGap - (this._itemSize.width + this._columnGap) * colLine;
                      left = right - this._itemSize.width;
                      itemX = left + this._itemTmp.anchorX * this._itemSize.width;
                      itemX += (1 - this.content.anchorX) * this.content.width;
                      break;
                    }
                }

                itemY = -this._topGap - id % this._colLineNum * (this._itemSize.height + this._lineGap);

                switch (this._verticalDir) {
                  case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                    {
                      itemY -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
                      itemY += (1 - this.content.anchorY) * this.content.height;
                      break;
                    }

                  case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                    {
                      itemY -= this._itemTmp.anchorY * this._itemSize.height;
                      itemY += this.content.anchorY * this.content.height;
                      itemY *= -1;
                      break;
                    }
                }

                return {
                  id: id,
                  left: left,
                  right: right,
                  x: itemX,
                  y: itemY
                };
              }
          }

          break;
        }
    }
  },
  //Calculate the position of an existing item
  _calcExistItemPos: function _calcExistItemPos(id) {
    var item = this.getItemByListId(id);
    if (!item) return null;
    var data = {
      id: id,
      x: item.x,
      y: item.y
    };

    if (this._sizeType) {
      data.top = item.y + item.height * (1 - item.anchorY);
      data.bottom = item.y - item.height * item.anchorY;
    } else {
      data.left = item.x - item.width * item.anchorX;
      data.right = item.x + item.width * (1 - item.anchorX);
    }

    return data;
  },
  //Get Item Position
  getItemPos: function getItemPos(id) {
    if (this._virtual) return this._calcItemPos(id);else {
      if (this.frameByFrameRenderNum) return this._calcItemPos(id);else return this._calcExistItemPos(id);
    }
  },
  //Get fixed size
  _getFixedSize: function _getFixedSize(listId) {
    if (!this._customSize) return null;
    if (listId == null) listId = this._numItems;
    var fixed = 0;
    var count = 0;

    for (var id in this._customSize) {
      if (parseInt(id) < listId) {
        fixed += this._customSize[id];
        count++;
      }
    }

    return {
      val: fixed,
      count: count
    };
  },
  //When scrolling starts:
  _onScrollBegan: function _onScrollBegan() {
    this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
  },
  //When scrolling ends:
  _onScrollEnded: function _onScrollEnded() {
    var t = this;

    if (t.scrollToListId != null) {
      var item = t.getItemByListId(t.scrollToListId);
      t.scrollToListId = null;

      if (item) {
        item.runAction(new cc.sequence(new cc.scaleTo(.1, 1.06), new cc.scaleTo(.1, 1)));
      }
    }

    t._onScrolling();

    if (t._slideMode == SlideType.ADHERING && !t.adhering) {
      //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
      t.adhere();
    } else if (t._slideMode == SlideType.PAGE) {
      if (t._beganPos != null) {
        this._pageAdhere();
      } else {
        t.adhere();
      }
    }
  },
  // When touched
  _onTouchStart: function _onTouchStart(ev, captureListeners) {
    if (this._scrollView._hasNestedViewGroup(ev, captureListeners)) return;
    var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;

    if (!isMe) {
      var itemNode = ev.target;

      while (itemNode._listId == null && itemNode.parent) {
        itemNode = itemNode.parent;
      }

      this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
    }
  },
  //When touched:
  _onTouchUp: function _onTouchUp() {
    var t = this;
    t._scrollPos = null;

    if (t._slideMode == SlideType.ADHERING) {
      if (t.adhering) t._adheringBarrier = true;
      t.adhere();
    } else if (t._slideMode == SlideType.PAGE) {
      if (t._beganPos != null) {
        t._pageAdhere();
      } else {
        t.adhere();
      }
    }

    this._scrollItem = null;
  },
  _onTouchCancelled: function _onTouchCancelled(ev, captureListeners) {
    var t = this;
    if (t._scrollView._hasNestedViewGroup(ev, captureListeners) || ev.simulate) return;
    t._scrollPos = null;

    if (t._slideMode == SlideType.ADHERING) {
      if (t.adhering) t._adheringBarrier = true;
      t.adhere();
    } else if (t._slideMode == SlideType.PAGE) {
      if (t._beganPos != null) {
        t._pageAdhere();
      } else {
        t.adhere();
      }
    }

    this._scrollItem = null;
  },
  // When the size changes
  _onSizeChanged: function _onSizeChanged() {
    if (this.checkInited(false)) this._onScrolling();
  },
  //When Item is adaptive
  _onItemAdaptive: function _onItemAdaptive(item) {
    // if (this.checkInited(false)) {
    if (!this._sizeType && item.width != this._itemSize.width || this._sizeType && item.height != this._itemSize.height) {
      if (!this._customSize) this._customSize = {};
      var val = this._sizeType ? item.height : item.width;

      if (this._customSize[item._listId] != val) {
        this._customSize[item._listId] = val;

        this._resizeContent(); // this.content.children.forEach(child => {
        //     this._updateItemPos(child);
        // });


        this.updateAll(); // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正

        if (this._scrollToListId != null) {
          this._scrollPos = null;
          this.unschedule(this._scrollToSo);
          this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1000));
        }
      }
    } // }

  },
  //PAGE config
  _pageAdhere: function _pageAdhere() {
    var t = this;
    if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) return;
    var curPos = t._sizeType ? t.viewTop : t.viewLeft;
    var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
    var canSkip = Math.abs(t._beganPos - curPos) > dis;

    if (canSkip) {
      var timeInSecond = .5;

      switch (t._alignCalcType) {
        case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）

        case 4:
          //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
          if (t._beganPos > curPos) {
            t.prePage(timeInSecond); // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
          } else {
            t.nextPage(timeInSecond); // cc.log('_pageAdhere   NNNNNNNNNNNNNNN')
          }

          break;

        case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）

        case 3:
          //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
          if (t._beganPos < curPos) {
            t.prePage(timeInSecond);
          } else {
            t.nextPage(timeInSecond);
          }

          break;
      }
    } else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
      t.adhere();
    }

    t._beganPos = null;
  },
  //config
  adhere: function adhere() {
    var t = this;
    if (!t.checkInited()) return;
    if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0) return;
    t.adhering = true; // if (!t._virtual)

    t._calcNearestItem();

    var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
    var timeInSecond = .7;
    t.scrollTo(t.nearestListId, timeInSecond, offset);
  },
  //Update..
  update: function update() {
    if (this.frameByFrameRenderNum <= 0 || this._updateDone) return; // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);

    if (this._virtual) {
      var len = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum;

      for (var n = this._updateCounter; n < len; n++) {
        var data = this.displayData[n];

        if (data) {
          // cc.log(data.id);
          this._createOrUpdateItem(data);
        }
      }

      if (this._updateCounter >= this.displayItemNum - 1) {
        //最后一个
        if (this._doneAfterUpdate) {
          this._updateCounter = 0;
          this._updateDone = false; // if (!this._scrollView.isScrolling())

          this._doneAfterUpdate = false;
        } else {
          this._updateDone = true;

          this._delRedundantItem();

          this._forceUpdate = false;

          this._calcNearestItem();

          if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestListId;
        }
      } else {
        this._updateCounter += this.frameByFrameRenderNum;
      }
    } else {
      if (this._updateCounter < this._numItems) {
        var _len = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum;

        for (var _n2 = this._updateCounter; _n2 < _len; _n2++) {
          this._createOrUpdateItem2(_n2);
        }

        this._updateCounter += this.frameByFrameRenderNum;
      } else {
        this._updateDone = true;

        this._calcNearestItem();

        if (this.slideMode == SlideType.PAGE) this.curPageNum = this.nearestListId;
      }
    }
  },

  /**
   * Create or update Item (for virtual list)
   * @param {Object} data
   */
  _createOrUpdateItem: function _createOrUpdateItem(data) {
    var item = this.getItemByListId(data.id);

    if (!item) {
      //If not present
      var canGet = this._pool.size() > 0;

      if (canGet) {
        item = this._pool.get(); // cc.log('Remove from the pool :: old id = ', item._listId,', new id = ', data.id, item);
      } else {
        item = cc.instantiate(this._itemTmp); // cc.log('New ::', data.id, item);
      }

      if (item._listId != data.id) {
        item._listId = data.id;
        item.setContentSize(this._itemSize);
      }

      item.setPosition(new cc.v2(data.x, data.y));

      this._resetItemSize(item);

      this.content.addChild(item);

      if (canGet && this._needUpdateWidget) {
        var widget = item.getComponent(cc.Widget);
        if (widget) widget.updateAlignment();
      }

      item.setSiblingIndex(this.content.childrenCount - 1);
      var listItem = item.getComponent(item.name);
      item.listItem = listItem;

      if (listItem) {
        listItem._list = this;

        listItem._registerEvent();
      }

      if (this.renderEvent) {
        cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
      }
    } else if (this._forceUpdate && this.renderEvent) {
      //Force update
      item.setPosition(new cc.v2(data.x, data.y));

      this._resetItemSize(item); // cc.log('ADD::', data.id);


      if (this.renderEvent) {
        cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
      }
    }

    this._resetItemSize(item);

    this._updateListItem(item.listItem);

    if (this._lastDisplayData.indexOf(data.id) < 0) {
      this._lastDisplayData.push(data.id);
    }
  },
  //Create or update Item (for non-virtual lists)
  _createOrUpdateItem2: function _createOrUpdateItem2(listId) {
    var item = this.content.children[listId];

    if (!item) {
      //If not present
      item = cc.instantiate(this._itemTmp);
      item._listId = listId;
      this.content.addChild(item);
      var listItem = item.getComponent(ListItem);
      item.listItem = listItem;

      if (listItem) {
        listItem._list = this;

        listItem._registerEvent();
      }

      if (this.renderEvent) {
        cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
      }
    } else if (this._forceUpdate && this.renderEvent) {
      //Force update
      item._listId = listId;

      if (this.renderEvent) {
        cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
      }
    }

    this._updateListItem(item.listItem);

    if (this._lastDisplayData.indexOf(listId) < 0) {
      this._lastDisplayData.push(listId);
    }
  },
  _updateListItem: function _updateListItem(listItem) {
    if (!listItem) return;

    if (this.selectedMode > SelectedType.NONE) {
      switch (this.selectedMode) {
        case SelectedType.SINGLE:
          listItem.selected = this.selectedId == listItem.node._listId;
          break;

        case SelectedType.MULT:
          listItem.selected = this.multSelected.indexOf(listItem.node._listId) >= 0;
          break;
      }
    }
  },
  //For virtual lists only
  _resetItemSize: function _resetItemSize(item) {
    // return;
    var size;

    if (this._customSize && this._customSize[item._listId]) {
      size = this._customSize[item._listId];
    } else {
      if (this._colLineNum > 1) item.setContentSize(this._itemSize);else size = this._sizeType ? this._itemSize.height : this._itemSize.width;
    }

    if (size) {
      if (this._sizeType) item.height = size;else item.width = size;
    }
  },

  /**
   * Update Item Position
   * @param {Number||Node} listIdOrItem
   */
  _updateItemPos: function _updateItemPos(listIdOrItem) {
    var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
    var pos = this.getItemPos(item._listId);
    item.setPosition(pos.x, pos.y);
  },

  /**
   * Set multiple selection
   * @param {Array} args can be a single listId or an array of listIds
   * @param {Boolean} bool value, if null, directly overwrite with args
   */
  setMultSelected: function setMultSelected(args, bool) {
    var t = this;
    if (!t.checkInited()) return;

    if (!Array.isArray(args)) {
      args = [args];
    }

    if (bool == null) {
      t.multSelected = args;
    } else {
      var listId, sub;

      if (bool) {
        for (var n = args.length - 1; n >= 0; n--) {
          listId = args[n];
          sub = t.multSelected.indexOf(listId);

          if (sub < 0) {
            t.multSelected.push(listId);
          }
        }
      } else {
        for (var _n3 = args.length - 1; _n3 >= 0; _n3--) {
          listId = args[_n3];
          sub = t.multSelected.indexOf(listId);

          if (sub >= 0) {
            t.multSelected.splice(sub, 1);
          }
        }
      }
    }

    t._forceUpdate = true;

    t._onScrolling();
  },

  /**
   * Update the specified Item
   * @param {Array} args single listId, or array
   * @returns
   */
  updateItem: function updateItem(args) {
    if (!this.checkInited()) return;

    if (!Array.isArray(args)) {
      args = [args];
    }

    for (var n = 0, len = args.length; n < len; n++) {
      var listId = args[n];
      var item = this.getItemByListId(listId);

      if (item) {
        cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
      }
    }
  },

  /**
   * Update all
   */
  updateAll: function updateAll() {
    if (!this.checkInited()) return;
    this.numItems = this.numItems;
  },

  /**
   * Get Item by ListID
   * @param {Number} listId
   * @returns
   */
  getItemByListId: function getItemByListId(listId) {
    for (var n = this.content.childrenCount - 1; n >= 0; n--) {
      if (this.content.children[n]._listId == listId) return this.content.children[n];
    }
  },

  /**
   * Get Item outside the display area
   * @returns
   */
  _getOutsideItem: function _getOutsideItem() {
    var item;
    var result = [];

    for (var n = this.content.childrenCount - 1; n >= 0; n--) {
      item = this.content.children[n];

      if (!this.displayData.find(function (d) {
        return d.id == item._listId;
      })) {
        result.push(item);
      }
    }

    return result;
  },
  //Delete items outside the display area
  _delRedundantItem: function _delRedundantItem() {
    if (this._virtual) {
      var arr = this._getOutsideItem();

      for (var n = arr.length - 1; n >= 0; n--) {
        var item = arr[n]; // 加这一句是为了防止拖动时被卡住...

        if (this._scrollItem && item._listId == this._scrollItem._listId) continue;

        this._pool.put(item);

        for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
          if (this._lastDisplayData[m] == item._listId) {
            this._lastDisplayData.splice(m, 1);

            break;
          }
        }
      } // cc.log('存入::', str, '    pool.length =', this._pool.length);

    } else {
      while (this.content.childrenCount > this._numItems) {
        this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
      }
    }
  },
  //Delete a single Item
  _delSingleItem: function _delSingleItem(item) {
    // cc.log('DEL::', item._listId, item);
    item.removeFromParent();
    if (item.destroy) item.destroy();
    item = null;
  },

  /**
   * Dynamic deletion of Item (this method is only applicable to virtual lists, that is, _virtual = true)
   * Be sure to reset the new numItems in the callback function to refresh, after all, this List is data driven.
   */
  aniDelItem: function aniDelItem(listId, callFunc, aniType) {
    var t = this;
    if (!t.checkInited() || t.cyclic || !t._virtual) return cc.error('This function is not allowed to be called!');
    if (t._aniDelRuning) return cc.warn('Please wait for the current deletion to finish!');
    var item = t.getItemByListId(listId);

    if (!item) {
      callFunc(listId);
      return;
    }

    t._aniDelRuning = true;
    var curLastId = t.displayData[t.displayData.length - 1].id;
    var resetSelectedId = item.listItem.selected;
    item.listItem.showAni(aniType, function () {
      //判断有没有下一个，如果有的话，创建粗来
      var newId;

      if (curLastId < t._numItems - 2) {
        newId = curLastId + 1;
      }

      if (newId != null) {
        var newData = t._calcItemPos(newId);

        t.displayData.push(newData);
        if (t._virtual) t._createOrUpdateItem(newData);else t._createOrUpdateItem2(newId);
      } else t._numItems--;

      if (t.selectedMode == SelectedType.SINGLE) {
        if (resetSelectedId) {
          t._selectedId = -1;
        } else if (t._selectedId - 1 >= 0) {
          t._selectedId--;
        }
      } else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
        var sub = t.multSelected.indexOf(listId); // let tmp;

        if (sub >= 0) {
          t.multSelected.splice(sub, 1);
        } //多选的数据，在其后的全部减一


        for (var n = t.multSelected.length - 1; n >= 0; n--) {
          var id = t.multSelected[n];
          if (id >= listId) t.multSelected[n]--;
        }
      }

      if (t._customSize) {
        if (t._customSize[listId]) delete t._customSize[listId];
        var newCustomSize = {};
        var size;

        for (var _id in t._customSize) {
          size = t._customSize[_id];
          _id = parseInt(_id);
          newCustomSize[_id - (_id >= listId ? 1 : 0)] = size;
        }

        t._customSize = newCustomSize;
      } //后面的Item向前怼的动效


      var sec = .2333;
      var acts, haveCB;

      for (var _n4 = newId != null ? newId : curLastId; _n4 >= listId + 1; _n4--) {
        item = t.getItemByListId(_n4);

        if (item) {
          var posData = t._calcItemPos(_n4 - 1);

          acts = [new cc.moveTo(sec, new cc.v2(posData.x, posData.y))];

          if (_n4 <= listId + 1) {
            haveCB = true;
            acts.push(new cc.CallFunc(function () {
              t._aniDelRuning = false;
              callFunc(listId);
            }));
          }

          if (acts.length > 1) item.runAction(new cc.Sequence(acts));else item.runAction(acts[0]);
        }
      }

      if (!haveCB) {
        t._aniDelRuning = false;
        callFunc(listId);
      }
    }, true);
  },

  /**
   * Scroll to:
   * @param {Number} listId Index (if <0, scroll to the first Item position, if> = _ numItems, scroll to the last Item position)
   * @param {Number} timeInSecond time
   * @param {Number} offset Index target position offset, 0-1
   * @param {Boolean} overStress Whether to emphasize the item after scrolling (this is just an experimental feature)
   */
  scrollTo: function scrollTo(listId, timeInSecond, offset, overStress) {
    var t = this;
    if (!t.checkInited()) return; // t._scrollView.stopAutoScroll();

    if (timeInSecond == null) //默认0.5
      timeInSecond = .5;else if (timeInSecond < 0) timeInSecond = 0;
    if (listId < 0) listId = 0;else if (listId >= t._numItems) listId = t._numItems - 1; // Just in case the layout size has not been updated after setting numItems

    if (!t._virtual && t._layout && t._layout.enabled) t._layout.updateLayout();
    var pos = t.getItemPos(listId);
    var targetX, targetY;

    switch (t._alignCalcType) {
      case 1:
        //Single row HORIZONTAL (LEFT_TO_RIGHT), grid VERTICAL (LEFT_TO_RIGHT)
        targetX = pos.left;
        if (offset != null) targetX -= t.node.width * offset;else targetX -= t._leftGap;
        pos = new cc.v2(targetX, 0);
        break;

      case 2:
        //Single row HORIZONTAL (RIGHT_TO_LEFT), grid VERTICAL (RIGHT_TO_LEFT)
        targetX = pos.right - t.node.width;
        if (offset != null) targetX += t.node.width * offset;else targetX += t._rightGap;
        pos = new cc.v2(targetX + t.content.width, 0);
        break;

      case 3:
        //Single column VERTICAL (TOP_TO_BOTTOM), grid HORIZONTAL (TOP_TO_BOTTOM)
        targetY = pos.top;
        if (offset != null) targetY += t.node.height * offset;else targetY += t._topGap;
        pos = new cc.v2(0, -targetY);
        break;

      case 4:
        //Single column VERTICAL (BOTTOM_TO_TOP), grid HORIZONTAL (BOTTOM_TO_TOP)
        targetY = pos.bottom + t.node.height;
        if (offset != null) targetY -= t.node.height * offset;else targetY -= t._bottomGap;
        pos = new cc.v2(0, -targetY + t.content.height);
        break;
    }

    var viewPos = t.content.getPosition();
    viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
    var comparePos = t._sizeType ? pos.y : pos.x;
    var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5; // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
    // t._scrollView.stopAutoScroll();

    if (runScroll) {
      t._scrollPos = comparePos;
      t._scrollToListId = listId;
      t._scrollToEndTime = new Date().getTime() / 1000 + timeInSecond;

      t._scrollView.scrollToOffset(pos, timeInSecond); // cc.log(listId, t.content.height, t.content.getPosition().y, pos.y);


      t._scrollToSo = t.scheduleOnce(function () {
        if (!t._adheringBarrier) {
          t.adhering = t._adheringBarrier = false;
        }

        t._scrollPos = t._scrollToListId = t._scrollToEndTime = t._scrollToSo = null; //cc.log('2222222222', t._adheringBarrier)

        if (overStress) {
          // t.scrollToListId = listId;
          var item = t.getItemByListId(listId);

          if (item) {
            item.runAction(new cc.sequence(new cc.scaleTo(.1, 1.05), new cc.scaleTo(.1, 1)));
          }
        }
      }, timeInSecond + .1);

      if (timeInSecond <= 0) {
        t._onScrolling();
      }
    }
  },

  /**
   * Calculate the nearest item in the current scroll window
   */
  _calcNearestItem: function _calcNearestItem() {
    var t = this;
    t.nearestListId = null;
    var data, center;
    if (t._virtual) t._calcViewPos();
    var vTop, vRight, vBottom, vLeft;
    vTop = t.viewTop;
    vRight = t.viewRight;
    vBottom = t.viewBottom;
    vLeft = t.viewLeft;
    var breakFor = false;

    for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
      data = this._virtual ? this.displayData[n] : this._calcExistItemPos(n);

      if (data) {
        center = this._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;

        switch (this._alignCalcType) {
          case 1:
            //Single row HORIZONTAL (LEFT_TO_RIGHT), grid VERTICAL (LEFT_TO_RIGHT)
            if (data.right >= vLeft) {
              this.nearestListId = data.id;
              if (vLeft > center) this.nearestListId += this._colLineNum;
              breakFor = true;
            }

            break;

          case 2:
            //Single row HORIZONTAL (RIGHT_TO_LEFT), grid VERTICAL (RIGHT_TO_LEFT)
            if (data.left <= vRight) {
              this.nearestListId = data.id;
              if (vRight < center) this.nearestListId += this._colLineNum;
              breakFor = true;
            }

            break;

          case 3:
            //Single column VERTICAL (TOP_TO_BOTTOM), grid HORIZONTAL (TOP_TO_BOTTOM)
            if (data.bottom <= vTop) {
              this.nearestListId = data.id;
              if (vTop < center) this.nearestListId += this._colLineNum;
              breakFor = true;
            }

            break;

          case 4:
            //Single column VERTICAL (BOTTOM_TO_TOP), grid HORIZONTAL (BOTTOM_TO_TOP)
            if (data.top >= vBottom) {
              this.nearestListId = data.id;
              if (vBottom > center) this.nearestListId += this._colLineNum;
              breakFor = true;
            }

            break;
        }
      }
    } //Judge the last Item. . . (Hey, these judgments are really disgusting.
    // If you judge the previous one, you must judge the last one ...
    // At the beginning, there was only one layout (single-column layout).
    // At that time, the code was only three hundred lines. Later, I wanted to improve it. .
    // This pit is really deep, now this line counts one thousand and five = = ||)


    data = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1);

    if (data && data.id == t._numItems - 1) {
      center = t._sizeType ? (data.top + data.bottom) / 2 : center = (data.left + data.right) / 2;

      switch (t._alignCalcType) {
        case 1:
          //Single row HORIZONTAL (LEFT_TO_RIGHT), grid VERTICAL (LEFT_TO_RIGHT)
          if (vRight > center) t.nearestListId = data.id;
          break;

        case 2:
          //Single row HORIZONTAL (RIGHT_TO_LEFT), grid VERTICAL (RIGHT_TO_LEFT)
          if (vLeft < center) t.nearestListId = data.id;
          break;

        case 3:
          //Single column VERTICAL (TOP_TO_BOTTOM), grid HORIZONTAL (TOP_TO_BOTTOM)
          if (vBottom < center) t.nearestListId = data.id;
          break;

        case 4:
          //Single column VERTICAL (BOTTOM_TO_TOP), grid HORIZONTAL (BOTTOM_TO_TOP)
          if (vTop > center) t.nearestListId = data.id;
          break;
      }
    } // cc.log('t.nearestListId =', t.nearestListId);

  },
  // Previous
  prePage: function prePage(timeInSecond) {
    // cc.log('👈');
    if (!this.checkInited()) return;
    if (timeInSecond == null) timeInSecond = .5;
    this.skipPage(this.curPageNum - 1, timeInSecond);
  },
  //Next
  nextPage: function nextPage(timeInSecond) {
    // cc.log('👉');
    if (!this.checkInited()) return;
    if (timeInSecond == null) timeInSecond = .5;
    this.skipPage(this.curPageNum + 1, timeInSecond);
  },
  //Go to page
  skipPage: function skipPage(pageNum, timeInSecond) {
    var t = this;
    if (!t.checkInited()) return;
    if (t._slideMode != SlideType.PAGE) return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
    if (pageNum < 0 || pageNum >= t._numItems) return;
    if (t.curPageNum == pageNum) return; // cc.log(pageNum);

    t.curPageNum = pageNum;

    if (t.pageChangeEvent) {
      cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
    }

    t.scrollTo(pageNum, timeInSecond);
  },
  // Calculate CustomSize (this function is reserved, in some rare cases, it is still necessary to manually calculate customSize)
  calcCustomSize: function calcCustomSize(numItems) {
    var t = this;
    if (!t.checkInited()) return;
    if (!t._itemTmp) return cc.error('Unset template item!');
    if (!t.renderEvent) return cc.error('Unset Render-Event!');
    t._customSize = {};
    var temp = cc.instantiate(t._itemTmp);
    t.content.addChild(temp);

    for (var n = 0; n < numItems; n++) {
      cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);

      if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
        t._customSize[n] = t._sizeType ? temp.height : temp.width;
      }
    }

    if (!Object.keys(t._customSize).length) t._customSize = null;
    temp.removeFromParent();
    if (temp.destroy) temp.destroy();
    return t._customSize;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL0xpc3R2aWV3LmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVHlwZSIsImNjIiwiRW51bSIsIlNsaWRlVHlwZSIsIlNlbGVjdGVkVHlwZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwiZWRpdG9yIiwiZGlzYWxsb3dNdWx0aXBsZSIsIm1lbnUiLCJyZXF1aXJlQ29tcG9uZW50IiwiU2Nyb2xsVmlldyIsImV4ZWN1dGlvbk9yZGVyIiwicHJvcGVydGllcyIsInRlbXBsYXRlVHlwZSIsIk5PREUiLCJ0eXBlIiwidG1wTm9kZSIsIk5vZGUiLCJ0b29sdGlwIiwiQ0NfREVWIiwidmlzaWJsZSIsImJvb2wiLCJ0bXBQcmVmYWIiLCJQcmVmYWIiLCJQUkVGQUIiLCJfc2xpZGVNb2RlIiwic2xpZGVNb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwicGFnZURpc3RhbmNlIiwiRmxvYXQiLCJyYW5nZSIsInNsaWRlIiwiUEFHRSIsInBhZ2VDaGFuZ2VFdmVudCIsIkV2ZW50SGFuZGxlciIsIl92aXJ0dWFsIiwidmlydHVhbCIsIl9udW1JdGVtcyIsIl9vblNjcm9sbGluZyIsImN5Y2xpYyIsIk5PUk1BTCIsImxhY2tDZW50ZXIiLCJsYWNrU2xpZGUiLCJfdXBkYXRlUmF0ZSIsInVwZGF0ZVJhdGUiLCJJbnRlZ2VyIiwiZnJhbWVCeUZyYW1lUmVuZGVyTnVtIiwicmVuZGVyRXZlbnQiLCJzZWxlY3RlZE1vZGUiLCJOT05FIiwicmVwZWF0RXZlbnRTaW5nbGUiLCJTSU5HTEUiLCJzZWxlY3RlZEV2ZW50IiwiX3NlbGVjdGVkSWQiLCJzZWxlY3RlZElkIiwidCIsIml0ZW0iLCJnZXRJdGVtQnlMaXN0SWQiLCJfbGFzdFNlbGVjdGVkSWQiLCJsaXN0SXRlbSIsInNlbGVjdGVkIiwibGFzdEl0ZW0iLCJlbWl0RXZlbnRzIiwiX2FjdHVhbE51bUl0ZW1zIiwiTVVMVCIsInN1YiIsIm11bHRTZWxlY3RlZCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwic2VyaWFsaXphYmxlIiwibnVtSXRlbXMiLCJjaGVja0luaXRlZCIsImVycm9yIiwiX2ZvcmNlVXBkYXRlIiwiX3Jlc2l6ZUNvbnRlbnQiLCJfY3ljbGljTnVtIiwiY3VyUGFnZU51bSIsIm5lYXJlc3RMaXN0SWQiLCJsYXlvdXQiLCJjb250ZW50IiwiZ2V0Q29tcG9uZW50IiwiTGF5b3V0IiwiZW5hYmxlZCIsIl9kZWxSZWR1bmRhbnRJdGVtIiwiZmlyc3RMaXN0SWQiLCJsZW4iLCJuIiwiX2NyZWF0ZU9yVXBkYXRlSXRlbTIiLCJfdXBkYXRlQ291bnRlciIsIl91cGRhdGVEb25lIiwiZGlzcGxheUl0ZW1OdW0iLCJvbkxvYWQiLCJfaW5pdCIsIm9uRGVzdHJveSIsIl9pdGVtVG1wIiwiaXNWYWxpZCIsImRlc3Ryb3kiLCJfcG9vbCIsInNpemUiLCJub2RlIiwib25FbmFibGUiLCJfcmVnaXN0ZXJFdmVudCIsIm9uRGlzYWJsZSIsIl91bnJlZ2lzdGVyRXZlbnQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX29uVG91Y2hTdGFydCIsIl9vblRvdWNoVXAiLCJUT1VDSF9DQU5DRUwiLCJfb25Ub3VjaENhbmNlbGxlZCIsIl9vblNjcm9sbEJlZ2FuIiwiX29uU2Nyb2xsRW5kZWQiLCJTSVpFX0NIQU5HRUQiLCJfb25TaXplQ2hhbmdlZCIsIm9mZiIsIl9pbml0ZWQiLCJfc2Nyb2xsVmlldyIsIm5hbWUiLCJfbGF5b3V0IiwiX2FsaWduIiwiX3Jlc2l6ZU1vZGUiLCJyZXNpemVNb2RlIiwiX3N0YXJ0QXhpcyIsInN0YXJ0QXhpcyIsIl90b3BHYXAiLCJwYWRkaW5nVG9wIiwiX3JpZ2h0R2FwIiwicGFkZGluZ1JpZ2h0IiwiX2JvdHRvbUdhcCIsInBhZGRpbmdCb3R0b20iLCJfbGVmdEdhcCIsInBhZGRpbmdMZWZ0IiwiX2NvbHVtbkdhcCIsInNwYWNpbmdYIiwiX2xpbmVHYXAiLCJzcGFjaW5nWSIsIl9jb2xMaW5lTnVtIiwiX3ZlcnRpY2FsRGlyIiwidmVydGljYWxEaXJlY3Rpb24iLCJfaG9yaXpvbnRhbERpciIsImhvcml6b250YWxEaXJlY3Rpb24iLCJzZXRUZW1wbGF0ZUl0ZW0iLCJpbnN0YW50aWF0ZSIsIkFESEVSSU5HIiwiaW5lcnRpYSIsIl9vbk1vdXNlV2hlZWwiLCJfbGFzdERpc3BsYXlEYXRhIiwiZGlzcGxheURhdGEiLCJOb2RlUG9vbCIsIl9wcm9jZXNzQXV0b1Njcm9sbGluZyIsImJpbmQiLCJfc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQiLCJUeXBlIiwiSE9SSVpPTlRBTCIsIkhvcml6b250YWxEaXJlY3Rpb24iLCJMRUZUX1RPX1JJR0hUIiwiX2FsaWduQ2FsY1R5cGUiLCJSSUdIVF9UT19MRUZUIiwiVkVSVElDQUwiLCJWZXJ0aWNhbERpcmVjdGlvbiIsIlRPUF9UT19CT1RUT00iLCJCT1RUT01fVE9fVE9QIiwiR1JJRCIsIkF4aXNEaXJlY3Rpb24iLCJyZW1vdmVBbGxDaGlsZHJlbiIsImR0IiwiYnJha2luZ0ZhY3RvciIsIl9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lIiwicGVyY2VudGFnZSIsIk1hdGgiLCJtaW4iLCJfYXV0b1Njcm9sbFRvdGFsVGltZSIsIl9hdXRvU2Nyb2xsQXR0ZW51YXRlIiwidGltZSIsIm5ld1Bvc2l0aW9uIiwiX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uIiwiYWRkIiwiX2F1dG9TY3JvbGxUYXJnZXREZWx0YSIsIm11bCIsIkVQU0lMT04iLCJnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nIiwicmVhY2hlZEVuZCIsImFicyIsImZpcmVFdmVudCIsIl9pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQiLCJfZGlzcGF0Y2hFdmVudCIsIl9hdXRvU2Nyb2xsaW5nIiwiZGVsdGFNb3ZlIiwiZ2V0Q29udGVudFBvc2l0aW9uIiwiX21vdmVDb250ZW50IiwiX2NsYW1wRGVsdGEiLCJfaXNCb3VuY2luZyIsIl9zY3JvbGxpbmciLCJSZXNpemVNb2RlIiwiQ0hJTERSRU4iLCJfaXRlbVNpemUiLCJjZWxsU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29tIiwicmVtb3ZlIiwiV2lkZ2V0IiwiX25lZWRVcGRhdGVXaWRnZXQiLCJfc2l6ZVR5cGUiLCJ0cmltVyIsImZsb29yIiwidHJpbUgiLCJwcmludExvZyIsInJlc3VsdCIsIl9jdXN0b21TaXplIiwiZml4ZWQiLCJfZ2V0Rml4ZWRTaXplIiwiY291bnQiLCJsaW5lTnVtIiwiY2VpbCIsImNvbE51bSIsIl9hbGxJdGVtU2l6ZSIsIl9hbGxJdGVtU2l6ZU5vRWRnZSIsInRvdGFsU2l6ZSIsIl9jeWNsaWNQb3MxIiwic3BhY2luZyIsIl9jeWNsaWNQb3MyIiwiX2N5Y2xpY0FsbEl0ZW1TaXplIiwiX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlIiwiX2xhY2siLCJzbGlkZU9mZnNldCIsInRhcmdldFdIIiwiZXYiLCJmcmFtZUNvdW50IiwiX2FuaURlbFJ1bmluZyIsInNjcm9sbFBvcyIsImdldFBvc2l0aW9uIiwieSIsIngiLCJhZGRWYWwiLCJ2MiIsImlzQXV0b1Njcm9sbGluZyIsIl9jYWxjVmlld1BvcyIsInZUb3AiLCJ2UmlnaHQiLCJ2Qm90dG9tIiwidkxlZnQiLCJ2aWV3VG9wIiwidmlld0JvdHRvbSIsInZpZXdSaWdodCIsInZpZXdMZWZ0IiwiaXRlbVBvcyIsImN1cklkIiwiZW5kSWQiLCJicmVha0ZvciIsIl9jYWxjSXRlbVBvcyIsInJpZ2h0IiwibGVmdCIsImxlbmd0aCIsImJvdHRvbSIsInRvcCIsInd3IiwiaGgiLCJpZCIsImhhdmVEYXRhQ2hhbmdlIiwic29ydCIsImEiLCJiIiwiX2RvbmVBZnRlclVwZGF0ZSIsImMiLCJfY3JlYXRlT3JVcGRhdGVJdGVtIiwiX2NhbGNOZWFyZXN0SXRlbSIsImVsYXN0aWNMZWZ0IiwiZWxhc3RpY1JpZ2h0IiwiZWxhc3RpY1RvcCIsImVsYXN0aWNCb3R0b20iLCJnZXRJdGVtSGVpZ2h0IiwiaXRlbVgiLCJpdGVtWSIsImNzIiwib2Zmc2V0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJjb2xMaW5lIiwiX2NhbGNFeGlzdEl0ZW1Qb3MiLCJkYXRhIiwiZ2V0SXRlbVBvcyIsImxpc3RJZCIsInBhcnNlSW50IiwiX2JlZ2FuUG9zIiwic2Nyb2xsVG9MaXN0SWQiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInNjYWxlVG8iLCJhZGhlcmluZyIsImFkaGVyZSIsIl9wYWdlQWRoZXJlIiwiY2FwdHVyZUxpc3RlbmVycyIsIl9oYXNOZXN0ZWRWaWV3R3JvdXAiLCJpc01lIiwiZXZlbnRQaGFzZSIsIkV2ZW50IiwiQVRfVEFSR0VUIiwidGFyZ2V0IiwiaXRlbU5vZGUiLCJfbGlzdElkIiwicGFyZW50IiwiX3Njcm9sbEl0ZW0iLCJfc2Nyb2xsUG9zIiwiX2FkaGVyaW5nQmFycmllciIsInNpbXVsYXRlIiwiX29uSXRlbUFkYXB0aXZlIiwidXBkYXRlQWxsIiwiX3Njcm9sbFRvTGlzdElkIiwidW5zY2hlZHVsZSIsIl9zY3JvbGxUb1NvIiwic2Nyb2xsVG8iLCJtYXgiLCJfc2Nyb2xsVG9FbmRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJQb3MiLCJkaXMiLCJjYW5Ta2lwIiwidGltZUluU2Vjb25kIiwicHJlUGFnZSIsIm5leHRQYWdlIiwidXBkYXRlIiwiY2FuR2V0Iiwic2V0Q29udGVudFNpemUiLCJzZXRQb3NpdGlvbiIsIl9yZXNldEl0ZW1TaXplIiwiYWRkQ2hpbGQiLCJ3aWRnZXQiLCJ1cGRhdGVBbGlnbm1lbnQiLCJzZXRTaWJsaW5nSW5kZXgiLCJjaGlsZHJlbkNvdW50IiwiX2xpc3QiLCJfdXBkYXRlTGlzdEl0ZW0iLCJjaGlsZHJlbiIsIkxpc3RJdGVtIiwiX3VwZGF0ZUl0ZW1Qb3MiLCJsaXN0SWRPckl0ZW0iLCJpc05hTiIsInBvcyIsInNldE11bHRTZWxlY3RlZCIsImFyZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJ1cGRhdGVJdGVtIiwiX2dldE91dHNpZGVJdGVtIiwiZmluZCIsImQiLCJhcnIiLCJwdXQiLCJtIiwiX2RlbFNpbmdsZUl0ZW0iLCJyZW1vdmVGcm9tUGFyZW50IiwiYW5pRGVsSXRlbSIsImNhbGxGdW5jIiwiYW5pVHlwZSIsIndhcm4iLCJjdXJMYXN0SWQiLCJyZXNldFNlbGVjdGVkSWQiLCJzaG93QW5pIiwibmV3SWQiLCJuZXdEYXRhIiwibmV3Q3VzdG9tU2l6ZSIsInNlYyIsImFjdHMiLCJoYXZlQ0IiLCJwb3NEYXRhIiwibW92ZVRvIiwiQ2FsbEZ1bmMiLCJTZXF1ZW5jZSIsIm92ZXJTdHJlc3MiLCJ1cGRhdGVMYXlvdXQiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInZpZXdQb3MiLCJjb21wYXJlUG9zIiwicnVuU2Nyb2xsIiwic2Nyb2xsVG9PZmZzZXQiLCJzY2hlZHVsZU9uY2UiLCJjZW50ZXIiLCJza2lwUGFnZSIsInBhZ2VOdW0iLCJjYWxjQ3VzdG9tU2l6ZSIsInRlbXAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDekIsVUFBUSxDQURpQjtBQUV6QixZQUFVO0FBRmUsQ0FBUixDQUFyQjtBQUlBLElBQU1DLFNBQVMsR0FBR0YsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdEIsWUFBVSxDQURZO0FBQ047QUFDaEIsY0FBWSxDQUZVO0FBRU47QUFDaEIsVUFBUSxDQUhjLENBR047O0FBSE0sQ0FBUixDQUFsQjtBQUtBLElBQU1FLFlBQVksR0FBR0gsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDekIsVUFBVSxDQURlO0FBRXpCLFlBQVUsQ0FGZTtBQUVaO0FBQ2IsVUFBVSxDQUhlLENBR1o7O0FBSFksQ0FBUixDQUFyQjtBQU1BRCxFQUFFLENBQUNJLEtBQUgsQ0FBUztBQUNMLGFBQVNKLEVBQUUsQ0FBQ0ssU0FEUDtBQUdMQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsZ0JBQWdCLEVBQUUsS0FEZDtBQUVKQyxJQUFBQSxJQUFJLEVBQUUseUJBRkY7QUFHSkMsSUFBQUEsZ0JBQWdCLEVBQUVULEVBQUUsQ0FBQ1UsVUFIakI7QUFJSjtB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QUFDQSxRQUFJK0IsSUFBSSxDQUFDaFMsT0FBVCxFQUNJZ1MsSUFBSSxDQUFDaFMsT0FBTDtBQUNKLFdBQU8xQyxDQUFDLENBQUM0SixXQUFUO0FBQ0g7QUF4NkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEBhdXRob3Iga0wgPGtsazBAcXEuY29tPlxuICogQGRhdGUgMjAxOS8xLzVcbiAqIEBkb2MgTGlzdCBjb21wb25lbnQuXG4gKiBAZW5kXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuY29uc3QgVGVtcGxhdGVUeXBlID0gY2MuRW51bSh7XG4gICAgJ05PREUnOiAxLFxuICAgICdQUkVGQUInOiAyLFxufSk7XG5jb25zdCBTbGlkZVR5cGUgPSBjYy5FbnVtKHtcbiAgICAnTk9STUFMJzogMSwgICAgLy9Ob3JtYWxcbiAgICAnQURIRVJJTkcnOiAyLCAgLy9TdGlja3kgbW9kZSB0aGF0IHdpbGwgZm9yY2Ugb2ZmIHJvbGxpbmcgaW5lcnRpYVxuICAgICdQQUdFJzogMywgICAgICAvL1BhZ2UgbW9kZSwgd2hpY2ggd2lsbCBmb3JjZSB0aGUgc2Nyb2xsIGluZXJ0aWEgb2ZmXG59KTtcbmNvbnN0IFNlbGVjdGVkVHlwZSA9IGNjLkVudW0oe1xuICAgICdOT05FJyAgOiAwLFxuICAgICdTSU5HTEUnOiAxLCAvL1NpbmdsZSBjaG9pY2VcbiAgICAnTVVMVCcgIDogMiwgLy9NdWx0aXBsZSBjaG9pY2Vcbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIGRpc2FsbG93TXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICBtZW51OiAnQ3VzdG9tIGNvbXBvbmVudCAvIExpc3QnLFxuICAgICAgICByZXF1aXJlQ29tcG9uZW50OiBjYy5TY3JvbGxWaWV3LFxuICAgICAgICAvLyBUaGUgZXhlY3V0aW9uIHByaW9yaXR5IG9mIHRoZSBzY3JpcHQgbGlmZWN5Y2xlIGNhbGxiYWNrLiBTY3JpcHRzIGxlc3MgdGhhbiAwIGFyZSBleGVjdXRlZCBmaXJzdCwgYW5kIHNjcmlwdHMgZ3JlYXRlciB0aGFuIDAgYXJlIGV4ZWN1dGVkIGxhc3QuIFRoaXMgcHJpb3JpdHkgaXMgb25seSB2YWxpZCBmb3Igb25Mb2FkLCBvbkVuYWJsZSwgc3RhcnQsIHVwZGF0ZSBhbmQgbGF0ZVVwZGF0ZSwgYW5kIG5vdCBmb3Igb25EaXNhYmxlIGFuZCBvbkRlc3Ryb3njgIJcbiAgICAgICAgZXhlY3V0aW9uT3JkZXI6IC01MDAwLFxuICAgIH0sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHRlbXBsYXRlVHlwZToge1xuICAgICAgICAgICAgZGVmYXVsdDogVGVtcGxhdGVUeXBlLk5PREUsXG4gICAgICAgICAgICB0eXBlOiBUZW1wbGF0ZVR5cGUsXG4gICAgICAgIH0sXG4gICAgICAgIHRtcE5vZGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdJdGVtIHRlbXBsYXRlLCB0eXBlOiBjYy5Ob2RlJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbCA9IHRoaXMudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5OT0RFO1xuICAgICAgICAgICAgICAgIGlmICghYm9vbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bXBOb2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG1wUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdJdGVtIHRlbXBsYXRlLCB0eXBlOiBjYy5QcmVmYWInLFxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQjtcbiAgICAgICAgICAgICAgICBpZiAoIWJvb2wpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG1wUHJlZmFiID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3NsaWRlTW9kZTogMSxcbiAgICAgICAgc2xpZGVNb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBTbGlkZVR5cGUsXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1NsaWRpbmcgbW9kZScsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2xpZGVNb2RlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2xpZGVNb2RlID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwYWdlRGlzdGFuY2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IC4zLFxuICAgICAgICAgICAgdHlwZTogY2MuRmxvYXQsXG4gICAgICAgICAgICByYW5nZTogWzAsIDEsIC4xXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnUGFnZSB0dXJuaW5nIGRpc3RhbmNlJyxcbiAgICAgICAgICAgIHNsaWRlOiB0cnVlLFxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0U7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwYWdlQ2hhbmdlRXZlbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdQYWdlIGNoYW5nZSBldmVudCcsXG4gICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvb2wgPSB0aGlzLl9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0U7XG4gICAgICAgICAgICAgICAgaWYgKCFib29sKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VFdmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBfdmlydHVhbDogdHJ1ZSxcbiAgICAgICAgdmlydHVhbDoge1xuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdXaGV0aGVyIGl0IGlzIGEgdmlydHVhbCBsaXN0IChkeW5hbWljIGxpc3QpJyxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmlydHVhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92aXJ0dWFsID0gdmFsO1xuICAgICAgICAgICAgICAgIGlmICghQ0NfREVWICYmIHRoaXMuX251bUl0ZW1zICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25TY3JvbGxpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN5Y2xpYzoge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1doZXRoZXIgaXQgaXMgYSBjaXJjdWxhciBsaXN0JyxcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gdGhpcy52aXJ0dWFsICYmIHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5OT1JNQUw7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3ljbGljID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxhY2tDZW50ZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdXaGVuIHRoZSBudW1iZXIgb2YgaXRlbXMgaXMgbm90IGVub3VnaCB0byBmaWxsIHRoZSBDb250ZW50LCB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIGl0ZW1zIGluIHRoZSBjZW50ZXIgKEdyaWQgbGF5b3V0IGlzIG5vdCBzdXBwb3J0ZWQpJyxcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsYWNrU2xpZGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdXaGV0aGVyIHRoZSBudW1iZXIgb2YgaXRlbXMgaXMgc3VmZmljaWVudCB0byBmaWxsIHRoZSBjb250ZW50JyxcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gdGhpcy52aXJ0dWFsICYmICF0aGlzLmxhY2tDZW50ZXI7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFja1NsaWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3VwZGF0ZVJhdGU6IDAsXG4gICAgICAgIHVwZGF0ZVJhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgICAgICAgICByYW5nZTogWzAsIDYsIDFdLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdSZWZyZXNoIGZyZXF1ZW5jeSAodGhlIGxhcmdlciB0aGUgdmFsdWUsIHRoZSBsb3dlciB0aGUgcmVmcmVzaCBmcmVxdWVuY3kgYW5kIHRoZSBoaWdoZXIgdGhlIHBlcmZvcm1hbmNlKScsXG4gICAgICAgICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlUmF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAwICYmIHZhbCA8PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJhdGUgPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmcmFtZUJ5RnJhbWVSZW5kZXJOdW06IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxMiwgMV0sXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1doZW4gcmVuZGVyaW5nIGZyYW1lIGJ5IGZyYW1lLCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHJlbmRlcmVkIHBlciBmcmFtZSAoZnJhbWUgcmVuZGVyaW5nIGlzIHR1cm5lZCBvZmYgd2hlbiA8PSAwKScsXG4gICAgICAgICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyRXZlbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdSZW5kZXJpbmcgZXZlbnQgKHJlbmRlcmVyKScsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkTW9kZToge1xuICAgICAgICAgICAgZGVmYXVsdDogU2VsZWN0ZWRUeXBlLk5PTkUsXG4gICAgICAgICAgICB0eXBlOiBTZWxlY3RlZFR5cGUsXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1NlbGVjdCBtb2RlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVwZWF0RXZlbnRTaW5nbGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdXaGV0aGVyIHRvIHJlcGVhdGVkbHkgcmVzcG9uZCB0byByYWRpbyBldmVudHMnLFxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU0lOR0xFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZEV2ZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnVHJpZ2dlciBzZWxlY3Rpb24gZXZlbnQnLFxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy5zZWxlY3RlZE1vZGUgPiAwO1xuICAgICAgICAgICAgICAgIGlmICghYm9vbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIF9zZWxlY3RlZElkOiAtMSxcbiAgICAgICAgc2VsZWN0ZWRJZDoge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0LnNlbGVjdGVkTW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdC5yZXBlYXRFdmVudFNpbmdsZSAmJiB2YWwgPT0gdC5fc2VsZWN0ZWRJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICghaXRlbSAmJiB2YWwgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5fc2VsZWN0ZWRJZCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgLy9JZiBpdCBpcyBsZXNzIHRoYW4gMCwgY2FuY2VsIHRoZSBzZWxlY3Rpb24uIExlYXZlIF9sYXN0U2VsZWN0ZWRJZCBlbXB0eSwgYW5kIGNoYW5nZSBpdCBpZiB5b3UgaGF2ZSBzcGVjaWFsIG5lZWRzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGlzdEl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX2xhc3RTZWxlY3RlZElkID49IDAgJiYgdC5fbGFzdFNlbGVjdGVkSWQgIT0gdC5fc2VsZWN0ZWRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0SXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuX2xhc3RTZWxlY3RlZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW0ubGlzdEl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zZWxlY3RlZEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2wgPSAhaXRlbS5saXN0SXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubGlzdEl0ZW0uc2VsZWN0ZWQgPSBib29sO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib29sICYmIHN1YiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFib29sICYmIHN1YiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zZWxlY3RlZEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyksIGJvb2wpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBfbnVtSXRlbXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBudW1JdGVtczoge1xuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdHVhbE51bUl0ZW1zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwgfHwgdmFsIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcignbnVtSXRlbXMgc2V0IHRoZSB3cm9uZzo6JywgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0Ll9hY3R1YWxOdW1JdGVtcyA9IHQuX251bUl0ZW1zID0gdmFsO1xuICAgICAgICAgICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh0Ll92aXJ0dWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuX3Jlc2l6ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuY3ljbGljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcyA9IHQuX2N5Y2xpY051bSAqIHQuX251bUl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gJiYgdC5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmN1clBhZ2VOdW0gPSB0Lm5lYXJlc3RMaXN0SWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQuX2RlbFJlZHVuZGFudEl0ZW0oKTtcblxuICAgICAgICAgICAgICAgICAgICB0LmZpcnN0TGlzdElkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9SZW5kZXIgYSBmZXcgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IHQuX251bUl0ZW1zID8gdC5fbnVtSXRlbXMgOiB0LmZyYW1lQnlGcmFtZVJlbmRlck51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgbGVuOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDwgdC5fbnVtSXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlRG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB2YWw7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmRpc3BsYXlJdGVtTnVtID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0Ll9pdGVtVG1wICYmIHQuX2l0ZW1UbXAuaXNWYWxpZClcbiAgICAgICAgICAgIHQuX2l0ZW1UbXAuZGVzdHJveSgpO1xuICAgICAgICBpZiAodC50bXBOb2RlICYmIHQudG1wTm9kZS5pc1ZhbGlkKVxuICAgICAgICAgICAgdC50bXBOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gbGV0IHRvdGFsID0gdC5fcG9vbC5zaXplKCk7XG4gICAgICAgIHdoaWxlICh0Ll9wb29sLnNpemUoKSkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0Ll9wb29sLmdldCgpO1xuICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRvdGFsKVxuICAgICAgICAvLyAgICAgY2MubG9nKCctLS0tLS0tLS0tLS0tLS0tLScgKyB0Lm5vZGUubmFtZSArICc8TGlzdD4gZGVzdHJveSBub2RlIHRvdGFsIG51bS4gPT4nLCB0b3RhbCk7XG4gICAgfSxcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICAvLyBpZiAoIUNDX0VESVRPUilcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudCgpO1xuICAgICAgICB0aGlzLl9pbml0KCk7XG4gICAgfSxcblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgLy8gaWYgKCFDQ19FRElUT1IpXG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJFdmVudCgpO1xuICAgIH0sXG4gICAgLy9SZWdpc3RyYXRpb24gRXZlbnRcbiAgICBfcmVnaXN0ZXJFdmVudCgpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vbigndG91Y2gtdXAnLCB0Ll9vblRvdWNoVXAsIHQsIHRydWUpO1xuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtZW5kZWQnLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xuICAgIH0sXG4gICAgLy9VbnJlZ2lzdGVyIEV2ZW50XG4gICAgX3VucmVnaXN0ZXJFdmVudCgpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xuICAgICAgICB0Lm5vZGUub2ZmKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcbiAgICAgICAgdC5ub2RlLm9mZignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcbiAgICB9LFxuICAgIC8vSW5pdGlhbGl6ZSB2YXJpb3VzOlxuICAgIF9pbml0KCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICh0Ll9pbml0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdC5fc2Nyb2xsVmlldyA9IHQubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG5cbiAgICAgICAgdC5jb250ZW50ID0gdC5fc2Nyb2xsVmlldy5jb250ZW50O1xuICAgICAgICBpZiAoIXQuY29udGVudCkge1xuICAgICAgICAgICAgY2MuZXJyb3IodC5ub2RlLm5hbWUgKyBcIidzIGNjLlNjcm9sbFZpZXcgdW5zZXQgY29udGVudCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0Ll9sYXlvdXQgICAgICAgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XG5cbiAgICAgICAgdC5fYWxpZ24gICAgICAgID0gdC5fbGF5b3V0LnR5cGU7IC8vQXJyYW5nZSBtb2RlXG4gICAgICAgIHQuX3Jlc2l6ZU1vZGUgICA9IHQuX2xheW91dC5yZXNpemVNb2RlOyAvLyBBZGFwdGl2ZSBNb2RlXG4gICAgICAgIHQuX3N0YXJ0QXhpcyAgICA9IHQuX2xheW91dC5zdGFydEF4aXM7XG5cbiAgICAgICAgdC5fdG9wR2FwICAgICAgID0gdC5fbGF5b3V0LnBhZGRpbmdUb3A7ICAgICAgIC8vVG9wIG1hcmdpblxuICAgICAgICB0Ll9yaWdodEdhcCAgICAgPSB0Ll9sYXlvdXQucGFkZGluZ1JpZ2h0OyAgIC8vUmlnaHQgbWFyZ2luXG4gICAgICAgIHQuX2JvdHRvbUdhcCAgICA9IHQuX2xheW91dC5wYWRkaW5nQm90dG9tOyAvL0JvdHRvbSBtYXJnaW5cbiAgICAgICAgdC5fbGVmdEdhcCAgICAgID0gdC5fbGF5b3V0LnBhZGRpbmdMZWZ0OyAgICAgLy9MZWZ0IG1hcmdpblxuXG4gICAgICAgIHQuX2NvbHVtbkdhcCAgICA9IHQuX2xheW91dC5zcGFjaW5nWDsgICAgICAvL0NvbHVtbiBzcGFjaW5nXG4gICAgICAgIHQuX2xpbmVHYXAgICAgICA9IHQuX2xheW91dC5zcGFjaW5nWTsgICAgICAgIC8vTGluZSBzcGFjaW5nXG5cbiAgICAgICAgdC5fY29sTGluZU51bTsgLy9OdW1iZXIgb2YgY29sdW1ucyBvciByb3dzICg9IDEgZm9yIG5vbi1HUklEIG1vZGUsIHdoaWNoIG1lYW5zIHNpbmdsZSBjb2x1bW4gb3Igc2luZ2xlIHJvdyk7XG5cbiAgICAgICAgdC5fdmVydGljYWxEaXIgICA9IHQuX2xheW91dC52ZXJ0aWNhbERpcmVjdGlvbjsgLy9PcmllbnRhdGlvbiBvZiBjaGlsZCBub2RlcyB2ZXJ0aWNhbGx5XG4gICAgICAgIHQuX2hvcml6b250YWxEaXIgPSB0Ll9sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbjsgLy9PcmllbnQgdGhlIGNoaWxkcmVuIGhvcml6b250YWxseVxuXG4gICAgICAgIHQuc2V0VGVtcGxhdGVJdGVtKGNjLmluc3RhbnRpYXRlKHQudGVtcGxhdGVUeXBlID09IFRlbXBsYXRlVHlwZS5QUkVGQUIgPyB0LnRtcFByZWZhYiA6IHQudG1wTm9kZSkpO1xuXG4gICAgICAgIC8vIFNwZWNpZmljIHNsaWRpbmcgbW9kZSBwcm9jZXNzaW5nXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HIHx8IHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5pbmVydGlhID0gZmFsc2U7XG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXQudmlydHVhbCkgICAgICAgICAvLyBsYWNrQ2VudGVyIG9ubHkgc3VwcG9ydHMgVmlydHVhbCBtb2RlXG4gICAgICAgICAgICB0LmxhY2tDZW50ZXIgICAgPSBmYWxzZTtcblxuICAgICAgICB0Ll9sYXN0RGlzcGxheURhdGEgID0gW107Ly9MYXN0IHJlZnJlc2hlZCBkYXRhXG4gICAgICAgIHQuZGlzcGxheURhdGEgICAgICAgPSBbXTsgICAgIC8vQ3VycmVudCBkYXRhXG4gICAgICAgIHQuX3Bvb2wgICAgICAgICAgICAgPSBuZXcgY2MuTm9kZVBvb2woKTsgICAgLy9UaGlzIGlzIGEgcG9vbCAuLi5cbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgICAgICA9IGZhbHNlOyAvL1doZXRoZXIgdG8gZm9yY2UgdXBkYXRlc1xuICAgICAgICB0Ll91cGRhdGVDb3VudGVyICAgID0gMDsgICAvL0ZyYW1lZCBSZW5kZXJpbmcgRnJhbWVzXG4gICAgICAgIHQuX3VwZGF0ZURvbmUgICAgICAgPSB0cnVlOyAgIC8vV2hldGhlciBmcmFtZWQgcmVuZGVyaW5nIGlzIGNvbXBsZXRlXG4gICAgICAgIHQuY3VyUGFnZU51bSAgICAgICAgPSAwOyAgIC8vQ3VycmVudCBwYWdlIG51bWJlclxuXG4gICAgICAgIGlmICh0LmN5Y2xpYykgeyAvLyBJZiBpdCBpcyBhIGxvb3AgbGlzdCwgb3ZlcnJpZGUgc29tZSBjYy5TY3JvbGxWaWV3IGZ1bmN0aW9uc1xuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fcHJvY2Vzc0F1dG9TY3JvbGxpbmcgPSB0aGlzLl9wcm9jZXNzQXV0b1Njcm9sbGluZy5iaW5kKHQpO1xuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBDbGVhciBjb250ZW50XG4gICAgICAgIC8vIHQuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgLy8gICAgIGNoaWxkLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgLy8gICAgIGlmIChjaGlsZC5pc1ZhbGlkKVxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHQuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogSW4gb3JkZXIgdG8gaW1wbGVtZW50IGEgY2lyY3VsYXIgbGlzdCwgc29tZSBmdW5jdGlvbnMgb2YgY2MuU2Nyb2xsVmlldyBtdXN0IGJlIG92ZXJyaWRkZW5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHRcbiAgICAgKi9cbiAgICBfcHJvY2Vzc0F1dG9TY3JvbGxpbmcoZHQpIHtcbiAgICAgICAgLy8gbGV0IGlzQXV0b1Njcm9sbEJyYWtlID0gdGhpcy5fc2Nyb2xsVmlldy5faXNOZWNlc3NhcnlBdXRvU2Nyb2xsQnJha2UoKTtcbiAgICAgICAgbGV0IGJyYWtpbmdGYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lICs9IGR0ICogKDEgLyBicmFraW5nRmFjdG9yKTtcblxuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgubWluKDEsIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUgLyB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsVG90YWxUaW1lKTtcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBdHRlbnVhdGUpIHtcbiAgICAgICAgICAgIGxldCB0aW1lID0gcGVyY2VudGFnZSAtIDE7XG4gICAgICAgICAgICBwZXJjZW50YWdlID0gdGltZSAqIHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxUYXJnZXREZWx0YS5tdWwocGVyY2VudGFnZSkpO1xuICAgICAgICBsZXQgRVBTSUxPTiA9IHRoaXMuX3Njcm9sbFZpZXcuZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZygpO1xuICAgICAgICBsZXQgcmVhY2hlZEVuZCA9IE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSA8PSBFUFNJTE9OO1xuICAgICAgICAvLyBjYy5sb2cocmVhY2hlZEVuZCwgTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpLCBFUFNJTE9OKVxuXG4gICAgICAgIGxldCBmaXJlRXZlbnQgPSBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSkgPD0gdGhpcy5fc2Nyb2xsVmlldy5nZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nKCk7XG4gICAgICAgIGlmIChmaXJlRXZlbnQgJiYgIXRoaXMuX3Njcm9sbFZpZXcuX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCkge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudCgnc2Nyb2xsLWVuZGVkLXdpdGgtdGhyZXNob2xkJyk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuX3Njcm9sbFZpZXcuZWxhc3RpYyAmJiAhcmVhY2hlZEVuZCkge1xuICAgICAgICAvLyAgICAgbGV0IGJyYWtlT2Zmc2V0UG9zaXRpb24gPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEJyYWtpbmdTdGFydFBvc2l0aW9uKTtcbiAgICAgICAgLy8gICAgIGlmIChpc0F1dG9TY3JvbGxCcmFrZSkge1xuICAgICAgICAvLyAgICAgICAgIGJyYWtlT2Zmc2V0UG9zaXRpb24gPSBicmFrZU9mZnNldFBvc2l0aW9uLm11bChicmFraW5nRmFjdG9yKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIG5ld1Bvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEJyYWtpbmdTdGFydFBvc2l0aW9uLmFkZChicmFrZU9mZnNldFBvc2l0aW9uKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGxldCBtb3ZlRGVsdGEgPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5nZXRDb250ZW50UG9zaXRpb24oKSk7XG4gICAgICAgIC8vICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuX3Njcm9sbFZpZXcuX2dldEhvd011Y2hPdXRPZkJvdW5kYXJ5KG1vdmVEZWx0YSk7XG4gICAgICAgIC8vICAgICBpZiAoIW91dE9mQm91bmRhcnkuZnV6enlFcXVhbHMoY2MudjIoMCwgMCksIEVQU0lMT04pKSB7XG4gICAgICAgIC8vICAgICAgICAgbmV3UG9zaXRpb24gPSBuZXdQb3NpdGlvbi5hZGQob3V0T2ZCb3VuZGFyeSk7XG4gICAgICAgIC8vICAgICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAocmVhY2hlZEVuZCkge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbHRhTW92ZSA9IG5ld1Bvc2l0aW9uLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcbiAgICAgICAgLy8gY2MubG9nKGRlbHRhTW92ZSlcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fbW92ZUNvbnRlbnQodGhpcy5fc2Nyb2xsVmlldy5fY2xhbXBEZWx0YShkZWx0YU1vdmUpLCByZWFjaGVkRW5kKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudCgnc2Nyb2xsaW5nJyk7XG5cbiAgICAgICAgLy8gc2NvbGxUbyBBUEkgY29udHJvbGwgbW92ZVxuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2lzQm91bmNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX3Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudCgnc2Nyb2xsLWVuZGVkJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vU2V0IHRlbXBsYXRlIEl0ZW1cbiAgICBzZXRUZW1wbGF0ZUl0ZW0oaXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgdC5faXRlbVRtcCA9IGl0ZW07XG5cbiAgICAgICAgaWYgKHQuX3Jlc2l6ZU1vZGUgPT0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ0hJTERSRU4pXG4gICAgICAgICAgICB0Ll9pdGVtU2l6ZSA9IHQuX2xheW91dC5jZWxsU2l6ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdC5faXRlbVNpemUgPSBuZXcgY2Muc2l6ZShpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XG5cbiAgICAgICAgLy9HZXQgTGlzdEl0ZW0sIG9yIGRlc2VsZWN0IG1vZGUgaWYgbm90XG4gICAgICAgIGxldCBjb20gPSBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpO1xuICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XG4gICAgICAgIGlmICghY29tKVxuICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgLy8gaWYgKGNvbSkge1xuICAgICAgICAvLyAgICAgaWYgKCFjb20uX2J0bkNvbSAmJiAhaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSkge1xuICAgICAgICAvLyAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgdC5zZWxlY3RlZE1vZGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcbiAgICAgICAgfVxuICAgICAgICBjb20gPSBpdGVtLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAoY29tICYmIGNvbS5lbmFibGVkKSB7XG4gICAgICAgICAgICB0Ll9uZWVkVXBkYXRlV2lkZ2V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQpXG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IFtdO1xuXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcbiAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcbiAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfliJfmlbBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmltVyA9IHQuY29udGVudC53aWR0aCAtIHQuX2xlZnRHYXAgLSB0Ll9yaWdodEdhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltVyArIHQuX2NvbHVtbkdhcCkgLyAodC5faXRlbVNpemUud2lkdGggKyB0Ll9jb2x1bW5HYXApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfooYzmlbBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmltSCA9IHQuY29udGVudC5oZWlnaHQgLSB0Ll90b3BHYXAgLSB0Ll9ib3R0b21HYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbUggKyB0Ll9saW5lR2FwKSAvICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKyB0Ll9saW5lR2FwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBpbml0aWFsaXplZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJpbnRMb2cgV2hldGhlciB0byBwcmludCBlcnJvciBtZXNzYWdlc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgY2hlY2tJbml0ZWQocHJpbnRMb2cpIHtcbiAgICAgICAgcHJpbnRMb2cgPSBwcmludExvZyA9PSBudWxsID8gdHJ1ZSA6IHByaW50TG9nO1xuICAgICAgICBpZiAoIXRoaXMuX2luaXRlZCkge1xuICAgICAgICAgICAgaWYgKHByaW50TG9nKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ0xpc3QgaW5pdGlhbGl6YXRpb24gbm90IGNvbXBsZXRlZCEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIC8vRGlzYWJsZSBMYXlvdXQgY29tcG9uZW50IGFuZCBjYWxjdWxhdGUgQ29udGVudCBzaXplIGJ5IHlvdXJzZWxmXG4gICAgX3Jlc2l6ZUNvbnRlbnQoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkID0gdC5fZ2V0Rml4ZWRTaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUud2lkdGggKiAodC5fbnVtSXRlbXMgLSBmaXhlZC5jb3VudCkpICsgKHQuX2NvbHVtbkdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX3JpZ2h0R2FwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyAodC5faXRlbVNpemUud2lkdGggKiB0Ll9udW1JdGVtcykgKyAodC5fY29sdW1uR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fcmlnaHRHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZCA9IHQuX2dldEZpeGVkU2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiB0Ll9udW1JdGVtcykgKyAodC5fbGluZUdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX2JvdHRvbUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcbiAgICAgICAgICAgICAgICAvL0dyaWQgbW9kZSBkb2VzIG5vdCBzdXBwb3J0IGNlbnRlcmluZ1xuICAgICAgICAgICAgICAgIGlmICh0LmxhY2tDZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgIHQubGFja0NlbnRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTnVtID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogbGluZU51bSkgKyAodC5fbGluZUdhcCAqIChsaW5lTnVtIC0gMSkpICsgdC5fYm90dG9tR2FwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sTnVtID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgKHQuX2l0ZW1TaXplLndpZHRoICogY29sTnVtKSArICh0Ll9jb2x1bW5HYXAgKiAoY29sTnVtIC0gMSkpICsgdC5fcmlnaHRHYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICBpZiAobGF5b3V0KVxuICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0Ll9hbGxJdGVtU2l6ZSA9IHJlc3VsdDtcbiAgICAgICAgdC5fYWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZSAtICh0Ll9zaXplVHlwZSA/ICh0Ll90b3BHYXAgKyB0Ll9ib3R0b21HYXApIDogKHQuX2xlZnRHYXAgKyB0Ll9yaWdodEdhcCkpO1xuXG4gICAgICAgIGlmICh0LmN5Y2xpYykge1xuICAgICAgICAgICAgbGV0IHRvdGFsU2l6ZSA9ICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpO1xuXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MxID0gMDtcbiAgICAgICAgICAgIHRvdGFsU2l6ZSAtPSB0Ll9jeWNsaWNQb3MxO1xuICAgICAgICAgICAgdC5fY3ljbGljTnVtID0gTWF0aC5jZWlsKHRvdGFsU2l6ZSAvIHQuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XG4gICAgICAgICAgICBsZXQgc3BhY2luZyA9IHQuX3NpemVUeXBlID8gdC5fbGluZUdhcCA6IHQuX2NvbHVtbkdhcDtcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczIgPSB0Ll9jeWNsaWNQb3MxICsgdC5fYWxsSXRlbVNpemVOb0VkZ2UgKyBzcGFjaW5nO1xuICAgICAgICAgICAgdC5fY3ljbGljQWxsSXRlbVNpemUgPSB0Ll9hbGxJdGVtU2l6ZSArICh0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqICh0Ll9jeWNsaWNOdW0gLSAxKSkgKyAoc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKSk7XG4gICAgICAgICAgICB0Ll9jeWNpbGNBbGxJdGVtU2l6ZU5vRWRnZSA9IHQuX2FsbEl0ZW1TaXplTm9FZGdlICogdC5fY3ljbGljTnVtO1xuICAgICAgICAgICAgdC5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgKz0gc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZygnX2N5Y2xpY051bSAtPicsIHQuX2N5Y2xpY051bSwgdC5fYWxsSXRlbVNpemVOb0VkZ2UsIHQuX2FsbEl0ZW1TaXplLCB0Ll9jeWNsaWNQb3MxLCB0Ll9jeWNsaWNQb3MyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQuX2xhY2sgPSAhdC5jeWNsaWMgJiYgdC5fYWxsSXRlbVNpemUgPCAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcbiAgICAgICAgbGV0IHNsaWRlT2Zmc2V0ID0gKCghdC5fbGFjayB8fCAhdC5sYWNrQ2VudGVyKSAmJiB0LmxhY2tTbGlkZSkgPyAwIDogLjE7XG5cbiAgICAgICAgbGV0IHRhcmdldFdIID0gdC5fbGFjayA/ICgodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAtIHNsaWRlT2Zmc2V0KSA6ICh0LmN5Y2xpYyA/IHQuX2N5Y2xpY0FsbEl0ZW1TaXplIDogdC5fYWxsSXRlbVNpemUpO1xuICAgICAgICBpZiAodGFyZ2V0V0ggPCAwKVxuICAgICAgICAgICAgdGFyZ2V0V0ggPSAwO1xuXG4gICAgICAgIGlmICh0Ll9zaXplVHlwZSkge1xuICAgICAgICAgICAgdC5jb250ZW50LmhlaWdodCA9IHRhcmdldFdIO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdC5jb250ZW50LndpZHRoID0gdGFyZ2V0V0g7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MubG9nKCdfcmVzaXplQ29udGVudCgpICBudW1JdGVtcyA9JywgdC5fbnVtSXRlbXMsICfvvIxjb250ZW50ID0nLCB0LmNvbnRlbnQpO1xuICAgIH0sXG4gICAgLy9XaGlsZSBzY3JvbGxpbmcgLi4uXG4gICAgX29uU2Nyb2xsaW5nKGV2KSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lQ291bnQgPT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XG4gICAgICAgIGlmICghdGhpcy5fZm9yY2VVcGRhdGUgJiYgKGV2ICYmIGV2LnR5cGUgIT0gJ3Njcm9sbC1lbmRlZCcpICYmIHRoaXMuZnJhbWVDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudC0tO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZylcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvL+W+queOr+WIl+ihqOWkhOeQhlxuICAgICAgICBpZiAodGhpcy5jeWNsaWMpIHtcbiAgICAgICAgICAgIGxldCBzY3JvbGxQb3MgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHNjcm9sbFBvcyA9IHRoaXMuX3NpemVUeXBlID8gc2Nyb2xsUG9zLnkgOiBzY3JvbGxQb3MueDtcblxuICAgICAgICAgICAgbGV0IGFkZFZhbCA9IHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlICsgKHRoaXMuX3NpemVUeXBlID8gdGhpcy5fbGluZUdhcCA6IHRoaXMuX2NvbHVtbkdhcCk7XG4gICAgICAgICAgICBsZXQgYWRkID0gdGhpcy5fc2l6ZVR5cGUgPyBjYy52MigwLCBhZGRWYWwpIDogY2MudjIoYWRkVmFsLCAwKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihhZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2JlZ2FuUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgKz0gYWRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IC10aGlzLl9jeWNsaWNQb3MxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChhZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2JlZ2FuUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgLT0gYWRkO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKGFkZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zID4gdGhpcy5fY3ljbGljUG9zMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSB0aGlzLl9jeWNsaWNQb3MxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihhZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IHRoaXMuX2N5Y2xpY1BvczI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKGFkZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsUG9zID4gdGhpcy5fY3ljbGljUG9zMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihhZGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPiAtdGhpcy5fY3ljbGljUG9zMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5zdWIoYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSAtdGhpcy5fY3ljbGljUG9zMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQoYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhbGNWaWV3UG9zKCk7XG5cbiAgICAgICAgbGV0IHZUb3AsIHZSaWdodCwgdkJvdHRvbSwgdkxlZnQ7XG4gICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSkge1xuICAgICAgICAgICAgdlRvcCA9IHRoaXMudmlld1RvcDtcbiAgICAgICAgICAgIHZCb3R0b20gPSB0aGlzLnZpZXdCb3R0b207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2UmlnaHQgPSB0aGlzLnZpZXdSaWdodDtcbiAgICAgICAgICAgIHZMZWZ0ID0gdGhpcy52aWV3TGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhID0gW107XG4gICAgICAgICAgICBsZXQgaXRlbVBvcztcblxuICAgICAgICAgICAgbGV0IGN1cklkID0gMDtcbiAgICAgICAgICAgIGxldCBlbmRJZCA9IHRoaXMuX251bUl0ZW1zIC0gMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtGb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBpdGVtJ3MgcG9zaXRpb24gaXMgd2l0aGluIHRoZSB2aXNpYmxlIGFyZWEsIHB1c2ggaXQgaW4gZGlzcGxheURhdGFcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VySWQgPD0gZW5kSWQgJiYgIWJyZWFrRm9yOyBjdXJJZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Qb3MgPSB0aGlzLl9jYWxjSXRlbVBvcyhjdXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5yaWdodCA+PSB2TGVmdCAmJiBpdGVtUG9zLmxlZnQgPD0gdlJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLmJvdHRvbSA8PSB2VG9wICYmIGl0ZW1Qb3MudG9wID49IHZCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5ib3R0b20gPD0gdlRvcCAmJiBpdGVtUG9zLnRvcCA+PSB2Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MucmlnaHQgPj0gdkxlZnQgJiYgaXRlbVBvcy5sZWZ0IDw9IHZSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB3dyA9IHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwO1xuICAgICAgICAgICAgICAgIGxldCBoaCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXA7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh2TGVmdCArIHRoaXMuX2xlZnRHYXApIC8gd3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2UmlnaHQgKyB0aGlzLl9yaWdodEdhcCkgLyB3dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZSaWdodCAtIHRoaXMuX3JpZ2h0R2FwKSAvIHd3O1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZMZWZ0IC0gdGhpcy5fbGVmdEdhcCkgLyB3dztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZUb3AgLSB0aGlzLl90b3BHYXApIC8gaGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICgtdkJvdHRvbSAtIHRoaXMuX2JvdHRvbUdhcCkgLyBoaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAodkJvdHRvbSArIHRoaXMuX2JvdHRvbUdhcCkgLyBoaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKHZUb3AgKyB0aGlzLl90b3BHYXApIC8gaGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VySWQgPSBNYXRoLmZsb29yKGN1cklkKSAqIHRoaXMuX2NvbExpbmVOdW07XG4gICAgICAgICAgICAgICAgZW5kSWQgPSBNYXRoLmNlaWwoZW5kSWQpICogdGhpcy5fY29sTGluZU51bTtcbiAgICAgICAgICAgICAgICBlbmRJZC0tO1xuICAgICAgICAgICAgICAgIGlmIChjdXJJZCA8IDApXG4gICAgICAgICAgICAgICAgICAgIGN1cklkID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZW5kSWQgPj0gdGhpcy5fbnVtSXRlbXMpXG4gICAgICAgICAgICAgICAgICAgIGVuZElkID0gdGhpcy5fbnVtSXRlbXMgLSAxO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhjdXJJZCwgZW5kSWQpO1xuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZDsgY3VySWQrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2godGhpcy5fY2FsY0l0ZW1Qb3MoY3VySWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPD0gMCB8fCAhdGhpcy5fbnVtSXRlbXMpIHsgLy9pZiBub25lLCBkZWxldGUgYWxsLlxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlyc3RMaXN0SWQgPSB0aGlzLmRpc3BsYXlEYXRhWzBdLmlkO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5SXRlbU51bSA9IHRoaXMuZGlzcGxheURhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgICBsZXQgbGVuID0gdGhpcy5fbGFzdERpc3BsYXlEYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBoYXZlRGF0YUNoYW5nZSA9IHRoaXMuZGlzcGxheUl0ZW1OdW0gIT0gbGVuO1xuICAgICAgICAgICAgaWYgKGhhdmVEYXRhQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6YCQ5bin5riy5p+T77yM6ZyA6KaB5o6S5bqPXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWboExpc3TnmoTmmL7npLrmlbDmja7mmK/mnInluo/nmoTvvIzmiYDku6Xlj6rpnIDopoHliKTmlq3mlbDnu4Tplb/luqbmmK/lkKbnm7jnrYnvvIzku6Xlj4rlpLTjgIHlsL7kuKTkuKrlhYPntKDmmK/lkKbnm7jnrYnljbPlj6/jgIJcbiAgICAgICAgICAgICAgICBoYXZlRGF0YUNoYW5nZSA9IHRoaXMuZmlyc3RMaXN0SWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhWzBdIHx8IHRoaXMuZGlzcGxheURhdGFbdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFdLmlkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVtsZW4gLSAxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlIHx8IGhhdmVEYXRhQ2hhbmdlKSB7ICAgIC8v5aaC5p6c5piv5by65Yi25pu05pawXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5fdXBkYXRlRG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy/pgJDluKfmuLLmn5NcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX251bUl0ZW1zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91cGRhdGVEb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9uZUFmdGVyVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+ebtOaOpea4suafk1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdMaXN0IERpc3BsYXkgRGF0YSBJSTo6JywgdGhpcy5kaXNwbGF5RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5kaXNwbGF5SXRlbU51bTsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0odGhpcy5kaXNwbGF5RGF0YVtjXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9DYWxjdWxhdGUgVmlldyBQb3NpdGlvblxuICAgIF9jYWxjVmlld1BvcygpIHtcbiAgICAgICAgbGV0IHNjcm9sbFBvcyA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHNjcm9sbFBvcy54ID4gMCA/IHNjcm9sbFBvcy54IDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gKHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDApIC0gdGhpcy5lbGFzdGljTGVmdDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IHRoaXMudmlld0xlZnQgKyB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0aGlzLnZpZXdSaWdodCA+IHRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld1JpZ2h0IC0gdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY0xlZnQsIHRoaXMuZWxhc3RpY1JpZ2h0LCB0aGlzLnZpZXdMZWZ0LCB0aGlzLnZpZXdSaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1JpZ2h0ID0gc2Nyb2xsUG9zLnggPCAwID8gLXNjcm9sbFBvcy54IDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IChzY3JvbGxQb3MueCA+IDAgPyAtc2Nyb2xsUG9zLnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSB0aGlzLnZpZXdSaWdodCAtIHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNMZWZ0ID0gdGhpcy52aWV3TGVmdCA8IC10aGlzLmNvbnRlbnQud2lkdGggPyBNYXRoLmFicyh0aGlzLnZpZXdMZWZ0ICsgdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSBzY3JvbGxQb3MueSA8IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCA9IChzY3JvbGxQb3MueSA+IDAgPyAtc2Nyb2xsUG9zLnkgOiAwKSArIHRoaXMuZWxhc3RpY1RvcDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSB0aGlzLnZpZXdUb3AgLSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHRoaXMudmlld0JvdHRvbSA8IC10aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3Qm90dG9tICsgdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0JvdHRvbSArPSB0aGlzLmVsYXN0aWNCb3R0b207XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHNjcm9sbFBvcy55ID4gMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gKHNjcm9sbFBvcy55IDwgMCA/IC1zY3JvbGxQb3MueSA6IDApIC0gdGhpcy5lbGFzdGljQm90dG9tO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCA9IHRoaXMudmlld0JvdHRvbSArIHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdGhpcy52aWV3VG9wID4gdGhpcy5jb250ZW50LmhlaWdodCA/IE1hdGguYWJzKHRoaXMudmlld1RvcCAtIHRoaXMuY29udGVudC5oZWlnaHQpIDogMDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgLT0gdGhpcy5lbGFzdGljVG9wO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNUb3AsIHRoaXMuZWxhc3RpY0JvdHRvbSwgdGhpcy52aWV3VG9wLCB0aGlzLnZpZXdCb3R0b20pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRJdGVtSGVpZ2h0KGlkKSB7XG5cbiAgICB9LFxuICAgIC8vQ2FsY3VsYXRlIGxvY2F0aW9uIGJhc2VkIG9uIGlkXG4gICAgX2NhbGNJdGVtUG9zKGlkKSB7XG4gICAgICAgIGxldCB3aWR0aCwgaGVpZ2h0LCB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIGl0ZW1YLCBpdGVtWTtcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5fbGVmdEdhcCArICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKGlkIC0gZml4ZWQuY291bnQpKSArIChmaXhlZC52YWwgKyAodGhpcy5fY29sdW1uR2FwICogZml4ZWQuY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgKz0gb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2l0ZW1UbXAueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZCA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSAtdGhpcy5fcmlnaHRHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgLSAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGFja0NlbnRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5jb250ZW50LndpZHRoIC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fbGluZUdhcCAqIGZpeGVkLmNvdW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuY29udGVudC5oZWlnaHQgLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAtPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tIC09IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpICsgKGZpeGVkLnZhbCArICh0aGlzLl9saW5lR2FwICogZml4ZWQuY291bnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGJvdHRvbSArIGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuY29udGVudC5oZWlnaHQgLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCArPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tICs9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xuICAgICAgICAgICAgICAgIGxldCBjb2xMaW5lID0gTWF0aC5mbG9vcihpZCAvIHRoaXMuX2NvbExpbmVOdW0pO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gLXRoaXMuX3RvcEdhcCAtICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdG9wIC0gdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogY29sTGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IGJvdHRvbSArIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSB0aGlzLl9sZWZ0R2FwICsgKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAqPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXRlbVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogaXRlbVksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5fbGVmdEdhcCArICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogY29sTGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAodGhpcy5jb250ZW50LmFuY2hvclggKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0IC0gdGhpcy5faXRlbVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gLXRoaXMuX3RvcEdhcCAtICgoaWQgJSB0aGlzLl9jb2xMaW5lTnVtKSAqICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAtPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclkpICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKz0gKCgxIC0gdGhpcy5jb250ZW50LmFuY2hvclkpICogdGhpcy5jb250ZW50LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgodGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICh0aGlzLmNvbnRlbnQuYW5jaG9yWSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAqPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXRlbVgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogaXRlbVksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL0NhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgYW4gZXhpc3RpbmcgaXRlbVxuICAgIF9jYWxjRXhpc3RJdGVtUG9zKGlkKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQoaWQpO1xuICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB4OiBpdGVtLngsXG4gICAgICAgICAgICB5OiBpdGVtLnksXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSkge1xuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSBpdGVtLnkgLSAoaXRlbS5oZWlnaHQgKiBpdGVtLmFuY2hvclkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IGl0ZW0ueCArIChpdGVtLndpZHRoICogKDEgLSBpdGVtLmFuY2hvclgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIC8vR2V0IEl0ZW0gUG9zaXRpb25cbiAgICBnZXRJdGVtUG9zKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNJdGVtUG9zKGlkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0V4aXN0SXRlbVBvcyhpZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vR2V0IGZpeGVkIHNpemVcbiAgICBfZ2V0Rml4ZWRTaXplKGxpc3RJZCkge1xuICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVNpemUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYgKGxpc3RJZCA9PSBudWxsKVxuICAgICAgICAgICAgbGlzdElkID0gdGhpcy5fbnVtSXRlbXM7XG4gICAgICAgIGxldCBmaXhlZCA9IDA7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZUludChpZCkgPCBsaXN0SWQpIHtcbiAgICAgICAgICAgICAgICBmaXhlZCArPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWw6IGZpeGVkLFxuICAgICAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL1doZW4gc2Nyb2xsaW5nIHN0YXJ0czpcbiAgICBfb25TY3JvbGxCZWdhbigpIHtcbiAgICAgICAgdGhpcy5fYmVnYW5Qb3MgPSB0aGlzLl9zaXplVHlwZSA/IHRoaXMudmlld1RvcCA6IHRoaXMudmlld0xlZnQ7XG4gICAgfSxcbiAgICAvL1doZW4gc2Nyb2xsaW5nIGVuZHM6XG4gICAgX29uU2Nyb2xsRW5kZWQoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgaWYgKHQuc2Nyb2xsVG9MaXN0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZCh0LnNjcm9sbFRvTGlzdElkKTtcbiAgICAgICAgICAgIHQuc2Nyb2xsVG9MaXN0SWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihuZXcgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBjYy5zY2FsZVRvKC4xLCAxLjA2KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGNjLnNjYWxlVG8oLjEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAvL25ldyBjYy5jYWxsRnVuYyhmdW5jdGlvbiAocnVuTm9kZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcblxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORyAmJiAhdC5hZGhlcmluZykge1xuICAgICAgICAgICAgLy9jYy5sb2codC5hZGhlcmluZywgdC5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSwgdC5fc2Nyb2xsVmlldy5pc1Njcm9sbGluZygpKTtcbiAgICAgICAgICAgIHQuYWRoZXJlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2VBZGhlcmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gV2hlbiB0b3VjaGVkXG4gICAgX29uVG91Y2hTdGFydChldiwgY2FwdHVyZUxpc3RlbmVycykge1xuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5faGFzTmVzdGVkVmlld0dyb3VwKGV2LCBjYXB0dXJlTGlzdGVuZXJzKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IGlzTWUgPSBldi5ldmVudFBoYXNlID09PSBjYy5FdmVudC5BVF9UQVJHRVQgJiYgZXYudGFyZ2V0ID09PSB0aGlzLm5vZGU7XG4gICAgICAgIGlmICghaXNNZSkge1xuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlID0gZXYudGFyZ2V0O1xuICAgICAgICAgICAgd2hpbGUgKGl0ZW1Ob2RlLl9saXN0SWQgPT0gbnVsbCAmJiBpdGVtTm9kZS5wYXJlbnQpXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBpdGVtTm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gaXRlbU5vZGUuX2xpc3RJZCAhPSBudWxsID8gaXRlbU5vZGUgOiBldi50YXJnZXQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vV2hlbiB0b3VjaGVkOlxuICAgIF9vblRvdWNoVXAoKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcpIHtcbiAgICAgICAgICAgIGlmICh0LmFkaGVyaW5nKVxuICAgICAgICAgICAgICAgIHQuX2FkaGVyaW5nQmFycmllciA9IHRydWU7XG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0Ll9wYWdlQWRoZXJlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IG51bGw7XG4gICAgfSxcblxuICAgIF9vblRvdWNoQ2FuY2VsbGVkKGV2LCBjYXB0dXJlTGlzdGVuZXJzKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcbiAgICAgICAgaWYgKHQuX3Njcm9sbFZpZXcuX2hhc05lc3RlZFZpZXdHcm91cChldiwgY2FwdHVyZUxpc3RlbmVycykgfHwgZXYuc2ltdWxhdGUpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdC5fc2Nyb2xsUG9zID0gbnVsbDtcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcpIHtcbiAgICAgICAgICAgIGlmICh0LmFkaGVyaW5nKVxuICAgICAgICAgICAgICAgIHQuX2FkaGVyaW5nQmFycmllciA9IHRydWU7XG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xuICAgICAgICAgICAgaWYgKHQuX2JlZ2FuUG9zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0Ll9wYWdlQWRoZXJlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHQuYWRoZXJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IG51bGw7XG4gICAgfSxcbiAgICAvLyBXaGVuIHRoZSBzaXplIGNoYW5nZXNcbiAgICBfb25TaXplQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpKVxuICAgICAgICAgICAgdGhpcy5fb25TY3JvbGxpbmcoKTtcbiAgICB9LFxuICAgIC8vV2hlbiBJdGVtIGlzIGFkYXB0aXZlXG4gICAgX29uSXRlbUFkYXB0aXZlKGl0ZW0pIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2hlY2tJbml0ZWQoZmFsc2UpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICghdGhpcy5fc2l6ZVR5cGUgJiYgaXRlbS53aWR0aCAhPSB0aGlzLl9pdGVtU2l6ZS53aWR0aClcbiAgICAgICAgICAgIHx8ICh0aGlzLl9zaXplVHlwZSAmJiBpdGVtLmhlaWdodCAhPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21TaXplKVxuICAgICAgICAgICAgICAgIHRoaXMuX2N1c3RvbVNpemUgPSB7fTtcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLl9zaXplVHlwZSA/IGl0ZW0uaGVpZ2h0IDogaXRlbS53aWR0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gIT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdID0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuX3VwZGF0ZUl0ZW1Qb3MoY2hpbGQpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsKCk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN5q2j5Zyo6L+Q6KGMIHNjcm9sbFRv77yM6IKv5a6a5Lya5LiN5YeG56Gu77yM5Zyo6L+Z6YeM5YGa5L+u5q2jXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvTGlzdElkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3Njcm9sbFRvU28pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuX3Njcm9sbFRvTGlzdElkLCBNYXRoLm1heCgwLCB0aGlzLl9zY3JvbGxUb0VuZFRpbWUgLSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9LFxuICAgIC8vUEFHRSBjb25maWdcbiAgICBfcGFnZUFkaGVyZSgpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXQuY3ljbGljICYmICh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IGN1clBvcyA9IHQuX3NpemVUeXBlID8gdC52aWV3VG9wIDogdC52aWV3TGVmdDtcbiAgICAgICAgbGV0IGRpcyA9ICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpICogdC5wYWdlRGlzdGFuY2U7XG4gICAgICAgIGxldCBjYW5Ta2lwID0gTWF0aC5hYnModC5fYmVnYW5Qb3MgLSBjdXJQb3MpID4gZGlzO1xuICAgICAgICBpZiAoY2FuU2tpcCkge1xuICAgICAgICAgICAgbGV0IHRpbWVJblNlY29uZCA9IC41O1xuICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPiBjdXJQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdfcGFnZUFkaGVyZSAgIFBQUFBQUFBQUFBQUFBQUCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdfcGFnZUFkaGVyZSAgIE5OTk5OTk5OTk5OTk5OTicpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBjdXJQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucHJlUGFnZSh0aW1lSW5TZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHQuZWxhc3RpY1RvcCA8PSAwICYmIHQuZWxhc3RpY1JpZ2h0IDw9IDAgJiYgdC5lbGFzdGljQm90dG9tIDw9IDAgJiYgdC5lbGFzdGljTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xuICAgICAgICB9XG4gICAgICAgIHQuX2JlZ2FuUG9zID0gbnVsbDtcbiAgICB9LFxuICAgIC8vY29uZmlnXG4gICAgYWRoZXJlKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdC5hZGhlcmluZyA9IHRydWU7XG4gICAgICAgIC8vIGlmICghdC5fdmlydHVhbClcbiAgICAgICAgdC5fY2FsY05lYXJlc3RJdGVtKCk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAodC5fc2l6ZVR5cGUgPyB0Ll90b3BHYXAgOiB0Ll9sZWZ0R2FwKSAvICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpO1xuICAgICAgICBsZXQgdGltZUluU2Vjb25kID0gLjc7XG4gICAgICAgIHQuc2Nyb2xsVG8odC5uZWFyZXN0TGlzdElkLCB0aW1lSW5TZWNvbmQsIG9mZnNldCk7XG4gICAgfSxcbiAgICAvL1VwZGF0ZS4uXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPD0gMCB8fCB0aGlzLl91cGRhdGVEb25lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBjYy5sb2codGhpcy5kaXNwbGF5RGF0YS5sZW5ndGgsIHRoaXMuX3VwZGF0ZUNvdW50ZXIsIHRoaXMuZGlzcGxheURhdGFbdGhpcy5fdXBkYXRlQ291bnRlcl0pO1xuICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xuICAgICAgICAgICAgbGV0IGxlbiA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5kaXNwbGF5SXRlbU51bSA/IHRoaXMuZGlzcGxheUl0ZW1OdW0gOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcbiAgICAgICAgICAgIGZvciAobGV0IG4gPSB0aGlzLl91cGRhdGVDb3VudGVyOyBuIDwgbGVuOyBuKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGlzcGxheURhdGFbbl07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEuaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0oZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA+PSB0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMSkgeyAvL+acgOWQjuS4gOS4qlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kb25lQWZ0ZXJVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCF0aGlzLl9zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvbmVBZnRlclVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWxSZWR1bmRhbnRJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPCB0aGlzLl9udW1JdGVtcykge1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKSA+IHRoaXMuX251bUl0ZW1zID8gdGhpcy5fbnVtSXRlbXMgOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gdGhpcy5fdXBkYXRlQ291bnRlcjsgbiA8IGxlbjsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgKz0gdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhbGNOZWFyZXN0SXRlbSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJQYWdlTnVtID0gdGhpcy5uZWFyZXN0TGlzdElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgb3IgdXBkYXRlIEl0ZW0gKGZvciB2aXJ0dWFsIGxpc3QpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBfY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChkYXRhLmlkKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8vSWYgbm90IHByZXNlbnRcbiAgICAgICAgICAgIGxldCBjYW5HZXQgPSB0aGlzLl9wb29sLnNpemUoKSA+IDA7XG4gICAgICAgICAgICBpZiAoY2FuR2V0KSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuX3Bvb2wuZ2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCdSZW1vdmUgZnJvbSB0aGUgcG9vbCA6OiBvbGQgaWQgPSAnLCBpdGVtLl9saXN0SWQsJywgbmV3IGlkID0gJywgZGF0YS5pZCwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ05ldyA6OicsIGRhdGEuaWQsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uX2xpc3RJZCAhPSBkYXRhLmlkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKHRoaXMuX2l0ZW1TaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24obmV3IGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgaWYgKGNhbkdldCAmJiB0aGlzLl9uZWVkVXBkYXRlV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldCA9IGl0ZW0uZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldClcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5zZXRTaWJsaW5nSW5kZXgodGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxKTtcblxuICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKTtcbiAgICAgICAgICAgIGl0ZW0ubGlzdEl0ZW0gPSBsaXN0SXRlbTtcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLl9saXN0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHsgLy9Gb3JjZSB1cGRhdGVcbiAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24obmV3IGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xuICAgICAgICAgICAgLy8gY2MubG9nKCdBREQ6OicsIGRhdGEuaWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oaXRlbS5saXN0SXRlbSk7XG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihkYXRhLmlkKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGRhdGEuaWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL0NyZWF0ZSBvciB1cGRhdGUgSXRlbSAoZm9yIG5vbi12aXJ0dWFsIGxpc3RzKVxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0yKGxpc3RJZCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltsaXN0SWRdO1xuICAgICAgICBpZiAoIWl0ZW0pIHsgLy9JZiBub3QgcHJlc2VudFxuICAgICAgICAgICAgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX2l0ZW1UbXApO1xuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5saXN0SXRlbSA9IGxpc3RJdGVtO1xuICAgICAgICAgICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX2xpc3QgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtLl9yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL0ZvcmNlIHVwZGF0ZVxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RJdGVtKGl0ZW0ubGlzdEl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YobGlzdElkKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGxpc3RJZCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZUxpc3RJdGVtKGxpc3RJdGVtKSB7XG4gICAgICAgIGlmICghbGlzdEl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9kZSA+IFNlbGVjdGVkVHlwZS5OT05FKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU0lOR0xFOlxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJZCA9PSBsaXN0SXRlbS5ub2RlLl9saXN0SWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLk1VTFQ6XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdGhpcy5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SXRlbS5ub2RlLl9saXN0SWQpID49IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL0ZvciB2aXJ0dWFsIGxpc3RzIG9ubHlcbiAgICBfcmVzZXRJdGVtU2l6ZShpdGVtKSB7XG4gICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgbGV0IHNpemU7XG4gICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplICYmIHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXSkge1xuICAgICAgICAgICAgc2l6ZSA9IHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2xMaW5lTnVtID4gMSlcbiAgICAgICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKHRoaXMuX2l0ZW1TaXplKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgOiB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKVxuICAgICAgICAgICAgICAgIGl0ZW0uaGVpZ2h0ID0gc2l6ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBpdGVtLndpZHRoID0gc2l6ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEl0ZW0gUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge051bWJlcnx8Tm9kZX0gbGlzdElkT3JJdGVtXG4gICAgICovXG4gICAgX3VwZGF0ZUl0ZW1Qb3MobGlzdElkT3JJdGVtKSB7XG4gICAgICAgIGxldCBpdGVtID0gaXNOYU4obGlzdElkT3JJdGVtKSA/IGxpc3RJZE9ySXRlbSA6IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZE9ySXRlbSk7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldEl0ZW1Qb3MoaXRlbS5fbGlzdElkKTtcbiAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2V0IG11bHRpcGxlIHNlbGVjdGlvblxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgY2FuIGJlIGEgc2luZ2xlIGxpc3RJZCBvciBhbiBhcnJheSBvZiBsaXN0SWRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBib29sIHZhbHVlLCBpZiBudWxsLCBkaXJlY3RseSBvdmVyd3JpdGUgd2l0aCBhcmdzXG4gICAgICovXG4gICAgc2V0TXVsdFNlbGVjdGVkKGFyZ3MsIGJvb2wpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib29sID09IG51bGwpIHtcbiAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkID0gYXJncztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsaXN0SWQsIHN1YjtcbiAgICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IGFyZ3MubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdElkID0gYXJnc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaChsaXN0SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0SWQgPSBhcmdzW25dO1xuICAgICAgICAgICAgICAgICAgICBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzcGVjaWZpZWQgSXRlbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mgc2luZ2xlIGxpc3RJZCwgb3IgYXJyYXlcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW0oYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IG4gPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgbiA8IGxlbjsgbisrKSB7XG4gICAgICAgICAgICBsZXQgbGlzdElkID0gYXJnc1tuXTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgbGlzdElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYWxsXG4gICAgICovXG4gICAgdXBkYXRlQWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5udW1JdGVtcyA9IHRoaXMubnVtSXRlbXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgSXRlbSBieSBMaXN0SURcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGlzdElkXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBnZXRJdGVtQnlMaXN0SWQobGlzdElkKSB7XG4gICAgICAgIGZvciAobGV0IG4gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50LmNoaWxkcmVuW25dLl9saXN0SWQgPT0gbGlzdElkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCBJdGVtIG91dHNpZGUgdGhlIGRpc3BsYXkgYXJlYVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgX2dldE91dHNpZGVJdGVtKCkge1xuICAgICAgICBsZXQgaXRlbTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBuID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xuICAgICAgICAgICAgaXRlbSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltuXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5kaXNwbGF5RGF0YS5maW5kKGQgPT4gZC5pZCA9PSBpdGVtLl9saXN0SWQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIC8vRGVsZXRlIGl0ZW1zIG91dHNpZGUgdGhlIGRpc3BsYXkgYXJlYVxuICAgIF9kZWxSZWR1bmRhbnRJdGVtKCkge1xuICAgICAgICBpZiAodGhpcy5fdmlydHVhbCkge1xuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuX2dldE91dHNpZGVJdGVtKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBuID0gYXJyLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBhcnJbbl07XG4gICAgICAgICAgICAgICAgLy8g5Yqg6L+Z5LiA5Y+l5piv5Li65LqG6Ziy5q2i5ouW5Yqo5pe26KKr5Y2h5L2PLi4uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbEl0ZW0gJiYgaXRlbS5fbGlzdElkID09IHRoaXMuX3Njcm9sbEl0ZW0uX2xpc3RJZClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcG9vbC5wdXQoaXRlbSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBtID49IDA7IG0tLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhW21dID09IGl0ZW0uX2xpc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNwbGljZShtLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2MubG9nKCflrZjlhaU6OicsIHN0ciwgJyAgICBwb29sLmxlbmd0aCA9JywgdGhpcy5fcG9vbC5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50ID4gdGhpcy5fbnVtSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxTaW5nbGVJdGVtKHRoaXMuY29udGVudC5jaGlsZHJlblt0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy9EZWxldGUgYSBzaW5nbGUgSXRlbVxuICAgIF9kZWxTaW5nbGVJdGVtKGl0ZW0pIHtcbiAgICAgICAgLy8gY2MubG9nKCdERUw6OicsIGl0ZW0uX2xpc3RJZCwgaXRlbSk7XG4gICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBpZiAoaXRlbS5kZXN0cm95KVxuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIGl0ZW0gPSBudWxsO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRHluYW1pYyBkZWxldGlvbiBvZiBJdGVtICh0aGlzIG1ldGhvZCBpcyBvbmx5IGFwcGxpY2FibGUgdG8gdmlydHVhbCBsaXN0cywgdGhhdCBpcywgX3ZpcnR1YWwgPSB0cnVlKVxuICAgICAqIEJlIHN1cmUgdG8gcmVzZXQgdGhlIG5ldyBudW1JdGVtcyBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVmcmVzaCwgYWZ0ZXIgYWxsLCB0aGlzIExpc3QgaXMgZGF0YSBkcml2ZW4uXG4gICAgICovXG4gICAgYW5pRGVsSXRlbShsaXN0SWQsIGNhbGxGdW5jLCBhbmlUeXBlKSB7XG4gICAgICAgIGxldCB0ID0gdGhpcztcblxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSB8fCB0LmN5Y2xpYyB8fCAhdC5fdmlydHVhbClcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQhJyk7XG5cbiAgICAgICAgaWYgKHQuX2FuaURlbFJ1bmluZylcbiAgICAgICAgICAgIHJldHVybiBjYy53YXJuKCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIScpO1xuXG4gICAgICAgIGxldCBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICBjYWxsRnVuYyhsaXN0SWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IHRydWU7XG4gICAgICAgIGxldCBjdXJMYXN0SWQgPSB0LmRpc3BsYXlEYXRhW3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMV0uaWQ7XG4gICAgICAgIGxldCByZXNldFNlbGVjdGVkSWQgPSBpdGVtLmxpc3RJdGVtLnNlbGVjdGVkO1xuICAgICAgICBpdGVtLmxpc3RJdGVtLnNob3dBbmkoYW5pVHlwZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy/liKTmlq3mnInmsqHmnInkuIvkuIDkuKrvvIzlpoLmnpzmnInnmoTor53vvIzliJvlu7rnspfmnaVcbiAgICAgICAgICAgIGxldCBuZXdJZDtcbiAgICAgICAgICAgIGlmIChjdXJMYXN0SWQgPCB0Ll9udW1JdGVtcyAtIDIpIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGN1ckxhc3RJZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdEYXRhID0gdC5fY2FsY0l0ZW1Qb3MobmV3SWQpO1xuICAgICAgICAgICAgICAgIHQuZGlzcGxheURhdGEucHVzaChuZXdEYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAodC5fdmlydHVhbClcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtKG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuZXdJZCk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcy0tO1xuICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRNb2RlID09IFNlbGVjdGVkVHlwZS5TSU5HTEUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzZXRTZWxlY3RlZElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHQuX3NlbGVjdGVkSWQgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQgJiYgdC5tdWx0U2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgdG1wO1xuICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy/lpJrpgInnmoTmlbDmja7vvIzlnKjlhbblkI7nmoTlhajpg6jlh4/kuIBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gdC5tdWx0U2VsZWN0ZWQubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdC5tdWx0U2VsZWN0ZWRbbl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCA+PSBsaXN0SWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZFtuXS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemVbbGlzdElkXSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHQuX2N1c3RvbVNpemVbbGlzdElkXTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q3VzdG9tU2l6ZSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBzaXplO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGlkIGluIHQuX2N1c3RvbVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHQuX2N1c3RvbVNpemVbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZCA9IHBhcnNlSW50KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3VzdG9tU2l6ZVtpZCAtIChpZCA+PSBsaXN0SWQgPyAxIDogMCldID0gc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IG5ld0N1c3RvbVNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WQjumdoueahEl0ZW3lkJHliY3mgLznmoTliqjmlYhcbiAgICAgICAgICAgIGxldCBzZWMgPSAuMjMzMztcbiAgICAgICAgICAgIGxldCBhY3RzLCBoYXZlQ0I7XG4gICAgICAgICAgICBmb3IgKGxldCBuID0gbmV3SWQgIT0gbnVsbCA/IG5ld0lkIDogY3VyTGFzdElkOyBuID49IGxpc3RJZCArIDE7IG4tLSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZChuKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zRGF0YSA9IHQuX2NhbGNJdGVtUG9zKG4gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjYy5tb3ZlVG8oc2VjLCBuZXcgY2MudjIocG9zRGF0YS54LCBwb3NEYXRhLnkpKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPD0gbGlzdElkICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZUNCID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHMucHVzaChuZXcgY2MuQ2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdHMubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKG5ldyBjYy5TZXF1ZW5jZShhY3RzKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGFjdHNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaGF2ZUNCKSB7XG4gICAgICAgICAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG86XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZCBJbmRleCAoaWYgPDAsIHNjcm9sbCB0byB0aGUgZmlyc3QgSXRlbSBwb3NpdGlvbiwgaWY+ID0gXyBudW1JdGVtcywgc2Nyb2xsIHRvIHRoZSBsYXN0IEl0ZW0gcG9zaXRpb24pXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVJblNlY29uZCB0aW1lXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBJbmRleCB0YXJnZXQgcG9zaXRpb24gb2Zmc2V0LCAwLTFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJTdHJlc3MgV2hldGhlciB0byBlbXBoYXNpemUgdGhlIGl0ZW0gYWZ0ZXIgc2Nyb2xsaW5nICh0aGlzIGlzIGp1c3QgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUpXG4gICAgICovXG4gICAgc2Nyb2xsVG8obGlzdElkLCB0aW1lSW5TZWNvbmQsIG9mZnNldCwgb3ZlclN0cmVzcykge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbCkgICAvL+m7mOiupDAuNVxuICAgICAgICAgICAgdGltZUluU2Vjb25kID0gLjU7XG4gICAgICAgIGVsc2UgaWYgKHRpbWVJblNlY29uZCA8IDApXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAwO1xuICAgICAgICBpZiAobGlzdElkIDwgMClcbiAgICAgICAgICAgIGxpc3RJZCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKGxpc3RJZCA+PSB0Ll9udW1JdGVtcylcbiAgICAgICAgICAgIGxpc3RJZCA9IHQuX251bUl0ZW1zIC0gMTtcbiAgICAgICAgLy8gSnVzdCBpbiBjYXNlIHRoZSBsYXlvdXQgc2l6ZSBoYXMgbm90IGJlZW4gdXBkYXRlZCBhZnRlciBzZXR0aW5nIG51bUl0ZW1zXG4gICAgICAgIGlmICghdC5fdmlydHVhbCAmJiB0Ll9sYXlvdXQgJiYgdC5fbGF5b3V0LmVuYWJsZWQpXG4gICAgICAgICAgICB0Ll9sYXlvdXQudXBkYXRlTGF5b3V0KCk7XG5cbiAgICAgICAgbGV0IHBvcyA9IHQuZ2V0SXRlbVBvcyhsaXN0SWQpO1xuICAgICAgICBsZXQgdGFyZ2V0WCwgdGFyZ2V0WTtcblxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTovL1NpbmdsZSByb3cgSE9SSVpPTlRBTCAoTEVGVF9UT19SSUdIVCksIGdyaWQgVkVSVElDQUwgKExFRlRfVE9fUklHSFQpXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5sZWZ0O1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCAtPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYIC09IHQuX2xlZnRHYXA7XG4gICAgICAgICAgICAgICAgcG9zID0gbmV3IGNjLnYyKHRhcmdldFgsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOi8vU2luZ2xlIHJvdyBIT1JJWk9OVEFMIChSSUdIVF9UT19MRUZUKSwgZ3JpZCBWRVJUSUNBTCAoUklHSFRfVE9fTEVGVClcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLnJpZ2h0IC0gdC5ub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCArPSB0Lm5vZGUud2lkdGggKiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYICs9IHQuX3JpZ2h0R2FwO1xuICAgICAgICAgICAgICAgIHBvcyA9IG5ldyBjYy52Mih0YXJnZXRYICsgdC5jb250ZW50LndpZHRoLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzovL1NpbmdsZSBjb2x1bW4gVkVSVElDQUwgKFRPUF9UT19CT1RUT00pLCBncmlkIEhPUklaT05UQUwgKFRPUF9UT19CT1RUT00pXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IHBvcy50b3A7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQuX3RvcEdhcDtcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXcgY2MudjIoMCwgLXRhcmdldFkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0Oi8vU2luZ2xlIGNvbHVtbiBWRVJUSUNBTCAoQk9UVE9NX1RPX1RPUCksIGdyaWQgSE9SSVpPTlRBTCAoQk9UVE9NX1RPX1RPUClcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLmJvdHRvbSArIHQubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZIC09IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZIC09IHQuX2JvdHRvbUdhcDtcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXcgY2MudjIoMCwgLXRhcmdldFkgKyB0LmNvbnRlbnQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmlld1BvcyA9IHQuY29udGVudC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB2aWV3UG9zID0gTWF0aC5hYnModC5fc2l6ZVR5cGUgPyB2aWV3UG9zLnkgOiB2aWV3UG9zLngpO1xuXG4gICAgICAgIGxldCBjb21wYXJlUG9zID0gdC5fc2l6ZVR5cGUgPyBwb3MueSA6IHBvcy54O1xuICAgICAgICBsZXQgcnVuU2Nyb2xsID0gTWF0aC5hYnMoKHQuX3Njcm9sbFBvcyAhPSBudWxsID8gdC5fc2Nyb2xsUG9zIDogdmlld1BvcykgLSBjb21wYXJlUG9zKSA+IC41O1xuICAgICAgICAvLyBjYy5sb2cocnVuU2Nyb2xsLCB0Ll9zY3JvbGxQb3MsIHZpZXdQb3MsIGNvbXBhcmVQb3MpXG5cbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xuXG4gICAgICAgIGlmIChydW5TY3JvbGwpIHtcbiAgICAgICAgICAgIHQuX3Njcm9sbFBvcyA9IGNvbXBhcmVQb3M7XG4gICAgICAgICAgICB0Ll9zY3JvbGxUb0xpc3RJZCA9IGxpc3RJZDtcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvRW5kVGltZSA9ICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCkgKyB0aW1lSW5TZWNvbmQ7XG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHBvcywgdGltZUluU2Vjb25kKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhsaXN0SWQsIHQuY29udGVudC5oZWlnaHQsIHQuY29udGVudC5nZXRQb3NpdGlvbigpLnksIHBvcy55KTtcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvU28gPSB0LnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0Ll9hZGhlcmluZ0JhcnJpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5hZGhlcmluZyA9IHQuX2FkaGVyaW5nQmFycmllciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0Ll9zY3JvbGxQb3MgPVxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb0xpc3RJZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb0VuZFRpbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvU28gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgICAgIC8vY2MubG9nKCcyMjIyMjIyMjIyJywgdC5fYWRoZXJpbmdCYXJyaWVyKVxuICAgICAgICAgICAgICAgIGlmIChvdmVyU3RyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHQuc2Nyb2xsVG9MaXN0SWQgPSBsaXN0SWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKG5ldyBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgY2Muc2NhbGVUbyguMSwgMS4wNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLnNjYWxlVG8oLjEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aW1lSW5TZWNvbmQgKyAuMSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgbmVhcmVzdCBpdGVtIGluIHRoZSBjdXJyZW50IHNjcm9sbCB3aW5kb3dcbiAgICAgKi9cbiAgICBfY2FsY05lYXJlc3RJdGVtKCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIHQubmVhcmVzdExpc3RJZCA9IG51bGw7XG4gICAgICAgIGxldCBkYXRhLCBjZW50ZXI7XG5cbiAgICAgICAgaWYgKHQuX3ZpcnR1YWwpXG4gICAgICAgICAgICB0Ll9jYWxjVmlld1BvcygpO1xuXG4gICAgICAgIGxldCB2VG9wLCB2UmlnaHQsIHZCb3R0b20sIHZMZWZ0O1xuICAgICAgICB2VG9wID0gdC52aWV3VG9wO1xuICAgICAgICB2UmlnaHQgPSB0LnZpZXdSaWdodDtcbiAgICAgICAgdkJvdHRvbSA9IHQudmlld0JvdHRvbTtcbiAgICAgICAgdkxlZnQgPSB0LnZpZXdMZWZ0O1xuXG4gICAgICAgIGxldCBicmVha0ZvciA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQuY29udGVudC5jaGlsZHJlbkNvdW50ICYmICFicmVha0ZvcjsgbiArPSB0Ll9jb2xMaW5lTnVtKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fdmlydHVhbCA/IHRoaXMuZGlzcGxheURhdGFbbl0gOiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKG4pO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSB0aGlzLl9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOi8vU2luZ2xlIHJvdyBIT1JJWk9OVEFMIChMRUZUX1RPX1JJR0hUKSwgZ3JpZCBWRVJUSUNBTCAoTEVGVF9UT19SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJpZ2h0ID49IHZMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPiBjZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdExpc3RJZCArPSB0aGlzLl9jb2xMaW5lTnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Ly9TaW5nbGUgcm93IEhPUklaT05UQUwgKFJJR0hUX1RPX0xFRlQpLCBncmlkIFZFUlRJQ0FMIChSSUdIVF9UT19MRUZUKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVmdCA8PSB2UmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2UmlnaHQgPCBjZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdExpc3RJZCArPSB0aGlzLl9jb2xMaW5lTnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly9TaW5nbGUgY29sdW1uIFZFUlRJQ0FMIChUT1BfVE9fQk9UVE9NKSwgZ3JpZCBIT1JJWk9OVEFMIChUT1BfVE9fQk9UVE9NKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYm90dG9tIDw9IHZUb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2VG9wIDwgY2VudGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgKz0gdGhpcy5fY29sTGluZU51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0Oi8vU2luZ2xlIGNvbHVtbiBWRVJUSUNBTCAoQk9UVE9NX1RPX1RPUCksIGdyaWQgSE9SSVpPTlRBTCAoQk9UVE9NX1RPX1RPUClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvcCA+PSB2Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkJvdHRvbSA+IGNlbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkICs9IHRoaXMuX2NvbExpbmVOdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vSnVkZ2UgdGhlIGxhc3QgSXRlbS4gLiAuIChIZXksIHRoZXNlIGp1ZGdtZW50cyBhcmUgcmVhbGx5IGRpc2d1c3RpbmcuXG4gICAgICAgIC8vIElmIHlvdSBqdWRnZSB0aGUgcHJldmlvdXMgb25lLCB5b3UgbXVzdCBqdWRnZSB0aGUgbGFzdCBvbmUgLi4uXG4gICAgICAgIC8vIEF0IHRoZSBiZWdpbm5pbmcsIHRoZXJlIHdhcyBvbmx5IG9uZSBsYXlvdXQgKHNpbmdsZS1jb2x1bW4gbGF5b3V0KS5cbiAgICAgICAgLy8gQXQgdGhhdCB0aW1lLCB0aGUgY29kZSB3YXMgb25seSB0aHJlZSBodW5kcmVkIGxpbmVzLiBMYXRlciwgSSB3YW50ZWQgdG8gaW1wcm92ZSBpdC4gLlxuICAgICAgICAvLyBUaGlzIHBpdCBpcyByZWFsbHkgZGVlcCwgbm93IHRoaXMgbGluZSBjb3VudHMgb25lIHRob3VzYW5kIGFuZCBmaXZlID0gPSB8fClcbiAgICAgICAgZGF0YSA9IHRoaXMuX3ZpcnR1YWwgPyB0aGlzLmRpc3BsYXlEYXRhW3RoaXMuZGlzcGxheUl0ZW1OdW0gLSAxXSA6IHRoaXMuX2NhbGNFeGlzdEl0ZW1Qb3ModGhpcy5fbnVtSXRlbXMgLSAxKTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCA9PSB0Ll9udW1JdGVtcyAtIDEpIHtcbiAgICAgICAgICAgIGNlbnRlciA9IHQuX3NpemVUeXBlID8gKChkYXRhLnRvcCArIGRhdGEuYm90dG9tKSAvIDIpIDogKGNlbnRlciA9IChkYXRhLmxlZnQgKyBkYXRhLnJpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOi8vU2luZ2xlIHJvdyBIT1JJWk9OVEFMIChMRUZUX1RPX1JJR0hUKSwgZ3JpZCBWRVJUSUNBTCAoTEVGVF9UT19SSUdIVClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZSaWdodCA+IGNlbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjovL1NpbmdsZSByb3cgSE9SSVpPTlRBTCAoUklHSFRfVE9fTEVGVCksIGdyaWQgVkVSVElDQUwgKFJJR0hUX1RPX0xFRlQpXG4gICAgICAgICAgICAgICAgICAgIGlmICh2TGVmdCA8IGNlbnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzovL1NpbmdsZSBjb2x1bW4gVkVSVElDQUwgKFRPUF9UT19CT1RUT00pLCBncmlkIEhPUklaT05UQUwgKFRPUF9UT19CT1RUT00pXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tIDwgY2VudGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8vU2luZ2xlIGNvbHVtbiBWRVJUSUNBTCAoQk9UVE9NX1RPX1RPUCksIGdyaWQgSE9SSVpPTlRBTCAoQk9UVE9NX1RPX1RPUClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZUb3AgPiBjZW50ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5sb2coJ3QubmVhcmVzdExpc3RJZCA9JywgdC5uZWFyZXN0TGlzdElkKTtcbiAgICB9LFxuICAgIC8vIFByZXZpb3VzXG4gICAgcHJlUGFnZSh0aW1lSW5TZWNvbmQpIHtcbiAgICAgICAgLy8gY2MubG9nKCfwn5GIJyk7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGltZUluU2Vjb25kID09IG51bGwpXG4gICAgICAgICAgICB0aW1lSW5TZWNvbmQgPSAuNTtcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gLSAxLCB0aW1lSW5TZWNvbmQpO1xuICAgIH0sXG4gICAgLy9OZXh0XG4gICAgbmV4dFBhZ2UodGltZUluU2Vjb25kKSB7XG4gICAgICAgIC8vIGNjLmxvZygn8J+RiScpO1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRpbWVJblNlY29uZCA9PSBudWxsKVxuICAgICAgICAgICAgdGltZUluU2Vjb25kID0gLjU7XG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtICsgMSwgdGltZUluU2Vjb25kKTtcbiAgICB9LFxuICAgIC8vR28gdG8gcGFnZVxuICAgIHNraXBQYWdlKHBhZ2VOdW0sIHRpbWVJblNlY29uZCkge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodC5fc2xpZGVNb2RlICE9IFNsaWRlVHlwZS5QQUdFKVxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCwgTXVzdCBTbGlkZU1vZGUgPSBQQUdFIScpO1xuICAgICAgICBpZiAocGFnZU51bSA8IDAgfHwgcGFnZU51bSA+PSB0Ll9udW1JdGVtcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHQuY3VyUGFnZU51bSA9PSBwYWdlTnVtKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBjYy5sb2cocGFnZU51bSk7XG4gICAgICAgIHQuY3VyUGFnZU51bSA9IHBhZ2VOdW07XG4gICAgICAgIGlmICh0LnBhZ2VDaGFuZ2VFdmVudCkge1xuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnBhZ2VDaGFuZ2VFdmVudF0sIHBhZ2VOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHQuc2Nyb2xsVG8ocGFnZU51bSwgdGltZUluU2Vjb25kKTtcbiAgICB9LFxuICAgIC8vIENhbGN1bGF0ZSBDdXN0b21TaXplICh0aGlzIGZ1bmN0aW9uIGlzIHJlc2VydmVkLCBpbiBzb21lIHJhcmUgY2FzZXMsIGl0IGlzIHN0aWxsIG5lY2Vzc2FyeSB0byBtYW51YWxseSBjYWxjdWxhdGUgY3VzdG9tU2l6ZSlcbiAgICBjYWxjQ3VzdG9tU2l6ZShudW1JdGVtcykge1xuICAgICAgICBsZXQgdCA9IHRoaXM7XG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXQuX2l0ZW1UbXApXG4gICAgICAgICAgICByZXR1cm4gY2MuZXJyb3IoJ1Vuc2V0IHRlbXBsYXRlIGl0ZW0hJyk7XG4gICAgICAgIGlmICghdC5yZW5kZXJFdmVudClcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVW5zZXQgUmVuZGVyLUV2ZW50IScpO1xuICAgICAgICB0Ll9jdXN0b21TaXplID0ge307XG4gICAgICAgIGxldCB0ZW1wID0gY2MuaW5zdGFudGlhdGUodC5faXRlbVRtcCk7XG4gICAgICAgIHQuY29udGVudC5hZGRDaGlsZCh0ZW1wKTtcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBudW1JdGVtczsgbisrKSB7XG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3QucmVuZGVyRXZlbnRdLCB0ZW1wLCBuKTtcbiAgICAgICAgICAgIGlmICh0ZW1wLmhlaWdodCAhPSB0Ll9pdGVtU2l6ZS5oZWlnaHQgfHwgdGVtcC53aWR0aCAhPSB0Ll9pdGVtU2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHQuX2N1c3RvbVNpemVbbl0gPSB0Ll9zaXplVHlwZSA/IHRlbXAuaGVpZ2h0IDogdGVtcC53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHQuX2N1c3RvbVNpemUpLmxlbmd0aClcbiAgICAgICAgICAgIHQuX2N1c3RvbVNpemUgPSBudWxsO1xuICAgICAgICB0ZW1wLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgaWYgKHRlbXAuZGVzdHJveSlcbiAgICAgICAgICAgIHRlbXAuZGVzdHJveSgpO1xuICAgICAgICByZXR1cm4gdC5fY3VzdG9tU2l6ZTtcbiAgICB9LFxuXG59KTsiXX0=