//Wed Jan 21 2026 03:42:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const DEV_ENABLE = false,
  API_URL = "https://m-api.ceseet.me",
  API_KEY = "",
  MUSIC_QUALITY = JSON.parse("{\"kw\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"kg\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"tx\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"wy\":[\"128k\",\"320k\",\"flac\"],\"mg\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"]}"),
  MUSIC_SOURCE = Object.keys(MUSIC_QUALITY);
MUSIC_SOURCE.push("local");
const {
    EVENT_NAMES,
    request,
    on,
    send,
    utils,
    env,
    version
  } = globalThis.lx,
  httpFetch = (_0x328412, _0x13d3ca = {
    "method": "GET"
  }) => {
    return new Promise((_0x4a6f56, _0x485901) => {
      console.log("--- start --- " + _0x328412);
      request(_0x328412, _0x13d3ca, (_0x373473, _0x49a82e) => {
        {
          if (_0x373473) return _0x485901(_0x373473);
          console.log("API Response: ", _0x49a82e);
          _0x4a6f56(_0x49a82e);
        }
      });
    });
  },
  handleBase64Encode = _0x1459c1 => {
    var _0x1459c1 = utils.buffer.from(_0x1459c1, "utf-8");
    return utils.buffer.bufToString(_0x1459c1, "base64");
  },
  handleGetMusicUrl = async (_0x4b9c1a, _0x46220e, _0x9c0567) => {
    if (_0x4b9c1a == "local") {
      if (!_0x46220e.songmid.startsWith("server_")) throw new Error("upsupported local file");
      const _0x5b6baf = _0x46220e.songmid,
        _0x354e1d = {
          "p": _0x5b6baf.replace("server_", "")
        };
      var _0x1b663b = "c",
        _0x174673 = handleBase64Encode(JSON.stringify(_0x354e1d)).replace(/\+/g, "-").replace(/\//g, "_");
      const _0x78790c = API_URL + "/local/" + _0x1b663b + "?q=" + _0x174673,
        _0x37fd00 = await httpFetch(_0x78790c, {
          "method": "GET",
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version),
            "X-Request-Key": API_KEY
          },
          "follow_max": 5
        }),
        {
          body: _0xe46027
        } = _0x37fd00;
      if (_0xe46027.code == 0 && _0xe46027.data && _0xe46027.data.file) {
        {
          var _0x1b663b = "u",
            _0x174673 = handleBase64Encode(JSON.stringify(_0x354e1d)).replace(/\+/g, "-").replace(/\//g, "_");
          return API_URL + "/local/" + _0x1b663b + "?q=" + _0x174673;
        }
      }
      throw new Error("404 Not Found");
    }
    const _0x504d17 = _0x46220e.hash ?? _0x46220e.songmid,
      _0x1adef0 = await httpFetch(API_URL + "/url/" + _0x4b9c1a + "/" + _0x504d17 + "/" + _0x9c0567, {
        "method": "GET",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version),
          "X-Request-Key": API_KEY
        },
        "follow_max": 5
      }),
      {
        body: _0x3c9965
      } = _0x1adef0;
    if (!_0x3c9965 || isNaN(Number(_0x3c9965.code))) throw new Error("unknow error");
    if (env != "mobile") console.groupEnd();
    switch (_0x3c9965.code) {
      case 0:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") success, URL: " + _0x3c9965.data);
        return _0x3c9965.data;
      case 1:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") failed: ip被封禁");
        throw new Error("block ip");
      case 2:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") failed, " + _0x3c9965.msg);
        throw new Error("get music url failed");
      case 4:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") failed, 远程服务器错误");
        throw new Error("internal server error");
      case 5:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") failed, 请求过于频繁，请休息一下吧");
        throw new Error("too many requests");
      case 6:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") failed, 请求参数错误");
        throw new Error("param error");
      default:
        console.log("handleGetMusicUrl(" + _0x4b9c1a + "_" + _0x46220e.songmid + ", " + _0x9c0567 + ") failed, " + (_0x3c9965.msg ? _0x3c9965.msg : "unknow error"));
        throw new Error(_0x3c9965.msg ?? "unknow error");
    }
  },
  handleGetMusicPic = async (_0x582c06, _0x4cd8fa) => {
    switch (_0x582c06) {
      case "local":
        if (!_0x4cd8fa.songmid.startsWith("server_")) throw new Error("upsupported local file");
        const _0x128fb0 = _0x4cd8fa.songmid,
          _0x1c58fa = {
            "p": _0x128fb0.replace("server_", "")
          };
        var _0x476b0a = "c",
          _0x55ca34 = handleBase64Encode(JSON.stringify(_0x1c58fa)).replace(/\+/g, "-").replace(/\//g, "_");
        const _0x4bcecd = API_URL + "/local/" + _0x476b0a + "?q=" + _0x55ca34,
          _0xa947c0 = await httpFetch(_0x4bcecd, {
            "method": "GET",
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version)
            },
            "follow_max": 5
          }),
          {
            body: _0x3a1ba5
          } = _0xa947c0;
        if (_0x3a1ba5.code === 0 && _0x3a1ba5.data.cover) {
          var _0x476b0a = "p",
            _0x55ca34 = handleBase64Encode(JSON.stringify(_0x1c58fa)).replace(/\+/g, "-").replace(/\//g, "_");
          return API_URL + "/local/" + _0x476b0a + "?q=" + _0x55ca34;
        }
        throw new Error("get music pic failed");
      default:
        throw new Error("action(pic) does not support source(" + _0x582c06 + ")");
    }
  },
  handleGetMusicLyric = async (_0x21ee56, _0x3287bd) => {
    switch (_0x21ee56) {
      case "local":
        if (!_0x3287bd.songmid.startsWith("server_")) throw new Error("upsupported local file");
        const _0x536737 = _0x3287bd.songmid,
          _0x3ce9b7 = {
            "p": _0x536737.replace("server_", "")
          };
        var _0x512902 = "c",
          _0x51215d = handleBase64Encode(JSON.stringify(_0x3ce9b7)).replace(/\+/g, "-").replace(/\//g, "_");
        const _0x27aa5b = API_URL + "/local/" + _0x512902 + "?q=" + _0x51215d,
          _0x16c336 = await httpFetch(_0x27aa5b, {
            "method": "GET",
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version)
            },
            "follow_max": 5
          }),
          {
            body: _0x58d252
          } = _0x16c336;
        if (_0x58d252.code === 0 && _0x58d252.data.lyric) {
          {
            var _0x512902 = "l",
              _0x51215d = handleBase64Encode(JSON.stringify(_0x3ce9b7)).replace(/\+/g, "-").replace(/\//g, "_");
            const _0x1ea8ce = await httpFetch(API_URL + "/local/" + _0x512902 + "?q=" + _0x51215d, {
              "method": "GET",
              "headers": {
                "Content-Type": "application/json",
                "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version)
              },
              "follow_max": 5
            });
            if (_0x1ea8ce.body.code === 0) {
              return {
                "lyric": _0x1ea8ce.body.data ?? "",
                "tlyric": "",
                "rlyric": "",
                "lxlyric": ""
              };
            }
            throw new Error("get music lyric failed");
          }
        }
        throw new Error("get music lyric failed");
      default:
        throw new Error("action(lyric) does not support source(" + _0x21ee56 + ")");
    }
  },
  musicSources = {};
