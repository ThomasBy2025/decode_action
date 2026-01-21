//Wed Jan 21 2026 03:06:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const CURRENT_VERSION = "1.0.0";
const VERSION_CHECK_URL = "https://gitee.com/nianxinxz1/emo-music/raw/master/wubian.json";
const _0x1b449a = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x24b08d = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x1861ac = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x43f07f = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x3dc900 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const qualitys = {
  kg: _0x1b449a,
  tx: _0x24b08d,
  wy: _0x1861ac,
  kw: _0x43f07f,
  mg: _0x3dc900
};
const apis = {
  kg: {
    musicUrl(_0x139618, _0x62f6ce) {
      let _0x403106 = "";
      const _0x22a407 = _0x139618.hash;
      console.log(_0x62f6ce, _0x22a407);
      _0x403106 = "https://music.nxinxz.com/kgqq/kg.php?id=" + _0x22a407 + "&level=" + _0x62f6ce + "&type=mp3";
      return new Promise(_0x4c5d86 => {
        _0x4c5d86(_0x403106);
      });
    }
  },
  tx: {
    musicUrl(_0x8789ad, _0x2ddd76) {
      let _0x36a5a9 = "";
      const _0xca3874 = _0x8789ad.songmid;
      console.log(_0x2ddd76, _0xca3874);
      _0x36a5a9 = "https://music.nxinxz.com/kgqq/tx.php?id=" + _0xca3874 + "&level=" + _0x2ddd76 + "&type=mp3";
      return new Promise(_0x5604a5 => {
        _0x5604a5(_0x36a5a9);
      });
    }
  },
  wy: {
    musicUrl(_0x8f5f17, _0x340258) {
      let _0x431a5f = "";
      const _0x4081f3 = _0x8f5f17.songmid;
      console.log(_0x340258, _0x4081f3);
      _0x431a5f = "http://music.nxinxz.com/wy.php?id=" + _0x4081f3 + "&level=" + _0x340258 + "&type=mp3";
      return new Promise(_0x8967e => {
        _0x8967e(_0x431a5f);
      });
    }
  },
  kw: {
    musicUrl(_0x1afa9a, _0x18718c) {
      let _0x1f15b5 = "";
      const _0x2693ac = _0x1afa9a.songmid;
      console.log(_0x18718c, _0x2693ac);
      _0x1f15b5 = "http://music.nxinxz.com/kw.php?id=" + _0x2693ac + "&level=" + _0x18718c + "&type=mp3";
      return new Promise(_0x51ff24 => {
        _0x51ff24(_0x1f15b5);
      });
    }
  },
  mg: {
    musicUrl(_0x20f672, _0x39b3bc) {
      let _0x20ef68 = "";
      const _0xb1106c = _0x20f672.songmid;
      console.log(_0x39b3bc, _0xb1106c);
      _0x20ef68 = "http://music.nxinxz.com/mg.php?id=" + _0xb1106c + "&level=" + _0x39b3bc + "&type=mp3";
      return new Promise(_0x509648 => {
        _0x509648(_0x20ef68);
      });
    }
  }
};
const compareVersions = (_0x1e6ffc, _0x114671) => {
  const _0x4a98b0 = _0x1e6ffc.split(".").map(Number);
  const _0x1562ee = _0x114671.split(".").map(Number);
  for (let _0x4f972d = 0; _0x4f972d < Math.max(_0x4a98b0.length, _0x1562ee.length); _0x4f972d++) {
    const _0x281e32 = _0x4a98b0[_0x4f972d] || 0;
    const _0x2c3ee2 = _0x1562ee[_0x4f972d] || 0;
    if (_0x281e32 > _0x2c3ee2) {
      return 1;
    }
    if (_0x281e32 < _0x2c3ee2) {
      return -1;
    }
  }
  return 0;
};
const checkUpdate = async () => {
  return new Promise((_0x30ccb4, _0x2eb707) => {
    request(VERSION_CHECK_URL, {
      method: "GET",
      timeout: 3000
    }, (_0x10f8ba, _0x2025cd) => {
      {
        if (_0x10f8ba || _0x2025cd.statusCode !== 200) {
          {
            console.log("检查更新失败:", _0x10f8ba || _0x2025cd.statusMessage);
            _0x30ccb4(null);
            return;
          }
        }
        try {
          {
            const _0x436262 = _0x2025cd.body;
            if (compareVersions(CURRENT_VERSION, _0x436262.version) < 0) {
              const _0x3e3a23 = {
                version: _0x436262.version,
                updateUrl: _0x436262.updateUrl,
                description: _0x436262.description || ""
              };
              _0x30ccb4(_0x3e3a23);
            } else {
              {
                _0x30ccb4(null);
              }
            }
          }
        } catch (_0x47618f) {
          console.log("解析版本信息失败:", _0x47618f);
          _0x30ccb4(null);
        }
      }
    });
  });
};
on(EVENT_NAMES.request, ({
  source: _0x4afca0,
  action: _0x2d5f7a,
  info: _0x40c27e
}) => {
  switch (_0x2d5f7a) {
    case "musicUrl":
      console.log(apis[_0x4afca0].musicUrl(_0x40c27e.musicInfo, qualitys[_0x4afca0][_0x40c27e.type]), _0x4afca0);
      return apis[_0x4afca0].musicUrl(_0x40c27e.musicInfo, qualitys[_0x4afca0][_0x40c27e.type]);
  }
});
checkUpdate().then(_0xc6b76b => {
  if (_0xc6b76b) {
    {
      const _0x3c116a = "发现新版本 v" + _0xc6b76b.version + "\n" + (_0xc6b76b.description ? "更新内容: " + _0xc6b76b.description + "\n" : "") + "请更新后使用";
      const _0x44e619 = {
        log: _0x3c116a,
        updateUrl: _0xc6b76b.updateUrl
      };
      send(EVENT_NAMES.updateAlert, _0x44e619);
      console.log("发现新版本,需要更新,脚本将不会初始化:", _0xc6b76b);
      return;
    }
  } else {
    {
      console.log("当前已是最新版本,正常初始化");
      send(EVENT_NAMES.inited, {
        openDevTools: false,
        sources: {
          kg: {
            name: "kg音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          tx: {
            name: "tx音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          wy: {
            name: "wy音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          kw: {
            name: "kw音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          },
          mg: {
            name: "mg音乐",
            type: "music",
            actions: ["musicUrl"],
            qualitys: ["128k", "320k", "flac"]
          }
        }
      });
    }
  }
}).catch(_0x3bfc05 => {
  console.log("检查更新出错,正常初始化:", _0x3bfc05);
  send(EVENT_NAMES.inited, {
    openDevTools: false,
    sources: {
      kg: {
        name: "kg音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      tx: {
        name: "tx音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      wy: {
        name: "wy音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      kw: {
        name: "kw音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      },
      mg: {
        name: "mg音乐",
        type: "music",
        actions: ["musicUrl"],
        qualitys: ["128k", "320k", "flac"]
      }
    }
  });
});