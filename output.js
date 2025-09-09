//Tue Sep 09 2025 03:31:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  he = require("he"),
  pageSize = 30;
function artworkShort2Long(_0x1b91d9) {
  var _0xd5cad0;
  const _0x84c13 = (_0xd5cad0 = _0x1b91d9 === null || _0x1b91d9 === undefined ? undefined : _0x1b91d9.indexOf("/")) !== null && _0xd5cad0 !== undefined ? _0xd5cad0 : -1;
  return _0x84c13 !== -1 ? "https://img4.kuwo.cn/star/albumcover/1080" + _0x1b91d9.slice(_0x84c13) : undefined;
}
function formatMusicItem(_0x4f9e92) {
  return {
    "id": _0x4f9e92.MUSICRID.replace("MUSIC_", ""),
    "artwork": artworkShort2Long(_0x4f9e92.web_albumpic_short),
    "title": he.decode(_0x4f9e92.NAME || ""),
    "artist": he.decode(_0x4f9e92.ARTIST || ""),
    "album": he.decode(_0x4f9e92.ALBUM || ""),
    "albumId": _0x4f9e92.ALBUMID,
    "artistId": _0x4f9e92.ARTISTID,
    "formats": _0x4f9e92.FORMATS
  };
}
function formatAlbumItem(_0x137129) {
  var _0x2b38ec;
  return {
    "id": _0x137129.albumid,
    "artist": he.decode(_0x137129.artist || ""),
    "title": he.decode(_0x137129.name || ""),
    "artwork": (_0x2b38ec = _0x137129.img) !== null && _0x2b38ec !== undefined ? _0x2b38ec : artworkShort2Long(_0x137129.pic),
    "description": he.decode(_0x137129.info || ""),
    "date": _0x137129.pub,
    "artistId": _0x137129.artistid
  };
}
function formatArtistItem(_0x1bac77) {
  return {
    "id": _0x1bac77.ARTISTID,
    "avatar": _0x1bac77.hts_PICPATH,
    "name": he.decode(_0x1bac77.ARTIST || ""),
    "artistId": _0x1bac77.ARTISTID,
    "description": he.decode(_0x1bac77.desc || ""),
    "worksNum": _0x1bac77.SONGNUM
  };
}
function formatMusicSheet(_0x2888e0) {
  return {
    "id": _0x2888e0.playlistid,
    "title": he.decode(_0x2888e0.name || ""),
    "artist": he.decode(_0x2888e0.nickname || ""),
    "artwork": _0x2888e0.pic,
    "playCount": _0x2888e0.playcnt,
    "description": he.decode(_0x2888e0.intro || ""),
    "worksNum": _0x2888e0.songnum
  };
}
async function searchMusic(_0x231dc3, _0xe4f966) {
  const _0x88f7a0 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "client": "kt",
        "all": _0x231dc3,
        "pn": _0xe4f966 - 1,
        "rn": pageSize,
        "uid": 2574109560,
        "ver": "kwplayer_ar_8.5.4.2",
        "vipver": 1,
        "ft": "music",
        "cluster": 0,
        "strategy": 2012,
        "encoding": "utf8",
        "rformat": "json",
        "vermerge": 1,
        "mobi": 1
      }
    })).data,
    _0xd1be0b = _0x88f7a0.abslist.map(formatMusicItem);
  return {
    "isEnd": (+_0x88f7a0.PN + 1) * +_0x88f7a0.RN >= +_0x88f7a0.TOTAL,
    "data": _0xd1be0b
  };
}
async function searchAlbum(_0x490ce5, _0x21c0dc) {
  const _0x49d094 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "all": _0x490ce5,
        "ft": "album",
        "itemset": "web_2013",
        "client": "kt",
        "pn": _0x21c0dc - 1,
        "rn": pageSize,
        "rformat": "json",
        "encoding": "utf8",
        "pcjson": 1
      }
    })).data,
    _0x50b289 = _0x49d094.albumlist.map(formatAlbumItem);
  return {
    "isEnd": (+_0x49d094.PN + 1) * +_0x49d094.RN >= +_0x49d094.TOTAL,
    "data": _0x50b289
  };
}
async function searchArtist(_0x5883e1, _0x522fb7) {
  const _0x12305c = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "all": _0x5883e1,
        "ft": "artist",
        "itemset": "web_2013",
        "client": "kt",
        "pn": _0x522fb7 - 1,
        "rn": pageSize,
        "rformat": "json",
        "encoding": "utf8",
        "pcjson": 1
      }
    })).data,
    _0xc83bb = _0x12305c.abslist.map(formatArtistItem);
  return {
    "isEnd": (+_0x12305c.PN + 1) * +_0x12305c.RN >= +_0x12305c.TOTAL,
    "data": _0xc83bb
  };
}
async function searchMusicSheet(_0x42437a, _0x334820) {
  const _0x296517 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "all": _0x42437a,
        "ft": "playlist",
        "itemset": "web_2013",
        "client": "kt",
        "pn": _0x334820 - 1,
        "rn": pageSize,
        "rformat": "json",
        "encoding": "utf8",
        "pcjson": 1
      }
    })).data,
    _0x31cd09 = _0x296517.abslist.map(formatMusicSheet);
  return {
    "isEnd": (+_0x296517.PN + 1) * +_0x296517.RN >= +_0x296517.TOTAL,
    "data": _0x31cd09
  };
}
async function getArtistMusicWorks(_0x2121b9, _0x1439ba) {
  const _0x5b997d = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "pn": _0x1439ba - 1,
        "rn": pageSize,
        "artistid": _0x2121b9.id,
        "stype": "artist2music",
        "sortby": 0,
        "alflac": 1,
        "show_copyright_off": 1,
        "pcmp4": 1,
        "encoding": "utf8",
        "plat": "pc",
        "thost": "search.kuwo.cn",
        "vipver": "MUSIC_9.1.1.2_BCS2",
        "devid": "38668888",
        "newver": 1,
        "pcjson": 1
      }
    })).data,
    _0x2decef = _0x5b997d.musiclist.map(_0x2b2928 => {
      return {
        "id": _0x2b2928.musicrid,
        "artwork": artworkShort2Long(_0x2b2928.web_albumpic_short),
        "title": he.decode(_0x2b2928.name || ""),
        "artist": he.decode(_0x2b2928.artist || ""),
        "album": he.decode(_0x2b2928.album || ""),
        "albumId": _0x2b2928.albumid,
        "artistId": _0x2b2928.artistid,
        "formats": _0x2b2928.formats
      };
    });
  return {
    "isEnd": (+_0x5b997d.pn + 1) * pageSize >= +_0x5b997d.total,
    "data": _0x2decef
  };
}
async function getArtistAlbumWorks(_0x1f6180, _0x4d6809) {
  const _0x237a96 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "pn": _0x4d6809 - 1,
        "rn": pageSize,
        "artistid": _0x1f6180.id,
        "stype": "albumlist",
        "sortby": 1,
        "alflac": 1,
        "show_copyright_off": 1,
        "pcmp4": 1,
        "encoding": "utf8",
        "plat": "pc",
        "thost": "search.kuwo.cn",
        "vipver": "MUSIC_9.1.1.2_BCS2",
        "devid": "38668888",
        "newver": 1,
        "pcjson": 1
      }
    })).data,
    _0x599673 = _0x237a96.albumlist.map(formatAlbumItem);
  return {
    "isEnd": (+_0x237a96.pn + 1) * pageSize >= +_0x237a96.total,
    "data": _0x599673
  };
}
async function getArtistWorks(_0xc1466c, _0x5bc753, _0x7efbc8) {
  if (_0x7efbc8 === "music") {
    return getArtistMusicWorks(_0xc1466c, _0x5bc753);
  } else {
    if (_0x7efbc8 === "album") return getArtistAlbumWorks(_0xc1466c, _0x5bc753);
  }
}
async function getLyric(_0xb4b44a) {
  const _0xbd2451 = (await axios_1.default.get("http://m.kuwo.cn/newh5/singles/songinfoandlrc", {
      "params": {
        "musicId": _0xb4b44a.id,
        "httpStatus": 1
      }
    })).data,
    _0x3d5ab5 = _0xbd2451.data.lrclist;
  return {
    "rawLrc": _0x3d5ab5.map(_0x460f32 => "[" + _0x460f32.time + "]" + _0x460f32.lineLyric).join("\n")
  };
}
async function getAlbumInfo(_0x1427fd) {
  const _0x11e2d4 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "pn": 0,
        "rn": 100,
        "albumid": _0x1427fd.id,
        "stype": "albuminfo",
        "sortby": 0,
        "alflac": 1,
        "show_copyright_off": 1,
        "pcmp4": 1,
        "encoding": "utf8",
        "plat": "pc",
        "thost": "search.kuwo.cn",
        "vipver": "MUSIC_9.1.1.2_BCS2",
        "devid": "38668888",
        "newver": 1,
        "pcjson": 1
      }
    })).data,
    _0x42d80c = _0x11e2d4.musiclist.map(_0x5b7a08 => {
      {
        var _0x3b0a27;
        return {
          "id": _0x5b7a08.id,
          "artwork": (_0x3b0a27 = _0x1427fd.artwork) !== null && _0x3b0a27 !== undefined ? _0x3b0a27 : _0x11e2d4.img,
          "title": he.decode(_0x5b7a08.name || ""),
          "artist": he.decode(_0x5b7a08.artist || ""),
          "album": he.decode(_0x5b7a08.album || ""),
          "albumId": _0x1427fd.id,
          "artistId": _0x5b7a08.artistid,
          "formats": _0x5b7a08.formats
        };
      }
    });
  return {
    "musicList": _0x42d80c
  };
}
async function getTopLists() {
  const _0x260b10 = (await axios_1.default.get("http://wapi.kuwo.cn/api/pc/bang/list")).data.child;
  return _0x260b10.map(_0x3d14b6 => ({
    "title": _0x3d14b6.disname,
    "data": _0x3d14b6.child.map(_0x2c0749 => {
      {
        var _0x5caad0, _0x5ea00c;
        return {
          "id": _0x2c0749.sourceid,
          "coverImg": (_0x5ea00c = (_0x5caad0 = _0x2c0749.pic5) !== null && _0x5caad0 !== undefined ? _0x5caad0 : _0x2c0749.pic2) !== null && _0x5ea00c !== undefined ? _0x5ea00c : _0x2c0749.pic,
          "title": _0x2c0749.name,
          "description": _0x2c0749.intro
        };
      }
    })
  }));
}
async function getTopListDetail(_0x18242f) {
  const _0x424f31 = await axios_1.default.get("http://kbangserver.kuwo.cn/ksong.s", {
    "params": {
      "from": "pc",
      "fmt": "json",
      "pn": 0,
      "rn": 80,
      "type": "bang",
      "data": "content",
      "id": _0x18242f.id,
      "show_copyright_off": 0,
      "pcmp4": 1,
      "isbang": 1,
      "userid": 0,
      "httpStatus": 1
    }
  });
  return Object.assign(Object.assign({}, _0x18242f), {
    "musicList": _0x424f31.data.musiclist.map(_0x2a2635 => {
      return {
        "id": _0x2a2635.id,
        "title": he.decode(_0x2a2635.name || ""),
        "artist": he.decode(_0x2a2635.artist || ""),
        "album": he.decode(_0x2a2635.album || ""),
        "albumId": _0x2a2635.albumid,
        "artistId": _0x2a2635.artistid,
        "formats": _0x2a2635.formats
      };
    })
  });
}
async function getMusicSheetResponseById(_0x4daa8c, _0x56ceba, _0x2e3cbd = 50) {
  return (await axios_1.default.get("http://nplserver.kuwo.cn/pl.svc", {
    "params": {
      "op": "getlistinfo",
      "pid": _0x4daa8c,
      "pn": _0x56ceba - 1,
      "rn": _0x2e3cbd,
      "encode": "utf8",
      "keyset": "pl2012",
      "vipver": "MUSIC_9.1.1.2_BCS2",
      "newver": 1
    }
  })).data;
}
async function importMusicSheet(_0x2b96a6) {
  var _0x5dea39, _0x1c184d;
  let _0x2f2fab;
  !_0x2f2fab && (_0x2f2fab = (_0x5dea39 = _0x2b96a6.match(/https?:\/\/www\/kuwo\.cn\/playlist_detail\/(\d+)/)) === null || _0x5dea39 === undefined ? undefined : _0x5dea39[1]);
  !_0x2f2fab && (_0x2f2fab = (_0x1c184d = _0x2b96a6.match(/https?:\/\/m\.kuwo\.cn\/h5app\/playlist\/(\d+)/)) === null || _0x1c184d === undefined ? undefined : _0x1c184d[1]);
  if (!_0x2f2fab) {
    _0x2f2fab = _0x2b96a6.match(/^\s*(\d+)\s*$/);
  }
  if (!_0x2f2fab) return;
  let _0x54af4e = 1,
    _0x468291 = 30,
    _0x4fe928 = [];
  while (_0x54af4e < _0x468291) {
    try {
      const _0x2d6118 = await getMusicSheetResponseById(_0x2f2fab, _0x54af4e, 80);
      _0x468291 = Math.ceil(_0x2d6118.total / 80);
      isNaN(_0x468291) && (_0x468291 = 1);
      _0x4fe928 = _0x4fe928.concat(_0x2d6118.musicList.map(_0xdfab1c => ({
        "id": _0xdfab1c.id,
        "title": he.decode(_0xdfab1c.name || ""),
        "artist": he.decode(_0xdfab1c.artist || ""),
        "album": he.decode(_0xdfab1c.album || ""),
        "albumId": _0xdfab1c.albumid,
        "artistId": _0xdfab1c.artistid,
        "formats": _0xdfab1c.formats
      })));
    } catch (_0x15600b) {}
    await new Promise(_0x10b57e => {
      setTimeout(() => {
        _0x10b57e();
      }, 200 + Math.random() * 100);
    });
    ++_0x54af4e;
  }
  return _0x4fe928;
}
async function getRecommendSheetTags() {
  const _0x3a336d = (await axios_1.default.get("http://wapi.kuwo.cn/api/pc/classify/playlist/getTagList?cmd=rcm_keyword_playlist&user=0&prod=kwplayer_pc_9.0.5.0&vipver=9.0.5.0&source=kwplayer_pc_9.0.5.0&loginUid=0&loginSid=0&appUid=76039576")).data.data,
    _0x182aa6 = _0x3a336d.map(_0x4ba3be => ({
      "title": _0x4ba3be.name,
      "data": _0x4ba3be.data.map(_0x545407 => ({
        "id": _0x545407.id,
        "digest": _0x545407.digest,
        "title": _0x545407.name
      }))
    })).filter(_0x4cdfd6 => _0x4cdfd6.data.length),
    _0x825463 = [{
      "id": "1848",
      "title": "ç¿»å”±",
      "digest": "10000"
    }, {
      "id": "621",
      "title": "ç½‘ç»œ",
      "digest": "10000"
    }, {
      "title": "ä¼¤æ„Ÿ",
      "digest": "10000",
      "id": "146"
    }, {
      "title": "æ¬§ç¾Ž",
      "digest": "10000",
      "id": "35"
    }];
  return {
    "data": _0x182aa6,
    "pinned": _0x825463
  };
}
async function getRecommendSheetsByTag(_0x265d93, _0x5009e1) {
  const _0x2fe014 = 20;
  let _0x5d66ff;
  if (_0x265d93.id) {
    if (_0x265d93.digest === "10000") _0x5d66ff = (await axios_1.default.get("http://wapi.kuwo.cn/api/pc/classify/playlist/getTagPlayList?loginUid=0&loginSid=0&appUid=76039576&pn=" + (_0x5009e1 - 1) + "&id=" + _0x265d93.id + "&rn=" + _0x2fe014)).data.data;else {
      {
        let _0x50f79a = (await axios_1.default.get("http://mobileinterfaces.kuwo.cn/er.s?type=get_pc_qz_data&f=web&id=" + _0x265d93.id + "&prod=pc")).data;
        _0x5d66ff = {
          "total": 0,
          "data": _0x50f79a.reduce((_0x350016, _0x13e1b6) => [..._0x350016, ..._0x13e1b6.list])
        };
      }
    }
  } else _0x5d66ff = (await axios_1.default.get("https://wapi.kuwo.cn/api/pc/classify/playlist/getRcmPlayList?loginUid=0&loginSid=0&appUid=76039576&&pn=" + (_0x5009e1 - 1) + "&rn=" + _0x2fe014 + "&order=hot")).data.data;
  const _0x103422 = _0x5009e1 * _0x2fe014 >= _0x5d66ff.total;
  return {
    "isEnd": _0x103422,
    "data": _0x5d66ff.data.map(_0x1b19a3 => ({
      "title": _0x1b19a3.name,
      "artist": _0x1b19a3.uname,
      "id": _0x1b19a3.id,
      "artwork": _0x1b19a3.img,
      "playCount": _0x1b19a3.listencnt,
      "createUserId": _0x1b19a3.uid
    }))
  };
}
async function getMusicSheetInfo(_0x385f14, _0x54d775) {
  const _0x47709b = await getMusicSheetResponseById(_0x385f14.id, _0x54d775, pageSize);
  return {
    "isEnd": _0x54d775 * pageSize >= _0x47709b.total,
    "musicList": _0x47709b.musiclist.map(_0x2aa9d7 => ({
      "id": _0x2aa9d7.id,
      "title": he.decode(_0x2aa9d7.name || ""),
      "artist": he.decode(_0x2aa9d7.artist || ""),
      "album": he.decode(_0x2aa9d7.album || ""),
      "albumId": _0x2aa9d7.albumid,
      "artistId": _0x2aa9d7.artistid,
      "formats": _0x2aa9d7.formats
    }))
  };
}
const qualityLevels = {
  "low": "exhigh",
  "standard": "exhigh",
  "high": "lossless",
  "super": "lossless"
};
async function getMediaSource(_0x3448a7, _0x596f0d) {
  const _0x1f3686 = (await axios_1.default.get("https://music.haitangw.cc/music/kw.php?id=" + _0x3448a7.id + "&level=" + qualityLevels[_0x596f0d])).data;
  return {
    "url": _0x1f3686.data.url
  };
}
async function getMusicInfo(_0x2062f6) {
  const _0x113507 = (await axios_1.default.get("http://m.kuwo.cn/newh5/singles/songinfoandlrc", {
      "params": {
        "musicId": _0x2062f6.id,
        "httpStatus": 1
      }
    })).data,
    _0x126bec = _0x113507.data.songinfo.pic;
  let _0x11f031;
  if (_0x126bec.includes("starheads/")) _0x11f031 = _0x126bec.replace(/starheads\/\d+/, "starheads/800");else {
    if (_0x126bec.includes("albumcover/")) {
      _0x11f031 = _0x126bec.replace(/albumcover\/\d+/, "albumcover/800");
    }
  }
  return {
    "artwork": _0x11f031
  };
}
module.exports = {
  "platform": "元力KW",
  "author": "公众号:科技长青",
  "version": "0.1.0",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "http://music.haitangw.net/cqapi/kw.js",
  "cacheControl": "no-cache",
  "hints": {
    "importMusicSheet": ["酷我APP：自建歌单-分享-复制试听链接，直接粘贴即可", "H5：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "å¯¼å…¥æ—¶é—´å’Œæ­Œå•å¤§å°æœ‰å…³ï¼Œè¯·è€å¿ƒç­‰å¾…"]
  },
  "supportedSearchType": ["music", "album", "sheet", "artist"],
  async "search"(_0x5d666b, _0x453f28, _0x17c4bd) {
    if (_0x17c4bd === "music") return await searchMusic(_0x5d666b, _0x453f28);
    if (_0x17c4bd === "album") return await searchAlbum(_0x5d666b, _0x453f28);
    if (_0x17c4bd === "artist") return await searchArtist(_0x5d666b, _0x453f28);
    if (_0x17c4bd === "sheet") return await searchMusicSheet(_0x5d666b, _0x453f28);
  },
  "getMediaSource": getMediaSource,
  "getMusicInfo": getMusicInfo,
  "getAlbumInfo": getAlbumInfo,
  "getLyric": getLyric,
  "getArtistWorks": getArtistWorks,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "importMusicSheet": importMusicSheet,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getRecommendSheetsByTag": getRecommendSheetsByTag,
  "getMusicSheetInfo": getMusicSheetInfo
};