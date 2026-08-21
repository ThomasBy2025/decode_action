//Fri Aug 21 2026 12:29:20 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

const {
  EVENT_NAMES: KH99_0x39563d,
  request: KH99_0x5d2dfd,
  on: KH99_0x5960ac,
  send: KH99_0x1ad6fa,
  env: KH99_0x5c9d14,
  version: KH99_0x1e6c89
} = globalThis.lx;
const KH99_0x4e325e = "KonekoHYW_v176_SecretKey_2026";
const KH99_0x5c36cf = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210+/";
const KH99_0x3cc856 = 有缘q => {
  if (!有缘q || "X" !== 有缘q[0]) {
    return 有缘q;
  }
  try {
    const 奈可v = 有缘q.slice(1).split("").reverse().join("");
    let 奈可11 = "";
    let 有缘12 = "";
    for (const 终章13 of 奈可v) "=" === 终章13 ? 奈可11 += 终章13 : 有缘12 += 终章13;
    const 云淡1a = 有缘12 + 奈可11;
    let 奈可1d = "";
    for (let 有缘1e = 0; 有缘1e < 云淡1a.length; 有缘1e += 4) {
      const 奈可1j = KH99_0x5c36cf.indexOf(云淡1a[有缘1e]);
      const 铃响1n = KH99_0x5c36cf.indexOf(云淡1a[有缘1e + 1]);
      const 终章1r = KH99_0x5c36cf.indexOf(云淡1a[有缘1e + 2]);
      const 奈可1v = KH99_0x5c36cf.indexOf(云淡1a[有缘1e + 3]);
      if (奈可1j < 0 || 铃响1n < 0) {
        break;
      }
      奈可1d += String.fromCharCode(奈可1j << 2 | 铃响1n >> 4);
      终章1r >= 0 && "=" !== 云淡1a[有缘1e + 2] && (奈可1d += String.fromCharCode((15 & 铃响1n) << 4 | 终章1r >> 2));
      奈可1v >= 0 && "=" !== 云淡1a[有缘1e + 3] && (奈可1d += String.fromCharCode((3 & 终章1r) << 6 | 奈可1v));
    }
    let 奈可2j = "";
    for (let 有缘2k = 0; 有缘2k < 奈可1d.length; 有缘2k++) {
      奈可2j += String.fromCharCode(奈可1d.charCodeAt(有缘2k) ^ KH99_0x4e325e.charCodeAt(有缘2k % 29));
    }
    try {
      return decodeURIComponent(escape(奈可2j));
    } catch (终章2x) {
      return 奈可2j;
    }
  } catch (铃响2z) {
    return 有缘q;
  }
};
const KH99_0x261707 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const KH99_0x440b34 = 奈可31 => {
  try {
    const 终章33 = 奈可31.split("").reverse().join("");
    let 有缘38 = "";
    for (let 终章39 = 0; 终章39 < 终章33.length; 终章39++) {
      const 有缘3e = 终章33[终章39];
      (KH99_0x261707.indexOf(有缘3e) >= 0 || "=" === 有缘3e) && (有缘38 += 有缘3e);
    }
    let 云淡3m = "";
    for (let 铃响3n = 0; 铃响3n < 有缘38.length; 铃响3n += 4) {
      const 云淡3s = KH99_0x261707.indexOf(有缘38[铃响3n]);
      const 有缘3w = KH99_0x261707.indexOf(有缘38[铃响3n + 1]);
      const 再见40 = KH99_0x261707.indexOf(有缘38[铃响3n + 2]);
      const 云淡44 = KH99_0x261707.indexOf(有缘38[铃响3n + 3]);
      if (云淡3s < 0 || 有缘3w < 0) {
        break;
      }
      云淡3m += String.fromCharCode(云淡3s << 2 | 有缘3w >> 4);
      再见40 >= 0 && "=" !== 有缘38[铃响3n + 2] && (云淡3m += String.fromCharCode((15 & 有缘3w) << 4 | 再见40 >> 2));
      云淡44 >= 0 && "=" !== 有缘38[铃响3n + 3] && (云淡3m += String.fromCharCode((3 & 再见40) << 6 | 云淡44));
    }
    try {
      return decodeURIComponent(escape(云淡3m));
    } catch (铃响4t) {
      return 云淡3m;
    }
  } catch (奈可4v) {
    return 奈可31;
  }
};
const KH99_0x9fbb2c = 终章4x => {
  try {
    let 铃响4z = "";
    for (let 再见50 = 0; 再见50 < 终章4x.length; 再见50++) {
      const 铃响55 = 终章4x.charCodeAt(再见50);
      铃响55 < 128 ? 铃响4z += String.fromCharCode(铃响55) : 铃响55 < 2048 ? (铃响4z += String.fromCharCode(192 | 铃响55 >> 6), 铃响4z += String.fromCharCode(128 | 63 & 铃响55)) : (铃响4z += String.fromCharCode(224 | 铃响55 >> 12), 铃响4z += String.fromCharCode(128 | 铃响55 >> 6 & 63), 铃响4z += String.fromCharCode(128 | 63 & 铃响55));
    }
    let 铃响5t = "";
    for (let 再见5u = 0; 再见5u < 铃响4z.length; 再见5u += 3) {
      const 铃响5z = 铃响4z.charCodeAt(再见5u);
      const 终章63 = 再见5u + 1 < 铃响4z.length ? 铃响4z.charCodeAt(再见5u + 1) : 0;
      const 云淡6a = 再见5u + 2 < 铃响4z.length ? 铃响4z.charCodeAt(再见5u + 2) : 0;
      铃响5t += KH99_0x261707[铃响5z >> 2];
      铃响5t += KH99_0x261707[(3 & 铃响5z) << 4 | 终章63 >> 4];
      铃响5t += 再见5u + 1 < 铃响4z.length ? KH99_0x261707[(15 & 终章63) << 2 | 云淡6a >> 6] : "=";
      铃响5t += 再见5u + 2 < 铃响4z.length ? KH99_0x261707[63 & 云淡6a] : "=";
    }
    return 铃响5t.split("").reverse().join("");
  } catch (奈可71) {
    return 终章4x;
  }
};
const KH99_0x241617 = {
  localQQ: {
    base: KH99_0x440b34("1MDMzoTO0EjLz4CM44SM3EzLvoDc0RHa"),
    enabled: true
  },
  localWy: {
    base: KH99_0x440b34("2MDMzoTO0EjLz4CM44SM3EzLvoDc0RHa"),
    enabled: true
  },
  miguLocal: {
    base: KH99_0x440b34("3MDMzoTO0EjLz4CM44SM3EzLvoDc0RHa"),
    enabled: true
  },
  ffapi: {
    base: KH99_0x440b34("=IjdvQnbp9ibj5SawFmZm9yL6MHc0RHa"),
    enabled: true
  },
  yaohu: {
    base: KH99_0x440b34("==wYpNXdt9SawF2LuNmLkVHavFWeukGch9yL6MHc0RHa"),
    key: KH99_0x440b34("==gNBhGRyZkTTZ0Q3cne2R3SnZnb"),
    enabled: true
  },
  nianxinWy: {
    url: KH99_0x440b34("=AHaw5Se39SaoNXZj9SZyFGaz9SbvNmL6hnbphnbhlmbuA3Yt9yL6MHc0RHa"),
    enabled: true
  },
  nianxinKw: {
    url: KH99_0x440b34("=AHaw5ydr9SaoNXZj9SZyFGaz9SbvNmL6hnbphnbhlmbuA3Yt9yL6MHc0RHa"),
    enabled: true
  },
  bugpk: {
    url: KH99_0x440b34("=MWazVXbfNjNx8SawF2Lt92YusGcnVnYukGch9yL6MHc0RHa"),
    enabled: true
  },
  nianxin: {
    url: KH99_0x440b34("=AHaw5yZr9SaoNXZj9SZyFGaz9SbvNmL6hnbphnbhlmbuA3Yt9yL6MHc0RHa"),
    enabled: true
  },
  suyinQQ: {
    base: KH99_0x440b34("jl2c110XRF1LpBXYvQXZu5SawFWav9yL6MHc0RHa"),
    key: KH99_0x440b34("1cTNygTY3AjMlNDZtMGO3gTLkdzYk1iZyMWYtcjYzMTM2YWZtkGchl2b"),
    enabled: true
  },
  suyinWy: {
    base: KH99_0x440b34("==wM2EzXjl2c110LpBXYvQXZu5SawFWav9yL6MHc0RHa"),
    key: KH99_0x440b34("1cTNygTY3AjMlNDZtMGO3gTLkdzYk1iZyMWYtcjYzMTM2YWZtkGchl2b"),
    enabled: true
  },
  suyinKw: {
    base: KH99_0x440b34("=82d1t0LpBXYvQXZu5SawFWav9yL6MHc0RHa"),
    key: KH99_0x440b34("1cTNygTY3AjMlNDZtMGO3gTLkdzYk1iZyMWYtcjYzMTM2YWZtkGchl2b"),
    enabled: true
  },
  cyapi: {
    qq: KH99_0x440b34("==AcoBnLjl2c112XxF3LJBVQvA3b05SawFWej9yL6MHc0RHa"),
    wy: KH99_0x440b34("whGcuU2chVGdl52LJBVQvA3b05SawFWej9yL6MHc0RHa"),
    kg: KH99_0x440b34("==AcoBnLjl2c112X192Z1t2LJBVQvA3b05SawFWej9yL6MHc0RHa"),
    key: KH99_0x440b34("==gY1YmN3EjY5kjM2MTYkhDMlFmY3ADM4kjZ1EWN1MzYjdjNxEGNjZ2Y4YGMkVTOxQjMhZmZkFjZlFTNmVWY1Y2N"),
    enabled: true
  },
  yuningxi: {
    base: KH99_0x440b34("==gbj5yZuVmZhVXeuIjdtkGch9yL6MHc0RHa"),
    key: KH99_0x440b34("==wM3gjMyMTOhZ2YiVGN1EGMwYWO2gzMiBDO0QzYmR2YlFTZwEWY2UGOlJ2M2cTM1IDOhljZ1ETO2MDNhF2NzIWZ"),
    enabled: true
  },
  fish: {
    base: KH99_0x440b34("=UWbuQXZlNXZj5SawFWLt9yL6MHc0RHa"),
    enabled: true
  },
  hywmusic: {
    base: KH99_0x440b34("w9Gaz5CNkFDNyEGei5yYpNXdt9yL6MHc0RHa"),
    enabled: true
  },
  yaohuMg: {
    base: KH99_0x440b34("=U3Zp12Ljl2c112LpBXYv42YuMHd2NGeukGch9yL6MHc0RHa"),
    enabled: true
  },
  yunmge: {
    url: KH99_0x440b34("vdXdr91Zu92cvkGch9SbvNmLldWbuVXeukGch9yL6MHc0RHa"),
    token: KH99_0x440b34("=UTM4UWY2UjM4cTZhVzMxgjY4YWYwcjY3kzMwYmZ2YTN1Y2M1IzMzITLpBXY"),
    enabled: true
  },
  neteaseCookie: KH99_0x3cc856("X9ICz2ZEuWI8Jo9ozmAZwQJGTGtTuvoEEj5EvZx6YSdYKF4tMIAFQIknzL1Jwa1TBikmDGMbDD0JwZBZZf0VF1U9RcNUFHdcwYJmNn4TS/4rPtBoPRVtYXVdzMQEXYU8HoZbAjIJxZFqyncnuxM8QlpbvWlJY9o7GI8tInBWRGw7yUFZXKgTUzdtPHIUDzkZwYxZYkYVCMBaRYIURq8YxZZtGgUYBQlXCm1rO1QtwYNmAOUru7B8InRozeAZYSNazEp7uw0URBsEXYV6YWt7KxMSIGwaQmR7AVZJwb5sVkgmOxI8DyMCw9Edxy5VEKVFRWYrEjwDw7QSJwNsT4woPxcUC+EmwXNJT5ZEWMwoMFw8Bv5ZYXNWSElnWzcURu0UuLZ6YccTKmltJEgFRwEcyaMJYKw7yyZCPjB8DxQCYXFmwikWR/EWFPMEFC17wLJSJhwDydobCGwUO3w6XWVtTOEEX7V8HmV8ziYdWRVpzpssWv0oFCgoxZBtwW5TLppZJmB9EplTyXRdxTg7Vt8ZCGMrCC4SYUZJxx9GE1MpEVkURqcnY9wSNyNDSO5UDp1EOPxtX7ACyRwXvYEoJsNrUwVtZaIpSsYTvhpXRllHvWx6YawTKFkmMFMWREwDTY5tZ65sVBpCOzIoPz0ZZ6ESYv59FMRaEOk8EEhIYVpdMfUcSQpbCG8UC24JYYBdTRIEXVI8NIAbBzVJYWB9zG9DXDgEFedUv6YtxUx7Kx4mIpJpDwUIy6USwToIAzp6EuIbPAQ6wOBdXeYVFKVGFcxrEIhcwasZImYTTMl8DxkbP0YZxRZdT/ZoXYMoHsxbUABdWVBpAH1sukpEFhlXuaw6ZTtDJppdJxQpDtF7zLBtYUAnAB9CDfd8Cj1SYZtZYjkWF4AWRVwoEjo7WaQZIyFsTPdrFJoECRBtZawJy5NXXTMXICYrVfUZwbYWyrkYWf1XEjpHWawSwccTGD0JGpBpRqBYz9E6YK4cyh0CPfBbOiNCwTBCxlsVE2EWCVYECnwTxUJ6MgUczd8UCx4oO1ISxZxCyM8ox6N8MrJUBgw6WVFaymIDSdtXO0lqY"),
  yuafeng: {
    url: KH99_0x3cc856("X=9tY5N9CCoUxJFsPygJVMQJK3ZoEV0JxsB6AEsIUzhcR"),
    apikey: "ak_d6c2d3eef8b8d16ac34b1fc38f6bfc198d8c2e6c25f38165" || "",
    clientid: KH99_0x3cc856("X=J6T5R8ucBbHrB8AA5JwZFqAmUTvAoEExQXZ"),
    enabled: true
  },
  ygking: {
    url: KH99_0x3cc856("X=NJTJVVXopEJuh8OBl9LyVYCVhtL9VoGu1cO7B6AEsIUzhcR"),
    enabled: true
  },
  xinghai: {
    url: KH99_0x3cc856("X==JSAQpKD8cQyEISChFRnR8FOsoQfB6AEsIUzhcR"),
    enabled: true
  },
  kuwoAnti: {
    url: KH99_0x3cc856("X=9IJrRVCI8INzhVQWZITMwsMkJpFX0cP4taAZUEUzhcR"),
    enabled: true
  },
  qqExploit: {
    key: KH99_0x440b34("=ElZalmdyZ3VSJ1Qhp1bJh3YwNXNxdXSHJVRCpXcYhTcjd0Z3UDMjdnTOB3QFh1Xj9VQa1mRmJ0QtxWRsV3a1JGM30iVrBHW2Uzbwg2TtZUbo50MmNDRwY3YD50MrNjNfx0XI9VU"),
    uin: KH99_0x440b34("==ANxgTO5IjN3YzM"),
    enabled: true
  }
};
const KH99_0x246094 = async (终章73, 云淡74) => {
  const 再见76 = 终章73.songmid || 终章73.strMediaMid || 终章73.mediaMid || 终章73.id || "";
  if (!再见76) {
    throw new Error("xunhuisi: no mid");
  }
  KH99_0x1df815.d("巡回寺QQ请求:", 再见76, 云淡74);
  const 奈可7j = await KH99_0x2f26ee(KH99_0x241617.xunhuisi.url, {
    mid: 再见76
  }, 8000);
  if (奈可7j && 200 === 奈可7j.code && 奈可7j.music_url) {
    KH99_0x1df815.d("巡回寺QQ成功:", 云淡74, "(quality=" + (奈可7j.quality || "?") + ")");
    return 奈可7j.music_url;
  }
  throw new Error("xunhuisi fail: code=" + (奈可7j?.["code"] ?? "null") + " msg=" + (奈可7j?.["msg"] || ""));
};
const KH99_0x483715 = async (再见86, 奈可87) => {
  const 终章89 = KH99_0xd6c618(再见86);
  if (!终章89) {
    throw new Error("kuwoAnti: no id");
  }
  const 奈可8d = String(终章89).startsWith("MUSIC_") ? String(终章89) : "MUSIC_" + String(终章89);
  KH99_0x1df815.d("酷我官方anti请求:", 奈可8d, 奈可87);
  const 铃响8n = await KH99_0x2f26ee(KH99_0x241617.kuwoAnti.url, {
    type: "convert_url3",
    rid: 奈可8d,
    format: "mp3"
  }, 8000);
  if (铃响8n && 200 === 铃响8n.code && 铃响8n.url) {
    if (铃响8n.url.includes("/lx/")) {
      throw new Error("kuwoAnti: VIP试听片段，跳过");
    }
    if (await KH99_0x38d151(铃响8n.url)) {
      KH99_0x1df815.d("酷我官方anti成功:", 奈可87);
      return 铃响8n.url;
    }
    throw new Error("kuwoAnti: 直链校验失败");
  }
  throw new Error("kuwoAnti fail: code=" + (铃响8n?.["code"] ?? "null"));
};
const KH99_0x52bd3a = "K×H测试·铃响奈可";
const KH99_0x7066d5 = "3.0·终章（最终版·超稳定）";
const KH99_0x4d75f6 = "曲终云淡去，铃响奈可来。—— 最终版·超稳定。五平台全覆盖，master无损一键直达。此后更新移步 Koneko（小奈可）";
const KH99_0x1ac47c = "测试";
const KH99_0x4f3f69 = ["wy", "tx", "kw", "kg", "mg"];
const KH99_0x1df818 = {
  wy: "网易云音乐",
  tx: "QQ音乐",
  kw: "酷我音乐",
  kg: "酷狗音乐",
  mg: "咪咕音乐"
};
const KH99_0x5376f6 = {
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
const KH99_0x13a61b = {
  tx: {
    supported: ["128k", "320k", "flac", "hires", "master", "atmos", "atmos_plus"],
    note: "QQ专属支持全音质"
  },
  wy: {
    supported: ["128k", "320k", "flac", "hires", "master"],
    note: "本地API/星海/念心/cyapi 多通道"
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
const KH99_0x3486ec = 有缘9e => {
  if (!有缘9e) {
    return 有缘9e;
  }
  let 再见9i = String(有缘9e);
  再见9i = 再见9i.replace(/([?&](?:key|apikey|api_key|token|access_token|qm_keyst|qqmusic_key|psrf_qqaccess_token|contentId|copyrightId|songId|songmid)=)([^&\s"'<>]+)/gi, (铃响9n, 再见9o, 奈可9p) => 再见9o + "<<E:" + KH99_0x9fbb2c(奈可9p) + ">>");
  再见9i = 再见9i.replace(/(\d{1,3}\.\d{1,3})\.(\d{1,3}\.\d{1,3})(:\d+)?/g, (有缘9w, 终章9x, 云淡9y, 铃响9z) => 终章9x + ".<<E:" + KH99_0x9fbb2c(云淡9y) + ">>" + (铃响9z || ""));
  再见9i = 再见9i.replace(/(https?:\/\/[^/]+\/)([^\s"'<>]{15,})/g, (奈可a7, 有缘a8, 终章a9) => 终章a9.includes("<<E:") ? 奈可a7 : 有缘a8 + "<<E:" + KH99_0x9fbb2c(终章a9) + ">>");
  再见9i = 再见9i.replace(/(contentId[=:]\s?)(\d+)/gi, (有缘ak, 终章al, 云淡am) => 终章al + "<<E:" + KH99_0x9fbb2c(云淡am) + ">>");
  再见9i = 再见9i.replace(/(copyrightId[=:]\s?)(\d+)/gi, (铃响at, 再见au, 奈可av) => 再见au + "<<E:" + KH99_0x9fbb2c(奈可av) + ">>");
  再见9i = 再见9i.replace(/(qm_keyst=)([^;\s<>]+)/gi, (有缘b2, 终章b3, 云淡b4) => 终章b3 + "<<E:" + KH99_0x9fbb2c(云淡b4) + ">>");
  再见9i = 再见9i.replace(/(uin=o)(\d+)/gi, (铃响bb, 再见bc, 奈可bd) => 再见bc + "<<E:" + KH99_0x9fbb2c(奈可bd) + ">>");
  再见9i = 再见9i.replace(/(purl[=:]\s?)([^\s"'<>]{10,})/gi, (有缘bk, 终章bl, 云淡bm) => 终章bl + "<<E:" + KH99_0x9fbb2c(云淡bm) + ">>");
  return 再见9i;
};
const KH99_0xbf1f13 = 终章br => 终章br.map(铃响bt => {
  if ("string" == typeof 铃响bt) {
    return KH99_0x3486ec(铃响bt);
  }
  if ("object" == typeof 铃响bt) {
    try {
      return KH99_0x3486ec(JSON.stringify(铃响bt));
    } catch (有缘c2) {
      return "[obj]";
    }
  }
  return 铃响bt;
});
const KH99_0x14b7b2 = "[" + KH99_0x52bd3a + "]";
const KH99_0x1df815 = {
  i: (...铃响c5) => {
    try {
      console.log(KH99_0x14b7b2, ...KH99_0xbf1f13(铃响c5));
    } catch (终章c9) {}
  },
  e: (...云淡ca) => {
    try {
      console.error(KH99_0x14b7b2 + " ERR", ...KH99_0xbf1f13(云淡ca));
    } catch (终章cf) {}
  },
  w: (...云淡cg) => {
    try {
      console.warn(KH99_0x14b7b2 + " WARN", ...KH99_0xbf1f13(云淡cg));
    } catch (终章cl) {}
  },
  d: (...云淡cm) => {
    try {
      console.debug(KH99_0x14b7b2 + " DBG", ...KH99_0xbf1f13(云淡cm));
    } catch (终章cr) {}
  },
  t: (云淡cs, ...铃响ct) => {
    try {
      const 奈可cv = new Date().toISOString().substring(11, 19);
      ("e" === 云淡cs ? console.error : "w" === 云淡cs ? console.warn : console.log)("[" + KH99_0x52bd3a + " " + 奈可cv + "]", ...KH99_0xbf1f13(铃响ct));
    } catch (铃响d5) {}
  }
};
const KH99_0x849c2a = 4000;
const KH99_0x27ff5c = (再见d6, 奈可d7 = {}) => new Promise((有缘d8, 终章d9) => {
  const 铃响db = {
    method: "GET",
    timeout: KH99_0x849c2a,
    headers: {
      "X-Client-Software": "lx"
    },
    ...奈可d7
  };
  KH99_0x1df815.d("HTTP", 铃响db.method, 再见d6.substring(0, 120));
  KH99_0x5d2dfd(再见d6, 铃响db, (终章dl, 云淡dm) => {
    if (终章dl) {
      KH99_0x1df815.d("HTTP错误:", 终章dl.message || 终章dl);
      return 终章d9(new Error("请求错误: " + (终章dl.message || 终章dl)));
    }
    let 云淡dy = 云淡dm?.["body"];
    if ("string" == typeof 云淡dy) {
      const 终章e3 = 云淡dy.trim();
      if (终章e3.startsWith("{") || 终章e3.startsWith("[")) {
        try {
          云淡dy = JSON.parse(终章e3);
        } catch (奈可ed) {}
      }
    }
    有缘d8({
      statusCode: 云淡dm?.["statusCode"] ?? 0,
      headers: 云淡dm?.["headers"] || {},
      body: 云淡dy
    });
  });
});
const KH99_0x2d1c7c = 有缘ek => {
  if (!有缘ek || 有缘ek.statusCode >= 400) {
    return false;
  }
  const 奈可ep = 有缘ek.body;
  if (!奈可ep) {
    return false;
  }
  if ("object" == typeof 奈可ep) {
    return true;
  }
  if ("string" == typeof 奈可ep) {
    const 终章ex = 奈可ep.trim().toLowerCase();
    if (终章ex.startsWith("<!doctype") || 终章ex.startsWith("<html")) {
      return false;
    }
    if (终章ex.includes("cloudflare") && 终章ex.includes("challenge")) {
      return false;
    }
    if (终章ex.includes("just a moment")) {
      return false;
    }
  }
  return true;
};
const KH99_0x270354 = async (云淡fg, 铃响fh = {}) => {
  const 奈可fj = await KH99_0x27ff5c(云淡fg, 铃响fh);
  if (!KH99_0x2d1c7c(奈可fj)) {
    throw new Error("HTTP " + 奈可fj.statusCode + ": " + KH99_0x3486ec(云淡fg).substring(0, 60));
  }
  let 云淡fs = 奈可fj.body;
  if ("string" == typeof 云淡fs) {
    const 终章fx = 云淡fs.trim();
    try {
      云淡fs = JSON.parse(终章fx);
    } catch (终章g3) {
      throw new Error("JSON解析失败: " + KH99_0x3486ec(终章fx).substring(0, 100));
    }
  }
  return 云淡fs;
};
const KH99_0x2f26ee = async (有缘g8, 终章g9 = {}, 云淡ga = 4000, 铃响gb = {}) => {
  const 奈可gd = Object.keys(终章g9).filter(铃响gh => undefined !== 终章g9[铃响gh] && null !== 终章g9[铃响gh]).map(铃响gn => encodeURIComponent(铃响gn) + "=" + encodeURIComponent(终章g9[铃响gn])).join("&");
  const 云淡gs = 有缘g8.includes("?") ? "&" : "?";
  return KH99_0x270354(有缘g8 + (奈可gd ? 云淡gs + 奈可gd : ""), {
    method: "GET",
    timeout: 云淡ga,
    headers: 铃响gb
  });
};
const KH99_0x560798 = async (有缘h2, 终章h3 = {}, 云淡h4 = 4000, 铃响h5 = "application/x-www-form-urlencoded;charset:utf-8;") => KH99_0x270354(有缘h2, {
  method: "POST",
  headers: {
    "Content-Type": 铃响h5
  },
  body: 终章h3,
  timeout: 云淡h4
});
const KH99_0xd6c618 = 云淡ha => {
  if (!云淡ha || "object" != typeof 云淡ha) {
    return "";
  }
  let 终章hf = "";
  switch (云淡ha.source || "") {
    case "kg":
      终章hf = 云淡ha.hash || 云淡ha.FileHash || 云淡ha.fileHash || 云淡ha.songmid || 云淡ha.songId || 云淡ha.id || "";
      break;
    case "tx":
      终章hf = 云淡ha.songmid || 云淡ha.songId || 云淡ha.strMediaMid || 云淡ha.mid || 云淡ha.id || "";
      break;
    case "wy":
      终章hf = 云淡ha.songmid || 云淡ha.songId || 云淡ha.id || "";
      break;
    case "kw":
      终章hf = 云淡ha.songmid || 云淡ha.rid || 云淡ha.songId || 云淡ha.musicId || 云淡ha.id || "";
      break;
    case "mg":
      终章hf = 云淡ha.copyrightId || 云淡ha.copyrightid || 云淡ha.songmid || 云淡ha.songId || 云淡ha.id || "";
      break;
    default:
      终章hf = 云淡ha.songmid || 云淡ha.songId || 云淡ha.hash || 云淡ha.rid || 云淡ha.musicId || 云淡ha.copyrightId || 云淡ha.songid || 云淡ha.mid || 云淡ha.strMediaMid || 云淡ha.FileHash || 云淡ha.fileHash || 云淡ha.copyrightid || "";
  }
  return 终章hf ? String(终章hf) : "";
};
const KH99_0x4cbdf5 = 终章jl => {
  if (!终章jl || "string" != typeof 终章jl) {
    return false;
  }
  if (!终章jl.startsWith("http://") && !终章jl.startsWith("https://")) {
    return false;
  }
  if (终章jl.includes("404") && 终章jl.length < 50) {
    return false;
  }
  const 奈可k1 = 终章jl.toLowerCase();
  return !奈可k1.includes("music.163.com/song/media/outer") && [".mp3", ".flac", ".m4a", ".ogg", ".wav", "music.126.net", "qqmusic", "kuwo.cn", "kugou.com", "migu", "music"].some(奈可kj => 奈可k1.includes(奈可kj));
};
const KH99_0x38d151 = async (铃响kn, 再见ko = 500000) => {
  try {
    const 有缘kq = await KH99_0x27ff5c(铃响kn, {
      method: "GET",
      timeout: 3000,
      headers: {
        Range: "bytes=0-1"
      }
    });
    if (!有缘kq || 有缘kq.statusCode >= 400) {
      return false;
    }
    const 终章kx = 有缘kq.headers || {};
    const 再见l0 = String(终章kx["content-range"] || 终章kx["Content-Range"] || "");
    const 铃响l5 = parseInt(String(终章kx["content-length"] || 终章kx["Content-Length"] || "0"), 10);
    const 云淡la = 再见l0.includes("/") ? parseInt(再见l0.split("/")[1], 10) : 铃响l5;
    return !isNaN(云淡la) && 云淡la > 再见ko;
  } catch (奈可lj) {
    return false;
  }
};
const KH99_0x17f9ce = 有缘lk => {
  if (!有缘lk) {
    return "";
  }
  if ("string" == typeof 有缘lk) {
    return 有缘lk.startsWith("http") ? 有缘lk : "";
  }
  if ("object" != typeof 有缘lk) {
    return "";
  }
  if ("string" == typeof 有缘lk.url && 有缘lk.url.startsWith("http")) {
    return 有缘lk.url;
  }
  if (有缘lk.data) {
    if ("string" == typeof 有缘lk.data && 有缘lk.data.startsWith("http")) {
      return 有缘lk.data;
    }
    if ("string" == typeof 有缘lk.data.url && 有缘lk.data.url.startsWith("http")) {
      return 有缘lk.data.url;
    }
    if (有缘lk.data.vipmusic && "string" == typeof 有缘lk.data.vipmusic.url && 有缘lk.data.vipmusic.url.startsWith("http")) {
      return 有缘lk.data.vipmusic.url;
    }
    if ("string" == typeof 有缘lk.data.play_url && 有缘lk.data.play_url.startsWith("http")) {
      return 有缘lk.data.play_url;
    }
    if (Array.isArray(有缘lk.data) && 有缘lk.data.length > 0) {
      if ("string" == typeof 有缘lk.data[0].url && 有缘lk.data[0].url.startsWith("http")) {
        return 有缘lk.data[0].url;
      }
      if ("string" == typeof 有缘lk.data[0] && 有缘lk.data[0].startsWith("http")) {
        return 有缘lk.data[0];
      }
    }
  }
  if ((200 === 有缘lk.code || 0 === 有缘lk.code || 200 === 有缘lk.status) && 有缘lk.data) {
    return KH99_0x17f9ce({
      data: 有缘lk.data
    });
  }
  if (有缘lk.text && "string" == typeof 有缘lk.text) {
    const 终章or = 有缘lk.text.match(/https?:\/\/[^\s"']+/);
    if (终章or) {
      return 终章or[0];
    }
  }
  if (有缘lk.data && 有缘lk.data.text && "string" == typeof 有缘lk.data.text) {
    const 再见p6 = 有缘lk.data.text.match(/https?:\/\/[^\s"']+/);
    if (再见p6) {
      return 再见p6[0];
    }
  }
  return "";
};
const KH99_0x37b286 = async (奈可pd, 有缘pe) => {
  const 云淡pg = KH99_0xd6c618(奈可pd);
  if (!云淡pg) {
    throw new Error("no id");
  }
  KH99_0x1df815.d("本地QQ请求:", 云淡pg, 有缘pe);
  const 铃响pn = await KH99_0x2f26ee(KH99_0x241617.localQQ.base + "/song/urls", {
    mids: 云淡pg,
    type: {
      "128k": "MP3_128",
      "192k": "MP3_320",
      "320k": "MP3_320",
      flac: "FLAC",
      flac24bit: "Master",
      hires: "Master",
      master: "Master"
    }[有缘pe] || "MP3_128"
  });
  const 奈可q1 = KH99_0x17f9ce(铃响pn) || 铃响pn && 铃响pn.data && 铃响pn.data[云淡pg] && 铃响pn.data[云淡pg].url || "";
  if (奈可q1) {
    return 奈可q1;
  }
  throw new Error("localQQ fail: " + KH99_0x3486ec(JSON.stringify(铃响pn)).substring(0, 100));
};
const KH99_0x249433 = async (奈可qj, 有缘qk) => {
  const 云淡qm = KH99_0xd6c618(奈可qj);
  if (!云淡qm) {
    throw new Error("no id");
  }
  KH99_0x1df815.d("本地网易请求:", 云淡qm, 有缘qk);
  const 铃响qt = await KH99_0x2f26ee(KH99_0x241617.localWy.base + "/song/url/v1", {
    id: 云淡qm,
    level: {
      "128k": "standard",
      "192k": "exhigh",
      "320k": "exhigh",
      flac: "lossless",
      flac24bit: "hires",
      hires: "hires",
      master: "jymaster"
    }[有缘qk] || "standard",
    encodeType: "flac",
    cookie: KH99_0x241617.neteaseCookie
  });
  if (铃响qt && 200 === 铃响qt.code && Array.isArray(铃响qt.data) && 铃响qt.data[0] && 铃响qt.data[0].url) {
    return 铃响qt.data[0].url;
  }
  const 铃响rn = KH99_0x17f9ce(铃响qt);
  if (铃响rn) {
    return 铃响rn;
  }
  throw new Error("localWy fail: " + KH99_0x3486ec(JSON.stringify(铃响qt)).substring(0, 100));
};
const KH99_0x28c14f = async (奈可rv, 有缘rw) => {
  const 云淡ry = KH99_0xd6c618(奈可rv);
  const 再见s0 = 奈可rv.source;
  if (!云淡ry) {
    throw new Error("no id");
  }
  let 铃响s5 = "";
  if ("tx" === 再见s0) {
    铃响s5 = "https://y.qq.com/n/ryqq/songDetail/" + 云淡ry;
  } else {
    if ("wy" === 再见s0) {
      铃响s5 = "https://music.163.com/song?id=" + 云淡ry;
    } else {
      if ("kw" === 再见s0) {
        铃响s5 = "https://www.kuwo.cn/play_detail/" + 云淡ry;
      } else {
        if ("kg" === 再见s0) {
          铃响s5 = "https://www.kugou.com/song/#hash=" + 云淡ry;
        } else {
          if ("mg" !== 再见s0) {
            throw new Error("unsupported src: " + 再见s0);
          }
          铃响s5 = "https://music.migu.cn/v3/music/song/" + 云淡ry;
        }
      }
    }
  }
  KH99_0x1df815.d("FFAPI请求:", 再见s0, 云淡ry);
  const 奈可sv = await KH99_0x2f26ee(KH99_0x241617.ffapi.base + "/songurl", {
    url: 铃响s5
  });
  const 再见t0 = KH99_0x17f9ce(奈可sv);
  if (再见t0) {
    return 再见t0;
  }
  throw new Error("ffapi fail");
};
const KH99_0x42cdf5 = async (铃响t5, 再见t6) => {
  if (!KH99_0x241617.yuafeng.apikey) {
    throw new Error("yuafengKg: 未配置 apikey");
  }
  let 铃响tb = 铃响t5.hash || 铃响t5.songmid || 铃响t5.id || "";
  const 铃响th = 铃响t5.songName || 铃响t5.name || "";
  const 云淡tm = 铃响t5.singer || "";
  if (!铃响tb && !铃响th) {
    throw new Error("yuafengKg: no hash and no songName");
  }
  KH99_0x1df815.d("yuafeng酷狗请求:", 铃响tb || 铃响th, 再见t6);
  const 有缘tw = {
    apikey: KH99_0x241617.yuafeng.apikey,
    n: 1
  };
  铃响tb && (有缘tw.hash = 铃响tb);
  铃响th && (有缘tw.msg = 铃响th + (云淡tm ? " " + 云淡tm : ""));
  const 终章u9 = await KH99_0x2f26ee(KH99_0x241617.yuafeng.url, 有缘tw, 8000);
  if (终章u9 && 0 === 终章u9.code && 终章u9.data) {
    const 再见ui = 终章u9.data.music || "";
    if (再见ui && KH99_0x4cbdf5(再见ui)) {
      KH99_0x1df815.d("yuafeng酷狗成功:", 再见t6, "(302->sharefs.kugou.com)");
      return 再见ui;
    }
    throw new Error("yuafengKg: data.music 为空");
  }
  throw new Error("yuafengKg fail: code=" + (终章u9?.["code"] ?? "null"));
};
const KH99_0x325c43 = async (终章ux, 云淡uy) => {
  const 再见v0 = KH99_0xd6c618(终章ux);
  if (!再见v0) {
    throw new Error("nianxinWy: no id");
  }
  const 云淡v4 = {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires",
    hires: "hires",
    master: "jymaster"
  }[云淡uy] || "exhigh";
  KH99_0x1df815.d("念心WY请求:", 再见v0, 云淡uy, "->", 云淡v4);
  const 铃响vh = await KH99_0x2f26ee(KH99_0x241617.nianxinWy.url, {
    id: 再见v0,
    level: 云淡v4
  }, 8000);
  if (铃响vh && 200 === 铃响vh.code && 铃响vh.url) {
    return 铃响vh.url;
  }
  throw new Error("nianxinWy fail: code=" + (铃响vh?.["code"] ?? "null"));
};
const KH99_0xd125e2 = async (终章vx, 云淡vy) => {
  const 再见w0 = KH99_0xd6c618(终章vx);
  if (!再见w0) {
    throw new Error("nianxinKw: no id");
  }
  const 云淡w4 = {
    "128k": "128kmp3",
    "320k": "320kmp3",
    flac: "2000kflac",
    flac24bit: "4000kflac",
    hires: "hires",
    master: "4000kflac"
  }[云淡vy] || "320kmp3";
  KH99_0x1df815.d("念心KW请求:", 再见w0, 云淡vy, "->", 云淡w4);
  const 铃响wh = await KH99_0x2f26ee(KH99_0x241617.nianxinKw.url, {
    id: 再见w0,
    level: 云淡w4
  }, 8000);
  if (铃响wh && 200 === 铃响wh.code) {
    const 奈可wp = 铃响wh.data?.["url"] || 铃响wh.url || "";
    if (奈可wp) {
      return 奈可wp;
    }
  }
  throw new Error("nianxinKw fail: code=" + (铃响wh?.["code"] ?? "null"));
};
const KH99_0x1e0d8d = async (奈可x1, 有缘x2) => {
  const 云淡x4 = KH99_0xd6c618(奈可x1);
  if (!云淡x4) {
    throw new Error("bugpk: no id");
  }
  const 有缘x8 = {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires",
    hires: "hires",
    master: "jymaster"
  }[有缘x2] || "exhigh";
  KH99_0x1df815.d("bugpk请求:", 云淡x4, 有缘x2, "->", 有缘x8);
  const 终章xl = await KH99_0x2f26ee(KH99_0x241617.bugpk.url, {
    type: "json",
    ids: 云淡x4,
    level: 有缘x8
  }, 8000);
  if (终章xl && 200 === 终章xl.status && 终章xl.url) {
    if (!KH99_0x4cbdf5(终章xl.url)) {
      throw new Error("bugpk: 外链伪直链(疑似VIP歌)");
    }
    return 终章xl.url;
  }
  throw new Error("bugpk fail: status=" + (终章xl?.["status"] ?? "null"));
};
const KH99_0x57d357 = async (铃响y5, 再见y6) => {
  const 有缘y8 = 铃响y5.hash || 铃响y5.songmid || 铃响y5.id || "";
  if (!有缘y8) {
    throw new Error("nianxinKg: no hash");
  }
  const 云淡yg = {
    "128k": "128kmp3",
    "192k": "320kmp3",
    "320k": "320kmp3",
    flac: "2000kflac",
    flac24bit: "4000kflac",
    hires: "hires",
    master: "4000kflac",
    atmos: "4000kflac",
    atmos_plus: "4000kflac"
  }[再见y6] || "320kmp3";
  KH99_0x1df815.d("念心酷狗请求:", 有缘y8, 再见y6, "->", 云淡yg);
  const 有缘yw = await KH99_0x2f26ee(KH99_0x241617.nianxin.url, {
    id: 有缘y8,
    level: 云淡yg
  }, 8000);
  if (有缘yw && 200 === 有缘yw.code && 有缘yw.url) {
    KH99_0x1df815.d("念心酷狗成功:", 再见y6, "(level=" + 云淡yg + ")");
    return 有缘yw.url;
  }
  throw new Error("nianxinKg fail: code=" + (有缘yw?.["code"] ?? "null") + " msg=" + (有缘yw?.["msg"] || "").substring(0, 60));
};
const KH99_0x3ce087 = async (有缘zk, 终章zl) => {
  const 铃响zn = 有缘zk.songmid || 有缘zk.strMediaMid || 有缘zk.mediaMid || 有缘zk.id || "";
  if (!铃响zn) {
    throw new Error("ygking: no mid");
  }
  const 终章zx = {
    "128k": "128",
    "192k": "320",
    "320k": "320",
    flac: "flac",
    flac24bit: "hires",
    hires: "hires",
    master: "master",
    atmos: "master",
    atmos_plus: "master"
  }[终章zl] || "320";
  KH99_0x1df815.d("ygking QQ请求:", 铃响zn, 终章zl, "->", 终章zx);
  const 奈可10d = await KH99_0x2f26ee(KH99_0x241617.ygking.url, {
    mid: 铃响zn,
    quality: 终章zx
  }, 8000);
  if (奈可10d && 0 === 奈可10d.code && 奈可10d.data) {
    const 铃响10n = 奈可10d.data[铃响zn] || 奈可10d.data[Object.keys(奈可10d.data)[0]] || "";
    if (铃响10n && KH99_0x4cbdf5(铃响10n)) {
      KH99_0x1df815.d("ygking QQ成功:", 终章zl, "(quality=" + 终章zx + ")");
      return 铃响10n;
    }
  }
  throw new Error("ygking fail: code=" + (奈可10d?.["code"] ?? "null"));
};
const KH99_0x7208a = async (奈可117, 有缘118, 终章119) => {
  const 铃响11b = "kg" === 奈可117 ? 有缘118.hash || 有缘118.songmid || 有缘118.id || "" : "migu" === 奈可117 ? 有缘118.songId || 有缘118.contentId || 有缘118.id || "" : 有缘118.songmid || 有缘118.rid || 有缘118.id || "";
  if (!铃响11b) {
    throw new Error("xinghai: no id for source=" + 奈可117);
  }
  const 终章11x = 有缘118.songName || 有缘118.name || "";
  const 有缘122 = 有缘118.singer || "";
  const 铃响125 = 终章11x + (有缘122 ? " " + 有缘122 : "");
  const 终章129 = {
    "128k": "128kmp3",
    "192k": "320kmp3",
    "320k": "320kmp3",
    flac: "flac",
    flac24bit: "hires",
    hires: "hires",
    master: "flac",
    atmos: "flac",
    atmos_plus: "flac"
  }[终章119] || "320kmp3";
  KH99_0x1df815.d("星海请求:", 奈可117, 铃响11b, 终章119, "->", 终章129);
  const 有缘12q = await KH99_0x2f26ee(KH99_0x241617.xinghai.url, {
    source: 奈可117,
    name: 铃响125,
    songmid: String(铃响11b),
    quality: 终章129
  }, 8000);
  if (有缘12q && 200 === 有缘12q.code && 有缘12q.url) {
    KH99_0x1df815.d("星海成功:", 奈可117, 终章119);
    return 有缘12q.url;
  }
  throw new Error("xinghai fail: code=" + (有缘12q?.["code"] ?? "null") + " msg=" + (有缘12q?.["message"] || "").substring(0, 60));
};
const KH99_0x2bcea4 = (终章13f, 云淡13g) => KH99_0x7208a("kw", 终章13f, 云淡13g);
const KH99_0x35ac09 = (奈可13j, 有缘13k) => KH99_0x7208a("kg", 奈可13j, 有缘13k);
const KH99_0x44105f = (铃响13n, 再见13o) => KH99_0x7208a("migu", 铃响13n, 再见13o);
const KH99_0x10e793 = async (终章13r, 云淡13s) => {
  const 再见13u = 终章13r.songmid || 终章13r.songId || 终章13r.id || "";
  if (!再见13u) {
    throw new Error("xinghaiWy: no id");
  }
  const 有缘142 = 终章13r.songName || 终章13r.name || "";
  const 奈可147 = 终章13r.singer || "";
  const 云淡14a = 有缘142 + (奈可147 ? " " + 奈可147 : "");
  const 有缘14e = {
    "128k": "standard",
    "192k": "exhigh",
    "320k": "exhigh",
    flac: "lossless",
    flac24bit: "hires",
    hires: "hires",
    master: "jymaster",
    atmos: "hires",
    atmos_plus: "hires"
  }[云淡13s] || "exhigh";
  KH99_0x1df815.d("星海网易请求:", 再见13u, 云淡13s, "->", 有缘14e);
  const 再见14u = await KH99_0x2f26ee(KH99_0x241617.xinghai.url, {
    source: "netease",
    name: 云淡14a,
    songmid: String(再见13u),
    quality: 有缘14e
  }, 8000);
  if (再见14u && 200 === 再见14u.code && 再见14u.url) {
    if (!KH99_0x4cbdf5(再见14u.url)) {
      throw new Error("xinghaiWy: URL无效");
    }
    KH99_0x1df815.d("星海网易成功:", 云淡13s, "(br=" + (再见14u.br || "?") + ")");
    return 再见14u.url;
  }
  throw new Error("xinghai fail: code=" + (再见14u?.["code"] ?? "null") + " msg=" + (再见14u?.["message"] || "").substring(0, 60));
};
const KH99_0x34b349 = async (铃响15n, 再见15o) => {
  const 有缘15q = 铃响15n.songName || 铃响15n.name || "";
  if (!有缘15q) {
    throw new Error("yunmgeKw: no name");
  }
  const 终章15x = {
    "128k": 128,
    "192k": 192,
    "320k": 320,
    flac: 2000,
    flac24bit: 4000,
    hires: 4000,
    atmos: 4000,
    atmos_plus: 4000,
    master: 4000
  }[再见15o] || 320;
  const 铃响15z = {
    4000: [4000, 2000, 320, 192, 128],
    2000: [2000, 320, 192, 128],
    320: [320, 192, 128],
    192: [192, 128],
    128: [128]
  }[String(终章15x)] || [终章15x];
  KH99_0x1df815.d("yunmge酷我请求:", 有缘15q, 再见15o, "->", 终章15x);
  const 再见166 = await KH99_0x2f26ee(KH99_0x241617.yunmge.url, {
    token: KH99_0x241617.yunmge.token,
    name: 有缘15q,
    n: 1
  }, 8000);
  if (!再见166 || 200 !== 再见166.code || !再见166.data) {
    throw new Error("yunmgeKw fail: code=" + (再见166?.["code"] ?? "null") + " msg=" + KH99_0x3486ec(JSON.stringify(再见166)).substring(0, 80));
  }
  const 奈可16p = 再见166.data.all_bitrates || [];
  if (0 === 奈可16p.length) {
    throw new Error("yunmgeKw: no all_bitrates");
  }
  for (const 有缘16w of 铃响15z) {
    const 云淡16y = 奈可16p.find(奈可171 => 奈可171.bitrate === 有缘16w || String(奈可171.bitrate) === String(有缘16w));
    if (云淡16y && 云淡16y.play_url) {
      if (await KH99_0x38d151(云淡16y.play_url)) {
        KH99_0x1df815.d("yunmge酷我成功:", "bitrate=" + 云淡16y.bitrate, "label=" + (云淡16y.label || ""));
        return 云淡16y.play_url;
      }
      KH99_0x1df815.d("yunmge酷我直链失效(过期缓存), 尝试下一档:", "bitrate=" + 云淡16y.bitrate);
    }
  }
  for (const 有缘17q of 奈可16p) if (有缘17q.play_url && (await KH99_0x38d151(有缘17q.play_url))) {
    KH99_0x1df815.d("yunmge酷我兜底返回:", "bitrate=" + 有缘17q.bitrate);
    return 有缘17q.play_url;
  }
  throw new Error("yunmgeKw: all play_url dead");
};
const KH99_0x13e362 = async (终章183, 云淡184) => {
  const 再见186 = 终章183.songName || 终章183.name || "";
  const 铃响18b = 终章183.singer || "";
  if (再见186) {
    const 终章18f = 再见186 + 铃响18b;
    KH99_0x1df815.d("妖狐酷我搜索:", 终章18f);
    const 有缘18k = await KH99_0x2f26ee(KH99_0x241617.yaohu.base + "/kuwo", {
      key: KH99_0x241617.yaohu.key,
      action: "search",
      msg: 终章18f,
      n: 1
    });
    const 云淡18s = 有缘18k?.["data"]?.["vipmusic"] || {};
    const 有缘18w = 云淡18s.url || "";
    if (有缘18w && KH99_0x4cbdf5(有缘18w) && (await KH99_0x38d151(有缘18w))) {
      KH99_0x1df815.d("妖狐酷我搜索成功, level:", 云淡18s.level, "bitrate:", 云淡18s.bitrate);
      return 有缘18w;
    }
  }
  const 终章199 = KH99_0xd6c618(终章183);
  if (!终章199) {
    throw new Error("yaohuKw: no id and no songName");
  }
  KH99_0x1df815.d("妖狐酷我ID解析:", 终章199);
  const 终章19f = await KH99_0x2f26ee(KH99_0x241617.yaohu.base + "/kuwo", {
    key: KH99_0x241617.yaohu.key,
    action: "song",
    id: 终章199,
    size: "lossless"
  }, 8000);
  const 再见19o = KH99_0x17f9ce(终章19f);
  if (再见19o && (await KH99_0x38d151(再见19o))) {
    return 再见19o;
  }
  throw new Error("yaohuKw fail: " + KH99_0x3486ec(JSON.stringify(终章19f)).substring(0, 100));
};
const KH99_0x14514a = async (终章19x, 云淡19y) => {
  const 再见1a0 = 终章19x.songName || 终章19x.name || "";
  const 铃响1a5 = 终章19x.singer || "";
  if (!再见1a0) {
    throw new Error("no songName for kg search");
  }
  const 云淡1aa = {
    "128k": "128",
    "192k": "320",
    "320k": "320",
    flac: "flac",
    flac24bit: "high",
    hires: "high",
    master: "high"
  }[云淡19y] || "128";
  const 有缘1ak = 再见1a0 + 铃响1a5;
  KH99_0x1df815.d("妖狐酷狗请求:", 有缘1ak, 云淡1aa);
  const 有缘1aq = await KH99_0x2f26ee(KH99_0x241617.yaohu.base + "/kg", {
    key: KH99_0x241617.yaohu.key,
    msg: 有缘1ak,
    n: 1,
    quality: 云淡1aa
  }, 8000);
  if (有缘1aq && 200 === 有缘1aq.code && 有缘1aq.data) {
    const 终章1b3 = 有缘1aq.data.play_url || 有缘1aq.data.url || "";
    if (终章1b3 && KH99_0x4cbdf5(终章1b3) && !终章1b3.includes("www.kugou.com/song")) {
      return 终章1b3;
    }
  }
  throw new Error("yaohuKg fail: code=" + (有缘1aq?.["code"] ?? "null") + " (酷狗直链不可用)");
};
const KH99_0x579292 = async (终章1bl, 云淡1bm) => {
  const 再见1bo = 终章1bl.source;
  const 终章1br = 终章1bl.songName || 终章1bl.name || "";
  const 有缘1bw = 终章1bl.singer || "";
  if (!终章1br) {
    throw new Error("no songName");
  }
  const 奈可1c1 = {
    wy: "wy",
    tx: "qq"
  }[再见1bo];
  if (!奈可1c1) {
    throw new Error("unsupported src: " + 再见1bo);
  }
  const 再见1c6 = 终章1br + 有缘1bw;
  const 终章1c9 = {
    key: KH99_0x241617.yaohu.key,
    msg: 再见1c6,
    n: 1
  };
  "tx" === 再见1bo && (终章1c9.size = {
    "128k": "128",
    "192k": "320",
    "320k": "320",
    flac: "flac",
    flac24bit: "flac",
    hires: "flac",
    master: "flac"
  }[云淡1bm] || "320");
  KH99_0x1df815.d("妖狐通用请求:", 奈可1c1, 再见1c6, "tx" === 再见1bo ? "size=" + 终章1c9.size : "");
  const 有缘1cw = await KH99_0x2f26ee(KH99_0x241617.yaohu.base + "/" + 奈可1c1, 终章1c9);
  const 奈可1d1 = 有缘1cw?.["data"]?.["musicurl"] || 有缘1cw?.["data"]?.["vipmusic"]?.["url"] || "";
  if (奈可1d1 && KH99_0x4cbdf5(奈可1d1)) {
    return 奈可1d1;
  }
  const 再见1dc = KH99_0x17f9ce(有缘1cw);
  if (再见1dc) {
    return 再见1dc;
  }
  throw new Error("yaohu fail: " + KH99_0x3486ec(JSON.stringify(有缘1cw)).substring(0, 100));
};
const KH99_0x51f0ba = async (有缘1dk, 终章1dl) => {
  let 铃响1dn = 有缘1dk.songName || 有缘1dk.name || "";
  const 云淡1ds = 有缘1dk.singer || "";
  const 奈可1dv = KH99_0xd6c618(有缘1dk);
  if (!铃响1dn && 奈可1dv) {
    KH99_0x1df815.d("妖狐咪咕: 无歌名，用 id 搜索获取:", 奈可1dv);
    try {
      const 奈可1e1 = await KH99_0x2f26ee("" + KH99_0x241617.yaohuMg.base, {
        key: KH99_0x241617.yaohu.key,
        msg: String(奈可1dv),
        n: 1
      });
      const 奈可1e7 = 奈可1e1?.["data"]?.["vipmusic"] || 奈可1e1?.["data"]?.[0] || null;
      奈可1e7 && (奈可1e7.songName || 奈可1e7.name) && (铃响1dn = 奈可1e7.songName || 奈可1e7.name, KH99_0x1df815.d("妖狐咪咕: 通过 id 搜索到歌名:", 铃响1dn));
    } catch (奈可1ep) {
      KH99_0x1df815.d("妖狐咪咕: id 搜索失败:", 奈可1ep.message);
    }
  }
  if (!铃响1dn) {
    throw new Error("yaohuMg: 无歌名且 id 搜索失败");
  }
  const 奈可1ev = 铃响1dn + (云淡1ds ? " " + 云淡1ds : "");
  KH99_0x1df815.d("妖狐咪咕请求:", 奈可1ev);
  const 奈可1f1 = await KH99_0x2f26ee("" + KH99_0x241617.yaohuMg.base, {
    key: KH99_0x241617.yaohu.key,
    msg: 奈可1ev,
    n: 1
  });
  const 奈可1f7 = KH99_0x17f9ce(奈可1f1);
  if (奈可1f7) {
    return 奈可1f7;
  }
  throw new Error("yaohuMg fail: " + KH99_0x3486ec(JSON.stringify(奈可1f1)).substring(0, 100));
};
const KH99_0x31df1e = {
  ok: null,
  ts: 0
};
const KH99_0x371a9 = 60000;
const KH99_0x1ea804 = async () => {
  const 云淡1fg = Date.now();
  if (null !== KH99_0x31df1e.ok && 云淡1fg - KH99_0x31df1e.ts < KH99_0x371a9) {
    return KH99_0x31df1e.ok;
  }
  try {
    const 奈可1fj = await KH99_0x27ff5c(KH99_0x241617.miguLocal.base + "/api/search?text=test&page=1&size=1", {
      timeout: 2000
    });
    KH99_0x31df1e.ok = KH99_0x2d1c7c(奈可1fj);
    KH99_0x31df1e.ts = 云淡1fg;
    KH99_0x1df815.d("咪咕API健康检查:", KH99_0x31df1e.ok ? "正常" : "异常");
    return KH99_0x31df1e.ok;
  } catch (有缘1fq) {
    KH99_0x31df1e.ok = false;
    KH99_0x31df1e.ts = 云淡1fg;
    KH99_0x1df815.d("咪咕API健康检查: 异常", 有缘1fq.message);
    return false;
  }
};
const KH99_0x401a31 = async (奈可1fv, 有缘1fw) => {
  const 云淡1fy = 奈可1fv.songName || 奈可1fv.name || "";
  const 终章1g3 = 奈可1fv.singer || "";
  let 再见1g6 = 奈可1fv.songmid || 奈可1fv.songId || 奈可1fv.id || "";
  let 再见1gc = 奈可1fv.contentId || "";
  let 终章1gf = 奈可1fv.copyrightId || 奈可1fv.copyrightid || "";
  const 有缘1gk = 奈可1fv.albumId || "";
  if (KH99_0x1df815.d("咪咕请求:", 云淡1fy || 再见1g6, 有缘1fw, "albumId=" + 有缘1gk, "contentId=" + 再见1gc), 有缘1gk) {
    try {
      KH99_0x1df815.d("咪咕方式1: 通过albumId=" + 有缘1gk + "调专辑接口");
      const 铃响1gz = await KH99_0x27ff5c("https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?needSimple=01&resourceId=" + 有缘1gk + "&resourceType=2003", {
        method: "GET",
        timeout: 8000,
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
      });
      if (铃响1gz && 200 === 铃响1gz.statusCode) {
        let 有缘1h8 = 铃响1gz.body;
        if ("string" == typeof 有缘1h8) {
          try {
            有缘1h8 = JSON.parse(有缘1h8);
          } catch (云淡1hg) {}
        }
        if (有缘1h8 && "000000" === 有缘1h8.code && 有缘1h8.resource && 有缘1h8.resource[0]) {
          const 奈可1hp = 有缘1h8.resource[0].songItems || [];
          const 铃响1ht = 再见1g6 ? 奈可1hp.find(终章1hx => String(终章1hx.songId) === String(再见1g6)) : 奈可1hp.length > 0 ? 奈可1hp[0] : null;
          铃响1ht && (再见1gc = 铃响1ht.contentId || 再见1gc, 终章1gf || (终章1gf = 铃响1ht.copyrightId || ""), KH99_0x1df815.d("咪咕方式1成功: contentId=" + 再见1gc + " copyrightId=" + 终章1gf));
        }
      }
    } catch (铃响1ih) {
      KH99_0x1df815.d("咪咕方式1失败:", 铃响1ih.message);
    }
  }
  if (!再见1gc) {
    if (!云淡1fy) {
      throw new Error("miguLocal: 无contentId且无songName");
    }
    const 再见1io = 云淡1fy + (终章1g3 ? " " + 终章1g3 : "");
    KH99_0x1df815.d("咪咕搜索:", 再见1io);
    const 再见1iu = await KH99_0x2f26ee(KH99_0x241617.miguLocal.base + "/api/search", {
      text: 再见1io,
      page: 1,
      size: 5
    }, 8000);
    if (再见1iu && 再见1iu.success && 再见1iu.data && 再见1iu.data.items) {
      const 奈可1j7 = 再见1iu.data.items;
      let 铃响1jb = null;
      再见1g6 && (铃响1jb = 奈可1j7.find(云淡1jg => 云淡1jg.song && String(云淡1jg.song.songId) === String(再见1g6)));
      !铃响1jb && 终章1gf && (铃响1jb = 奈可1j7.find(云淡1js => 云淡1js.song && 云淡1js.song.copyrightId === 终章1gf));
      !铃响1jb && 奈可1j7.length > 0 && (铃响1jb = 奈可1j7[0]);
      铃响1jb && 铃响1jb.song && (再见1gc = 铃响1jb.song.contentId || "", 终章1gf = 终章1gf || 铃响1jb.song.copyrightId || "", KH99_0x1df815.d("咪咕搜索匹配:", 铃响1jb.song.songName, "contentId=" + 再见1gc));
    }
  }
  if (!再见1gc) {
    throw new Error("miguLocal: 无法获取contentId");
  }
  const 再见1ko = KH99_0x241617.miguLocal.base + "/api/url/h5v2.4?contentId=" + 再见1gc + "&copyrightId=" + (终章1gf || "") + "&resourceType=2&toneFlag=PQ";
  const 有缘1kw = await KH99_0x2f26ee(再见1ko, {}, 8000);
  if (!(有缘1kw && 有缘1kw.success && 有缘1kw.data && 有缘1kw.data.url)) {
    throw new Error("miguLocal: 本地API未返回有效URL");
  }
  let 奈可1l7 = 有缘1kw.data.url;
  const 铃响1lb = "标清高清/MP3_128_16_Stero";
  let 奈可1ld = 铃响1lb;
  let 终章1lf = ".mp3";
  switch (有缘1fw) {
    case "320k":
      奈可1ld = "标清高清/MP3_320_16_Stero";
      终章1lf = ".mp3";
      break;
    case "flac":
      奈可1ld = "歌曲下载/flac";
      终章1lf = ".flac";
      break;
    case "flac24bit":
    case "hires":
      奈可1ld = "歌曲下载/flac_24bit";
      终章1lf = ".flac";
      break;
    default:
      奈可1ld = 铃响1lb;
      终章1lf = ".mp3";
  }
  let 有缘1m2 = decodeURIComponent(奈可1l7);
  有缘1m2 = 有缘1m2.split("?")[0];
  有缘1m2 = 有缘1m2.replace(铃响1lb, 奈可1ld);
  有缘1m2 = 有缘1m2.replace(/\.mp3$/, 终章1lf);
  奈可1l7 = encodeURI(有缘1m2);
  KH99_0x1df815.d("咪咕成功:", 有缘1fw, "(URL替换: " + 奈可1ld + ")");
  return 奈可1l7;
};
const KH99_0x1c4cc1 = async (铃响1mn, 再见1mo) => {
  const 有缘1mq = KH99_0xd6c618(铃响1mn);
  if (!有缘1mq) {
    throw new Error("no id");
  }
  KH99_0x1df815.d("溯音QQ请求:", 有缘1mq, 再见1mo);
  const 终章1mx = await KH99_0x2f26ee(KH99_0x241617.suyinQQ.base, {
    key: KH99_0x241617.suyinQQ.key,
    type: "json",
    br: {
      "128k": 7,
      "192k": 5,
      "320k": 5,
      flac: 4,
      hires: 3,
      flac24bit: 1,
      master: 1
    }[再见1mo] || 7,
    n: 1,
    mid: 有缘1mq
  });
  const 铃响1n5 = KH99_0x17f9ce(终章1mx);
  if (铃响1n5) {
    return 铃响1n5;
  }
  throw new Error("suyinQQ fail");
};
const KH99_0x4b1604 = async (云淡1na, 铃响1nb) => {
  const 奈可1nd = KH99_0xd6c618(云淡1na);
  if (!奈可1nd) {
    throw new Error("no id");
  }
  KH99_0x1df815.d("溯音网易请求:", 奈可1nd, 铃响1nb);
  const 有缘1nk = await KH99_0x2f26ee(KH99_0x241617.suyinWy.base, {
    key: KH99_0x241617.suyinWy.key,
    type: "json",
    level: {
      "128k": "standard",
      "192k": "exhigh",
      "320k": "exhigh",
      flac: "lossless",
      flac24bit: "hires",
      hires: "hires",
      master: "jymaster"
    }[铃响1nb] || "standard",
    n: 1,
    id: 奈可1nd
  });
  const 再见1o0 = KH99_0x17f9ce(有缘1nk);
  if (再见1o0) {
    return 再见1o0;
  }
  throw new Error("suyinWy fail");
};
const KH99_0x547d0d = async (铃响1o5, 再见1o6) => {
  const 有缘1o8 = 铃响1o5.songName || 铃响1o5.name || "";
  if (!有缘1o8) {
    throw new Error("no name");
  }
  KH99_0x1df815.d("溯音酷我请求:", 有缘1o8, 再见1o6);
  const 再见1oi = await KH99_0x2f26ee(KH99_0x241617.suyinKw.base, {
    key: KH99_0x241617.suyinKw.key,
    type: "json",
    br: {
      "128k": 7,
      "192k": 5,
      "320k": 5,
      flac: 1,
      flac24bit: 1,
      hires: 1
    }[再见1o6] || 7,
    n: 1,
    msg: 有缘1o8
  });
  const 有缘1oq = ("string" == typeof 再见1oi?.["message"] ? 再见1oi.message : "").match(/音乐链接[：:]\s*(\S+)/);
  if (有缘1oq && KH99_0x4cbdf5(有缘1oq[1]) && (await KH99_0x38d151(有缘1oq[1]))) {
    KH99_0x1df815.d("溯音酷我成功:", 再见1o6);
    return 有缘1oq[1];
  }
  throw new Error("suyinKw fail");
};
const KH99_0x115934 = (云淡1p4, 铃响1p5) => {
  const 奈可1p7 = 有缘1p8 => String(有缘1p8 || "").replace(/\s|'|\.|,|，|&|"|、|\(|\)|（|）|`|~|-|<|>|\||\/|\]|\[|!|！/g, "").toLowerCase();
  const 再见1pc = String(云淡1p4.singer || "").toLowerCase();
  const 云淡1pg = String(铃响1p5.artists || "").toLowerCase();
  const 有缘1pk = 奈可1p7(云淡1p4.songName || 云淡1p4.name || "");
  const 有缘1pq = 奈可1p7(铃响1p5.name || "");
  let 再见1pu = 0;
  有缘1pq === 有缘1pk ? 再见1pu += 2 : 有缘1pq && (有缘1pq.includes(有缘1pk) || 有缘1pk.includes(有缘1pq)) && (再见1pu += 1);
  再见1pc && 云淡1pg && 再见1pc.split(/、|&|;|；|\/|,|，|\|/).map(铃响1qb => 铃响1qb.trim().toLowerCase()).filter(Boolean).some(铃响1qh => 铃响1qh && 云淡1pg.includes(铃响1qh)) && (再见1pu += 1);
  return 再见1pu;
};
const KH99_0x17bf32 = async (再见1qo, 奈可1qp) => {
  const 终章1qr = 再见1qo.source;
  if ("tx" === 终章1qr) {
    const 奈可1qv = KH99_0xd6c618(再见1qo);
    if (!奈可1qv) {
      throw new Error("cyapi: no id");
    }
    KH99_0x1df815.d("cyapi QQ请求 mid:", 奈可1qv);
    const 奈可1r1 = await KH99_0x2f26ee(KH99_0x241617.cyapi.qq, {
      apikey: KH99_0x241617.cyapi.key,
      type: "json",
      mid: 奈可1qv
    });
    if (奈可1r1 && 奈可1r1.url && "string" == typeof 奈可1r1.url && 奈可1r1.url.startsWith("http")) {
      return 奈可1r1.url;
    }
    throw new Error("cyapi QQ fail: no url field");
  }
  if ("kg" === 终章1qr) {
    const 终章1rl = 再见1qo.hash || 再见1qo.FileHash || 再见1qo.fileHash || "";
    if (!终章1rl) {
      throw new Error("cyapi KG: no hash");
    }
    KH99_0x1df815.d("cyapi 酷狗请求 hash:", 终章1rl);
    const 有缘1rw = await KH99_0x2f26ee(KH99_0x241617.cyapi.kg, {
      apikey: KH99_0x241617.cyapi.key,
      id: 终章1rl,
      type: "json"
    }, 8000);
    if (有缘1rw && 200 === 有缘1rw.code && 有缘1rw.data && 有缘1rw.data.url) {
      if (!KH99_0x4cbdf5(有缘1rw.data.url)) {
        throw new Error("cyapi KG: URL无效");
      }
      KH99_0x1df815.d("cyapi 酷狗成功:", 奈可1qp, "(quality=" + (有缘1rw.data.quality || 有缘1rw.data.extName || "?") + ")");
      return 有缘1rw.data.url;
    }
    throw new Error("cyapi KG fail: code=" + (有缘1rw?.["code"] ?? "null"));
  }
  if ("wy" === 终章1qr) {
    const 奈可1sv = 再见1qo.songName || 再见1qo.name || "";
    const 再见1t0 = 再见1qo.singer || "";
    if (!奈可1sv) {
      throw new Error("cyapi WY: no songName");
    }
    const 铃响1t5 = 奈可1sv + (再见1t0 ? " " + 再见1t0 : "");
    const 终章1t9 = await KH99_0x2f26ee(KH99_0x241617.cyapi.wy, {
      apikey: KH99_0x241617.cyapi.key,
      msg: 铃响1t5,
      num: 20,
      type: "json"
    }, 8000);
    if (!终章1t9 || !Array.isArray(终章1t9.list) || 0 === 终章1t9.list.length) {
      throw new Error("cyapi WY: 搜索无结果");
    }
    let 铃响1tn = 0;
    let 再见1to = -1;
    终章1t9.list.forEach((云淡1ts, 铃响1tt) => {
      const 再见1tu = KH99_0x115934(再见1qo, 云淡1ts);
      再见1tu > 再见1to && (再见1to = 再见1tu, 铃响1tn = 铃响1tt);
    });
    const 终章1u3 = 终章1t9.list[铃响1tn];
    KH99_0x1df815.d("cyapi 网易匹配:", 终章1u3.name, "-", 终章1u3.artists, "(score=" + 再见1to + ", idx=" + 铃响1tn + "/" + 终章1t9.list.length + ")");
    const 奈可1uj = await KH99_0x2f26ee(KH99_0x241617.cyapi.wy, {
      apikey: KH99_0x241617.cyapi.key,
      msg: 铃响1t5,
      num: 20,
      type: "json",
      n: 铃响1tn + 1
    }, 12000);
    if (奈可1uj && 奈可1uj.url && "string" == typeof 奈可1uj.url && 奈可1uj.url.startsWith("http")) {
      if (!KH99_0x4cbdf5(奈可1uj.url)) {
        throw new Error("cyapi WY: URL无效");
      }
      return 奈可1uj.url;
    }
    throw new Error("cyapi WY fail: no url field");
  }
  throw new Error("cyapi: unsupported src: " + 终章1qr);
};
const KH99_0x5ad3a6 = (有缘1v8, 终章1v9) => KH99_0x17bf32(有缘1v8, 终章1v9);
const KH99_0xf2194e = async (再见1vc, 奈可1vd) => {
  const 终章1vf = KH99_0xd6c618(再见1vc);
  const 铃响1vh = 再见1vc.source;
  if (!终章1vf) {
    throw new Error("no id");
  }
  KH99_0x1df815.d("fish请求:", 铃响1vh, 终章1vf);
  const 奈可1vp = await KH99_0x2f26ee(KH99_0x241617.fish.base + "/" + 铃响1vh + "/song", {
    id: 终章1vf
  });
  const 奈可1vv = KH99_0x17f9ce(奈可1vp);
  if (奈可1vv) {
    return 奈可1vv;
  }
  throw new Error("fish fail");
};
const KH99_0x438615 = async (再见1w0, 奈可1w1) => {
  const 终章1w3 = KH99_0xd6c618(再见1w0);
  if (!终章1w3) {
    throw new Error("no id");
  }
  KH99_0x1df815.d("HYW请求:", 终章1w3);
  const 终章1w9 = await KH99_0x2f26ee(KH99_0x241617.hywmusic.base + "/api/music", {
    mid: 终章1w3
  });
  const 有缘1we = KH99_0x17f9ce(终章1w9);
  if (有缘1we) {
    return 有缘1we;
  }
  throw new Error("hyw fail");
};
const KH99_0xb8077 = async (奈可1wj, 有缘1wk) => {
  const 云淡1wm = 奈可1wj.source;
  const 奈可1wp = 奈可1wj.songName || 奈可1wj.name || "";
  const 再见1wu = 奈可1wj.singer || "";
  const 终章1wx = KH99_0xd6c618(奈可1wj);
  if (!奈可1wp && !终章1wx) {
    throw new Error("yuafeng: no songName and no id");
  }
  const 有缘1x2 = {
    wy: "wymusic",
    tx: "qqmusic",
    kw: "kwmusic",
    kg: "kgmusic",
    mg: "mgmusic"
  }[云淡1wm];
  if (!有缘1x2) {
    throw new Error("yuafeng: unsupported src: " + 云淡1wm);
  }
  const 再见1xc = {
    "128k": "低品质",
    "192k": "中品质",
    "320k": "HQ高品质",
    flac: "SQ无损",
    flac24bit: "SQ无损",
    hires: "臻品2.0",
    master: "臻品母带",
    atmos: "杜比全景声",
    atmos_plus: "杜比全景声"
  }[有缘1wk] || "HQ高品质";
  const 再见1xo = "ak_d6c2d3eef8b8d16ac34b1fc38f6bfc198d8c2e6c25f38165" || "";
  const 云淡1xs = 奈可1wp + (再见1wu ? " " + 再见1wu : "");
  KH99_0x1df815.d("冷雨请求:", 有缘1x2, 云淡1xs || 终章1wx, 有缘1wk, "->", 再见1xc);
  const 有缘1y2 = {
    apikey: 再见1xo,
    n: 1,
    type: 再见1xc
  };
  if ("tx" === 云淡1wm && 终章1wx) {
    有缘1y2.mid = String(终章1wx);
  } else {
    if ("kg" === 云淡1wm && 奈可1wj.hash) {
      有缘1y2.hash = 奈可1wj.hash;
    } else {
      if (!奈可1wp) {
        throw new Error("yuafeng: no mid/hash/msg");
      }
      有缘1y2.msg = 云淡1xs;
    }
  }
  const 云淡1ym = KH99_0x241617.yuafeng.url.replace(/\/kgmusic$/, "") + "/" + 有缘1x2;
  const 终章1yr = await KH99_0x2f26ee(云淡1ym, 有缘1y2, 8000);
  if (终章1yr && 0 === 终章1yr.code) {
    const 终章1yx = 终章1yr.data?.["music"] || 终章1yr.music || "";
    if (终章1yx && KH99_0x4cbdf5(终章1yx)) {
      KH99_0x1df815.d("冷雨成功:", 有缘1x2, 有缘1wk, "(type=" + 再见1xc + ")");
      return 终章1yx;
    }
  }
  throw new Error("yuafeng fail: code=" + (终章1yr?.["code"] ?? "null") + " msg=" + (终章1yr?.["msg"] || ""));
};
const KH99_0x4c23ac = async (再见1zi, 奈可1zj) => {
  const 终章1zl = KH99_0xd6c618(再见1zi);
  if (!终章1zl) {
    throw new Error("QQ专属: no songmid");
  }
  const 奈可1zp = 再见1zi.mediaMid || 再见1zi.strMediaMid || 再见1zi.media_mid || 再见1zi.strmediamid || "";
  const 云淡1zy = {
    "128k": "M500",
    "192k": "M800",
    "320k": "M800",
    flac: "F000",
    flac24bit: "RS01",
    hires: "RS01",
    atmos: "atmosphere",
    atmos_plus: "atmosphere",
    master: "AIM00"
  }[奈可1zj] || "M800";
  const 云淡20a = {
    M500: "mp3",
    M800: "mp3",
    F000: "flac",
    RS01: "flac",
    RS02: "flac",
    AIM00: "mflac",
    atmosphere: "flac"
  }[云淡1zy] || "mp3";
  const 有缘20k = 奈可1zp || 终章1zl;
  const 铃响20n = KH99_0x241617.qqExploit.key;
  const 有缘20q = KH99_0x241617.qqExploit.uin;
  const 铃响20t = Math.floor(10000000000 * Math.random()).toString();
  const 终章20x = "qm_keyst=" + 铃响20n + "; uin=o" + 有缘20q + "; pgv_pvid=" + 铃响20t + "; qqmusic_key=" + 铃响20n + "; qqmusic_uin=o" + 有缘20q + "; psrf_qqaccess_token=" + 铃响20n + "; ts_uid=" + 铃响20t + "; psi=" + 铃响20t;
  const 有缘21e = "" + 云淡1zy + 有缘20k + "." + 云淡20a;
  const 再见21i = {
    comm: {
      ct: 19,
      cv: 0,
      guid: 铃响20t,
      tmeAppID: "qqmusic",
      qq: 有缘20q
    },
    hot: {
      method: "CgiGetHotVkey",
      module: "music.vkey.GetEVkey",
      param: {
        filename: [有缘21e],
        songmid: [终章1zl]
      }
    },
    ekey: {
      method: "GetEkey",
      module: "music.vkey.GetEVkey",
      param: {
        finfo: [{
          filename: 有缘21e,
          mid: 有缘20k || "0"
        }]
      }
    }
  };
  try {
    KH99_0x1df815.d("QQ专属(ut)请求:", 终章1zl, 云淡1zy, 有缘21e);
    const 云淡21y = await KH99_0x27ff5c("https://ut.y.qq.com/cgi-bin/musicu.fcg", {
      method: "POST",
      timeout: KH99_0x849c2a,
      headers: {
        "Content-Type": "application/json",
        Referer: "https://y.qq.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Cookie: 终章20x
      },
      body: JSON.stringify(再见21i)
    });
    if (KH99_0x2d1c7c(云淡21y)) {
      const 有缘228 = "string" == typeof 云淡21y.body ? JSON.parse(云淡21y.body) : 云淡21y.body;
      const 铃响22h = 有缘228?.["hot"]?.["data"]?.["urls"] || [];
      if (铃响22h.length > 0 && 铃响22h[0].purl) {
        const 有缘22q = "https://dl.stream.qqmusic.qq.com/";
        KH99_0x1df815.d("QQ专属(ut)成功:", 云淡1zy, "purl=" + 铃响22h[0].purl.substring(0, 60));
        return "" + 有缘22q + 铃响22h[0].purl;
      }
      KH99_0x1df815.d("QQ专属(ut)无purl:", JSON.stringify(有缘228?.["hot"]?.["data"] || {}).substring(0, 100));
    }
  } catch (奈可237) {
    KH99_0x1df815.d("QQ专属(ut)失败:", 奈可237.message);
  }
  const 铃响23b = [{
    name: "双songmid+专属uin",
    filename: "" + 云淡1zy + 终章1zl + 终章1zl + "." + 云淡20a,
    uin: 有缘20q,
    loginflag: 1
  }, {
    name: "单songmid+专属uin",
    filename: "" + 云淡1zy + 终章1zl + "." + 云淡20a,
    uin: 有缘20q,
    loginflag: 1
  }, {
    name: "双songmid+空uin",
    filename: "" + 云淡1zy + 终章1zl + 终章1zl + "." + 云淡20a,
    uin: "",
    loginflag: 1
  }, {
    name: "单songmid+空uin",
    filename: "" + 云淡1zy + 终章1zl + "." + 云淡20a,
    uin: "",
    loginflag: 1
  }];
  for (const 有缘23w of 铃响23b) try {
    const 云淡23y = {
      filename: [有缘23w.filename],
      songmid: [终章1zl],
      songtype: [0],
      uin: 有缘23w.uin,
      loginflag: 有缘23w.loginflag,
      platform: "23",
      firstlogin: 1,
      newver: 1,
      nohash: 0,
      cms: 0
    };
    const 再见246 = JSON.stringify({
      comm: {
        uin: 有缘23w.uin ? parseInt(有缘23w.uin) : 0,
        format: "json",
        ct: 23,
        cv: 0,
        ...(有缘23w.uin ? {
          qq: 有缘23w.uin
        } : {})
      },
      req_0: {
        module: "vkey.GetVkeyServer",
        method: "CgiGetVkey",
        param: 云淡23y
      }
    });
    const 有缘24k = "https://u.y.qq.com/cgi-bin/musicu.fcg?format=json&data=" + encodeURIComponent(再见246);
    KH99_0x1df815.d("QQ专属(u,p23)请求:", 有缘23w.name, 终章1zl, 云淡1zy);
    const 云淡24s = await KH99_0x27ff5c(有缘24k, {
      method: "GET",
      timeout: KH99_0x849c2a,
      headers: {
        Referer: "https://y.qq.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Cookie: 终章20x
      }
    });
    if (KH99_0x2d1c7c(云淡24s)) {
      const 铃响24z = "string" == typeof 云淡24s.body ? JSON.parse(云淡24s.body) : 云淡24s.body;
      const 有缘258 = 铃响24z?.["req_0"]?.["data"]?.["midurlinfo"]?.[0];
      if (0 === 铃响24z?.["code"] && 有缘258?.["purl"]) {
        const 铃响25h = 铃响24z.req_0?.["data"]?.["sip"]?.[0] || "https://dl.stream.qqmusic.qq.com/";
        KH99_0x1df815.d("QQ专属(u,p23)成功:", 有缘23w.name, 云淡1zy);
        return "" + 铃响25h + 有缘258.purl;
      }
    }
  } catch (再见25u) {
    KH99_0x1df815.d("QQ专属(u,p23) " + 有缘23w.name + "失败:", 再见25u.message);
  }
  const 奈可261 = {
    comm: {
      ct: 19,
      cv: 0,
      guid: 铃响20t,
      tmeAppID: "qqmusic",
      qq: 有缘20q
    },
    hot: {
      method: "CgiGetHotVkey",
      module: "music.vkey.GetEVkey",
      param: {
        filename: [有缘21e],
        songmid: [终章1zl]
      }
    }
  };
  try {
    KH99_0x1df815.d("QQ专属(ut+key)请求:", 终章1zl, 云淡1zy);
    const 再见26c = await KH99_0x27ff5c("https://ut.y.qq.com/cgi-bin/musicu.fcg", {
      method: "POST",
      timeout: KH99_0x849c2a,
      headers: {
        "Content-Type": "application/json",
        Referer: "https://y.qq.com/",
        "User-Agent": "Mozilla/5.0 QQMusic/2201",
        Cookie: 终章20x
      },
      body: JSON.stringify(奈可261)
    });
    if (KH99_0x2d1c7c(再见26c)) {
      const 云淡26m = "string" == typeof 再见26c.body ? JSON.parse(再见26c.body) : 再见26c.body;
      const 奈可26v = 云淡26m?.["hot"]?.["data"]?.["urls"] || [];
      if (奈可26v.length > 0 && 奈可26v[0].purl) {
        const 云淡274 = "https://dl.stream.qqmusic.qq.com/";
        KH99_0x1df815.d("QQ专属(ut+key)成功:", 云淡1zy);
        return "" + 云淡274 + 奈可26v[0].purl;
      }
    }
  } catch (铃响27b) {
    KH99_0x1df815.d("QQ专属(ut+key)失败:", 铃响27b.message);
  }
  throw new Error("QQ专属全部失败: " + KH99_0x3486ec(终章1zl) + " " + 云淡1zy);
};
const KH99_0x5de1c0 = {
  tx: [[{
    name: "ygkingQQ",
    fn: KH99_0x3ce087
  }], [{
    name: "QQ专属",
    fn: KH99_0x4c23ac
  }], [{
    name: "cyapi QQ",
    fn: KH99_0x17bf32
  }, {
    name: "溯音QQ",
    fn: KH99_0x1c4cc1
  }, {
    name: "FFAPI",
    fn: KH99_0x28c14f
  }], [{
    name: "妖狐QQ",
    fn: KH99_0x579292
  }], [{
    name: "本地QQ(3035)",
    fn: KH99_0x37b286
  }, {
    name: "HYW",
    fn: KH99_0x438615
  }, {
    name: "fish",
    fn: KH99_0xf2194e
  }]],
  wy: [[{
    name: "念心WY",
    fn: KH99_0x325c43
  }, {
    name: "本地网易(3036+cookie)",
    fn: KH99_0x249433
  }, {
    name: "星海网易",
    fn: KH99_0x10e793
  }, {
    name: "bugpk",
    fn: KH99_0x1e0d8d
  }, {
    name: "cyapi 网易",
    fn: KH99_0x17bf32
  }], [{
    name: "妖狐WY",
    fn: KH99_0x579292
  }, {
    name: "溯音网易",
    fn: KH99_0x4b1604
  }, {
    name: "FFAPI",
    fn: KH99_0x28c14f
  }], [{
    name: "HYW",
    fn: KH99_0x438615
  }, {
    name: "fish",
    fn: KH99_0xf2194e
  }]],
  kw: [[{
    name: "yunmge酷我",
    fn: KH99_0x34b349
  }, {
    name: "妖狐酷我",
    fn: KH99_0x13e362
  }, {
    name: "酷我官方anti",
    fn: KH99_0x483715
  }, {
    name: "星海酷我",
    fn: KH99_0x2bcea4
  }, {
    name: "溯音酷我",
    fn: KH99_0x547d0d
  }], [{
    name: "FFAPI",
    fn: KH99_0x28c14f
  }], [{
    name: "fish",
    fn: KH99_0xf2194e
  }]],
  kg: [[{
    name: "cyapi 酷狗",
    fn: KH99_0x5ad3a6
  }, {
    name: "星海酷狗",
    fn: KH99_0x35ac09
  }, {
    name: "念心酷狗",
    fn: KH99_0x57d357
  }, {
    name: "妖狐酷狗",
    fn: KH99_0x14514a
  }], [{
    name: "yuafeng酷狗",
    fn: KH99_0x42cdf5
  }, {
    name: "FFAPI",
    fn: KH99_0x28c14f
  }], [{
    name: "fish",
    fn: KH99_0xf2194e
  }]],
  mg: [[{
    name: "星海咪咕",
    fn: KH99_0x44105f
  }, {
    name: "咪咕本地(3037)",
    fn: KH99_0x401a31
  }], [{
    name: "妖狐咪咕",
    fn: KH99_0x51f0ba
  }, {
    name: "FFAPI",
    fn: KH99_0x28c14f
  }, {
    name: "fish",
    fn: KH99_0xf2194e
  }]]
};
const KH99_0x10856c = async (再见27i, 奈可27j, 有缘27k) => 再见27i && 0 !== 再见27i.length ? new Promise(铃响27n => {
  let 奈可27p = 再见27i.length;
  let 云淡27s = false;
  再见27i.forEach(async 奈可27v => {
    try {
      const 终章27x = await 奈可27v.fn(奈可27j, 有缘27k);
      if (终章27x && KH99_0x4cbdf5(终章27x)) {
        return void (云淡27s || (云淡27s = true, 铃响27n({
          url: 终章27x,
          name: 奈可27v.name
        })));
      }
    } catch (终章289) {
      KH99_0x1df815.d("[竞速] " + 奈可27v.name + " 失败:", 终章289.message);
    }
    奈可27p--;
    0 !== 奈可27p || 云淡27s || (云淡27s = true, 铃响27n(null));
  });
}) : null;
const KH99_0x256e6c = async (终章28l, 云淡28m, 铃响28n) => {
  KH99_0x1df815.t("i", "=== 获取URL开始 v1.7.1 ===");
  KH99_0x1df815.t("i", "平台:", KH99_0x1df818[终章28l] || 终章28l, "| 请求音质:", 铃响28n, "| 歌曲ID:", KH99_0xd6c618(云淡28m));
  const 终章28x = KH99_0x13a61b[终章28l];
  if (终章28x && KH99_0x1df815.t("i", "平台支持音质:", 终章28x.supported.join("/"), "(" + 终章28x.note + ")"), !KH99_0x4f3f69.includes(终章28l)) {
    throw KH99_0x1df815.t("e", "不支持的平台:", 终章28l), new Error("不支持的平台: " + 终章28l);
  }
  const 再见29c = KH99_0x5376f6[铃响28n] || [铃响28n];
  KH99_0x1df815.t("i", "音质降级链:", 再见29c.join(" -> "));
  const 奈可29j = KH99_0x5de1c0[终章28l];
  if (!奈可29j || 0 === 奈可29j.length) {
    throw new Error("未配置API组: " + 终章28l);
  }
  if ("mg" === 终章28l) {
    KH99_0x1df815.t("i", "咪咕快速模式: 不逐层降级，直接尝试+PQ兜底");
    for (let 云淡29s = 0; 云淡29s < 奈可29j.length; 云淡29s++) {
      const 终章29x = 奈可29j[云淡29s];
      KH99_0x1df815.t("i", "[音质" + 铃响28n + "] 组" + (云淡29s + 1) + "/" + 奈可29j.length + " 并行尝试 " + 终章29x.length + " 个API: " + 终章29x.map(再见2ac => 再见2ac.name).join(", "));
      const 云淡2ag = await KH99_0x10856c(终章29x, 云淡28m, 铃响28n);
      if (云淡2ag && 云淡2ag.url) {
        KH99_0x1df815.t("i", "✓ 成功! 来源:" + 云淡2ag.name + " -> " + 云淡2ag.url.substring(0, 80) + "...");
        return 云淡2ag.url;
      }
      KH99_0x1df815.t("w", "[音质" + 铃响28n + "] 组" + (云淡29s + 1) + " 全部失败");
    }
    throw KH99_0x1df815.t("e", "=== 咪咕所有API均失败 ==="), new Error("咪咕所有API均失败 (v1.7.1 快速模式)");
  }
  for (let 云淡2b4 = 0; 云淡2b4 < 再见29c.length; 云淡2b4++) {
    const 终章2b9 = 再见29c[云淡2b4];
    const 再见2bc = 云淡2b4 === 再见29c.length - 1;
    云淡2b4 > 0 && KH99_0x1df815.t("w", "音质 " + 再见29c[云淡2b4 - 1] + " 全部失败，降级到 " + 终章2b9);
    for (let 云淡2bm = 0; 云淡2bm < 奈可29j.length; 云淡2bm++) {
      const 终章2br = 奈可29j[云淡2bm];
      if (云淡2bm === 奈可29j.length - 1 && !再见2bc && 云淡2b4 > 0) {
        continue;
      }
      KH99_0x1df815.t("i", "[音质" + 终章2b9 + "] 组" + (云淡2bm + 1) + "/" + 奈可29j.length + " 并行尝试 " + 终章2br.length + " 个API: " + 终章2br.map(铃响2cb => 铃响2cb.name).join(", "));
      const 终章2cf = await KH99_0x10856c(终章2br, 云淡28m, 终章2b9);
      if (终章2cf && 终章2cf.url) {
        KH99_0x1df815.t("i", "✓ 成功! 音质:" + 终章2b9 + " 来源:" + 终章2cf.name + " -> " + 终章2cf.url.substring(0, 80) + "...");
        终章2b9 !== 铃响28n && KH99_0x1df815.t("w", "⚠ 用户请求 " + 铃响28n + "，已降级到 " + 终章2b9);
        return 终章2cf.url;
      }
      KH99_0x1df815.t("w", "[音质" + 终章2b9 + "] 组" + (云淡2bm + 1) + " 全部失败");
    }
  }
  throw KH99_0x1df815.t("e", "=== 所有API + 所有音质档 均失败 ==="), new Error("所有API均失败 (v1.7.1 已尝试音质降级)");
};
const KH99_0x89ac0e = async (铃响2db, 再见2dc) => {
  const 有缘2de = KH99_0xd6c618(再见2dc);
  if (!有缘2de) {
    KH99_0x1df815.w("歌词: 无歌曲ID");
    return {
      lyric: "",
      tlyric: "",
      rlyric: "",
      lxlyric: ""
    };
  }
  KH99_0x1df815.t("i", "获取歌词:", KH99_0x1df818[铃响2db] || 铃响2db, 有缘2de);
  try {
    if ("wy" === 铃响2db) {
      const 铃响2dn = await KH99_0x2f26ee(KH99_0x241617.localWy.base + "/lyric", {
        id: 有缘2de,
        cookie: KH99_0x241617.neteaseCookie
      });
      if (铃响2dn && (200 === 铃响2dn.status || 200 === 铃响2dn.code) && 铃响2dn.data) {
        KH99_0x1df815.t("i", "歌词获取成功(网易)");
        return {
          lyric: 铃响2dn.data.lrc?.["lyric"] || "",
          tlyric: 铃响2dn.data.tlyric?.["lyric"] || "",
          rlyric: 铃响2dn.data.romalrc?.["lyric"] || "",
          lxlyric: ""
        };
      }
    } else {
      if ("tx" === 铃响2db) {
        const 有缘2ee = await KH99_0x2f26ee(KH99_0x241617.localQQ.base + "/song/lyric", {
          mid: 有缘2de,
          decode: 1
        });
        if (有缘2ee && 0 === 有缘2ee.code && 有缘2ee.data) {
          KH99_0x1df815.t("i", "歌词获取成功(QQ)");
          return {
            lyric: 有缘2ee.data.lyric || "",
            tlyric: 有缘2ee.data.trans || "",
            rlyric: 有缘2ee.data.roma || "",
            lxlyric: ""
          };
        }
      }
    }
  } catch (云淡2ey) {
    KH99_0x1df815.t("e", "歌词获取失败:", 云淡2ey.message);
  }
  KH99_0x1df815.w("歌词: 无结果");
  return {
    lyric: "",
    tlyric: "",
    rlyric: "",
    lxlyric: ""
  };
};
const KH99_0x39ff67 = async (终章2f3, 云淡2f4) => {
  const 再见2f6 = KH99_0xd6c618(云淡2f4);
  if (!再见2f6) {
    KH99_0x1df815.w("封面: 无歌曲ID");
    return "";
  }
  KH99_0x1df815.t("i", "获取封面:", KH99_0x1df818[终章2f3] || 终章2f3, 再见2f6);
  try {
    if ("wy" === 终章2f3) {
      const 终章2ff = await KH99_0x2f26ee(KH99_0x241617.localWy.base + "/song/detail", {
        ids: 再见2f6,
        cookie: KH99_0x241617.neteaseCookie
      });
      if (终章2ff && (200 === 终章2ff.status || 200 === 终章2ff.code) && 终章2ff.data && 终章2ff.data.pic) {
        KH99_0x1df815.t("i", "封面获取成功(网易)");
        return 终章2ff.data.pic;
      }
    } else {
      if ("tx" === 终章2f3) {
        const 再见2g0 = await KH99_0x2f26ee(KH99_0x241617.localQQ.base + "/song/detail", {
          mids: 再见2f6
        });
        if (再见2g0 && 0 === 再见2g0.code && 再见2g0.data && 再见2g0.data.length > 0) {
          const 奈可2gd = 再见2g0.data[0].album?.["cover"] || "";
          奈可2gd && KH99_0x1df815.t("i", "封面获取成功(QQ)");
          return 奈可2gd;
        }
      }
    }
  } catch (终章2gl) {
    KH99_0x1df815.t("e", "封面获取失败:", 终章2gl.message);
  }
  KH99_0x1df815.w("封面: 无结果");
  return "";
};
const KH99_0x2426e2 = (有缘2gq, 终章2gr, 云淡2gs, 铃响2gt) => {
  if (!globalThis.__KH_PROXY__) {
    try {
      let 有缘2gw = "";
      let 终章2gx = "";
      try {
        const 云淡2gy = 铃响2gt && 铃响2gt.musicInfo || {};
        有缘2gw = String(云淡2gy.songmid || 云淡2gy.hash || 云淡2gy.copyrightId || 云淡2gy.id || "").slice(0, 64);
        终章2gx = String(云淡2gy.songName || 云淡2gy.name || "").slice(0, 80);
      } catch (铃响2hh) {}
      KH99_0x5d2dfd("http://hywmusicsource.xn--9tra.work/api/source/stats/ping?p=" + encodeURIComponent(String(终章2gr || "")) + "&t=" + encodeURIComponent(String(云淡2gs || "")) + "&ok=" + (有缘2gq ? "1" : "0") + "&id=" + encodeURIComponent(有缘2gw) + "&n=" + encodeURIComponent(终章2gx) + "&v=full", {
        method: "GET",
        timeout: 8000
      }, () => {});
    } catch (再见2hu) {}
  }
};
KH99_0x5960ac(KH99_0x39563d.request, ({
  source: 奈可2hv,
  action: 有缘2hw,
  info: 终章2hx
}) => {
  switch (KH99_0x1df815.t("d", "事件:", 有缘2hw, KH99_0x1df818[奈可2hv] || 奈可2hv), 有缘2hw) {
    case "musicUrl":
      return KH99_0x256e6c(奈可2hv, 终章2hx.musicInfo, 终章2hx.type).then(铃响2ib => (KH99_0x1df815.t("i", "musicUrl 返回成功"), KH99_0x2426e2(1, 奈可2hv, 终章2hx.type, 终章2hx), 铃响2ib)).catch(奈可2ij => {
        throw KH99_0x1df815.t("e", "musicUrl 返回失败:", 奈可2ij.message), KH99_0x2426e2(0, 奈可2hv, 终章2hx.type, 终章2hx), 奈可2ij;
      });
    case "lyric":
      return KH99_0x89ac0e(奈可2hv, 终章2hx.musicInfo);
    case "pic":
      return KH99_0x39ff67(奈可2hv, 终章2hx.musicInfo);
    default:
      KH99_0x1df815.w("未知事件:", 有缘2hw);
      return Promise.reject(new Error("未知事件: " + 有缘2hw));
  }
});
KH99_0x1ad6fa(KH99_0x39563d.inited, {
  openDevTools: false,
  meta: {
    name: KH99_0x52bd3a,
    desc: KH99_0x4d75f6,
    version: KH99_0x7066d5,
    author: "HYW & Koneko",
    downloadType: KH99_0x1ac47c,
    homepage: "https://github.com/Miao-moe"
  },
  sources: {
    wy: {
      name: "网易云音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: [["128k", "320k", "flac", "hires", "master"]],
      meta: {
        downloadType: "test",
        desc: KH99_0x4d75f6
      }
    },
    tx: {
      name: "QQ音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: [["128k", "320k", "flac", "hires", "master", "atmos", "atmos_plus"]],
      meta: {
        downloadType: "test",
        desc: KH99_0x4d75f6
      }
    },
    kw: {
      name: "酷我音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: [["128k", "320k", "flac", "hires"]],
      meta: {
        downloadType: "test",
        desc: KH99_0x4d75f6,
        primary: "yunmge"
      }
    },
    kg: {
      name: "酷狗音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: [["128k", "320k", "flac"]],
      meta: {
        downloadType: "test",
        desc: KH99_0x4d75f6
      }
    },
    mg: {
      name: "咪咕音乐",
      type: "music",
      actions: ["musicUrl"],
      qualitys: [["128k", "320k", "flac"]],
      meta: {
        downloadType: "test",
        desc: KH99_0x4d75f6
      }
    }
  }
});
const KH99_0x478167 = "=AFVx4mVuRmVWZkShZ1aalWZqZkVW5GaOFGbklUYE50Vh5mU0Z1ModnYGp0VhdUNWVmVsdkVxYFNSFDcQRFbalmTHhncW5mTv1EbG90UtB3UWhVQ4VlaStWTWpFWjRkQqdFbZhXWzgmWiZkWYFFbSplUxkUeZZFZPJ1RGpkWHhXakNjUyZlbSdnUWR2VjdUMTZVMKhVVrR3ciZkW6FGRKhWYWBncWtGcLJmVKhmYHFjVj5mQXZFbkdlUWB3bXpmRo10Vjl3VVh2VSZkWxd1aapWZuJ0cW1GdPJmRsp3YHh3UUxmWzZlbONlUtp0MT1WNXVmRrhXVtx2ahFjSSNmRaNVWVlVeWVFaLJVbSh2VrpVYXZ0b4lFVCZXTxYFMS5GcXZVRwZzVq5UYidkSIJVbxY1VGBncWxWV4JlMOhVTXR3UkBTNZZ1MKNXZsJ1TX1GdXNVRwdUWs50aiZEbJNVb4dlVWB3RZxmQLJWRxw0UsJlWS12Z5ZFbkd3VGlleiRkRo1UVWh1VYhmUSBTNWZ1aaFmVFB3VUVFdrJmRaFTUtVDVVNDaIdFbkdlVtlEMT1GeXRGMFpXVs9GeiZlSy00V0NVWXdneXVFZ3JmRkd1YHVzVNZkWzZVb0dkYWpVeS1GcqVlaGhUWxg2UiVFM3ZVb4hlVwA3RU1GbhJFbvpnWGpVaORkVyZVRotUTX5EWOdVMXFmRwNnVu1UNNZkWwU1aohlVxo1cWFDazJ2RKJHVth3VjBjSJVVMKdnYWJFeadEeoJlModkVqlVMNZkSYFFbS50VVRTeVpmRWJmRapXUq5kaXxGcHllMotkYWpkcW5GcXR2RolVWWZ1dTdkS1cVb4lWYxAnVXhlSHVWbKhFZHFzViJjUzVlbk9kYsRGWjRkRodlRwZ0Vqp1VS1mSyNmRadVZtRGSVFDcHVWbGRTTHR3UX1mU1ZFMo9WTxo1ckRkSo1kM4dFVXB3RhxmV14URWVlVIJFdWNjQHZFMxMjWEZ0VW5WQ4p1RstWYxoUUUpmSTVWRxc1VsNWNSJjVhFGRGpVTVxGdW5mT31UMsh0YFpFWhZEcyV1MsFmYGpkdkdUMaJ1MCZUWXZUYhFjWaZVbxkWYycGeWx2Y4J1VWB3VspVVOZlWzlVV09kVsBHSlRkSTdFSShUWrh3RiVVMQdlaGdFZHhWWWtWNXJ1VKlVVrpFWhBTNWZlRkdnYHZVcaVkVsZ1aahEVXZ0VWZFZ2ElVopVYXJlcVFDbLZVbKRTWyg3Vl1mTYplVwRjVxEFMT1GeORlMnhnVuJ1bNFjWZ1UVkx2VsB3cZx2Y1ImVsl1YFZFWiZkWGdlbG9kVspFaUxGaYZVb4ZjVFVTYiZ0YwoFRGhmVxo0VWFDZDJWbOhlVrpFaUVEcYVlboNjVWxWSS5GcXFWMaJXVxAXYS1mSQVVbwZVZUJlcU1GbrJ1VWl1UtFDbjJzZ4ZFbs9mYWp1TadEeWdFbZlXVuhmbNZFbHF1aotmVWB3cWVEeLJlMKhmUsJlWTVkW2k1VodVYx40VVtmWYF2MShlVGhWYSZFZvVVb0R1VFB3cURlUhJmRkh1YEZ0ahZFczZlbatUTXZkciZEZYdVVwZlVxMWMiZlTV1UVWlWVyI1VWhlUDNlRk9UTVR2al1Gezl1a5ATYxwGSjVkWOFmVaJnVrlzRiZlSzclaCd1YxkUeWZFZDZVRxolWFpVaVJDaXd1aadkUGRmVX1GeVNlRahVWrB3RhxGZHNmRah2VtJ1RaVFbhJ2RKpnTWRWVjNjQHZFM5smVrFDWXtmWTJVMwdkVsh2VWVVNwdVb4hlTFVzRZxGZvJVMaRTUU50VWNjQ1ZFWvhXYxoVYaVEaXR2RnpnVs50QSdkTJZVb45EZzIFdWZFahJ2RWRFZFRWYjZkSIRFWkdlYspVMhdUMpRlboRXVxY1RNdlRU50V0VlUqxGSaZFZ3JmVKh3UtFzUWJTU4ZlRWdXTHZUYadEeWJlM4dVWtlzahFjWzI1VwpmV6ZFSZFDZP10axQkWGpFWXdEaZdVV1smVWp0MZJDeoJlMoh1VYRmVh1mTZF2R4VVTwA3VZtGZzZFbSdVVrRWaWNjQ1VFbkdlYHpEUkdUMWN2MCNnVxo1diZlT2VlaGhWWVpVdW5mVTJmVK9UZGRGVOZEcXZVbGtmVsB3VlRkSqZlaGRXVup1SW1mSQ9EVKZ1YYF0dWZlUDZVR0k3VVpFWVpHb0dFWONlVxQGWkdUMXNWV1MXVuR2aSZlWWdVb0xWYWB3cWpnVLJVbKRlWHh3VOxGcGZVMWFmYGZlNXtmWpdVbol1VYxmbNFjWzpVRWt2VGp0VWpmR6ZVMsRjTHRHWWhEa0Z1MCNlVwEzMadEeXJlbCd1VVVTYiZkTaVVbxMVYwo0VWtmVhFmMOhVTXFzUTZkWIlFbkNXTxw2RjRkRXdlRwJXVzwWYNdlR6R2RxcFZIJkRVJDdrJ1VSh2VqZkTRFDcWZVMkdnUrFDcXtmWhdFbJhXWXNXMSZFcwEmRktmV6ZFdWZUU4J1VKhVYGpVYSFjSIZFM5ATTtlUMW1GeoV1MSR3VVR2dWtWNVpVRax2VHFFeV1WOrJmRapUYHFzUVBjSFRFVSdnVrFDaW1GeXN2MCZUVxAHNiZlWFNlaGNFVtJVWW5mUv1UMaZ1YFhWaWFDcHVlM5E2VGJFWjRkRpdFSSRnVth2ciZkWopVRad1VWlUeWdEb0ImVkpkVrR2UTJjUHZlbW9mUyI1VjdUNS10avlXVsR2bhFDZJF2R1cVYxo1cWBDZ3JmRaNjWHRnVTRkVWZVMSBjYWR2dV1WMO1kMoVnVuZ1dNdkUY10VxMVYGB3RZ1WR1EWMaRTUU5kaWpmRIpFSkZkVwEDajdUNXN2MCdlVR1TP";
const KH99_0x2ba412 = (再见2j6, 奈可2j7) => {
  let 终章2j9 = 再见2j6;
  for (let 铃响2jb = 0; 铃响2jb < 奈可2j7; 铃响2jb++) {
    try {
      终章2j9 = Buffer.from(终章2j9.split("").reverse().join(""), "base64").toString("utf8");
    } catch (再见2jo) {
      return 终章2j9;
    }
  }
  return 终章2j9;
};
try {
  KH99_0x1df815.t("i", "[彩蛋] " + KH99_0x2ba412(KH99_0x478167, 14));
} catch (KH99_0x443f7b) {}
KH99_0x1df815.t("i", "========================================");
KH99_0x1df815.t("i", KH99_0x52bd3a + " v" + KH99_0x7066d5 + " 初始化完成");
KH99_0x1df815.t("i", "描述: " + KH99_0x4d75f6);
KH99_0x1df815.t("i", "下载方式: " + KH99_0x1ac47c);
KH99_0x1df815.t("i", "支持平台: 网易云/QQ/酷我/酷狗/咪咕");
KH99_0x1df815.t("i", "支持音质: 128k/192k/320k/flac/flac24bit/hires/atmos/atmos_plus/master");
KH99_0x1df815.t("i", "v3.0·终章: 最终版·超稳定。酷我毒源修复/云梦新接口/直链存活校验/yuafeng酷狗(仅KG) 就绪");
KH99_0x1df815.t("i", "曲终云淡去，铃响奈可来 —— 感谢一个多月的陪伴，我们有缘小奈可见。");
KH99_0x1df815.t("i", "【酷狗】yuafeng apikey 已配置 (酷狗端点余额不足时自动跳过，充值后即生效)");
KH99_0x1df815.t("i", "咪咕支持音质: 128k(PQ)/320k(HQ)/flac(SQ)");
KH99_0x1df815.t("i", "========================================");