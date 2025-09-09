//Tue Sep 09 2025 03:55:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  CryptoJs = require("crypto-js"),
  he = require("he"),
  pageSize = 20;
function formatMusicItem(_0x53603d) {
  var _0x20515d, _0x47f976, _0x3a6156;
  const _0x455722 = _0x53603d.albumid || ((_0x20515d = _0x53603d.album) === null || _0x20515d === undefined ? undefined : _0x20515d.id),
    _0x4ead7e = _0x53603d.albummid || ((_0x47f976 = _0x53603d.album) === null || _0x47f976 === undefined ? undefined : _0x47f976.mid),
    _0xb36556 = _0x53603d.albumname || ((_0x3a6156 = _0x53603d.album) === null || _0x3a6156 === undefined ? undefined : _0x3a6156.title);
  return {
    "id": _0x53603d.id || _0x53603d.songid,
    "songmid": _0x53603d.mid || _0x53603d.songmid,
    "title": _0x53603d.title || _0x53603d.songname,
    "artist": _0x53603d.singer.map(_0x427150 => _0x427150.name).join(", "),
    "artwork": _0x4ead7e ? "https://y.gtimg.cn/music/photo_new/T002R800x800M000" + _0x4ead7e + ".jpg" : undefined,
    "album": _0xb36556,
    "lrc": _0x53603d.lyric || undefined,
    "albumid": _0x455722,
    "albummid": _0x4ead7e
  };
}
function formatAlbumItem(_0x7d949a) {
  return {
    "id": _0x7d949a.albumID || _0x7d949a.albumid,
    "albumMID": _0x7d949a.albumMID || _0x7d949a.album_mid,
    "title": _0x7d949a.albumName || _0x7d949a.album_name,
    "artwork": _0x7d949a.albumPic || "https://y.gtimg.cn/music/photo_new/T002R800x800M000" + (_0x7d949a.albumMID || _0x7d949a.album_mid) + ".jpg",
    "date": _0x7d949a.publicTime || _0x7d949a.pub_time,
    "singerID": _0x7d949a.singerID || _0x7d949a.singer_id,
    "artist": _0x7d949a.singerName || _0x7d949a.singer_name,
    "singerMID": _0x7d949a.singerMID || _0x7d949a.singer_mid,
    "description": _0x7d949a.desc
  };
}
function formatArtistItem(_0x4ac5bc) {
  return {
    "name": _0x4ac5bc.singerName,
    "id": _0x4ac5bc.singerID,
    "singerMID": _0x4ac5bc.singerMID,
    "avatar": _0x4ac5bc.singerPic,
    "worksNum": _0x4ac5bc.songNum
  };
}
const searchTypeMap = {
    0: "song",
    2: "album",
    1: "singer",
    3: "songlist",
    7: "song",
    12: "mv"
  },
  headers = {
    "referer": "https://y.qq.com",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "Cookie": "uin="
  };
