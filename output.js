//Sun Feb 01 2026 01:17:29 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var $axios = require("axios");
var $cheerio = require("cheerio");
var $crypto = require("crypto-js");
function $parcel$interopDefault(_0x3e39f0) {
  return _0x3e39f0 && _0x3e39f0.__esModule ? _0x3e39f0.default : _0x3e39f0;
}
function $parcel$defineInteropFlag(_0x5a0a2a) {
  Object.defineProperty(_0x5a0a2a, "__esModule", {
    value: true,
    configurable: true
  });
}
function $parcel$export(_0x534d1d, _0x262dd6, _0xce5ea0, _0x1fb3db) {
  Object.defineProperty(_0x534d1d, _0x262dd6, {
    get: _0xce5ea0,
    set: _0x1fb3db,
    enumerable: true,
    configurable: true
  });
}
$parcel$defineInteropFlag(module.exports);
$parcel$export(module.exports, "default", () => $carbonate$export$2e2bcd8739ae039);
$parcel$export(module.exports, "shareConfig", () => $carbonate$export$shareConfig);
const $config = {
  defaultArtwork: "https://image2url.com/r2/default/images/1769893422101-4d366c45-fff3-4d80-bda4-51f35e387798.jpg",
  appName: "碳酸氢钠",
  version: "1.35",
  author: "葡萄球君",
  shareUrl: "https://gitee.com/nainoz_naa/music/raw/master/carbonate.js",
  mainFile: "carbonate.js",
  srcUrl: "https://gitee.com/nainoz_naa/music/raw/master/carbonate.js",
  sourcePriority: {
    netease: 5,
    "5sing": 4,
    "2t58": 3,
    htqyy: 2,
    zz123: 1
  }
};
function $helper$cleanTitle(_0x2f138b) {
  if (!_0x2f138b) {
    return "";
  }
  return _0x2f138b.replace(/\s*\.mp3$/i, "").replace(/\s*\.flac$/i, "").replace(/\s*\.wav$/i, "").replace(/\s*\.aac$/i, "").replace(/\s*\.m4a$/i, "").replace(/\s*\(mp3\)/gi, "").replace(/\s*\[mp3\]/gi, "").replace(/\s*\(LRC\)/gi, "").replace(/\s*\[LRC\]/gi, "").replace(/\s*\(无损\)/gi, "").replace(/\s*\[无损\]/gi, "").replace(/\s*\(高品质\)/gi, "").replace(/\s*\[高品质\]/gi, "").replace(/\s*\(高清\)/gi, "").replace(/\s*\[高清\]/gi, "").replace(/\s*\(正式版\)/gi, "").replace(/\s*\[正式版\]/gi, "").replace(/\s*\(原版\)/gi, "").replace(/\s*\[原版\]/gi, "").replace(/\s+/g, " ").trim();
}
function $helper$cleanWebInfo(_0xa8abb3) {
  if (!_0xa8abb3) {
    return "";
  }
  return _0xa8abb3.replace(/www\.\S+\.com/g, "").replace(/欢迎来访/g, "").replace(/爱听音乐网/g, "").replace(/44h4/g, "****").replace(/2t58/g, "****").replace(/好听轻音乐/g, "").replace(/htqyy/g, "").replace(/种子音乐/g, "").replace(/zz123/g, "").replace(/网易云音乐/g, "").replace(/netease/g, "").replace(/5sing/g, "").replace(/kugou/g, "").trim();
}
function $helper$extractIdFromUrl(_0x144035, _0x30d48e) {
  const _0x346c50 = _0x144035 ? _0x144035.match(_0x30d48e) : null;
  return _0x346c50 ? _0x346c50[1] : "";
}
function $helper$parseDuration(_0x578610) {
  try {
    const _0x16ed57 = _0x578610.split(":");
    if (_0x16ed57.length === 2) {
      const [_0x4e23b3, _0x47aa99] = _0x16ed57.map(Number);
      return _0x4e23b3 * 60 + _0x47aa99;
    } else {
      if (_0x16ed57.length === 3) {
        const [_0x8ea5af, _0x10b59f, _0x398616] = _0x16ed57.map(Number);
        return _0x8ea5af * 3600 + _0x10b59f * 60 + _0x398616;
      }
    }
  } catch (_0x52963b) {}
  return 0;
}
function $helper$formatDuration(_0x718a91) {
  if (!_0x718a91) {
    return "00:00";
  }
  const _0x2d92df = Math.floor(_0x718a91 / 60);
  const _0x48095c = Math.floor(_0x718a91 % 60);
  return _0x2d92df.toString().padStart(2, "0") + ":" + _0x48095c.toString().padStart(2, "0");
}
function $helper$formatMusicItem(_0x702c57, _0x4e4d44) {
  const _0x105148 = $helper$cleanTitle($helper$cleanWebInfo(_0x702c57.title || ""));
  const _0xd35bc8 = $helper$cleanWebInfo(_0x702c57.artist || "");
  const _0x1373c2 = $helper$cleanWebInfo(_0x702c57.album || "");
  let _0x1be54d = _0x702c57.artwork || $config.defaultArtwork;
  if (_0x1be54d && !_0x1be54d.startsWith("http") && !_0x1be54d.startsWith("//") && _0x1be54d !== $config.defaultArtwork) {
    if (_0x4e4d44 === "2t58") {
      _0x1be54d = "http://www.2t58.com" + _0x1be54d;
    } else {
      if (_0x4e4d44 === "htqyy") {
        _0x1be54d = "http://www.htqyy.com" + _0x1be54d;
      } else {
        _0x4e4d44 === "5sing" && (_0x1be54d = "http:" + _0x1be54d);
      }
    }
  }
  (!_0x1be54d || _0x1be54d.trim() === "") && (_0x1be54d = $config.defaultArtwork);
  const _0x4c2c96 = {
    id: _0x702c57.id || "",
    title: _0x105148,
    artist: _0xd35bc8,
    album: _0x1373c2,
    duration: _0x702c57.duration || 0,
    durationStr: $helper$formatDuration(_0x702c57.duration || 0),
    artwork: _0x1be54d,
    url: _0x702c57.url || "",
    platform: $config.appName,
    _source: _0x4e4d44
  };
  _0x702c57.typeEname ? (_0x4c2c96._type = _0x702c57.typeEname, _0x4c2c96._extra = {
    showType: true,
    typeName: _0x702c57.typeName || "音乐",
    badge: _0x702c57.typeEname === "yc" ? "原创" : _0x702c57.typeEname === "fc" ? "翻唱" : _0x702c57.typeEname === "bz" ? "伴奏" : ""
  }) : _0x4c2c96._extra = {
    showType: false,
    badge: _0x4e4d44 === "netease" ? "VIP" : _0x4e4d44 === "5sing" ? "5S" : ""
  };
  return _0x4c2c96;
}
async function $source$2t58$search(_0x1c68c2, _0x13afa4) {
  try {
    const _0x37c733 = "http://www.2t58.com";
    const _0x4aba48 = encodeURIComponent(_0x1c68c2);
    const _0x14eb87 = _0x37c733 + "/so/" + _0x4aba48 + "/" + _0x13afa4 + ".html";
    const _0x3a55e7 = await $axios.get(_0x14eb87);
    const _0x17ab71 = $cheerio.load(_0x3a55e7.data);
    const _0x221e5f = _0x17ab71("div.play_list").find("li");
    const _0x499c12 = [];
    for (let _0x2983d8 = 0; _0x2983d8 < _0x221e5f.length; _0x2983d8++) {
      const _0x438f91 = _0x17ab71(_0x221e5f[_0x2983d8]).find("a");
      const _0xe0c312 = $helper$extractIdFromUrl(_0x17ab71(_0x438f91[0]).attr("href"), /\/song\/(.*?)\.html/);
      const _0x7f9dfb = _0x17ab71(_0x438f91[0]).text();
      const _0x5053b9 = _0x7f9dfb.split(" - ");
      const _0x3e8e6b = _0x5053b9[0] || "";
      const _0x31bd6c = _0x5053b9[1] || _0x5053b9[2] || _0x7f9dfb;
      const _0xb835bf = _0x17ab71(_0x221e5f[_0x2983d8]).find("img").attr("src");
      _0xe0c312 && _0x31bd6c && _0x499c12.push({
        id: _0xe0c312,
        title: _0x31bd6c,
        artist: _0x3e8e6b,
        artwork: _0xb835bf,
        _source: "2t58"
      });
    }
    const _0x1ebe81 = _0x17ab71("div.play_list").find("span").text();
    const _0x1ba537 = _0x1ebe81 ? parseInt(_0x1ebe81) : 0;
    const _0xd34947 = _0x1ba537 <= 0 || _0x13afa4 * 68 >= _0x1ba537 || _0x499c12.length < 68;
    return {
      isEnd: _0xd34947,
      data: _0x499c12.map(_0x481a5b => $helper$formatMusicItem(_0x481a5b, "2t58"))
    };
  } catch (_0x577922) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $source$zz123$search(_0x3ea47f, _0x551d26) {
  try {
    const _0x236b50 = await $axios.get("https://zz123.com/ajax/", {
      params: {
        act: "search",
        key: _0x3ea47f,
        lang: "",
        page: _0x551d26
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });
    const _0x320a85 = _0x236b50.data;
    if (!_0x320a85 || !_0x320a85.data) {
      return {
        isEnd: true,
        data: []
      };
    }
    const _0x91fdcc = _0x320a85.data.map(_0x5bf848 => ({
      id: _0x5bf848.id || "",
      title: _0x5bf848.mname || "",
      artist: _0x5bf848.sname || "",
      album: _0x5bf848.pic || "",
      duration: $helper$parseDuration(_0x5bf848.play_time || ""),
      artwork: _0x5bf848.pic || "",
      url: _0x5bf848.mp3 || "",
      _source: "zz123"
    })).filter(_0x552b4b => _0x552b4b.id && _0x552b4b.title);
    return {
      isEnd: _0x320a85.data.length < 50,
      data: _0x91fdcc.map(_0x34bc2f => $helper$formatMusicItem(_0x34bc2f, "zz123"))
    };
  } catch (_0x37aa6e) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $source$htqyy$search(_0x1a565c, _0xa7d4bd) {
  try {
    const _0xac41ec = "http://www.htqyy.com";
    const _0xe1ea19 = encodeURIComponent(_0x1a565c);
    const _0x73aeb2 = _0xac41ec + "/home/search?wd=" + _0xe1ea19;
    const _0x192514 = await $axios.get(_0x73aeb2, {
      headers: {
        Cookie: "blk=0; Hm_lvt_74e11efe27096f6ef1745cd53f168168=1726491026; Hm_lpvt_74e11efe27096f6ef1745cd53f168168=1726491026; HMACCOUNT=72B42C3991430F07",
        Referer: "http://www.htqyy.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });
    const _0x31b1e4 = $cheerio.load(_0x192514.data);
    const _0x1532f0 = _0x31b1e4("ul#musicList").find("li");
    const _0x2b4460 = [];
    for (let _0x52c7b3 = 0; _0x52c7b3 < _0x1532f0.length; _0x52c7b3++) {
      const _0x5a2ec4 = _0x31b1e4(_0x1532f0[_0x52c7b3]).find("span.title a");
      const _0xbc4a9 = _0x31b1e4(_0x1532f0[_0x52c7b3]).find("span.artistName a");
      const _0x5cd6db = _0x31b1e4(_0x1532f0[_0x52c7b3]).find("img").attr("src");
      const _0x3a86fe = $helper$extractIdFromUrl(_0x31b1e4(_0x5a2ec4[0]).attr("href"), /\/play\/(\d+)/);
      const _0x5f4e8c = _0x31b1e4(_0x5a2ec4[0]).text().toString();
      const _0x1dbcf6 = _0xbc4a9.length > 0 ? _0x31b1e4(_0xbc4a9[0]).text() : _0x31b1e4("h2.ib").text();
      _0x3a86fe && _0x5f4e8c && _0x2b4460.push({
        id: _0x3a86fe,
        title: _0x5f4e8c,
        artist: _0x1dbcf6,
        artwork: _0x5cd6db,
        _source: "htqyy"
      });
    }
    return {
      isEnd: true,
      data: _0x2b4460.map(_0x22fc2f => $helper$formatMusicItem(_0x22fc2f, "htqyy"))
    };
  } catch (_0x57c4b9) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $source$netease$search(_0x504f59, _0x39ea06) {
  try {
    const _0x4a2d6e = await $axios.get("https://music.163.com/api/search/get", {
      params: {
        s: _0x504f59,
        type: 1,
        limit: 30,
        offset: (_0x39ea06 - 1) * 30
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer: "https://music.163.com/"
      }
    });
    const _0x1151e7 = _0x4a2d6e.data;
    if (!_0x1151e7.result || !_0x1151e7.result.songs) {
      return {
        isEnd: true,
        data: []
      };
    }
    const _0x3105a1 = _0x1151e7.result.songs.filter(_0x520841 => _0x520841.fee === 0 || _0x520841.fee === 8).map(_0x4d55e3 => {
      const _0x3139c5 = _0x4d55e3.al || _0x4d55e3.album || {};
      const _0xfcd7b = _0x4d55e3.ar || _0x4d55e3.artists || [];
      return {
        id: _0x4d55e3.id,
        title: _0x4d55e3.name || "",
        artist: _0xfcd7b[0] ? _0xfcd7b[0].name : "",
        album: _0x3139c5.name || "",
        artwork: _0x3139c5.picUrl || "",
        duration: _0x4d55e3.dt ? Math.floor(_0x4d55e3.dt / 1000) : 0,
        url: "https://music.163.com/song/media/outer/url?id=" + _0x4d55e3.id + ".mp3",
        _source: "netease"
      };
    }).filter(_0x3f89c1 => _0x3f89c1.id && _0x3f89c1.title);
    return {
      isEnd: _0x1151e7.result.songCount <= _0x39ea06 * 30,
      data: _0x3105a1.map(_0x17161f => $helper$formatMusicItem(_0x17161f, "netease"))
    };
  } catch (_0x3da7a1) {
    try {
      return await $source$netease$simpleSearch(_0x504f59, _0x39ea06);
    } catch (_0x433d0a) {
      return {
        isEnd: true,
        data: []
      };
    }
  }
}
async function $source$netease$simpleSearch(_0x14c789, _0x2e9979) {
  try {
    const _0x3b63bc = await $axios.get("https://music.163.com/api/cloudsearch/pc", {
      params: {
        s: _0x14c789,
        type: 1,
        limit: 30,
        offset: (_0x2e9979 - 1) * 30
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });
    const _0x1ee3c0 = _0x3b63bc.data;
    if (!_0x1ee3c0.result || !_0x1ee3c0.result.songs) {
      return {
        isEnd: true,
        data: []
      };
    }
    const _0x46b586 = _0x1ee3c0.result.songs.filter(_0x4efd9f => !_0x4efd9f.privilege || _0x4efd9f.privilege.fee !== 1).map(_0x5ad8cc => ({
      id: _0x5ad8cc.id,
      title: _0x5ad8cc.name || "",
      artist: _0x5ad8cc.ar ? _0x5ad8cc.ar.map(_0x4a088b => _0x4a088b.name).join("/") : "",
      album: _0x5ad8cc.al ? _0x5ad8cc.al.name : "",
      artwork: _0x5ad8cc.al ? _0x5ad8cc.al.picUrl : "",
      duration: _0x5ad8cc.dt ? Math.floor(_0x5ad8cc.dt / 1000) : 0,
      url: "https://music.163.com/song/media/outer/url?id=" + _0x5ad8cc.id + ".mp3",
      _source: "netease"
    })).filter(_0x4f4459 => _0x4f4459.id && _0x4f4459.title);
    return {
      isEnd: _0x1ee3c0.result.songCount <= _0x2e9979 * 30,
      data: _0x46b586.map(_0x29a36c => $helper$formatMusicItem(_0x29a36c, "netease"))
    };
  } catch (_0x3fa300) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $source$5sing$search(_0x22e5ce, _0x1e54c7) {
  try {
    const _0x553ae4 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
      Host: "search.5sing.kugou.com",
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "zh-CN,zh;q=0.9",
      Referer: "http://search.5sing.kugou.com/home/index"
    };
    const _0x30679f = await $axios.get("http://search.5sing.kugou.com/home/json", {
      headers: _0x553ae4,
      params: {
        keyword: _0x22e5ce,
        sort: 1,
        page: _0x1e54c7,
        filter: 0,
        type: 0
      }
    });
    const _0x471cf8 = _0x30679f.data;
    if (!_0x471cf8 || !_0x471cf8.list) {
      return {
        isEnd: true,
        data: []
      };
    }
    const _0x115a0e = _0x471cf8.list.map(_0x122763 => ({
      id: _0x122763.songId || "",
      title: $cheerio.load(_0x122763.songName || "").text(),
      artist: _0x122763.singer || "",
      album: _0x122763.typeName || "",
      typeEname: _0x122763.typeEname || "yc",
      typeName: _0x122763.typeName || "原唱",
      _source: "5sing"
    })).filter(_0x53440d => _0x53440d.id && _0x53440d.title);
    return {
      isEnd: _0x471cf8.pageInfo.cur >= _0x471cf8.pageInfo.totalPages,
      data: _0x115a0e.map(_0x24a63c => $helper$formatMusicItem(_0x24a63c, "5sing"))
    };
  } catch (_0x338c58) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $search$unified(_0x2046ab, _0x30a024, _0x24186e) {
  if (_0x24186e === "music") {
    try {
      const _0x4537e5 = await Promise.allSettled([$source$2t58$search(_0x2046ab, _0x30a024), $source$zz123$search(_0x2046ab, _0x30a024), $source$htqyy$search(_0x2046ab, _0x30a024), $source$netease$search(_0x2046ab, _0x30a024), $source$5sing$search(_0x2046ab, _0x30a024)]);
      const _0x41bdde = [];
      _0x4537e5.forEach(_0x11be1a => {
        _0x11be1a.status === "fulfilled" && _0x11be1a.value && _0x11be1a.value.data && _0x41bdde.push(..._0x11be1a.value.data);
      });
      const _0x250ba7 = new Set();
      const _0xf4a15a = _0x41bdde.filter(_0x51005a => {
        const _0x595e18 = _0x51005a.id + "-" + _0x51005a.title + "-" + _0x51005a.artist;
        if (_0x250ba7.has(_0x595e18)) {
          return false;
        }
        _0x250ba7.add(_0x595e18);
        return true;
      });
      const _0x4c7790 = _0xf4a15a.sort((_0x4938e9, _0x40d0f4) => {
        let _0x5be688 = 0;
        let _0x4e89d1 = 0;
        _0x5be688 -= (_0x4938e9.title || "").length;
        _0x4e89d1 -= (_0x40d0f4.title || "").length;
        const _0x1bdf8e = _0x4938e9.artwork && _0x4938e9.artwork !== $config.defaultArtwork;
        const _0x11a3ea = _0x40d0f4.artwork && _0x40d0f4.artwork !== $config.defaultArtwork;
        if (_0x1bdf8e) {
          _0x5be688 += 5;
        }
        if (_0x11a3ea) {
          _0x4e89d1 += 5;
        }
        const _0x546d2f = _0x4938e9.album && _0x4938e9.album.trim() !== "";
        const _0x55fb56 = _0x40d0f4.album && _0x40d0f4.album.trim() !== "";
        if (_0x546d2f) {
          _0x5be688 += 3;
        }
        if (_0x55fb56) {
          _0x4e89d1 += 3;
        }
        const _0x3877b9 = _0x4938e9.url && _0x4938e9.url.trim() !== "";
        const _0x1b9571 = _0x40d0f4.url && _0x40d0f4.url.trim() !== "";
        if (_0x3877b9) {
          _0x5be688 += 2;
        }
        if (_0x1b9571) {
          _0x4e89d1 += 2;
        }
        _0x5be688 += $config.sourcePriority[_0x4938e9._source] || 0;
        _0x4e89d1 += $config.sourcePriority[_0x40d0f4._source] || 0;
        if (_0x4938e9._source === "5sing" && _0x4938e9._type === "yc") {
          _0x5be688 += 2;
        }
        if (_0x40d0f4._source === "5sing" && _0x40d0f4._type === "yc") {
          _0x4e89d1 += 2;
        }
        return _0x4e89d1 - _0x5be688;
      });
      const _0x23eb25 = _0x4c7790.slice(0, 70);
      return {
        isEnd: _0x23eb25.length < 70,
        data: _0x23eb25
      };
    } catch (_0x325172) {
      return {
        isEnd: true,
        data: []
      };
    }
  } else {
    if (_0x24186e === "album") {
      return await $search$album(_0x2046ab, _0x30a024);
    } else {
      if (_0x24186e === "artist") {
        return await $search$artist(_0x2046ab, _0x30a024);
      } else {
        if (_0x24186e === "sheet") {
          return await $search$sheet(_0x2046ab, _0x30a024);
        }
      }
    }
  }
  return {
    isEnd: true,
    data: []
  };
}
async function $search$album(_0x4a30c2, _0x10fccc) {
  try {
    const _0x1a1221 = await $search$unified(_0x4a30c2, _0x10fccc, "music");
    const _0x35da73 = new Map();
    _0x1a1221.data.forEach(_0x51e5b0 => {
      const _0x482353 = _0x51e5b0.album + "-" + _0x51e5b0.artist;
      if (!_0x35da73.has(_0x482353)) {
        _0x35da73.set(_0x482353, {
          id: "album_" + _0x482353,
          title: _0x51e5b0.album || "未知专辑",
          artist: _0x51e5b0.artist || "未知艺术家",
          artwork: _0x51e5b0.artwork || $config.defaultArtwork,
          description: "包含歌曲: " + _0x51e5b0.title,
          date: new Date().getFullYear().toString(),
          count: 1,
          _source: _0x51e5b0._source
        });
      } else {
        const _0x545010 = _0x35da73.get(_0x482353);
        _0x545010.count++;
        _0x545010.description = "包含 " + _0x545010.count + " 首歌曲";
      }
    });
    const _0x5ec9c0 = Array.from(_0x35da73.values()).sort((_0x47b4b6, _0x3d6fdb) => _0x3d6fdb.count - _0x47b4b6.count).slice(0, 30);
    return {
      isEnd: true,
      data: _0x5ec9c0
    };
  } catch (_0x3603f6) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $search$artist(_0xa30b22, _0x5738c8) {
  try {
    const _0x2c786f = await $search$unified(_0xa30b22, _0x5738c8, "music");
    const _0x165971 = new Map();
    _0x2c786f.data.forEach(_0x32dce5 => {
      const _0x43fb6d = _0x32dce5.artist || "未知艺术家";
      if (!_0x165971.has(_0x43fb6d)) {
        _0x165971.set(_0x43fb6d, {
          id: "artist_" + _0x43fb6d,
          name: _0x32dce5.artist || "未知艺术家",
          avatar: _0x32dce5.artwork || $config.defaultArtwork,
          worksNum: 1,
          description: "代表作: " + _0x32dce5.title,
          _source: _0x32dce5._source
        });
      } else {
        const _0x59f779 = _0x165971.get(_0x43fb6d);
        _0x59f779.worksNum++;
        _0x59f779.description = "共有 " + _0x59f779.worksNum + " 首作品";
      }
    });
    const _0x2bb6af = Array.from(_0x165971.values()).sort((_0x523188, _0x5c2ae3) => _0x5c2ae3.worksNum - _0x523188.worksNum).slice(0, 30);
    return {
      isEnd: true,
      data: _0x2bb6af
    };
  } catch (_0x4b2874) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $search$sheet(_0x241fd6, _0xfc671a) {
  try {
    const _0xd6fee0 = await $sheet$recommended();
    const _0xb2a98e = _0xd6fee0.data.filter(_0x40f65a => _0x40f65a.title.toLowerCase().includes(_0x241fd6.toLowerCase()) || _0x40f65a.description.toLowerCase().includes(_0x241fd6.toLowerCase()));
    return {
      isEnd: true,
      data: _0xb2a98e
    };
  } catch (_0x1ce980) {
    return {
      isEnd: true,
      data: []
    };
  }
}
async function $media$unified(_0x43bb9c, _0x4202da) {
  const _0x14777b = _0x43bb9c._source;
  try {
    switch (_0x14777b) {
      case "2t58":
        {
          const _0x19f85d = "http://www.2t58.com";
          const _0x10f884 = {
            "Content-Type": "application/x-www-form-urlencoded",
            Referer: _0x19f85d + "/song/" + _0x43bb9c.id + ".html"
          };
          const _0x1503e0 = await $axios({
            method: "post",
            url: _0x19f85d + "/js/play.php",
            headers: _0x10f884,
            data: "id=" + _0x43bb9c.id + "&type=music",
            timeout: 10000
          });
          if (_0x1503e0.data && _0x1503e0.data.url) {
            return {
              url: _0x1503e0.data.url,
              quality: _0x4202da || "standard",
              platform: $config.appName,
              artwork: _0x43bb9c.artwork || $config.defaultArtwork,
              title: _0x43bb9c.title,
              artist: _0x43bb9c.artist
            };
          }
          break;
        }
      case "zz123":
        {
          const _0x4ccf01 = await $axios.get("https://zz123.com/ajax/", {
            params: {
              act: "songinfo",
              id: _0x43bb9c.id,
              lang: ""
            }
          });
          if (_0x4ccf01.data && _0x4ccf01.data.data && _0x4ccf01.data.data.mp3) {
            return {
              url: _0x4ccf01.data.data.mp3,
              quality: _0x4202da || "standard",
              platform: $config.appName,
              artwork: _0x43bb9c.artwork || $config.defaultArtwork,
              title: _0x43bb9c.title,
              artist: _0x43bb9c.artist
            };
          }
          break;
        }
      case "htqyy":
        {
          const _0x190c2b = "http://www.htqyy.com";
          const _0x48b7 = await $axios.get(_0x190c2b + "/play/" + _0x43bb9c.id, {
            headers: {
              Cookie: "blk=0; Hm_lvt_74e11efe27096f6ef1745cd53f168168=1726491026; Hm_lpvt_74e11efe27096f6ef1745cd53f168168=1726491026; HMACCOUNT=72B42C3991430F07",
              Referer: "http://www.htqyy.com/",
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
          });
          const _0x59fbfe = _0x48b7.data;
          const _0x1bf756 = _0x59fbfe.match(/var fileHost\s*=\s*"([^"]+)"/);
          const _0x5f3842 = _0x59fbfe.match(/var mp3\s*=\s*"([^"]+)"/);
          if (_0x1bf756 && _0x5f3842) {
            const _0x2ba252 = "" + _0x1bf756[1] + _0x5f3842[1];
            return {
              url: _0x2ba252,
              quality: _0x4202da || "standard",
              platform: $config.appName,
              artwork: _0x43bb9c.artwork || $config.defaultArtwork,
              title: _0x43bb9c.title,
              artist: _0x43bb9c.artist
            };
          }
          break;
        }
      case "netease":
        {
          return {
            url: "https://music.163.com/song/media/outer/url?id=" + _0x43bb9c.id + ".mp3",
            quality: _0x4202da || "standard",
            platform: $config.appName,
            artwork: _0x43bb9c.artwork || $config.defaultArtwork,
            title: _0x43bb9c.title,
            artist: _0x43bb9c.artist
          };
        }
      case "5sing":
        {
          if (_0x4202da === "super") {
            return {
              url: "",
              quality: _0x4202da || "standard",
              platform: $config.appName,
              artwork: _0x43bb9c.artwork || $config.defaultArtwork,
              title: _0x43bb9c.title,
              artist: _0x43bb9c.artist
            };
          }
          const _0x1a6415 = Date.now();
          const _0x4577b1 = _0x43bb9c.id;
          const _0x27c603 = _0x43bb9c._type || "yc";
          const _0x4e37b5 = "5uytoxQewcvIc1gn1PlNF0T2jbbOzRl5appid=2918clienttime=" + _0x1a6415 + "clientver=1000dfid=08wYMS3ob9Yw3UWPbz08PRQVmid=63037fee343fbae9aa4054b2ed6607b5songid=" + _0x4577b1 + "songtype=" + _0x27c603 + "uuid=63037fee343fbae9aa4054b2ed6607b5version=6.6.725uytoxQewcvIc1gn1PlNF0T2jbbOzRl5";
          const _0x3d603f = $crypto.MD5(_0x4e37b5).toString();
          const _0x550c67 = "https://5sservice.kugou.com/song/getsongurl?appid=2918&clientver=1000&mid=63037fee343fbae9aa4054b2ed6607b5&uuid=63037fee343fbae9aa4054b2ed6607b5&dfid=08wYMS3ob9Yw3UWPbz08PRQV&songid=" + _0x4577b1 + "&songtype=" + _0x27c603 + "&version=6.6.72&clienttime=" + _0x1a6415 + "&signature=" + _0x3d603f;
          const _0x31b553 = await $axios.get(_0x550c67);
          const _0x27e6ec = _0x31b553.data.data;
          let _0x2b5abd = "";
          if (_0x4202da === "standard") {
            _0x2b5abd = _0x27e6ec.squrl || _0x27e6ec.lqurl || "";
          } else {
            _0x4202da === "high" ? _0x2b5abd = _0x27e6ec.hqurl || _0x27e6ec.hqurl_backup || "" : _0x2b5abd = _0x27e6ec.lqurl || _0x27e6ec.lqurl_backup || "";
          }
          return {
            url: _0x2b5abd,
            quality: _0x4202da || "standard",
            platform: $config.appName,
            artwork: _0x43bb9c.artwork || $config.defaultArtwork,
            title: _0x43bb9c.title,
            artist: _0x43bb9c.artist
          };
        }
    }
    return await $media$fallback(_0x43bb9c, _0x4202da);
  } catch (_0x53de65) {
    return await $media$fallback(_0x43bb9c, _0x4202da);
  }
}
async function $media$fallback(_0x15ecf2, _0x309114) {
  try {
    const _0x380266 = "http://www.2t58.com";
    const _0x5d4302 = {
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: _0x380266 + "/song/" + _0x15ecf2.id + ".html"
    };
    const _0x2ce244 = await $axios({
      method: "post",
      url: _0x380266 + "/js/play.php",
      headers: _0x5d4302,
      data: "id=" + _0x15ecf2.id + "&type=music",
      timeout: 5000
    });
    if (_0x2ce244.data && _0x2ce244.data.url) {
      return {
        url: _0x2ce244.data.url,
        quality: _0x309114 || "standard",
        platform: $config.appName,
        artwork: _0x15ecf2.artwork || $config.defaultArtwork,
        title: _0x15ecf2.title,
        artist: _0x15ecf2.artist
      };
    }
  } catch (_0x33e8da) {}
  try {
    return {
      url: "https://music.163.com/song/media/outer/url?id=" + _0x15ecf2.id + ".mp3",
      quality: _0x309114 || "standard",
      platform: $config.appName,
      artwork: _0x15ecf2.artwork || $config.defaultArtwork,
      title: _0x15ecf2.title,
      artist: _0x15ecf2.artist
    };
  } catch (_0x386ff9) {}
  return {
    url: "",
    quality: _0x309114 || "standard",
    platform: $config.appName,
    artwork: _0x15ecf2.artwork || $config.defaultArtwork,
    title: _0x15ecf2.title,
    artist: _0x15ecf2.artist
  };
}
async function $lyric$unified(_0x2000bf) {
  const _0x74dd48 = _0x2000bf._source;
  try {
    switch (_0x74dd48) {
      case "2t58":
        {
          const _0x4eff44 = "http://www.2t58.com";
          const _0x574cd1 = await $axios({
            method: "get",
            url: _0x4eff44 + "/plug/down.php?ac=music&lk=lrc&id=" + _0x2000bf.id,
            timeout: 10000
          });
          if (_0x574cd1.data) {
            return {
              rawLrc: $helper$cleanWebInfo(_0x574cd1.data),
              platform: $config.appName,
              artwork: _0x2000bf.artwork || $config.defaultArtwork
            };
          }
          break;
        }
      case "zz123":
        {
          const _0x1daab4 = await $axios.get("https://zz123.com/ajax/", {
            params: {
              act: "songinfo",
              id: _0x2000bf.id,
              lang: ""
            }
          });
          if (_0x1daab4.data && _0x1daab4.data.data && _0x1daab4.data.data.lrc) {
            return {
              rawLrc: $helper$cleanWebInfo(_0x1daab4.data.data.lrc),
              platform: $config.appName,
              artwork: _0x2000bf.artwork || $config.defaultArtwork
            };
          }
          break;
        }
      case "netease":
        {
          const _0x44e942 = await $axios.get("https://music.163.com/api/song/lyric?id=" + _0x2000bf.id + "&lv=1");
          if (_0x44e942.data && _0x44e942.data.lrc && _0x44e942.data.lrc.lyric) {
            return {
              rawLrc: _0x44e942.data.lrc.lyric,
              platform: $config.appName,
              artwork: _0x2000bf.artwork || $config.defaultArtwork
            };
          }
          break;
        }
      case "5sing":
        {
          const _0x44bbcd = await $axios.get("http://5sing.kugou.com/fm/m/json/lrc", {
            params: {
              songId: _0x2000bf.id,
              songType: _0x2000bf._type || "yc"
            }
          });
          if (_0x44bbcd.data && _0x44bbcd.data.txt) {
            return {
              rawLrc: $helper$cleanWebInfo(_0x44bbcd.data.txt),
              platform: $config.appName,
              artwork: _0x2000bf.artwork || $config.defaultArtwork
            };
          }
          break;
        }
      case "htqyy":
        {
          return {
            rawLrc: "",
            platform: $config.appName,
            artwork: _0x2000bf.artwork || $config.defaultArtwork
          };
        }
    }
  } catch (_0x4bfde6) {}
  return {
    rawLrc: "",
    platform: $config.appName,
    artwork: _0x2000bf.artwork || $config.defaultArtwork
  };
}
async function $sheet$recommended() {
  const _0x3d685e = [{
    id: "popular",
    title: "热门歌曲",
    description: "全网热门歌曲合集",
    artwork: $config.defaultArtwork,
    count: 100,
    type: "popular"
  }, {
    id: "new",
    title: "最新歌曲",
    description: "每日更新最新歌曲",
    artwork: $config.defaultArtwork,
    count: 50,
    type: "new"
  }, {
    id: "classic",
    title: "经典老歌",
    description: "经典永流传",
    artwork: $config.defaultArtwork,
    count: 80,
    type: "classic"
  }, {
    id: "chinese",
    title: "华语金曲",
    description: "经典华语歌曲",
    artwork: $config.defaultArtwork,
    count: 60,
    type: "chinese"
  }, {
    id: "english",
    title: "欧美热歌",
    description: "最新欧美流行",
    artwork: $config.defaultArtwork,
    count: 40,
    type: "english"
  }, {
    id: "jpop",
    title: "日韩流行",
    description: "日韩流行音乐",
    artwork: $config.defaultArtwork,
    count: 30,
    type: "jpop"
  }, {
    id: "5sing_yc",
    title: "5sing原创",
    description: "5sing原创音乐",
    artwork: $config.defaultArtwork,
    count: 40,
    type: "5sing_yc"
  }, {
    id: "5sing_fc",
    title: "5sing翻唱",
    description: "5sing翻唱音乐",
    artwork: $config.defaultArtwork,
    count: 35,
    type: "5sing_fc"
  }];
  return {
    title: "推荐歌单",
    data: _0x3d685e.map(_0x31f2d2 => ({
      id: _0x31f2d2.id,
      title: _0x31f2d2.title,
      description: _0x31f2d2.description,
      artwork: _0x31f2d2.artwork,
      playCount: _0x31f2d2.count * 1000,
      worksNum: _0x31f2d2.count,
      _extra: {
        showPlayCount: true,
        showWorksNum: true,
        showDescription: true,
        badge: "推荐",
        source: _0x31f2d2.type.startsWith("5sing") ? "5sing" : "mixed"
      }
    }))
  };
}
async function $sheet$detail(_0x1be44f, _0x297427 = 1) {
  let _0x3b5604 = "";
  let _0x20ce2d = null;
  switch (_0x1be44f.type || _0x1be44f.id) {
    case "popular":
      _0x3b5604 = "热门";
      break;
    case "new":
      _0x3b5604 = "新歌";
      break;
    case "classic":
      _0x3b5604 = "经典";
      break;
    case "chinese":
      _0x3b5604 = "华语";
      break;
    case "english":
      _0x3b5604 = "英文";
      break;
    case "jpop":
      _0x3b5604 = "日语";
      break;
    case "5sing_yc":
      _0x3b5604 = "原创";
      _0x20ce2d = "5sing";
      break;
    case "5sing_fc":
      _0x3b5604 = "翻唱";
      _0x20ce2d = "5sing";
      break;
    default:
      _0x3b5604 = _0x1be44f.title || "音乐";
  }
  const _0x10445f = await $search$unified(_0x3b5604, _0x297427, "music");
  let _0x4b30c9 = _0x10445f.data;
  _0x20ce2d && (_0x4b30c9 = _0x10445f.data.filter(_0x2f219a => _0x2f219a._source === _0x20ce2d));
  return {
    ..._0x1be44f,
    musicList: _0x4b30c9,
    isEnd: _0x10445f.isEnd,
    _extra: {
      showArtwork: true,
      showDuration: true,
      gridLayout: false,
      showSource: true
    }
  };
}
async function $getAlbumInfo(_0x2bde2a, _0x4b94e1) {
  try {
    const _0x642ff4 = await $search$unified(_0x2bde2a.title, _0x4b94e1, "music");
    const _0x260910 = _0x642ff4.data.filter(_0x37a41a => _0x37a41a.album === _0x2bde2a.title || _0x37a41a.artist === _0x2bde2a.artist);
    return {
      isEnd: _0x642ff4.isEnd,
      albumItem: {
        ..._0x2bde2a,
        artwork: _0x2bde2a.artwork || $config.defaultArtwork,
        description: "共收录 " + _0x260910.length + " 首歌曲",
        date: new Date().getFullYear().toString()
      },
      musicList: _0x260910
    };
  } catch (_0x96d477) {
    return {
      isEnd: true,
      albumItem: {
        ..._0x2bde2a,
        artwork: _0x2bde2a.artwork || $config.defaultArtwork
      },
      musicList: []
    };
  }
}
async function $getArtistWorks(_0xa48bad, _0x176367, _0x501e75) {
  if (_0x501e75 === "music") {
    try {
      const _0x2c2176 = await $search$unified(_0xa48bad.name, _0x176367, "music");
      const _0x563b0d = _0x2c2176.data.filter(_0x4a336b => _0x4a336b.artist === _0xa48bad.name);
      return {
        isEnd: _0x2c2176.isEnd,
        artistItem: {
          ..._0xa48bad,
          description: "共有 " + _0x563b0d.length + " 首作品"
        },
        data: _0x563b0d
      };
    } catch (_0x7e4f0b) {
      return {
        isEnd: true,
        data: []
      };
    }
  }
  return {
    isEnd: true,
    data: []
  };
}
async function $getTopLists() {
  const _0x4dba0f = await $sheet$recommended();
  return [_0x4dba0f];
}
async function $getTopListDetail(_0x37dada) {
  return await $sheet$detail(_0x37dada, 1);
}
async function $getRecommendSheetTags() {
  return {
    data: [{
      title: "分类",
      data: [{
        id: "popular",
        title: "热门"
      }, {
        id: "new",
        title: "最新"
      }, {
        id: "classic",
        title: "经典"
      }, {
        id: "chinese",
        title: "华语"
      }, {
        id: "english",
        title: "欧美"
      }, {
        id: "jpop",
        title: "日韩"
      }, {
        id: "5sing_yc",
        title: "5sing原创"
      }, {
        id: "5sing_fc",
        title: "5sing翻唱"
      }]
    }],
    pinned: [{
      id: "popular",
      title: "热门推荐"
    }, {
      id: "new",
      title: "最新歌曲"
    }, {
      id: "5sing_yc",
      title: "5sing原创"
    }]
  };
}
async function $getRecommendSheetsByTag(_0x1f4659, _0x226cd9) {
  const _0x5cdd30 = await $sheet$recommended();
  const _0x4f0bd5 = _0x5cdd30.data.filter(_0x1cc2f3 => _0x1cc2f3.id === _0x1f4659.id || _0x1cc2f3.type === _0x1f4659.id);
  return {
    isEnd: true,
    data: _0x4f0bd5.slice((_0x226cd9 - 1) * 20, _0x226cd9 * 20)
  };
}
async function $getMusicSheetInfo(_0x387e30, _0x5a1630) {
  return await $sheet$detail(_0x387e30, _0x5a1630);
}
const $carbonate$shareConfig = {
  name: "碳酸氢钠",
  version: "1.35",
  author: "葡萄球君",
  main: "carbonate.js",
  srcUrl: "https://music.nairocy.com/carbonate.js",
  platform: "碳酸氢钠",
  supportedSearchType: ["music", "album", "artist", "sheet"],
  cacheControl: "no-cache"
};
const $carbonate$pluginInstance = {
  platform: $config.appName,
  version: $config.version,
  author: $config.author,
  srcUrl: $config.srcUrl,
  shareUrl: $config.shareUrl,
  cacheControl: "no-cache",
  supportedSearchType: ["music", "album", "artist", "sheet"],
  search: async function (_0x2b6b0e, _0x5d4d1a, _0x3d6ea0) {
    return await $search$unified(_0x2b6b0e, _0x5d4d1a, _0x3d6ea0);
  },
  getMediaSource: async function (_0x20f8d1, _0x13d602) {
    return await $media$unified(_0x20f8d1, _0x13d602);
  },
  getLyric: async function (_0x485466) {
    return await $lyric$unified(_0x485466);
  },
  getAlbumInfo: async function (_0x4da472, _0x50216c) {
    return await $getAlbumInfo(_0x4da472, _0x50216c || 1);
  },
  getArtistWorks: async function (_0x25ea33, _0x17e9e4, _0x445aec) {
    return await $getArtistWorks(_0x25ea33, _0x17e9e4 || 1, _0x445aec);
  },
  getTopLists: async function () {
    return await $getTopLists();
  },
  getTopListDetail: async function (_0x58f977) {
    return await $getTopListDetail(_0x58f977);
  },
  getRecommendSheetTags: async function () {
    return await $getRecommendSheetTags();
  },
  getRecommendSheetsByTag: async function (_0x32636b, _0x588a69) {
    return await $getRecommendSheetsByTag(_0x32636b, _0x588a69 || 1);
  },
  getMusicSheetInfo: async function (_0x5e0875, _0x58b579) {
    return await $getMusicSheetInfo(_0x5e0875, _0x58b579 || 1);
  },
  getShareInfo: function () {
    return {
      shareUrl: $config.shareUrl,
      shareText: "分享" + $config.appName + "插件 v" + $config.version,
      shareConfig: $carbonate$shareConfig
    };
  }
};
var $carbonate$export$2e2bcd8739ae039 = $carbonate$pluginInstance;
var $carbonate$export$shareConfig = $carbonate$shareConfig;
typeof window !== "undefined" && (window.$carbonatePlugin = $carbonate$pluginInstance, window.$carbonateShareConfig = $carbonate$shareConfig);