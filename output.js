//Tue Aug 11 2026 13:40:34 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const URL_CONFIG = {
  api: "https://musicserver.haitangw.cc/v1/music/resolve-url"
};
const devLog = (..._0x127a42) => console.log("[音源日志]", ..._0x127a42);
const isValidUrl = _0x1a99e8 => {
  if (!_0x1a99e8 || typeof _0x1a99e8 !== "string") {
    return false;
  }
  return /^https?:\/\/.+/.test(_0x1a99e8);
};
const getMgUrl = async (_0xa1ae5e, _0xff508b) => {
  const _0x5cf4dd = _0xa1ae5e.songmid;
  const _0x30b90b = _0xa1ae5e.name || _0xa1ae5e.songName || "";
  if (!_0x5cf4dd) {
    throw new Error("咪咕歌曲ID不存在");
  }
  const _0x54fe5d = {
    "128k": "128k",
    "320k": "320k",
    flac: "flac",
    flac24bit: "flac24bit",
    hires: "flac24bit"
  };
  const _0x2cbe93 = _0x54fe5d[_0xff508b] || "128k";
  const _0x3061d6 = "https://yy.zddyr.top/lx/api/?source=migu&name=" + encodeURIComponent(_0x30b90b) + "&songmid=" + _0x5cf4dd + "&quality=" + _0x2cbe93;
  const _0x521d01 = {
    timeout: 8000,
    retry: 1
  };
  const _0x39f604 = await httpFetch(_0x3061d6, _0x521d01);
  devLog("咪咕第三方接口响应", _0x39f604?.["body"]);
  const _0x2610b7 = _0x39f604?.["body"]?.["url"];
  if (_0x39f604?.["body"]?.["code"] === 200 && isValidUrl(_0x2610b7)) {
    return _0x2610b7.trim();
  }
  throw new Error("第三方接口无" + _0xff508b + "资源");
};
const _0xb5c3ce = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  flac24bit: "hires",
  hires: "hires",
  atmos: "atmos",
  master: "clear"
};
const _0x2403e0 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  flac24bit: "2599",
  atmos: "2599",
  atmos_plus: "2999",
  master: "jymaster"
};
const _0x4f8a89 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  flac24bit: "hires",
  hires: "hires",
  atmos: "jyeffect",
  master: "jymaster"
};
const _0x19a3cc = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  flac24bit: "atmos",
  atmos: "atmos",
  atmos_plus: "atmos_plus",
  master: "master"
};
const _0x100d14 = {
  "128k": "128k",
  "320k": "320k",
  flac: "flac",
  flac24bit: "flac24bit",
  hires: "flac24bit"
};
const QUALITY_MAP = {
  kg: _0xb5c3ce,
  tx: _0x2403e0,
  wy: _0x4f8a89,
  kw: _0x19a3cc,
  mg: _0x100d14
};
const PLATFORM_ALLOW_LEVEL = {
  kg: ["clear", "atmos", "hires", "lossless", "exhigh", "standard"],
  tx: ["jymaster", "2999", "2599", "lossless", "exhigh", "standard"],
  wy: ["jymaster", "jyeffect", "hires", "lossless", "exhigh", "standard"],
  kw: ["master", "atmos_plus", "atmos", "lossless", "exhigh", "standard"],
  mg: ["128k", "320k", "flac", "flac24bit", "hires"]
};
const SOURCE_QUALITY_LIST = {
  kg: ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "master"],
  tx: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  wy: ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "master"],
  kw: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  mg: ["128k", "320k", "flac", "flac24bit", "hires"]
};
const PLATFORM_NAME = {
  kg: "酷狗音乐",
  tx: "QQ音乐",
  wy: "网易云音乐",
  kw: "酷我音乐",
  mg: "咪咕音乐"
};
const httpFetch = (_0x46ae7b, _0x32a4e9 = {}) => new Promise((_0x3e9f6c, _0x2cc8c0) => {
  request(_0x46ae7b, _0x32a4e9, (_0x3ae78c, _0x1ac70a) => {
    {
      if (_0x3ae78c) {
        return _0x2cc8c0(_0x3ae78c);
      }
      const _0x99d700 = {
        body: _0x1ac70a.body,
        statusCode: _0x1ac70a.statusCode,
        headers: _0x1ac70a.headers || {},
        finalUrl: _0x1ac70a.finalUrl || _0x46ae7b
      };
      _0x3e9f6c(_0x99d700);
    }
  });
});
const getRedirectLocation = (_0x48860f, _0x13201d = 8000) => new Promise(async (_0x4a7ca4, _0x173ebf) => {
  try {
    {
      const _0x26c12f = {
        timeout: _0x13201d
      };
      const _0x1a8e86 = await httpFetch(_0x48860f, _0x26c12f);
      _0x4a7ca4(_0x1a8e86.finalUrl);
    }
  } catch (_0xbc4ba9) {
    {
      console.log("[GET异常]", _0xbc4ba9);
      _0x173ebf(_0xbc4ba9);
    }
  }
});
function getSafeLevel(_0x3df224, _0x14634f) {
  const _0x49fa5d = PLATFORM_ALLOW_LEVEL[_0x3df224];
  console.log("[降级校验] 音源:", _0x3df224, "目标level:", _0x14634f, "允许档位:", _0x49fa5d);
  if (_0x49fa5d.includes(_0x14634f)) {
    return _0x14634f;
  }
  const _0x27d015 = _0x49fa5d[0];
  console.log("[触发降级] 目标档位不可用，降级至:", _0x27d015);
  return _0x27d015;
}
function compareVersions(_0x49a92c, _0x39f8a1) {
  const _0x20429c = _0x49a92c.replace(/^v/, "").split(".").map(Number);
  const _0x18e1e3 = _0x39f8a1.replace(/^v/, "").split(".").map(Number);
  const _0xd55617 = Math.max(_0x20429c.length, _0x18e1e3.length);
  for (let _0x5cdba8 = 0; _0x5cdba8 < _0xd55617; _0x5cdba8++) {
    {
      const _0x79af62 = _0x20429c[_0x5cdba8] || 0;
      const _0x3c4453 = _0x18e1e3[_0x5cdba8] || 0;
      if (_0x79af62 > _0x3c4453) {
        return 1;
      }
      if (_0x79af62 < _0x3c4453) {
        return -1;
      }
    }
  }
  return 0;
}
async function getMusicSourceUrl(_0x4f7701, _0x19da7b, _0x106c9c) {
  let _0xe26064;
  if (_0x4f7701 === "kg") {
    {
      _0xe26064 = _0x19da7b.hash || _0x19da7b.songmid || _0x19da7b.id || "";
    }
  } else {
    _0xe26064 = _0x19da7b.songmid || _0x19da7b.id || "";
  }
  const _0x336e79 = String(_0xe26064);
  if (!_0x336e79) {
    throw new Error("缺失歌曲标识 songmid / id / hash");
  }
  let _0xace189 = getSafeLevel(_0x4f7701, _0x106c9c);
  if (_0x4f7701 === "mg") {
    _0xace189 = "standard";
  }
  if (_0x4f7701 === "tx" && (_0xace189 === "2599" || _0xace189 === "2999")) {
    {
      const _0x52db64 = "https://metingapi.nanorocky.top/?server=tencent&type=url&id=" + _0x336e79 + "&br=" + _0xace189;
      const _0x2a9e5f = {
        timeout: 8000
      };
      const _0x1429ac = await httpFetch(_0x52db64, _0x2a9e5f);
      const _0x22525a = _0x1429ac.body;
      if (_0x22525a.code !== 0 || !_0x22525a.data?.["url"]) {
        {
          throw new Error(_0x22525a.message || "QQ音源无可用播放链接");
        }
      }
      return _0x22525a.data.url;
    }
  }
  const _0xbe9f0e = {
    source: _0x4f7701,
    rid: _0x336e79,
    level: _0xace189
  };
  const _0x352766 = await httpFetch("https://musicserver.haitangw.cc/v1/music/resolve-url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: _0xbe9f0e,
    timeout: 8000
  });
  const _0x48b7e8 = _0x352766.body;
  if (_0x48b7e8.code !== 0 || !_0x48b7e8.data?.["url"]) {
    {
      throw new Error(_0x48b7e8.message || "无可用播放链接");
    }
  }
  let _0x6fb9c5 = _0x48b7e8.data.url;
  return _0x6fb9c5;
}
async function checkUpdate() {
  try {
    {
      const _0x3c2d58 = {
        timeout: 3000
      };
      const _0xd868f1 = await httpFetch(URL_CONFIG.versionCheck, _0x3c2d58);
      if (_0xd868f1.statusCode !== 200) {
        return null;
      }
      const _0x1344b6 = _0xd868f1.body;
      if (!_0x1344b6?.["version"]) {
        return null;
      }
      if (compareVersions(SCRIPT_VERSION, _0x1344b6.version) < 0) {
        {
          const _0x5d2094 = {
            version: _0x1344b6.version,
            updateUrl: _0x1344b6.updateUrl,
            description: _0x1344b6.description || ""
          };
          return _0x5d2094;
        }
      }
      return null;
    }
  } catch (_0x11a045) {
    {
      console.log("版本检测失败", _0x11a045);
      return null;
    }
  }
}
on(EVENT_NAMES.request, async ({
  action: _0x144409,
  source: _0x1d124f,
  info: _0x431836
}) => {
  if (!QUALITY_MAP[_0x1d124f]) {
    throw new Error("不支持音源:" + _0x1d124f);
  }
  const _0x5f4107 = _0x431836.musicInfo;
  switch (_0x144409) {
    case "musicUrl":
      {
        const _0x4eba40 = _0x431836.type;
        await httpFetch("https://www.97abc.com/count.php?id=lx-yuningxi-cq");
        console.log("[播放器请求] 音源:", _0x1d124f, "面板选择音质:", _0x4eba40);
        if (_0x1d124f === "mg") {
          {
            try {
              {
                return await getMgUrl(_0x5f4107, _0x4eba40);
              }
            } catch (_0x46fbd5) {
              {
                console.log("咪咕第三方接口失效，换接口，音质固定standard", _0x46fbd5.message);
                return await getMusicSourceUrl(_0x1d124f, _0x5f4107, _0x4eba40);
              }
            }
          }
        }
        const _0xf510ff = QUALITY_MAP[_0x1d124f][_0x4eba40];
        const _0x2038bc = await getMusicSourceUrl(_0x1d124f, _0x5f4107, _0xf510ff);
        return _0x2038bc;
      }
    default:
      throw new Error("不支持动作:" + _0x144409);
  }
});
(async () => {
  const _0x3d85ff = {};
  Object.keys(SOURCE_QUALITY_LIST).forEach(_0x10bf42 => {
    _0x3d85ff[_0x10bf42] = {
      name: PLATFORM_NAME[_0x10bf42],
      type: "music",
      actions: ["musicUrl"],
      qualitys: SOURCE_QUALITY_LIST[_0x10bf42]
    };
  });
  const _0x56b7fd = {
    status: true,
    sources: _0x3d85ff
  };
  send(EVENT_NAMES.inited, _0x56b7fd);
  console.log("屿溪音源初始化完成");
})();