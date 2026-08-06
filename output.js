//Thu Aug 06 2026 11:45:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const DEV_LOG = false;
const CACHE_TTL = 1200000;
const YuNingXi = "eb37aa436915f9a8251763be8e6aa0e1ecdfc4480b3869f00a54ebcfa9322873";
if (!globalThis.lx) {
  throw new Error("LX Music 环境未就绪");
}
const {
  EVENT_NAMES,
  request,
  on,
  send,
  currentScriptInfo,
  env
} = globalThis.lx;
const isDesktop = env === "desktop";
const isMobile = env === "mobile";
const isKeyValid = typeof YuNingXi === "string" && YuNingXi.trim() !== "";
const devLog = (...e) => {};
const URL_CACHE = new Map();
const getCache = e => {
  const g = {
    LtMLi: "[YNX-DEV]",
    ZdHcD: function (j, k) {
      return j > k;
    },
    YWpqk: function (j, k) {
      return j === k;
    },
    wUnbM: "WxGun"
  };
  const h = URL_CACHE.get(e);
  if (!h) {
    return null;
  }
  if (Date.now() > h.expire) {
    {
      URL_CACHE.delete(e);
      return null;
    }
  }
  return h.data;
};
const setCache = (e, f) => {
  URL_CACHE.set(e, {
    data: f,
    expire: Date.now() + CACHE_TTL
  });
};
const httpFetch = (d, e = {}) => new Promise((f, g) => {
  const i = e.timeout || 8000;
  const j = e.retry ?? 0;
  let k = 0;
  let l = null;
  const m = () => {
    const n = {
      udlXn: function (p, q, r) {
        return p(q, r);
      },
      BEWoq: "酷狗海棠接口请求异常：",
      xHwmk: function (p, q) {
        return p !== q;
      },
      PGTeS: "musicUrl",
      ECaPd: "不支持的 action",
      GxTQG: "收到播放请求",
      eYIBY: function (p, q, r, s) {
        return p(q, r, s);
      },
      JgpKf: function (p, q) {
        return p(q);
      },
      TEoWc: function (p, q) {
        return p !== q;
      },
      LNovt: "mNSBc",
      iyCfg: "wBsBk",
      LEFDx: function (p, q) {
        return p <= q;
      },
      fysKU: function (p, q) {
        return p === q;
      },
      dxiZF: "wuKcA",
      BYPqk: "WhMqd",
      mbYdd: function (p, q) {
        return p + q;
      },
      fqTFd: function (p) {
        return p();
      },
      RiPOC: function (p, q) {
        return p !== q;
      },
      HBuEB: "uMEgy",
      PWkwj: "Ssmzd"
    };
    {
      k++;
      const p = setTimeout(() => {
        const q = {
          IrAxD: function (s, t) {
            return s !== t;
          },
          UzKak: "musicUrl",
          shafI: "不支持的 action",
          Euyph: function (s, t, u) {
            return s(t, u);
          },
          pvmZr: "收到播放请求",
          GQGWu: function (s, t, u, v) {
            return s(t, u, v);
          },
          qUWuz: function (s, t) {
            return s(t);
          }
        };
        {
          l = new Error("请求超时 (" + i + "ms): " + d);
          if (k <= j) {
            {
              devLog("[重试 " + k + "/" + (j + 1) + "]", d);
              m();
            }
          } else {
            g(l);
          }
        }
      }, i);
      request(d, e, (q, r) => {
        const s = {
          zYGRM: function (u, v) {
            return u(v);
          },
          gZCmd: function (u, v, w) {
            return u(v, w);
          },
          AVFWw: "发现新版本",
          SkbKN: function (u, v) {
            return u || v;
          },
          YMiCk: function (u, v) {
            return u + v;
          }
        };
        {
          clearTimeout(p);
          if (q) {
            {
              l = q;
              if (k <= j) {
                devLog("[重试 " + k + "/" + (j + 1) + "]", d, q.message);
                m();
              } else {
                {
                  g(q);
                }
              }
              return;
            }
          }
          if (r?.["statusCode"] >= 400 && r?.["statusCode"] < 500) {
            {
              f(r);
            }
          } else {
            if (r?.["statusCode"] >= 500) {
              {
                l = new Error("服务器错误 " + r.statusCode + ": " + d);
                if (k <= j) {
                  devLog("[重试 " + k + "/" + (j + 1) + "] 服务器错误", r.statusCode);
                  m();
                } else {
                  {
                    g(l);
                  }
                }
                return;
              }
            }
          }
          f(r);
        }
      });
    }
  };
  m();
});
const getFinalPlayUrl = async (d, e = {}) => {
  try {
    {
      const h = await httpFetch(d, {
        ...e,
        method: "HEAD",
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      });
      if (![200, 301, 302, 307, 308].includes(h?.["statusCode"])) {
        return null;
      }
      return h?.["finalUrl"] || h?.["url"] || d;
    }
  } catch {
    return null;
  }
};
const isValidUrl = d => typeof d === "string" && d.trim() !== "";
const MUSIC_QUALITY = {
  tx: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  wy: ["128k", "320k", "flac", "flac24bit", "hires", "master", "atmos"],
  kw: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  kg: ["128k", "320k", "flac", "flac24bit", "atmos", "master"],
  mg: ["128k", "320k", "flac", "flac24bit"]
};
const getTxUrl = async (i, j) => {
  const k = {
    DBLyv: function (y, z, A) {
      return y(z, A);
    },
    SuZPM: "酷狗一号接口失败，切换多音质接口：",
    cvYQU: function (z, A) {
      return z + A;
    },
    PflYP: function (y) {
      return y();
    },
    SQujz: "QQ音乐密钥接口失败，降级到tang接口：",
    oxPBD: "[YNX] 网易云接口1请求失败:",
    srnOB: function (y) {
      return y();
    },
    tKfTx: function (y, z) {
      return y(z);
    },
    HYOTH: function (z, A) {
      return z === A;
    },
    gmGPn: "tdpJL",
    VQTsO: "ByGTQ",
    XotzU: function (z, A) {
      return z === A;
    },
    jsLEa: "NOnvR",
    EXOfY: function (y, z, A, B) {
      return y(z, A, B);
    },
    tQJrj: function (y, z, A) {
      return y(z, A);
    },
    CEORl: "[缓存命中]",
    HHzCn: function (z, A) {
      return z > A;
    },
    RMxYp: function (z, A) {
      return z <= A;
    },
    dSyAQ: "获取失败：缺少 songmid",
    Ixnes: "低品质",
    MCtQZ: "中品质",
    IBmDc: "SQ无损",
    qgyru: "臻品全景声",
    OTvEe: "臻品母带",
    TyAWT: "atmos",
    nPWme: "atmos_plus",
    FZBnS: "master",
    iglcK: "flac24bit",
    UizWw: "HVphZ",
    CleqH: "PVVaH",
    cdiiJ: "NfPvV",
    WXWoA: "nFpTY",
    dpjWI: function (y, z) {
      return y(z);
    },
    vitzS: function (z, A) {
      return z !== A;
    },
    iLluw: "MREIr",
    fgJXk: "cfMNQ",
    ZKqWy: function (z, A) {
      return z === A;
    },
    ncXfU: "GjLII",
    SNLRE: function (y, z) {
      return y(z);
    },
    hDVgm: function (z, A) {
      return z !== A;
    },
    sUUbA: "knqHA",
    mdOsh: "oyeZo",
    ZvpJQ: function (y, z, A) {
      return y(z, A);
    },
    CiGgk: "接口无数据",
    XUAMK: "LzJtW",
    yoCJh: "QQ音乐tang接口请求异常：",
    gzhLM: "IHQFT",
    mPEtR: "flac",
    cYOxW: function (y, z, A, B, C, D) {
      return y(z, A, B, C, D);
    },
    OQDwe: "song_play_url_pq",
    xBeRQ: "song_play_url_sq",
    tEhka: "song_play_url_hq",
    mLWkV: "song_play_url_standard",
    sCiWr: "song_play_url",
    VUZZw: "320k",
    zHSAq: function (y, z, A, B) {
      return y(z, A, B);
    },
    vcyLu: "song_play_url_fq",
    ftnwp: function (z, A) {
      return z !== A;
    },
    VxQrR: "kmKFO",
    ZGOhN: "SkvYp",
    DJTsy: "LFofN",
    vwLdU: function (y, z) {
      return y(z);
    },
    RWLfj: function (z, A) {
      return z === A;
    },
    iPjWT: function (y, z) {
      return y(z);
    },
    HRJmJ: function (z, A) {
      return z !== A;
    },
    UZslr: "tFADI",
    MGSSM: "DQLDV",
    FzTQE: function (z, A) {
      return z === A;
    },
    mNobc: "Tywno",
    ZXrQW: "WpsFx",
    AZiMC: function (y, z, A) {
      return y(z, A);
    },
    yiOnj: "QQ音乐所有接口均无可用地址"
  };
  const l = i?.["songmid"];
  if (!l) {
    throw new Error("获取失败：缺少 songmid");
  }
  const n = {
    "128k": "低品质",
    "320k": "中品质",
    flac: "SQ无损",
    flac24bit: "臻品全景声",
    atmos: "臻品全景声",
    atmos_plus: "臻品全景声",
    master: "臻品母带"
  };
  const o = {
    "128k": 128,
    "320k": 320,
    flac: 999,
    flac24bit: 999,
    atmos: 999,
    atmos_plus: 999,
    master: 999
  };
  const p = o;
  let q = null;
  const r = ["atmos", "atmos_plus", "master", "flac24bit"];
  if (isKeyValid && r.includes(j)) {
    {
      const y = n[j] || "低品质";
      const z = "https://api-v2.yuafeng.cn/API/qqmusic.php?type=" + y + "&mid=" + l + "&apikey=" + YuNingXi;
      try {
        {
          const A = await httpFetch(z);
          A.statusCode === 200 && A.body?.["code"] === 0 && A.body.data?.["music"] && (q = A.body.data.music);
        }
      } catch (B) {
        {
          console.warn("QQ音乐密钥接口失败，降级到tang接口：", B.message);
        }
      }
    }
  }
  if (q && isValidUrl(q)) {
    {
      return q.trim();
    }
  }
  let s = null;
  let t = false;
  try {
    {
      const C = {
        timeout: 8000,
        retry: 1
      };
      const D = await httpFetch("https://tang.api.s01s.cn/music_open_api.php?mid=" + l, C);
      if (!D?.["body"]) {
        throw new Error("接口无数据");
      }
      s = D.body;
    }
  } catch (E) {
    t = true;
    console.warn("QQ音乐tang接口请求异常：", E.message);
  }
  if (s) {
    {
      const F = (...H) => {
        {
          for (const J of H) {
            {
              const T = s[J];
              if (isValidUrl(T)) {
                return T.trim();
              }
            }
          }
          return null;
        }
      };
      let G = null;
      switch (j) {
        case "flac":
        case "flac24bit":
        case "master":
        case "atmos":
        case "atmos_plus":
          G = F("song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url");
          break;
        case "320k":
          G = F("song_play_url_hq", "song_play_url_standard", "song_play_url");
          break;
        default:
          G = F("song_play_url_standard", "song_play_url", "song_play_url_fq");
          break;
      }
      if (G) {
        return G;
      }
    }
  }
  if (t && !r.includes(j) && isKeyValid) {
    {
      try {
        {
          const H = n[j] || "低品质";
          const I = "https://api-v2.yuafeng.cn/API/qqmusic.php?type=" + H + "&mid=" + l + "&apikey=" + YuNingXi;
          const J = await httpFetch(I);
          if (J.statusCode === 200 && J.body?.["code"] === 0 && J.body.data?.["music"] && isValidUrl(J.body.data.music)) {
            {
              console.log("[QQ音源] tang失效，成功通过yuafeng获取" + j);
              return J.body.data.music.trim();
            }
          }
        }
      } catch (T) {
        {
          console.warn("[QQ音源] tang失效，yuafeng备用通道也失败：", T.message);
        }
      }
    }
  }
  const u = p[j] || 128;
  const v = {
    timeout: 6000,
    retry: 0
  };
  const w = await getFinalPlayUrl("https://metingapi.nanorocky.top/?server=tencent&type=url&br=" + u + "&id=" + l, v);
  if (w) {
    return w;
  }
  throw new Error("QQ音乐所有接口均无可用地址");
};
const getWyUrl = async (j, k) => {
  const m = j?.["songmid"] || j?.["songId"];
  if (!m) {
    throw new Error("网易云歌曲ID不存在");
  }
  const o = {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires",
    hires: "hires",
    master: "jymaster",
    atmos: "jyeffect"
  };
  const q = {
    "128k": 128,
    "320k": 320,
    flac: 999,
    flac24bit: 1999,
    atmos: 2999,
    atmos_plus: 8999,
    master: 32000
  };
  const r = o[k] || "standard";
  try {
    {
      const w = {
        timeout: 10000,
        retry: 1
      };
      const x = await httpFetch("https://api.chksz.top/api/163_music?id=" + m + "&level=" + r, w);
      devLog("网易云接口1响应", x?.["body"]);
      const y = x?.["body"]?.["data"]?.["url"];
      if (x?.["body"]?.["code"] == 200 && isValidUrl(y)) {
        return y.trim();
      }
    }
  } catch (z) {
    console.error("[YNX] 网易云接口1请求失败:", z);
  }
  try {
    {
      const A = {
        timeout: 10000,
        retry: 1
      };
      const B = await httpFetch("https://mcp.nianxinxz.com/share/ceshi/wy.php?id=" + m + "&level=" + r, A);
      devLog("网易云接口2响应", B?.["body"]);
      const C = B?.["body"]?.["url"];
      if (B?.["body"]?.["code"] === 200 && isValidUrl(C)) {
        return C.trim();
      }
    }
  } catch (D) {
    {
      console.error("[YNX] 网易云接口2请求失败:", D);
    }
  }
  const s = q[k] || 128;
  const t = {
    timeout: 6000,
    retry: 0
  };
  const u = await getFinalPlayUrl("https://metingapi.nanorocky.top/?server=netease&type=url&br=" + s + "&id=" + m, t);
  if (u) {
    return u;
  }
  throw new Error("网易云所有接口均获取失败");
};
const getKwUrl = async (f, g) => {
  const i = f?.["songmid"];
  if (!i) {
    throw new Error("酷我歌曲ID不存在");
  }
  const k = {
    "128k": "128kmp3",
    "320k": "320kmp3",
    flac: "2000kflac",
    flac24bit: "2000kflac",
    atmos: "2000kflac",
    atmos_plus: "2000kflac",
    master: "2000kflac"
  };
  const l = k[g];
  if (!l) {
    throw new Error("不支持的音质: " + g);
  }
  const m = (u = 4) => {
    {
      if (u <= 0) {
        return 0;
      }
      const x = Math.min(Math.pow(256, u) - 1, Number.MAX_SAFE_INTEGER);
      return Math.floor(Math.random() * x);
    }
  };
  const n = m(4);
  const o = m(4);
  const p = "https://nmobi.kuwo.cn/mobi.s?f=web&source=kwplayercar_ar_6.0.0.9_B_jiakong_vh.apk&type=convert_url_with_sign&rid=" + i + "&br=" + l + "&user=" + n + "&loginUid=" + o;
  const q = {
    timeout: 8000,
    retry: 1
  };
  const r = await httpFetch(p, q);
  devLog("酷我接口响应", r?.["body"]);
  if (r?.["body"]?.["code"] !== 200) {
    throw new Error(r?.["body"]?.["msg"] || "酷我音乐解析失败");
  }
  const s = r?.["body"]?.["data"]?.["url"];
  if (!s) {
    throw new Error("未获取到有效播放链接");
  }
  const t = s.includes("?") ? s.split("?")[0] : s;
  return t;
};
const getKgUrl = async (k, l) => {
  const m = {
    lSUay: function (v, w) {
      return v <= w;
    },
    KmDtJ: function (v, w) {
      return v - w;
    },
    fcJfF: function (v, w) {
      return v * w;
    },
    RYSHL: function (v, w, x) {
      return v(w, x);
    },
    ucoXq: "酷狗二号多音质接口失败，切换nianxinxz：",
    nUbWt: function (v, w, x) {
      return v(w, x);
    },
    BMTfM: function (v, w) {
      return v + w;
    },
    MtItR: function (v) {
      return v();
    },
    SwRpT: function (v, w) {
      return v(w);
    },
    lzfdG: function (v, w) {
      return v(w);
    },
    LqaOv: "[YNX] 网易云接口2请求失败:",
    JmHOY: "酷狗歌曲ID不存在",
    reYpK: "standard",
    TnqdR: "exhigh",
    qPNwc: "lossless",
    KeUKG: "flac24bit",
    bYBLu: "atmos",
    ODrPk: "master",
    GvdCC: "MQ普通音质",
    hwRVZ: "HQ高品音质",
    NnilM: "SQ超品音质",
    BBUDL: "His无损音质",
    DgVVB: "蝰蛇全景声",
    BqfqC: "蝰蛇超清",
    BxDVG: function (v, w) {
      return v !== w;
    },
    oFIbD: "sMtqT",
    RiTNz: "UrFfy",
    kxEsE: function (v, w, x) {
      return v(w, x);
    },
    NDTRN: "酷狗【首选yy.zddyr】响应",
    lOJnk: function (v, w) {
      return v === w;
    },
    OERep: function (v, w) {
      return v(w);
    },
    GeXgT: "nWfwO",
    eelfd: "GCKWU",
    JsILn: "hlpLq",
    TIauv: "酷狗一号接口失败，切换多音质接口：",
    glIWx: "hkQio",
    ZYNoh: "酷狗【二号多音质接口】响应",
    Eimsd: function (v, w) {
      return v !== w;
    },
    gfdhn: "xmIlP",
    lQkpr: function (v, w) {
      return v === w;
    },
    qcanw: "RNKRd",
    YJHIB: "VYSTF",
    NpODE: function (v, w) {
      return v(w);
    },
    PcSyo: "qODtZ",
    CwmPr: "YKOYi",
    sldMn: function (v, w, x) {
      return v(w, x);
    },
    IYTLC: "HpVwK",
    vrnOt: "CeHTp",
    wVKau: function (v, w, x) {
      return v(w, x);
    },
    Ndjex: "酷狗【nianxinxz接口】状态码",
    mLsqp: function (v, w) {
      return v >= w;
    },
    FPdgi: function (v, w) {
      return v < w;
    },
    qLNaB: function (v, w) {
      return v(w);
    },
    hpQHk: function (v, w) {
      return v !== w;
    },
    GqoIs: "sChJw",
    qdhcS: "vSuXp",
    uxgDL: function (v, w, x) {
      return v(w, x);
    },
    xHMOu: "酷狗nianxinxz接口失败，切换海棠备用：",
    cUzgu: function (v, w, x) {
      return v(w, x);
    },
    fNlph: "酷狗【海棠接口】响应",
    ygrJN: "酷狗海棠接口请求异常：",
    XjOhG: "酷狗所有接口未获取到有效播放链接"
  };
  const n = k?.["hash"]?.["toLowerCase"]?.() || "";
  if (!n) {
    throw new Error("酷狗歌曲ID不存在");
  }
  const p = {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "flac24bit",
    atmos: "atmos",
    atmos_plus: "atmos",
    master: "master"
  };
  const q = p[l] || "standard";
  const s = {
    "128k": "MQ普通音质",
    "320k": "HQ高品音质",
    flac: "SQ超品音质",
    flac24bit: "His无损音质",
    atmos: "蝰蛇全景声",
    atmos_plus: "蝰蛇全景声",
    master: "蝰蛇超清"
  };
  const t = s[l];
  try {
    {
      const v = "https://yy.zddyr.top/lx/api/?source=kg&quality=" + l + "&mainHash=" + n;
      const w = {
        timeout: 8000,
        retry: 1
      };
      const x = await httpFetch(v, w);
      devLog("酷狗【首选yy.zddyr】响应", x?.["body"]);
      if (x?.["body"]?.["code"] === 200 && x.body?.["url"] && isValidUrl(x.body.url)) {
        {
          return x.body.url.trim();
        }
      }
    }
  } catch (y) {
    devLog("酷狗一号接口失败，切换多音质接口：", y.message);
  }
  try {
    {
      const z = "http://music.xn--q35am7h.site/?api=get_song_with_source&id=" + n + "&source=%E9%85%B7%E7%8B%97%E9%9F%B3%E4%B9%90";
      const A = {
        timeout: 8000,
        retry: 1
      };
      const B = await httpFetch(z, A);
      devLog("酷狗【二号多音质接口】响应", B?.["body"]);
      const C = B?.["body"]?.["data"] || [];
      const D = C.find(F => F.ts === t && isValidUrl(F.url));
      if (D) {
        return D.url.trim();
      }
      const E = C.find(F => isValidUrl(F.url));
      if (E) {
        {
          devLog("[KG]未匹配指定" + l + "，自动降级可用音频");
          return E.url.trim();
        }
      }
    }
  } catch (F) {
    devLog("酷狗二号多音质接口失败，切换nianxinxz：", F.message);
  }
  try {
    {
      const G = "https://mcp.nianxinxz.com/share/ceshi/kg.php?id=" + n + "&level=" + q;
      const H = {
        timeout: 8000,
        retry: 1,
        followRedirect: true
      };
      const I = await httpFetch(G, H);
      devLog("酷狗【nianxinxz接口】状态码", I?.["statusCode"]);
      if (I?.["statusCode"] >= 200 && I?.["statusCode"] < 400 && isValidUrl(I.url)) {
        return I.url.trim();
      }
    }
  } catch (J) {
    devLog("酷狗nianxinxz接口失败，切换海棠备用：", J.message);
  }
  try {
    const T = "https://music.haitangw.cc/kgqq1/kg.php?id=" + n + "&level=" + q;
    const U = {
      timeout: 8000,
      retry: 1
    };
    const V = await httpFetch(T, U);
    devLog("酷狗【海棠接口】响应", V?.["body"]);
    const W = V?.["body"]?.["data"]?.["url"];
    if (V?.["body"]?.["code"] === 200 && isValidUrl(W)) {
      return W.trim();
    }
  } catch (X) {
    devLog("酷狗海棠接口请求异常：", X.message);
  }
  throw new Error("酷狗所有接口未获取到有效播放链接");
};
const getMgUrl = async (f, g) => {
  const i = f.songmid;
  const j = f.name || f.songName || "";
  if (!i) {
    throw new Error("咪咕歌曲ID不存在");
  }
  const l = {
    "128k": "128k",
    "320k": "320k",
    flac: "flac",
    flac24bit: "flac24bit"
  };
  const m = l[g] || "128k";
  const n = "https://yy.zddyr.top/lx/api/?source=migu&name=" + encodeURIComponent(j) + "&songmid=" + i + "&quality=" + m;
  const o = {
    timeout: 8000,
    retry: 1
  };
  const p = await httpFetch(n, o);
  devLog("咪咕接口响应", p?.["body"]);
  const q = p?.["body"]?.["url"];
  if (p?.["body"]?.["code"] === 200 && isValidUrl(q)) {
    return q.trim();
  }
  throw new Error("未获取到有效播放链接");
};
const handleGetMusicUrl = async (f, g, h) => {
  try {
    const n = {
      timeout: 3000,
      retry: 0
    };
    await httpFetch("https://www.97abc.com/count.php?id=lx-yuningxi", n);
    devLog("统计请求成功");
  } catch {}
  const j = f + "_" + (g?.["songmid"] || g?.["songId"] || g?.["hash"]) + "_" + h;
  const k = getCache(j);
  if (k) {
    devLog("[缓存命中]", j);
    return k;
  }
  const l = {
    source: f,
    musicInfo: g,
    quality: h
  };
  devLog("开始获取播放地址", l);
  let m = null;
  switch (f) {
    case "tx":
      m = await getTxUrl(g, h);
      break;
    case "wy":
      m = await getWyUrl(g, h);
      break;
    case "kw":
      m = await getKwUrl(g, h);
      break;
    case "kg":
      m = await getKgUrl(g, h);
      break;
    case "mg":
      m = await getMgUrl(g, h);
      break;
    default:
      throw new Error("不支持的音源：" + f);
  }
  if (m) {
    setCache(j, m);
  }
  return m;
};
on(EVENT_NAMES.request, ({
  action: e,
  source: f,
  info: g
}) => {
  if (e !== "musicUrl") {
    return Promise.reject("不支持的 action");
  }
  const i = {
    action: e,
    source: f,
    info: g
  };
  devLog("收到播放请求", i);
  return handleGetMusicUrl(f, g.musicInfo, g.type);
});
const L = {
  name: "QQ音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.tx
};
const M = {
  name: "网易云音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.wy
};
const N = {
  name: "酷我音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.kw
};
const O = {
  name: "酷狗音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.kg
};
const P = {
  name: "咪咕音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.mg
};
const Q = {
  tx: L,
  wy: M,
  kw: N,
  kg: O,
  mg: P
};
const initConfig = {
  openDevTools: DEV_LOG,
  sources: Q
};
if (isMobile) {
  const S = {
    status: true,
    maxLimit: 5,
    timeout: 10000,
    retry: 1
  };
  Object.assign(initConfig, S);
}
send(EVENT_NAMES.inited, initConfig);
devLog("双端通用脚本已加载，环境:", env);
const compareVersion = (f, g) => {
  if (typeof f !== "string" || typeof g !== "string") {
    return 0;
  }
  const j = {
    numeric: true
  };
  return g.replace(/^v/, "").localeCompare(f.replace(/^v/, ""), undefined, j);
};
const CHECK_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx.json";
const UPDATE_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx-玉宁熙.js";
const checkLatestVersion = async () => {
  try {
    devLog("开始检查更新");
    const f = await new Promise((k, l) => {
      request(CHECK_URL, {}, (m, n) => m ? l(m) : k(n));
    });
    const g = f?.["body"];
    if (!g) {
      return;
    }
    const {
      latest: h,
      log: i
    } = g;
    const j = currentScriptInfo?.["version"];
    if (h && j && typeof h === "string" && typeof j === "string") {
      if (compareVersion(j, h) > 0) {
        const k = {
          latest: h,
          current: j,
          uplog: i
        };
        devLog("发现新版本", k);
        send(EVENT_NAMES.updateAlert, {
          log: "发现新版本 " + h + "！\n更新内容：" + (i || "暂无"),
          updateUrl: UPDATE_URL
        });
      }
    }
  } catch {}
};
setTimeout(checkLatestVersion, 2000);