async function searchBase(_0x254af8, _0x1c2b46, _0x40e919) {
  const _0x401733 = (await (0, axios_1.default)({
    "url": "https://u.y.qq.com/cgi-bin/musicu.fcg",
    "method": "POST",
    "data": {
      "req_1": {
        "method": "DoSearchForQQMusicDesktop",
        "module": "music.search.SearchCgiService",
        "param": {
          "num_per_page": pageSize,
          "page_num": _0x1c2b46,
          "query": _0x254af8,
          "search_type": _0x40e919
        }
      }
    },
    "headers": headers,
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return {
    "isEnd": _0x401733.req_1.data.meta.sum <= _0x1c2b46 * pageSize,
    "data": _0x401733.req_1.data.body[searchTypeMap[_0x40e919]].list
  };
}
async function searchMusic(_0x4945ce, _0x46a855) {
  const _0x2780f4 = await searchBase(_0x4945ce, _0x46a855, 0);
  return {
    "isEnd": _0x2780f4.isEnd,
    "data": _0x2780f4.data.map(formatMusicItem)
  };
}
async function searchAlbum(_0x23d9a4, _0x3a75d7) {
  const _0x3c21fd = await searchBase(_0x23d9a4, _0x3a75d7, 2);
  return {
    "isEnd": _0x3c21fd.isEnd,
    "data": _0x3c21fd.data.map(formatAlbumItem)
  };
}
async function searchArtist(_0x2c4880, _0x3c8d8c) {
  const _0x236bea = await searchBase(_0x2c4880, _0x3c8d8c, 1);
  return {
    "isEnd": _0x236bea.isEnd,
    "data": _0x236bea.data.map(formatArtistItem)
  };
}
async function searchMusicSheet(_0xd7577b, _0x28c6e1) {
  const _0x3c9f1c = await searchBase(_0xd7577b, _0x28c6e1, 3);
  return {
    "isEnd": _0x3c9f1c.isEnd,
    "data": _0x3c9f1c.data.map(_0x41b6fc => ({
      "title": _0x41b6fc.dissname,
      "createAt": _0x41b6fc.createtime,
      "description": _0x41b6fc.introduction,
      "playCount": _0x41b6fc.listennum,
      "worksNums": _0x41b6fc.song_count,
      "artwork": _0x41b6fc.imgurl,
      "id": _0x41b6fc.dissid,
      "artist": _0x41b6fc.creator.name
    }))
  };
}
async function searchLyric(_0x1909a5, _0xecd1f2) {
  const _0x37b001 = await searchBase(_0x1909a5, _0xecd1f2, 7);
  return {
    "isEnd": _0x37b001.isEnd,
    "data": _0x37b001.data.map(_0x304cca => Object.assign(Object.assign({}, formatMusicItem(_0x304cca)), {
      "rawLrcTxt": _0x304cca.content
    }))
  };
}
function getQueryFromUrl(_0xf78f40, _0x5e5d9f) {
  try {
    const _0x98d52e = _0x5e5d9f.split("?");
    let _0x362bdc = "";
    if (_0x98d52e.length > 1) {
      _0x362bdc = _0x98d52e[1];
    } else {
      return _0xf78f40 ? undefined : {};
    }
    const _0x4a847d = _0x362bdc.split("&"),
      _0x7d390e = {};
    _0x4a847d.forEach(_0x530729 => {
      const _0xd53809 = _0x530729.split("=");
      _0x7d390e[_0xd53809[0]] = decodeURIComponent(_0xd53809[1]);
    });
    return _0xf78f40 ? _0x7d390e[_0xf78f40] : _0x7d390e;
  } catch (_0x2f21cb) {
    return _0xf78f40 ? "" : {};
  }
}
function changeUrlQuery(_0x1a3a59, _0x34961b) {
  const _0x1b1f3f = getQueryFromUrl(null, _0x34961b);
  let _0x4b3d15 = _0x34961b.split("?")[0];
  const _0x5d4f9b = Object.assign(Object.assign({}, _0x1b1f3f), _0x1a3a59);
  let _0x1d03fd = [];
  Object.keys(_0x5d4f9b).forEach(_0x33138e => {
    _0x5d4f9b[_0x33138e] !== undefined && _0x5d4f9b[_0x33138e] !== "" && _0x1d03fd.push(_0x33138e + "=" + encodeURIComponent(_0x5d4f9b[_0x33138e]));
  });
  return (_0x4b3d15 + "?" + _0x1d03fd.join("&")).replace(/\?$/, "");
}
const typeMap = {
  "m4a": {
    "s": "C400",
    "e": ".m4a"
  },
  128: {
    "s": "M500",
    "e": ".mp3"
  },
  320: {
    "s": "M800",
    "e": ".mp3"
  },
  "ape": {
    "s": "A000",
    "e": ".ape"
  },
  "flac": {
    "s": "F000",
    "e": ".flac"
  }
};
async function getAlbumInfo(_0x1cdeb6) {
  const _0x807ac = changeUrlQuery({
      "data": JSON.stringify({
        "comm": {
          "ct": 24,
          "cv": 10000
        },
        "albumSonglist": {
          "method": "GetAlbumSongList",
          "param": {
            "albumMid": _0x1cdeb6.albumMID,
            "albumID": 0,
            "begin": 0,
            "num": 999,
            "order": 2
          },
          "module": "music.musichallAlbum.AlbumSongList"
        }
      })
    }, "https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&format=json&inCharset=utf8&outCharset=utf-8"),
    _0x32ace9 = (await (0, axios_1.default)({
      "url": _0x807ac,
      "headers": headers,
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data;
  return {
    "musicList": _0x32ace9.albumSonglist.data.songList.map(_0x4f9cec => {
      {
        const _0x48449f = _0x4f9cec.songInfo;
        return formatMusicItem(_0x48449f);
      }
    })
  };
}
async function getArtistSongs(_0x3e4125, _0x333e54) {
  const _0x47d125 = changeUrlQuery({
      "data": JSON.stringify({
        "comm": {
          "ct": 24,
          "cv": 0
        },
        "singer": {
          "method": "get_singer_detail_info",
          "param": {
            "sort": 5,
            "singermid": _0x3e4125.singerMID,
            "sin": (_0x333e54 - 1) * pageSize,
            "num": pageSize
          },
          "module": "music.web_singer_info_svr"
        }
      })
    }, "http://u.y.qq.com/cgi-bin/musicu.fcg"),
    _0xae8f0a = (await (0, axios_1.default)({
      "url": _0x47d125,
      "method": "get",
      "headers": headers,
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data;
  return {
    "isEnd": _0xae8f0a.singer.data.total_song <= _0x333e54 * pageSize,
    "data": _0xae8f0a.singer.data.songlist.map(formatMusicItem)
  };
}
async function getArtistAlbums(_0x545a18, _0x4fc10f) {
  const _0x13e94d = changeUrlQuery({
      "data": JSON.stringify({
        "comm": {
          "ct": 24,
          "cv": 0
        },
        "singerAlbum": {
          "method": "get_singer_album",
          "param": {
            "singermid": _0x545a18.singerMID,
            "order": "time",
            "begin": (_0x4fc10f - 1) * pageSize,
            "num": pageSize / 1,
            "exstatus": 1
          },
          "module": "music.web_singer_info_svr"
        }
      })
    }, "http://u.y.qq.com/cgi-bin/musicu.fcg"),
    _0x3613ca = (await (0, axios_1.default)({
      "url": _0x13e94d,
      "method": "get",
      "headers": headers,
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data;
  return {
    "isEnd": _0x3613ca.singerAlbum.data.total <= _0x4fc10f * pageSize,
    "data": _0x3613ca.singerAlbum.data.list.map(formatAlbumItem)
  };
}
async function getArtistWorks(_0x4e2fc1, _0x4c59f8, _0x36ee4e) {
  if (_0x36ee4e === "music") return getArtistSongs(_0x4e2fc1, _0x4c59f8);
  if (_0x36ee4e === "album") return getArtistAlbums(_0x4e2fc1, _0x4c59f8);
}
async function getLyric(_0x4a90f9) {
  const _0x56ae3a = (await (0, axios_1.default)({
      "url": "http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?songmid=" + _0x4a90f9.songmid + "&pcachetime=" + new Date().getTime() + "&g_tk=5381&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
      "headers": {
        "Referer": "https://y.qq.com",
        "Cookie": "uin="
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x3bca98 = JSON.parse(_0x56ae3a.replace(/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ""));
  let _0x1510da;
  _0x3bca98.trans && (_0x1510da = he.decode(CryptoJs.enc.Base64.parse(_0x3bca98.trans).toString(CryptoJs.enc.Utf8)));
  return {
    "rawLrc": he.decode(CryptoJs.enc.Base64.parse(_0x3bca98.lyric).toString(CryptoJs.enc.Utf8)),
    "translation": _0x1510da
  };
}
async function importMusicSheet(_0x5c1269) {
  let _0x32f682;
  !_0x32f682 && (_0x32f682 = (_0x5c1269.match(/https?:\/\/i\.y\.qq\.com\/n2\/m\/share\/details\/taoge\.html\?.*id=([0-9]+)/) || [])[1]);
  !_0x32f682 && (_0x32f682 = (_0x5c1269.match(/https?:\/\/y\.qq\.com\/n\/ryqq\/playlist\/([0-9]+)/) || [])[1]);
  if (!_0x32f682) {
    _0x32f682 = (_0x5c1269.match(/^(\d+)$/) || [])[1];
  }
  if (!_0x32f682) return;
  const _0x5a295c = (await (0, axios_1.default)({
      "url": "http://i.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&utf8=1&disstid=" + _0x32f682 + "&loginUin=0",
      "headers": {
        "Referer": "https://y.qq.com/n/yqq/playlist",
        "Cookie": "uin="
      },
      "method": "get",
      "xsrfCookieName": "XSRF-TOKEN",
      "withCredentials": true
    })).data,
    _0x33ef3e = JSON.parse(_0x5a295c.replace(/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, ""));
  return _0x33ef3e.cdlist[0].songlist.map(formatMusicItem);
}
async function getTopLists() {
  const _0x30f852 = await (0, axios_1.default)({
    "url": "https://u.y.qq.com/cgi-bin/musicu.fcg?_=1577086820633&data=%7B%22comm%22%3A%7B%22g_tk%22%3A5381%2C%22uin%22%3A123456%2C%22format%22%3A%22json%22%2C%22inCharset%22%3A%22utf-8%22%2C%22outCharset%22%3A%22utf-8%22%2C%22notice%22%3A0%2C%22platform%22%3A%22h5%22%2C%22needNewCode%22%3A1%2C%22ct%22%3A23%2C%22cv%22%3A0%7D%2C%22topList%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetAll%22%2C%22param%22%3A%7B%7D%7D%7D",
    "method": "get",
    "headers": {
      "Cookie": "uin="
    },
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  });
  return _0x30f852.data.topList.data.group.map(_0x4803bd => ({
    "title": _0x4803bd.groupName,
    "data": _0x4803bd.toplist.map(_0x14e028 => ({
      "id": _0x14e028.topId,
      "description": _0x14e028.intro,
      "title": _0x14e028.title,
      "period": _0x14e028.period,
      "coverImg": _0x14e028.headPicUrl || _0x14e028.frontPicUrl
    }))
  }));
}
async function getTopListDetail(_0x5cdfe2) {
  var _0x4efcf9;
  const _0x7f1bd5 = await (0, axios_1.default)({
    "url": "https://u.y.qq.com/cgi-bin/musicu.fcg?g_tk=5381&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A" + _0x5cdfe2.id + "%2C%22offset%22%3A0%2C%22num%22%3A100%2C%22period%22%3A%22" + ((_0x4efcf9 = _0x5cdfe2.period) !== null && _0x4efcf9 !== undefined ? _0x4efcf9 : "") + "%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D",
    "method": "get",
    "headers": {
      "Cookie": "uin="
    },
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  });
  return Object.assign(Object.assign({}, _0x5cdfe2), {
    "musicList": _0x7f1bd5.data.detail.data.songInfoList.map(formatMusicItem)
  });
}
async function getRecommendSheetTags() {
  const _0x472b3d = (await axios_1.default.get("https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg?format=json&inCharset=utf8&outCharset=utf-8", {
      "headers": {
        "referer": "https://y.qq.com/"
      }
    })).data.data.categories,
    _0x49dacb = _0x472b3d.slice(1).map(_0x5649b6 => ({
      "title": _0x5649b6.categoryGroupName,
      "data": _0x5649b6.items.map(_0x14264f => ({
        "id": _0x14264f.categoryId,
        "title": _0x14264f.categoryName
      }))
    })),
    _0x3e3403 = [];
  for (let _0x3d45ad of _0x49dacb) {
    _0x3d45ad.data.length && _0x3e3403.push(_0x3d45ad.data[0]);
  }
  return {
    "pinned": _0x3e3403,
    "data": _0x49dacb
  };
}
async function getRecommendSheetsByTag(_0x1606a3, _0x278e7c) {
  const _0x44f0ae = 20,
    _0xc09417 = (await axios_1.default.get("https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg", {
      "headers": {
        "referer": "https://y.qq.com/"
      },
      "params": {
        "inCharset": "utf8",
        "outCharset": "utf-8",
        "sortId": 5,
        "categoryId": (_0x1606a3 === null || _0x1606a3 === undefined ? undefined : _0x1606a3.id) || "10000000",
        "sin": _0x44f0ae * (_0x278e7c - 1),
        "ein": _0x278e7c * _0x44f0ae - 1
      }
    })).data,
    _0x4d9b27 = JSON.parse(_0xc09417.replace(/callback\(|MusicJsonCallback\(|jsonCallback\(|\)$/g, "")).data,
    _0x4a7148 = _0x4d9b27.sum <= _0x278e7c * _0x44f0ae,
    _0xa736dd = _0x4d9b27.list.map(_0x156fea => {
      {
        var _0x729931, _0x319ae3;
        return {
          "id": _0x156fea.dissid,
          "createTime": _0x156fea.createTime,
          "title": _0x156fea.dissname,
          "artwork": _0x156fea.imgurl,
          "description": _0x156fea.introduction,
          "playCount": _0x156fea.listennum,
          "artist": (_0x319ae3 = (_0x729931 = _0x156fea.creator) === null || _0x729931 === undefined ? undefined : _0x729931.name) !== null && _0x319ae3 !== undefined ? _0x319ae3 : ""
        };
      }
    });
  return {
    "isEnd": _0x4a7148,
    "data": _0xa736dd
  };
}
async function getMusicSheetInfo(_0xbd702f, _0x1c0297) {
  const _0x1e81c8 = await importMusicSheet(_0xbd702f.id);
  return {
    "isEnd": true,
    "musicList": _0x1e81c8
  };
}
const qualityLevels = {
  "low": "exhigh",
  "standard": "exhigh",
  "high": "exhigh",
  "super": "lossless"
};
async function getMediaSource(_0x55ac6a, _0x5f32ba) {
  const _0x1d710b = (await axios_1.default.get("https://music.haitangw.cc/music/qq_song_kw.php?id=" + _0x55ac6a.songmid + "&type=json&level=" + qualityLevels[_0x5f32ba])).data;
  return {
    "url": _0x1d710b.data.url
  };
}
module.exports = {
  "platform": "元力QQ",
  "author": "å…¬ä¼—å·:ç§‘æŠ€é•¿é’",
  "version": "0.1.0",
  "srcUrl": "http://music.haitangw.net/cqapi/qq.js",
  "cacheControl": "no-cache",
  "hints": {
    "importMusicSheet": ["QQ音乐APP：自建歌单-分享-分享到微信好友/QQ好友；然后点开并复制链接，直接粘贴即可", "H5：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
  },
  "primaryKey": ["id", "songmid"],
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  async "search"(_0x2ea506, _0x1b05b3, _0x58a215) {
    if (_0x58a215 === "music") {
      return await searchMusic(_0x2ea506, _0x1b05b3);
    }
    if (_0x58a215 === "album") {
      return await searchAlbum(_0x2ea506, _0x1b05b3);
    }
    if (_0x58a215 === "artist") {
      return await searchArtist(_0x2ea506, _0x1b05b3);
    }
    if (_0x58a215 === "sheet") {
      return await searchMusicSheet(_0x2ea506, _0x1b05b3);
    }
    if (_0x58a215 === "lyric") return await searchLyric(_0x2ea506, _0x1b05b3);
  },
  "getMediaSource": getMediaSource,
  "getLyric": getLyric,
  "getAlbumInfo": getAlbumInfo,
  "getArtistWorks": getArtistWorks,
  "importMusicSheet": importMusicSheet,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getRecommendSheetsByTag": getRecommendSheetsByTag,
  "getMusicSheetInfo": getMusicSheetInfo
};