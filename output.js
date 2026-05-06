//Wed May 06 2026 09:52:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const CURRENT_VERSION = "1.2.0";
const VERSION_CHECK_URL = "https://13413.kstore.vip/lxmusic/changqing.json";
const _0x47665e = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x52f0b9 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x2ff938 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x2ccc71 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const _0x325256 = {
  "128k": "standard",
  "320k": "exhigh",
  flac: "lossless"
};
const qualitys = {
  kg: _0x47665e,
  tx: _0x52f0b9,
  wy: _0x2ff938,
  kw: _0x2ccc71,
  mg: _0x325256
};
const apis = {
  kg: {
    musicUrl(_0x375272, _0x5f5f89) {
      let _0x3ef9ba = "";
      const _0x53e2ae = _0x375272.hash;
      console.log(_0x5f5f89, _0x53e2ae);
      _0x3ef9ba = "https://music.haitangw.cc/kgqq1/kg.php?type=mp3&id=" + _0x53e2ae + "&level=" + _0x5f5f89;
      return new Promise(_0x2dea64 => {
        _0x2dea64(_0x3ef9ba);
      });
    }
  },
  tx: {
    musicUrl(_0x3b2de3, _0x2cb3ab) {
      let _0x350664 = "";
      const _0x35254f = _0x3b2de3.songmid;
      console.log(_0x2cb3ab, _0x35254f);
      _0x350664 = "http://175.27.166.236/kgqq1/qq.php?type=mp3&id=" + _0x35254f + "&level=" + _0x2cb3ab;
      return new Promise(_0x22658a => {
        _0x22658a(_0x350664);
      });
    }
  },
  wy: {
    musicUrl(_0x58c586, _0x1f307f) {
      let _0x540009 = "";
      const _0x2dafde = _0x58c586.songmid;
      console.log(_0x1f307f, _0x2dafde);
      _0x540009 = "http://175.27.166.236/wy1/wy.php?type=mp3&id=" + _0x2dafde + "&level=" + _0x1f307f;
      return new Promise(_0x3e38e9 => {
        _0x3e38e9(_0x540009);
      });
    }
  },
  kw: {
    musicUrl(_0x1b17f9, _0x556463) {
      let _0xdeb7bc = "";
      const _0x5a9408 = _0x1b17f9.songmid;
      console.log(_0x556463, _0x5a9408);
      _0xdeb7bc = "https://musicapi.haitangw.net/music1/kw.php?type=mp3&id=" + _0x5a9408 + "&level=" + _0x556463;
      return new Promise(_0x376b31 => {
        {
          _0x376b31(_0xdeb7bc);
        }
      });
    }
  },
  mg: {
    musicUrl(_0x24225b, _0x2d743d) {
      let _0x4ce069 = "";
      const _0x1ead63 = _0x24225b.songmid;
      console.log(_0x2d743d, _0x1ead63);
      _0x4ce069 = "https://music.haitangw.cc/musicapi1/mg.php?type=mp3&id=" + _0x1ead63 + "&level=" + _0x2d743d;
      return new Promise(_0x158093 => {
        _0x158093(_0x4ce069);
      });
    }
  }
};
const compareVersions = (_0x1727e0, _0x2f0cf2) => {
  const _0x12f461 = _0x1727e0.split(".").map(Number);
  const _0x3aaf8f = _0x2f0cf2.split(".").map(Number);
  for (let _0x448f05 = 0; _0x448f05 < Math.max(_0x12f461.length, _0x3aaf8f.length); _0x448f05++) {
    const _0x126832 = _0x12f461[_0x448f05] || 0;
    const _0x2ebe22 = _0x3aaf8f[_0x448f05] || 0;
    if (_0x126832 > _0x2ebe22) {
      return 1;
    }
    if (_0x126832 < _0x2ebe22) {
      return -1;
    }
  }
  return 0;
};
const checkUpdate = async () => {
  return new Promise((_0x1645e6, _0xc1f44a) => {
    {
      request(VERSION_CHECK_URL, {
        method: "GET",
        timeout: 3000
      }, (_0x490a58, _0x25415b) => {
        {
          if (_0x490a58 || _0x25415b.statusCode !== 200) {
            console.log("检查更新失败:", _0x490a58 || _0x25415b.statusMessage);
            _0x1645e6(null);
            return;
          }
          try {
            const _0x4fb0a1 = _0x25415b.body;
            if (compareVersions(CURRENT_VERSION, _0x4fb0a1.version) < 0) {
              {
                const _0x2d8d01 = {
                  version: _0x4fb0a1.version,
                  updateUrl: _0x4fb0a1.updateUrl,
                  description: _0x4fb0a1.description || ""
                };
                _0x1645e6(_0x2d8d01);
              }
            } else {
              _0x1645e6(null);
            }
          } catch (_0xb72a5c) {
            console.log("解析版本信息失败:", _0xb72a5c);
            _0x1645e6(null);
          }
        }
      });
    }
  });
};
on(EVENT_NAMES.request, ({
  source: _0x302864,
  action: _0x341ef0,
  info: _0x4fc07d
}) => {
  switch (_0x341ef0) {
    case "musicUrl":
      console.log(apis[_0x302864].musicUrl(_0x4fc07d.musicInfo, qualitys[_0x302864][_0x4fc07d.type]), _0x302864);
      return apis[_0x302864].musicUrl(_0x4fc07d.musicInfo, qualitys[_0x302864][_0x4fc07d.type]);
  }
});
checkUpdate().then(_0x358f2c => {
  if (_0x358f2c) {
    const _0xe1551f = "发现新版本 v" + _0x358f2c.version + "\n" + (_0x358f2c.description ? "更新内容: " + _0x358f2c.description + "\n" : "") + "请更新后使用";
    const _0xc9b96b = {
      log: _0xe1551f,
      updateUrl: _0x358f2c.updateUrl
    };
    send(EVENT_NAMES.updateAlert, _0xc9b96b);
    console.log("发现新版本,需要更新,脚本将不会初始化:", _0x358f2c);
    return;
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
}).catch(_0x9db094 => {
  console.log("检查更新出错,正常初始化:", _0x9db094);
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