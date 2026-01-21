//Wed Jan 21 2026 03:03:09 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const DEV_ENABLE = false;
const API_URL = "https://music.ikun0014.top";
const API_KEY = "";
const SCRIPT_MD5 = "3c8dea35f141969b0e3f4a627fe5d7f6";
const MUSIC_QUALITY = JSON.parse("{\"wy\":[\"128k\",\"320k\"]}");
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
const _0x4e184c = {
  method: "GET"
};
const httpFetch = (_0x2b5243, _0x1526dd = _0x4e184c) => {
  return new Promise((_0x3cf1fd, _0x3f461c) => {
    {
      console.log("--- start --- " + _0x2b5243);
      request(_0x2b5243, _0x1526dd, (_0x3bcda4, _0x30609e) => {
        {
          if (_0x3bcda4) {
            return _0x3f461c(_0x3bcda4);
          }
          console.log("API Response: ", _0x30609e);
          _0x3cf1fd(_0x30609e);
        }
      });
    }
  });
};
const handleGetMusicUrl = async (_0x48662a, _0x32c31d, _0x559232) => {
  const _0x5a0e8d = _0x32c31d.hash ?? _0x32c31d.songmid;
  const _0x237f2f = await httpFetch(API_URL + "/url?source=" + _0x48662a + "&songId=" + _0x5a0e8d + "&quality=" + _0x559232, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version),
      "X-Request-Key": API_KEY
    },
    follow_max: 5
  });
  const {
    body: _0x5ab80a
  } = _0x237f2f;
  if (!_0x5ab80a || isNaN(Number(_0x5ab80a.code))) {
    throw new Error("unknow error");
  }
  if (env != "mobile") {
    console.groupEnd();
  }
  switch (_0x5ab80a.code) {
    case 200:
      console.log("handleGetMusicUrl(" + _0x48662a + "_" + _0x32c31d.songmid + ", " + _0x559232 + ") success, URL: " + _0x5ab80a.url);
      return _0x5ab80a.url;
    case 403:
      console.log("handleGetMusicUrl(" + _0x48662a + "_" + _0x32c31d.songmid + ", " + _0x559232 + ") failed: Key失效/鉴权失败");
      throw new Error("Key失效/鉴权失败");
    case 500:
      console.log("handleGetMusicUrl(" + _0x48662a + "_" + _0x32c31d.songmid + ", " + _0x559232 + ") failed, " + _0x5ab80a.message);
      throw new Error("获取URL失败, " + (_0x5ab80a.message ?? "未知错误"));
    case 429:
      console.log("handleGetMusicUrl(" + _0x48662a + "_" + _0x32c31d.songmid + ", " + _0x559232 + ") failed, 请求过于频繁，请休息一下吧");
      throw new Error("请求过速");
    default:
      console.log("handleGetMusicUrl(" + _0x48662a + "_" + _0x32c31d.songmid + ", " + _0x559232 + ") failed, " + (_0x5ab80a.message ? _0x5ab80a.message : "未知错误"));
      throw new Error(_0x5ab80a.message ?? "未知错误");
  }
};
const checkUpdate = async () => {
  const _0x14b3c1 = await httpFetch(API_URL + "/script?key=" + API_KEY + "&checkUpdate=" + SCRIPT_MD5, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "" + (env ? "lx-music-" + env + "/" + version : "lx-music-request/" + version)
    }
  });
  const {
    body: _0x174c4f
  } = _0x14b3c1;
  if (!_0x174c4f || _0x174c4f.code !== 200) {
    console.log("checkUpdate failed");
  } else {
    console.log("checkUpdate success");
    if (_0x174c4f.data != null) {
      const _0xa967c5 = {
        log: _0x174c4f.data.updateMsg,
        updateUrl: _0x174c4f.data.updateUrl
      };
      globalThis.lx.send(lx.EVENT_NAMES.updateAlert, _0xa967c5);
    }
  }
};
const musicSources = {};
MUSIC_SOURCE.forEach(_0x3a8a20 => {
  musicSources[_0x3a8a20] = {
    name: _0x3a8a20,
    type: "music",
    actions: ["musicUrl"],
    qualitys: MUSIC_QUALITY[_0x3a8a20]
  };
});
on(EVENT_NAMES.request, ({
  action: _0x4017b8,
  source: _0x540f6e,
  info: _0x1131c0
}) => {
  switch (_0x4017b8) {
    case "musicUrl":
      if (env != "mobile") {
        {
          console.group("Handle Action(musicUrl)");
          console.log("source", _0x540f6e);
          console.log("quality", _0x1131c0.type);
          console.log("musicInfo", _0x1131c0.musicInfo);
        }
      } else {
        console.log("Handle Action(musicUrl)");
        console.log("source", _0x540f6e);
        console.log("quality", _0x1131c0.type);
        console.log("musicInfo", _0x1131c0.musicInfo);
      }
      return handleGetMusicUrl(_0x540f6e, _0x1131c0.musicInfo, _0x1131c0.type).then(_0x2ff49f => Promise.resolve(_0x2ff49f)).catch(_0x136e31 => Promise.reject(_0x136e31));
    default:
      console.error("action(" + _0x4017b8 + ") not support");
      return Promise.reject("action not support");
  }
});
const _0x4d6701 = {
  status: true,
  openDevTools: DEV_ENABLE,
  sources: musicSources
};
send(EVENT_NAMES.inited, _0x4d6701);