MUSIC_SOURCE.forEach(_0x260e7a => {
  musicSources[_0x260e7a] = {
    "name": _0x260e7a,
    "type": "music",
    "actions": _0x260e7a == "local" ? ["musicUrl", "pic", "lyric"] : ["musicUrl"],
    "qualitys": _0x260e7a == "local" ? [] : MUSIC_QUALITY[_0x260e7a]
  };
});
on(EVENT_NAMES.request, ({
  action: _0x3fc33c,
  source: _0x583f3e,
  info: _0x525238
}) => {
  switch (_0x3fc33c) {
    case "musicUrl":
      env != "mobile" ? (console.group("Handle Action(musicUrl)"), console.log("source", _0x583f3e), console.log("quality", _0x525238.type), console.log("musicInfo", _0x525238.musicInfo)) : (console.log("Handle Action(musicUrl)"), console.log("source", _0x583f3e), console.log("quality", _0x525238.type), console.log("musicInfo", _0x525238.musicInfo));
      return handleGetMusicUrl(_0x583f3e, _0x525238.musicInfo, _0x525238.type).then(_0x4af1d4 => Promise.resolve(_0x4af1d4)).catch(_0x148035 => Promise.reject(_0x148035));
    case "pic":
      return handleGetMusicPic(_0x583f3e, _0x525238.musicInfo).then(_0x7ec6cc => Promise.resolve(_0x7ec6cc)).catch(_0xcfc86e => Promise.reject(_0xcfc86e));
    case "lyric":
      return handleGetMusicLyric(_0x583f3e, _0x525238.musicInfo).then(_0x7a464e => Promise.resolve(_0x7a464e)).catch(_0x5001ad => Promise.reject(_0x5001ad));
    default:
      console.error("action(" + _0x3fc33c + ") not support");
      return Promise.reject("action not support");
  }
});
send(EVENT_NAMES.inited, {
  "status": true,
  "openDevTools": DEV_ENABLE,
  "sources": musicSources
});