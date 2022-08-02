let self;
cc.Class({
    extends: cc.ViewGroup,

    properties: {
        scrollView              : cc.ScrollView,
        parentListView          : cc.ScrollView,
        cancelInnerEvents: {
            default: true,
            animatable: false,
        }
    },

    onLoad () {
        self = this;
        this.direction = null;
        this.start_loc = null;
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
        this.scrollView.stopAutoScroll();

    },
    update() {
        if (this.parentListView.getContentPosition().y < 500) {
            if (this.scrollView.vertical) {
                this.scrollView.vertical        = false;
                this.parentListView.vertical    = true;
            }
        }else{
            if (!this.scrollView.vertical) {
                this.scrollView.vertical        = true;
                this.parentListView.vertical    = false;
            }else {
                if (this.scrollView.getContentPosition().y < 5){
                    if (this.scrollView.vertical) {
                        this.scrollView.vertical        = false;
                        this.parentListView.vertical    = true;
                    }
                }
            }
        }
    },
    //this is for nested scrollview
    _hasNestedViewGroup (event, captureListeners) {
        if (event.eventPhase !== cc.Event.CAPTURING_PHASE) return;
        if (captureListeners) {
            //captureListeners are arranged from child to parent
            for (var i = 0; i < captureListeners.length; ++i) {
                var item = captureListeners[i];

                if (this.node === item) {
                    if (event.target.getComponent(cc.ViewGroup)) {
                        return true;
                    }
                    return false;
                }
                if (item.getComponent(cc.ViewGroup)) {
                    return true;
                }
            }
        }
        return false;
    },

    //This is for Scrollview as children of a Button
    _stopPropagationIfTargetIsMe (event) {
        if (event.eventPhase === cc.Event.AT_TARGET && event.target === this.node) {
            event.stopPropagation();
        }
    },

    // touch event handler
    _onTouchBegan (event, captureListeners) {
        if (!this.enabledInHierarchy)
            return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        this.start_loc = event.touch.getLocation();
        if (this.node) {
            if (this.parentListView) {
                this.parentListView._handlePressLogic(touch);
            }

            if (this.scrollView) {
                this.scrollView._handlePressLogic(touch);
            }
        }

        this._touchMoved = false;
        this._stopPropagationIfTargetIsMe(event);
    },

    _onTouchMoved (event, captureListeners) {
        let now_pos = event.touch.getLocation();
        let delta_x = Math.abs(this.start_loc.x - now_pos.x);
        let delta_y = Math.abs(this.start_loc.y - now_pos.y);
        if ((delta_x > 5 || delta_y > 5) && !this.direction) {
            this.direction = delta_x < delta_y ? "parent_scrollview_move" : "scrollview_move";
        }
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        if (this.node) {
            this._handleMoveLogic(touch);
        }

        // Do not prevent touch events in inner nodes
        if (!this.cancelInnerEvents) {
            return;
        }

        var deltaMove =  touch.getLocation().sub(touch.getStartLocation());

        //FIXME: touch move delta should be calculated by DPI.
        if (deltaMove.mag() > 7) {
            if (!this._touchMoved && event.target !== this.node) {
                // Simulate touch cancel for target node
                let cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
                cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
                cancelEvent.touch = event.touch;
                cancelEvent.simulate = true;
                event.target.dispatchEvent(cancelEvent);
                this._touchMoved = true;
            }
        }

        this._stopPropagationIfTargetIsMe(event);
    },

    _onTouchEnded (event, captureListeners) {
        this.direction = null;
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        var touch = event.touch;
        if (this.node) {
            this._handleReleaseLogic(touch);
        }

        if (this.parentListView) {
            this.parentListView._dispatchEvent('touch-up');
        }

        if (this.scrollView) {
            this.scrollView._dispatchEvent('touch-up');
        }

        if (this._touchMoved) {
            event.stopPropagation();
        } else {
            this._stopPropagationIfTargetIsMe(event);
        }
    },

    _onTouchCancelled (event, captureListeners) {
        this.direction = null;
        if (!this.enabledInHierarchy) return;
        if (this._hasNestedViewGroup(event, captureListeners)) return;

        // Filte touch cancel event send from self
        if (!event.simulate) {
            var touch = event.touch;
            if (this.node) {
                this._handleReleaseLogic(touch);
            }
        }

        this._stopPropagationIfTargetIsMe(event);
    },

    _clampDelta (delta) {
        let x = Math.abs(delta.x);
        let y = Math.abs(delta.y);
        if (x < y) {
            delta.x = 0;
        } else {
            delta.y = 0;
        }

        return delta;
    },

    _handleMoveLogic (touch) {
        let deltaMove = this._clampDelta(touch.getDelta());
        if (this.direction === "parent_scrollview_move") {
            if (this.parentListView) {
                this.parentListView._processDeltaMove(deltaMove);
            }
        } else {
            if (this.scrollView) {
                this.scrollView._processDeltaMove(deltaMove);
            }
            if (this.parentListView) {
                this.parentListView._processDeltaMove(deltaMove);
            }
        }
    },

    _handleReleaseLogic (touch) {
        var delta = touch.getDelta();
        delta = this._clampDelta(delta);
        if (this.parentListView) {
            this.parentListView._gatherTouchMove(delta);
            this.parentListView._processInertiaScroll();
        }
        if (this.scrollView) {
            this.scrollView._gatherTouchMove(delta);
            this.scrollView._processInertiaScroll();
        }
    },
});
