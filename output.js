//Tue Jul 14 2026 10:37:26 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const YuNingXi = "";
const CACHE_TTL = 1200000;
const URL_CACHE = new Map();
const DEV_ENABLE = false;
function getCache(_0x30d6ce) {
  const _0x47482c = URL_CACHE.get(_0x30d6ce);
  if (!_0x47482c) {
    return null;
  }
  if (Date.now() > _0x47482c.expire) {
    URL_CACHE.delete(_0x30d6ce);
    return null;
  }
  return _0x47482c.data;
}
function setCache(_0x514f70, _0x4deb12) {
  URL_CACHE.set(_0x514f70, {
    data: _0x4deb12,
    expire: Date.now() + CACHE_TTL
  });
}
const devLog = (..._0x3f2962) => {
  console.log("[YNX-DEV]", ..._0x3f2962);
};
const MUSIC_QUALITY = {
  tx: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  wy: ["128k", "320k", "flac", "flac24bit", "hires", "master", "atmos"],
  kw: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  kg: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"]
};
const {
  EVENT_NAMES,
  request,
  on,
  send,
  currentScriptInfo
} = globalThis.lx;
const isDesktop = globalThis.lx.env === "desktop";
const isKeyValid = !!YuNingXi && YuNingXi.trim() !== "";
const httpFetch = (_0x5b6a56, _0x48d006 = {}) => new Promise((_0x61647c, _0xc8e5bb) => {
  const _0x68bfd9 = setTimeout(() => {
    _0xc8e5bb(new Error("请求超时"));
  }, 5000);
  request(_0x5b6a56, _0x48d006, (_0xcdd89a, _0x5ce55e) => {
    clearTimeout(_0x68bfd9);
    _0xcdd89a ? _0xc8e5bb(_0xcdd89a) : _0x61647c(_0x5ce55e);
  });
});
async function getFinalPlayUrl(_0x572a2c) {
  try {
    const _0x588155 = {
      "User-Agent": "Mozilla/5.0"
    };
    const _0x254cd8 = {
      method: "HEAD",
      headers: _0x588155
    };
    const _0x417bd9 = await httpFetch(_0x572a2c, _0x254cd8);
    const _0x5ef9b8 = [200, 301, 302, 307, 308].includes(_0x417bd9?.["statusCode"]);
    if (!_0x5ef9b8) {
      return null;
    }
    return _0x417bd9?.["finalUrl"] || _0x417bd9?.["url"] || _0x572a2c;
  } catch (_0x3c7408) {
    return null;
  }
}
const handleGetMusicUrl = async (_0x1f5e17, _0x598ae9, _0xb0a4b6) => {
  try {
    await httpFetch("https://www.97abc.com/count.php?id=lx-yuningxi");
    devLog("统计请求成功");
  } catch (_0x30bd42) {
    console.error("统计请求失败:", _0x30bd42);
  }
  const _0x3e097f = _0x1f5e17 + "_" + (_0x598ae9?.["songmid"] || _0x598ae9?.["songId"]) + "_" + _0xb0a4b6;
  const _0x28e6b9 = getCache(_0x3e097f);
  if (_0x28e6b9) {
    devLog("[缓存命中]", _0x3e097f);
    return _0x28e6b9;
  }
  const _0x164f7e = {
    source: _0x1f5e17,
    musicInfo: _0x598ae9,
    quality: _0xb0a4b6
  };
  devLog("开始获取播放地址", _0x164f7e);
  let _0x3d1067 = null;
  switch (_0x1f5e17) {
    case "tx":
      {
        if (!_0x598ae9?.["songmid"]) {
          throw new Error("获取失败：缺少 songmid");
        }
        const _0x5a5a59 = _0x598ae9.songmid;
        const _0x54c306 = {
          mid: _0x5a5a59,
          quality: _0xb0a4b6,
          isKeyValid: isKeyValid
        };
        devLog("开始解析QQ音乐", _0x54c306);
        const _0x88c407 = {
          "128k": 128,
          "320k": 320,
          flac: 999,
          flac24bit: 999,
          atmos: 999,
          atmos_plus: 999,
          master: 999
        };
        const _0x4046d6 = (..._0x46616e) => {
          for (const _0x4f6474 of _0x46616e) {
            const _0x27fda0 = _0x452147?.[_0x4f6474];
            if (_0x27fda0 && _0x27fda0.trim() !== "") {
              return _0x27fda0;
            }
          }
          return null;
        };
        const _0x3bc0c6 = "https://tang.api.s01s.cn/music_open_api.php?mid=" + _0x5a5a59;
        const _0x51bf99 = {
          url2: _0x3bc0c6
        };
        devLog("调用  备用接口", _0x51bf99);
        let _0x1a1f44 = null;
        let _0x452147 = null;
        try {
          const _0x54aeca = await httpFetch(_0x3bc0c6);
          devLog("备用 接口响应", _0x54aeca?.["body"]);
          if (!_0x54aeca?.["body"]) {
            throw new Error(" 接口无数据");
          }
          _0x452147 = _0x54aeca.body;
          switch (_0xb0a4b6) {
            case "flac":
            case "flac24bit":
            case "master":
            case "atmos":
              _0x1a1f44 = _0x4046d6("song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url");
              break;
            case "320k":
              _0x1a1f44 = _0x4046d6("song_play_url_hq", "song_play_url_standard", "song_play_url");
              break;
            default:
              _0x1a1f44 = _0x4046d6("song_play_url_standard", "song_play_url", "song_play_url_fq");
              break;
          }
        } catch (_0x3c6925) {
          console.warn("接口请求超时/异常，切换兜底接口：", _0x3c6925.message);
        }
        if (_0x1a1f44) {
          _0x3d1067 = _0x1a1f44;
          break;
        }
        const _0x242fef = _0x88c407[_0xb0a4b6] || 128;
        const _0x1213be = "https://metingapi.nanorocky.top/?server=tencent&type=url&br=" + _0x242fef + "&id=" + _0x5a5a59;
        try {
          const _0xd4d2cc = await getFinalPlayUrl(_0x1213be);
          if (_0xd4d2cc) {
            _0x3d1067 = _0xd4d2cc;
            break;
          }
        } catch (_0xadea1) {
          console.warn("兜底 接口失败", _0xadea1.message);
        }
        throw new Error("QQ音乐所有接口均无可用地址");
      }
    case "wy":
      {
        devLog("开始解析网易云音乐");
        const _0xd01c42 = {
          "128k": "standard",
          "320k": "exhigh",
          flac: "lossless",
          flac24bit: "hires",
          hires: "hires",
          master: "jymaster",
          atmos: "jyeffect"
        };
        const _0x3e055c = _0x598ae9?.["songmid"] || _0x598ae9?.["songId"];
        if (!_0x3e055c) {
          throw new Error("网易云歌曲ID不存在");
        }
        const _0x408587 = _0x335b15 => typeof _0x335b15 === "string" && _0x335b15.trim() !== "";
        try {
          const _0x2b7709 = _0xd01c42[_0xb0a4b6] || "standard";
          const _0x55c334 = "https://api.chksz.top/api/163_music?id=" + _0x3e055c + "&level=" + _0x2b7709;
          const _0x39fa3e = await httpFetch(_0x55c334);
          devLog("网易云 1 接口响应", _0x39fa3e?.["body"]);
          const _0x34169f = _0x39fa3e?.["body"]?.["data"]?.["url"];
          if (_0x39fa3e?.["body"]?.["code"] == 200 && _0x408587(_0x34169f)) {
            _0x3d1067 = _0x34169f.trim();
            break;
          }
        } catch (_0x2c4da8) {
          console.error("[YNX] 网易云1 请求失败:", _0x2c4da8);
        }
        try {
          const _0x4b9feb = _0xd01c42[_0xb0a4b6] || "standard";
          const _0x27c4c3 = "https://mcp.nianxinxz.com/share/ceshi/wy.php?id=" + _0x3e055c + "&level=" + _0x4b9feb;
          const _0x346d12 = await httpFetch(_0x27c4c3);
          devLog("网易云 2 接口响应", _0x346d12?.["body"]);
          const _0x38829c = _0x346d12?.["body"]?.["url"];
          if (_0x346d12?.["body"]?.["code"] === 200 && _0x408587(_0x38829c)) {
            _0x3d1067 = _0x38829c.trim();
            break;
          }
        } catch (_0x29554a) {
          console.error("[YNX] 网易云 2 请求失败:", _0x29554a);
        }
        const _0x2167e7 = {
          "128k": 128,
          "320k": 320,
          flac: 999,
          flac24bit: 1999,
          atmos: 2999,
          atmos_plus: 8999,
          master: 32000
        };
        const _0x1a36cd = _0x2167e7[_0xb0a4b6] || 128;
        const _0x4c3a41 = "https://metingapi.nanorocky.top/?server=netease&type=url&br=" + _0x1a36cd + "&id=" + _0x3e055c;
        const _0x1ce75c = await getFinalPlayUrl(_0x4c3a41);
        if (_0x1ce75c) {
          _0x3d1067 = _0x1ce75c;
          break;
        }
        throw new Error("网易云所有接口均获取失败");
      }
    case "kw":
      {
        const _0x22949c = {
          musicInfo: _0x598ae9,
          quality: _0xb0a4b6
        };
        devLog("开始解析酷我音乐", _0x22949c);
        const _0x5df046 = {
          "128k": "128kmp3",
          "320k": "320kmp3",
          flac: "2000kflac",
          flac24bit: "4000kflac",
          atmos: "4000kflac",
          atmos_plus: "4000kflac",
          master: "4000kflac"
        };
        const _0x242278 = _0x598ae9.songmid;
        const _0x327bfd = _0x5df046[_0xb0a4b6];
        const _0x22d9cd = (_0x494773 = 4) => {
          if (_0x494773 <= 0) {
            return 0;
          }
          const _0x1727b5 = Math.min(Math.pow(256, _0x494773) - 1, Number.MAX_SAFE_INTEGER);
          return Math.floor(Math.random() * _0x1727b5);
        };
        const _0x5e1c17 = _0x22d9cd(4);
        const _0x287b1d = _0x22d9cd(4);
        const _0x2d747f = "https://nmobi.kuwo.cn/mobi.s?f=web&source=kwplayercar_ar_6.0.0.9_B_jiakong_vh.apk&type=convert_url_with_sign&rid=" + _0x242278 + "&br=" + _0x327bfd + "&user=" + _0x5e1c17 + "&loginUid=" + _0x287b1d;
        const _0x1f8f28 = await httpFetch(_0x2d747f);
        devLog("酷我接口响应", _0x1f8f28.body);
        if (_0x1f8f28.body?.["code"] !== 200) {
          throw new Error(_0x1f8f28.body?.["msg"] || "酷我音乐解析失败");
        }
        const _0xbfb51a = _0x1f8f28.body.data?.["url"];
        if (!_0xbfb51a) {
          throw new Error("未获取到有效播放链接");
        }
        _0x3d1067 = _0xbfb51a.replace(/\$/g, "&").replace(/\u0026/g, "&");
        break;
      }
    case "kg":
      {
        try {
          const _0x68a514 = {
            "128k": "standard",
            "320k": "exhigh",
            flac: "lossless",
            flac24bit: "lossless",
            atmos: "lossless",
            atmos_plus: "lossless",
            master: "lossless"
          };
          const _0x2bbc85 = _0x598ae9?.["hash"]?.["toLowerCase"]() || "";
          if (!_0x2bbc85) {
            throw new Error("酷狗歌曲ID不存在");
          }
          const _0x393897 = _0x440c90 => typeof _0x440c90 === "string" && _0x440c90.trim() !== "";
          const _0x5f1574 = _0x68a514[_0xb0a4b6] || "standard";
          const _0x19292c = "https://music.haitangw.cc/kgqq1/kg.php?id=" + _0x2bbc85 + "&level=" + _0x5f1574;
          const _0x34167d = await httpFetch(_0x19292c);
          devLog("kg接口响应", _0x34167d?.["body"]);
          const _0x7ccef0 = _0x34167d?.["body"]?.["data"]?.["url"];
          if (_0x34167d?.["body"]?.["code"] === 200 && _0x7ccef0 && _0x393897(_0x7ccef0)) {
            return _0x7ccef0.trim();
          }
          throw new Error("未获取到有效播放链接");
        } catch (_0x1dfb9f) {
          devLog("kg解析出错", _0x1dfb9f);
          throw new Error(_0x1dfb9f.message || "解析酷狗音乐播放链接失败");
        }
      }
    default:
      throw new Error("不支持的音源：" + _0x1f5e17);
  }
  if (_0x3d1067) {
    setCache(_0x3e097f, _0x3d1067);
  }
  return _0x3d1067;
};
on(EVENT_NAMES.request, ({
  action: _0x14b22a,
  source: _0x4ce398,
  info: _0x543cf9
}) => _0x14b22a === "musicUrl" ? (devLog("收到播放请求", {
  action: _0x14b22a,
  source: _0x4ce398,
  info: _0x543cf9
}), handleGetMusicUrl(_0x4ce398, _0x543cf9.musicInfo, _0x543cf9.type)) : Promise.reject("不支持"));
const _0x3410ae = {
  name: "QQ音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.tx
};
const _0x481b6a = {
  name: "网易云音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.wy
};
const _0x394adb = {
  name: "酷我音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.kw
};
const _0x22b826 = {
  name: "酷狗音乐",
  type: "music",
  actions: ["musicUrl"],
  qualitys: MUSIC_QUALITY.kg
};
const _0x18cdfe = {
  tx: _0x3410ae,
  wy: _0x481b6a,
  kw: _0x394adb,
  kg: _0x22b826
};
const initConfig = {
  openDevTools: DEV_ENABLE,
  sources: _0x18cdfe
};
if (!isDesktop) {
  const _0x3d3cdf = {
    status: true,
    maxLimit: 5,
    timeout: 10000,
    retry: 1
  };
  Object.assign(initConfig, _0x3d3cdf);
}
send(EVENT_NAMES.inited, initConfig);
devLog("双端通用脚本已加载");
const scriptInfo = globalThis.lx.currentScriptInfo;
if (scriptInfo && (scriptInfo.name !== "lx-玉宁熙" || scriptInfo.author !== "ynx(2363768762)")) {
  throw new Error("初始化失败！请检查音源信息");
}
function compareVersion(_0x4d6caa, _0x40b495) {
  if (typeof _0x4d6caa !== "string" || typeof _0x40b495 !== "string") {
    return 0;
  }
  const _0xeaf66c = {
    numeric: true
  };
  return _0x40b495.replace("v", "").localeCompare(_0x4d6caa.replace("v", ""), undefined, _0xeaf66c);
}
const UPDATE_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx-玉宁熙.js";
const CHECK_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx.json";
const checkLatestVersion = async () => {
  try {
    devLog("开始检查更新");
    const _0x32f7d2 = await new Promise((_0xdea47d, _0x3a1966) => globalThis.lx.request(CHECK_URL, {}, (_0x3e55f5, _0x1496f6) => _0x3e55f5 ? _0x3a1966(_0x3e55f5) : _0xdea47d(_0x1496f6)));
    const _0x3961ff = _0x32f7d2?.["body"];
    devLog("更新检查响应");
    if (!_0x3961ff) {
      return;
    }
    const _0x267f12 = _0x3961ff.latest;
    const _0x185ecf = _0x3961ff.log;
    const _0x2ce1c7 = globalThis.lx.currentScriptInfo?.["version"];
    if (_0x267f12 && _0x2ce1c7 && typeof _0x267f12 === "string" && typeof _0x2ce1c7 === "string") {
      if (compareVersion(_0x2ce1c7, _0x267f12) > 0) {
        const _0x50ce0e = {
          latest: _0x267f12,
          current: _0x2ce1c7,
          uplog: _0x185ecf
        };
        devLog("发现新版本", _0x50ce0e);
        const _0x322433 = {
          log: "发现新版本 " + _0x267f12 + "！\n更新内容 " + _0x185ecf,
          updateUrl: UPDATE_URL
        };
        globalThis.lx.send(globalThis.lx.EVENT_NAMES.updateAlert, _0x322433);
      }
    }
  } catch (_0x128671) {}
};
setTimeout(checkLatestVersion, 2000);