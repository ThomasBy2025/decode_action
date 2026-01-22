//Thu Jan 22 2026 11:48:20 GMT+0000 (Coordinated Universal Time)
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
  var _0x1a825c,
    _0x5053f7,
    _0x149eaa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    _0x303895 = "";
  for (_0x1a825c = 0; 16 > _0x1a825c; _0x1a825c += 1) _0x5053f7 = Math.random() * _0x149eaa.length, _0x5053f7 = Math.floor(_0x5053f7), _0x303895 += _0x149eaa.charAt(_0x5053f7);
  return _0x303895;
}
function AES(_0x11cfdc, _0x4f55b6) {
  var _0x2d5f96 = CryptoJs.enc.Utf8.parse(_0x4f55b6),
    _0x1cdd16 = CryptoJs.enc.Utf8.parse("0102030405060708"),
    _0x1974f9 = CryptoJs.enc.Utf8.parse(_0x11cfdc),
    _0xab79b = CryptoJs.AES.encrypt(_0x1974f9, _0x2d5f96, {
      "iv": _0x1cdd16,
      "mode": CryptoJs.mode.CBC
    });
  return _0xab79b.toString();
}
function Rsa(_0x2cdb20) {
  _0x2cdb20 = _0x2cdb20.split("").reverse().join("");
  const _0x5627bf = "010001",
    _0x2c0ba9 = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7",
    _0x4983bb = _0x2cdb20.split("").map(_0x105eef => _0x105eef.charCodeAt(0).toString(16)).join(""),
    _0x21ab01 = bigInt(_0x4983bb, 16).modPow(bigInt(_0x5627bf, 16), bigInt(_0x2c0ba9, 16)).toString(16);
  return Array(256 - _0x21ab01.length).fill("0").join("").concat(_0x21ab01);
}
function getParamsAndEnc(_0x530a14) {
  const _0x31048b = AES(_0x530a14, "0CoJUm6Qyw8W8jud"),
    _0x3fa200 = create_key(),
    _0x43b516 = AES(_0x31048b, _0x3fa200),
    _0x5b2e07 = Rsa(_0x3fa200);
  return {
    "params": _0x43b516,
    "encSecKey": _0x5b2e07
  };
}
function formatMusicItem(_0x1316d5) {
  var _0x49b070, _0x4fc89c, _0x24bf28, _0x3c6d21;
  const _0x511fdf = _0x1316d5.al || _0x1316d5.album;
  return {
    "id": _0x1316d5.id,
    "artwork": _0x511fdf === null || _0x511fdf === undefined ? undefined : _0x511fdf.picUrl,
    "title": _0x1316d5.name,
    "artist": (_0x1316d5.ar || _0x1316d5.artists)[0].name,
    "album": _0x511fdf === null || _0x511fdf === undefined ? undefined : _0x511fdf.name,
    "url": "https://share.duanx.cn/url/wy/" + _0x1316d5.id + "/128k",
    "qualities": {
      "low": {
        "size": (_0x49b070 = _0x1316d5.l || {}) === null || _0x49b070 === undefined ? undefined : _0x49b070.size
      },
      "standard": {
        "size": (_0x4fc89c = _0x1316d5.m || {}) === null || _0x4fc89c === undefined ? undefined : _0x4fc89c.size
      },
      "high": {
        "size": (_0x24bf28 = _0x1316d5.h || {}) === null || _0x24bf28 === undefined ? undefined : _0x24bf28.size
      },
      "super": {
        "size": (_0x3c6d21 = _0x1316d5.sq || {}) === null || _0x3c6d21 === undefined ? undefined : _0x3c6d21.size
      }
    },
    "copyrightId": _0x1316d5 === null || _0x1316d5 === undefined ? undefined : _0x1316d5.copyrightId
  };
}
function formatAlbumItem(_0x2e2cd7) {
  return {
    "id": _0x2e2cd7.id,
    "artist": _0x2e2cd7.artist.name,
    "title": _0x2e2cd7.name,
    "artwork": _0x2e2cd7.picUrl,
    "description": "",
    "date": dayjs.unix(_0x2e2cd7.publishTime / 1000).format("YYYY-MM-DD")
  };
}
const pageSize = 30;
async function searchBase(_0x23408f, _0x55bfdf, _0x61d1b) {
  const _0x2777a1 = {
      "s": _0x23408f,
      "limit": pageSize,
      "type": _0x61d1b,
      "offset": (_0x55bfdf - 1) * pageSize,
      "csrf_token": ""
    },
    _0x29b591 = getParamsAndEnc(JSON.stringify(_0x2777a1)),
    _0x7d5bd7 = qs.stringify(_0x29b591),
    _0x3061d8 = {
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
    _0x416a7e = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/search/get",
      "headers": _0x3061d8,
      "data": _0x7d5bd7
    })).data;
  return _0x416a7e;
}
async function searchMusic(_0x4db5e9, _0x979df1) {
  const _0x283712 = await searchBase(_0x4db5e9, _0x979df1, 1),
    _0x29e9c3 = _0x283712.result.songs.map(formatMusicItem);
  return {
    "isEnd": _0x283712.result.songCount <= _0x979df1 * pageSize,
    "data": _0x29e9c3
  };
}
async function searchAlbum(_0x40718f, _0x37d41b) {
  const _0x100159 = await searchBase(_0x40718f, _0x37d41b, 10),
    _0xc4419d = _0x100159.result.albums.map(formatAlbumItem);
  return {
    "isEnd": _0x100159.result.albumCount <= _0x37d41b * pageSize,
    "data": _0xc4419d
  };
}
async function searchArtist(_0x1b8ba4, _0x2aae24) {
  const _0x45c2a8 = await searchBase(_0x1b8ba4, _0x2aae24, 100),
    _0x344326 = _0x45c2a8.result.artists.map(_0x528179 => ({
      "name": _0x528179.name,
      "id": _0x528179.id,
      "avatar": _0x528179.img1v1Url,
      "worksNum": _0x528179.albumSize
    }));
  return {
    "isEnd": _0x45c2a8.result.artistCount <= _0x2aae24 * pageSize,
    "data": _0x344326
  };
}
async function searchMusicSheet(_0x1f79bd, _0x4b0420) {
  const _0x35b978 = await searchBase(_0x1f79bd, _0x4b0420, 1000),
    _0x2ec208 = _0x35b978.result.playlists.map(_0x56a6e2 => {
      {
        var _0x4cde65;
        return {
          "title": _0x56a6e2.name,
          "id": _0x56a6e2.id,
          "coverImg": _0x56a6e2.coverImgUrl,
          "artist": (_0x4cde65 = _0x56a6e2.creator) === null || _0x4cde65 === undefined ? undefined : _0x4cde65.nickname,
          "playCount": _0x56a6e2.playCount,
          "worksNum": _0x56a6e2.trackCount
        };
      }
    });
  return {
    "isEnd": _0x35b978.result.playlistCount <= _0x4b0420 * pageSize,
    "data": _0x2ec208
  };
}
async function searchLyric(_0x7227f6, _0x3ef669) {
  var _0x25e05c, _0x28e0cc;
  const _0x292f9b = await searchBase(_0x7227f6, _0x3ef669, 1006),
    _0x9aaead = (_0x28e0cc = (_0x25e05c = _0x292f9b.result.songs) === null || _0x25e05c === undefined ? undefined : _0x25e05c.map(_0x17e05b => {
      var _0x3fd4d4, _0x99522, _0x103470, _0x4b96ac;
      return {
        "title": _0x17e05b.name,
        "artist": (_0x3fd4d4 = _0x17e05b.ar) === null || _0x3fd4d4 === undefined ? undefined : _0x3fd4d4.map(_0x20efad => _0x20efad.name).join(", "),
        "id": _0x17e05b.id,
        "artwork": (_0x99522 = _0x17e05b.al) === null || _0x99522 === undefined ? undefined : _0x99522.picUrl,
        "album": (_0x103470 = _0x17e05b.al) === null || _0x103470 === undefined ? undefined : _0x103470.name,
        "rawLrcTxt": (_0x4b96ac = _0x17e05b.lyrics) === null || _0x4b96ac === undefined ? undefined : _0x4b96ac.join("\n")
      };
    })) !== null && _0x28e0cc !== undefined ? _0x28e0cc : [];
  return {
    "isEnd": _0x292f9b.result.songCount <= _0x3ef669 * pageSize,
    "data": _0x9aaead
  };
}
async function getArtistWorks(_0x530454, _0x54b74c, _0x531813) {
  const _0x16e3a2 = {
      "csrf_token": ""
    },
    _0x405b07 = getParamsAndEnc(JSON.stringify(_0x16e3a2)),
    _0x59ff1d = qs.stringify(_0x405b07),
    _0x5c1c76 = {
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
  if (_0x531813 === "music") {
    {
      const _0x39ce2d = (await (0, axios_1.default)({
        "method": "post",
        "url": "https://music.163.com/weapi/v1/artist/" + _0x530454.id + "?csrf_token=",
        "headers": _0x5c1c76,
        "data": _0x59ff1d
      })).data;
      return {
        "isEnd": true,
        "data": _0x39ce2d.hotSongs.map(formatMusicItem)
      };
    }
  } else {
    if (_0x531813 === "album") {
      {
        const _0x232765 = (await (0, axios_1.default)({
          "method": "post",
          "url": "https://music.163.com/weapi/artist/albums/" + _0x530454.id + "?csrf_token=",
          "headers": _0x5c1c76,
          "data": _0x59ff1d
        })).data;
        return {
          "isEnd": true,
          "data": _0x232765.hotAlbums.map(formatAlbumItem)
        };
      }
    }
  }
}
async function getTopListDetail(_0x4864cc) {
  const _0x4bcc87 = await getSheetMusicById(_0x4864cc.id);
  return Object.assign(Object.assign({}, _0x4864cc), {
    "musicList": _0x4bcc87
  });
}
async function getLyric(_0x35c95b) {
  const _0x39448e = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x4e2242 = {
      "id": _0x35c95b.id,
      "lv": -1,
      "tv": -1,
      "csrf_token": ""
    },
    _0x49ff63 = getParamsAndEnc(JSON.stringify(_0x4e2242)),
    _0x20e0d0 = qs.stringify(_0x49ff63),
    _0x22a29e = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://interface.music.163.com/weapi/song/lyric?csrf_token=",
      "headers": _0x39448e,
      "data": _0x20e0d0
    })).data;
  return {
    "rawLrc": _0x22a29e.lrc.lyric
  };
}
async function getMusicInfo(_0x2d2a23) {
  const _0x8ca0c8 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x187235 = {
      "id": _0x2d2a23.id,
      "ids": "[" + _0x2d2a23.id + "]"
    },
    _0x4cb948 = (await axios_1.get("http://music.163.com/api/song/detail", {
      "headers": _0x8ca0c8,
      "params": _0x187235
    })).data;
  return {
    "artwork": _0x4cb948.songs[0].album.picUrl
  };
}
async function getAlbumInfo(_0x57ad7f) {
  const _0x412804 = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    _0x8c36d5 = {
      "resourceType": 3,
      "resourceId": _0x57ad7f.id,
      "limit": 15,
      "csrf_token": ""
    },
    _0x206b43 = getParamsAndEnc(JSON.stringify(_0x8c36d5)),
    _0x2b2921 = qs.stringify(_0x206b43),
    _0xe1ba8e = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://interface.music.163.com/weapi/v1/album/" + _0x57ad7f.id + "?csrf_token=",
      "headers": _0x412804,
      "data": _0x2b2921
    })).data;
  return {
    "albumItem": {
      "description": _0xe1ba8e.album.description
    },
    "musicList": (_0xe1ba8e.songs || []).map(formatMusicItem)
  };
}
async function getValidMusicItems(_0x3bc5c1) {
  const _0x45cf01 = {
    "Referer": "https://y.music.163.com/",
    "Origin": "https://y.music.163.com/",
    "authority": "music.163.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  try {
    const _0xcee16d = (await axios_1.default.get("https://music.163.com/api/song/detail/?ids=[" + _0x3bc5c1.join(",") + "]", {
        "headers": _0x45cf01
      })).data,
      _0x2e3ec6 = _0xcee16d.songs.map(formatMusicItem);
    return _0x2e3ec6;
  } catch (_0x38514e) {
    console.error(_0x38514e);
    return [];
  }
}
async function getSheetMusicById(_0x358509) {
  const _0x5d53fa = {
      "Referer": "https://y.music.163.com/",
      "Origin": "https://y.music.163.com/",
      "authority": "music.163.com",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
    },
    _0x4d622f = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x358509 + "&n=5000", {
      "headers": _0x5d53fa
    })).data,
    _0x51bdd8 = _0x4d622f.playlist.trackIds.map(_0x327d73 => _0x327d73.id);
  let _0x384c1d = [],
    _0x19938b = 0;
  while (_0x19938b * 200 < _0x51bdd8.length) {
    {
      const _0x134035 = await getValidMusicItems(_0x51bdd8.slice(_0x19938b * 200, (_0x19938b + 1) * 200));
      _0x384c1d = _0x384c1d.concat(_0x134035);
      ++_0x19938b;
    }
  }
  return _0x384c1d;
}
async function importMusicSheet(_0xa4d3b8) {
  const _0x5e7130 = _0xa4d3b8.match(/(?:https:\/\/y\.music\.163.com\/m\/playlist\?id=([0-9]+))|(?:https?:\/\/music\.163\.com\/playlist\/([0-9]+)\/.*)|(?:https?:\/\/music.163.com(?:\/#)?\/playlist\?id=(\d+))|(?:^\s*(\d+)\s*$)/),
    _0x3c0f34 = _0x5e7130[1] || _0x5e7130[2] || _0x5e7130[3] || _0x5e7130[4];
  return getSheetMusicById(_0x3c0f34);
}
async function getTopLists() {
  const _0xb9e47c = await axios_1.default.get("https://music.163.com/discover/toplist", {
      "headers": {
        "referer": "https://music.163.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54"
      }
    }),
    _0x19695b = cheerio.load(_0xb9e47c.data),
    _0x12fe2e = _0x19695b(".n-minelst").children(),
    _0x4758a3 = [];
  let _0x47c358 = {};
  for (let _0x4b9c3d of _0x12fe2e) {
    if (_0x4b9c3d.tagName == "h2") _0x47c358.title && _0x4758a3.push(_0x47c358), _0x47c358 = {}, _0x47c358.title = _0x19695b(_0x4b9c3d).text(), _0x47c358.data = [];else {
      if (_0x4b9c3d.tagName === "ul") {
        {
          let _0x5910a3 = _0x19695b(_0x4b9c3d).children();
          _0x47c358.data = _0x5910a3.map((_0x124609, _0x4522a2) => {
            const _0x48ce24 = _0x19695b(_0x4522a2),
              _0x55bc15 = _0x48ce24.attr("data-res-id"),
              _0x5178ae = _0x48ce24.find("img").attr("src").replace(/(\.jpg\?).*/, ".jpg?param=800y800"),
              _0x5708f6 = _0x48ce24.find("p.name").text(),
              _0x533cd0 = _0x48ce24.find("p.s-fc4").text();
            return {
              "id": _0x55bc15,
              "coverImg": _0x5178ae,
              "title": _0x5708f6,
              "description": _0x533cd0
            };
          }).toArray();
        }
      }
    }
  }
  if (_0x47c358.title) {
    _0x4758a3.push(_0x47c358);
  }
  return _0x4758a3;
}
const qualityLevels = {
  "low": "standard",
  "standard": "exhigh",
  "high": "lossless",
  "super": "lossless"
};
async function getMediaSource(_0x5b741f, _0x1bd652) {
  const _0x252707 = (await axios_1.default.get("https://music.haitangw.cc/wy/wy.php?id=" + _0x5b741f.id + "&level=" + qualityLevels[_0x1bd652])).data;
  return {
    "url": _0x252707.data.url
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
  const _0x403663 = {
      "csrf_token": ""
    },
    _0x577117 = getParamsAndEnc(JSON.stringify(_0x403663)),
    _0x1a28f5 = qs.stringify(_0x577117),
    _0x3d2985 = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/playlist/catalogue",
      "headers": headers,
      "data": _0x1a28f5
    })).data,
    _0x1467a6 = _0x3d2985.categories,
    _0x4afa86 = {},
    _0x2eb128 = Object.entries(_0x1467a6).map(_0x405f0d => {
      const _0x363fdd = {
        "title": _0x405f0d[1],
        "data": []
      };
      _0x4afa86[_0x405f0d[0]] = _0x363fdd;
      return _0x363fdd;
    }),
    _0x2e0ded = [];
  _0x3d2985.sub.forEach(_0x1d65ec => {
    const _0x20d2b5 = {
      "id": _0x1d65ec.name,
      "title": _0x1d65ec.name
    };
    _0x1d65ec.hot && _0x2e0ded.push(_0x20d2b5);
    _0x4afa86[_0x1d65ec.category].data.push(_0x20d2b5);
  });
  return {
    "pinned": _0x2e0ded,
    "data": _0x2eb128
  };
}
async function getRecommendSheetsByTag(_0xedc3d7, _0x12b1cd) {
  const _0x57e64c = 20,
    _0x22de20 = {
      "cat": _0xedc3d7.id || "全部",
      "order": "hot",
      "limit": _0x57e64c,
      "offset": (_0x12b1cd - 1) * _0x57e64c,
      "total": true,
      "csrf_token": ""
    },
    _0x1a7a2f = getParamsAndEnc(JSON.stringify(_0x22de20)),
    _0x480552 = qs.stringify(_0x1a7a2f),
    _0x4b789a = (await (0, axios_1.default)({
      "method": "post",
      "url": "https://music.163.com/weapi/playlist/list",
      "headers": headers,
      "data": _0x480552
    })).data,
    _0x485668 = _0x4b789a.playlists.map(_0x1a252b => ({
      "id": _0x1a252b.id,
      "artist": _0x1a252b.creator.nickname,
      "title": _0x1a252b.name,
      "artwork": _0x1a252b.coverImgUrl,
      "playCount": _0x1a252b.playCount,
      "createUserId": _0x1a252b.userId,
      "createTime": _0x1a252b.createTime,
      "description": _0x1a252b.description
    }));
  return {
    "isEnd": !(_0x4b789a.more === true),
    "data": _0x485668
  };
}
async function getMusicSheetInfo(_0x3720ed, _0x5ceac6) {
  let _0x2f0a52 = _0x3720ed._trackIds;
  if (!_0x2f0a52) {
    {
      const _0x312692 = _0x3720ed.id,
        _0x3823d8 = {
          "Referer": "https://y.music.163.com/",
          "Origin": "https://y.music.163.com/",
          "authority": "music.163.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
        },
        _0x545ff4 = (await axios_1.default.get("https://music.163.com/api/v3/playlist/detail?id=" + _0x312692 + "&n=5000", {
          "headers": _0x3823d8
        })).data;
      _0x2f0a52 = _0x545ff4.playlist.trackIds.map(_0x5815fb => _0x5815fb.id);
    }
  }
  const _0x387fca = 40,
    _0x443eb6 = _0x2f0a52.slice((_0x5ceac6 - 1) * _0x387fca, _0x5ceac6 * _0x387fca),
    _0x332f21 = await getValidMusicItems(_0x443eb6);
  let _0x46f2ea = {};
  if (_0x5ceac6 <= 1) {
    _0x46f2ea = {
      "_trackIds": _0x2f0a52
    };
  }
  return Object.assign({
    "isEnd": _0x2f0a52.length <= _0x5ceac6 * _0x387fca,
    "musicList": _0x332f21
  }, _0x46f2ea);
}
module.exports = {
  "platform": "元力WY",
  "author": "公众号:科技长青&元力菌",
  "version": "1.1.0",
  "srcUrl": "https://13413.kstore.vip/yuanli/wy.js",
  "cacheControl": "no-store",
  "hints": {
    "importMusicSheet": ["网易云：APP点击分享，然后复制链接", "默认歌单无法导入，先新建一个空白歌单复制过去再导入新歌单即可"]
  },
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  async "search"(_0x7ea69e, _0x269528, _0xbe4f5) {
    if (_0xbe4f5 === "music") return await searchMusic(_0x7ea69e, _0x269528);
    if (_0xbe4f5 === "album") {
      return await searchAlbum(_0x7ea69e, _0x269528);
    }
    if (_0xbe4f5 === "artist") return await searchArtist(_0x7ea69e, _0x269528);
    if (_0xbe4f5 === "sheet") return await searchMusicSheet(_0x7ea69e, _0x269528);
    if (_0xbe4f5 === "lyric") {
      return await searchLyric(_0x7ea69e, _0x269528);
    }
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