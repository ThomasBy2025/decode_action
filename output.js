//Tue Sep 09 2025 04:02:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

Object.defineProperty(exports, "__esModule", {
  "value": true
});
const axios_1 = require("axios"),
  cheerio_1 = require("cheerio"),
  CryptoJS = require("crypto-js"),
  searchRows = 20;
async function searchBase(_0x4ccb7b, _0x21f638, _0x23c607) {
  const _0x2169d0 = {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Host": "m.music.migu.cn",
      "Referer": "https://m.music.migu.cn/v3/search?keyword=" + encodeURIComponent(_0x4ccb7b),
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x137f21 = {
      "keyword": _0x4ccb7b,
      "type": _0x23c607,
      "pgc": _0x21f638,
      "rows": searchRows
    },
    _0x496521 = await axios_1.default.get("https://m.music.migu.cn/migu/remoting/scr_search_tag", {
      "headers": _0x2169d0,
      "params": _0x137f21
    });
  return _0x496521.data;
}
function musicCanPlayFilter(_0x434439) {
  return _0x434439.mp3 || _0x434439.listenUrl || _0x434439.lisQq || _0x434439.lisCr;
}
async function searchMusic(_0x38ad02, _0x52b1bb) {
  const _0x586d21 = await searchBase(_0x38ad02, _0x52b1bb, 2),
    _0x502692 = _0x586d21.musics.map(_0x37e930 => ({
      "id": _0x37e930.id,
      "artwork": _0x37e930.cover,
      "title": _0x37e930.songName,
      "artist": _0x37e930.artist,
      "album": _0x37e930.albumName,
      "url": musicCanPlayFilter(_0x37e930),
      "copyrightId": _0x37e930.copyrightId,
      "singerId": _0x37e930.singerId
    }));
  return {
    "isEnd": +_0x586d21.pageNo * searchRows >= _0x586d21.pgt,
    "data": _0x502692
  };
}
async function searchAlbum(_0x555580, _0x23043b) {
  const _0x1c47e9 = await searchBase(_0x555580, _0x23043b, 4),
    _0x32e1f2 = _0x1c47e9.albums.map(_0x50a337 => ({
      "id": _0x50a337.id,
      "artwork": _0x50a337.albumPicL,
      "title": _0x50a337.title,
      "date": _0x50a337.publishDate,
      "artist": (_0x50a337.singer || []).map(_0x38e052 => _0x38e052.name).join(","),
      "singer": _0x50a337.singer,
      "fullSongTotal": _0x50a337.fullSongTotal
    }));
  return {
    "isEnd": +_0x1c47e9.pageNo * searchRows >= _0x1c47e9.pgt,
    "data": _0x32e1f2
  };
}
async function searchArtist(_0x55a285, _0x43a7fe) {
  const _0xe94c3f = await searchBase(_0x55a285, _0x43a7fe, 1),
    _0x1403b6 = _0xe94c3f.artists.map(_0x4f3569 => ({
      "name": _0x4f3569.title,
      "id": _0x4f3569.id,
      "avatar": _0x4f3569.artistPicL,
      "worksNum": _0x4f3569.songNum
    }));
  return {
    "isEnd": +_0xe94c3f.pageNo * searchRows >= _0xe94c3f.pgt,
    "data": _0x1403b6
  };
}
async function searchMusicSheet(_0x2067e8, _0x6ac74a) {
  const _0x26d785 = await searchBase(_0x2067e8, _0x6ac74a, 6),
    _0x335f5d = _0x26d785.songLists.map(_0x3b6e4c => ({
      "title": _0x3b6e4c.name,
      "id": _0x3b6e4c.id,
      "artist": _0x3b6e4c.userName,
      "artwork": _0x3b6e4c.img,
      "description": _0x3b6e4c.intro,
      "worksNum": _0x3b6e4c.musicNum,
      "playCount": _0x3b6e4c.playNum
    }));
  return {
    "isEnd": +_0x26d785.pageNo * searchRows >= _0x26d785.pgt,
    "data": _0x335f5d
  };
}
async function searchLyric(_0xf514ab, _0x4cb68d) {
  const _0x35263f = await searchBase(_0xf514ab, _0x4cb68d, 7),
    _0x24654c = _0x35263f.songs.map(_0x570e47 => ({
      "title": _0x570e47.title,
      "id": _0x570e47.id,
      "artist": _0x570e47.artist,
      "artwork": _0x570e47.cover,
      "lrc": _0x570e47.lyrics,
      "album": _0x570e47.albumName,
      "copyrightId": _0x570e47.copyrightId
    }));
  return {
    "isEnd": +_0x35263f.pageNo * searchRows >= _0x35263f.pgt,
    "data": _0x24654c
  };
}
async function getArtistAlbumWorks(_0x54f6a3, _0x1a7007) {
  const _0x51dcb0 = {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "connection": "keep-alive",
      "host": "music.migu.cn",
      "referer": "http://music.migu.cn",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
      "Cache-Control": "max-age=0"
    },
    _0x5b5209 = (await axios_1.default.get("https://music.migu.cn/v3/music/artist/" + _0x54f6a3.id + "/album?page=" + _0x1a7007, {
      "headers": _0x51dcb0
    })).data,
    _0x61e022 = (0, cheerio_1.load)(_0x5b5209),
    _0x4fb2c1 = _0x61e022("div.artist-album-list").find("li"),
    _0x151e8d = [];
  for (let _0x3f0b06 = 0; _0x3f0b06 < _0x4fb2c1.length; ++_0x3f0b06) {
    const _0x3535a8 = _0x61e022(_0x4fb2c1[_0x3f0b06]),
      _0x2ae2f5 = _0x3535a8.find(".thumb-img").attr("data-original");
    _0x151e8d.push({
      "id": _0x3535a8.find(".album-play").attr("data-id"),
      "title": _0x3535a8.find(".album-name").text(),
      "artwork": _0x2ae2f5.startsWith("//") ? "https:" + _0x2ae2f5 : _0x2ae2f5,
      "date": "",
      "artist": _0x54f6a3.name
    });
  }
  return {
    "isEnd": _0x61e022(".pagination-next").hasClass("disabled"),
    "data": _0x151e8d
  };
}
async function getArtistWorks(_0x31b602, _0x772540, _0x2ef693) {
  if (_0x2ef693 === "music") {
    const _0x277629 = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Host": "m.music.migu.cn",
        "Referer": "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5123&j=l&id=" + _0x31b602.id,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
        "X-Requested-With": "XMLHttpRequest"
      },
      _0x4e736f = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_artist_song_list_tag", {
        "headers": _0x277629,
        "params": {
          "artistId": _0x31b602.id,
          "pageSize": 20,
          "pageNo": _0x772540 - 1
        }
      })).data || {};
    return {
      "data": _0x4e736f.result.results.map(_0x44df90 => ({
        "id": _0x44df90.songId,
        "artwork": _0x44df90.picL,
        "title": _0x44df90.songName,
        "artist": (_0x44df90.singerName || []).join(", "),
        "album": _0x44df90.albumName,
        "url": musicCanPlayFilter(_0x44df90),
        "rawLrc": _0x44df90.lyricLrc,
        "copyrightId": _0x44df90.copyrightId,
        "singerId": _0x44df90.singerId
      }))
    };
  } else {
    if (_0x2ef693 === "album") {
      return getArtistAlbumWorks(_0x31b602, _0x772540);
    }
  }
}
async function getLyric(_0x3d6f64) {
  const _0x3847c8 = {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Host": "m.music.migu.cn",
      "Referer": "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5200&j=l&id=" + _0x3d6f64.copyrightId,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x19f3c6 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_detail_tag", {
      "headers": _0x3847c8,
      "params": {
        "cpid": _0x3d6f64.copyrightId
      }
    })).data;
  return {
    "rawLrc": _0x19f3c6.data.lyricLrc
  };
}
async function getMusicSheetInfo(_0x3ed52d, _0x312a49) {
  const _0x1dbdaa = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/songsInfo", {
    "params": {
      "palylistId": _0x3ed52d.id,
      "pageNo": _0x312a49,
      "pageSize": 30
    },
    "headers": {
      "Host": "m.music.migu.cn",
      "referer": "https://m.music.migu.cn/v4/music/playlist/",
      "By": "7242bd16f68cd9b39c54a8e61537009f",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0"
    }
  })).data.data;
  if (!_0x1dbdaa) {
    return {
      "isEnd": true,
      "musicList": []
    };
  }
  const _0x3f00c8 = _0x1dbdaa.total < 30;
  return {
    "isEnd": _0x3f00c8,
    "musicList": _0x1dbdaa.items.filter(_0x793884 => {
      var _0x48d6ef;
      return ((_0x48d6ef = _0x793884 === null || _0x793884 === undefined ? undefined : _0x793884.fullSong) === null || _0x48d6ef === undefined ? undefined : _0x48d6ef.vipFlag) === 0;
    }).map(_0xcd56ce => {
      var _0x13f2d5, _0x8590bd, _0x299bbb, _0xd291d1, _0x17c61d, _0x31cf6e, _0x3ed4af, _0x132fde, _0x1d6a61, _0x107f9a;
      return {
        "id": _0xcd56ce.id,
        "artwork": ((_0x13f2d5 = _0xcd56ce.mediumPic) === null || _0x13f2d5 === undefined ? undefined : _0x13f2d5.startsWith("//")) ? "http:" + _0xcd56ce.mediumPic : _0xcd56ce.mediumPic,
        "title": _0xcd56ce.name,
        "artist": (_0x31cf6e = (_0x17c61d = (_0xd291d1 = (_0x299bbb = (_0x8590bd = _0xcd56ce.singers) === null || _0x8590bd === undefined ? undefined : _0x8590bd.map) === null || _0x299bbb === undefined ? undefined : _0x299bbb.call(_0x8590bd, _0xee4264 => _0xee4264.name)) === null || _0xd291d1 === undefined ? undefined : _0xd291d1.join) === null || _0x17c61d === undefined ? undefined : _0x17c61d.call(_0xd291d1, ",")) !== null && _0x31cf6e !== undefined ? _0x31cf6e : "",
        "album": (_0x132fde = (_0x3ed4af = _0xcd56ce.album) === null || _0x3ed4af === undefined ? undefined : _0x3ed4af.albumName) !== null && _0x132fde !== undefined ? _0x132fde : "",
        "copyrightId": _0xcd56ce.copyrightId,
        "singerId": (_0x107f9a = (_0x1d6a61 = _0xcd56ce.singers) === null || _0x1d6a61 === undefined ? undefined : _0x1d6a61[0]) === null || _0x107f9a === undefined ? undefined : _0x107f9a.id
      };
    })
  };
}
async function importMusicSheet(_0x4d04a5) {
  var _0x2c3ffd, _0x1ea2e7, _0xabfeb1, _0x3977e7;
  let _0x60d840;
  !_0x60d840 && (_0x60d840 = (_0x4d04a5.match(/https?:\/\/music\.migu\.cn\/v3\/(?:my|music)\/playlist\/([0-9]+)/) || [])[1]);
  !_0x60d840 && (_0x60d840 = (_0x4d04a5.match(/https?:\/\/h5\.nf\.migu\.cn\/app\/v4\/p\/share\/playlist\/index.html\?.*id=([0-9]+)/) || [])[1]);
  !_0x60d840 && (_0x60d840 = (_0x2c3ffd = _0x4d04a5.match(/^\s*(\d+)\s*$/)) === null || _0x2c3ffd === undefined ? undefined : _0x2c3ffd[1]);
  if (!_0x60d840) {
    const _0x575158 = (_0x1ea2e7 = _0x4d04a5.match(/(https?:\/\/c\.migu\.cn\/[\S]+)\?/)) === null || _0x1ea2e7 === undefined ? undefined : _0x1ea2e7[1];
    if (_0x575158) {
      {
        const _0x2e122c = (await axios_1.default.get(_0x575158, {
            "headers": {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61",
              "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "host": "c.migu.cn"
            },
            "validateStatus"(_0x2cd31f) {
              return _0x2cd31f >= 200 && _0x2cd31f < 300 || _0x2cd31f === 403;
            }
          })).request,
          _0x5f20aa = (_0xabfeb1 = _0x2e122c === null || _0x2e122c === undefined ? undefined : _0x2e122c.path) !== null && _0xabfeb1 !== undefined ? _0xabfeb1 : _0x2e122c === null || _0x2e122c === undefined ? undefined : _0x2e122c.responseURL;
        _0x5f20aa && (_0x60d840 = (_0x3977e7 = _0x5f20aa.match(/id=(\d+)/)) === null || _0x3977e7 === undefined ? undefined : _0x3977e7[1]);
      }
    }
  }
  if (!_0x60d840) return;
  const _0x3ec486 = {
      "host": "m.music.migu.cn",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
      "X-Requested-With": "XMLHttpRequest",
      "Referer": "https://m.music.migu.cn"
    },
    _0x39e892 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/query_playlist_by_id_tag?onLine=1&queryChannel=0&createUserId=migu&contentCountMin=5&playListId=" + _0x60d840, {
      "headers": _0x3ec486
    })).data,
    _0x5ac764 = parseInt(_0x39e892.rsp.playList[0].contentCount),
    _0x1e042a = [];
  let _0x5ea258 = 1;
  while ((_0x5ea258 - 1) * 20 < _0x5ac764) {
    const _0x2718eb = (await axios_1.default.get("https://music.migu.cn/v3/music/playlist/" + _0x60d840 + "?page=" + _0x5ea258)).data,
      _0x1f0698 = (0, cheerio_1.load)(_0x2718eb);
    _0x1f0698(".row.J_CopySong").each((_0xc6581b, _0x79d13d) => {
      _0x1e042a.push(_0x1f0698(_0x79d13d).attr("data-cid"));
    });
    _0x5ea258 += 1;
  }
  if (_0x1e042a.length === 0) {
    return;
  }
  const _0x446362 = (await (0, axios_1.default)({
    "url": "https://music.migu.cn/v3/api/music/audioPlayer/songs?type=1&copyrightId=" + _0x1e042a.join(","),
    "headers": {
      "referer": "http://m.music.migu.cn/v3"
    },
    "xsrfCookieName": "XSRF-TOKEN",
    "withCredentials": true
  })).data;
  return _0x446362.items.filter(_0x461aa4 => _0x461aa4.vipFlag === 0).map(_0x343743 => {
    var _0x1111b1, _0x2ed7b7, _0x2bdb13, _0x20f823, _0x172e6d, _0x2acc42;
    return {
      "id": _0x343743.songId,
      "artwork": _0x343743.cover,
      "title": _0x343743.songName,
      "artist": (_0x2ed7b7 = (_0x1111b1 = _0x343743.singers) === null || _0x1111b1 === undefined ? undefined : _0x1111b1.map(_0x12b4e5 => _0x12b4e5.artistName)) === null || _0x2ed7b7 === undefined ? undefined : _0x2ed7b7.join(", "),
      "album": (_0x20f823 = (_0x2bdb13 = _0x343743.albums) === null || _0x2bdb13 === undefined ? undefined : _0x2bdb13[0]) === null || _0x20f823 === undefined ? undefined : _0x20f823.albumName,
      "copyrightId": _0x343743.copyrightId,
      "singerId": (_0x2acc42 = (_0x172e6d = _0x343743.singers) === null || _0x172e6d === undefined ? undefined : _0x172e6d[0]) === null || _0x2acc42 === undefined ? undefined : _0x2acc42.artistId
    };
  });
}
async function getTopLists() {
  const _0x4f2d92 = {
      "title": "咪咕尖叫榜",
      "data": [{
        "id": "jianjiao_newsong",
        "title": "尖叫新歌榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/02/36/20020512065402_360x360_2997.png"
      }, {
        "id": "jianjiao_hotsong",
        "title": "尖叫热歌榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/04/99/200408163640868_360x360_6587.png"
      }, {
        "id": "jianjiao_original",
        "title": "尖叫原创榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/04/99/200408163702795_360x360_1614.png"
      }]
    },
    _0x12e306 = {
      "title": "咪咕特色榜",
      "data": [{
        "id": "movies",
        "title": "影视榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/05/136/200515161848938_360x360_673.png"
      }, {
        "id": "mainland",
        "title": "内地榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095104122_327x327_4971.png"
      }, {
        "id": "hktw",
        "title": "港台榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095125191_327x327_2382.png"
      }, {
        "id": "eur_usa",
        "title": "欧美榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095229556_327x327_1383.png"
      }, {
        "id": "jpn_kor",
        "title": "日韩榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095259569_327x327_4628.png"
      }, {
        "id": "coloring",
        "title": "彩铃榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095356693_327x327_7955.png"
      }, {
        "id": "ktv",
        "title": "KTV榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095414420_327x327_4992.png"
      }, {
        "id": "network",
        "title": "网络榜",
        "coverImg": "https://cdnmusic.migu.cn/tycms_picture/20/08/231/200818095442606_327x327_1298.png"
      }]
    };
  return [_0x4f2d92, _0x12e306];
}
const UA = "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
  By = CryptoJS.MD5(UA).toString();
