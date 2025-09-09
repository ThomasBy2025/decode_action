//Tue Sep 09 2025 03:09:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  CryptoJs = require("crypto-js"),
  qs = require("qs"),
  bigInt = require("big-integer"),
  dayjs = require("dayjs"),
  cheerio = require("cheerio");
function create_key() {
  var _0xa7c69f,
    _0xc36c37,
    _0x1e7096 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    _0xc1c678 = "";
  for (_0xa7c69f = 0; 16 > _0xa7c69f; _0xa7c69f += 1) _0xc36c37 = Math.random() * _0x1e7096.length, _0xc36c37 = Math.floor(_0xc36c37), _0xc1c678 += _0x1e7096.charAt(_0xc36c37);
  return _0xc1c678;
}
function AES(_0x4d0f10, _0x24693f) {
  var _0x595c23 = CryptoJs.enc.Utf8.parse(_0x24693f),
    _0x2224f3 = CryptoJs.enc.Utf8.parse("0102030405060708"),
    _0x1e0c9b = CryptoJs.enc.Utf8.parse(_0x4d0f10),
    _0x1e4de4 = CryptoJs.AES.encrypt(_0x1e0c9b, _0x595c23, {
      "iv": _0x2224f3,
      "mode": CryptoJs.mode.CBC
    });
  return _0x1e4de4.toString();
}
function Rsa(_0xd1c099) {
  _0xd1c099 = _0xd1c099.split("").reverse().join("");
  const _0xbed726 = "010001",
    _0x2897b9 = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7",
    _0x39753a = _0xd1c099.split("").map(_0x198d6d => _0x198d6d.charCodeAt(0).toString(16)).join(""),
    _0xe21b5 = bigInt(_0x39753a, 16).modPow(bigInt(_0xbed726, 16), bigInt(_0x2897b9, 16)).toString(16);
  return Array(256 - _0xe21b5.length).fill("0").join("").concat(_0xe21b5);
}
function getParamsAndEnc(_0x338c81) {
  const _0x52feb8 = AES(_0x338c81, "0CoJUm6Qyw8W8jud"),
    _0x5a7ed0 = create_key(),
    _0x35ff7b = AES(_0x52feb8, _0x5a7ed0),
    _0x3c4296 = Rsa(_0x5a7ed0);
  return {
    "params": _0x35ff7b,
    "encSecKey": _0x3c4296
  };
}
function formatMusicItem(_0x563f2b) {
  var _0x26f1f7, _0x2abbfd, _0x5e00f5, _0x28b839;
  const _0x16787b = _0x563f2b.al || _0x563f2b.album;
  return {
    "id": _0x563f2b.id,
    "artwork": _0x16787b === null || _0x16787b === undefined ? undefined : _0x16787b.picUrl,
    "title": _0x563f2b.name,
    "artist": (_0x563f2b.ar || _0x563f2b.artists)[0].name,
    "album": _0x16787b === null || _0x16787b === undefined ? undefined : _0x16787b.name,
    "url": "https://share.duanx.cn/url/wy/" + _0x563f2b.id + "/128k",
    "qualities": {
      "low": {
        "size": (_0x26f1f7 = _0x563f2b.l || {}) === null || _0x26f1f7 === undefined ? undefined : _0x26f1f7.size
      },
      "standard": {
        "size": (_0x2abbfd = _0x563f2b.m || {}) === null || _0x2abbfd === undefined ? undefined : _0x2abbfd.size
      },
      "high": {
        "size": (_0x5e00f5 = _0x563f2b.h || {}) === null || _0x5e00f5 === undefined ? undefined : _0x5e00f5.size
      },
      "super": {
        "size": (_0x28b839 = _0x563f2b.sq || {}) === null || _0x28b839 === undefined ? undefined : _0x28b839.size
      }
    },
    "copyrightId": _0x563f2b === null || _0x563f2b === undefined ? undefined : _0x563f2b.copyrightId
  };
}
function formatAlbumItem(_0x5d26a9) {
  return {
    "id": _0x5d26a9.id,
    "artist": _0x5d26a9.artist.name,
    "title": _0x5d26a9.name,
    "artwork": _0x5d26a9.picUrl,
    "description": "",
    "date": dayjs.unix(_0x5d26a9.publishTime / 1000).format("YYYY-MM-DD")
  };
}
const pageSize = 30;
async function searchBase(_0x266d52, _0x55b47a, _0x43e6b8) {
  const _0x53ac5c = {
      "s": _0x266d52,
      "limit": pageSize,
      "type": _0x43e6b8,
      "offset": (_0x55b47a - 1) * pageSize,
      "csrf_token": ""
    },
    _0x1e5b49 = getParamsAndEnc(JSON.stringify(_0x53ac5c)),
    _0x11e113 = qs.stringify(_0x1e5b49),
    _0x51f9d8 = {
      "authority": "music.163.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "content-type": "application/x-www-form-urlencoded",
      "accept": "*/*",
      "origin": "https://music.163.com",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "referer": "https://music.163.com/search/",
      "accept-language": "zh-CN,zh;q=0.9"
    },
    _0x261158 = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/search/get",
      "headers": _0x51f9d8,
      "data": _0x11e113
    })).data;
  return _0x261158;
}
async function searchMusic(_0xc6c51, _0x33ecb5) {
  const _0x2222c4 = await searchBase(_0xc6c51, _0x33ecb5, 1),
    _0x13d1b2 = _0x2222c4.result.songs.map(formatMusicItem);
  return {
    "isEnd": _0x2222c4.result.songCount <= _0x33ecb5 * pageSize,
    "data": _0x13d1b2
  };
}
async function searchAlbum(_0x5c1289, _0x58ce54) {
  const _0x2a7042 = await searchBase(_0x5c1289, _0x58ce54, 10),
    _0x281651 = _0x2a7042.result.albums.map(formatAlbumItem);
  return {
    "isEnd": _0x2a7042.result.albumCount <= _0x58ce54 * pageSize,
    "data": _0x281651
  };
}
async function searchArtist(_0x199477, _0x49e70c) {
  const _0x11fd89 = await searchBase(_0x199477, _0x49e70c, 100),
    _0x548922 = _0x11fd89.result.artists.map(_0x20ff50 => ({
      "name": _0x20ff50.name,
      "id": _0x20ff50.id,
      "avatar": _0x20ff50.img1v1Url,
      "worksNum": _0x20ff50.albumSize
    }));
  return {
    "isEnd": _0x11fd89.result.artistCount <= _0x49e70c * pageSize,
    "data": _0x548922
  };
}
async function searchMusicSheet(_0x142664, _0x52bb04) {
  const _0xa73a3 = await searchBase(_0x142664, _0x52bb04, 1000),
    _0x13912f = _0xa73a3.result.playlists.map(_0x3eebb3 => {
      var _0x426766;
      return {
        "title": _0x3eebb3.name,
        "id": _0x3eebb3.id,
        "coverImg": _0x3eebb3.coverImgUrl,
        "artist": (_0x426766 = _0x3eebb3.creator) === null || _0x426766 === undefined ? undefined : _0x426766.nickname,
        "playCount": _0x3eebb3.playCount,
        "worksNum": _0x3eebb3.trackCount
      };
    });
  return {
    "isEnd": _0xa73a3.result.playlistCount <= _0x52bb04 * pageSize,
    "data": _0x13912f
  };
}
async function searchLyric(_0x218dc0, _0x114d8f) {
  var _0x75d84d, _0x23677d;
  const _0x1c588f = await searchBase(_0x218dc0, _0x114d8f, 1006),
    _0x2e9fec = (_0x23677d = (_0x75d84d = _0x1c588f.result.songs) === null || _0x75d84d === undefined ? undefined : _0x75d84d.map(_0x2c6c4a => {
      var _0x1eb4a6, _0x38b024, _0x3c8430, _0x1e29eb;
      return {
        "title": _0x2c6c4a.name,
        "artist": (_0x1eb4a6 = _0x2c6c4a.ar) === null || _0x1eb4a6 === undefined ? undefined : _0x1eb4a6.map(_0x4764b2 => _0x4764b2.name).join(", "),
        "id": _0x2c6c4a.id,
        "artwork": (_0x38b024 = _0x2c6c4a.al) === null || _0x38b024 === undefined ? undefined : _0x38b024.picUrl,
        "album": (_0x3c8430 = _0x2c6c4a.al) === null || _0x3c8430 === undefined ? undefined : _0x3c8430.name,
        "rawLrcTxt": (_0x1e29eb = _0x2c6c4a.lyrics) === null || _0x1e29eb === undefined ? undefined : _0x1e29eb.join("\n")
      };
    })) !== null && _0x23677d !== undefined ? _0x23677d : [];
  return {
    "isEnd": _0x1c588f.result.songCount <= _0x114d8f * pageSize,
    "data": _0x2e9fec
  };
}
async function getArtistWorks(_0x33e915, _0x4ef906, _0x409d00) {
  const _0x45babd = {
      "csrf_token": ""
    },
    _0x39a5ae = getParamsAndEnc(JSON.stringify(_0x45babd)),
    _0x2c6ca3 = qs.stringify(_0x39a5ae),
    _0x3f96b7 = {
      "authority": "music.163.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "content-type": "application/x-www-form-urlencoded",
      "accept": "*/*",
      "origin": "https://music.163.com",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      "referer": "https://music.163.com/search/",
      "accept-language": "zh-CN,zh;q=0.9"
    };
  if (_0x409d00 === "music") {
    const _0x5c5d8c = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/v1/artist/" + _0x33e915.id + "?csrf_token=",
      "headers": _0x3f96b7,
      "data": _0x2c6ca3
    })).data;
    return {
      "isEnd": true,
      "data": _0x5c5d8c.hotSongs.map(formatMusicItem)
    };
  } else {
    if (_0x409d00 === "album") {
      const _0x57e2cb = (await (0, axios_1.default)({
        "method": "post",
        "url": "https://music.163.com/weapi/artist/albums/" + _0x33e915.id + "?csrf_token=",
        "headers": _0x3f96b7,
        "data": _0x2c6ca3
      })).data;
      return {
        "isEnd": true,
        "data": _0x57e2cb.hotAlbums.map(formatAlbumItem)
      };
    }
  }
}
async function getTopListDetail(_0x179d2c) {
  const _0x307511 = await getSheetMusicById(_0x179d2c.id);
  return Object.assign(Object.assign({}, _0x179d2c), {
    "musicList": _0x307511
  });
}
async function getLyric(_0x2a6c98) {
  const _0x36312f = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x379a23 = {
      "id": _0x2a6c98.id,
      "lv": -1,
      "tv": -1,
      "csrf_token": ""
    },
    _0x33cc2b = getParamsAndEnc(JSON.stringify(_0x379a23)),
    _0x29e4fb = qs.stringify(_0x33cc2b),
    _0x14d348 = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://interface.music.163.com/weapi/song/lyric?csrf_token=",
      "headers": _0x36312f,
      "data": _0x29e4fb
    })).data;
  return {
    "rawLrc": _0x14d348.lrc.lyric
  };
}
async function getMusicInfo(_0x3ed3d7) {
  const _0x315cbe = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x583443 = {
      "id": _0x3ed3d7.id,
      "ids": "[" + _0x3ed3d7.id + "]"
    },
    _0x15872a = (await axios_1.get("http://music.163.com/api/song/detail", {
      "headers": _0x315cbe,
      "params": _0x583443
    })).data;
  return {
    "artwork": _0x15872a.songs[0].album.picUrl
  };
}
async function getAlbumInfo(_0x2640fe) {
  const _0x2ab396 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x5e0665 = {
      "resourceType": 3,
      "resourceId": _0x2640fe.id,
      "limit": 15,
      "csrf_token": ""
    },
    _0x1120ee = getParamsAndEnc(JSON.stringify(_0x5e0665)),
    _0x2f972c = qs.stringify(_0x1120ee),
    _0x43678a = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://interface.music.163.com/weapi/v1/album/" + _0x2640fe.id + "?csrf_token=",
      "headers": _0x2ab396,
      "data": _0x2f972c
    })).data;
  return {
    "albumItem": {
      "description": _0x43678a.album.description
    },
    "musicList": (_0x43678a.songs || []).map(formatMusicItem)
  };
}
async function getValidMusicItems(_0x461a58) {
  const _0x3ebeb2 = {
    "Referer": "https://y.music.163.com/",
    "Origin": "https://y.music.163.com/",
    "authority": "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  try {
    const _0x3e0cf0 = (await axios_1.default.get("https://music.163.com/api/song/detail/?ids=[" + _0x461a58.join(",") + "]", {
        "headers": _0x3ebeb2
      })).data,
      _0x41fe60 = _0x3e0cf0.songs.map(formatMusicItem);
    return _0x41fe60;
  } catch (_0x3a369f) {
    console.error(_0x3a369f);
    return [];
  }
}
async function getSheetMusicById(_0x14e76c) {
  const _0x31a433 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
    },
    _0x529760 = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x14e76c + "&n=5000", {
      "headers": _0x31a433
    })).data,
    _0x508960 = _0x529760.playlist.trackIds.map(_0x1f451e => _0x1f451e.id);
  let _0x41da85 = [],
    _0x17b0df = 0;
  while (_0x17b0df * 200 < _0x508960.length) {
    const _0x39943a = await getValidMusicItems(_0x508960.slice(_0x17b0df * 200, (_0x17b0df + 1) * 200));
    _0x41da85 = _0x41da85.concat(_0x39943a);
    ++_0x17b0df;
  }
  return _0x41da85;
}
async function importMusicSheet(_0x3baacd) {
  const _0x498139 = _0x3baacd.match(/(?:https:\/\/y\.music\.163.com\/m\/playlist\?id=([0-9]+))|(?:https?:\/\/music\.163\.com\/playlist\/([0-9]+)\/.*)|(?:https?:\/\/music.163.com(?:\/#)?\/playlist\?id=(\d+))|(?:^\s*(\d+)\s*$)/),
    _0xffee27 = _0x498139[1] || _0x498139[2] || _0x498139[3] || _0x498139[4];
  return getSheetMusicById(_0xffee27);
}
async function getTopLists() {
  const _0x9dc086 = await axios_1.default.get("https://music.163.com/discover/toplist", {
      "headers": {
        "referer": "https://music.163.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
      }
    }),
    _0x5a597d = cheerio.load(_0x9dc086.data),
    _0x404bed = _0x5a597d(".n-minelst").children(),
    _0x1db6cc = [];
  let _0x11b961 = {};
  for (let _0x31e004 of _0x404bed) {
    {
      if (_0x31e004.tagName == "h2") _0x11b961.title && _0x1db6cc.push(_0x11b961), _0x11b961 = {}, _0x11b961.title = _0x5a597d(_0x31e004).text(), _0x11b961.data = [];else {
        if (_0x31e004.tagName === "ul") {
          let _0x370e8d = _0x5a597d(_0x31e004).children();
          _0x11b961.data = _0x370e8d.map((_0x25bf2a, _0x13a187) => {
            {
              const _0x48a379 = _0x5a597d(_0x13a187),
                _0x1df839 = _0x48a379.attr("data-res-id"),
                _0x55a0c1 = _0x48a379.find("img").attr("src").replace(/(\.jpg\?).*/, ".jpg?param=800y800"),
                _0x40745e = _0x48a379.find("p.name").text(),
                _0x2be9ab = _0x48a379.find("p.s-fc4").text();
              return {
                "id": _0x1df839,
                "coverImg": _0x55a0c1,
                "title": _0x40745e,
                "description": _0x2be9ab
              };
            }
          }).toArray();
        }
      }
    }
  }
  _0x11b961.title && _0x1db6cc.push(_0x11b961);
  return _0x1db6cc;
}
const qualityLevels = {
  "low": "standard",
  "standard": "exhigh",
  "high": "lossless",
  "super": "lossless"
};
async function getMediaSource(_0x56c49e, _0x525c98) {
  const _0x2d4528 = (await axios_1.default.get("https://music.haitangw.cc/music/wy.php?id=" + _0x56c49e.id + "&level=" + qualityLevels[_0x525c98])).data;
  return {
    "url": _0x2d4528.data.url
  };
}
const headers = {
  "authority": "music.163.com",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
  "content-type": "application/x-www-form-urlencoded",
  "accept": "*/*",
  "origin": "https://music.163.com",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "sec-fetch-dest": "empty",
  "referer": "https://music.163.com/",
  "accept-language": "zh-CN,zh;q=0.9"
};
async function getRecommendSheetTags() {
  const _0x73e097 = {
      "csrf_token": ""
    },
    _0x20ff17 = getParamsAndEnc(JSON.stringify(_0x73e097)),
    _0x368324 = qs.stringify(_0x20ff17),
    _0x3d8089 = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/playlist/catalogue",
      "headers": headers,
      "data": _0x368324
    })).data,
    _0x135453 = _0x3d8089.categories,
    _0x5a143c = {},
    _0x6eeab5 = Object.entries(_0x135453).map(_0x3c5956 => {
      const _0x1e0d5e = {
        "title": _0x3c5956[1],
        "data": []
      };
      _0x5a143c[_0x3c5956[0]] = _0x1e0d5e;
      return _0x1e0d5e;
    }),
    _0x2e2d26 = [];
  _0x3d8089.sub.forEach(_0x4457c2 => {
    {
      const _0x1b32e0 = {
        "id": _0x4457c2.name,
        "title": _0x4457c2.name
      };
      if (_0x4457c2.hot) {
        _0x2e2d26.push(_0x1b32e0);
      }
      _0x5a143c[_0x4457c2.category].data.push(_0x1b32e0);
    }
  });
  return {
    "pinned": _0x2e2d26,
    "data": _0x6eeab5
  };
}
async function getRecommendSheetsByTag(_0x153737, _0xb70184) {
  const _0x167128 = 20,
    _0x538c80 = {
      "cat": _0x153737.id || "å…¨éƒ¨",
      "order": "hot",
      "limit": _0x167128,
      "offset": (_0xb70184 - 1) * _0x167128,
      "total": true,
      "csrf_token": ""
    },
    _0x27d651 = getParamsAndEnc(JSON.stringify(_0x538c80)),
    _0x161e84 = qs.stringify(_0x27d651),
    _0x3cc07f = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/playlist/list",
      "headers": headers,
      "data": _0x161e84
    })).data,
    _0x5d91e7 = _0x3cc07f.playlists.map(_0x377c38 => ({
      "id": _0x377c38.id,
      "artist": _0x377c38.creator.nickname,
      "title": _0x377c38.name,
      "artwork": _0x377c38.coverImgUrl,
      "playCount": _0x377c38.playCount,
      "createUserId": _0x377c38.userId,
      "createTime": _0x377c38.createTime,
      "description": _0x377c38.description
    }));
  return {
    "isEnd": !(_0x3cc07f.more === true),
    "data": _0x5d91e7
  };
}
async function getMusicSheetInfo(_0x7c00fd, _0x7c6a2) {
  let _0x1c813b = _0x7c00fd._trackIds;
  if (!_0x1c813b) {
    const _0x1db38e = _0x7c00fd.id,
      _0x334fc6 = {
        "Referer": "https://y.music.163.com/",
        "Origin": "https://y.music.163.com/",
        "authority": "music.163.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
      },
      _0x7f93ec = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x1db38e + "&n=5000", {
        "headers": _0x334fc6
      })).data;
    _0x1c813b = _0x7f93ec.playlist.trackIds.map(_0x2356cf => _0x2356cf.id);
  }
  const _0x1acf39 = 40,
    _0x1b5324 = _0x1c813b.slice((_0x7c6a2 - 1) * _0x1acf39, _0x7c6a2 * _0x1acf39),
    _0x268cf3 = await getValidMusicItems(_0x1b5324);
  let _0x1a875e = {};
  if (_0x7c6a2 <= 1) {
    _0x1a875e = {
      "_trackIds": _0x1c813b
    };
  }
  return Object.assign({
    "isEnd": _0x1c813b.length <= _0x7c6a2 * _0x1acf39,
    "musicList": _0x268cf3
  }, _0x1a875e);
}
module.exports = {
  "platform": "元力WY",
  "author": "公众号:科技长青",
  "version": "0.1",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "",
  "cacheControl": "no-store",
  "hints": {
    "importMusicSheet": ["ç½‘æ˜“äº‘ï¼šAPPç‚¹å‡»åˆ†äº«ï¼Œç„¶åŽå¤åˆ¶é“¾æŽ¥", "默认歌单无法导入，先新建一个空白歌单复制过去再导入新歌单即可"]
  },
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  async "search"(_0x185efa, _0x4ee220, _0x191903) {
    if (_0x191903 === "music") return await searchMusic(_0x185efa, _0x4ee220);
    if (_0x191903 === "album") return await searchAlbum(_0x185efa, _0x4ee220);
    if (_0x191903 === "artist") return await searchArtist(_0x185efa, _0x4ee220);
    if (_0x191903 === "sheet") return await searchMusicSheet(_0x185efa, _0x4ee220);
    if (_0x191903 === "lyric") return await searchLyric(_0x185efa, _0x4ee220);
  },
  "getMediaSource": getMediaSource,
  "getMusicInfo": getMusicInfo,
  "getAlbumInfo": getAlbumInfo,
  "getLyric": getLyric,
  "getArtistWorks": getArtistWorks,
  "importMusicSheet": importMusicSheet,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getMusicSheetInfo": getMusicSheetInfo,
  "getRecommendSheetsByTag": getRecommendSheetsByTag
};