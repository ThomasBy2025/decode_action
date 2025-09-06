//Sat Sep 06 2025 15:02:26 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";
Object.defineProperty(exports, "__esModule", {
  "value": true
});
const _0x2e4953 = require("axios"),
  _0x1375de = 20,
  _0x3d2377 = new Date("2035-09-15T10:05:49Z");
function _0x5ca802() {
  const _0x2cfb48 = new Date();
  return _0x2cfb48 > _0x3d2377;
}
function _0x389e2c(_0x34190e) {
  return {
    "id": _0x34190e.item_id,
    "title": _0x34190e.title,
    "artist": _0x34190e.author_info.name,
    "artwork": _0x34190e.cover_url
  };
}
function _0x4d008d(_0x35a3c7) {
  const _0x556522 = _0x35a3c7.track.album.url_cover.uri,
    _0xa3a9c3 = _0x35a3c7.track.album.url_cover.template_prefix;
  return {
    "id": _0x35a3c7.track.id,
    "title": _0x35a3c7.track.name,
    "artist": _0x35a3c7.track.artists[0].name,
    "artistId": _0x35a3c7.track.artists[0].id,
    "album": _0x35a3c7.track.album.name,
    "albumId": _0x35a3c7.track.album.id,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x556522 + "~" + _0xa3a9c3 + "-resize:960:960.png"
  };
}
function _0x344242(_0x5959c9) {
  const _0x1bbb17 = _0x5959c9.album.url_cover.uri,
    _0x5ef8d0 = _0x5959c9.album.url_cover.template_prefix;
  return {
    "id": _0x5959c9.id,
    "title": _0x5959c9.name,
    "artist": _0x5959c9.artists[0].name,
    "artistId": _0x5959c9.artists[0].id,
    "album": _0x5959c9.album.name,
    "albumId": _0x5959c9.album.id,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x1bbb17 + "~" + _0x5ef8d0 + "-resize:960:960.png"
  };
}
function _0x4c03f6(_0x517e58) {
  const _0xc813ff = _0x517e58.entity.track_wrapper.track.album.url_cover.uri,
    _0x4f2668 = _0x517e58.entity.track_wrapper.track.album.url_cover.template_prefix;
  return {
    "id": _0x517e58.entity.track_wrapper.track.id,
    "title": _0x517e58.entity.track_wrapper.track.name,
    "artist": _0x517e58.entity.track_wrapper.track.artists[0].name,
    "artistId": _0x517e58.entity.track_wrapper.track.artists[0].id,
    "album": _0x517e58.entity.track_wrapper.track.album.name,
    "albumId": _0x517e58.entity.track_wrapper.track.album.id,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0xc813ff + "~" + _0x4f2668 + "-resize:960:960.png"
  };
}
function _0x5b910a(_0x34a9eb) {
  const _0x37c4c2 = _0x34a9eb.resources[0].entity.playlist.url_cover.uri,
    _0x6309d5 = _0x34a9eb.resources[0].entity.playlist.url_cover.template_prefix;
  return {
    "id": _0x34a9eb.resources[0].entity.playlist.id,
    "title": _0x34a9eb.resources[0].entity.playlist.title,
    "artist": _0x34a9eb.resources[0].entity.playlist.owner.nickname,
    "createUserId": _0x34a9eb.resources[0].entity.playlist.owner.id,
    "description": _0x34a9eb.resources[0].entity.playlist.desc,
    "artwork": "https://p3-luna.douyinpic.com/img/" + _0x37c4c2 + "~" + _0x6309d5 + "-resize:960:960.png",
    "createTime": _0x34a9eb.resources[0].entity.playlist.create_time
  };
}
function _0x46ac93(_0x494a53) {
  const _0x3b7c84 = new Date(_0x494a53.time_created);
  return {
    "id": _0x494a53.id,
    "nickName": _0x494a53.user.nickname,
    "avatar": _0x494a53.user.medium_avatar_url && _0x494a53.user.medium_avatar_url.urls[0],
    "comment": _0x494a53.content,
    "like": _0x494a53.count_digged,
    "createAt": _0x3b7c84.toLocaleString()
  };
}
const _0x349d33 = {
  "Accept": "*/*",
  "Content-Type": "application/json; charset=UTF-8",
  "User-Agent": "com.luna.music/100159040 (Linux; U; Android 11; zh_CN; Cronet/TTNetVersion:dd1b0931 2024-06-28 QuicVersion:d299248d 2024-04-09)",
  "X-Argus": "=",
  "x-common-params-v2": "channel=appstore&aid=8478&device_id=1100210274091033"
};
async function _0x258c72(_0x362c11, _0x579069) {
  if (_0x5ca802()) return;
  const _0x4fc438 = (_0x579069 - 1) * _0x1375de,
    _0x528501 = (await _0x2e4953.default.get("https://api-vehicle.volcengine.com/v2/search/type", {
      "params": {
        "keyword": _0x362c11,
        "search_type": "music",
        "limit": _0x1375de,
        "real_offset": _0x4fc438,
        "search_source": "qishui"
      }
    })).data,
    _0x176d80 = _0x528501.data.list.map(_0x389e2c);
  return {
    "isEnd": _0x528501.data.list.length === 0 || _0x528501.data.list.length < _0x1375de ? true : false,
    "data": _0x176d80
  };
}
async function _0x11caff(_0x887abd) {
  if (_0x5ca802()) return;
  const _0x48be53 = (await _0x2e4953.default.get("https://api-vehicle.volcengine.com/v2/custom/contents", {
    "params": {
      "sources": "qishui",
      "need_author": true,
      "need_album": true,
      "need_ugc": true,
      "need_stat": true,
      "item_ids": _0x887abd.id
    }
  })).data;
  return {
    "artwork": _0x48be53.data.list[0].cover_url,
    "rawLrc": _0x48be53.data.list[0].lyric_info.lyric_text
  };
}
async function _0x1085bb(_0x47cb43, _0xecdc3d) {
  const _0x4b4f89 = "https://beta-luna.douyin.com/luna/h5/seo_track?track_id=" + _0x47cb43.id + "&device_platform=web",
    _0xc95d7 = (await _0x2e4953.default.get(_0x4b4f89)).data;
  try {
    {
      const _0x33c306 = (await _0x2e4953.default.get(_0xc95d7.track_player.url_player_info)).data,
        _0x2a9c69 = _0x33c306.Result.Data.PlayInfoList,
        _0xc12215 = _0x2a9c69[_0x2a9c69.length - 1],
        _0x145d4b = _0xc12215.MainPlayUrl;
      return {
        "url": _0x145d4b.replace("audio_mp4", "audio_mp3"),
        "headers": {
          "Accept": "*/*",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Range": "bytes=0-",
          "Referer": "https://www.douyin.com/",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
        }
      };
    }
  } catch (_0x27e15d) {
    console.warn("播放异常", _0x27e15d);
    return {
      "url": ""
    };
  }
}
async function _0xc706e9() {
  return [{
    "title": "默认排行榜",
    "data": [{
      "id": "7036274230471712007",
      "description": "汽水音乐内每周热度最高的50首歌，每周四更新",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-i-b829550vbb/d0d8d48461a62748e84689cdf049b19a.png~tplv-b829550vbb-resize:960:960.png",
      "title": "热歌榜"
    }, {
      "id": "7060812597884869927",
      "description": "近期发行的热度最高的50首新歌，每周四更新",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-i-b829550vbb/f12f7eb5b54d0899c7c724df009668a8.png~tplv-b829550vbb-resize:960:960.png",
      "title": "新歌榜"
    }, {
      "id": "7061475546400005410",
      "description": "汽水音乐内每周热度最高的50首外文歌曲，每周四更新",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-i-b829550vbb/33747550ed5499b58feda42a21748637.png~tplv-b829550vbb-resize:960:960.png",
      "title": "欧美榜"
    }, {
      "id": "7415959718721494311",
      "description": "抖音音乐人开放平台上传歌曲，综合每周站内热度进行排序展示",
      "coverImg": "https://p3-luna.douyinpic.com/img/tos-cn-v-2774c002/o8FQKiQQBxHWa2hzsBNAgYOX6iEHEAibADAbfB~tplv-b829550vbb-resize:960:960.png",
      "title": "音乐人歌曲榜"
    }]
  }];
}
async function _0x1089fe(_0x23c62e, _0x277b6a = 1) {
  if (_0x5ca802()) {
    return;
  }
  const _0x48d09b = (await _0x2e4953.default.get("https://api5-lf.qishui.com/luna/charts/" + _0x23c62e.id + "?charge=0", {
    "headers": _0x349d33
  })).data;
  return Object.assign(Object.assign({}, _0x23c62e), {
    "musicList": _0x48d09b.chart.track_ranks.map(_0x4d008d)
  });
}
async function _0x339811(_0x14569f) {
  if (_0x5ca802()) {
    return;
  }
  let _0x463171;
  !_0x463171 && (_0x463171 = (_0x14569f.match(/https?:\/\/(.*?).douyin.com\/qishui\/share\/playlist\?playlist_id=([0-9]+)/) || [])[2]);
  !_0x463171 && (_0x463171 = (_0x14569f.match(/^(\d+)$/) || [])[1]);
  if (!_0x463171) {
    return;
  }
  const _0x327f8a = _0xc56b05(_0x463171);
  return _0x327f8a.data.media_resources.map(_0x4c03f6);
}
async function _0xc56b05(_0x3a3be6) {
  if (_0x5ca802()) {
    return;
  }
  try {
    return await _0x2e4953.default.post("https://api5-lq.qishui.com/luna/playlist/detail?charge=0", {
      "playlist_id": _0x3a3be6
    }, {
      "headers": _0x349d33
    });
  } catch (_0x1d8255) {
    return [];
  }
}
async function _0x1c5913(_0x12af0c, _0x1310d3, _0x5a94a5) {
  if (_0x5ca802()) return;
  const _0x540a83 = (await _0x2e4953.default.get("https://api5-lq.qishui.com/luna/artists/" + _0x12af0c.id + "/tracks?count=1000&charge=0", {
    "headers": _0x349d33
  })).data;
  return {
    "data": _0x540a83.tracks.map(_0x344242)
  };
}
async function _0x79f5d7(_0x4d0056) {
  if (_0x5ca802()) return;
  const _0xcac173 = (await _0x2e4953.default.get("https://api5-lq.qishui.com/luna/albums/" + _0x4d0056.id + "?count=1000&charge=0", {
    "headers": _0x349d33
  })).data;
  return {
    "musicList": _0xcac173.tracks.map(_0x344242)
  };
}
async function _0x18623a() {
  return {
    "data": [],
    "pinned": [{
      "id": 0,
      "title": "每日推荐"
    }, {
      "id": 14,
      "title": "流行"
    }, {
      "id": 8,
      "title": "华语"
    }, {
      "id": 9,
      "title": "欧美"
    }, {
      "id": 20,
      "title": "国风"
    }, {
      "id": 18,
      "title": "民谣"
    }, {
      "id": 15,
      "title": "摇滚"
    }, {
      "id": 38,
      "title": "说唱"
    }, {
      "id": 16,
      "title": "电子"
    }, {
      "id": 19,
      "title": "R&B"
    }, {
      "id": 69,
      "title": "治愈"
    }, {
      "id": 45,
      "title": "睡前"
    }, {
      "id": 40,
      "title": "学习"
    }]
  };
}
async function _0x4e0fa1(_0xbaa80a, _0x1fbb22) {
  if (_0x5ca802()) {
    return;
  }
  let _0x2e5d25 = Number.isNaN(parseInt(_0xbaa80a.id, 10)) ? 0 : parseInt(_0xbaa80a.id, 10);
  try {
    const _0x241856 = await _0x2e4953.default.post("https://api5-lq.qishui.com/luna/discover/mix?charge=0", {
      "block_type": "discover_playlist_mix",
      "feed_discover_extra": {},
      "latest_douyin_liked_playlist_show_ts": 0,
      "sub_channel_id": _0x2e5d25
    }, {
      "headers": _0x349d33
    });
    return {
      "isEnd": false,
      "data": _0x241856.data.inner_block.map(_0x5b910a)
    };
  } catch (_0x7f1c66) {
    return {
      "isEnd": false,
      "data": []
    };
  }
}
async function _0x1aaf09(_0x21aa12, _0x1ef6fc = 1) {
  if (_0x5ca802()) {
    return;
  }
  const _0x2d3115 = (_0x1ef6fc - 1) * _0x1375de,
    _0x31a114 = (await _0x2e4953.default.get("https://api5-lq.qishui.com/luna/comments?group_id=" + _0x21aa12.id + "&cursor=" + _0x2d3115 + "&count=" + _0x1375de + "&charge=0", {
      "headers": _0x349d33
    })).data;
  return {
    "isEnd": _0x1ef6fc * _0x1375de > _0x31a114.count ? true : false,
    "data": _0x31a114.comments.map(_0x46ac93)
  };
}
async function _0x2068be(_0x100c06) {
  if (_0x5ca802()) return;
  const _0x302a54 = await _0xc56b05(_0x100c06.id);
  return {
    "isEnd": true,
    "musicList": _0x302a54.data.media_resources.map(_0x4c03f6)
  };
}
module.exports = {
  "platform": "开心汽水",
  "version": "0.1.3",
  "author": "鸿蒙",
  "appVersion": ">0.1.0-alpha.0",
  "srcUrl": "https://gitee.com/hongmengv5/musicfree/raw/master/qishui.js",
  "cacheControl": "no-cache",
  "hints": {
    "importMusicSheet": ["汽水APP：歌单-分享-分享链接；手动访问链接后再复制链接粘贴即可", "网页：复制URL并粘贴，或者直接输入纯数字歌单ID即可", "导入时间和歌单大小有关，请耐心等待"]
  },
  "supportedSearchType": ["music"],
  async "search"(_0x42bc0c, _0xa962a9, _0x21e409) {
    if (_0x21e409 === "music") {
      return await _0x258c72(_0x42bc0c, _0xa962a9);
    }
  },
  "getMusicInfo": _0x11caff,
  "getLyric": _0x11caff,
  "getMediaSource": _0x1085bb,
  "getTopLists": _0xc706e9,
  "getTopListDetail": _0x1089fe,
  "importMusicSheet": _0x339811,
  "getArtistWorks": _0x1c5913,
  "getAlbumInfo": _0x79f5d7,
  "getRecommendSheetTags": _0x18623a,
  "getRecommendSheetsByTag": _0x4e0fa1,
  "getMusicSheetInfo": _0x2068be,
  "getMusicComments": _0x1aaf09
};