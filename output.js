//Wed Jan 21 2026 02:59:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const CURRENT_VERSION = "1.0.0";
const VERSION_CHECK_URL = "https://13413.kstore.vip/lxmusic/changqing.json";
const qualitys = {
  kg: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  tx: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  wy: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  kw: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  },
  mg: {
    "128k": "standard",
    "320k": "exhigh",
    flac: "lossless"
  }
};
const apis = {
  kg: {
    musicUrl(_0x3b5ccc, _0x54ced6) {
      let _0x2417ef = "";
      const _0x5bc271 = _0x3b5ccc.hash;
      console.log(_0x54ced6, _0x5bc271);
      _0x2417ef = "https://musicapi.haitangw.net/music/kg_song%E6%8D%A2%E6%BA%90%E7%89%88.php?type=mp3&id=" + _0x5bc271 + "&level=" + _0x54ced6;
      return new Promise(_0x578fa9 => {
        _0x578fa9(_0x2417ef);
      });
    }
  },
  tx: {
    musicUrl(_0x4b54c4, _0xdebdea) {
      let _0x1096ac = "";
      const _0x5ab3b9 = _0x4b54c4.songmid;
      console.log(_0xdebdea, _0x5ab3b9);
      _0x1096ac = "https://musicapi.haitangw.net/music/qq_song_kw.php?type=mp3&id=" + _0x5ab3b9 + "&level=" + _0xdebdea;
      return new Promise(_0xeef49a => {
        _0xeef49a(_0x1096ac);
      });
    }
  },
  wy: {
    musicUrl(_0x3893f9, _0x3602db) {
      let _0x24739a = "";
      const _0x22757d = _0x3893f9.songmid;
      console.log(_0x3602db, _0x22757d);
      _0x24739a = "https://musicapi.haitangw.net/music/wy.php?type=mp3&id=" + _0x22757d + "&level=" + _0x3602db;
      return new Promise(_0x1e0b9c => {
        _0x1e0b9c(_0x24739a);
      });
    }
  },
  kw: {
    musicUrl(_0x46986c, _0x11136b) {
      let _0x52d4ef = "";
      const _0x5d0289 = _0x46986c.songmid;
      console.log(_0x11136b, _0x5d0289);
      _0x52d4ef = "https://musicapi.haitangw.net/music/kw.php?type=mp3&id=" + _0x5d0289 + "&level=" + _0x11136b;
      return new Promise(_0x24f4a8 => {
        _0x24f4a8(_0x52d4ef);
      });
    }
  },
  mg: {
    musicUrl(_0x195706, _0x43d9c8) {
      let _0x1691f1 = "";
      const _0x1b2410 = _0x195706.songmid;
      console.log(_0x43d9c8, _0x1b2410);
      _0x1691f1 = "https://musicapi.haitangw.net/musicapi/mg.php?type=mp3&id=" + _0x1b2410 + "&level=" + _0x43d9c8;
      return new Promise(_0x4c5061 => {
        _0x4c5061(_0x1691f1);
      });
    }
  }
};
const compareVersions = (_0x3457c6, _0x3d8fcc) => {
  const _0x9787b6 = _0x3457c6.split(".").map(Number);
  const _0x41053d = _0x3d8fcc.split(".").map(Number);
  for (let _0x6b567f = 0; _0x6b567f < Math.max(_0x9787b6.length, _0x41053d.length); _0x6b567f++) {
    const _0xce365c = _0x9787b6[_0x6b567f] || 0;
    const _0x62997a = _0x41053d[_0x6b567f] || 0;
    if (_0xce365c > _0x62997a) {
      return 1;
    }
    if (_0xce365c < _0x62997a) {
      return -1;
    }
  }
  return 0;
};
const checkUpdate = async () => {
  return new Promise((_0x1a08f4, _0x1590b3) => {
    request(VERSION_CHECK_URL, {
      method: "GET",
      timeout: 3000
    }, (_0x3a7e5f, _0xe27011) => {
      if (_0x3a7e5f || _0xe27011.statusCode !== 200) {
        console.log("检查更新失败:", _0x3a7e5f || _0xe27011.statusMessage);
        _0x1a08f4(null);
        return;
      }
      try {
        const _0x37b163 = _0xe27011.body;
        compareVersions(CURRENT_VERSION, _0x37b163.version) < 0 ? _0x1a08f4({
          version: _0x37b163.version,
          updateUrl: _0x37b163.updateUrl,
          description: _0x37b163.description || ""
        }) : _0x1a08f4(null);
      } catch (_0x40afca) {
        {
          console.log("解析版本信息失败:", _0x40afca);
          _0x1a08f4(null);
        }
      }
    });
  });
};
on(EVENT_NAMES.request, ({
  source: _0x380dfb,
  action: _0x34bc54,
  info: _0x132efc
}) => {
  switch (_0x34bc54) {
    case "musicUrl":
      console.log(apis[_0x380dfb].musicUrl(_0x132efc.musicInfo, qualitys[_0x380dfb][_0x132efc.type]), _0x380dfb);
      return apis[_0x380dfb].musicUrl(_0x132efc.musicInfo, qualitys[_0x380dfb][_0x132efc.type]);
  }
});
checkUpdate().then(_0x41d224 => {
  if (_0x41d224) {
    const _0x43a87d = "发现新版本 v" + _0x41d224.version + "\n" + (_0x41d224.description ? "更新内容: " + _0x41d224.description + "\n" : "") + "请更新后使用";
    send(EVENT_NAMES.updateAlert, {
      log: _0x43a87d,
      updateUrl: _0x41d224.updateUrl
    });
    console.log("发现新版本,需要更新,脚本将不会初始化:", _0x41d224);
    return;
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
}).catch(_0x49e070 => {
  console.log("检查更新出错,正常初始化:", _0x49e070);
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