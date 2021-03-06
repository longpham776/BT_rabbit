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
        pos: 0,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.node.active = false;
        this.pos = this.node.x;
    },
    start() {
        cc.log('Hello');
        this.node.runAction(cc.scaleBy(1, 3));
    },
    update() {
        if (this.stop) {
            return;
            // return this.node.runAction(cc.flipX(false));
        } else if (this.node.x > 100 && !this.stop) {
            this.node.runAction(cc.flipX(true));
            this.node.runAction(cc.moveBy(3, this.pos - 100, 0));
            this.stop = true;
        } else this.node.runAction(cc.moveBy(2, 1, 0));
    },
});
