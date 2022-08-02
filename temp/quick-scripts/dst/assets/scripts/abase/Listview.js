
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXExpc3R2aWV3LmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVHlwZSIsImNjIiwiRW51bSIsIlNsaWRlVHlwZSIsIlNlbGVjdGVkVHlwZSIsIkNsYXNzIiwiQ29tcG9uZW50IiwiZWRpdG9yIiwiZGlzYWxsb3dNdWx0aXBsZSIsIm1lbnUiLCJyZXF1aXJlQ29tcG9uZW50IiwiU2Nyb2xsVmlldyIsImV4ZWN1dGlvbk9yZGVyIiwicHJvcGVydGllcyIsInRlbXBsYXRlVHlwZSIsIk5PREUiLCJ0eXBlIiwidG1wTm9kZSIsIk5vZGUiLCJ0b29sdGlwIiwiQ0NfREVWIiwidmlzaWJsZSIsImJvb2wiLCJ0bXBQcmVmYWIiLCJQcmVmYWIiLCJQUkVGQUIiLCJfc2xpZGVNb2RlIiwic2xpZGVNb2RlIiwiZ2V0Iiwic2V0IiwidmFsIiwicGFnZURpc3RhbmNlIiwiRmxvYXQiLCJyYW5nZSIsInNsaWRlIiwiUEFHRSIsInBhZ2VDaGFuZ2VFdmVudCIsIkV2ZW50SGFuZGxlciIsIl92aXJ0dWFsIiwidmlydHVhbCIsIl9udW1JdGVtcyIsIl9vblNjcm9sbGluZyIsImN5Y2xpYyIsIk5PUk1BTCIsImxhY2tDZW50ZXIiLCJsYWNrU2xpZGUiLCJfdXBkYXRlUmF0ZSIsInVwZGF0ZVJhdGUiLCJJbnRlZ2VyIiwiZnJhbWVCeUZyYW1lUmVuZGVyTnVtIiwicmVuZGVyRXZlbnQiLCJzZWxlY3RlZE1vZGUiLCJOT05FIiwicmVwZWF0RXZlbnRTaW5nbGUiLCJTSU5HTEUiLCJzZWxlY3RlZEV2ZW50IiwiX3NlbGVjdGVkSWQiLCJzZWxlY3RlZElkIiwidCIsIml0ZW0iLCJnZXRJdGVtQnlMaXN0SWQiLCJfbGFzdFNlbGVjdGVkSWQiLCJsaXN0SXRlbSIsInNlbGVjdGVkIiwibGFzdEl0ZW0iLCJlbWl0RXZlbnRzIiwiX2FjdHVhbE51bUl0ZW1zIiwiTVVMVCIsInN1YiIsIm11bHRTZWxlY3RlZCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwic2VyaWFsaXphYmxlIiwibnVtSXRlbXMiLCJjaGVja0luaXRlZCIsImVycm9yIiwiX2ZvcmNlVXBkYXRlIiwiX3Jlc2l6ZUNvbnRlbnQiLCJfY3ljbGljTnVtIiwiY3VyUGFnZU51bSIsIm5lYXJlc3RMaXN0SWQiLCJsYXlvdXQiLCJjb250ZW50IiwiZ2V0Q29tcG9uZW50IiwiTGF5b3V0IiwiZW5hYmxlZCIsIl9kZWxSZWR1bmRhbnRJdGVtIiwiZmlyc3RMaXN0SWQiLCJsZW4iLCJuIiwiX2NyZWF0ZU9yVXBkYXRlSXRlbTIiLCJfdXBkYXRlQ291bnRlciIsIl91cGRhdGVEb25lIiwiZGlzcGxheUl0ZW1OdW0iLCJvbkxvYWQiLCJfaW5pdCIsIm9uRGVzdHJveSIsIl9pdGVtVG1wIiwiaXNWYWxpZCIsImRlc3Ryb3kiLCJfcG9vbCIsInNpemUiLCJub2RlIiwib25FbmFibGUiLCJfcmVnaXN0ZXJFdmVudCIsIm9uRGlzYWJsZSIsIl91bnJlZ2lzdGVyRXZlbnQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX29uVG91Y2hTdGFydCIsIl9vblRvdWNoVXAiLCJUT1VDSF9DQU5DRUwiLCJfb25Ub3VjaENhbmNlbGxlZCIsIl9vblNjcm9sbEJlZ2FuIiwiX29uU2Nyb2xsRW5kZWQiLCJTSVpFX0NIQU5HRUQiLCJfb25TaXplQ2hhbmdlZCIsIm9mZiIsIl9pbml0ZWQiLCJfc2Nyb2xsVmlldyIsIm5hbWUiLCJfbGF5b3V0IiwiX2FsaWduIiwiX3Jlc2l6ZU1vZGUiLCJyZXNpemVNb2RlIiwiX3N0YXJ0QXhpcyIsInN0YXJ0QXhpcyIsIl90b3BHYXAiLCJwYWRkaW5nVG9wIiwiX3JpZ2h0R2FwIiwicGFkZGluZ1JpZ2h0IiwiX2JvdHRvbUdhcCIsInBhZGRpbmdCb3R0b20iLCJfbGVmdEdhcCIsInBhZGRpbmdMZWZ0IiwiX2NvbHVtbkdhcCIsInNwYWNpbmdYIiwiX2xpbmVHYXAiLCJzcGFjaW5nWSIsIl9jb2xMaW5lTnVtIiwiX3ZlcnRpY2FsRGlyIiwidmVydGljYWxEaXJlY3Rpb24iLCJfaG9yaXpvbnRhbERpciIsImhvcml6b250YWxEaXJlY3Rpb24iLCJzZXRUZW1wbGF0ZUl0ZW0iLCJpbnN0YW50aWF0ZSIsIkFESEVSSU5HIiwiaW5lcnRpYSIsIl9vbk1vdXNlV2hlZWwiLCJfbGFzdERpc3BsYXlEYXRhIiwiZGlzcGxheURhdGEiLCJOb2RlUG9vbCIsIl9wcm9jZXNzQXV0b1Njcm9sbGluZyIsImJpbmQiLCJfc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQiLCJUeXBlIiwiSE9SSVpPTlRBTCIsIkhvcml6b250YWxEaXJlY3Rpb24iLCJMRUZUX1RPX1JJR0hUIiwiX2FsaWduQ2FsY1R5cGUiLCJSSUdIVF9UT19MRUZUIiwiVkVSVElDQUwiLCJWZXJ0aWNhbERpcmVjdGlvbiIsIlRPUF9UT19CT1RUT00iLCJCT1RUT01fVE9fVE9QIiwiR1JJRCIsIkF4aXNEaXJlY3Rpb24iLCJyZW1vdmVBbGxDaGlsZHJlbiIsImR0IiwiYnJha2luZ0ZhY3RvciIsIl9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lIiwicGVyY2VudGFnZSIsIk1hdGgiLCJtaW4iLCJfYXV0b1Njcm9sbFRvdGFsVGltZSIsIl9hdXRvU2Nyb2xsQXR0ZW51YXRlIiwidGltZSIsIm5ld1Bvc2l0aW9uIiwiX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uIiwiYWRkIiwiX2F1dG9TY3JvbGxUYXJnZXREZWx0YSIsIm11bCIsIkVQU0lMT04iLCJnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nIiwicmVhY2hlZEVuZCIsImFicyIsImZpcmVFdmVudCIsIl9pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQiLCJfZGlzcGF0Y2hFdmVudCIsIl9hdXRvU2Nyb2xsaW5nIiwiZGVsdGFNb3ZlIiwiZ2V0Q29udGVudFBvc2l0aW9uIiwiX21vdmVDb250ZW50IiwiX2NsYW1wRGVsdGEiLCJfaXNCb3VuY2luZyIsIl9zY3JvbGxpbmciLCJSZXNpemVNb2RlIiwiQ0hJTERSRU4iLCJfaXRlbVNpemUiLCJjZWxsU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29tIiwicmVtb3ZlIiwiV2lkZ2V0IiwiX25lZWRVcGRhdGVXaWRnZXQiLCJfc2l6ZVR5cGUiLCJ0cmltVyIsImZsb29yIiwidHJpbUgiLCJwcmludExvZyIsInJlc3VsdCIsIl9jdXN0b21TaXplIiwiZml4ZWQiLCJfZ2V0Rml4ZWRTaXplIiwiY291bnQiLCJsaW5lTnVtIiwiY2VpbCIsImNvbE51bSIsIl9hbGxJdGVtU2l6ZSIsIl9hbGxJdGVtU2l6ZU5vRWRnZSIsInRvdGFsU2l6ZSIsIl9jeWNsaWNQb3MxIiwic3BhY2luZyIsIl9jeWNsaWNQb3MyIiwiX2N5Y2xpY0FsbEl0ZW1TaXplIiwiX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlIiwiX2xhY2siLCJzbGlkZU9mZnNldCIsInRhcmdldFdIIiwiZXYiLCJmcmFtZUNvdW50IiwiX2FuaURlbFJ1bmluZyIsInNjcm9sbFBvcyIsImdldFBvc2l0aW9uIiwieSIsIngiLCJhZGRWYWwiLCJ2MiIsImlzQXV0b1Njcm9sbGluZyIsIl9jYWxjVmlld1BvcyIsInZUb3AiLCJ2UmlnaHQiLCJ2Qm90dG9tIiwidkxlZnQiLCJ2aWV3VG9wIiwidmlld0JvdHRvbSIsInZpZXdSaWdodCIsInZpZXdMZWZ0IiwiaXRlbVBvcyIsImN1cklkIiwiZW5kSWQiLCJicmVha0ZvciIsIl9jYWxjSXRlbVBvcyIsInJpZ2h0IiwibGVmdCIsImxlbmd0aCIsImJvdHRvbSIsInRvcCIsInd3IiwiaGgiLCJpZCIsImhhdmVEYXRhQ2hhbmdlIiwic29ydCIsImEiLCJiIiwiX2RvbmVBZnRlclVwZGF0ZSIsImMiLCJfY3JlYXRlT3JVcGRhdGVJdGVtIiwiX2NhbGNOZWFyZXN0SXRlbSIsImVsYXN0aWNMZWZ0IiwiZWxhc3RpY1JpZ2h0IiwiZWxhc3RpY1RvcCIsImVsYXN0aWNCb3R0b20iLCJnZXRJdGVtSGVpZ2h0IiwiaXRlbVgiLCJpdGVtWSIsImNzIiwib2Zmc2V0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJjb2xMaW5lIiwiX2NhbGNFeGlzdEl0ZW1Qb3MiLCJkYXRhIiwiZ2V0SXRlbVBvcyIsImxpc3RJZCIsInBhcnNlSW50IiwiX2JlZ2FuUG9zIiwic2Nyb2xsVG9MaXN0SWQiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInNjYWxlVG8iLCJhZGhlcmluZyIsImFkaGVyZSIsIl9wYWdlQWRoZXJlIiwiY2FwdHVyZUxpc3RlbmVycyIsIl9oYXNOZXN0ZWRWaWV3R3JvdXAiLCJpc01lIiwiZXZlbnRQaGFzZSIsIkV2ZW50IiwiQVRfVEFSR0VUIiwidGFyZ2V0IiwiaXRlbU5vZGUiLCJfbGlzdElkIiwicGFyZW50IiwiX3Njcm9sbEl0ZW0iLCJfc2Nyb2xsUG9zIiwiX2FkaGVyaW5nQmFycmllciIsInNpbXVsYXRlIiwiX29uSXRlbUFkYXB0aXZlIiwidXBkYXRlQWxsIiwiX3Njcm9sbFRvTGlzdElkIiwidW5zY2hlZHVsZSIsIl9zY3JvbGxUb1NvIiwic2Nyb2xsVG8iLCJtYXgiLCJfc2Nyb2xsVG9FbmRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJQb3MiLCJkaXMiLCJjYW5Ta2lwIiwidGltZUluU2Vjb25kIiwicHJlUGFnZSIsIm5leHRQYWdlIiwidXBkYXRlIiwiY2FuR2V0Iiwic2V0Q29udGVudFNpemUiLCJzZXRQb3NpdGlvbiIsIl9yZXNldEl0ZW1TaXplIiwiYWRkQ2hpbGQiLCJ3aWRnZXQiLCJ1cGRhdGVBbGlnbm1lbnQiLCJzZXRTaWJsaW5nSW5kZXgiLCJjaGlsZHJlbkNvdW50IiwiX2xpc3QiLCJfdXBkYXRlTGlzdEl0ZW0iLCJjaGlsZHJlbiIsIkxpc3RJdGVtIiwiX3VwZGF0ZUl0ZW1Qb3MiLCJsaXN0SWRPckl0ZW0iLCJpc05hTiIsInBvcyIsInNldE11bHRTZWxlY3RlZCIsImFyZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJ1cGRhdGVJdGVtIiwiX2dldE91dHNpZGVJdGVtIiwiZmluZCIsImQiLCJhcnIiLCJwdXQiLCJtIiwiX2RlbFNpbmdsZUl0ZW0iLCJyZW1vdmVGcm9tUGFyZW50IiwiYW5pRGVsSXRlbSIsImNhbGxGdW5jIiwiYW5pVHlwZSIsIndhcm4iLCJjdXJMYXN0SWQiLCJyZXNldFNlbGVjdGVkSWQiLCJzaG93QW5pIiwibmV3SWQiLCJuZXdEYXRhIiwibmV3Q3VzdG9tU2l6ZSIsInNlYyIsImFjdHMiLCJoYXZlQ0IiLCJwb3NEYXRhIiwibW92ZVRvIiwiQ2FsbEZ1bmMiLCJTZXF1ZW5jZSIsIm92ZXJTdHJlc3MiLCJ1cGRhdGVMYXlvdXQiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsInZpZXdQb3MiLCJjb21wYXJlUG9zIiwicnVuU2Nyb2xsIiwic2Nyb2xsVG9PZmZzZXQiLCJzY2hlZHVsZU9uY2UiLCJjZW50ZXIiLCJza2lwUGFnZSIsInBhZ2VOdW0iLCJjYWxjQ3VzdG9tU2l6ZSIsInRlbXAiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFNQSxJQUFNQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ3pCLFVBQVEsQ0FEaUI7QUFFekIsWUFBVTtBQUZlLENBQVIsQ0FBckI7QUFJQSxJQUFNQyxTQUFTLEdBQUdGLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ3RCLFlBQVUsQ0FEWTtBQUNOO0FBQ2hCLGNBQVksQ0FGVTtBQUVOO0FBQ2hCLFVBQVEsQ0FIYyxDQUdOOztBQUhNLENBQVIsQ0FBbEI7QUFLQSxJQUFNRSxZQUFZLEdBQUdILEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ3pCLFVBQVUsQ0FEZTtBQUV6QixZQUFVLENBRmU7QUFFWjtBQUNiLFVBQVUsQ0FIZSxDQUdaOztBQUhZLENBQVIsQ0FBckI7QUFNQUQsRUFBRSxDQUFDSSxLQUFILENBQVM7QUFDTCxhQUFTSixFQUFFLENBQUNLLFNBRFA7QUFHTEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLGdCQUFnQixFQUFFLEtBRGQ7QUFFSkMsSUFBQUEsSUFBSSxFQUFFLHlCQUZGO0FBR0pDLElBQUFBLGdCQUFnQixFQUFFVCxFQUFFLENBQUNVLFVBSGpCO0FBSUo7QUFDQUMsSUFBQUEsY0FBYyxF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SyxJQUFJLEdBQUduWSxFQUFFLENBQUNrSixXQUFILENBQWV6RixDQUFDLENBQUN3QyxRQUFqQixDQUFYO0FBQ0F4QyxJQUFBQSxDQUFDLENBQUN5QixPQUFGLENBQVV5UCxRQUFWLENBQW1Cd0QsSUFBbkI7O0FBQ0EsU0FBSyxJQUFJMVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2hCLFFBQXBCLEVBQThCZ0IsQ0FBQyxFQUEvQixFQUFtQztBQUMvQnpGLE1BQUFBLEVBQUUsQ0FBQ0ssU0FBSCxDQUFhK0IsWUFBYixDQUEwQjRCLFVBQTFCLENBQXFDLENBQUNQLENBQUMsQ0FBQ1IsV0FBSCxDQUFyQyxFQUFzRGtWLElBQXRELEVBQTREMVMsQ0FBNUQ7O0FBQ0EsVUFBSTBTLElBQUksQ0FBQ3pMLE1BQUwsSUFBZWpKLENBQUMsQ0FBQzhJLFNBQUYsQ0FBWUcsTUFBM0IsSUFBcUN5TCxJQUFJLENBQUMxTCxLQUFMLElBQWNoSixDQUFDLENBQUM4SSxTQUFGLENBQVlFLEtBQW5FLEVBQTBFO0FBQ3RFaEosUUFBQUEsQ0FBQyxDQUFDNEosV0FBRixDQUFjNUgsQ0FBZCxJQUFtQmhDLENBQUMsQ0FBQ3NKLFNBQUYsR0FBY29MLElBQUksQ0FBQ3pMLE1BQW5CLEdBQTRCeUwsSUFBSSxDQUFDMUwsS0FBcEQ7QUFDSDtBQUNKOztBQUNELFFBQUksQ0FBQzJMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNVUsQ0FBQyxDQUFDNEosV0FBZCxFQUEyQjRDLE1BQWhDLEVBQ0l4TSxDQUFDLENBQUM0SixXQUFGLEdBQWdCLElBQWhCO0FBQ0o4SyxJQUFBQSxJQUFJLENBQUMvQixnQkFBTDtBQUNBLFFBQUkrQixJQUFJLENBQUNoUyxPQUFULEVBQ0lnUyxJQUFJLENBQUNoUyxPQUFMO0FBQ0osV0FBTzFDLENBQUMsQ0FBQzRKLFdBQVQ7QUFDSDtBQXg2REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIGtMIDxrbGswQHFxLmNvbT5cclxuICogQGRhdGUgMjAxOS8xLzVcclxuICogQGRvYyBMaXN0IGNvbXBvbmVudC5cclxuICogQGVuZFxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5jb25zdCBUZW1wbGF0ZVR5cGUgPSBjYy5FbnVtKHtcclxuICAgICdOT0RFJzogMSxcclxuICAgICdQUkVGQUInOiAyLFxyXG59KTtcclxuY29uc3QgU2xpZGVUeXBlID0gY2MuRW51bSh7XHJcbiAgICAnTk9STUFMJzogMSwgICAgLy9Ob3JtYWxcclxuICAgICdBREhFUklORyc6IDIsICAvL1N0aWNreSBtb2RlIHRoYXQgd2lsbCBmb3JjZSBvZmYgcm9sbGluZyBpbmVydGlhXHJcbiAgICAnUEFHRSc6IDMsICAgICAgLy9QYWdlIG1vZGUsIHdoaWNoIHdpbGwgZm9yY2UgdGhlIHNjcm9sbCBpbmVydGlhIG9mZlxyXG59KTtcclxuY29uc3QgU2VsZWN0ZWRUeXBlID0gY2MuRW51bSh7XHJcbiAgICAnTk9ORScgIDogMCxcclxuICAgICdTSU5HTEUnOiAxLCAvL1NpbmdsZSBjaG9pY2VcclxuICAgICdNVUxUJyAgOiAyLCAvL011bHRpcGxlIGNob2ljZVxyXG59KTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBlZGl0b3I6IHtcclxuICAgICAgICBkaXNhbGxvd011bHRpcGxlOiBmYWxzZSxcclxuICAgICAgICBtZW51OiAnQ3VzdG9tIGNvbXBvbmVudCAvIExpc3QnLFxyXG4gICAgICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLlNjcm9sbFZpZXcsXHJcbiAgICAgICAgLy8gVGhlIGV4ZWN1dGlvbiBwcmlvcml0eSBvZiB0aGUgc2NyaXB0IGxpZmVjeWNsZSBjYWxsYmFjay4gU2NyaXB0cyBsZXNzIHRoYW4gMCBhcmUgZXhlY3V0ZWQgZmlyc3QsIGFuZCBzY3JpcHRzIGdyZWF0ZXIgdGhhbiAwIGFyZSBleGVjdXRlZCBsYXN0LiBUaGlzIHByaW9yaXR5IGlzIG9ubHkgdmFsaWQgZm9yIG9uTG9hZCwgb25FbmFibGUsIHN0YXJ0LCB1cGRhdGUgYW5kIGxhdGVVcGRhdGUsIGFuZCBub3QgZm9yIG9uRGlzYWJsZSBhbmQgb25EZXN0cm9544CCXHJcbiAgICAgICAgZXhlY3V0aW9uT3JkZXI6IC01MDAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGVtcGxhdGVUeXBlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFRlbXBsYXRlVHlwZS5OT0RFLFxyXG4gICAgICAgICAgICB0eXBlOiBUZW1wbGF0ZVR5cGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bXBOb2RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnSXRlbSB0ZW1wbGF0ZSwgdHlwZTogY2MuTm9kZScsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLk5PREU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50bXBOb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0bXBQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW0gdGVtcGxhdGUsIHR5cGU6IGNjLlByZWZhYicsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBib29sID0gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQjtcclxuICAgICAgICAgICAgICAgIGlmICghYm9vbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRtcFByZWZhYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3NsaWRlTW9kZTogMSxcclxuICAgICAgICBzbGlkZU1vZGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU2xpZGVUeXBlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1NsaWRpbmcgbW9kZScsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2xpZGVNb2RlID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdlRGlzdGFuY2U6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogLjMsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgICAgICByYW5nZTogWzAsIDEsIC4xXSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdQYWdlIHR1cm5pbmcgZGlzdGFuY2UnLFxyXG4gICAgICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2VDaGFuZ2VFdmVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1BhZ2UgY2hhbmdlIGV2ZW50JyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2wgPSB0aGlzLl9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlRXZlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBfdmlydHVhbDogdHJ1ZSxcclxuICAgICAgICB2aXJ0dWFsOiB7XHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnV2hldGhlciBpdCBpcyBhIHZpcnR1YWwgbGlzdCAoZHluYW1pYyBsaXN0KScsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbCA9IHZhbDtcclxuICAgICAgICAgICAgICAgIGlmICghQ0NfREVWICYmIHRoaXMuX251bUl0ZW1zICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjeWNsaWM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnV2hldGhlciBpdCBpcyBhIGNpcmN1bGFyIGxpc3QnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gdGhpcy52aXJ0dWFsICYmIHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5OT1JNQUw7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN5Y2xpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhY2tDZW50ZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAnV2hlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGlzIG5vdCBlbm91Z2ggdG8gZmlsbCB0aGUgQ29udGVudCwgd2hldGhlciB0byBkaXNwbGF5IHRoZSBpdGVtcyBpbiB0aGUgY2VudGVyIChHcmlkIGxheW91dCBpcyBub3Qgc3VwcG9ydGVkKScsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhY2tTbGlkZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdXaGV0aGVyIHRoZSBudW1iZXIgb2YgaXRlbXMgaXMgc3VmZmljaWVudCB0byBmaWxsIHRoZSBjb250ZW50JyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMudmlydHVhbCAmJiAhdGhpcy5sYWNrQ2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWNrU2xpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIF91cGRhdGVSYXRlOiAwLFxyXG4gICAgICAgIHVwZGF0ZVJhdGU6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICAgICAgcmFuZ2U6IFswLCA2LCAxXSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdSZWZyZXNoIGZyZXF1ZW5jeSAodGhlIGxhcmdlciB0aGUgdmFsdWUsIHRoZSBsb3dlciB0aGUgcmVmcmVzaCBmcmVxdWVuY3kgYW5kIHRoZSBoaWdoZXIgdGhlIHBlcmZvcm1hbmNlKScsXHJcbiAgICAgICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlUmF0ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCA+PSAwICYmIHZhbCA8PSA2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmF0ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJhbWVCeUZyYW1lUmVuZGVyTnVtOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXIsXHJcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMTIsIDFdLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1doZW4gcmVuZGVyaW5nIGZyYW1lIGJ5IGZyYW1lLCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHJlbmRlcmVkIHBlciBmcmFtZSAoZnJhbWUgcmVuZGVyaW5nIGlzIHR1cm5lZCBvZmYgd2hlbiA8PSAwKScsXHJcbiAgICAgICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVuZGVyRXZlbnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdSZW5kZXJpbmcgZXZlbnQgKHJlbmRlcmVyKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RlZE1vZGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogU2VsZWN0ZWRUeXBlLk5PTkUsXHJcbiAgICAgICAgICAgIHR5cGU6IFNlbGVjdGVkVHlwZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdTZWxlY3QgbW9kZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBlYXRFdmVudFNpbmdsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdXaGV0aGVyIHRvIHJlcGVhdGVkbHkgcmVzcG9uZCB0byByYWRpbyBldmVudHMnLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0ZWRFdmVudDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ1RyaWdnZXIgc2VsZWN0aW9uIGV2ZW50JyxcclxuICAgICAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2wgPSB0aGlzLnNlbGVjdGVkTW9kZSA+IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEV2ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX3NlbGVjdGVkSWQ6IC0xLFxyXG4gICAgICAgIHNlbGVjdGVkSWQ6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU0lOR0xFOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdC5yZXBlYXRFdmVudFNpbmdsZSAmJiB2YWwgPT0gdC5fc2VsZWN0ZWRJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICghaXRlbSAmJiB2YWwgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvL0lmIGl0IGlzIGxlc3MgdGhhbiAwLCBjYW5jZWwgdGhlIHNlbGVjdGlvbi4gTGVhdmUgX2xhc3RTZWxlY3RlZElkIGVtcHR5LCBhbmQgY2hhbmdlIGl0IGlmIHlvdSBoYXZlIHNwZWNpYWwgbmVlZHMgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmxpc3RJdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX2xhc3RTZWxlY3RlZElkID49IDAgJiYgdC5fbGFzdFNlbGVjdGVkSWQgIT0gdC5fc2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RJdGVtID0gdC5nZXRJdGVtQnlMaXN0SWQodC5fbGFzdFNlbGVjdGVkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEl0ZW0ubGlzdEl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5zZWxlY3RlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3Quc2VsZWN0ZWRFdmVudF0sIGl0ZW0sIHZhbCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zLCB0Ll9sYXN0U2VsZWN0ZWRJZCA9PSBudWxsID8gbnVsbCA6ICh0Ll9sYXN0U2VsZWN0ZWRJZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLk1VTFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2xhc3RTZWxlY3RlZElkID0gdC5fc2VsZWN0ZWRJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2VsZWN0ZWRJZCA9IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2wgPSAhaXRlbS5saXN0SXRlbS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5saXN0SXRlbS5zZWxlY3RlZCA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib29sICYmIHN1YiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2godmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghYm9vbCAmJiBzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyksIGJvb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9udW1JdGVtczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnVtSXRlbXM6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWxOdW1JdGVtcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsIHx8IHZhbCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcignbnVtSXRlbXMgc2V0IHRoZSB3cm9uZzo6JywgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9hY3R1YWxOdW1JdGVtcyA9IHQuX251bUl0ZW1zID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0Ll92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0LmN5Y2xpYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcyA9IHQuX2N5Y2xpY051bSAqIHQuX251bUl0ZW1zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gJiYgdC5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY3VyUGFnZU51bSA9IHQubmVhcmVzdExpc3RJZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0LmZpcnN0TGlzdElkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVuZGVyIGEgZmV3IGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IHQuX251bUl0ZW1zID8gdC5fbnVtSXRlbXMgOiB0LmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPCB0Ll9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB2YWw7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmRpc3BsYXlJdGVtTnVtID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2l0ZW1UbXAgJiYgdC5faXRlbVRtcC5pc1ZhbGlkKVxyXG4gICAgICAgICAgICB0Ll9pdGVtVG1wLmRlc3Ryb3koKTtcclxuICAgICAgICBpZiAodC50bXBOb2RlICYmIHQudG1wTm9kZS5pc1ZhbGlkKVxyXG4gICAgICAgICAgICB0LnRtcE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIGxldCB0b3RhbCA9IHQuX3Bvb2wuc2l6ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0Ll9wb29sLnNpemUoKSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHQuX3Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodG90YWwpXHJcbiAgICAgICAgLy8gICAgIGNjLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0nICsgdC5ub2RlLm5hbWUgKyAnPExpc3Q+IGRlc3Ryb3kgbm9kZSB0b3RhbCBudW0uID0+JywgdG90YWwpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICAvLyBpZiAoIUNDX0VESVRPUilcclxuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgLy8gaWYgKCFDQ19FRElUT1IpXHJcbiAgICAgICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICB9LFxyXG4gICAgLy9SZWdpc3RyYXRpb24gRXZlbnRcclxuICAgIF9yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdC5fb25Ub3VjaENhbmNlbGxlZCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsaW5nJywgdC5fb25TY3JvbGxpbmcsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xyXG4gICAgfSxcclxuICAgIC8vVW5yZWdpc3RlciBFdmVudFxyXG4gICAgX3VucmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdC5fb25Ub3VjaFN0YXJ0LCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCd0b3VjaC11cCcsIHQuX29uVG91Y2hVcCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHQuX29uVG91Y2hDYW5jZWxsZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbC1iZWdhbicsIHQuX29uU2Nyb2xsQmVnYW4sIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbC1lbmRlZCcsIHQuX29uU2Nyb2xsRW5kZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoJ3Njcm9sbGluZycsIHQuX29uU2Nyb2xsaW5nLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdC5fb25TaXplQ2hhbmdlZCwgdCk7XHJcbiAgICB9LFxyXG4gICAgLy9Jbml0aWFsaXplIHZhcmlvdXM6XHJcbiAgICBfaW5pdCgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2luaXRlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxWaWV3ID0gdC5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuXHJcbiAgICAgICAgdC5jb250ZW50ID0gdC5fc2Nyb2xsVmlldy5jb250ZW50O1xyXG4gICAgICAgIGlmICghdC5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKHQubm9kZS5uYW1lICsgXCIncyBjYy5TY3JvbGxWaWV3IHVuc2V0IGNvbnRlbnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ll9sYXlvdXQgICAgICAgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcblxyXG4gICAgICAgIHQuX2FsaWduICAgICAgICA9IHQuX2xheW91dC50eXBlOyAvL0FycmFuZ2UgbW9kZVxyXG4gICAgICAgIHQuX3Jlc2l6ZU1vZGUgICA9IHQuX2xheW91dC5yZXNpemVNb2RlOyAvLyBBZGFwdGl2ZSBNb2RlXHJcbiAgICAgICAgdC5fc3RhcnRBeGlzICAgID0gdC5fbGF5b3V0LnN0YXJ0QXhpcztcclxuXHJcbiAgICAgICAgdC5fdG9wR2FwICAgICAgID0gdC5fbGF5b3V0LnBhZGRpbmdUb3A7ICAgICAgIC8vVG9wIG1hcmdpblxyXG4gICAgICAgIHQuX3JpZ2h0R2FwICAgICA9IHQuX2xheW91dC5wYWRkaW5nUmlnaHQ7ICAgLy9SaWdodCBtYXJnaW5cclxuICAgICAgICB0Ll9ib3R0b21HYXAgICAgPSB0Ll9sYXlvdXQucGFkZGluZ0JvdHRvbTsgLy9Cb3R0b20gbWFyZ2luXHJcbiAgICAgICAgdC5fbGVmdEdhcCAgICAgID0gdC5fbGF5b3V0LnBhZGRpbmdMZWZ0OyAgICAgLy9MZWZ0IG1hcmdpblxyXG5cclxuICAgICAgICB0Ll9jb2x1bW5HYXAgICAgPSB0Ll9sYXlvdXQuc3BhY2luZ1g7ICAgICAgLy9Db2x1bW4gc3BhY2luZ1xyXG4gICAgICAgIHQuX2xpbmVHYXAgICAgICA9IHQuX2xheW91dC5zcGFjaW5nWTsgICAgICAgIC8vTGluZSBzcGFjaW5nXHJcblxyXG4gICAgICAgIHQuX2NvbExpbmVOdW07IC8vTnVtYmVyIG9mIGNvbHVtbnMgb3Igcm93cyAoPSAxIGZvciBub24tR1JJRCBtb2RlLCB3aGljaCBtZWFucyBzaW5nbGUgY29sdW1uIG9yIHNpbmdsZSByb3cpO1xyXG5cclxuICAgICAgICB0Ll92ZXJ0aWNhbERpciAgID0gdC5fbGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uOyAvL09yaWVudGF0aW9uIG9mIGNoaWxkIG5vZGVzIHZlcnRpY2FsbHlcclxuICAgICAgICB0Ll9ob3Jpem9udGFsRGlyID0gdC5fbGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb247IC8vT3JpZW50IHRoZSBjaGlsZHJlbiBob3Jpem9udGFsbHlcclxuXHJcbiAgICAgICAgdC5zZXRUZW1wbGF0ZUl0ZW0oY2MuaW5zdGFudGlhdGUodC50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQiA/IHQudG1wUHJlZmFiIDogdC50bXBOb2RlKSk7XHJcblxyXG4gICAgICAgIC8vIFNwZWNpZmljIHNsaWRpbmcgbW9kZSBwcm9jZXNzaW5nXHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcgfHwgdC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuaW5lcnRpYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdC52aXJ0dWFsKSAgICAgICAgIC8vIGxhY2tDZW50ZXIgb25seSBzdXBwb3J0cyBWaXJ0dWFsIG1vZGVcclxuICAgICAgICAgICAgdC5sYWNrQ2VudGVyICAgID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHQuX2xhc3REaXNwbGF5RGF0YSAgPSBbXTsvL0xhc3QgcmVmcmVzaGVkIGRhdGFcclxuICAgICAgICB0LmRpc3BsYXlEYXRhICAgICAgID0gW107ICAgICAvL0N1cnJlbnQgZGF0YVxyXG4gICAgICAgIHQuX3Bvb2wgICAgICAgICAgICAgPSBuZXcgY2MuTm9kZVBvb2woKTsgICAgLy9UaGlzIGlzIGEgcG9vbCAuLi5cclxuICAgICAgICB0Ll9mb3JjZVVwZGF0ZSAgICAgID0gZmFsc2U7IC8vV2hldGhlciB0byBmb3JjZSB1cGRhdGVzXHJcbiAgICAgICAgdC5fdXBkYXRlQ291bnRlciAgICA9IDA7ICAgLy9GcmFtZWQgUmVuZGVyaW5nIEZyYW1lc1xyXG4gICAgICAgIHQuX3VwZGF0ZURvbmUgICAgICAgPSB0cnVlOyAgIC8vV2hldGhlciBmcmFtZWQgcmVuZGVyaW5nIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgdC5jdXJQYWdlTnVtICAgICAgICA9IDA7ICAgLy9DdXJyZW50IHBhZ2UgbnVtYmVyXHJcblxyXG4gICAgICAgIGlmICh0LmN5Y2xpYykgeyAvLyBJZiBpdCBpcyBhIGxvb3AgbGlzdCwgb3ZlcnJpZGUgc29tZSBjYy5TY3JvbGxWaWV3IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3Ll9wcm9jZXNzQXV0b1Njcm9sbGluZyA9IHRoaXMuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nLmJpbmQodCk7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuX3N0YXJ0Qm91bmNlQmFja0lmTmVlZGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDoge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDoge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy8gQ2xlYXIgY29udGVudFxyXG4gICAgICAgIC8vIHQuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAvLyAgICAgY2hpbGQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2hpbGQuaXNWYWxpZClcclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0LmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogSW4gb3JkZXIgdG8gaW1wbGVtZW50IGEgY2lyY3VsYXIgbGlzdCwgc29tZSBmdW5jdGlvbnMgb2YgY2MuU2Nyb2xsVmlldyBtdXN0IGJlIG92ZXJyaWRkZW5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkdFxyXG4gICAgICovXHJcbiAgICBfcHJvY2Vzc0F1dG9TY3JvbGxpbmcoZHQpIHtcclxuICAgICAgICAvLyBsZXQgaXNBdXRvU2Nyb2xsQnJha2UgPSB0aGlzLl9zY3JvbGxWaWV3Ll9pc05lY2Vzc2FyeUF1dG9TY3JvbGxCcmFrZSgpO1xyXG4gICAgICAgIGxldCBicmFraW5nRmFjdG9yID0gMTtcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lICs9IGR0ICogKDEgLyBicmFraW5nRmFjdG9yKTtcclxuXHJcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSBNYXRoLm1pbigxLCB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lIC8gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFRvdGFsVGltZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxBdHRlbnVhdGUpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSBwZXJjZW50YWdlIC0gMTtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZCh0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsVGFyZ2V0RGVsdGEubXVsKHBlcmNlbnRhZ2UpKTtcclxuICAgICAgICBsZXQgRVBTSUxPTiA9IHRoaXMuX3Njcm9sbFZpZXcuZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZygpO1xyXG4gICAgICAgIGxldCByZWFjaGVkRW5kID0gTWF0aC5hYnMocGVyY2VudGFnZSAtIDEpIDw9IEVQU0lMT047XHJcbiAgICAgICAgLy8gY2MubG9nKHJlYWNoZWRFbmQsIE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSwgRVBTSUxPTilcclxuXHJcbiAgICAgICAgbGV0IGZpcmVFdmVudCA9IE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSA8PSB0aGlzLl9zY3JvbGxWaWV3LmdldFNjcm9sbEVuZGVkRXZlbnRUaW1pbmcoKTtcclxuICAgICAgICBpZiAoZmlyZUV2ZW50ICYmICF0aGlzLl9zY3JvbGxWaWV3Ll9pc1Njcm9sbEVuZGVkV2l0aFRocmVzaG9sZEV2ZW50RmlyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fZGlzcGF0Y2hFdmVudCgnc2Nyb2xsLWVuZGVkLXdpdGgtdGhyZXNob2xkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5fc2Nyb2xsVmlldy5lbGFzdGljICYmICFyZWFjaGVkRW5kKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBicmFrZU9mZnNldFBvc2l0aW9uID0gbmV3UG9zaXRpb24uc3ViKHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxCcmFraW5nU3RhcnRQb3NpdGlvbik7XHJcbiAgICAgICAgLy8gICAgIGlmIChpc0F1dG9TY3JvbGxCcmFrZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgYnJha2VPZmZzZXRQb3NpdGlvbiA9IGJyYWtlT2Zmc2V0UG9zaXRpb24ubXVsKGJyYWtpbmdGYWN0b3IpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIG5ld1Bvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbEJyYWtpbmdTdGFydFBvc2l0aW9uLmFkZChicmFrZU9mZnNldFBvc2l0aW9uKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBsZXQgbW92ZURlbHRhID0gbmV3UG9zaXRpb24uc3ViKHRoaXMuX3Njcm9sbFZpZXcuZ2V0Q29udGVudFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuX3Njcm9sbFZpZXcuX2dldEhvd011Y2hPdXRPZkJvdW5kYXJ5KG1vdmVEZWx0YSk7XHJcbiAgICAgICAgLy8gICAgIGlmICghb3V0T2ZCb3VuZGFyeS5mdXp6eUVxdWFscyhjYy52MigwLCAwKSwgRVBTSUxPTikpIHtcclxuICAgICAgICAvLyAgICAgICAgIG5ld1Bvc2l0aW9uID0gbmV3UG9zaXRpb24uYWRkKG91dE9mQm91bmRhcnkpO1xyXG4gICAgICAgIC8vICAgICAgICAgcmVhY2hlZEVuZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChyZWFjaGVkRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkZWx0YU1vdmUgPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5nZXRDb250ZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8gY2MubG9nKGRlbHRhTW92ZSlcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9tb3ZlQ29udGVudCh0aGlzLl9zY3JvbGxWaWV3Ll9jbGFtcERlbHRhKGRlbHRhTW92ZSksIHJlYWNoZWRFbmQpO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2Rpc3BhdGNoRXZlbnQoJ3Njcm9sbGluZycpO1xyXG5cclxuICAgICAgICAvLyBzY29sbFRvIEFQSSBjb250cm9sbCBtb3ZlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2lzQm91bmNpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2Rpc3BhdGNoRXZlbnQoJ3Njcm9sbC1lbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL1NldCB0ZW1wbGF0ZSBJdGVtXHJcbiAgICBzZXRUZW1wbGF0ZUl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICB0Ll9pdGVtVG1wID0gaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3Jlc2l6ZU1vZGUgPT0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ0hJTERSRU4pXHJcbiAgICAgICAgICAgIHQuX2l0ZW1TaXplID0gdC5fbGF5b3V0LmNlbGxTaXplO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdC5faXRlbVNpemUgPSBuZXcgY2Muc2l6ZShpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vR2V0IExpc3RJdGVtLCBvciBkZXNlbGVjdCBtb2RlIGlmIG5vdFxyXG4gICAgICAgIGxldCBjb20gPSBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpO1xyXG4gICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIWNvbSlcclxuICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiAoY29tKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICghY29tLl9idG5Db20gJiYgIWl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHJlbW92ZSkge1xyXG4gICAgICAgICAgICB0LnNlbGVjdGVkTW9kZSA9IFNlbGVjdGVkVHlwZS5OT05FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb20gPSBpdGVtLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIGlmIChjb20gJiYgY29tLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdC5fbmVlZFVwZGF0ZVdpZGdldCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTVVMVClcclxuICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0Ll9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSAxO1xyXG4gICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+WIl+aVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbVcgPSB0LmNvbnRlbnQud2lkdGggLSB0Ll9sZWZ0R2FwIC0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltVyArIHQuX2NvbHVtbkdhcCkgLyAodC5faXRlbVNpemUud2lkdGggKyB0Ll9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+ihjOaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbUggPSB0LmNvbnRlbnQuaGVpZ2h0IC0gdC5fdG9wR2FwIC0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gTWF0aC5mbG9vcigodHJpbUggKyB0Ll9saW5lR2FwKSAvICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKyB0Ll9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgaW5pdGlhbGl6ZWRcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJpbnRMb2cgV2hldGhlciB0byBwcmludCBlcnJvciBtZXNzYWdlc1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgY2hlY2tJbml0ZWQocHJpbnRMb2cpIHtcclxuICAgICAgICBwcmludExvZyA9IHByaW50TG9nID09IG51bGwgPyB0cnVlIDogcHJpbnRMb2c7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHByaW50TG9nKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcignTGlzdCBpbml0aWFsaXphdGlvbiBub3QgY29tcGxldGVkIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgLy9EaXNhYmxlIExheW91dCBjb21wb25lbnQgYW5kIGNhbGN1bGF0ZSBDb250ZW50IHNpemUgYnkgeW91cnNlbGZcclxuICAgIF9yZXNpemVDb250ZW50KCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZCA9IHQuX2dldEZpeGVkU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX2xlZnRHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUud2lkdGggKiAodC5fbnVtSXRlbXMgLSBmaXhlZC5jb3VudCkpICsgKHQuX2NvbHVtbkdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgKHQuX2l0ZW1TaXplLndpZHRoICogdC5fbnVtSXRlbXMpICsgKHQuX2NvbHVtbkdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0Ll9nZXRGaXhlZFNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyBmaXhlZC52YWwgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll90b3BHYXAgKyAodC5faXRlbVNpemUuaGVpZ2h0ICogdC5fbnVtSXRlbXMpICsgKHQuX2xpbmVHYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcclxuICAgICAgICAgICAgICAgIC8vR3JpZCBtb2RlIGRvZXMgbm90IHN1cHBvcnQgY2VudGVyaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAodC5sYWNrQ2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHQubGFja0NlbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9zdGFydEF4aXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lTnVtID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiBsaW5lTnVtKSArICh0Ll9saW5lR2FwICogKGxpbmVOdW0gLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xOdW0gPSBNYXRoLmNlaWwodC5fbnVtSXRlbXMgLyB0Ll9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIGNvbE51bSkgKyAodC5fY29sdW1uR2FwICogKGNvbE51bSAtIDEpKSArIHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGF5b3V0ID0gdC5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xyXG4gICAgICAgIGlmIChsYXlvdXQpXHJcbiAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHQuX2FsbEl0ZW1TaXplID0gcmVzdWx0O1xyXG4gICAgICAgIHQuX2FsbEl0ZW1TaXplTm9FZGdlID0gdC5fYWxsSXRlbVNpemUgLSAodC5fc2l6ZVR5cGUgPyAodC5fdG9wR2FwICsgdC5fYm90dG9tR2FwKSA6ICh0Ll9sZWZ0R2FwICsgdC5fcmlnaHRHYXApKTtcclxuXHJcbiAgICAgICAgaWYgKHQuY3ljbGljKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFNpemUgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczEgPSAwO1xyXG4gICAgICAgICAgICB0b3RhbFNpemUgLT0gdC5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgdC5fY3ljbGljTnVtID0gTWF0aC5jZWlsKHRvdGFsU2l6ZSAvIHQuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nID0gdC5fc2l6ZVR5cGUgPyB0Ll9saW5lR2FwIDogdC5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICB0Ll9jeWNsaWNQb3MyID0gdC5fY3ljbGljUG9zMSArIHQuX2FsbEl0ZW1TaXplTm9FZGdlICsgc3BhY2luZztcclxuICAgICAgICAgICAgdC5fY3ljbGljQWxsSXRlbVNpemUgPSB0Ll9hbGxJdGVtU2l6ZSArICh0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqICh0Ll9jeWNsaWNOdW0gLSAxKSkgKyAoc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKSk7XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlID0gdC5fYWxsSXRlbVNpemVOb0VkZ2UgKiB0Ll9jeWNsaWNOdW07XHJcbiAgICAgICAgICAgIHQuX2N5Y2lsY0FsbEl0ZW1TaXplTm9FZGdlICs9IHNwYWNpbmcgKiAodC5fY3ljbGljTnVtIC0gMSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnX2N5Y2xpY051bSAtPicsIHQuX2N5Y2xpY051bSwgdC5fYWxsSXRlbVNpemVOb0VkZ2UsIHQuX2FsbEl0ZW1TaXplLCB0Ll9jeWNsaWNQb3MxLCB0Ll9jeWNsaWNQb3MyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuX2xhY2sgPSAhdC5jeWNsaWMgJiYgdC5fYWxsSXRlbVNpemUgPCAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgc2xpZGVPZmZzZXQgPSAoKCF0Ll9sYWNrIHx8ICF0LmxhY2tDZW50ZXIpICYmIHQubGFja1NsaWRlKSA/IDAgOiAuMTtcclxuXHJcbiAgICAgICAgbGV0IHRhcmdldFdIID0gdC5fbGFjayA/ICgodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAtIHNsaWRlT2Zmc2V0KSA6ICh0LmN5Y2xpYyA/IHQuX2N5Y2xpY0FsbEl0ZW1TaXplIDogdC5fYWxsSXRlbVNpemUpO1xyXG4gICAgICAgIGlmICh0YXJnZXRXSCA8IDApXHJcbiAgICAgICAgICAgIHRhcmdldFdIID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHQuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIHQuY29udGVudC5oZWlnaHQgPSB0YXJnZXRXSDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQud2lkdGggPSB0YXJnZXRXSDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKCdfcmVzaXplQ29udGVudCgpICBudW1JdGVtcyA9JywgdC5fbnVtSXRlbXMsICfvvIxjb250ZW50ID0nLCB0LmNvbnRlbnQpO1xyXG4gICAgfSxcclxuICAgIC8vV2hpbGUgc2Nyb2xsaW5nIC4uLlxyXG4gICAgX29uU2Nyb2xsaW5nKGV2KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG4gICAgICAgIGlmICghdGhpcy5fZm9yY2VVcGRhdGUgJiYgKGV2ICYmIGV2LnR5cGUgIT0gJ3Njcm9sbC1lbmRlZCcpICYmIHRoaXMuZnJhbWVDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50LS07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gdGhpcy5fdXBkYXRlUmF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaURlbFJ1bmluZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL+W+queOr+WIl+ihqOWkhOeQhlxyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xpYykge1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsUG9zID0gdGhpcy5jb250ZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvcyA9IHRoaXMuX3NpemVUeXBlID8gc2Nyb2xsUG9zLnkgOiBzY3JvbGxQb3MueDtcclxuXHJcbiAgICAgICAgICAgIGxldCBhZGRWYWwgPSB0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSArICh0aGlzLl9zaXplVHlwZSA/IHRoaXMuX2xpbmVHYXAgOiB0aGlzLl9jb2x1bW5HYXApO1xyXG4gICAgICAgICAgICBsZXQgYWRkID0gdGhpcy5fc2l6ZVR5cGUgPyBjYy52MigwLCBhZGRWYWwpIDogY2MudjIoYWRkVmFsLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2JlZ2FuUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl9iZWdhblBvcyArPSBhZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gLXRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgLT0gYWRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5fY3ljbGljUG9zMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPiB0aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gdGhpcy5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24uYWRkKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5zdWIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IC10aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlldy5fYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24gPSB0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbi5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3AsIHZSaWdodCwgdkJvdHRvbSwgdkxlZnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIHZUb3AgPSB0aGlzLnZpZXdUb3A7XHJcbiAgICAgICAgICAgIHZCb3R0b20gPSB0aGlzLnZpZXdCb3R0b207XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdlJpZ2h0ID0gdGhpcy52aWV3UmlnaHQ7XHJcbiAgICAgICAgICAgIHZMZWZ0ID0gdGhpcy52aWV3TGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Qb3M7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VySWQgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZW5kSWQgPSB0aGlzLl9udW1JdGVtcyAtIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJyZWFrRm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBpdGVtJ3MgcG9zaXRpb24gaXMgd2l0aGluIHRoZSB2aXNpYmxlIGFyZWEsIHB1c2ggaXQgaW4gZGlzcGxheURhdGFcclxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJJZCA8PSBlbmRJZCAmJiAhYnJlYWtGb3I7IGN1cklkKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUG9zID0gdGhpcy5fY2FsY0l0ZW1Qb3MoY3VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MucmlnaHQgPj0gdkxlZnQgJiYgaXRlbVBvcy5sZWZ0IDw9IHZSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEucHVzaChpdGVtUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLmJvdHRvbSA8PSB2VG9wICYmIGl0ZW1Qb3MudG9wID49IHZCb3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5ib3R0b20gPD0gdlRvcCAmJiBpdGVtUG9zLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5yaWdodCA+PSB2TGVmdCAmJiBpdGVtUG9zLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VySWQgIT0gMCAmJiB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCB3dyA9IHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhoID0gdGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcDtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKHZMZWZ0ICsgdGhpcy5fbGVmdEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAodlJpZ2h0ICsgdGhpcy5fcmlnaHRHYXApIC8gd3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKC12UmlnaHQgLSB0aGlzLl9yaWdodEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZMZWZ0IC0gdGhpcy5fbGVmdEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZUb3AgLSB0aGlzLl90b3BHYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKC12Qm90dG9tIC0gdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly/ljZXliJdWRVJUSUNBTO+8iEJPVFRPTV9UT19UT1DvvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIQk9UVE9NX1RPX1RPUO+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICh2Qm90dG9tICsgdGhpcy5fYm90dG9tR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2VG9wICsgdGhpcy5fdG9wR2FwKSAvIGhoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cklkID0gTWF0aC5mbG9vcihjdXJJZCkgKiB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgZW5kSWQgPSBNYXRoLmNlaWwoZW5kSWQpICogdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgIGVuZElkLS07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VySWQgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChlbmRJZCA+PSB0aGlzLl9udW1JdGVtcylcclxuICAgICAgICAgICAgICAgICAgICBlbmRJZCA9IHRoaXMuX251bUl0ZW1zIC0gMTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhjdXJJZCwgZW5kSWQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cklkIDw9IGVuZElkOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPD0gMCB8fCAhdGhpcy5fbnVtSXRlbXMpIHsgLy9pZiBub25lLCBkZWxldGUgYWxsLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maXJzdExpc3RJZCA9IHRoaXMuZGlzcGxheURhdGFbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUl0ZW1OdW0gPSB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLl9sYXN0RGlzcGxheURhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaGF2ZURhdGFDaGFuZ2UgPSB0aGlzLmRpc3BsYXlJdGVtTnVtICE9IGxlbjtcclxuICAgICAgICAgICAgaWYgKGhhdmVEYXRhQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/pgJDluKfmuLLmn5PvvIzpnIDopoHmjpLluo9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlm6BMaXN055qE5pi+56S65pWw5o2u5piv5pyJ5bqP55qE77yM5omA5Lul5Y+q6ZyA6KaB5Yik5pat5pWw57uE6ZW/5bqm5piv5ZCm55u4562J77yM5Lul5Y+K5aS044CB5bC+5Lik5Liq5YWD57Sg5piv5ZCm55u4562J5Y2z5Y+v44CCXHJcbiAgICAgICAgICAgICAgICBoYXZlRGF0YUNoYW5nZSA9IHRoaXMuZmlyc3RMaXN0SWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhWzBdIHx8IHRoaXMuZGlzcGxheURhdGFbdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFdLmlkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVtsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlIHx8IGhhdmVEYXRhQ2hhbmdlKSB7ICAgIC8v5aaC5p6c5piv5by65Yi25pu05pawXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3VwZGF0ZURvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvL+mAkOW4p+a4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9udW1JdGVtcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91cGRhdGVEb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ebtOaOpea4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnTGlzdCBEaXNwbGF5IERhdGEgSUk6OicsIHRoaXMuZGlzcGxheURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5kaXNwbGF5SXRlbU51bTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbSh0aGlzLmRpc3BsYXlEYXRhW2NdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9DYWxjdWxhdGUgVmlldyBQb3NpdGlvblxyXG4gICAgX2NhbGNWaWV3UG9zKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3MgPSB0aGlzLmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSBzY3JvbGxQb3MueCA+IDAgPyBzY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdMZWZ0ID0gKHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDApIC0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1JpZ2h0ID0gdGhpcy52aWV3TGVmdCArIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1JpZ2h0ID0gdGhpcy52aWV3UmlnaHQgPiB0aGlzLmNvbnRlbnQud2lkdGggPyBNYXRoLmFicyh0aGlzLnZpZXdSaWdodCAtIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgKz0gdGhpcy5lbGFzdGljUmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljTGVmdCwgdGhpcy5lbGFzdGljUmlnaHQsIHRoaXMudmlld0xlZnQsIHRoaXMudmlld1JpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSBzY3JvbGxQb3MueCA8IDAgPyAtc2Nyb2xsUG9zLnggOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSAoc2Nyb2xsUG9zLnggPiAwID8gLXNjcm9sbFBvcy54IDogMCkgKyB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSB0aGlzLnZpZXdSaWdodCAtIHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0xlZnQgPSB0aGlzLnZpZXdMZWZ0IDwgLXRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld0xlZnQgKyB0aGlzLmNvbnRlbnQud2lkdGgpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgLT0gdGhpcy5lbGFzdGljTGVmdDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL+WNleWIl1ZFUlRJQ0FM77yIVE9QX1RPX0JPVFRPTe+8ieOAgee9keagvEhPUklaT05UQUzvvIhUT1BfVE9fQk9UVE9N77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNUb3AgPSBzY3JvbGxQb3MueSA8IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wID0gKHNjcm9sbFBvcy55ID4gMCA/IC1zY3JvbGxQb3MueSA6IDApICsgdGhpcy5lbGFzdGljVG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gdGhpcy52aWV3VG9wIC0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHRoaXMudmlld0JvdHRvbSA8IC10aGlzLmNvbnRlbnQuaGVpZ2h0ID8gTWF0aC5hYnModGhpcy52aWV3Qm90dG9tICsgdGhpcy5jb250ZW50LmhlaWdodCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tICs9IHRoaXMuZWxhc3RpY0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNUb3AsIHRoaXMuZWxhc3RpY0JvdHRvbSwgdGhpcy52aWV3VG9wLCB0aGlzLnZpZXdCb3R0b20pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNCb3R0b20gPSBzY3JvbGxQb3MueSA+IDAgPyBNYXRoLmFicyhzY3JvbGxQb3MueSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Qm90dG9tID0gKHNjcm9sbFBvcy55IDwgMCA/IC1zY3JvbGxQb3MueSA6IDApIC0gdGhpcy5lbGFzdGljQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3VG9wID0gdGhpcy52aWV3Qm90dG9tICsgdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1RvcCA9IHRoaXMudmlld1RvcCA+IHRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdUb3AgLSB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgLT0gdGhpcy5lbGFzdGljVG9wO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0SXRlbUhlaWdodChpZCkge1xyXG5cclxuICAgIH0sXHJcbiAgICAvL0NhbGN1bGF0ZSBsb2NhdGlvbiBiYXNlZCBvbiBpZFxyXG4gICAgX2NhbGNJdGVtUG9zKGlkKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoLCBoZWlnaHQsIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgaXRlbVgsIGl0ZW1ZO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2NvbHVtbkdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5jb250ZW50LndpZHRoIC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB3aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpIC0gKGZpeGVkLnZhbCArICh0aGlzLl9jb2x1bW5HYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuY29udGVudC53aWR0aCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0IC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogd2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbVRtcC55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IC10aGlzLl90b3BHYXAgLSAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fbGluZUdhcCAqIGZpeGVkLmNvdW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3MgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5jb250ZW50LmhlaWdodCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tIC09IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5CT1RUT01fVE9fVE9QOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQgPSB0aGlzLl9nZXRGaXhlZFNpemUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgKyAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5jb250ZW50LmhlaWdodCAvIDIpIC0gKHRoaXMuX2FsbEl0ZW1TaXplTm9FZGdlIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tICs9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2l0ZW1UbXAueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiBoZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sTGluZSA9IE1hdGguZmxvb3IoaWQgLyB0aGlzLl9jb2xMaW5lTnVtKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRvcCAtIHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSA9IGJvdHRvbSArICh0aGlzLl9pdGVtVG1wLmFuY2hvclkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IHRoaXMuX2xlZnRHYXAgKyAoKGlkICUgdGhpcy5fY29sTGluZU51bSkgKiAodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclgpICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBib3R0b20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGNvbExpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YID0gbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB0aGlzLl9pdGVtU2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggLT0gKHRoaXMuY29udGVudC5hbmNob3JYICogdGhpcy5jb250ZW50LndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uUklHSFRfVE9fTEVGVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gcmlnaHQgLSB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JYKSAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSAtdGhpcy5fdG9wR2FwIC0gKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgoMSAtIHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICgoMSAtIHRoaXMuY29udGVudC5hbmNob3JZKSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZIC09ICgodGhpcy5faXRlbVRtcC5hbmNob3JZKSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKz0gKHRoaXMuY29udGVudC5hbmNob3JZICogdGhpcy5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBpdGVtWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGl0ZW1ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiBhbiBleGlzdGluZyBpdGVtXHJcbiAgICBfY2FsY0V4aXN0SXRlbVBvcyhpZCkge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQoaWQpO1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgeDogaXRlbS54LFxyXG4gICAgICAgICAgICB5OiBpdGVtLnksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xyXG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IGl0ZW0ueSAtIChpdGVtLmhlaWdodCAqIGl0ZW0uYW5jaG9yWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gaXRlbS54ICsgKGl0ZW0ud2lkdGggKiAoMSAtIGl0ZW0uYW5jaG9yWCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcbiAgICAvL0dldCBJdGVtIFBvc2l0aW9uXHJcbiAgICBnZXRJdGVtUG9zKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyhpZCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyhpZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9HZXQgZml4ZWQgc2l6ZVxyXG4gICAgX2dldEZpeGVkU2l6ZShsaXN0SWQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2N1c3RvbVNpemUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChsaXN0SWQgPT0gbnVsbClcclxuICAgICAgICAgICAgbGlzdElkID0gdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAgICAgbGV0IGZpeGVkID0gMDtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlkKSA8IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgZml4ZWQgKz0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbDogZml4ZWQsXHJcbiAgICAgICAgICAgIGNvdW50OiBjb3VudCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9XaGVuIHNjcm9sbGluZyBzdGFydHM6XHJcbiAgICBfb25TY3JvbGxCZWdhbigpIHtcclxuICAgICAgICB0aGlzLl9iZWdhblBvcyA9IHRoaXMuX3NpemVUeXBlID8gdGhpcy52aWV3VG9wIDogdGhpcy52aWV3TGVmdDtcclxuICAgIH0sXHJcbiAgICAvL1doZW4gc2Nyb2xsaW5nIGVuZHM6XHJcbiAgICBfb25TY3JvbGxFbmRlZCgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuc2Nyb2xsVG9MaXN0SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuc2Nyb2xsVG9MaXN0SWQpO1xyXG4gICAgICAgICAgICB0LnNjcm9sbFRvTGlzdElkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKG5ldyBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBuZXcgY2Muc2NhbGVUbyguMSwgMS4wNiksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGNjLnNjYWxlVG8oLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV3IGNjLmNhbGxGdW5jKGZ1bmN0aW9uIChydW5Ob2RlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG5cclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORyAmJiAhdC5hZGhlcmluZykge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyh0LmFkaGVyaW5nLCB0Ll9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpLCB0Ll9zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpO1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIFdoZW4gdG91Y2hlZFxyXG4gICAgX29uVG91Y2hTdGFydChldiwgY2FwdHVyZUxpc3RlbmVycykge1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3Ll9oYXNOZXN0ZWRWaWV3R3JvdXAoZXYsIGNhcHR1cmVMaXN0ZW5lcnMpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGlzTWUgPSBldi5ldmVudFBoYXNlID09PSBjYy5FdmVudC5BVF9UQVJHRVQgJiYgZXYudGFyZ2V0ID09PSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaWYgKCFpc01lKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZSA9IGV2LnRhcmdldDtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZW1Ob2RlLl9saXN0SWQgPT0gbnVsbCAmJiBpdGVtTm9kZS5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICBpdGVtTm9kZSA9IGl0ZW1Ob2RlLnBhcmVudDtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsSXRlbSA9IGl0ZW1Ob2RlLl9saXN0SWQgIT0gbnVsbCA/IGl0ZW1Ob2RlIDogZXYudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL1doZW4gdG91Y2hlZDpcclxuICAgIF9vblRvdWNoVXAoKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIHQuX3Njcm9sbFBvcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcpIHtcclxuICAgICAgICAgICAgaWYgKHQuYWRoZXJpbmcpXHJcbiAgICAgICAgICAgICAgICB0Ll9hZGhlcmluZ0JhcnJpZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBfb25Ub3VjaENhbmNlbGxlZChldiwgY2FwdHVyZUxpc3RlbmVycykge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAodC5fc2Nyb2xsVmlldy5faGFzTmVzdGVkVmlld0dyb3VwKGV2LCBjYXB0dXJlTGlzdGVuZXJzKSB8fCBldi5zaW11bGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICh0LmFkaGVyaW5nKVxyXG4gICAgICAgICAgICAgICAgdC5fYWRoZXJpbmdCYXJyaWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdC5fcGFnZUFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zY3JvbGxJdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICAvLyBXaGVuIHRoZSBzaXplIGNoYW5nZXNcclxuICAgIF9vblNpemVDaGFuZ2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrSW5pdGVkKGZhbHNlKSlcclxuICAgICAgICAgICAgdGhpcy5fb25TY3JvbGxpbmcoKTtcclxuICAgIH0sXHJcbiAgICAvL1doZW4gSXRlbSBpcyBhZGFwdGl2ZVxyXG4gICAgX29uSXRlbUFkYXB0aXZlKGl0ZW0pIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5jaGVja0luaXRlZChmYWxzZSkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICghdGhpcy5fc2l6ZVR5cGUgJiYgaXRlbS53aWR0aCAhPSB0aGlzLl9pdGVtU2l6ZS53aWR0aClcclxuICAgICAgICAgICAgfHwgKHRoaXMuX3NpemVUeXBlICYmIGl0ZW0uaGVpZ2h0ICE9IHRoaXMuX2l0ZW1TaXplLmhlaWdodClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21TaXplKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5fc2l6ZVR5cGUgPyBpdGVtLmhlaWdodCA6IGl0ZW0ud2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gIT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fdXBkYXRlSXRlbVBvcyhjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3mraPlnKjov5DooYwgc2Nyb2xsVG/vvIzogq/lrprkvJrkuI3lh4bnoa7vvIzlnKjov5nph4zlgZrkv67mraNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxUb0xpc3RJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5fc2Nyb2xsVG9Tbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLl9zY3JvbGxUb0xpc3RJZCwgTWF0aC5tYXgoMCwgdGhpcy5fc2Nyb2xsVG9FbmRUaW1lIC0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICAvL1BBR0UgY29uZmlnXHJcbiAgICBfcGFnZUFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmN5Y2xpYyAmJiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgY3VyUG9zID0gdC5fc2l6ZVR5cGUgPyB0LnZpZXdUb3AgOiB0LnZpZXdMZWZ0O1xyXG4gICAgICAgIGxldCBkaXMgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAqIHQucGFnZURpc3RhbmNlO1xyXG4gICAgICAgIGxldCBjYW5Ta2lwID0gTWF0aC5hYnModC5fYmVnYW5Qb3MgLSBjdXJQb3MpID4gZGlzO1xyXG4gICAgICAgIGlmIChjYW5Ta2lwKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lSW5TZWNvbmQgPSAuNTtcclxuICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPiBjdXJQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnX3BhZ2VBZGhlcmUgICBQUFBQUFBQUFBQUFBQUFAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnX3BhZ2VBZGhlcmUgICBOTk5OTk5OTk5OTk5OTk4nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyA8IGN1clBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0LnByZVBhZ2UodGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0LmVsYXN0aWNUb3AgPD0gMCAmJiB0LmVsYXN0aWNSaWdodCA8PSAwICYmIHQuZWxhc3RpY0JvdHRvbSA8PSAwICYmIHQuZWxhc3RpY0xlZnQgPD0gMCkge1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9iZWdhblBvcyA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgLy9jb25maWdcclxuICAgIGFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHQuYWRoZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGlmICghdC5fdmlydHVhbClcclxuICAgICAgICB0Ll9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gKHQuX3NpemVUeXBlID8gdC5fdG9wR2FwIDogdC5fbGVmdEdhcCkgLyAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgdGltZUluU2Vjb25kID0gLjc7XHJcbiAgICAgICAgdC5zY3JvbGxUbyh0Lm5lYXJlc3RMaXN0SWQsIHRpbWVJblNlY29uZCwgb2Zmc2V0KTtcclxuICAgIH0sXHJcbiAgICAvL1VwZGF0ZS4uXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtIDw9IDAgfHwgdGhpcy5fdXBkYXRlRG9uZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aCwgdGhpcy5fdXBkYXRlQ291bnRlciwgdGhpcy5kaXNwbGF5RGF0YVt0aGlzLl91cGRhdGVDb3VudGVyXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgbGV0IGxlbiA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5kaXNwbGF5SXRlbU51bSA/IHRoaXMuZGlzcGxheUl0ZW1OdW0gOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRpc3BsYXlEYXRhW25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA+PSB0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMSkgeyAvL+acgOWQjuS4gOS4qlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RvbmVBZnRlclVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuX3Njcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPCB0aGlzLl9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbiA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5fbnVtSXRlbXMgPyB0aGlzLl9udW1JdGVtcyA6ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IHRoaXMuX3VwZGF0ZUNvdW50ZXI7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgb3IgdXBkYXRlIEl0ZW0gKGZvciB2aXJ0dWFsIGxpc3QpXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbUJ5TGlzdElkKGRhdGEuaWQpO1xyXG4gICAgICAgIGlmICghaXRlbSkgeyAvL0lmIG5vdCBwcmVzZW50XHJcbiAgICAgICAgICAgIGxldCBjYW5HZXQgPSB0aGlzLl9wb29sLnNpemUoKSA+IDA7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCdSZW1vdmUgZnJvbSB0aGUgcG9vbCA6OiBvbGQgaWQgPSAnLCBpdGVtLl9saXN0SWQsJywgbmV3IGlkID0gJywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ05ldyA6OicsIGRhdGEuaWQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLl9saXN0SWQgIT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0Q29udGVudFNpemUodGhpcy5faXRlbVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0UG9zaXRpb24obmV3IGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGNhbkdldCAmJiB0aGlzLl9uZWVkVXBkYXRlV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkZ2V0ID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U2libGluZ0luZGV4KHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICBpdGVtLmxpc3RJdGVtID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX2xpc3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL0ZvcmNlIHVwZGF0ZVxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKG5ldyBjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coJ0FERDo6JywgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBkYXRhLmlkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RJdGVtKGl0ZW0ubGlzdEl0ZW0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGEuaW5kZXhPZihkYXRhLmlkKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnB1c2goZGF0YS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vQ3JlYXRlIG9yIHVwZGF0ZSBJdGVtIChmb3Igbm9uLXZpcnR1YWwgbGlzdHMpXHJcbiAgICBfY3JlYXRlT3JVcGRhdGVJdGVtMihsaXN0SWQpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltsaXN0SWRdO1xyXG4gICAgICAgIGlmICghaXRlbSkgeyAvL0lmIG5vdCBwcmVzZW50XHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICAgICAgaXRlbS5saXN0SXRlbSA9IGxpc3RJdGVtO1xyXG4gICAgICAgICAgICBpZiAobGlzdEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLl9saXN0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLl9yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGxpc3RJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlICYmIHRoaXMucmVuZGVyRXZlbnQpIHsgLy9Gb3JjZSB1cGRhdGVcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgbGlzdElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShpdGVtLmxpc3RJdGVtKTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdERpc3BsYXlEYXRhLmluZGV4T2YobGlzdElkKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnB1c2gobGlzdElkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIF91cGRhdGVMaXN0SXRlbShsaXN0SXRlbSkge1xyXG4gICAgICAgIGlmICghbGlzdEl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5TSU5HTEU6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWQgPT0gbGlzdEl0ZW0ubm9kZS5fbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdEl0ZW0ubm9kZS5fbGlzdElkKSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vRm9yIHZpcnR1YWwgbGlzdHMgb25seVxyXG4gICAgX3Jlc2V0SXRlbVNpemUoaXRlbSkge1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICBsZXQgc2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5fY3VzdG9tU2l6ZSAmJiB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0pIHtcclxuICAgICAgICAgICAgc2l6ZSA9IHRoaXMuX2N1c3RvbVNpemVbaXRlbS5fbGlzdElkXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY29sTGluZU51bSA+IDEpXHJcbiAgICAgICAgICAgICAgICBpdGVtLnNldENvbnRlbnRTaXplKHRoaXMuX2l0ZW1TaXplKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuX3NpemVUeXBlID8gdGhpcy5faXRlbVNpemUuaGVpZ2h0IDogdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaXplVHlwZSlcclxuICAgICAgICAgICAgICAgIGl0ZW0uaGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaXRlbS53aWR0aCA9IHNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIEl0ZW0gUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfHxOb2RlfSBsaXN0SWRPckl0ZW1cclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZUl0ZW1Qb3MobGlzdElkT3JJdGVtKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBpc05hTihsaXN0SWRPckl0ZW0pID8gbGlzdElkT3JJdGVtIDogdGhpcy5nZXRJdGVtQnlMaXN0SWQobGlzdElkT3JJdGVtKTtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRJdGVtUG9zKGl0ZW0uX2xpc3RJZCk7XHJcbiAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogU2V0IG11bHRpcGxlIHNlbGVjdGlvblxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyBjYW4gYmUgYSBzaW5nbGUgbGlzdElkIG9yIGFuIGFycmF5IG9mIGxpc3RJZHNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm9vbCB2YWx1ZSwgaWYgbnVsbCwgZGlyZWN0bHkgb3ZlcndyaXRlIHdpdGggYXJnc1xyXG4gICAgICovXHJcbiAgICBzZXRNdWx0U2VsZWN0ZWQoYXJncywgYm9vbCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9vbCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkID0gYXJncztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGlzdElkLCBzdWI7XHJcbiAgICAgICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnB1c2gobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHNwZWNpZmllZCBJdGVtXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzIHNpbmdsZSBsaXN0SWQsIG9yIGFycmF5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVJdGVtKGFyZ3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xyXG4gICAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBuID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdElkID0gYXJnc1tuXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgbGlzdElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIGFsbFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLm51bUl0ZW1zID0gdGhpcy5udW1JdGVtcztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEdldCBJdGVtIGJ5IExpc3RJRFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCkge1xyXG4gICAgICAgIGZvciAobGV0IG4gPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW5Db3VudCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bbl0uX2xpc3RJZCA9PSBsaXN0SWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50LmNoaWxkcmVuW25dO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEdldCBJdGVtIG91dHNpZGUgdGhlIGRpc3BsYXkgYXJlYVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgX2dldE91dHNpZGVJdGVtKCkge1xyXG4gICAgICAgIGxldCBpdGVtO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBuID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5jb250ZW50LmNoaWxkcmVuW25dO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGxheURhdGEuZmluZChkID0+IGQuaWQgPT0gaXRlbS5fbGlzdElkKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICAvL0RlbGV0ZSBpdGVtcyBvdXRzaWRlIHRoZSBkaXNwbGF5IGFyZWFcclxuICAgIF9kZWxSZWR1bmRhbnRJdGVtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLl9nZXRPdXRzaWRlSXRlbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gYXJyLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGFycltuXTtcclxuICAgICAgICAgICAgICAgIC8vIOWKoOi/meS4gOWPpeaYr+S4uuS6humYsuatouaLluWKqOaXtuiiq+WNoeS9jy4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbEl0ZW0gJiYgaXRlbS5fbGlzdElkID09IHRoaXMuX3Njcm9sbEl0ZW0uX2xpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wucHV0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbSA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGggLSAxOyBtID49IDA7IG0tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sYXN0RGlzcGxheURhdGFbbV0gPT0gaXRlbS5fbGlzdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5zcGxpY2UobSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5sb2coJ+WtmOWFpTo6Jywgc3RyLCAnICAgIHBvb2wubGVuZ3RoID0nLCB0aGlzLl9wb29sLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50ID4gdGhpcy5fbnVtSXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbFNpbmdsZUl0ZW0odGhpcy5jb250ZW50LmNoaWxkcmVuW3RoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vRGVsZXRlIGEgc2luZ2xlIEl0ZW1cclxuICAgIF9kZWxTaW5nbGVJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBjYy5sb2coJ0RFTDo6JywgaXRlbS5fbGlzdElkLCBpdGVtKTtcclxuICAgICAgICBpdGVtLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAoaXRlbS5kZXN0cm95KVxyXG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICBpdGVtID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIER5bmFtaWMgZGVsZXRpb24gb2YgSXRlbSAodGhpcyBtZXRob2QgaXMgb25seSBhcHBsaWNhYmxlIHRvIHZpcnR1YWwgbGlzdHMsIHRoYXQgaXMsIF92aXJ0dWFsID0gdHJ1ZSlcclxuICAgICAqIEJlIHN1cmUgdG8gcmVzZXQgdGhlIG5ldyBudW1JdGVtcyBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVmcmVzaCwgYWZ0ZXIgYWxsLCB0aGlzIExpc3QgaXMgZGF0YSBkcml2ZW4uXHJcbiAgICAgKi9cclxuICAgIGFuaURlbEl0ZW0obGlzdElkLCBjYWxsRnVuYywgYW5pVHlwZSkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkgfHwgdC5jeWNsaWMgfHwgIXQuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQhJyk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9hbmlEZWxSdW5pbmcpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy53YXJuKCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIScpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYW5pRGVsUnVuaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgY3VyTGFzdElkID0gdC5kaXNwbGF5RGF0YVt0LmRpc3BsYXlEYXRhLmxlbmd0aCAtIDFdLmlkO1xyXG4gICAgICAgIGxldCByZXNldFNlbGVjdGVkSWQgPSBpdGVtLmxpc3RJdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgIGl0ZW0ubGlzdEl0ZW0uc2hvd0FuaShhbmlUeXBlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v5Yik5pat5pyJ5rKh5pyJ5LiL5LiA5Liq77yM5aaC5p6c5pyJ55qE6K+d77yM5Yib5bu657KX5p2lXHJcbiAgICAgICAgICAgIGxldCBuZXdJZDtcclxuICAgICAgICAgICAgaWYgKGN1ckxhc3RJZCA8IHQuX251bUl0ZW1zIC0gMikge1xyXG4gICAgICAgICAgICAgICAgbmV3SWQgPSBjdXJMYXN0SWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGF0YSA9IHQuX2NhbGNJdGVtUG9zKG5ld0lkKTtcclxuICAgICAgICAgICAgICAgIHQuZGlzcGxheURhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll92aXJ0dWFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbShuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG5ld0lkKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcy0tO1xyXG4gICAgICAgICAgICBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodC5fc2VsZWN0ZWRJZCAtIDEgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTVVMVCAmJiB0Lm11bHRTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdWIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgdG1wO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1YiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQuc3BsaWNlKHN1YiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WkmumAieeahOaVsOaNru+8jOWcqOWFtuWQjueahOWFqOmDqOWHj+S4gFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IHQubXVsdFNlbGVjdGVkLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdC5tdWx0U2VsZWN0ZWRbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID49IGxpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWRbbl0tLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemVbbGlzdElkXSlcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdC5fY3VzdG9tU2l6ZVtsaXN0SWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0N1c3RvbVNpemUgPSB7fTtcclxuICAgICAgICAgICAgICAgIGxldCBzaXplO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gdC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSB0Ll9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpZCA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdXN0b21TaXplW2lkIC0gKGlkID49IGxpc3RJZCA/IDEgOiAwKV0gPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IG5ld0N1c3RvbVNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lkI7pnaLnmoRJdGVt5ZCR5YmN5oC855qE5Yqo5pWIXHJcbiAgICAgICAgICAgIGxldCBzZWMgPSAuMjMzMztcclxuICAgICAgICAgICAgbGV0IGFjdHMsIGhhdmVDQjtcclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IG5ld0lkICE9IG51bGwgPyBuZXdJZCA6IGN1ckxhc3RJZDsgbiA+PSBsaXN0SWQgKyAxOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZChuKTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvc0RhdGEgPSB0Ll9jYWxjSXRlbVBvcyhuIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLm1vdmVUbyhzZWMsIG5ldyBjYy52Mihwb3NEYXRhLngsIHBvc0RhdGEueSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPD0gbGlzdElkICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlQ0IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RzLnB1c2gobmV3IGNjLkNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0cy5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bkFjdGlvbihuZXcgY2MuU2VxdWVuY2UoYWN0cykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oYWN0c1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXZlQ0IpIHtcclxuICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogU2Nyb2xsIHRvOlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZCBJbmRleCAoaWYgPDAsIHNjcm9sbCB0byB0aGUgZmlyc3QgSXRlbSBwb3NpdGlvbiwgaWY+ID0gXyBudW1JdGVtcywgc2Nyb2xsIHRvIHRoZSBsYXN0IEl0ZW0gcG9zaXRpb24pXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZUluU2Vjb25kIHRpbWVcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgSW5kZXggdGFyZ2V0IHBvc2l0aW9uIG9mZnNldCwgMC0xXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJTdHJlc3MgV2hldGhlciB0byBlbXBoYXNpemUgdGhlIGl0ZW0gYWZ0ZXIgc2Nyb2xsaW5nICh0aGlzIGlzIGp1c3QgYW4gZXhwZXJpbWVudGFsIGZlYXR1cmUpXHJcbiAgICAgKi9cclxuICAgIHNjcm9sbFRvKGxpc3RJZCwgdGltZUluU2Vjb25kLCBvZmZzZXQsIG92ZXJTdHJlc3MpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKHRpbWVJblNlY29uZCA9PSBudWxsKSAgIC8v6buY6K6kMC41XHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgIGVsc2UgaWYgKHRpbWVJblNlY29uZCA8IDApXHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IDA7XHJcbiAgICAgICAgaWYgKGxpc3RJZCA8IDApXHJcbiAgICAgICAgICAgIGxpc3RJZCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAobGlzdElkID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSB0Ll9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgLy8gSnVzdCBpbiBjYXNlIHRoZSBsYXlvdXQgc2l6ZSBoYXMgbm90IGJlZW4gdXBkYXRlZCBhZnRlciBzZXR0aW5nIG51bUl0ZW1zXHJcbiAgICAgICAgaWYgKCF0Ll92aXJ0dWFsICYmIHQuX2xheW91dCAmJiB0Ll9sYXlvdXQuZW5hYmxlZClcclxuICAgICAgICAgICAgdC5fbGF5b3V0LnVwZGF0ZUxheW91dCgpO1xyXG5cclxuICAgICAgICBsZXQgcG9zID0gdC5nZXRJdGVtUG9zKGxpc3RJZCk7XHJcbiAgICAgICAgbGV0IHRhcmdldFgsIHRhcmdldFk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly9TaW5nbGUgcm93IEhPUklaT05UQUwgKExFRlRfVE9fUklHSFQpLCBncmlkIFZFUlRJQ0FMIChMRUZUX1RPX1JJR0hUKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5fbGVmdEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IG5ldyBjYy52Mih0YXJnZXRYLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6Ly9TaW5nbGUgcm93IEhPUklaT05UQUwgKFJJR0hUX1RPX0xFRlQpLCBncmlkIFZFUlRJQ0FMIChSSUdIVF9UT19MRUZUKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5yaWdodCAtIHQubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYICs9IHQubm9kZS53aWR0aCAqIG9mZnNldDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYICs9IHQuX3JpZ2h0R2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gbmV3IGNjLnYyKHRhcmdldFggKyB0LmNvbnRlbnQud2lkdGgsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzovL1NpbmdsZSBjb2x1bW4gVkVSVElDQUwgKFRPUF9UT19CT1RUT00pLCBncmlkIEhPUklaT05UQUwgKFRPUF9UT19CT1RUT00pXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLnRvcDtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZICs9IHQubm9kZS5oZWlnaHQgKiBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSArPSB0Ll90b3BHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBuZXcgY2MudjIoMCwgLXRhcmdldFkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDovL1NpbmdsZSBjb2x1bW4gVkVSVElDQUwgKEJPVFRPTV9UT19UT1ApLCBncmlkIEhPUklaT05UQUwgKEJPVFRPTV9UT19UT1ApXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLmJvdHRvbSArIHQubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSAtPSB0Lm5vZGUuaGVpZ2h0ICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgLT0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gbmV3IGNjLnYyKDAsIC10YXJnZXRZICsgdC5jb250ZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpZXdQb3MgPSB0LmNvbnRlbnQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2aWV3UG9zID0gTWF0aC5hYnModC5fc2l6ZVR5cGUgPyB2aWV3UG9zLnkgOiB2aWV3UG9zLngpO1xyXG5cclxuICAgICAgICBsZXQgY29tcGFyZVBvcyA9IHQuX3NpemVUeXBlID8gcG9zLnkgOiBwb3MueDtcclxuICAgICAgICBsZXQgcnVuU2Nyb2xsID0gTWF0aC5hYnMoKHQuX3Njcm9sbFBvcyAhPSBudWxsID8gdC5fc2Nyb2xsUG9zIDogdmlld1BvcykgLSBjb21wYXJlUG9zKSA+IC41O1xyXG4gICAgICAgIC8vIGNjLmxvZyhydW5TY3JvbGwsIHQuX3Njcm9sbFBvcywgdmlld1BvcywgY29tcGFyZVBvcylcclxuXHJcbiAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG5cclxuICAgICAgICBpZiAocnVuU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFBvcyA9IGNvbXBhcmVQb3M7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFRvTGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxUb0VuZFRpbWUgPSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApICsgdGltZUluU2Vjb25kO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHBvcywgdGltZUluU2Vjb25kKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGxpc3RJZCwgdC5jb250ZW50LmhlaWdodCwgdC5jb250ZW50LmdldFBvc2l0aW9uKCkueSwgcG9zLnkpO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxUb1NvID0gdC5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0Ll9hZGhlcmluZ0JhcnJpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0LmFkaGVyaW5nID0gdC5fYWRoZXJpbmdCYXJyaWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0Ll9zY3JvbGxQb3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvTGlzdElkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9FbmRUaW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuX3Njcm9sbFRvU28gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZygnMjIyMjIyMjIyMicsIHQuX2FkaGVyaW5nQmFycmllcilcclxuICAgICAgICAgICAgICAgIGlmIChvdmVyU3RyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdC5zY3JvbGxUb0xpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24obmV3IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLnNjYWxlVG8oLjEsIDEuMDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGNjLnNjYWxlVG8oLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRpbWVJblNlY29uZCArIC4xKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgbmVhcmVzdCBpdGVtIGluIHRoZSBjdXJyZW50IHNjcm9sbCB3aW5kb3dcclxuICAgICAqL1xyXG4gICAgX2NhbGNOZWFyZXN0SXRlbSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YSwgY2VudGVyO1xyXG5cclxuICAgICAgICBpZiAodC5fdmlydHVhbClcclxuICAgICAgICAgICAgdC5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3AsIHZSaWdodCwgdkJvdHRvbSwgdkxlZnQ7XHJcbiAgICAgICAgdlRvcCA9IHQudmlld1RvcDtcclxuICAgICAgICB2UmlnaHQgPSB0LnZpZXdSaWdodDtcclxuICAgICAgICB2Qm90dG9tID0gdC52aWV3Qm90dG9tO1xyXG4gICAgICAgIHZMZWZ0ID0gdC52aWV3TGVmdDtcclxuXHJcbiAgICAgICAgbGV0IGJyZWFrRm9yID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB0LmNvbnRlbnQuY2hpbGRyZW5Db3VudCAmJiAhYnJlYWtGb3I7IG4gKz0gdC5fY29sTGluZU51bSkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5fdmlydHVhbCA/IHRoaXMuZGlzcGxheURhdGFbbl0gOiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKG4pO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyID0gdGhpcy5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduQ2FsY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6Ly9TaW5nbGUgcm93IEhPUklaT05UQUwgKExFRlRfVE9fUklHSFQpLCBncmlkIFZFUlRJQ0FMIChMRUZUX1RPX1JJR0hUKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yaWdodCA+PSB2TGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2TGVmdCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgKz0gdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6Ly9TaW5nbGUgcm93IEhPUklaT05UQUwgKFJJR0hUX1RPX0xFRlQpLCBncmlkIFZFUlRJQ0FMIChSSUdIVF9UT19MRUZUKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZWZ0IDw9IHZSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2UmlnaHQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkICs9IHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOi8vU2luZ2xlIGNvbHVtbiBWRVJUSUNBTCAoVE9QX1RPX0JPVFRPTSksIGdyaWQgSE9SSVpPTlRBTCAoVE9QX1RPX0JPVFRPTSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYm90dG9tIDw9IHZUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJlc3RMaXN0SWQgKz0gdGhpcy5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6Ly9TaW5nbGUgY29sdW1uIFZFUlRJQ0FMIChCT1RUT01fVE9fVE9QKSwgZ3JpZCBIT1JJWk9OVEFMIChCT1RUT01fVE9fVE9QKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50b3AgPj0gdkJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdExpc3RJZCArPSB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vSnVkZ2UgdGhlIGxhc3QgSXRlbS4gLiAuIChIZXksIHRoZXNlIGp1ZGdtZW50cyBhcmUgcmVhbGx5IGRpc2d1c3RpbmcuXHJcbiAgICAgICAgLy8gSWYgeW91IGp1ZGdlIHRoZSBwcmV2aW91cyBvbmUsIHlvdSBtdXN0IGp1ZGdlIHRoZSBsYXN0IG9uZSAuLi5cclxuICAgICAgICAvLyBBdCB0aGUgYmVnaW5uaW5nLCB0aGVyZSB3YXMgb25seSBvbmUgbGF5b3V0IChzaW5nbGUtY29sdW1uIGxheW91dCkuXHJcbiAgICAgICAgLy8gQXQgdGhhdCB0aW1lLCB0aGUgY29kZSB3YXMgb25seSB0aHJlZSBodW5kcmVkIGxpbmVzLiBMYXRlciwgSSB3YW50ZWQgdG8gaW1wcm92ZSBpdC4gLlxyXG4gICAgICAgIC8vIFRoaXMgcGl0IGlzIHJlYWxseSBkZWVwLCBub3cgdGhpcyBsaW5lIGNvdW50cyBvbmUgdGhvdXNhbmQgYW5kIGZpdmUgPSA9IHx8KVxyXG4gICAgICAgIGRhdGEgPSB0aGlzLl92aXJ0dWFsID8gdGhpcy5kaXNwbGF5RGF0YVt0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMV0gOiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKHRoaXMuX251bUl0ZW1zIC0gMSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCA9PSB0Ll9udW1JdGVtcyAtIDEpIHtcclxuICAgICAgICAgICAgY2VudGVyID0gdC5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8vU2luZ2xlIHJvdyBIT1JJWk9OVEFMIChMRUZUX1RPX1JJR0hUKSwgZ3JpZCBWRVJUSUNBTCAoTEVGVF9UT19SSUdIVClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8vU2luZ2xlIHJvdyBIT1JJWk9OVEFMIChSSUdIVF9UT19MRUZUKSwgZ3JpZCBWRVJUSUNBTCAoUklHSFRfVE9fTEVGVClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly9TaW5nbGUgY29sdW1uIFZFUlRJQ0FMIChUT1BfVE9fQk9UVE9NKSwgZ3JpZCBIT1JJWk9OVEFMIChUT1BfVE9fQk9UVE9NKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8vU2luZ2xlIGNvbHVtbiBWRVJUSUNBTCAoQk9UVE9NX1RPX1RPUCksIGdyaWQgSE9SSVpPTlRBTCAoQk9UVE9NX1RPX1RPUClcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coJ3QubmVhcmVzdExpc3RJZCA9JywgdC5uZWFyZXN0TGlzdElkKTtcclxuICAgIH0sXHJcbiAgICAvLyBQcmV2aW91c1xyXG4gICAgcHJlUGFnZSh0aW1lSW5TZWNvbmQpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYgnKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aW1lSW5TZWNvbmQgPT0gbnVsbClcclxuICAgICAgICAgICAgdGltZUluU2Vjb25kID0gLjU7XHJcbiAgICAgICAgdGhpcy5za2lwUGFnZSh0aGlzLmN1clBhZ2VOdW0gLSAxLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfSxcclxuICAgIC8vTmV4dFxyXG4gICAgbmV4dFBhZ2UodGltZUluU2Vjb25kKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKCfwn5GJJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGltZUluU2Vjb25kID09IG51bGwpXHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtICsgMSwgdGltZUluU2Vjb25kKTtcclxuICAgIH0sXHJcbiAgICAvL0dvIHRvIHBhZ2VcclxuICAgIHNraXBQYWdlKHBhZ2VOdW0sIHRpbWVJblNlY29uZCkge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgIT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQsIE11c3QgU2xpZGVNb2RlID0gUEFHRSEnKTtcclxuICAgICAgICBpZiAocGFnZU51bSA8IDAgfHwgcGFnZU51bSA+PSB0Ll9udW1JdGVtcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0LmN1clBhZ2VOdW0gPT0gcGFnZU51bSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIGNjLmxvZyhwYWdlTnVtKTtcclxuICAgICAgICB0LmN1clBhZ2VOdW0gPSBwYWdlTnVtO1xyXG4gICAgICAgIGlmICh0LnBhZ2VDaGFuZ2VFdmVudCkge1xyXG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3QucGFnZUNoYW5nZUV2ZW50XSwgcGFnZU51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuc2Nyb2xsVG8ocGFnZU51bSwgdGltZUluU2Vjb25kKTtcclxuICAgIH0sXHJcbiAgICAvLyBDYWxjdWxhdGUgQ3VzdG9tU2l6ZSAodGhpcyBmdW5jdGlvbiBpcyByZXNlcnZlZCwgaW4gc29tZSByYXJlIGNhc2VzLCBpdCBpcyBzdGlsbCBuZWNlc3NhcnkgdG8gbWFudWFsbHkgY2FsY3VsYXRlIGN1c3RvbVNpemUpXHJcbiAgICBjYWxjQ3VzdG9tU2l6ZShudW1JdGVtcykge1xyXG4gICAgICAgIGxldCB0ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdC5faXRlbVRtcClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCB0ZW1wbGF0ZSBpdGVtIScpO1xyXG4gICAgICAgIGlmICghdC5yZW5kZXJFdmVudClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCBSZW5kZXItRXZlbnQhJyk7XHJcbiAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgIGxldCB0ZW1wID0gY2MuaW5zdGFudGlhdGUodC5faXRlbVRtcCk7XHJcbiAgICAgICAgdC5jb250ZW50LmFkZENoaWxkKHRlbXApO1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgbnVtSXRlbXM7IG4rKykge1xyXG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3QucmVuZGVyRXZlbnRdLCB0ZW1wLCBuKTtcclxuICAgICAgICAgICAgaWYgKHRlbXAuaGVpZ2h0ICE9IHQuX2l0ZW1TaXplLmhlaWdodCB8fCB0ZW1wLndpZHRoICE9IHQuX2l0ZW1TaXplLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9jdXN0b21TaXplW25dID0gdC5fc2l6ZVR5cGUgPyB0ZW1wLmhlaWdodCA6IHRlbXAud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFPYmplY3Qua2V5cyh0Ll9jdXN0b21TaXplKS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHQuX2N1c3RvbVNpemUgPSBudWxsO1xyXG4gICAgICAgIHRlbXAucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmICh0ZW1wLmRlc3Ryb3kpXHJcbiAgICAgICAgICAgIHRlbXAuZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybiB0Ll9jdXN0b21TaXplO1xyXG4gICAgfSxcclxuXHJcbn0pOyJdfQ==