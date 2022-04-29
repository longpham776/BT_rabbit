"use strict";
cc._RF.push(module, 'a9c38FfsgpOzLpvEmg0t2sV', 'GoOn');
// Script/GoOn.js

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
        rabbitScroll: {
            default: null,
            type: cc.Component
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        cc.log('Hello');
        // cc.log(this.Rolling);
    },


    // update (dt) {},
    update: function update(dt) {
        if (this.node.x >= 100) {
            return this.rabbitScroll.node.active = true;
        }
        this.node.x += 1;
    }
});

cc._RF.pop();