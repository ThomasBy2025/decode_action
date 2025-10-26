//Sun Oct 26 2025 00:54:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const API_URL = "http://103.217.184.26:9000",
  API_KEY = "",
  UPDATE_URL = "http://127.0.0.1";
"use strict";
Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  he = require("he"),
  pageSize = 30;
function artworkShort2Long(_0x1d4cd0) {
  var _0x42a22;
  const _0x46dbf8 = (_0x42a22 = _0x1d4cd0 === null || _0x1d4cd0 === undefined ? undefined : _0x1d4cd0.indexOf("/")) !== null && _0x42a22 !== undefined ? _0x42a22 : -1;
  return _0x46dbf8 !== -1 ? "https://img4.kuwo.cn/star/albumcover/1080" + _0x1d4cd0.slice(_0x46dbf8) : undefined;
}
function formatMusicItem(_0x5b0088) {
  return {
    "id": _0x5b0088.MUSICRID.replace("MUSIC_", ""),
    "artwork": artworkShort2Long(_0x5b0088.web_albumpic_short),
    "title": he.decode(_0x5b0088.NAME || ""),
    "artist": he.decode(_0x5b0088.ARTIST || ""),
    "album": he.decode(_0x5b0088.ALBUM || ""),
    "albumId": _0x5b0088.ALBUMID,
    "artistId": _0x5b0088.ARTISTID,
    "formats": _0x5b0088.FORMATS,
    "duration": _0x5b0088.DURATION
  };
}
function formatAlbumItem(_0x25aba2) {
  var _0x3ecbb5;
  return {
    "id": _0x25aba2.albumid,
    "artist": he.decode(_0x25aba2.artist || ""),
    "title": he.decode(_0x25aba2.name || ""),
    "artwork": (_0x3ecbb5 = _0x25aba2.img) !== null && _0x3ecbb5 !== undefined ? _0x3ecbb5 : artworkShort2Long(_0x25aba2.pic),
    "description": he.decode(_0x25aba2.info || ""),
    "date": _0x25aba2.pub,
    "artistId": _0x25aba2.artistid
  };
}
function formatArtistItem(_0x4188ca) {
  return {
    "id": _0x4188ca.ARTISTID,
    "avatar": _0x4188ca.hts_PICPATH,
    "name": he.decode(_0x4188ca.ARTIST || ""),
    "artistId": _0x4188ca.ARTISTID,
    "description": he.decode(_0x4188ca.desc || ""),
    "worksNum": _0x4188ca.SONGNUM
  };
}
function formatMusicSheet(_0x239fcd) {
  return {
    "id": _0x239fcd.playlistid,
    "title": he.decode(_0x239fcd.name || ""),
    "artist": he.decode(_0x239fcd.nickname || ""),
    "artwork": _0x239fcd.pic,
    "playCount": _0x239fcd.playcnt,
    "description": he.decode(_0x239fcd.intro || ""),
    "worksNum": _0x239fcd.songnum
  };
}
async function searchMusic(_0x5a5d47, _0x5bb960) {
  const _0x4cb4dc = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "client": "kt",
        "all": _0x5a5d47,
        "pn": _0x5bb960 - 1,
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
    _0x2e34b5 = _0x4cb4dc.abslist.map(formatMusicItem);
  return {
    "isEnd": (+_0x4cb4dc.PN + 1) * +_0x4cb4dc.RN >= +_0x4cb4dc.TOTAL,
    "data": _0x2e34b5
  };
}
async function searchAlbum(_0x746ddb, _0x508c8c) {
  const _0xccbe09 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "all": _0x746ddb,
        "ft": "album",
        "itemset": "web_2013",
        "client": "kt",
        "pn": _0x508c8c - 1,
        "rn": pageSize,
        "rformat": "json",
        "encoding": "utf8",
        "pcjson": 1
      }
    })).data,
    _0x5db79f = _0xccbe09.albumlist.map(formatAlbumItem);
  return {
    "isEnd": (+_0xccbe09.PN + 1) * +_0xccbe09.RN >= +_0xccbe09.TOTAL,
    "data": _0x5db79f
  };
}
async function searchArtist(_0x1dea39, _0x440e58) {
  const _0x259e5c = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "all": _0x1dea39,
        "ft": "artist",
        "itemset": "web_2013",
        "client": "kt",
        "pn": _0x440e58 - 1,
        "rn": pageSize,
        "rformat": "json",
        "encoding": "utf8",
        "pcjson": 1
      }
    })).data,
    _0x556b36 = _0x259e5c.abslist.map(formatArtistItem);
  return {
    "isEnd": (+_0x259e5c.PN + 1) * +_0x259e5c.RN >= +_0x259e5c.TOTAL,
    "data": _0x556b36
  };
}
async function searchMusicSheet(_0x189bea, _0x57a49a) {
  const _0x46ff68 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "all": _0x189bea,
        "ft": "playlist",
        "itemset": "web_2013",
        "client": "kt",
        "pn": _0x57a49a - 1,
        "rn": pageSize,
        "rformat": "json",
        "encoding": "utf8",
        "pcjson": 1
      }
    })).data,
    _0x3a623d = _0x46ff68.abslist.map(formatMusicSheet);
  return {
    "isEnd": (+_0x46ff68.PN + 1) * +_0x46ff68.RN >= +_0x46ff68.TOTAL,
    "data": _0x3a623d
  };
}
async function getArtistMusicWorks(_0x2a46c6, _0x2f4c28) {
  const _0x39fe7c = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "pn": _0x2f4c28 - 1,
        "rn": pageSize,
        "artistid": _0x2a46c6.id,
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
    _0x45e328 = _0x39fe7c.musiclist.map(_0x3b5846 => {
      return {
        "id": _0x3b5846.musicrid,
        "artwork": artworkShort2Long(_0x3b5846.web_albumpic_short),
        "title": he.decode(_0x3b5846.name || ""),
        "artist": he.decode(_0x3b5846.artist || ""),
        "album": he.decode(_0x3b5846.album || ""),
        "albumId": _0x3b5846.albumid,
        "artistId": _0x3b5846.artistid,
        "formats": _0x3b5846.formats
      };
    });
  return {
    "isEnd": (+_0x39fe7c.pn + 1) * pageSize >= +_0x39fe7c.total,
    "data": _0x45e328
  };
}
async function getArtistAlbumWorks(_0x36fbf7, _0x4669e4) {
  const _0xba87d6 = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "pn": _0x4669e4 - 1,
        "rn": pageSize,
        "artistid": _0x36fbf7.id,
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
    _0x93acaf = _0xba87d6.albumlist.map(formatAlbumItem);
  return {
    "isEnd": (+_0xba87d6.pn + 1) * pageSize >= +_0xba87d6.total,
    "data": _0x93acaf
  };
}
async function getArtistWorks(_0x2edf21, _0xf40be0, _0x43b57d) {
  if (_0x43b57d === "music") return getArtistMusicWorks(_0x2edf21, _0xf40be0);else {
    if (_0x43b57d === "album") return getArtistAlbumWorks(_0x2edf21, _0xf40be0);
  }
}
async function getLyric(_0x539857) {
  try {
    const _0x12c135 = "https://kuwo.cn/openapi/v1/www/lyric/getlyric",
      _0x20b7e2 = (await axios_1.default(_0x12c135, {
        "params": {
          "musicId": _0x539857.id,
          "httpStatus": 1
        }
      })).data,
      _0x4bc25b = _0x20b7e2?.["data"]?.["lrclist"] || [];
    if (!_0x4bc25b.length) return {
      "rawLrc": "[00:00.00] 暂无歌词",
      "translation": ""
    };
    const _0x8c7c24 = _0x4bc25b.map(_0x456dfb => ({
        "time": parseFloat(_0x456dfb.time || 0),
        "text": _0x456dfb.lineLyric || ""
      })).sort((_0x22240d, _0x48d8fb) => _0x22240d.time - _0x48d8fb.time),
      _0x4de517 = [],
      _0x2bff21 = [];
    let _0x2079bb = null,
      _0x5f8459 = false;
    const _0x2c21d2 = _0x15f639 => /[\u4e00-\u9fa5]/.test(_0x15f639),
      _0x1be7f6 = _0x18dc71 => "[" + formatTimeTag(_0x18dc71) + "]";
    for (let _0x53af06 = 0; _0x53af06 < _0x8c7c24.length; _0x53af06++) {
      const {
        time: _0x22bbab,
        text: _0x33efb5
      } = _0x8c7c24[_0x53af06];
      if (!_0x33efb5) continue;
      if (_0x2c21d2(_0x33efb5)) _0x2079bb !== null && _0x5f8459 ? _0x2bff21.push("" + _0x1be7f6(_0x2079bb) + _0x33efb5) : (_0x4de517.push("" + _0x1be7f6(_0x22bbab) + _0x33efb5), _0x2079bb = _0x22bbab, _0x5f8459 = false);else {
        _0x4de517.push("" + _0x1be7f6(_0x22bbab) + _0x33efb5);
        _0x2079bb = _0x22bbab;
        _0x5f8459 = true;
      }
    }
    return {
      "rawLrc": _0x4de517.join("\n") || "[00:00.00] 暂无原文歌词",
      "translation": _0x2bff21.join("\n") || ""
    };
  } catch (_0x411e8c) {
    console.error("获取歌词失败:", _0x411e8c);
    return {
      "rawLrc": "[00:00.00] 该歌曲歌词获取失败",
      "translation": ""
    };
  }
}
function formatTimeTag(_0x312454) {
  const _0x19a600 = parseFloat(_0x312454) || 0,
    _0x277dbf = Math.floor(_0x19a600 / 60).toString().padStart(2, "0"),
    _0x5f5c7f = (_0x19a600 % 60).toFixed(2).padStart(5, "0");
  return _0x277dbf + ":" + _0x5f5c7f;
}
async function getAlbumInfo(_0x33930b) {
  const _0xad922d = (await (0, axios_1.default)({
      "method": "get",
      "url": "http://search.kuwo.cn/r.s",
      "params": {
        "pn": 0,
        "rn": 100,
        "albumid": _0x33930b.id,
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
    _0x3cdca8 = _0xad922d.musiclist.map(_0x48c8a6 => {
      {
        var _0x331229;
        return {
          "id": _0x48c8a6.id,
          "artwork": (_0x331229 = _0x33930b.artwork) !== null && _0x331229 !== undefined ? _0x331229 : _0xad922d.img,
          "title": he.decode(_0x48c8a6.name || ""),
          "artist": he.decode(_0x48c8a6.artist || ""),
          "album": he.decode(_0x48c8a6.album || ""),
          "albumId": _0x33930b.id,
          "artistId": _0x48c8a6.artistid,
          "formats": _0x48c8a6.formats
        };
      }
    });
  return {
    "musicList": _0x3cdca8
  };
}
async function getTopLists() {
  const _0x3fdfa5 = (await axios_1.default.get("http://wapi.kuwo.cn/api/pc/bang/list")).data.child;
  return _0x3fdfa5.map(_0x3dc266 => ({
    "title": _0x3dc266.disname,
    "data": _0x3dc266.child.map(_0x3354d9 => {
      {
        var _0x442747, _0x5caff0;
        return {
          "id": _0x3354d9.sourceid,
          "coverImg": (_0x5caff0 = (_0x442747 = _0x3354d9.pic5) !== null && _0x442747 !== undefined ? _0x442747 : _0x3354d9.pic2) !== null && _0x5caff0 !== undefined ? _0x5caff0 : _0x3354d9.pic,
          "title": _0x3354d9.name,
          "description": _0x3354d9.intro
        };
      }
    })
  }));
}
async function getTopListDetail(_0x213bd5) {
  const _0x526e22 = await axios_1.default.get("http://kbangserver.kuwo.cn/ksong.s", {
    "params": {
      "from": "pc",
      "fmt": "json",
      "pn": 0,
      "rn": 80,
      "type": "bang",
      "data": "content",
      "id": _0x213bd5.id,
      "show_copyright_off": 0,
      "pcmp4": 1,
      "isbang": 1,
      "userid": 0,
      "httpStatus": 1
    }
  });
  return Object.assign(Object.assign({}, _0x213bd5), {
    "musicList": _0x526e22.data.musiclist.map(_0x63890e => {
      return {
        "id": _0x63890e.id,
        "title": he.decode(_0x63890e.name || ""),
        "artist": he.decode(_0x63890e.artist || ""),
        "album": he.decode(_0x63890e.album || ""),
        "albumId": _0x63890e.albumid,
        "artistId": _0x63890e.artistid,
        "formats": _0x63890e.formats
      };
    })
  });
}
async function getMusicSheetResponseById(_0x36de57, _0x35e34b, _0x6e74e = 50) {
  return (await axios_1.default.get("http://nplserver.kuwo.cn/pl.svc", {
    "params": {
      "op": "getlistinfo",
      "pid": _0x36de57,
      "pn": _0x35e34b - 1,
      "rn": _0x6e74e,
      "encode": "utf8",
      "keyset": "pl2012",
      "vipver": "MUSIC_9.1.1.2_BCS2",
      "newver": 1
    }
  })).data;
}
async function importMusicSheet(_0x24a31b) {
  const _0x1bd795 = _0x24a31b.match(/(?:https?:\/\/(?:m|www)?.?kuwo\.cn\/(?:newh5app\/)?playlist_detail\/(\d+)|^\s*(\d+)\s*$)/),
    _0x32d58c = _0x1bd795[1] || _0x1bd795[2];
  if (!_0x32d58c) {
    return;
  }
  console.log("id", _0x32d58c);
  let _0x10a809 = 1,
    _0x4ce2b9 = true,
    _0x6b5c5e = [];
  while (_0x4ce2b9) {
    {
      try {
        const _0x363b2b = await getMusicSheetInfo({
          "id": _0x32d58c
        }, _0x10a809);
        _0x363b2b.musicList && _0x363b2b.musicList.length > 0 ? _0x6b5c5e = _0x6b5c5e.concat(_0x363b2b.musicList.map(_0x59d5e0 => ({
          "id": _0x59d5e0.id,
          "title": _0x59d5e0.title,
          "artist": _0x59d5e0.artist,
          "album": _0x59d5e0.album,
          "albumId": _0x59d5e0.albumId,
          "artistId": _0x59d5e0.artistId,
          "formats": _0x59d5e0.formats
        }))) : _0x4ce2b9 = false;
      } catch (_0x576fe2) {}
      await new Promise(_0x5af5b7 => {
        setTimeout(() => {
          _0x5af5b7();
        }, 200 + Math.random() * 100);
      });
      ++_0x10a809;
    }
  }
  return _0x6b5c5e;
}
async function getRecommendSheetTags() {
  const _0x6c97eb = (await axios_1.default.get("http://wapi.kuwo.cn/api/pc/classify/playlist/getTagList?cmd=rcm_keyword_playlist&user=0&prod=kwplayer_pc_9.0.5.0&vipver=9.0.5.0&source=kwplayer_pc_9.0.5.0&loginUid=0&loginSid=0&appUid=76039576")).data.data,
    _0x2bf5d6 = _0x6c97eb.map(_0x5120a2 => ({
      "title": _0x5120a2.name,
      "data": _0x5120a2.data.map(_0x269e06 => ({
        "id": _0x269e06.id,
        "digest": _0x269e06.digest,
        "title": _0x269e06.name
      }))
    })).filter(_0x19a9a5 => _0x19a9a5.data.length),
    _0x2f7729 = [{
      "id": "1848",
      "title": "翻唱",
      "digest": "10000"
    }, {
      "id": "621",
      "title": "网络",
      "digest": "10000"
    }, {
      "title": "伤感",
      "digest": "10000",
      "id": "146"
    }, {
      "title": "欧美",
      "digest": "10000",
      "id": "35"
    }];
  return {
    "data": _0x2bf5d6,
    "pinned": _0x2f7729
  };
}
async function getRecommendSheetsByTag(_0x1393a6, _0x56f1b2) {
  const _0x433d3c = 20;
  let _0x3a5ae5;
  if (_0x1393a6.id) {
    if (_0x1393a6.digest === "10000") {
      _0x3a5ae5 = (await axios_1.default.get("http://wapi.kuwo.cn/api/pc/classify/playlist/getTagPlayList?loginUid=0&loginSid=0&appUid=76039576&pn=" + (_0x56f1b2 - 1) + "&id=" + _0x1393a6.id + "&rn=" + _0x433d3c)).data.data;
    } else {
      let _0x3580f3 = (await axios_1.default.get("http://mobileinterfaces.kuwo.cn/er.s?type=get_pc_qz_data&f=web&id=" + _0x1393a6.id + "&prod=pc")).data;
      _0x3a5ae5 = {
        "total": 0,
        "data": _0x3580f3.reduce((_0x220505, _0x382e14) => [..._0x220505, ..._0x382e14.list])
      };
    }
  } else {
    _0x3a5ae5 = (await axios_1.default.get("https://wapi.kuwo.cn/api/pc/classify/playlist/getRcmPlayList?loginUid=0&loginSid=0&appUid=76039576&&pn=" + (_0x56f1b2 - 1) + "&rn=" + _0x433d3c + "&order=hot")).data.data;
  }
  const _0x5e18dd = _0x56f1b2 * _0x433d3c >= _0x3a5ae5.total;
  return {
    "isEnd": _0x5e18dd,
    "data": _0x3a5ae5.data.map(_0x2e1e06 => ({
      "title": _0x2e1e06.name,
      "artist": _0x2e1e06.uname,
      "id": _0x2e1e06.id,
      "artwork": _0x2e1e06.img,
      "playCount": _0x2e1e06.listencnt,
      "createUserId": _0x2e1e06.uid
    }))
  };
}
async function getMusicSheetInfo(_0x2b8e12, _0x5b3b9a) {
  const _0x255791 = await getMusicSheetResponseById(_0x2b8e12.id, _0x5b3b9a, pageSize);
  return {
    "isEnd": _0x5b3b9a * pageSize >= _0x255791.total,
    "musicList": _0x255791.musiclist.map(_0x4c8f97 => ({
      "id": _0x4c8f97.id,
      "title": he.decode(_0x4c8f97.name || ""),
      "artist": he.decode(_0x4c8f97.artist || ""),
      "album": he.decode(_0x4c8f97.album || ""),
      "albumId": _0x4c8f97.albumid,
      "artistId": _0x4c8f97.artistid,
      "formats": _0x4c8f97.formats
    }))
  };
}
const qualityLevels = {
  "low": "128k",
  "standard": "320k",
  "high": "flac",
  "super": "hires"
};
async function getMediaSource(_0x3052d4, _0x226d1c) {
  const _0x602466 = (await axios_1.default.get(API_URL + "/url?source=kw&songId=" + _0x3052d4.id + "&quality=" + qualityLevels[_0x226d1c], {
    "headers": {
      "X-Request-Key": API_KEY
    }
  })).data;
  return {
    "url": _0x602466.url
  };
}
async function getMusicInfo(_0xf401d3) {
  const _0x6cc16e = "https://kuwo.cn/api/www/music/musicInfo?mid=" + _0xf401d3.id;
  try {
    {
      const _0x25c81d = (await axios_1.default(_0x6cc16e, {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "Accept-Encoding": "gzip",
          "Connection": "Keep-Alive",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36 Edg/141.0.0.0",
          "Cookie": "Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1756613766,1756649538; _ga=GA1.2.1847790843.1749446629; Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1756649579; Hm_Iuvt_cdb524f42f23cer9b268564v7y735ewrq2324=BYcASE87QbKjZhwF6pENcXP7KBcHhNfG",
          "Secret": "6109e8e34262501c8f47ebfb11d2c66b3ebfb49954a2cc3042c218d1eec803cb04afd2cd"
        },
        "withCredentials": false
      })).data;
      console.log("请求成功", _0x25c81d);
      console.log("图片是", _0x25c81d.data.pic);
      return {
        "artwork": _0x25c81d.data.pic
      };
    }
  } catch (_0x4fe68e) {
    console.log("请求失败", _0x4fe68e.message);
    _0x4fe68e.response && (console.log("响应状态:", _0x4fe68e.response.status), console.log("响应数据:", _0x4fe68e.response.data));
    return null;
  }
}
async function getMusicComments(_0x278611, _0x28b27d) {
  try {
    {
      const _0x47aa98 = "https://comment.kuwo.cn/com.s",
        _0x53466b = (await (0, axios_1.default)(_0x47aa98, {
          "params": {
            "sid": _0x278611.id,
            "httpStatus": 1,
            "type": "get_comment",
            "f": "web",
            "page": _0x28b27d,
            "rows": 10,
            "digest": 15,
            "uid": 0
          }
        })).data,
        _0x4b45e7 = _0x53466b;
      return {
        "isEnd": _0x4b45e7.currentPage >= _0x4b45e7.totalPage,
        "data": _0x4b45e7.rows.map(_0x531772 => {
          if (!_0x531772) return null;
          const _0x12e150 = {
            "id": _0x531772.id || "",
            "nickName": _0x531772.u_name || "未知用户",
            "comment": _0x531772.msg || "",
            "avatar": _0x531772.u_pic || "",
            "like": _0x531772.like_num ? parseInt(_0x531772.like_num) || 0 : 0,
            "createAt": _0x531772.time ? Math.floor(new Date(_0x531772.time).getTime()) : undefined,
            "location": _0x531772.rankVal ? "等级" + _0x531772.rankVal : undefined
          };
          if (_0x531772.reply && _0x531772.reply.id && _0x531772.reply.msg) {
            _0x12e150.replies = [{
              "id": _0x531772.reply.id || "",
              "nickName": _0x531772.reply.u_name || "未知用户",
              "comment": _0x531772.reply.msg || "",
              "avatar": _0x531772.reply.u_pic || "",
              "like": _0x531772.reply.like_num ? parseInt(_0x531772.reply.like_num) || 0 : 0,
              "createAt": _0x531772.reply.time ? Math.floor(new Date(_0x531772.reply.time).getTime()) : undefined,
              "location": _0x531772.reply.rankVal ? "等级" + _0x531772.reply.rankVal : undefined
            }];
          }
          return _0x12e150;
        }).filter(_0xc365bb => _0xc365bb !== null)
      };
    }
  } catch (_0x5de975) {
    console.error("解析JSON失败:", _0x5de975);
    return {
      "isEnd": true,
      "data": []
    };
  }
}
module.exports = {
  "platform": "酷我",
  "author": "xixi",
  "version": "0.0.6",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": UPDATE_URL,
  "cacheControl": "no-cache",
  "hints": {
    "importMusicSheet": ["酷我APP：自建歌单-分享-复制试听链接，直接粘贴即可", "H5：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
  },
  "supportedSearchType": ["music", "album", "sheet", "artist"],
  async "search"(_0x39d824, _0x3d6669, _0x3306f7) {
    if (_0x3306f7 === "music") return await searchMusic(_0x39d824, _0x3d6669);
    if (_0x3306f7 === "album") {
      return await searchAlbum(_0x39d824, _0x3d6669);
    }
    if (_0x3306f7 === "artist") return await searchArtist(_0x39d824, _0x3d6669);
    if (_0x3306f7 === "sheet") {
      return await searchMusicSheet(_0x39d824, _0x3d6669);
    }
  },
  "getMediaSource": getMediaSource,
  "getMusicInfo": getMusicInfo,
  "getMusicComments": getMusicComments,
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
getMusicInfo({
  "id": 231605
}).then(_0x728305 => {
  console.log("获取到的URL:", _0x728305);
}).catch(_0x2d225c => {
  console.error("错误:", _0x2d225c);
});