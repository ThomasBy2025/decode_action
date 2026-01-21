//Wed Jan 21 2026 03:35:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const DEV_ENABLE = false,
  MUSIC_QUALITY = {
    "tx": ["128k", "320k", "flac", "flac24bit"],
    "wy": ["128k", "320k", "flac", "flac24bit"],
    "kg": ["128k", "320k", "flac", "flac24bit"],
    "kw": ["128k", "320k", "flac"],
    "mg": ["320k", "flac"]
  },
  MUSIC_SOURCE = Object.keys(MUSIC_QUALITY),
  {
    EVENT_NAMES,
    request,
    on,
    send,
    utils,
    env,
    version,
    currentScriptInfo
  } = globalThis.lx,
  httpFetch = (_0x569402, _0x3d5730 = {
    "method": "GET"
  }) => {
    return new Promise((_0x173a9f, _0x29fcdb) => {
      request(_0x569402, _0x3d5730, (_0xa129ff, _0x5c45fb) => {
        if (_0xa129ff) return _0x29fcdb(_0xa129ff);
        _0x173a9f(_0x5c45fb);
      });
    });
  },
  handleGetMusicUrl = async (_0x42f452, _0x4d19d6, _0x51b3b3) => {
    if (_0x42f452 == "tx") {
      const _0x1bb250 = {
          "128k": "7",
          "320k": "9",
          "flac": "11",
          "flac24bit": "14"
        },
        _0x159557 = "https://api.xingzhige.com/API/QQmusicVIP/?type=json&mid=" + _0x4d19d6.songmid + "&br=" + _0x1bb250[_0x51b3b3],
        _0x5c45cb = await httpFetch(_0x159557, {
          "method": "GET"
        }),
        {
          body: _0x460b4d
        } = _0x5c45cb;
      if (!_0x460b4d || isNaN(Number(_0x460b4d.code)) || Number(_0x460b4d.code) != 0) throw new Error("get url error");
      return _0x460b4d.data.src;
    } else {
      if (_0x42f452 == "wy") {
        const _0x306da6 = {
            "128k": "standard",
            "320k": "exhigh",
            "flac": "lossless",
            "flac24bit": "hires"
          },
          _0xdeb2a9 = "https://api.cenguigui.cn/api/netease/music_v1.php?id=" + _0x4d19d6.songmid + "&type=json&level=" + _0x306da6[_0x51b3b3],
          _0x7a48cc = await httpFetch(_0xdeb2a9, {
            "method": "GET"
          }),
          {
            body: _0x3ce470
          } = _0x7a48cc;
        if (!_0x3ce470 || isNaN(Number(_0x3ce470.code)) || Number(_0x3ce470.code) != 200) throw new Error("get url error");
        return _0x3ce470.data.url;
      } else {
        if (_0x42f452 == "kg") {
          const _0x3854f7 = {
              "128k": "128",
              "320k": "320",
              "flac": "flac",
              "flac24bit": "high"
            },
            _0x351ef1 = "https://www.hhlqilongzhu.cn/api/dg_kugouSQ.php?type=json&hash=" + _0x4d19d6.hash + "&quality=" + _0x3854f7[_0x51b3b3],
            _0x25a238 = await httpFetch(_0x351ef1, {
              "method": "GET"
            }),
            {
              body: _0x565f80
            } = _0x25a238;
          if (!_0x565f80 || isNaN(Number(_0x565f80.code)) || Number(_0x565f80.code) != 200) throw new Error("get url error");
          return _0x565f80.music_url;
        } else {
          if (_0x42f452 == "kw") {
            const _0x2467b5 = {
                "128k": "standard",
                "320k": "exhigh",
                "flac": "lossless"
              },
              _0x220d53 = "https://api.cenguigui.cn/api/kuwo/?rid=" + _0x4d19d6.songmid + "&type=json&level=" + _0x2467b5[_0x51b3b3],
              _0x3b7912 = await httpFetch(_0x220d53, {
                "method": "GET"
              }),
              {
                body: _0x5ab28e
              } = _0x3b7912;
            if (!_0x5ab28e || isNaN(Number(_0x5ab28e.code)) || Number(_0x5ab28e.code) != 200) throw new Error("get url error");
            return _0x5ab28e.data.url;
          } else {
            if (_0x42f452 == "mg") {
              const _0x5a1b31 = {
                  "320k": "2",
                  "flac": "1"
                },
                _0x34fbde = "https://www.hhlqilongzhu.cn/api/dg_mgmusic_24bit.php?msg=" + msg + "&n=1&type=json&br=" + _0x5a1b31[_0x51b3b3],
                _0x326054 = await httpFetch(_0x34fbde, {
                  "method": "GET"
                }),
                {
                  body: _0x3571e6
                } = _0x326054;
              if (!_0x3571e6 || isNaN(Number(_0x3571e6.code)) || Number(_0x3571e6.code) != 200) throw new Error("unknow error");
              return _0x3571e6.music_url;
            }
          }
        }
      }
    }
  },
  musicSources = {};
MUSIC_SOURCE.forEach(_0x238e3a => {
  musicSources[_0x238e3a] = {
    "name": _0x238e3a,
    "type": "music",
    "actions": _0x238e3a == "local" ? [] : ["musicUrl"],
    "qualitys": _0x238e3a == "local" ? [] : MUSIC_QUALITY[_0x238e3a]
  };
});
on(EVENT_NAMES.request, ({
  action: _0x1581a9,
  source: _0x3c5ae4,
  info: _0x17eeb1
}) => {
  switch (_0x1581a9) {
    case "musicUrl":
      return handleGetMusicUrl(_0x3c5ae4, _0x17eeb1.musicInfo, _0x17eeb1.type).then(_0x136577 => Promise.resolve(_0x136577)).catch(_0x591312 => Promise.reject(_0x591312));
    default:
      return Promise.reject("action not support");
  }
});
const scriptInfo = globalThis.lx.currentScriptInfo;
if (scriptInfo.name !== "聚合API接口 (by lerd)" || scriptInfo.description !== "理论可听全平台无损" || scriptInfo.version !== "v2.0.0" || scriptInfo.author !== "lerd") {
  throw new Error("初始化失败！将音源 名字、描述、版本号、作者和主页回正，以初始化成功");
}
send(EVENT_NAMES.inited, {
  status: true,
  openDevTools: DEV_ENABLE,
  sources: musicSources
});