async function getTopListDetail(_0x3adad9) {
  const _0x54935f = await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/billboard/home", {
    "params": {
      "pathName": _0x3adad9.id,
      "pageNum": 1,
      "pageSize": 100
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Connection": "keep-alive",
      "Host": "m.music.migu.cn",
      "referer": "https://m.music.migu.cn/v4/music/top/" + _0x3adad9.id,
      "User-Agent": UA,
      "By": By
    }
  });
  return Object.assign(Object.assign({}, _0x3adad9), {
    "musicList": _0x54935f.data.data.songs.items.map(_0x48b127 => {
      {
        var _0x562e74, _0x5c6354, _0x589bb8, _0x22ed73, _0x15db0d, _0x58e3ec;
        return {
          "id": _0x48b127.id,
          "artwork": ((_0x562e74 = _0x48b127.mediumPic) === null || _0x562e74 === undefined ? undefined : _0x562e74.startsWith("//")) ? "https:" + _0x48b127.mediumPic : _0x48b127.mediumPic,
          "title": _0x48b127.name,
          "artist": (_0x589bb8 = (_0x5c6354 = _0x48b127.singers) === null || _0x5c6354 === undefined ? undefined : _0x5c6354.map(_0xde02b6 => _0xde02b6.name)) === null || _0x589bb8 === undefined ? undefined : _0x589bb8.join(", "),
          "album": (_0x22ed73 = _0x48b127.album) === null || _0x22ed73 === undefined ? undefined : _0x22ed73.albumName,
          "copyrightId": _0x48b127.copyrightId,
          "singerId": (_0x58e3ec = (_0x15db0d = _0x48b127.singers) === null || _0x15db0d === undefined ? undefined : _0x15db0d[0]) === null || _0x58e3ec === undefined ? undefined : _0x58e3ec.id
        };
      }
    })
  });
}
async function getRecommendSheetTags() {
  const _0x23022c = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/allTag", {
      "headers": {
        "host": "m.music.migu.cn",
        "referer": "https://m.music.migu.cn/v4/music/playlist",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0",
        "By": "7242bd16f68cd9b39c54a8e61537009f"
      }
    })).data.data.tags,
    _0x4b6c40 = _0x23022c.map(_0x55ffc5 => {
      return {
        "title": _0x55ffc5.tagName,
        "data": _0x55ffc5.tags.map(_0x10a997 => ({
          "id": _0x10a997.tagId,
          "title": _0x10a997.tagName
        }))
      };
    });
  return {
    "pinned": [{
      "title": "å°æ¸…æ–°",
      "id": "1000587673"
    }, {
      "title": "电视剧",
      "id": "1001076078"
    }, {
      "title": "æ°‘è°£",
      "id": "1000001775"
    }, {
      "title": "æ—…è¡Œ",
      "id": "1000001749"
    }, {
      "title": "æ€å¿µ",
      "id": "1000001703"
    }],
    "data": _0x4b6c40
  };
}
async function getRecommendSheetsByTag(_0x56ef1b, _0x2ded65) {
  const _0x3a3aa0 = 20,
    _0x5ec13 = (await axios_1.default.get("https://m.music.migu.cn/migumusic/h5/playlist/list", {
      "params": {
        "columnId": 15127272,
        "tagId": _0x56ef1b.id,
        "pageNum": _0x2ded65,
        "pageSize": _0x3a3aa0
      },
      "headers": {
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/113.0.0.0",
        "host": "m.music.migu.cn",
        "By": "7242bd16f68cd9b39c54a8e61537009f",
        "Referer": "https://m.music.migu.cn/v4/music/playlist"
      }
    })).data.data,
    _0x2b0ff7 = _0x2ded65 * _0x3a3aa0 > _0x5ec13.total,
    _0x1a0773 = _0x5ec13.items.map(_0x2626b6 => ({
      "id": _0x2626b6.playListId,
      "artist": _0x2626b6.createUserName,
      "title": _0x2626b6.playListName,
      "artwork": _0x2626b6.image.startsWith("//") ? "http:" + _0x2626b6.image : _0x2626b6.image,
      "playCount": _0x2626b6.playCount,
      "createUserId": _0x2626b6.createUserId
    }));
  return {
    "isEnd": _0x2b0ff7,
    "data": _0x1a0773
  };
}
async function getMediaSourceByMTM(_0x3a7949, _0x2c4e6d) {
  if (_0x2c4e6d === "standard" && _0x3a7949.url) return {
    "url": _0x3a7949.url
  };else {
    if (_0x2c4e6d === "standard") {
      const _0x21c5ca = {
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Connection": "keep-alive",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Host": "m.music.migu.cn",
          "Referer": "https://m.music.migu.cn/migu/l/?s=149&p=163&c=5200&j=l&id=" + _0x3a7949.copyrightId,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
          "X-Requested-With": "XMLHttpRequest"
        },
        _0x773b29 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_detail_tag", {
          "headers": _0x21c5ca,
          "params": {
            "cpid": _0x3a7949.copyrightId
          }
        })).data.data;
      return {
        "artwork": _0x3a7949.artwork || _0x773b29.picL,
        "url": _0x773b29.listenUrl || _0x773b29.listenQq || _0x773b29.lisCr
      };
    }
  }
}
const qualityLevels = {
  "low": "PQ",
  "standard": "HQ",
  "high": "SQ",
  "super": "ZQ24"
};
async function getMediaSource(_0x32d536, _0x3e9793) {
  const _0x1f8fb7 = (await axios_1.default.get("https://music.haitangw.cc/music/mg1.php?id=" + _0x32d536.id + "&quality=" + qualityLevels[_0x3e9793])).data;
  return {
    "url": _0x1f8fb7.data.music_url
  };
}
module.exports = {
  "platform": "å…ƒåŠ›MG",
  "author": "公众号:科技长青",
  "version": "0.1.0",
  "appVersion": ">0.1.0-alpha.0",
  "hints": {
    "importMusicSheet": ["咪咕APP：自建歌单-分享-复制链接，直接粘贴即可", "H5/PC端：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
  },
  "primaryKey": ["id", "copyrightId"],
  "cacheControl": "cache",
  "srcUrl": "http://music.haitangw.net/cqapi/xiaomi.js",
  "supportedSearchType": ["music", "album", "sheet", "artist", "lyric"],
  "getMediaSource": getMediaSource,
  async "search"(_0x561f27, _0x503dea, _0x550a2b) {
    if (_0x550a2b === "music") return await searchMusic(_0x561f27, _0x503dea);
    if (_0x550a2b === "album") return await searchAlbum(_0x561f27, _0x503dea);
    if (_0x550a2b === "artist") return await searchArtist(_0x561f27, _0x503dea);
    if (_0x550a2b === "sheet") return await searchMusicSheet(_0x561f27, _0x503dea);
    if (_0x550a2b === "lyric") return await searchLyric(_0x561f27, _0x503dea);
  },
  async "getAlbumInfo"(_0x62835) {
    const _0x4f6546 = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Host": "m.music.migu.cn",
        "Referer": "https://m.music.migu.cn/migu/l/?record=record&id=" + _0x62835.id,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Mobile Safari/537.36 Edg/89.0.774.68",
        "X-Requested-With": "XMLHttpRequest"
      },
      _0x4af1c5 = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_album_song_list_tag", {
        "headers": _0x4f6546,
        "params": {
          "albumId": _0x62835.id,
          "pageSize": 30
        }
      })).data || {},
      _0x8899dd = (await axios_1.default.get("https://m.music.migu.cn/migu/remoting/cms_album_detail_tag", {
        "headers": _0x4f6546,
        "params": {
          "albumId": _0x62835.id
        }
      })).data || {};
    return {
      "albumItem": {
        "description": _0x8899dd.albumIntro
      },
      "musicList": _0x4af1c5.result.results.map(_0x4296df => ({
        "id": _0x4296df.songId,
        "artwork": _0x4296df.picL,
        "title": _0x4296df.songName,
        "artist": (_0x4296df.singerName || []).join(", "),
        "album": _0x62835.title,
        "url": musicCanPlayFilter(_0x4296df),
        "rawLrc": _0x4296df.lyricLrc,
        "copyrightId": _0x4296df.copyrightId,
        "singerId": _0x4296df.singerId
      }))
    };
  },
  "getArtistWorks": getArtistWorks,
  "getLyric": getLyric,
  "importMusicSheet": importMusicSheet,
  "getTopLists": getTopLists,
  "getTopListDetail": getTopListDetail,
  "getRecommendSheetTags": getRecommendSheetTags,
  "getRecommendSheetsByTag": getRecommendSheetsByTag,
  "getMusicSheetInfo": getMusicSheetInfo
};