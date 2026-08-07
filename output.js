//Fri Aug 07 2026 15:43:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

const {
  EVENT_NAMES,
  request,
  on,
  send,
  env,
  version
} = globalThis.lx;
const _B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const _d = _0x38b955 => {
  try {
    const _0x1113bc = _0x38b955.split("").reverse().join("");
    let _0x100268 = "";
    for (let _0xa963a7 = 0; _0xa963a7 < _0x1113bc.length; _0xa963a7++) {
      const _0x4c484a = _0x1113bc[_0xa963a7];
      if (_B64.indexOf(_0x4c484a) >= 0 || _0x4c484a === "=") {
        _0x100268 += _0x4c484a;
      }
    }
    let _0x3ac688 = "";
    for (let _0x5b2b51 = 0; _0x5b2b51 < _0x100268.length; _0x5b2b51 += 4) {
      const _0x37fc7b = _B64.indexOf(_0x100268[_0x5b2b51]);
      const _0x17b4a5 = _B64.indexOf(_0x100268[_0x5b2b51 + 1]);
      const _0x49ef11 = _B64.indexOf(_0x100268[_0x5b2b51 + 2]);
      const _0x5e6d88 = _B64.indexOf(_0x100268[_0x5b2b51 + 3]);
      if (_0x37fc7b < 0 || _0x17b4a5 < 0) {
        break;
      }
      _0x3ac688 += String.fromCharCode(_0x37fc7b << 2 | _0x17b4a5 >> 4);
      if (_0x49ef11 >= 0 && _0x100268[_0x5b2b51 + 2] !== "=") {
        _0x3ac688 += String.fromCharCode((_0x17b4a5 & 15) << 4 | _0x49ef11 >> 2);
      }
      if (_0x5e6d88 >= 0 && _0x100268[_0x5b2b51 + 3] !== "=") {
        _0x3ac688 += String.fromCharCode((_0x49ef11 & 3) << 6 | _0x5e6d88);
      }
    }
    try {
      return decodeURIComponent(escape(_0x3ac688));
    } catch (_0x4c6509) {
      return _0x3ac688;
    }
  } catch (_0x5e83fc) {
    return _0x38b955;
  }
};
const _e = _0x90377 => {
  try {
    let _0x5d7180 = "";
    for (let _0x1ede5e = 0; _0x1ede5e < _0x90377.length; _0x1ede5e++) {
      const _0x1fc424 = _0x90377.charCodeAt(_0x1ede5e);
      if (_0x1fc424 < 128) {
        _0x5d7180 += String.fromCharCode(_0x1fc424);
      } else {
        _0x1fc424 < 2048 ? (_0x5d7180 += String.fromCharCode(192 | _0x1fc424 >> 6), _0x5d7180 += String.fromCharCode(128 | _0x1fc424 & 63)) : (_0x5d7180 += String.fromCharCode(224 | _0x1fc424 >> 12), _0x5d7180 += String.fromCharCode(128 | _0x1fc424 >> 6 & 63), _0x5d7180 += String.fromCharCode(128 | _0x1fc424 & 63));
      }
    }
    let _0x1ec02b = "";
    for (let _0x1a066e = 0; _0x1a066e < _0x5d7180.length; _0x1a066e += 3) {
      const _0x3d2a7a = _0x5d7180.charCodeAt(_0x1a066e);
      const _0x2dd58d = _0x1a066e + 1 < _0x5d7180.length ? _0x5d7180.charCodeAt(_0x1a066e + 1) : 0;
      const _0x25ee4a = _0x1a066e + 2 < _0x5d7180.length ? _0x5d7180.charCodeAt(_0x1a066e + 2) : 0;
      _0x1ec02b += _B64[_0x3d2a7a >> 2];
      _0x1ec02b += _B64[(_0x3d2a7a & 3) << 4 | _0x2dd58d >> 4];
      _0x1ec02b += _0x1a066e + 1 < _0x5d7180.length ? _B64[(_0x2dd58d & 15) << 2 | _0x25ee4a >> 6] : "=";
      _0x1ec02b += _0x1a066e + 2 < _0x5d7180.length ? _B64[_0x25ee4a & 63] : "=";
    }
    return _0x1ec02b.split("").reverse().join("");
  } catch (_0x2fc11c) {
    return _0x90377;
  }
};
const API = {
  localQQ: {
    base: _d("1MDMzoTO0EjLz4CM44SM3EzLvoDc0RHa"),
    enabled: true
  },
  localWy: {
    base: _d("2MDMzoTO0EjLz4CM44SM3EzLvoDc0RHa"),
    enabled: true
  },
  miguLocal: {
    base: _d("3MDMzoTO0EjLz4CM44SM3EzLvoDc0RHa"),
    enabled: true
  },
  toubiec: {
    base: _d("uNmLjVWaiV3b05SawFWe39yL6MHc0RHa"),
    enabled: true
  },
  ffapi: {
    base: _d("=IjdvQnbp9ibj5SawFmZm9yL6MHc0RHa"),
    enabled: true
  },
  yaohu: {
    base: _d("==wYpNXdt9SawF2LuNmLkVHavFWeukGch9yL6MHc0RHa"),
    key: _d("==gNBhGRyZkTTZ0Q3cne2R3SnZnb"),
    enabled: true
  },
  suyinQQ: {
    base: _d("jl2c110XRF1LpBXYvQXZu5SawFWav9yL6MHc0RHa"),
    key: _d("1cTNygTY3AjMlNDZtMGO3gTLkdzYk1iZyMWYtcjYzMTM2YWZtkGchl2b"),
    enabled: true
  },
  suyinWy: {
    base: _d("==wM2EzXjl2c110LpBXYvQXZu5SawFWav9yL6MHc0RHa"),
    key: _d("1cTNygTY3AjMlNDZtMGO3gTLkdzYk1iZyMWYtcjYzMTM2YWZtkGchl2b"),
    enabled: true
  },
  suyinKw: {
    base: _d("=82d1t0LpBXYvQXZu5SawFWav9yL6MHc0RHa"),
    key: _d("1cTNygTY3AjMlNDZtMGO3gTLkdzYk1iZyMWYtcjYzMTM2YWZtkGchl2b"),
    enabled: true
  },
  cyapi: {
    qq: _d("==AcoBnLjl2c112XxF3LJBVQvA3b05SawFWej9yL6MHc0RHa"),
    wy: _d("whGcuU2chVGdl52LJBVQvA3b05SawFWej9yL6MHc0RHa"),
    key: _d("==wMlRTZ5Q2NxY2N4EWOwUWO4EmNyAjZyEzYxEWZxIGMidjMyQWMzcTO0gzYykTMxM2N0Q2MjFjY5EGM5UGOidTN"),
    enabled: true
  },
  chksz: {
    base: _d("==QawF2Lw9Gduo3crh2YukGch9yL6MHc0RHa"),
    enabled: true
  },
  yuningxi: {
    base: _d("==gbj5yZuVmZhVXeuIjdtkGch9yL6MHc0RHa"),
    key: _d("==wM3gjMyMTOhZ2YiVGN1EGMwYWO2gzMiBDO0QzYmR2YlFTZwEWY2UGOlJ2M2cTM1IDOhljZ1ETO2MDNhF2NzIWZ"),
    enabled: true
  },
  fish: {
    base: _d("=UWbuQXZlNXZj5SawFWLt9yL6MHc0RHa"),
    enabled: true
  },
  hywmusic: {
    base: _d("w9Gaz5CNkFDNyEGei5yYpNXdt9yL6MHc0RHa"),
    enabled: true
  },
  yaohuMg: {
    base: _d("=U3Zp12Ljl2c112LpBXYv42YuMHd2NGeukGch9yL6MHc0RHa"),
    enabled: true
  },
  qqExploit: {
    key: _d("=ElZalmdyZ3VSJ1Qhp1bJh3YwNXNxdXSHJVRCpXcYhTcjd0Z3UDMjdnTOB3QFh1Xj9VQa1mRmJ0QtxWRsV3a1JGM30iVrBHW2Uzbwg2TtZUbo50MmNDRwY3YD50MrNjNfx0XI9VU"),
    uin: _d("==ANxgTO5IjN3YzM"),
    enabled: true
  }
};
const SCRIPT_NAME = "紧急修复[超级聚合音源]";
const SCRIPT_VERSION = "1.7.4";
const SUPPORTED_SOURCES = ["wy", "tx", "kw", "kg", "mg"];
const PLATFORM_NAMES = {
  wy: "网易云音乐",
  tx: "QQ音乐",
  kw: "酷我音乐",
  kg: "酷狗音乐",
  mg: "咪咕音乐"
};
const QUALITY_FALLBACK = {
  master: ["master", "hires", "flac24bit", "flac", "320k", "128k"],
  hires: ["hires", "flac24bit", "flac", "320k", "128k"],
  flac24bit: ["flac24bit", "flac", "320k", "128k"],
  flac: ["flac", "320k", "128k"],
  atmos: ["atmos", "master", "flac", "320k", "128k"],
  atmos_plus: ["atmos_plus", "atmos", "master", "flac", "320k", "128k"],
  "320k": ["320k", "192k", "128k"],
  "192k": ["192k", "320k", "128k"],
  "128k": ["128k"]
};
const PLATFORM_QUALITIES = {
  tx: {
    supported: ["128k", "320k", "flac", "hires", "master", "atmos", "atmos_plus"],
    note: "QQ越权支持全音质"
  },
  wy: {
    supported: ["128k", "320k", "flac", "hires", "master"],
    note: "多API聚合"
  },
  kw: {
    supported: ["128k", "320k", "flac", "hires"],
    note: "妖狐搜索返回无损"
  },
  kg: {
    supported: ["128k", "320k", "flac"],
    note: "妖狐搜索返回无损"
  },
  mg: {
    supported: ["128k", "320k", "flac"],
    note: "本地API: PQ/HQ/SQ"
  }
};
const _mask = _0x35ef10 => {
  if (!_0x35ef10) {
    return _0x35ef10;
  }
  let _0x357718 = String(_0x35ef10);
  _0x357718 = _0x357718.replace(/([?&](?:key|apikey|api_key|token|access_token|qm_keyst|qqmusic_key|psrf_qqaccess_token|contentId|copyrightId|songId|songmid)=)([^&\s"'<>]+)/gi, (_0x2ed33f, _0x46b008, _0x2540fb) => _0x46b008 + "<<E:" + _e(_0x2540fb) + ">>");
  _0x357718 = _0x357718.replace(/(\d{1,3}\.\d{1,3})\.(\d{1,3}\.\d{1,3})(:\d+)?/g, (_0xc0fced, _0x1db5ee, _0x46a0f8, _0x2bf692) => _0x1db5ee + ".<<E:" + _e(_0x46a0f8) + ">>" + (_0x2bf692 || ""));
  _0x357718 = _0x357718.replace(/(https?:\/\/[^/]+\/)([^\s"'<>]{15,})/g, (_0x19d386, _0x5b71a7, _0x464888) => _0x464888.includes("<<E:") ? _0x19d386 : _0x5b71a7 + "<<E:" + _e(_0x464888) + ">>");
  _0x357718 = _0x357718.replace(/(contentId[=:]\s?)(\d+)/gi, (_0x5a93a, _0x42e618, _0x58d081) => _0x42e618 + "<<E:" + _e(_0x58d081) + ">>");
  _0x357718 = _0x357718.replace(/(copyrightId[=:]\s?)(\d+)/gi, (_0x509a86, _0x24066b, _0x73a6b0) => _0x24066b + "<<E:" + _e(_0x73a6b0) + ">>");
  _0x357718 = _0x357718.replace(/(qm_keyst=)([^;\s<>]+)/gi, (_0x832a21, _0xaf94b7, _0x3494e5) => _0xaf94b7 + "<<E:" + _e(_0x3494e5) + ">>");
  _0x357718 = _0x357718.replace(/(uin=o)(\d+)/gi, (_0x3e9700, _0x43220e, _0x3131fa) => _0x43220e + "<<E:" + _e(_0x3131fa) + ">>");
  _0x357718 = _0x357718.replace(/(purl[=:]\s?)([^\s"'<>]{10,})/gi, (_0x522527, _0x13ea4f, _0x2e64a1) => _0x13ea4f + "<<E:" + _e(_0x2e64a1) + ">>");
  return _0x357718;
};
const _maskArgs = _0x51194f => _0x51194f.map(_0x820dce => {
  if (typeof _0x820dce === "string") {
    return _mask(_0x820dce);
  }
  if (typeof _0x820dce === "object") {
    try {
      return _mask(JSON.stringify(_0x820dce));
    } catch (_0xfe938a) {
      return "[obj]";
    }
  }
  return _0x820dce;
});
const log = {
  i: (..._0x153bdd) => {
    try {
      console.log("[紧急修复]", ..._maskArgs(_0x153bdd));
    } catch (_0x489b5f) {}
  },
  e: (..._0x2f4c36) => {
    try {
      console.error("[紧急修复 ERR]", ..._maskArgs(_0x2f4c36));
    } catch (_0x32934f) {}
  },
  w: (..._0x3dc22f) => {
    try {
      console.warn("[紧急修复 WARN]", ..._maskArgs(_0x3dc22f));
    } catch (_0x1318dd) {}
  },
  d: (..._0x414fc0) => {
    try {
      console.debug("[紧急修复 DBG]", ..._maskArgs(_0x414fc0));
    } catch (_0x2db53f) {}
  },
  t: (_0x2e25a4, ..._0x217293) => {
    try {
      const _0x4f0425 = new Date().toISOString().substring(11, 19);
      const _0x347f04 = _0x2e25a4 === "e" ? console.error : _0x2e25a4 === "w" ? console.warn : console.log;
      _0x347f04("[紧急修复 " + _0x4f0425 + "]", ..._maskArgs(_0x217293));
    } catch (_0x1f8f48) {}
  }
};
const DEFAULT_TIMEOUT = 4000;
const http = (_0x3089b1, _0x246e34 = {}) => new Promise((_0x23c022, _0x276712) => {
  const _0x1c0d5c = {
    method: "GET",
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "X-Client-Software": "lx"
    }
  };
  const _0x13e257 = {
    ..._0x1c0d5c,
    ..._0x246e34
  };
  log.d("HTTP", _0x13e257.method, _0x3089b1.substring(0, 120));
  request(_0x3089b1, _0x13e257, (_0x258314, _0x5461ed) => {
    if (_0x258314) {
      log.d("HTTP错误:", _0x258314.message || _0x258314);
      return _0x276712(new Error("请求错误: " + (_0x258314.message || _0x258314)));
    }
    let _0x57e225 = _0x5461ed?.["body"];
    if (typeof _0x57e225 === "string") {
      const _0x51ec32 = _0x57e225.trim();
      if (_0x51ec32.startsWith("{") || _0x51ec32.startsWith("[")) {
        try {
          _0x57e225 = JSON.parse(_0x51ec32);
        } catch (_0x230c8c) {}
      }
    }
    _0x23c022({
      statusCode: _0x5461ed?.["statusCode"] ?? 0,
      headers: _0x5461ed?.["headers"] || {},
      body: _0x57e225
    });
  });
});
const isValidJsonResponse = _0x59a484 => {
  if (!_0x59a484 || _0x59a484.statusCode >= 400) {
    return false;
  }
  const _0x53d65b = _0x59a484.body;
  if (!_0x53d65b) {
    return false;
  }
  if (typeof _0x53d65b === "object") {
    return true;
  }
  if (typeof _0x53d65b === "string") {
    const _0xff34c = _0x53d65b.trim().toLowerCase();
    if (_0xff34c.startsWith("<!doctype") || _0xff34c.startsWith("<html")) {
      return false;
    }
    if (_0xff34c.includes("cloudflare") && _0xff34c.includes("challenge")) {
      return false;
    }
    if (_0xff34c.includes("just a moment")) {
      return false;
    }
  }
  return true;
};
const fetchJSON = async (_0x4a3b8d, _0x458cd7 = {}) => {
  const _0x4bcf6b = await http(_0x4a3b8d, _0x458cd7);
  if (!isValidJsonResponse(_0x4bcf6b)) {
    throw new Error("HTTP " + _0x4bcf6b.statusCode + ": " + _mask(_0x4a3b8d).substring(0, 60));
  }
  let _0x105860 = _0x4bcf6b.body;
  if (typeof _0x105860 === "string") {
    const _0x494ca8 = _0x105860.trim();
    try {
      _0x105860 = JSON.parse(_0x494ca8);
    } catch (_0x2e17d4) {
      throw new Error("JSON解析失败: " + _mask(_0x494ca8).substring(0, 100));
    }
  }
  return _0x105860;
};
const httpGet = async (_0x192751, _0x20fb10 = {}) => {
  const _0x55159a = Object.keys(_0x20fb10).filter(_0x32ec23 => _0x20fb10[_0x32ec23] !== undefined && _0x20fb10[_0x32ec23] !== null).map(_0x102749 => encodeURIComponent(_0x102749) + "=" + encodeURIComponent(_0x20fb10[_0x102749])).join("&");
  const _0x51de93 = _0x192751.includes("?") ? "&" : "?";
  const _0x2d9947 = _0x192751 + (_0x55159a ? _0x51de93 + _0x55159a : "");
  return fetchJSON(_0x2d9947, {
    method: "GET",
    timeout: DEFAULT_TIMEOUT
  });
};
const httpPost = async (_0x51da1b, _0x37621d = {}, _0x5b3a46 = DEFAULT_TIMEOUT) => {
  return fetchJSON(_0x51da1b, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: typeof _0x37621d === "string" ? _0x37621d : JSON.stringify(_0x37621d),
    timeout: _0x5b3a46
  });
};
const getId = _0x45265e => {
  if (!_0x45265e || typeof _0x45265e !== "object") {
    return "";
  }
  const _0x10c86e = _0x45265e.songmid || _0x45265e.songId || _0x45265e.id || _0x45265e.hash || _0x45265e.rid || _0x45265e.musicId || _0x45265e.copyrightId || _0x45265e.songid || _0x45265e.mid || _0x45265e.strMediaMid || _0x45265e.FileHash || _0x45265e.fileHash || _0x45265e.copyrightid || "";
  if (_0x10c86e) {
    return String(_0x10c86e);
  }
  const _0x2fe549 = _0x45265e.source || "";
  switch (_0x2fe549) {
    case "kg":
      return String(_0x45265e.hash || _0x45265e.FileHash || _0x45265e.fileHash || _0x45265e.songId || _0x45265e.id || "");
    case "tx":
      return String(_0x45265e.songmid || _0x45265e.strMediaMid || _0x45265e.mid || _0x45265e.songId || _0x45265e.id || "");
    case "wy":
      return String(_0x45265e.songId || _0x45265e.id || _0x45265e.songmid || "");
    case "kw":
      return String(_0x45265e.songId || _0x45265e.rid || _0x45265e.musicId || _0x45265e.id || _0x45265e.songmid || "");
    case "mg":
      return String(_0x45265e.copyrightId || _0x45265e.songId || _0x45265e.songmid || _0x45265e.id || "");
    default:
      return String(_0x45265e.songId || _0x45265e.songmid || _0x45265e.id || _0x45265e.hash || "");
  }
};
const isValidAudioUrl = _0x388043 => {
  if (!_0x388043 || typeof _0x388043 !== "string") {
    return false;
  }
  if (!_0x388043.startsWith("http://") && !_0x388043.startsWith("https://")) {
    return false;
  }
  if (_0x388043.includes("404") && _0x388043.length < 50) {
    return false;
  }
  const _0x2b573e = _0x388043.toLowerCase();
  const _0x293598 = [".mp3", ".flac", ".m4a", ".ogg", ".wav", "music.126.net", "qqmusic", "kuwo.cn", "kugou.com", "migu", "music"];
  return _0x293598.some(_0x502443 => _0x2b573e.includes(_0x502443));
};
const extractUrl = _0x37004f => {
  if (!_0x37004f) {
    return "";
  }
  if (typeof _0x37004f === "string") {
    return _0x37004f.startsWith("http") ? _0x37004f : "";
  }
  if (typeof _0x37004f !== "object") {
    return "";
  }
  if (typeof _0x37004f.url === "string" && _0x37004f.url.startsWith("http")) {
    return _0x37004f.url;
  }
  if (_0x37004f.data) {
    if (typeof _0x37004f.data === "string" && _0x37004f.data.startsWith("http")) {
      return _0x37004f.data;
    }
    if (typeof _0x37004f.data.url === "string" && _0x37004f.data.url.startsWith("http")) {
      return _0x37004f.data.url;
    }
    if (_0x37004f.data.vipmusic && typeof _0x37004f.data.vipmusic.url === "string" && _0x37004f.data.vipmusic.url.startsWith("http")) {
      return _0x37004f.data.vipmusic.url;
    }
    if (typeof _0x37004f.data.play_url === "string" && _0x37004f.data.play_url.startsWith("http")) {
      return _0x37004f.data.play_url;
    }
    if (Array.isArray(_0x37004f.data) && _0x37004f.data.length > 0) {
      if (typeof _0x37004f.data[0].url === "string" && _0x37004f.data[0].url.startsWith("http")) {
        return _0x37004f.data[0].url;
      }
      if (typeof _0x37004f.data[0] === "string" && _0x37004f.data[0].startsWith("http")) {
        return _0x37004f.data[0];
      }
    }
  }
  if ((_0x37004f.code === 200 || _0x37004f.code === 0 || _0x37004f.status === 200) && _0x37004f.data) {
    return extractUrl({
      data: _0x37004f.data
    });
  }
  if (_0x37004f.text && typeof _0x37004f.text === "string") {
    const _0x13e711 = _0x37004f.text.match(/https?:\/\/[^\s"']+/);
    if (_0x13e711) {
      return _0x13e711[0];
    }
  }
  if (_0x37004f.data && _0x37004f.data.text && typeof _0x37004f.data.text === "string") {
    const _0x50c20d = _0x37004f.data.text.match(/https?:\/\/[^\s"']+/);
    if (_0x50c20d) {
      return _0x50c20d[0];
    }
  }
  return "";
};
const getLocalQQ = async (_0x336f7b, _0xcfe6f2) => {
  const _0x181c97 = getId(_0x336f7b);
  if (!_0x181c97) {
    throw new Error("no id");
  }
  const _0x297098 = {
    "128k": "MP3_128",
    "192k": "MP3_320",
    "320k": "MP3_320",
    flac: "FLAC",
    flac24bit: "Master",
    hires: "Master",
    master: "Master"
  };
  log.d("本地QQ请求:", _0x181c97, _0xcfe6f2);
  const _0x5f0dc1 = await httpGet(API.localQQ.base + "/song/urls", {
    mids: _0x181c97,
    type: _0x297098[_0xcfe6f2] || "MP3_128"
  });
  const _0x18c61a = extractUrl(_0x5f0dc1) || _0x5f0dc1 && _0x5f0dc1.data && _0x5f0dc1.data[_0x181c97] && _0x5f0dc1.data[_0x181c97].url || "";
  if (_0x18c61a) {
    return _0x18c61a;
  }
  throw new Error("localQQ fail: " + _mask(JSON.stringify(_0x5f0dc1)).substring(0, 100));
};
const getLocalWy = async (_0x3c816a, _0x5a819f) => {
  const _0x98d206 = getId(_0x3c816a);
  if (!_0x98d206) {
    throw new Error("no id");
  }
  const _0x3ba267 = {
    "128k": "standard",
    "192k": "exhigh",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires",
    hires: "hires",
    master: "jymaster"
  };
  log.d("本地网易请求:", _0x98d206, _0x5a819f);
  const _0x1296aa = await httpPost(API.localWy.base + "/song", {
    id: _0x98d206,
    level: _0x3ba267[_0x5a819f] || "standard",
    type: "url"
  });
  const _0x4d41d4 = extractUrl(_0x1296aa);
  if (_0x4d41d4) {
    return _0x4d41d4;
  }
  throw new Error("localWy fail: " + _mask(JSON.stringify(_0x1296aa)).substring(0, 100));
};
const getToubiec = async (_0x23848d, _0x2030ba) => {
  const _0x429128 = getId(_0x23848d);
  if (!_0x429128) {
    throw new Error("no id");
  }
  const _0x5e2e7a = {
    "128k": "standard",
    "192k": "exhigh",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires"
  };
  log.d("Toubiec请求:", _0x429128, _0x2030ba);
  const _0x5753dc = await httpGet(API.toubiec.base + "/song", {
    id: _0x429128,
    level: _0x5e2e7a[_0x2030ba] || "standard"
  });
  const _0x355155 = extractUrl(_0x5753dc);
  if (_0x355155) {
    return _0x355155;
  }
  throw new Error("toubiec fail");
};
const getFFAPI = async (_0x205ad2, _0x2e6494) => {
  const _0x3e1abd = getId(_0x205ad2);
  const _0x19437c = _0x205ad2.source;
  if (!_0x3e1abd) {
    throw new Error("no id");
  }
  let _0x23cdc0 = "";
  if (_0x19437c === "tx") {
    _0x23cdc0 = "https://y.qq.com/n/ryqq/songDetail/" + _0x3e1abd;
  } else {
    if (_0x19437c === "wy") {
      _0x23cdc0 = "https://music.163.com/song?id=" + _0x3e1abd;
    } else {
      if (_0x19437c === "kw") {
        _0x23cdc0 = "https://www.kuwo.cn/play_detail/" + _0x3e1abd;
      } else {
        if (_0x19437c === "kg") {
          _0x23cdc0 = "https://www.kugou.com/song/#hash=" + _0x3e1abd;
        } else {
          if (_0x19437c === "mg") {
            _0x23cdc0 = "https://music.migu.cn/v3/music/song/" + _0x3e1abd;
          } else {
            throw new Error("unsupported src: " + _0x19437c);
          }
        }
      }
    }
  }
  log.d("FFAPI请求:", _0x19437c, _0x3e1abd);
  const _0x55f4eb = await httpGet(API.ffapi.base + "/songurl", {
    url: _0x23cdc0
  });
  const _0x953dff = extractUrl(_0x55f4eb);
  if (_0x953dff) {
    return _0x953dff;
  }
  throw new Error("ffapi fail");
};
const getYaohuKw = async (_0x2ca9a9, _0x49c7cf) => {
  const _0x1101f2 = _0x2ca9a9.songName || _0x2ca9a9.name || "";
  const _0x3ae05e = _0x2ca9a9.singer || "";
  if (_0x1101f2) {
    const _0x57e0a7 = _0x1101f2 + _0x3ae05e;
    log.d("妖狐酷我搜索:", _0x57e0a7);
    const _0x4450f2 = await httpGet(API.yaohu.base + "/kuwo", {
      key: API.yaohu.key,
      action: "search",
      msg: _0x57e0a7,
      n: 1
    });
    const _0x2dd92b = _0x4450f2?.["data"]?.["vipmusic"] || {};
    const _0x2bef1c = _0x2dd92b.url || "";
    if (_0x2bef1c && isValidAudioUrl(_0x2bef1c)) {
      log.d("妖狐酷我搜索成功, level:", _0x2dd92b.level, "bitrate:", _0x2dd92b.bitrate);
      return _0x2bef1c;
    }
  }
  const _0x6ec27a = getId(_0x2ca9a9);
  if (!_0x6ec27a) {
    throw new Error("yaohuKw: no id and no songName");
  }
  log.d("妖狐酷我ID解析:", _0x6ec27a);
  const _0x1e8a92 = await httpGet(API.yaohu.base + "/kuwo", {
    key: API.yaohu.key,
    action: "song",
    id: _0x6ec27a,
    size: "lossless"
  });
  const _0x30f72d = extractUrl(_0x1e8a92);
  if (_0x30f72d) {
    return _0x30f72d;
  }
  throw new Error("yaohuKw fail: " + _mask(JSON.stringify(_0x1e8a92)).substring(0, 100));
};
const getYaohuKg = async (_0x59b838, _0xf7cba2) => {
  const _0x3ab2eb = _0x59b838.songName || _0x59b838.name || "";
  const _0x1f1b2e = _0x59b838.singer || "";
  if (!_0x3ab2eb) {
    throw new Error("no songName for kg search");
  }
  const _0x670060 = {
    "128k": "128",
    "192k": "320",
    "320k": "320",
    flac: "flac",
    flac24bit: "high",
    hires: "high",
    master: "high"
  };
  const _0x133b48 = _0x670060[_0xf7cba2] || "128";
  const _0x1804c8 = _0x3ab2eb + _0x1f1b2e;
  log.d("妖狐酷狗请求:", _0x1804c8, _0x133b48);
  const _0x5f31b9 = await httpGet(API.yaohu.base + "/kg", {
    key: API.yaohu.key,
    msg: _0x1804c8,
    n: 1,
    quality: _0x133b48
  });
  const _0x40c7c1 = _0x5f31b9?.["data"]?.["play_url"] || "";
  if (_0x40c7c1 && isValidAudioUrl(_0x40c7c1)) {
    return _0x40c7c1;
  }
  const _0x363faf = extractUrl(_0x5f31b9);
  if (_0x363faf) {
    return _0x363faf;
  }
  throw new Error("yaohuKg fail: " + _mask(JSON.stringify(_0x5f31b9)).substring(0, 100));
};
const getYaohu = async (_0x57e045, _0x4dbd57) => {
  const _0x8126e6 = _0x57e045.source;
  const _0x3b4c52 = _0x57e045.songName || _0x57e045.name || "";
  const _0x2a7988 = _0x57e045.singer || "";
  if (!_0x3b4c52) {
    throw new Error("no songName");
  }
  const _0x2ef8aa = {
    wy: "wy",
    tx: "qq"
  };
  const _0x5603fb = _0x2ef8aa[_0x8126e6];
  if (!_0x5603fb) {
    throw new Error("unsupported src: " + _0x8126e6);
  }
  const _0x5a1ac2 = _0x3b4c52 + _0x2a7988;
  log.d("妖狐通用请求:", _0x5603fb, _0x5a1ac2);
  const _0xb90861 = await httpGet(API.yaohu.base + "/" + _0x5603fb, {
    key: API.yaohu.key,
    msg: _0x5a1ac2,
    n: 1
  });
  const _0x543b5b = _0xb90861?.["data"]?.["musicurl"] || "";
  if (_0x543b5b && isValidAudioUrl(_0x543b5b)) {
    return _0x543b5b;
  }
  const _0x1941c5 = extractUrl(_0xb90861);
  if (_0x1941c5) {
    return _0x1941c5;
  }
  throw new Error("yaohu fail: " + _mask(JSON.stringify(_0xb90861)).substring(0, 100));
};
const getYaohuMg = async (_0x541889, _0xef97d9) => {
  const _0x1afdb6 = _0x541889.songName || _0x541889.name || "";
  const _0x11c951 = _0x541889.singer || "";
  if (!_0x1afdb6) {
    throw new Error("no songName");
  }
  const _0x1c94c5 = _0x1afdb6 + (_0x11c951 ? " " + _0x11c951 : "");
  log.d("妖狐咪咕请求:", _0x1c94c5);
  const _0x5a77a1 = await httpGet("" + API.yaohuMg.base, {
    key: API.yaohu.key,
    msg: _0x1c94c5,
    n: 1
  });
  const _0x24ad0b = extractUrl(_0x5a77a1);
  if (_0x24ad0b) {
    return _0x24ad0b;
  }
  throw new Error("yaohuMg fail: " + _mask(JSON.stringify(_0x5a77a1)).substring(0, 100));
};
const _miguHealthCache = {
  ok: null,
  ts: 0
};
const MIGU_HEALTH_TTL = 60000;
const checkMiguHealth = async () => {
  const _0x22ae11 = Date.now();
  if (_miguHealthCache.ok !== null && _0x22ae11 - _miguHealthCache.ts < MIGU_HEALTH_TTL) {
    return _miguHealthCache.ok;
  }
  try {
    const _0x2d6df2 = await http(API.miguLocal.base + "/api/search?text=test&page=1&size=1", {
      timeout: 2000
    });
    _miguHealthCache.ok = isValidJsonResponse(_0x2d6df2);
    _miguHealthCache.ts = _0x22ae11;
    log.d("咪咕API健康检查:", _miguHealthCache.ok ? "正常" : "异常");
    return _miguHealthCache.ok;
  } catch (_0x1cc471) {
    _miguHealthCache.ok = false;
    _miguHealthCache.ts = _0x22ae11;
    log.d("咪咕API健康检查: 异常", _0x1cc471.message);
    return false;
  }
};
const getMiguLocal = async (_0x3b5237, _0x753e23) => {
  const _0x2d088d = ["128k", "320k", "flac"];
  log.d("咪咕支持音质:", _0x2d088d.join("/"), "| 请求音质:", _0x753e23);
  const _0x2fd5c9 = await checkMiguHealth();
  if (!_0x2fd5c9) {
    throw new Error("miguLocal: API不可达(健康检查失败)");
  }
  const _0x565de4 = _0x3b5237.songName || _0x3b5237.name || "";
  const _0x5d0233 = _0x3b5237.singer || "";
  let _0x25bc5c = "";
  let _0x210078 = "";
  const _0x4433ad = getId(_0x3b5237);
  if (_0x4433ad) {
    if (_0x4433ad.length > 15) {
      _0x25bc5c = _0x4433ad;
    } else {
      _0x4433ad.length >= 8 && _0x4433ad.length <= 14 ? _0x210078 = _0x4433ad : (_0x25bc5c = _0x3b5237.contentId || _0x4433ad, _0x210078 = _0x3b5237.copyrightId || _0x3b5237.copyrightid || "");
    }
  }
  _0x25bc5c = _0x3b5237.contentId || _0x25bc5c;
  _0x210078 = _0x3b5237.copyrightId || _0x3b5237.copyrightid || _0x210078;
  log.d("咪咕本地(3037):", _0x565de4, "contentId: " + _0x25bc5c, "copyrightId: " + _0x210078);
  if (!_0x25bc5c) {
    if (!_0x565de4) {
      throw new Error("miguLocal: 无contentId且无songName");
    }
    const _0xe1bfcb = _0x565de4 + (_0x5d0233 ? " " + _0x5d0233 : "");
    log.d("咪咕本地搜索:", _0xe1bfcb);
    const _0x2426e5 = await httpGet(API.miguLocal.base + "/api/search", {
      text: _0xe1bfcb,
      page: 1,
      size: 5
    });
    if (_0x2426e5 && _0x2426e5.success && _0x2426e5.data && _0x2426e5.data.items) {
      const _0x165e05 = _0x2426e5.data.items;
      let _0x1b428e = null;
      _0x210078 && (_0x1b428e = _0x165e05.find(_0x24adb8 => _0x24adb8.song && _0x24adb8.song.copyrightId === _0x210078));
      !_0x1b428e && _0x165e05.length > 0 && (_0x1b428e = _0x165e05[0]);
      _0x1b428e && _0x1b428e.song && (_0x25bc5c = _0x1b428e.song.contentId || "", _0x210078 = _0x210078 || _0x1b428e.song.copyrightId || "", log.d("咪咕搜索匹配:", _0x1b428e.song.songName, "contentId: " + _0x25bc5c));
    }
  }
  if (!_0x25bc5c) {
    throw new Error("miguLocal: 无法获取contentId");
  }
  const _0xe4ef4a = {
    "128k": "PQ",
    "192k": "HQ",
    "320k": "HQ",
    flac: "SQ",
    flac24bit: "ZQ",
    hires: "ZQ"
  };
  const _0x13caec = _0xe4ef4a[_0x753e23] || "PQ";
  const _0x14d044 = async _0xc4e086 => {
    const _0x2dca54 = API.miguLocal.base + "/api/url/h5v2.4?contentId=" + _0x25bc5c + "&copyrightId=" + (_0x210078 || "") + "&resourceType=2&toneFlag=" + _0xc4e086;
    const _0xee6f04 = await httpGet(_0x2dca54);
    if (_0xee6f04 && _0xee6f04.success && _0xee6f04.data && _0xee6f04.data.url && typeof _0xee6f04.data.url === "string") {
      return _0xee6f04.data.url;
    }
    const _0x3aaa91 = extractUrl(_0xee6f04);
    if (_0x3aaa91) {
      return _0x3aaa91;
    }
    return "";
  };
  let _0x53c27c = await _0x14d044(_0x13caec);
  if (_0x53c27c) {
    log.d("咪咕本地成功:", _0x753e23, "(toneFlag=" + _0x13caec + ")", _0x53c27c.substring(0, 60));
    return _0x53c27c;
  }
  if (_0x753e23 !== "128k") {
    log.d("咪咕快速兜底: 请求音质", _0x753e23, "失败，直接尝试PQ(128k)");
    _0x53c27c = await _0x14d044("PQ");
    if (_0x53c27c) {
      log.d("咪咕兜底成功(PQ/128k):", _0x53c27c.substring(0, 60));
      return _0x53c27c;
    }
  }
  throw new Error(_mask("miguLocal fail: contentId=" + _0x25bc5c + " toneFlag=" + _0x13caec));
};
const getSuyinQQ = async (_0xd31fa9, _0x9681cd) => {
  const _0x3b67a7 = getId(_0xd31fa9);
  if (!_0x3b67a7) {
    throw new Error("no id");
  }
  const _0xc23c0f = {
    "128k": 7,
    "192k": 5,
    "320k": 5,
    flac: 4,
    hires: 3,
    flac24bit: 1,
    master: 1
  };
  log.d("溯音QQ请求:", _0x3b67a7, _0x9681cd);
  const _0x9bce7e = await httpGet(API.suyinQQ.base, {
    key: API.suyinQQ.key,
    type: "json",
    br: _0xc23c0f[_0x9681cd] || 7,
    n: 1,
    mid: _0x3b67a7
  });
  const _0x343814 = extractUrl(_0x9bce7e);
  if (_0x343814) {
    return _0x343814;
  }
  throw new Error("suyinQQ fail");
};
const getSuyinWy = async (_0x4966d1, _0x51457b) => {
  const _0x4fbe4f = getId(_0x4966d1);
  if (!_0x4fbe4f) {
    throw new Error("no id");
  }
  const _0x1d3572 = {
    "128k": "standard",
    "192k": "exhigh",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires",
    hires: "hires",
    master: "jymaster"
  };
  log.d("溯音网易请求:", _0x4fbe4f, _0x51457b);
  const _0x4306f2 = await httpGet(API.suyinWy.base, {
    key: API.suyinWy.key,
    type: "json",
    level: _0x1d3572[_0x51457b] || "standard",
    n: 1,
    id: _0x4fbe4f
  });
  const _0x2bd2f9 = extractUrl(_0x4306f2);
  if (_0x2bd2f9) {
    return _0x2bd2f9;
  }
  throw new Error("suyinWy fail");
};
const getSuyinKw = async (_0x173bb5, _0x4eb53c) => {
  const _0x16508a = getId(_0x173bb5);
  if (!_0x16508a) {
    throw new Error("no id");
  }
  const _0xf45993 = {
    "128k": 7,
    "192k": 5,
    "320k": 5,
    flac: 1,
    flac24bit: 1,
    hires: 1
  };
  log.d("溯音酷我请求:", _0x16508a, _0x4eb53c);
  const _0x1aa6fd = await httpGet(API.suyinKw.base, {
    key: API.suyinKw.key,
    type: "json",
    br: _0xf45993[_0x4eb53c] || 7,
    n: 1,
    id: _0x16508a
  });
  const _0x5a02c6 = extractUrl(_0x1aa6fd);
  if (_0x5a02c6) {
    return _0x5a02c6;
  }
  throw new Error("suyinKw fail");
};
const getCyapi = async (_0x4ba7f4, _0x2933b6) => {
  const _0x320244 = _0x4ba7f4.source;
  const _0x3ef720 = getId(_0x4ba7f4);
  if (!_0x3ef720 && _0x320244 !== "wy") {
    throw new Error("cyapi: no id");
  }
  if (_0x320244 === "tx") {
    log.d("cyapi QQ请求 mid:", _0x3ef720);
    const _0x34004b = await httpGet(API.cyapi.qq, {
      apikey: API.cyapi.key,
      type: "json",
      mid: _0x3ef720
    });
    if (_0x34004b && _0x34004b.url && typeof _0x34004b.url === "string" && _0x34004b.url.startsWith("http")) {
      return _0x34004b.url;
    }
    throw new Error("cyapi QQ fail: no url field");
  } else {
    if (_0x320244 === "wy") {
      const _0x5c7b84 = _0x4ba7f4.songName || _0x4ba7f4.name || "";
      const _0x12cd12 = _0x4ba7f4.singer || "";
      if (!_0x5c7b84) {
        throw new Error("cyapi WY: no songName");
      }
      const _0x3041f2 = _0x5c7b84 + (_0x12cd12 ? " " + _0x12cd12 : "");
      log.d("cyapi 网易请求:", _0x3041f2);
      const _0x2e8efa = await httpGet(API.cyapi.wy, {
        apikey: API.cyapi.key,
        msg: _0x3041f2,
        n: 1,
        type: "json"
      });
      if (_0x2e8efa && _0x2e8efa.url && typeof _0x2e8efa.url === "string" && _0x2e8efa.url.startsWith("http")) {
        return _0x2e8efa.url;
      }
      throw new Error("cyapi WY fail: no url field");
    }
  }
  throw new Error("cyapi: unsupported src: " + _0x320244);
};
const getChksz = async (_0x1bed5d, _0x112052) => {
  const _0x16f91c = getId(_0x1bed5d);
  if (!_0x16f91c) {
    throw new Error("no id");
  }
  const _0x39f004 = {
    "128k": "standard",
    "192k": "exhigh",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "jymaster"
  };
  log.d("chksz请求:", _0x16f91c, _0x112052);
  const _0x586d03 = await httpGet(API.chksz.base + "/music/wy", {
    id: _0x16f91c,
    level: _0x39f004[_0x112052] || "standard"
  });
  const _0x2014e6 = extractUrl(_0x586d03);
  if (_0x2014e6) {
    return _0x2014e6;
  }
  throw new Error("chksz fail");
};
const getFish = async (_0x15209a, _0x344813) => {
  const _0x22a02b = getId(_0x15209a);
  const _0x1156f3 = _0x15209a.source;
  if (!_0x22a02b) {
    throw new Error("no id");
  }
  log.d("fish请求:", _0x1156f3, _0x22a02b);
  const _0x5ddf0c = await httpGet(API.fish.base + "/" + _0x1156f3 + "/song", {
    id: _0x22a02b
  });
  const _0xa2e115 = extractUrl(_0x5ddf0c);
  if (_0xa2e115) {
    return _0xa2e115;
  }
  throw new Error("fish fail");
};
const getHYW = async (_0x244631, _0x5d7831) => {
  const _0x395737 = getId(_0x244631);
  if (!_0x395737) {
    throw new Error("no id");
  }
  log.d("HYW请求:", _0x395737);
  const _0x1626de = await httpGet(API.hywmusic.base + "/api/music", {
    mid: _0x395737
  });
  const _0x57bf03 = extractUrl(_0x1626de);
  if (_0x57bf03) {
    return _0x57bf03;
  }
  throw new Error("hyw fail");
};
const getYuafeng = async (_0x2e6054, _0x3457d7) => {
  const _0x5da2cd = _0x2e6054.source;
  const _0x180c5c = _0x2e6054.songName || _0x2e6054.name || "";
  const _0x4c8018 = _0x2e6054.singer || "";
  if (!_0x180c5c) {
    throw new Error("yuafeng: no songName");
  }
  const _0x194a0b = {
    wy: "wymusic",
    tx: "qqmusic",
    kw: "kwmusic",
    kg: "kgmusic",
    mg: "mgmusic"
  };
  const _0x24b91a = _0x194a0b[_0x5da2cd];
  if (!_0x24b91a) {
    throw new Error("yuafeng: unsupported src: " + _0x5da2cd);
  }
  const _0x5e1c81 = {
    "128k": "1",
    "192k": "2",
    "320k": "2",
    flac: "4",
    flac24bit: "4",
    hires: "4",
    master: "4",
    atmos: "4",
    atmos_plus: "4"
  };
  const _0x571bcf = _0x5e1c81[_0x3457d7] || "1";
  const _0x29b96c = _0x180c5c + (_0x4c8018 ? " " + _0x4c8018 : "");
  log.d("玉宁熙请求:", _0x24b91a, _0x29b96c, "type=" + _0x571bcf);
  const _0x4a0111 = await httpGet(API.yuningxi.base + "/API/" + _0x24b91a + ".php", {
    apikey: API.yuningxi.key,
    msg: _0x29b96c,
    n: 1,
    type: _0x571bcf
  });
  if (_0x4a0111 && _0x4a0111.code === 0 && _0x4a0111.data) {
    const _0x513307 = _0x4a0111.data.music;
    if (_0x513307 && typeof _0x513307 === "string" && _0x513307.startsWith("http")) {
      log.d("玉宁熙成功:", _0x24b91a, _0x513307.substring(0, 60));
      return _0x513307;
    }
    if (_0x5da2cd === "mg" && _0x4a0111.data.copyrightId && _0x4a0111.data.id) {
      log.d("玉宁熙咪咕: 搜索成功但直链空, copyrightId=" + _0x4a0111.data.copyrightId);
      throw new Error(_mask("yuafeng mg: 直链为空 copyrightId=" + String(_0x4a0111.data.copyrightId)));
    }
  }
  throw new Error("yuafeng fail: code=" + (_0x4a0111?.["code"] ?? "null") + " msg=" + (_0x4a0111?.["msg"] || "").substring(0, 60));
};
const getQQExploit = async (_0x53eb58, _0x253b26) => {
  const _0x327e1e = getId(_0x53eb58);
  if (!_0x327e1e) {
    throw new Error("QQ越权: no songmid");
  }
  const _0x2b660a = _0x53eb58.mediaMid || _0x53eb58.strMediaMid || _0x53eb58.media_mid || _0x53eb58.strmediamid || "";
  const _0x542d53 = {
    "128k": "M500",
    "192k": "M800",
    "320k": "M800",
    flac: "F000",
    flac24bit: "RS01",
    hires: "RS01",
    atmos: "atmosphere",
    atmos_plus: "atmosphere",
    master: "AIM00"
  };
  const _0x21ed3b = _0x542d53[_0x253b26] || "M800";
  const _0x15d709 = {
    M500: "mp3",
    M800: "mp3",
    F000: "flac",
    RS01: "flac",
    RS02: "flac",
    AIM00: "mflac",
    atmosphere: "flac"
  };
  const _0x10c353 = _0x15d709[_0x21ed3b] || "mp3";
  const _0x4cb0b7 = _0x2b660a || _0x327e1e;
  const _0x307fec = API.qqExploit.key;
  const _0x527e7f = API.qqExploit.uin;
  const _0x594fe3 = Math.floor(Math.random() * 10000000000).toString();
  const _0x29378f = "qm_keyst=" + _0x307fec + "; uin=o" + _0x527e7f + "; pgv_pvid=" + _0x594fe3 + "; qqmusic_key=" + _0x307fec + "; qqmusic_uin=o" + _0x527e7f + "; psrf_qqaccess_token=" + _0x307fec + "; ts_uid=" + _0x594fe3 + "; psi=" + _0x594fe3;
  const _0x6ce965 = "" + _0x21ed3b + _0x4cb0b7 + "." + _0x10c353;
  const _0x46f49d = {
    comm: {
      ct: 19,
      cv: 0,
      guid: _0x594fe3,
      tmeAppID: "qqmusic",
      qq: _0x527e7f
    },
    hot: {
      method: "CgiGetHotVkey",
      module: "music.vkey.GetEVkey",
      param: {
        filename: [_0x6ce965],
        songmid: [_0x327e1e]
      }
    },
    ekey: {
      method: "GetEkey",
      module: "music.vkey.GetEVkey",
      param: {
        finfo: [{
          filename: _0x6ce965,
          mid: _0x4cb0b7 || "0"
        }]
      }
    }
  };
  try {
    log.d("QQ越权(ut)请求:", _0x327e1e, _0x21ed3b, _0x6ce965);
    const _0x4f6625 = await http("https://ut.y.qq.com/cgi-bin/musicu.fcg", {
      method: "POST",
      timeout: DEFAULT_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
        Referer: "https://y.qq.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Cookie: _0x29378f
      },
      body: JSON.stringify(_0x46f49d)
    });
    if (isValidJsonResponse(_0x4f6625)) {
      const _0xcfdc2b = typeof _0x4f6625.body === "string" ? JSON.parse(_0x4f6625.body) : _0x4f6625.body;
      const _0x33becc = _0xcfdc2b?.["hot"]?.["data"]?.["urls"] || [];
      if (_0x33becc.length > 0 && _0x33becc[0].purl) {
        const _0x15e978 = "https://dl.stream.qqmusic.qq.com/";
        log.d("QQ越权(ut)成功:", _0x21ed3b, "purl=" + _0x33becc[0].purl.substring(0, 60));
        return "" + _0x15e978 + _0x33becc[0].purl;
      }
      log.d("QQ越权(ut)无purl:", JSON.stringify(_0xcfdc2b?.["hot"]?.["data"] || {}).substring(0, 100));
    }
  } catch (_0x2daa39) {
    log.d("QQ越权(ut)失败:", _0x2daa39.message);
  }
  const _0x25c6c1 = [{
    name: "双songmid+越权uin",
    filename: "" + _0x21ed3b + _0x327e1e + _0x327e1e + "." + _0x10c353,
    uin: _0x527e7f,
    loginflag: 1
  }, {
    name: "单songmid+越权uin",
    filename: "" + _0x21ed3b + _0x327e1e + "." + _0x10c353,
    uin: _0x527e7f,
    loginflag: 1
  }, {
    name: "双songmid+空uin",
    filename: "" + _0x21ed3b + _0x327e1e + _0x327e1e + "." + _0x10c353,
    uin: "",
    loginflag: 1
  }, {
    name: "单songmid+空uin",
    filename: "" + _0x21ed3b + _0x327e1e + "." + _0x10c353,
    uin: "",
    loginflag: 1
  }];
  for (const _0x186b7f of _0x25c6c1) {
    try {
      const _0x2071f5 = {
        filename: [_0x186b7f.filename],
        songmid: [_0x327e1e],
        songtype: [0],
        uin: _0x186b7f.uin,
        loginflag: _0x186b7f.loginflag,
        platform: "23",
        firstlogin: 1,
        newver: 1,
        nohash: 0,
        cms: 0
      };
      const _0x7a3dc4 = JSON.stringify({
        comm: {
          uin: _0x186b7f.uin ? parseInt(_0x186b7f.uin) : 0,
          format: "json",
          ct: 23,
          cv: 0,
          ...(_0x186b7f.uin ? {
            qq: _0x186b7f.uin
          } : {})
        },
        req_0: {
          module: "vkey.GetVkeyServer",
          method: "CgiGetVkey",
          param: _0x2071f5
        }
      });
      const _0x22ad8e = "https://u.y.qq.com/cgi-bin/musicu.fcg?format=json&data=" + encodeURIComponent(_0x7a3dc4);
      log.d("QQ越权(u,p23)请求:", _0x186b7f.name, _0x327e1e, _0x21ed3b);
      const _0x3e0a96 = await http(_0x22ad8e, {
        method: "GET",
        timeout: DEFAULT_TIMEOUT,
        headers: {
          Referer: "https://y.qq.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Cookie: _0x29378f
        }
      });
      if (isValidJsonResponse(_0x3e0a96)) {
        const _0x4280be = typeof _0x3e0a96.body === "string" ? JSON.parse(_0x3e0a96.body) : _0x3e0a96.body;
        const _0x2c6026 = _0x4280be?.["req_0"]?.["data"]?.["midurlinfo"]?.[0];
        if (_0x4280be?.["code"] === 0 && _0x2c6026?.["purl"]) {
          const _0x4a8c6c = _0x4280be.req_0?.["data"]?.["sip"]?.[0] || "https://dl.stream.qqmusic.qq.com/";
          log.d("QQ越权(u,p23)成功:", _0x186b7f.name, _0x21ed3b);
          return "" + _0x4a8c6c + _0x2c6026.purl;
        }
      }
    } catch (_0x499f4f) {
      log.d("QQ越权(u,p23) " + _0x186b7f.name + "失败:", _0x499f4f.message);
    }
  }
  const _0x427ce9 = {
    comm: {
      ct: 19,
      cv: 0,
      guid: _0x594fe3,
      tmeAppID: "qqmusic",
      qq: _0x527e7f
    },
    hot: {
      method: "CgiGetHotVkey",
      module: "music.vkey.GetEVkey",
      param: {
        filename: [_0x6ce965],
        songmid: [_0x327e1e]
      }
    }
  };
  try {
    log.d("QQ越权(ut+key)请求:", _0x327e1e, _0x21ed3b);
    const _0x383d4a = await http("https://ut.y.qq.com/cgi-bin/musicu.fcg", {
      method: "POST",
      timeout: DEFAULT_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
        Referer: "https://y.qq.com/",
        "User-Agent": "Mozilla/5.0 QQMusic/2201",
        Cookie: _0x29378f
      },
      body: JSON.stringify(_0x427ce9)
    });
    if (isValidJsonResponse(_0x383d4a)) {
      const _0x3592cf = typeof _0x383d4a.body === "string" ? JSON.parse(_0x383d4a.body) : _0x383d4a.body;
      const _0x387009 = _0x3592cf?.["hot"]?.["data"]?.["urls"] || [];
      if (_0x387009.length > 0 && _0x387009[0].purl) {
        const _0x3fd25e = "https://dl.stream.qqmusic.qq.com/";
        log.d("QQ越权(ut+key)成功:", _0x21ed3b);
        return "" + _0x3fd25e + _0x387009[0].purl;
      }
    }
  } catch (_0x38e0a4) {
    log.d("QQ越权(ut+key)失败:", _0x38e0a4.message);
  }
  throw new Error("QQ越权全部失败: " + _mask(_0x327e1e) + " " + _0x21ed3b);
};
const API_GROUPS = {
  tx: [[{
    name: "QQ越权",
    fn: getQQExploit
  }], [{
    name: "cyapi QQ",
    fn: getCyapi
  }, {
    name: "溯音QQ",
    fn: getSuyinQQ
  }, {
    name: "FFAPI",
    fn: getFFAPI
  }], [{
    name: "妖狐QQ",
    fn: getYaohu
  }, {
    name: "玉宁熙TX",
    fn: getYuafeng
  }], [{
    name: "本地QQ(3035)",
    fn: getLocalQQ
  }, {
    name: "HYW",
    fn: getHYW
  }, {
    name: "fish",
    fn: getFish
  }]],
  wy: [[{
    name: "妖狐WY",
    fn: getYaohu
  }, {
    name: "cyapi 网易",
    fn: getCyapi
  }, {
    name: "溯音网易",
    fn: getSuyinWy
  }, {
    name: "Toubiec",
    fn: getToubiec
  }, {
    name: "本地网易(3036)",
    fn: getLocalWy
  }], [{
    name: "玉宁熙WY",
    fn: getYuafeng
  }, {
    name: "chksz",
    fn: getChksz
  }, {
    name: "FFAPI",
    fn: getFFAPI
  }], [{
    name: "HYW",
    fn: getHYW
  }, {
    name: "fish",
    fn: getFish
  }]],
  kw: [[{
    name: "妖狐酷我",
    fn: getYaohuKw
  }, {
    name: "溯音酷我",
    fn: getSuyinKw
  }], [{
    name: "玉宁熙KW",
    fn: getYuafeng
  }, {
    name: "FFAPI",
    fn: getFFAPI
  }], [{
    name: "fish",
    fn: getFish
  }]],
  kg: [[{
    name: "妖狐酷狗",
    fn: getYaohuKg
  }], [{
    name: "玉宁熙KG",
    fn: getYuafeng
  }, {
    name: "FFAPI",
    fn: getFFAPI
  }], [{
    name: "fish",
    fn: getFish
  }]],
  mg: [[{
    name: "咪咕本地(3037)",
    fn: getMiguLocal
  }], [{
    name: "妖狐咪咕",
    fn: getYaohuMg
  }, {
    name: "FFAPI",
    fn: getFFAPI
  }, {
    name: "fish",
    fn: getFish
  }]]
};
const raceApis = async (_0x54c1f0, _0x33a815, _0x3f1b04) => {
  if (!_0x54c1f0 || _0x54c1f0.length === 0) {
    return null;
  }
  return new Promise(_0xa338f8 => {
    let _0x25ddfd = _0x54c1f0.length;
    let _0x343092 = false;
    _0x54c1f0.forEach(async _0x241afc => {
      try {
        const _0x180e55 = await _0x241afc.fn(_0x33a815, _0x3f1b04);
        if (_0x180e55 && isValidAudioUrl(_0x180e55)) {
          !_0x343092 && (_0x343092 = true, _0xa338f8({
            url: _0x180e55,
            name: _0x241afc.name
          }));
          return;
        }
      } catch (_0x3ba954) {
        log.d("[竞速] " + _0x241afc.name + " 失败:", _0x3ba954.message);
      }
      _0x25ddfd--;
      _0x25ddfd === 0 && !_0x343092 && (_0x343092 = true, _0xa338f8(null));
    });
  });
};
const getMusicUrl = async (_0x9c47c6, _0x1633c8, _0x141aa1) => {
  log.t("i", "=== 获取URL开始 v1.7.1 ===");
  log.t("i", "平台:", PLATFORM_NAMES[_0x9c47c6] || _0x9c47c6, "| 请求音质:", _0x141aa1, "| 歌曲ID:", getId(_0x1633c8));
  const _0x16f727 = PLATFORM_QUALITIES[_0x9c47c6];
  _0x16f727 && log.t("i", "平台支持音质:", _0x16f727.supported.join("/"), "(" + _0x16f727.note + ")");
  if (!SUPPORTED_SOURCES.includes(_0x9c47c6)) {
    log.t("e", "不支持的平台:", _0x9c47c6);
    throw new Error("不支持的平台: " + _0x9c47c6);
  }
  const _0x39396d = QUALITY_FALLBACK[_0x141aa1] || [_0x141aa1];
  log.t("i", "音质降级链:", _0x39396d.join(" -> "));
  const _0x32b274 = API_GROUPS[_0x9c47c6];
  if (!_0x32b274 || _0x32b274.length === 0) {
    throw new Error("未配置API组: " + _0x9c47c6);
  }
  if (_0x9c47c6 === "mg") {
    log.t("i", "咪咕快速模式: 不逐层降级，直接尝试+PQ兜底");
    for (let _0x2a498b = 0; _0x2a498b < _0x32b274.length; _0x2a498b++) {
      const _0x280b0f = _0x32b274[_0x2a498b];
      log.t("i", "[音质" + _0x141aa1 + "] 组" + (_0x2a498b + 1) + "/" + _0x32b274.length + " 并行尝试 " + _0x280b0f.length + " 个API: " + _0x280b0f.map(_0x8104a9 => _0x8104a9.name).join(", "));
      const _0x363252 = await raceApis(_0x280b0f, _0x1633c8, _0x141aa1);
      if (_0x363252 && _0x363252.url) {
        log.t("i", "✓ 成功! 来源:" + _0x363252.name + " -> " + _0x363252.url.substring(0, 80) + "...");
        return _0x363252.url;
      }
      log.t("w", "[音质" + _0x141aa1 + "] 组" + (_0x2a498b + 1) + " 全部失败");
    }
    log.t("e", "=== 咪咕所有API均失败 ===");
    throw new Error("咪咕所有API均失败 (v1.7.1 快速模式)");
  }
  for (let _0x35471d = 0; _0x35471d < _0x39396d.length; _0x35471d++) {
    const _0x52d5bf = _0x39396d[_0x35471d];
    const _0x367bbb = _0x35471d === _0x39396d.length - 1;
    _0x35471d > 0 && log.t("w", "音质 " + _0x39396d[_0x35471d - 1] + " 全部失败，降级到 " + _0x52d5bf);
    for (let _0x44b375 = 0; _0x44b375 < _0x32b274.length; _0x44b375++) {
      const _0x148ee4 = _0x32b274[_0x44b375];
      const _0x561721 = _0x44b375 === _0x32b274.length - 1;
      if (_0x561721 && !_0x367bbb && _0x35471d > 0) {
        continue;
      }
      log.t("i", "[音质" + _0x52d5bf + "] 组" + (_0x44b375 + 1) + "/" + _0x32b274.length + " 并行尝试 " + _0x148ee4.length + " 个API: " + _0x148ee4.map(_0x4b5087 => _0x4b5087.name).join(", "));
      const _0x5a4381 = await raceApis(_0x148ee4, _0x1633c8, _0x52d5bf);
      if (_0x5a4381 && _0x5a4381.url) {
        log.t("i", "✓ 成功! 音质:" + _0x52d5bf + " 来源:" + _0x5a4381.name + " -> " + _0x5a4381.url.substring(0, 80) + "...");
        _0x52d5bf !== _0x141aa1 && log.t("w", "⚠ 用户请求 " + _0x141aa1 + "，已降级到 " + _0x52d5bf);
        return _0x5a4381.url;
      }
      log.t("w", "[音质" + _0x52d5bf + "] 组" + (_0x44b375 + 1) + " 全部失败");
    }
  }
  log.t("e", "=== 所有API + 所有音质档 均失败 ===");
  throw new Error("所有API均失败 (v1.7.1 已尝试音质降级)");
};
const getLyric = async (_0x5d71b8, _0xd5b699) => {
  const _0x265c3b = getId(_0xd5b699);
  if (!_0x265c3b) {
    log.w("歌词: 无歌曲ID");
    return {
      lyric: "",
      tlyric: "",
      rlyric: "",
      lxlyric: ""
    };
  }
  log.t("i", "获取歌词:", PLATFORM_NAMES[_0x5d71b8] || _0x5d71b8, _0x265c3b);
  try {
    if (_0x5d71b8 === "wy") {
      const _0x950e05 = await httpPost(API.localWy.base + "/song", {
        id: _0x265c3b,
        type: "lyric"
      });
      if (_0x950e05 && (_0x950e05.status === 200 || _0x950e05.code === 200) && _0x950e05.data) {
        log.t("i", "歌词获取成功(网易)");
        return {
          lyric: _0x950e05.data.lrc?.["lyric"] || "",
          tlyric: _0x950e05.data.tlyric?.["lyric"] || "",
          rlyric: _0x950e05.data.romalrc?.["lyric"] || "",
          lxlyric: ""
        };
      }
    } else {
      if (_0x5d71b8 === "tx") {
        const _0x233223 = await httpGet(API.localQQ.base + "/song/lyric", {
          mid: _0x265c3b,
          decode: 1
        });
        if (_0x233223 && _0x233223.code === 0 && _0x233223.data) {
          log.t("i", "歌词获取成功(QQ)");
          return {
            lyric: _0x233223.data.lyric || "",
            tlyric: _0x233223.data.trans || "",
            rlyric: _0x233223.data.roma || "",
            lxlyric: ""
          };
        }
      }
    }
  } catch (_0xf805a9) {
    log.t("e", "歌词获取失败:", _0xf805a9.message);
  }
  log.w("歌词: 无结果");
  return {
    lyric: "",
    tlyric: "",
    rlyric: "",
    lxlyric: ""
  };
};
const getPic = async (_0x5cba72, _0x40457b) => {
  const _0x17e20e = getId(_0x40457b);
  if (!_0x17e20e) {
    log.w("封面: 无歌曲ID");
    return "";
  }
  log.t("i", "获取封面:", PLATFORM_NAMES[_0x5cba72] || _0x5cba72, _0x17e20e);
  try {
    if (_0x5cba72 === "wy") {
      const _0x163f67 = await httpPost(API.localWy.base + "/song", {
        id: _0x17e20e,
        type: "json"
      });
      if (_0x163f67 && (_0x163f67.status === 200 || _0x163f67.code === 200) && _0x163f67.data && _0x163f67.data.pic) {
        log.t("i", "封面获取成功(网易)");
        return _0x163f67.data.pic;
      }
    } else {
      if (_0x5cba72 === "tx") {
        const _0x10aa03 = await httpGet(API.localQQ.base + "/song/detail", {
          mids: _0x17e20e
        });
        if (_0x10aa03 && _0x10aa03.code === 0 && _0x10aa03.data && _0x10aa03.data.length > 0) {
          const _0x2fb1c6 = _0x10aa03.data[0].album?.["cover"] || "";
          if (_0x2fb1c6) {
            log.t("i", "封面获取成功(QQ)");
          }
          return _0x2fb1c6;
        }
      }
    }
  } catch (_0x115147) {
    log.t("e", "封面获取失败:", _0x115147.message);
  }
  log.w("封面: 无结果");
  return "";
};
on(EVENT_NAMES.request, ({
  source: _0x3c50e5,
  action: _0x5291d,
  info: _0x4194a9
}) => {
  log.t("d", "事件:", _0x5291d, PLATFORM_NAMES[_0x3c50e5] || _0x3c50e5);
  switch (_0x5291d) {
    case "musicUrl":
      return getMusicUrl(_0x3c50e5, _0x4194a9.musicInfo, _0x4194a9.type).then(_0x5c087e => {
        log.t("i", "musicUrl 返回成功");
        return _0x5c087e;
      }).catch(_0x435eed => {
        log.t("e", "musicUrl 返回失败:", _0x435eed.message);
        throw _0x435eed;
      });
    case "lyric":
      return getLyric(_0x3c50e5, _0x4194a9.musicInfo);
    case "pic":
      return getPic(_0x3c50e5, _0x4194a9.musicInfo);
    default:
      log.w("未知事件:", _0x5291d);
      return Promise.reject(new Error("未知事件: " + _0x5291d));
  }
});
send(EVENT_NAMES.inited, {
  openDevTools: false,
  sources: {
    wy: {
      name: "网易云音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: ["128k", "192k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"]
    },
    tx: {
      name: "QQ音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: ["128k", "192k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"]
    },
    kw: {
      name: "酷我音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: ["128k", "192k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"]
    },
    kg: {
      name: "酷狗音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: ["128k", "192k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"]
    },
    mg: {
      name: "咪咕音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: ["128k", "192k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"]
    }
  }
});
log.t("i", "========================================");
log.t("i", SCRIPT_NAME + " v" + SCRIPT_VERSION + " 初始化完成");
log.t("i", "支持平台: 网易云/QQ/酷我/酷狗/咪咕");
log.t("i", "支持音质: 128k/192k/320k/flac/flac24bit/hires/atmos/atmos_plus/master");
log.t("i", "v1.7.4: 脱敏增强(contentId/copyrightId/purl) + 嵌套编码修复 + 短URL路径覆盖");
log.t("i", "咪咕支持音质: 128k(PQ)/320k(HQ)/flac(SQ)");
log.t("i", "========================================");