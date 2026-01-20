//Tue Jan 20 2026 15:17:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
if ("undefined" == typeof window) {
  window = globalThis;
}
const DEV_ENABLE = false;
const API_URL = "https://music-api2.cenguigui.cn/?";
const MUSIC_QUALITY = JSON.parse("{\"kw\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"kg\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"tx\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"wy\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"],\"mg\":[\"128k\",\"320k\",\"flac\",\"flac24bit\"]}");
const MUSIC_SOURCE = Object.keys(MUSIC_QUALITY);
const {
  EVENT_NAMES,
  request,
  on,
  send,
  utils,
  env,
  version
} = globalThis.lx;
const _0x321e8a = {
  method: "GET"
};
const httpFetch = (_0x126541, _0x362c36 = _0x321e8a) => {
  return new Promise((_0x5a0a23, _0x2b8c96) => {
    console.log("--- start --- " + _0x126541);
    request(_0x126541, _0x362c36, (_0x1e60f1, _0x4e79cc) => {
      {
        if (_0x1e60f1) {
          return _0x2b8c96(_0x1e60f1);
        }
        console.log("API Response: ", _0x4e79cc);
        _0x5a0a23(_0x4e79cc);
      }
    });
  });
};
const handleGetMusicUrl = async (_0x5413e5, _0x3ddf2b, _0x3587d8) => {
  const _0x5ac453 = _0x3ddf2b.hash ?? _0x3ddf2b.songmid;
  if (_0x5413e5 == "tx") {
    _0x5413e5 = "qq";
  }
  switch (_0x3587d8) {
    case "128k":
      _0x3587d8 = "standard";
    case "320k":
      _0x3587d8 = "exhigh";
    case "flac":
      _0x3587d8 = "lossless";
    case "flac24bit":
      _0x3587d8 = "hires";
    default:
      _0x3587d8 = "exhigh";
  }
  const _0x4f0809 = await httpFetch("" + API_URL + _0x5413e5 + "&id=" + _0x5ac453 + "&type=song&level=" + _0x3587d8 + "&format=json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version)
    }
  });
  const {
    body: _0x1b592a
  } = _0x4f0809;
  if (!_0x1b592a || isNaN(Number(_0x1b592a.code))) {
    throw new Error("unknow error");
  }
  switch (_0x1b592a.code) {
    case 200:
      console.log("handleGetMusicUrl(" + _0x5413e5 + "_" + _0x3ddf2b.songmid + ", " + _0x3587d8 + ") success, URL: " + _0x1b592a.data.url);
      return _0x1b592a.data.url;
    case 1:
      throw new Error("block ip");
    case 2:
      throw new Error("get music url failed");
    case 4:
      throw new Error("internal server error");
    case 5:
      throw new Error("too many requests");
    case 6:
      throw new Error("param error");
    default:
      throw new Error(_0x1b592a.msg ?? "unknow error");
  }
};
const musicSources = {};
MUSIC_SOURCE.forEach(_0x125d18 => {
  musicSources[_0x125d18] = {
    name: _0x125d18,
    type: "music",
    actions: ["musicUrl"],
    qualitys: MUSIC_QUALITY[_0x125d18]
  };
});
on(EVENT_NAMES.request, ({
  action: _0x1d3b87,
  source: _0x1c7189,
  info: _0x28d4c0
}) => {
  switch (_0x1d3b87) {
    case "musicUrl":
      env != "mobile" ? (console.group("Handle Action(musicUrl)"), console.log("source", _0x1c7189), console.log("quality", _0x28d4c0.type), console.log("musicInfo", _0x28d4c0.musicInfo), console.groupEnd()) : (console.log("Handle Action(musicUrl)"), console.log("source", _0x1c7189), console.log("quality", _0x28d4c0.type), console.log("musicInfo", _0x28d4c0.musicInfo));
      return handleGetMusicUrl(_0x1c7189, _0x28d4c0.musicInfo, _0x28d4c0.type).then(_0x3a126b => Promise.resolve(_0x3a126b)).catch(_0x38fa69 => Promise.reject(_0x38fa69));
    default:
      console.error("action(" + _0x1d3b87 + ") not support");
      return Promise.reject("action not support");
  }
});
const _0x427cc1 = {
  status: true,
  openDevTools: DEV_ENABLE,
  sources: musicSources
};
send(EVENT_NAMES.inited, _0x427cc1);