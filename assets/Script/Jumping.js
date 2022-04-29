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
        rabbitScale:{
            default: null,
            type: cc.Component,
        }
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.node.active = false;
    },
    start () {
        cc.log('Hmmm');
        this.node.runAction(cc.jumpTo(3,this.node.x,this.node.y,50,3));
        return this.rabbitScale.node.active = true;
    },
    // update (dt) {},
});
