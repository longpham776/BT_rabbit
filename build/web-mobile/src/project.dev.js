window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GoOn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9c38FfsgpOzLpvEmg0t2sV", "GoOn");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rabbitScroll: {
          default: null,
          type: cc.Component
        }
      },
      start: function start() {
        cc.log("Hello");
      },
      update: function update(dt) {
        if (this.node.x >= 100) return this.rabbitScroll.node.active = true;
        this.node.x += 1;
      }
    });
    cc._RF.pop();
  }, {} ],
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!"
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  Jumping: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c82fb9UZuZO4Y+vVXKs9gpb", "Jumping");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rabbitScale: {
          default: null,
          type: cc.Component
        }
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("Hmmm");
        this.node.runAction(cc.jumpTo(3, this.node.x, this.node.y, 50, 3));
        return this.rabbitScale.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  Rolling: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c02bemvJtpCuIEkpFPttRKg", "Rolling");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rabbitJump: {
          default: null,
          type: cc.Component
        }
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("Hello");
        cc.log("Im Brownie");
      },
      update: function update(dt) {
        if (this.node.x >= 100) return this.rabbitJump.node.active = true;
        this.node.runAction(cc.sequence(cc.rotateBy(1, 358.5), cc.moveBy(2, 1, 0)));
      }
    });
    cc._RF.pop();
  }, {} ],
  ScaleGoBack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b31eav91QdOaogQl3YEY84a", "ScaleGoBack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        stop: false,
        pos: 0
      },
      onLoad: function onLoad() {
        this.node.active = false;
        this.pos = this.node.x;
      },
      start: function start() {
        cc.log("Hello");
        this.node.runAction(cc.scaleBy(1, 3));
      },
      update: function update() {
        if (this.stop) return;
        if (this.node.x > 100 && !this.stop) {
          this.node.runAction(cc.flipX(true));
          this.node.runAction(cc.moveBy(3, this.pos - 100, 0));
          this.stop = true;
        } else this.node.runAction(cc.moveBy(2, 1, 0));
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "GoOn", "HelloWorld", "Jumping", "Rolling", "ScaleGoBack" ]);