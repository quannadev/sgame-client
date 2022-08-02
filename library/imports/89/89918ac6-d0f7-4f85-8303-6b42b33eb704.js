"use strict";
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