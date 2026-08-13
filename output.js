//Thu Aug 13 2026 00:42:16 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(() => {
  let {
    EVENT_NAMES: O,
    request: w,
    on: g,
    send: h,
    env: E,
    version: C,
    currentScriptInfo: U,
    utils: T
  } = globalThis.lx;
  let z = (c, N) => {
    switch (c) {
      case "tx":
      case "wy":
      case "kw":
        return N.songmid;
      case "kg":
        return N.hash;
      case "mg":
        return N.copyrightId;
    }
    throw Error("failed");
  };
  let P = {
    "User-Agent": "lx-music/" + E,
    ver: C,
    "source-ver": U.version
  };
  g(O.request, ({
    source: c,
    action: N,
    info: {
      musicInfo: S,
      type: q
    }
  }) => {
    if ("musicUrl" != N) {
      throw Error("fialed");
    }
    return new Promise((G, F) => {
      let K = "/url/" + c + "/" + z(c, S) + "/" + q;
      P.tag = T.buffer.bufToString(T.buffer.from(JSON.stringify(K.match(/(?:\d\w)+/g), null, 1)), "hex");
      w("http://97.64.37.235/flower/v1" + K, {
        method: "GET",
        headers: P
      }, (b, D) => b ? F(b) : 0 !== D.body.code ? F(Error(D.body.msg)) : void G(D.body.data));
    });
  });
  let L = c => new Promise((N, S) => {
    w(c, {
      method: "GET"
    }, (y, G, F) => {
      if (y || !G.body.vinfo) {
        return S(Error("FAILED"));
      }
      (F = G.body.vinfo?.[U.version]) ? N({
        s: F.s,
        m: F.m,
        lv: G.body.vinfo.lv,
        lu: G.body.vinfo.lu,
        lh: G.body.vinfo.lh
      }) : N(null);
    });
  });
  let V = ["https://registry.npmjs.org/flower-source-info/latest", "https://registry.npmmirror.com/flower-source-info/latest"];
  let j = {
    s: "kw|128k&wy|128k&mg|128k&tx|128k&kg|128k"
  };
  Promise.any([L(V[0]), L(V[1])]).then(c => {
    j = c;
  }).finally(() => {
    if (!j || j.m && T.crypto.md5(U.rawScript.trim()) != j.m) {
      throw Error("服务器异常");
    }
    let c = {};
    for (let S of "kw|128k&wy|128k&mg|128k&tx|128k&kg|128k".trim().split("&")) c[(S = S.split("|")).shift()] = {
      type: "music",
      actions: ["musicUrl"],
      qualitys: S
    };
    const N = {
      sources: c
    };
    h(O.inited, N);
    j.lv && parseInt(j.lv) > parseInt(U.version) && h(O.updateAlert, {
      log: j.lu,
      updateUrl: j.lh
    });
  });
})();