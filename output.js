//Thu Aug 13 2026 01:16:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const CURRENT_VERSION = "1.0.2";
const VERSION_CHECK_URL = "https://gitee.com/nianxinxz1/emo-music/raw/master/wubian.json";
const _0x10c252 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  master: "master",
  atmos: "atmos"
};
const _0x50d340 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  hires: "hires",
  master: "master",
  atmos: "atmos"
};
const _0x2fbdf5 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless",
  hires: "hires",
  jyeffect: "jyeffect",
  jymaster: "jymaster"
};
const _0x3ae75f = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x136061 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const qualitys = {
  kg: _0x10c252,
  tx: _0x50d340,
  wy: _0x2fbdf5,
  kw: _0x3ae75f,
  mg: _0x136061
};
const apis = {
  kg: {
    musicUrl(_0x1ec113, _0x3ba2c2) {
      let _0x28d26a = "";
      const _0xe75860 = _0x1ec113.hash;
      console.log(_0x3ba2c2, _0xe75860);
      _0x28d26a = "http://mcp.nianxinxz.com/share/ceshi/kg.php?id=" + _0xe75860 + "&level=" + _0x3ba2c2 + "&type=mp3";
      return new Promise(_0x9b7ba => {
        _0x9b7ba(_0x28d26a);
      });
    }
  },
  tx: {
    musicUrl(_0x212818, _0x9d0f0f) {
      let _0x2b9c95 = "";
      const _0xe9f5a0 = _0x212818.songmid;
      console.log(_0x9d0f0f, _0xe9f5a0);
      _0x2b9c95 = "http://mcp.nianxinxz.com/share/ceshi/tx.php?id=" + _0xe9f5a0 + "&level=" + _0x9d0f0f + "&type=mp3";
      return new Promise(_0x5dade9 => {
        _0x5dade9(_0x2b9c95);
      });
    }
  },
  wy: {
    musicUrl(_0x507cca, _0x1e3fea) {
      let _0x23d6cd = "";
      const _0x40747e = _0x507cca.songmid;
      console.log(_0x1e3fea, _0x40747e);
      _0x23d6cd = "http://music.nxinxz.com/csy/wy.php?id=" + _0x40747e + "&level=" + _0x1e3fea + "&type=mp3";
      return new Promise(_0x4cf8e7 => {
        _0x4cf8e7(_0x23d6cd);
      });
    }
  },
  kw: {
    musicUrl(_0x60af2a, _0x4b8a3e) {
      let _0x2b8314 = "";
      const _0x555cdf = _0x60af2a.songmid;
      console.log(_0x4b8a3e, _0x555cdf);
      _0x2b8314 = "http://mcp.nianxinxz.com/share/ceshi/kw.php?id=" + _0x555cdf + "&level=" + _0x4b8a3e + "&type=mp3";
      return new Promise(_0x5fbe8b => {
        _0x5fbe8b(_0x2b8314);
      });
    }
  },
  mg: {
    musicUrl(_0x21f739, _0x331dd4) {
      let _0x1cd5dd = "";
      const _0x58ba3d = _0x21f739.songmid;
      console.log(_0x331dd4, _0x58ba3d);
      _0x1cd5dd = "http://mcp.nianxinxz.com/share/ceshi/mg.php?id=" + _0x58ba3d + "&level=" + _0x331dd4 + "&type=mp3";
      return new Promise(_0x195982 => {
        _0x195982(_0x1cd5dd);
      });
    }
  }
};
const compareVersions = (_0x1a89ba, _0x16de08) => {
  const _0x599e0b = _0x1a89ba.split(".").map(Number);
  const _0x560637 = _0x16de08.split(".").map(Number);
  for (let _0x5ea648 = 0; _0x5ea648 < Math.max(_0x599e0b.length, _0x560637.length); _0x5ea648++) {
    {
      const _0x3f8160 = _0x599e0b[_0x5ea648] || 0;
      const _0x43fa83 = _0x560637[_0x5ea648] || 0;
      if (_0x3f8160 > _0x43fa83) {
        return 1;
      }
      if (_0x3f8160 < _0x43fa83) {
        return -1;
      }
    }
  }
  return 0;
};
const checkUpdate = async () => {
  return new Promise((_0xab96b6, _0x5b9628) => {
    {
      request(VERSION_CHECK_URL, {
        method: "GET",
        timeout: 3000
      }, (_0x510d8c, _0x399cd3) => {
        if (_0x510d8c || _0x399cd3.statusCode !== 200) {
          {
            console.log("检查更新失败:", _0x510d8c || _0x399cd3.statusMessage);
            _0xab96b6(null);
            return;
          }
        }
        try {
          {
            const _0x4d4cf7 = _0x399cd3.body;
            if (compareVersions(CURRENT_VERSION, _0x4d4cf7.version) < 0) {
              const _0x43ec55 = {
                version: _0x4d4cf7.version,
                updateUrl: _0x4d4cf7.updateUrl,
                description: _0x4d4cf7.description || ""
              };
              _0xab96b6(_0x43ec55);
            } else {
              _0xab96b6(null);
            }
          }
        } catch (_0x30e28f) {
          console.log("解析版本信息失败:", _0x30e28f);
          _0xab96b6(null);
        }
      });
    }
  });
};
on(EVENT_NAMES.request, ({
  source: _0x58b7b4,
  action: _0x487391,
  info: _0x4cebe4
}) => {
  switch (_0x487391) {
    case "musicUrl":
      console.log(apis[_0x58b7b4].musicUrl(_0x4cebe4.musicInfo, qualitys[_0x58b7b4][_0x4cebe4.type]), _0x58b7b4);
      return apis[_0x58b7b4].musicUrl(_0x4cebe4.musicInfo, qualitys[_0x58b7b4][_0x4cebe4.type]);
  }
});
checkUpdate().then(_0x3facf9 => {
  if (_0x3facf9) {
    {
      const _0x32a9e4 = "发现新版本 v" + _0x3facf9.version + "\n" + (_0x3facf9.description ? "更新内容: " + _0x3facf9.description + "\n" : "") + "请更新后使用";
      const _0x407c45 = {
        log: _0x32a9e4,
        updateUrl: _0x3facf9.updateUrl
      };
      send(EVENT_NAMES.updateAlert, _0x407c45);
      console.log("发现新版本,需要更新,脚本将不会初始化:", _0x3facf9);
      return;
    }
  } else {
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
}).catch(_0x530907 => {
  console.log("检查更新出错,正常初始化:", _0x530907);
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