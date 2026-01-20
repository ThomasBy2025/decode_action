//Tue Jan 20 2026 15:28:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const DEV_ENABLE = false;
const YuNingXi = "6eeb311335476be6b92760008db908575cf25dbbe9a88bb0cfa6389a337cb5f6";
const MUSIC_QUALITY = {
  tx: ["128k", "320k", "flac", "flac24bit", "atmos", "atmos_plus", "master"],
  wy: ["128k", "320k", "flac", "flac24bit", "hires", "master"],
  kw: ["128k", "320k", "flac", "flac24bit"],
  mg: ["128k", "320k", "flac", "flac24bit"],
  kg: ["128k"]
};
const MUSIC_SOURCE = Object.keys(MUSIC_QUALITY);
const {
  EVENT_NAMES,
  request,
  on,
  send,
  currentScriptInfo,
  utils
} = globalThis.lx;
const httpFetch = _0x5d7a40 => new Promise((_0x391296, _0x531966) => request(_0x5d7a40, {}, (_0xf9b61a, _0xff90be) => _0xf9b61a ? _0x531966(_0xf9b61a) : _0x391296(_0xff90be)));
const handleGetMusicUrl = async (_0x5de223, _0x5cb85d, _0x583c19) => {
  try {
    switch (_0x5de223) {
      case "tx":
        {
          const _0x11b11c = {
            "128k": "低品质",
            "320k": "HQ高品质",
            flac: "SQ无损",
            flac24bit: "臻品全景声",
            atmos: "臻品全景声",
            atmos_plus: "臻品全景声",
            master: "臻品母带"
          };
          const _0x111464 = _0x5cb85d.songmid;
          const _0x132fed = "https://api-v2.yuafeng.cn/API/qqmusic.php?type=" + _0x11b11c[_0x583c19] + "&mid=" + _0x111464 + "&apikey=" + YuNingXi;
          const _0x35a46a = await httpFetch(_0x132fed);
          if (_0x35a46a.body?.["code"] !== 0) {
            throw new Error(_0x35a46a.body?.["msg"] || "获取失败");
          }
          return _0x35a46a.body.data.music;
        }
      case "wy":
        {
          const _0x2824a1 = {
            "128k": "standard",
            "320k": "exhigh",
            flac: "lossless",
            flac24bit: "hires",
            hires: "hires",
            master: "jymaster"
          };
          const _0xb8805a = _0x5cb85d.songmid;
          const _0x4076b8 = "https://api.kxzjoker.cn/api/163_music?ids=" + _0xb8805a + "&type=json&level=" + _0x2824a1[_0x583c19];
          const _0x44ca27 = await httpFetch(_0x4076b8);
          if (_0x44ca27.body?.["status"] !== 200) {
            throw new Error(_0x44ca27.body?.["msg"] || "获取失败");
          }
          return _0x44ca27.body.url;
        }
      case "mg":
        {
          const _0x1b3ea6 = {
            "128k": "PQ",
            "320k": "HQ",
            flac: "SQ",
            flac24bit: "ZQ"
          };
          const _0x59a83f = _0x1b3ea6[_0x583c19];
          if (!_0x59a83f) {
            throw new Error("不支持的音质");
          }
          const _0x180aa7 = "https://app.c.nf.migu.cn/MIGUM2.0/strategy/listen-url/v2.4" + ("?netType=01&resourceType=E&songId=" + _0x5cb85d.songmid + "&toneFlag=" + _0x59a83f);
          const _0x378619 = await new Promise((_0x3d057f, _0x8a7073) => request(_0x180aa7, {
            method: "GET",
            headers: {
              channel: "014000D",
              token: "848401000134020058524459344E544130526A4932517A55344D7A56434E55453240687474703A2F2F70617373706F72742E6D6967752E636E2F6E303030312F4062393662376634326336326434303935393366666433366434313939393033300300040298EAFB0400063232303032340500164D4759355A4463784D324E684E4449324F57566B4E51FF0020795263B9A333A4580E13DD7F28820A8B9788F30062F6025FA08BF10CC5A8AA04",
              aversionid: "DF94898993A5A28A64968A9FD0ADA0749397878BC39DD7BC68C584A1BAAFC96EC5938D8D8ED1A490949A8F9EB680997296DFD0D391D6ABBC69928AD0B57D99779CC8B88CDDECEE89628F89A1827E986F94978AD392A7A2916A928AA4878199779C"
            }
          }, (_0x2bb3a2, _0x1c785e) => _0x2bb3a2 ? _0x8a7073(_0x2bb3a2) : _0x3d057f(_0x1c785e)));
          if (_0x378619.body?.["code"] !== "000000") {
            throw new Error(_0x378619.body?.["info"] || "获取失败");
          }
          let _0x18c292 = _0x378619.body.data?.["url"] ?? _0x378619.body.playUrl ?? _0x378619.body.listenUrl;
          if (!_0x18c292) {
            throw new Error("空地址");
          }
          if (_0x18c292.startsWith("//")) {
            _0x18c292 = "https:" + _0x18c292;
          }
          return _0x18c292.replace(/\+/g, "%2B").split("?")[0];
        }
      case "kw":
        {
          const _0x32e146 = {
            "128k": "128kmp3",
            "320k": "320kmp3",
            flac: "2000kflac",
            flac24bit: "2000kflac"
          };
          const _0xee40a8 = _0x5cb85d.songmid;
          const _0x5c6441 = _0x32e146[_0x583c19];
          const _0x3fc5a0 = "https://nmobi.kuwo.cn/mobi.s?f=web&source=kwplayercar_ar_6.0.0.9_B_jiakong_vh.apk&type=convert_url_with_sign&rid=" + _0xee40a8 + "&br=" + _0x5c6441 + "&user=10086";
          const _0xd710b2 = await httpFetch(_0x3fc5a0);
          if (_0xd710b2.body?.["code"] !== 200) {
            throw new Error(_0xd710b2.body?.["msg"] || "获取失败");
          }
          return _0xd710b2.body.data.url;
        }
      case "kg":
        {
          const _0x2fc315 = _0x5cb85d?.["_types"]?.["128k"]?.["hash"]?.["toLowerCase"]() ?? "";
          if (!_0x2fc315) {
            throw new Error("缺少 hash");
          }
          const _0x4720c2 = "https://api.yuafeng.cn/API/ly/kgmusic.php?hash=" + _0x2fc315;
          const _0x5d0b1f = await httpFetch(_0x4720c2);
          console.log(_0x5d0b1f);
          if (!_0x5d0b1f.body || _0x5d0b1f.body.code !== 0) {
            throw new Error("获取失败");
          }
          return _0x5d0b1f.body.data.music;
        }
      default:
        throw new Error("不支持的平台");
    }
  } catch (_0x56c224) {
    console.error("[YNX] " + _0x5de223 + " " + _0x583c19 + " 失败", _0x56c224);
    throw _0x56c224;
  }
};
const musicSources = {};
MUSIC_SOURCE.forEach(_0x2cd2fe => {
  musicSources[_0x2cd2fe] = {
    name: _0x2cd2fe,
    type: "music",
    actions: ["musicUrl"],
    qualitys: MUSIC_QUALITY[_0x2cd2fe]
  };
});
on(EVENT_NAMES.request, ({
  action: _0x284fc9,
  source: _0x579e53,
  info: _0x7bbc4b
}) => _0x284fc9 === "musicUrl" ? (console.log(_0x7bbc4b.musicInfo), handleGetMusicUrl(_0x579e53, _0x7bbc4b.musicInfo, _0x7bbc4b.type)) : console.log(_0x7bbc4b.musicInfo), Promise.reject("不支持"));
send(EVENT_NAMES.inited, {
  status: true,
  openDevTools: DEV_ENABLE,
  sources: musicSources
});
console.log("[YNX] 脚本已加载");
const scriptInfo = globalThis.lx.currentScriptInfo;
if (scriptInfo.name !== "lx-玉宁熙" || scriptInfo.author !== "ynx(2363768762)") {
  throw new Error("初始化失败！请检查音源信息");
}
function compareVersion(_0x453f82, _0x1f2b94) {
  return _0x1f2b94.replace("v", "").localeCompare(_0x453f82.replace("v", ""), undefined, {
    numeric: true
  });
}
const UPDATE_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx-玉宁熙.js";
const CHECK_URL = "https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/lx.json";
const checkLatestVersion = async () => {
  try {
    const {
      body: _0xd52d6a
    } = await new Promise((_0x2ee5a7, _0x4e4f8e) => globalThis.lx.request(CHECK_URL, {}, (_0x294876, _0x411f6d) => _0x294876 ? _0x4e4f8e(_0x294876) : _0x2ee5a7(_0x411f6d)));
    const _0x2ba5b5 = _0xd52d6a?.["latest"];
    const _0x388779 = _0xd52d6a?.["log"];
    const _0x2dda5b = globalThis.lx.currentScriptInfo.version;
    _0x2ba5b5 && compareVersion(_0x2dda5b, _0x2ba5b5) > 0 && globalThis.lx.send(globalThis.lx.EVENT_NAMES.updateAlert, {
      log: "发现新版本 " + _0x2ba5b5 + "！\n更新内容 " + _0x388779,
      updateUrl: UPDATE_URL
    });
  } catch (_0x2226bb) {}
};
setTimeout(checkLatestVersion, 2000);