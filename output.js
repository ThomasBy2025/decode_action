//Wed Jan 21 2026 03:33:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
const {
    EVENT_NAMES: _0x8f8d47,
    request: _0x122003,
    on: _0x55b5ee,
    send: _0x525768
  } = globalThis.lx,
  _0x587808 = {
    "tx": {
      "128k": "6",
      "320k": "8",
      "flac": "10",
      "flac24bit": "11"
    },
    "kg": {
      "128k": "128k",
      "320k": "320k",
      "flac": "flac",
      "flac24bit": "flac24bit"
    },
    "kw": {
      "128k": "128kmp3",
      "320k": "320kmp3",
      "flac": "2000kflac",
      "flac24bit": "4000kflac"
    },
    "wy": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless",
      "flac24bit": "hires"
    },
    "mg": {
      "128k": "PQ",
      "320k": "HQ"
    }
  },
  _0x27a32e = (_0x309ff2, _0xc8ff30) => new Promise((_0x499e3f, _0x53131c) => {
    _0x122003(_0x309ff2, _0xc8ff30, (_0xbee71a, _0x42709f) => {
      if (_0xbee71a) return _0x53131c(_0xbee71a);
      _0x499e3f(_0x42709f.body);
    });
  }),
  _0x4035b7 = {
    "tx": {
      async "musicUrl"({
        songmid: _0x133598
      }, _0x532a0d) {
        let _0x24f45f = "https://api.vkeys.cn/v2/music/tencent/geturl?mid=" + _0x133598 + "&quality=" + _0x532a0d;
        const {
          data: _0x2efdba
        } = await _0x27a32e(_0x24f45f, {
          "method": "GET"
        });
        if (_0x2efdba?.["url"]) return _0x2efdba.url;
        const _0x1169a8 = {
          "6": "128k",
          "8": "320k",
          "10": "flac",
          "11": "flac24bit"
        };
        _0x24f45f = "https://88.lxmusic.中国/lxmusicv3/url/tx/" + _0x133598 + "/" + _0x1169a8[_0x532a0d];
        return _0x27a32e(_0x24f45f, {
          "method": "GET"
        }).then(_0x31a2cc => _0x31a2cc.data);
      }
    },
    "kg": {
      "musicUrl"({
        hash: _0x1e0823
      }, _0x1790b8) {
        const _0x4ffb2b = "https://88.lxmusic.中国/lxmusicv3/url/kg/" + _0x1e0823 + "/" + _0x1790b8;
        return _0x27a32e(_0x4ffb2b, {
          "method": "GET"
        }).then(_0x1614e0 => _0x1614e0.data);
      }
    },
    "kw": {
      "musicUrl"({
        songmid: _0x132559
      }, _0x4624f6) {
        const _0x18d59e = "https://nmobi.kuwo.cn/mobi.s?f=web&user=0&source=kwplayer_ar_8.5.5.0_jiakong.apk&type=convert_url_with_sign&br=" + _0x4624f6 + "&rid=" + _0x132559;
        return _0x27a32e(_0x18d59e, {
          "method": "GET"
        }).then(_0x4cb62d => _0x4cb62d.data.url.split("?")[0]);
      }
    },
    "wy": {
      async "musicUrl"({
        songmid: _0x2d46ef
      }, _0x94eca1) {
        let _0x6edfab = "https://api.cenguigui.cn/api/netease/music_v1.php?type=json&id=" + _0x2d46ef + "&level=" + _0x94eca1;
        const {
          data: _0x422bbe
        } = await _0x27a32e(_0x6edfab, {
          "method": "GET"
        });
        if (_0x422bbe?.["url"]) return _0x422bbe.url;
        _0x6edfab = "https://wyapi.toubiec.cn/api/music/url";
        const _0xa72fcf = await _0x27a32e(_0x6edfab, {
          "method": "POST",
          "headers": {
            "Origin": "https://wyapi.toubiec.cn",
            "Referer": "https://wyapi.toubiec.cn/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"
          },
          "body": JSON.stringify({
            "id": _0x2d46ef,
            "level": _0x94eca1
          })
        });
        if (_0xa72fcf?.["data"]?.[0]?.["url"]) return _0xa72fcf.data[0].url;
        const _0x4a857c = {
          "standard": "128",
          "exhigh": "320",
          "lossless": "999",
          "hires": "999"
        };
        _0x6edfab = "https://music-api.gdstudio.xyz/api.php?types=url&source=netease&id=" + _0x2d46ef + "&br=" + _0x4a857c[_0x94eca1];
        return _0x27a32e(_0x6edfab, {
          "method": "GET"
        }).then(_0x557020 => _0x557020.url);
      }
    },
    "mg": {
      async "musicUrl"({
        copyrightId: _0x777b77
      }, _0x2ac57b) {
        let _0x5754f8 = "https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceType=2&copyrightId=" + _0x777b77;
        const {
          resource: [{
            contentId: _0x11d382
          }]
        } = await _0x27a32e(_0x5754f8, {
          "method": "GET"
        });
        _0x5754f8 = "https://c.musicapp.migu.cn/MIGUM3.0/strategy/listen-url/v2.3?resourceType=2&toneFlag=PQ&contentId=" + _0x11d382;
        return _0x27a32e(_0x5754f8, {
          "method": "GET",
          "headers": {
            "channel": "0140210"
          }
        }).then(_0x2c900b => _0x2ac57b === "HQ" ? _0x2c900b.data.url.replace("MP3_128", "MP3_320") : _0x2c900b.data.url);
      }
    }
  };
_0x55b5ee(_0x8f8d47.request, ({
  source: _0x298ca0,
  info: _0x45c259
}) => {
  return _0x4035b7[_0x298ca0].musicUrl(_0x45c259.musicInfo, _0x587808[_0x298ca0][_0x45c259.type]).catch(_0x586f09 => {
    return Promise.reject(_0x586f09);
  });
});
_0x525768(_0x8f8d47.inited, {
  "sources": {
    "tx": {
      "name": "QQ音乐",
      "type": "music",
      "actions": ["musicUrl"],
      "qualitys": ["128k", "320k", "flac", "flac24bit"]
    },
    "kg": {
      "name": "酷狗音乐",
      "type": "music",
      "actions": ["musicUrl"],
      "qualitys": ["128k", "320k", "flac", "flac24bit"]
    },
    "kw": {
      "name": "酷我音乐",
      "type": "music",
      "actions": ["musicUrl"],
      "qualitys": ["128k", "320k", "flac", "flac24bit"]
    },
    "wy": {
      "name": "网易云音乐",
      "type": "music",
      "actions": ["musicUrl"],
      "qualitys": ["128k", "320k", "flac", "flac24bit"]
    },
    "mg": {
      "name": "咪咕音乐",
      "type": "music",
      "actions": ["musicUrl"],
      "qualitys": ["128k", "320k"]
    }
  }
});