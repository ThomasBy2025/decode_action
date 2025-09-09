//Tue Sep 09 2025 03:40:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  cheerio_1 = require("cheerio"),
  CryptoJs = require("crypto-js"),
  he = require("he"),
  pageSize = 20;
function formatMusicItem(_0x5d1501) {
  var _0x6e6498, _0x37cc27, _0x1290bf, _0x18fb19, _0x3d7024, _0x51ef76, _0x5d91c6, _0x239319, _0x5ed56c;
  return {
    "id": (_0x18fb19 = _0x5d1501.FileHash) !== null && _0x18fb19 !== undefined ? _0x18fb19 : _0x5d1501.Grp[0].FileHash,
    "title": (_0x6e6498 = _0x5d1501.SongName) !== null && _0x6e6498 !== undefined ? _0x6e6498 : _0x5d1501.OriSongName,
    "artist": (_0x37cc27 = _0x5d1501.SingerName) !== null && _0x37cc27 !== undefined ? _0x37cc27 : _0x5d1501.Singers[0].name,
    "album": (_0x1290bf = _0x5d1501.AlbumName) !== null && _0x1290bf !== undefined ? _0x1290bf : _0x5d1501.Grp[0].AlbumName,
    "album_id": (_0x3d7024 = _0x5d1501.AlbumID) !== null && _0x3d7024 !== undefined ? _0x3d7024 : _0x5d1501.Grp[0].AlbumID,
    "album_audio_id": 0,
    "duration": _0x5d1501.Duration,
    "artwork": ((_0x51ef76 = _0x5d1501.Image) !== null && _0x51ef76 !== undefined ? _0x51ef76 : _0x5d1501.Grp[0].Image).replace("{size}", "1080"),
    "320hash": (_0x5ed56c = _0x5d1501.HQFileHash) !== null && _0x5ed56c !== undefined ? _0x5ed56c : undefined,
    "sqhash": (_0x5d91c6 = _0x5d1501.SQFileHash) !== null && _0x5d91c6 !== undefined ? _0x5d91c6 : undefined,
    "ResFileHash": (_0x239319 = _0x5d1501.ResFileHash) !== null && _0x239319 !== undefined ? _0x239319 : undefined
  };
}
function formatMusicItem2(_0x2df23b) {
  var _0x5ac1ea, _0x5393d0, _0x11377e, _0x17a522, _0x109b2e, _0x4fa6a4, _0x21ecdf;
  return {
    "id": _0x2df23b.hash,
    "title": _0x2df23b.songname,
    "artist": (_0x5ac1ea = _0x2df23b.singername) !== null && _0x5ac1ea !== undefined ? _0x5ac1ea : ((_0x11377e = (_0x5393d0 = _0x2df23b.authors) === null || _0x5393d0 === undefined ? undefined : _0x5393d0.map(_0x490e5a => {
      var _0x2ec7b1;
      return (_0x2ec7b1 = _0x490e5a === null || _0x490e5a === undefined ? undefined : _0x490e5a.author_name) !== null && _0x2ec7b1 !== undefined ? _0x2ec7b1 : "";
    })) === null || _0x11377e === undefined ? undefined : _0x11377e.join(", ")) || ((_0x4fa6a4 = (_0x109b2e = (_0x17a522 = _0x2df23b.filename) === null || _0x17a522 === undefined ? undefined : _0x17a522.split("-")) === null || _0x109b2e === undefined ? undefined : _0x109b2e[0]) === null || _0x4fa6a4 === undefined ? undefined : _0x4fa6a4.trim()),
    "album": (_0x21ecdf = _0x2df23b.album_name) !== null && _0x21ecdf !== undefined ? _0x21ecdf : _0x2df23b.remark,
    "album_id": _0x2df23b.album_id,
    "album_audio_id": _0x2df23b.album_audio_id,
    "artwork": _0x2df23b.album_sizable_cover ? _0x2df23b.album_sizable_cover.replace("{size}", "400") : undefined,
    "duration": _0x2df23b.duration,
    "320hash": _0x2df23b["320hash"],
    "sqhash": _0x2df23b.sqhash,
    "origin_hash": _0x2df23b.origin_hash
  };
}
function formatImportMusicItem(_0x908190) {
  var _0x589448, _0xf7e1fc, _0x463141, _0x1ab8ad, _0x5c47ae, _0x17c001, _0x19b03a;
  let _0x2b0027 = _0x908190.name;
  const _0x4344b6 = _0x908190.singername;
  if (_0x4344b6 && _0x2b0027) {
    const _0x3b2f59 = _0x2b0027.indexOf(_0x4344b6);
    _0x3b2f59 !== -1 && (_0x2b0027 = (_0x589448 = _0x2b0027.substring(_0x3b2f59 + _0x4344b6.length + 2)) === null || _0x589448 === undefined ? undefined : _0x589448.trim());
    !_0x2b0027 && (_0x2b0027 = _0x4344b6);
  }
  const _0x1b8fba = _0x908190.relate_goods;
  return {
    "id": _0x908190.hash,
    "title": _0x2b0027,
    "artist": _0x4344b6,
    "album": (_0xf7e1fc = _0x908190.albumname) !== null && _0xf7e1fc !== undefined ? _0xf7e1fc : "",
    "album_id": _0x908190.album_id,
    "album_audio_id": _0x908190.album_audio_id,
    "artwork": (_0x1ab8ad = (_0x463141 = _0x908190 === null || _0x908190 === undefined ? undefined : _0x908190.info) === null || _0x463141 === undefined ? undefined : _0x463141.image) === null || _0x1ab8ad === undefined ? undefined : _0x1ab8ad.replace("{size}", "400"),
    "320hash": (_0x5c47ae = _0x1b8fba === null || _0x1b8fba === undefined ? undefined : _0x1b8fba[1]) === null || _0x5c47ae === undefined ? undefined : _0x5c47ae.hash,
    "sqhash": (_0x17c001 = _0x1b8fba === null || _0x1b8fba === undefined ? undefined : _0x1b8fba[2]) === null || _0x17c001 === undefined ? undefined : _0x17c001.hash,
    "origin_hash": (_0x19b03a = _0x1b8fba === null || _0x1b8fba === undefined ? undefined : _0x1b8fba[3]) === null || _0x19b03a === undefined ? undefined : _0x19b03a.hash
  };
}
const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "zh-CN,zh;q=0.9"
};
async function searchMusic(_0x1b11a3, _0x5e8aa8) {
  const _0xcc5a6a = (await axios_1.default.get("https://songsearch.kugou.com/song_search_v2", {
      "headers": headers,
      "params": {
        "keyword": _0x1b11a3,
        "page": _0x5e8aa8,
        "pagesize": pageSize,
        "userid": 0,
        "clientver": "",
        "platform": "WebFilter",
        "filter": 2,
        "iscorrection": 1,
        "privilege_filter": 0,
        "area_code": 1
      }
    })).data,
    _0x9177cc = _0xcc5a6a.data.lists.map(formatMusicItem);
  return {
    "isEnd": _0x5e8aa8 * pageSize >= _0xcc5a6a.data.total,
    "data": _0x9177cc
  };
}
async function searchAlbum(_0x4e22ce, _0x13b348) {
  const _0x5096f8 = (await axios_1.default.get("http://msearch.kugou.com/api/v3/search/album", {
      "headers": headers,
      "params": {
        "version": 9108,
        "iscorrection": 1,
        "highlight": "em",
        "plat": 0,
        "keyword": _0x4e22ce,
        "pagesize": 20,
        "page": _0x13b348,
        "sver": 2,
        "with_res_tag": 0
      }
    })).data,
    _0x215eff = _0x5096f8.data.info.map(_0x3310c2 => {
      var _0x1dcf9c, _0xf8d2c9;
      return {
        "id": _0x3310c2.albumid,
        "artwork": (_0x1dcf9c = _0x3310c2.imgurl) === null || _0x1dcf9c === undefined ? undefined : _0x1dcf9c.replace("{size}", "400"),
        "artist": _0x3310c2.singername,
        "title": (0, cheerio_1.load)(_0x3310c2.albumname).text(),
        "description": _0x3310c2.intro,
        "date": (_0xf8d2c9 = _0x3310c2.publishtime) === null || _0xf8d2c9 === undefined ? undefined : _0xf8d2c9.slice(0, 10)
      };
    });
  return {
    "isEnd": _0x13b348 * 20 >= _0x5096f8.data.total,
    "data": _0x215eff
  };
}
async function searchMusicSheet(_0x182495, _0x52f025) {
  const _0x557ede = (await axios_1.default.get("http://mobilecdn.kugou.com/api/v3/search/special", {
      "headers": headers,
      "params": {
        "format": "json",
        "keyword": _0x182495,
        "page": _0x52f025,
        "pagesize": pageSize,
        "showtype": 1
      }
    })).data,
    _0x1f68dc = _0x557ede.data.info.map(_0x164293 => ({
      "title": _0x164293.specialname,
      "createAt": _0x164293.publishtime,
      "description": _0x164293.intro,
      "artist": _0x164293.nickname,
      "coverImg": _0x164293.imgurl,
      "gid": _0x164293.gid,
      "playCount": _0x164293.playcount,
      "id": _0x164293.specialid,
      "worksNum": _0x164293.songcount
    }));
  return {
    "isEnd": _0x52f025 * pageSize >= _0x557ede.data.total,
    "data": _0x1f68dc
  };
}
const qualityLevels = {
  "low": "standard",
  "standard": "exhigh",
  "high": "lossless",
  "super": "hires"
};
async function getMediaSource(_0x349135, _0x5815d3) {
  const _0x2d3600 = (await axios_1.default.get("https://musicapi.haitangw.net/music/kg_song_kw.php?id=" + _0x349135.id + "&type=json&level=" + qualityLevels[_0x5815d3])).data;
  return {
    "url": _0x2d3600.data.url
  };
}
async function getTopLists() {
  const _0x27a16e = (await axios_1.default.get("http://mobilecdnbj.kugou.com/api/v3/rank/list?version=9108&plat=0&showtype=2&parentid=0&apiver=6&area_code=1&withsong=0&with_res_tag=0", {
      "headers": headers
    })).data.data.info,
    _0x40c0c = [{
      "title": "热门榜单",
      "data": []
    }, {
      "title": "ç‰¹è‰²éŸ³ä¹æ¦œ",
      "data": []
    }, {
      "title": "全球榜",
      "data": []
    }],
    _0x582ede = {
      "title": "å…¶ä»–",
      "data": []
    };
  _0x27a16e.forEach(_0x439734 => {
    var _0x5d2052, _0x1e5f83, _0x5dfaae, _0xc0354f;
    if (_0x439734.classify === 1 || _0x439734.classify === 2) _0x40c0c[0].data.push({
      "id": _0x439734.rankid,
      "description": _0x439734.intro,
      "coverImg": (_0x5d2052 = _0x439734.imgurl) === null || _0x5d2052 === undefined ? undefined : _0x5d2052.replace("{size}", "400"),
      "title": _0x439734.rankname
    });else {
      if (_0x439734.classify === 3 || _0x439734.classify === 5) _0x40c0c[1].data.push({
        "id": _0x439734.rankid,
        "description": _0x439734.intro,
        "coverImg": (_0x1e5f83 = _0x439734.imgurl) === null || _0x1e5f83 === undefined ? undefined : _0x1e5f83.replace("{size}", "400"),
        "title": _0x439734.rankname
      });else _0x439734.classify === 4 ? _0x40c0c[2].data.push({
        "id": _0x439734.rankid,
        "description": _0x439734.intro,
        "coverImg": (_0x5dfaae = _0x439734.imgurl) === null || _0x5dfaae === undefined ? undefined : _0x5dfaae.replace("{size}", "400"),
        "title": _0x439734.rankname
      }) : _0x582ede.data.push({
        "id": _0x439734.rankid,
        "description": _0x439734.intro,
        "coverImg": (_0xc0354f = _0x439734.imgurl) === null || _0xc0354f === undefined ? undefined : _0xc0354f.replace("{size}", "400"),
        "title": _0x439734.rankname
      });
    }
  });
  _0x582ede.data.length !== 0 && _0x40c0c.push(_0x582ede);
  return _0x40c0c;
}
async function getTopListDetail(_0x154c49) {
  const _0x502b83 = await axios_1.default.get("http://mobilecdnbj.kugou.com/api/v3/rank/song?version=9108&ranktype=0&plat=0&pagesize=100&area_code=1&page=1&volid=35050&rankid=" + _0x154c49.id + "&with_res_tag=0", {
    "headers": headers
  });
  return Object.assign(Object.assign({}, _0x154c49), {
    "musicList": _0x502b83.data.data.info.map(formatMusicItem2)
  });
}
async function getLyricDownload(_0x168e7f) {
  const _0x42b3a1 = (await (0, axios_1.default)({
    "url": "http://lyrics.kugou.com/download?ver=1&client=pc&id=" + _0x168e7f.id + "&accesskey=" + _0x168e7f.accessKey + "&fmt=lrc&charset=utf8",
    "headers": {
      "KG-RC": 1,
      "KG-THash": "expand_search_manager.cpp:852736169:451",
      "User-Agent": "KuGou2012-9020-ExpandSearchManager"
    },
    "method": "get",
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return {
    "rawLrc": he.decode(CryptoJs.enc.Base64.parse(_0x42b3a1.content).toString(CryptoJs.enc.Utf8))
  };
}
async function getLyric(_0xe523de) {
  const _0x24ec80 = (await (0, axios_1.default)({
      "url": "http://lyrics.kugou.com/search?ver=1&man=yes&client=pc&keyword=" + _0xe523de.title + "&hash=" + _0xe523de.id + "&timelength=" + _0xe523de.duration,
      "headers": {
        "KG-RC": 1,
        "KG-THash": "expand_search_manager.cpp:852736169:451",
        "User-Agent": "KuGou2012-9020-ExpandSearchManager"
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x1c8305 = _0x24ec80.candidates[0];
  return await getLyricDownload({
    "id": _0x1c8305.id,
    "accessKey": _0x1c8305.accesskey
  });
}
async function getAlbumInfo(_0x44b1a3, _0x4a51d4 = 1) {
  const _0x5c8b14 = (await axios_1.default.get("http://mobilecdn.kugou.com/api/v3/album/song", {
    "params": {
      "version": 9108,
      "albumid": _0x44b1a3.id,
      "plat": 0,
      "pagesize": 100,
      "area_code": 1,
      "page": _0x4a51d4,
      "with_res_tag": 0
    }
  })).data;
  return {
    "isEnd": _0x4a51d4 * 100 >= _0x5c8b14.data.total,
    "albumItem": {
      "worksNum": _0x5c8b14.data.total
    },
    "musicList": _0x5c8b14.data.info.map(_0x454fbe => {
      var _0x4c5c8a;
      const [_0x5d1458, _0x15d93c] = _0x454fbe.filename.split("-");
      return {
        "id": _0x454fbe.hash,
        "title": _0x15d93c.trim(),
        "artist": _0x5d1458.trim(),
        "album": (_0x4c5c8a = _0x454fbe.album_name) !== null && _0x4c5c8a !== undefined ? _0x4c5c8a : _0x454fbe.remark,
        "album_id": _0x454fbe.album_id,
        "album_audio_id": _0x454fbe.album_audio_id,
        "artwork": _0x44b1a3.artwork,
        "320hash": _0x454fbe.HQFileHash,
        "sqhash": _0x454fbe.SQFileHash,
        "origin_hash": _0x454fbe.id
      };
    })
  };
}
async function importMusicSheet(_0x56ea83) {
  var _0x1fa4cb;
  let _0x1e89b8 = (_0x1fa4cb = _0x56ea83.match(/^(?:.*?)(\d+)(?:.*?)$/)) === null || _0x1fa4cb === undefined ? undefined : _0x1fa4cb[1],
    _0x1b4b33 = [];
  if (!_0x1e89b8) return;
  let _0x5608cf = await axios_1.default.post("http://t.kugou.com/command/", {
    "appid": 1001,
    "clientver": 9020,
    "mid": "21511157a05844bd085308bc76ef3343",
    "clienttime": 640612895,
    "key": "36164c4015e704673c588ee202b9ecb8",
    "data": _0x1e89b8
  });
  if (_0x5608cf.status === 200 && _0x5608cf.data.status === 1) {
    {
      let _0x18118a = _0x5608cf.data.data,
        _0x29fa41 = await axios_1.default.post("http://www2.kugou.kugou.com/apps/kucodeAndShare/app/", {
          "appid": 1001,
          "clientver": 10112,
          "mid": "70a02aad1ce4648e7dca77f2afa7b182",
          "clienttime": 722219501,
          "key": "381d7062030e8a5a94cfbe50bfe65433",
          "data": {
            "id": _0x18118a.info.id,
            "type": 3,
            "userid": _0x18118a.info.userid,
            "collect_type": _0x18118a.info.collect_type,
            "page": 1,
            "pagesize": _0x18118a.info.count
          }
        });
      if (_0x29fa41.status === 200 && _0x29fa41.data.status === 1) {
        {
          let _0xf10d42 = [];
          _0x29fa41.data.data.forEach(_0x336da1 => {
            _0xf10d42.push({
              "album_audio_id": 0,
              "album_id": "0",
              "hash": _0x336da1.hash,
              "id": 0,
              "name": _0x336da1.filename.replace(".mp3", ""),
              "page_id": 0,
              "type": "audio"
            });
          });
          let _0x54875f = {
            "appid": 1001,
            "area_code": "1",
            "behavior": "play",
            "clientver": "10112",
            "dfid": "2O3jKa20Gdks0LWojP3ly7ck",
            "mid": "70a02aad1ce4648e7dca77f2afa7b182",
            "need_hash_offset": 1,
            "relate": 1,
            "resource": _0xf10d42,
            "token": "",
            "userid": "0",
            "vip": 0
          };
          var _0x512e2d = await axios_1.default.post("https://gateway.kugou.com/v2/get_res_privilege/lite?appid=1001&clienttime=1668883879&clientver=10112&dfid=2O3jKa20Gdks0LWojP3ly7ck&mid=70a02aad1ce4648e7dca77f2afa7b182&userid=390523108&uuid=92691C6246F86F28B149BAA1FD370DF1", _0x54875f, {
            "headers": {
              "x-router": "media.store.kugou.com"
            }
          });
          _0x29fa41.status === 200 && _0x29fa41.data.status === 1 && (_0x1b4b33 = _0x512e2d.data.data.map(formatImportMusicItem));
        }
      }
    }
  }
  return _0x1b4b33;
}
module.exports = {
  "platform": "元力KG",
  "version": "0.1.0",
  "author": "公众号:科技长青",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "http://music.haitangw.net/cqapi/kg.js",
  "cacheControl": "no-cache",
  "description": "",
  "primaryKey": ["id", "album_id", "album_audio_id"],
  "hints": {
    "importMusicSheet": ["仅支持酷狗APP通过酷狗码导入，输入纯数字酷狗码即可。", "导入时间和歌单大小有关，请耐心等待"]
  },
  "supportedSearchType": ["music", "album", "sheet"],
  async "search"(_0x1bd84a, _0x146ead, _0x350e36) {
    if (_0x350e36 === "music") {
      return await searchMusic(_0x1bd84a, _0x146ead);
    } else {
      if (_0x350e36 === "album") return await searchAlbum(_0x1bd84a, _0x146ead);else {
        if (_0x350e36 === "sheet") return await searchMusicSheet(_0x1bd84a, _0x146ead);
      }
    }
  },
  "getMediaSource": getMediaSource,
  "getTopLists": getTopLists,
  "getLyric": getLyric,
  "getTopListDetail": getTopListDetail,
  "getAlbumInfo": getAlbumInfo,
  "importMusicSheet": importMusicSheet
};