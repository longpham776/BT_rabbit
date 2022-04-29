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
        rabbitJump:{
            default: null,
            type:cc.Component,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad(){
        this.node.active = false;
    },
    start () {
        cc.log('Hello');
        cc.log('Im Brownie');
    },

    // update (dt) {},
    update(dt){
        if((this.node.x >= 100)){
            return this.rabbitJump.node.active = true;
        }
        this.node.runAction(cc.sequence(cc.rotateBy(1,358.5),cc.moveBy(2, 1, 0)));
    }
});
