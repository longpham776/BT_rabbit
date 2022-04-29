(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ScaleGoBack.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b31eav91QdOaogQl3YEY84a', 'ScaleGoBack', __filename);
// Script/ScaleGoBack.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        stop: false,
        pos: 0
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        this.node.active = false;
        this.pos = this.node.x;
    },
    start: function start() {
        cc.log('Hello');
        this.node.runAction(cc.scaleBy(1, 3));
    },
    update: function update() {
        if (this.stop) {
            return;
            // return this.node.runAction(cc.flipX(false));
        } else if (this.node.x > 100 && !this.stop) {
            this.node.runAction(cc.flipX(true));
            this.node.runAction(cc.moveBy(3, this.pos - 100, 0));
            this.stop = true;
        } else this.node.runAction(cc.moveBy(2, 1, 0));
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ScaleGoBack.js.map
        