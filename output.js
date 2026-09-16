//Wed Sep 16 2026 00:33:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
    EVENT_NAMES: _0x3eb169,
    request: _0xb30f36,
    on: _0xd8c033,
    send: _0x3836f7,
    utils: _0x5613f4,
    env: _0x2e741f,
    version: _0x3d3c08,
    currentScriptInfo: _0x104413
  } = globalThis.lx,
  _0x2115bf = _0x104413 ? _0x104413.rawScript : typeof document !== "undefined" ? document.currentScript?.["textContent"] || "" : "",
  _0xe68e5d = _0x4393f5 => {
    const _0xd77e7e = /^\/\*!(?:.|\n)+?\*\//.exec(_0x4393f5)?.[0];
    if (!_0xd77e7e) return {};
    const _0x4cd891 = {},
      _0x3cd07f = [{
        "key": "tx_cookie",
        "regex": /\*\s*@tx_cookie\s+(.+)/
      }, {
        "key": "wy_cookie",
        "regex": /\*\s*@wy_cookie\s+(.+)/
      }];
    for (const {
      key: _0x2c5c06,
      regex: _0x2033a9
    } of _0x3cd07f) {
      {
        const _0x6e571 = _0x2033a9.exec(_0xd77e7e),
          _0x2c3271 = _0x6e571?.[1]?.["trim"]();
        _0x4cd891[_0x2c5c06] = !_0x2c3271 || _0x2c3271 === "null" ? "" : _0x2c3271;
      }
    }
    return _0x4cd891;
  },
  _0xa8d3db = _0xe68e5d(_0x2115bf),
  _0x4c2beb = _0xa8d3db.tx_cookie,
  _0x1a6ca2 = _0xa8d3db.wy_cookie,
  _0x48fab0 = !!_0x4c2beb,
  _0x30efd5 = !!_0x1a6ca2,
  _0x33c9a7 = JSON.parse(_0x48fab0 && _0x30efd5 ? "{\"tx\":[\"128k\",\"320k\",\"flac\",\"flac24bit\",\"hires\",\"atmos\",\"atmos_plus\",\"master\"],\"wy\":[\"128k\",\"320k\",\"flac\",\"flac24bit\",\"hires\",\"atmos\",\"master\"],\"kw\":[\"128k\",\"192k\",\"320k\",\"flac\",\"flac24bit\"],\"kg\":[\"128k\",\"320k\",\"flac\",\"hires\",\"atmos\",\"master\"],\"mg\":[\"128k\",\"320k\",\"flac\"]}" : _0x48fab0 ? "{\"tx\":[\"128k\",\"320k\",\"flac\",\"flac24bit\",\"hires\",\"atmos\",\"atmos_plus\",\"master\"],\"wy\":[\"128k\",\"320k\",\"flac\"],\"kw\":[\"128k\",\"192k\",\"320k\",\"flac\",\"flac24bit\"],\"kg\":[\"128k\",\"320k\",\"flac\",\"hires\",\"atmos\",\"master\"],\"mg\":[\"128k\",\"320k\",\"flac\"]}" : _0x30efd5 ? "{\"tx\":[\"128k\",\"320k\",\"flac\"],\"wy\":[\"128k\",\"320k\",\"flac\",\"flac24bit\",\"hires\",\"atmos\",\"master\"],\"kw\":[\"128k\",\"192k\",\"320k\",\"flac\",\"flac24bit\"],\"kg\":[\"128k\",\"320k\",\"flac\",\"hires\",\"atmos\",\"master\"],\"mg\":[\"128k\",\"320k\",\"flac\"]}" : "{\"tx\":[\"128k\",\"320k\",\"flac\"],\"wy\":[\"128k\",\"320k\",\"flac\"],\"kw\":[\"128k\",\"192k\",\"320k\",\"flac\",\"flac24bit\"],\"kg\":[\"128k\",\"320k\",\"flac\",\"hires\",\"atmos\",\"master\"],\"mg\":[\"128k\",\"320k\",\"flac\"]}"),
  _0x24b339 = Object.keys(_0x33c9a7),
  _0x171f7e = (_0x5d49f7, _0x4e3c6c = {
    "method": "GET"
  }) => new Promise((_0x230978, _0x57470f) => {
    _0xb30f36(_0x5d49f7, _0x4e3c6c, (_0xc4386d, _0x2f2e62) => {
      if (_0xc4386d) return _0x57470f(_0xc4386d);
      let _0x447b3a = _0x2f2e62.body;
      if (typeof _0x447b3a === "string") {
        const _0x169406 = _0x447b3a.trim();
        if (_0x169406.startsWith("{") || _0x169406.startsWith("[") || _0x169406.startsWith("\"")) {
          try {
            _0x447b3a = JSON.parse(_0x169406);
          } catch (_0x4bf621) {}
        }
      }
      _0x230978({
        "body": _0x447b3a,
        "statusCode": _0x2f2e62.statusCode,
        "headers": _0x2f2e62.headers || {}
      });
    });
  }),
  _0xb81a48 = _0x49d511 => _0x5613f4.crypto.md5(_0x49d511),
  _0x4ab936 = () => {
    const _0x1bfeb6 = "0123456789abcdef";
    let _0x488172 = "";
    for (let _0x455b65 = 0; _0x455b65 < 32; _0x455b65++) _0x488172 += _0x1bfeb6[Math.floor(Math.random() * 16)];
    return _0x488172;
  },
  _0x5cb22e = _0x1384d6 => {
    const _0x3c316b = new Uint8Array(_0x1384d6.length);
    for (let _0x282331 = 0; _0x282331 < _0x1384d6.length; _0x282331++) _0x3c316b[_0x282331] = _0x1384d6[_0x282331];
    return _0x3c316b;
  },
  _0x2ccfe9 = _0x266736 => {
    const _0x48c54e = [];
    for (let _0x2cad60 = 0; _0x2cad60 < _0x266736.length; _0x2cad60++) {
      let _0x4e1e74 = _0x266736.charCodeAt(_0x2cad60);
      if (_0x4e1e74 >= 55296 && _0x4e1e74 <= 56319 && _0x2cad60 + 1 < _0x266736.length) {
        {
          const _0x3c3bc6 = _0x266736.charCodeAt(_0x2cad60 + 1);
          _0x3c3bc6 >= 56320 && _0x3c3bc6 <= 57343 && (_0x4e1e74 = 65536 + (_0x4e1e74 - 55296 << 10) + (_0x3c3bc6 - 56320), _0x2cad60++);
        }
      }
      if (_0x4e1e74 < 128) {
        _0x48c54e.push(_0x4e1e74);
      } else {
        if (_0x4e1e74 < 2048) {
          _0x48c54e.push(192 | _0x4e1e74 >> 6, 128 | _0x4e1e74 & 63);
        } else {
          if (_0x4e1e74 < 65536) {
            _0x48c54e.push(224 | _0x4e1e74 >> 12, 128 | _0x4e1e74 >> 6 & 63, 128 | _0x4e1e74 & 63);
          } else _0x48c54e.push(240 | _0x4e1e74 >> 18, 128 | _0x4e1e74 >> 12 & 63, 128 | _0x4e1e74 >> 6 & 63, 128 | _0x4e1e74 & 63);
        }
      }
    }
    return _0x5cb22e(_0x48c54e);
  },
  _0x4fb457 = _0x1470f4 => {
    const _0x4b7062 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let _0x5045d6 = "";
    for (let _0x321b73 = 0; _0x321b73 < _0x1470f4.length; _0x321b73 += 3) {
      {
        const _0x4a4af2 = _0x1470f4[_0x321b73],
          _0x36617c = _0x321b73 + 1 < _0x1470f4.length ? _0x1470f4[_0x321b73 + 1] : 0,
          _0x2f48c7 = _0x321b73 + 2 < _0x1470f4.length ? _0x1470f4[_0x321b73 + 2] : 0;
        _0x5045d6 += _0x4b7062[_0x4a4af2 >> 2];
        _0x5045d6 += _0x4b7062[(_0x4a4af2 & 3) << 4 | _0x36617c >> 4];
        _0x5045d6 += _0x321b73 + 1 < _0x1470f4.length ? _0x4b7062[(_0x36617c & 15) << 2 | _0x2f48c7 >> 6] : "=";
        _0x5045d6 += _0x321b73 + 2 < _0x1470f4.length ? _0x4b7062[_0x2f48c7 & 63] : "=";
      }
    }
    return _0x5045d6;
  },
  _0xc803e2 = _0x204a9b => {
    const _0x208b32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      _0x584539 = {};
    for (let _0x50f0e7 = 0; _0x50f0e7 < _0x208b32.length; _0x50f0e7++) _0x584539[_0x208b32[_0x50f0e7]] = _0x50f0e7;
    _0x204a9b = _0x204a9b.replace(/=+$/, "");
    const _0x46d06f = [];
    let _0x4014f1 = 0,
      _0x2759b9 = 0;
    for (let _0x2cd4f4 = 0; _0x2cd4f4 < _0x204a9b.length; _0x2cd4f4++) {
      _0x4014f1 = _0x4014f1 << 6 | _0x584539[_0x204a9b[_0x2cd4f4]];
      _0x2759b9 += 6;
      _0x2759b9 >= 8 && (_0x2759b9 -= 8, _0x46d06f.push(_0x4014f1 >> _0x2759b9 & 255));
    }
    return _0x5cb22e(_0x46d06f);
  },
  _0x3aafdb = _0x502f1a => {
    const _0x9008a7 = new Uint8Array(_0x502f1a.length / 2);
    for (let _0x10cb34 = 0; _0x10cb34 < _0x9008a7.length; _0x10cb34++) _0x9008a7[_0x10cb34] = parseInt(_0x502f1a.substr(_0x10cb34 * 2, 2), 16);
    return _0x9008a7;
  },
  _0x3b1061 = _0x271838 => {
    const _0x2e8498 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      _0x1af53b = _0x271838.length,
      _0x501be1 = _0x1af53b * 8,
      _0x3e52ac = new Uint8Array((_0x1af53b + 8 >> 6 << 6) + 64);
    _0x3e52ac.set(_0x271838);
    _0x3e52ac[_0x1af53b] = 128;
    const _0x2f81c1 = new DataView(_0x3e52ac.buffer);
    _0x2f81c1.setUint32(_0x3e52ac.length - 4, _0x501be1 >>> 0, false);
    _0x2f81c1.setUint32(_0x3e52ac.length - 8, Math.floor(_0x501be1 / 4294967296), false);
    let _0x2df1eb = 1779033703,
      _0x283bc0 = 3144134277,
      _0x1d21a6 = 1013904242,
      _0xc08b64 = 2773480762,
      _0x4f5c60 = 1359893119,
      _0x2969c0 = 2600822924,
      _0x18cd64 = 528734635,
      _0x174abc = 1541459225;
    const _0x50df91 = new Array(64),
      _0x5c0899 = (_0x505578, _0x27208d) => _0x505578 >>> _0x27208d | _0x505578 << 32 - _0x27208d;
    for (let _0x3573d3 = 0; _0x3573d3 < _0x3e52ac.length; _0x3573d3 += 64) {
      {
        for (let _0x3b4b73 = 0; _0x3b4b73 < 16; _0x3b4b73++) _0x50df91[_0x3b4b73] = _0x2f81c1.getUint32(_0x3573d3 + _0x3b4b73 * 4, false);
        for (let _0x1eba10 = 16; _0x1eba10 < 64; _0x1eba10++) {
          const _0x2f31e3 = _0x5c0899(_0x50df91[_0x1eba10 - 15], 7) ^ _0x5c0899(_0x50df91[_0x1eba10 - 15], 18) ^ _0x50df91[_0x1eba10 - 15] >>> 3,
            _0x3bd84d = _0x5c0899(_0x50df91[_0x1eba10 - 2], 17) ^ _0x5c0899(_0x50df91[_0x1eba10 - 2], 19) ^ _0x50df91[_0x1eba10 - 2] >>> 10;
          _0x50df91[_0x1eba10] = _0x50df91[_0x1eba10 - 16] + _0x2f31e3 + _0x50df91[_0x1eba10 - 7] + _0x3bd84d | 0;
        }
        let _0xb7715f = _0x2df1eb,
          _0x272725 = _0x283bc0,
          _0x3d3c28 = _0x1d21a6,
          _0x5e1ad2 = _0xc08b64,
          _0x3eb5e7 = _0x4f5c60,
          _0x175443 = _0x2969c0,
          _0x260d38 = _0x18cd64,
          _0x5cf006 = _0x174abc;
        for (let _0x52d1a7 = 0; _0x52d1a7 < 64; _0x52d1a7++) {
          {
            const _0x43cb20 = _0x5c0899(_0x3eb5e7, 6) ^ _0x5c0899(_0x3eb5e7, 11) ^ _0x5c0899(_0x3eb5e7, 25),
              _0x2e1edf = _0x3eb5e7 & _0x175443 ^ ~_0x3eb5e7 & _0x260d38,
              _0x5a6fe6 = _0x5cf006 + _0x43cb20 + _0x2e1edf + _0x2e8498[_0x52d1a7] + _0x50df91[_0x52d1a7] | 0,
              _0xe89fd4 = _0x5c0899(_0xb7715f, 2) ^ _0x5c0899(_0xb7715f, 13) ^ _0x5c0899(_0xb7715f, 22),
              _0x47b0da = _0xb7715f & _0x272725 ^ _0xb7715f & _0x3d3c28 ^ _0x272725 & _0x3d3c28,
              _0x1bf15e = _0xe89fd4 + _0x47b0da | 0;
            _0x5cf006 = _0x260d38;
            _0x260d38 = _0x175443;
            _0x175443 = _0x3eb5e7;
            _0x3eb5e7 = _0x5e1ad2 + _0x5a6fe6 | 0;
            _0x5e1ad2 = _0x3d3c28;
            _0x3d3c28 = _0x272725;
            _0x272725 = _0xb7715f;
            _0xb7715f = _0x5a6fe6 + _0x1bf15e | 0;
          }
        }
        _0x2df1eb = _0x2df1eb + _0xb7715f | 0;
        _0x283bc0 = _0x283bc0 + _0x272725 | 0;
        _0x1d21a6 = _0x1d21a6 + _0x3d3c28 | 0;
        _0xc08b64 = _0xc08b64 + _0x5e1ad2 | 0;
        _0x4f5c60 = _0x4f5c60 + _0x3eb5e7 | 0;
        _0x2969c0 = _0x2969c0 + _0x175443 | 0;
        _0x18cd64 = _0x18cd64 + _0x260d38 | 0;
        _0x174abc = _0x174abc + _0x5cf006 | 0;
      }
    }
    const _0xeca902 = _0x24b247 => ("00000000" + (_0x24b247 >>> 0).toString(16)).slice(-8);
    return _0xeca902(_0x2df1eb) + _0xeca902(_0x283bc0) + _0xeca902(_0x1d21a6) + _0xeca902(_0xc08b64) + _0xeca902(_0x4f5c60) + _0xeca902(_0x2969c0) + _0xeca902(_0x18cd64) + _0xeca902(_0x174abc);
  },
  _0x44a056 = (_0xc1c3ac, _0x1a32c5) => {
    const _0x3d0ec7 = _0xc1c3ac.length > 64 ? _0x3aafdb(_0x3b1061(_0xc1c3ac)) : _0xc1c3ac,
      _0x4d2aee = new Uint8Array(64),
      _0x2d4e0c = new Uint8Array(64);
    for (let _0x125fb8 = 0; _0x125fb8 < 64; _0x125fb8++) _0x4d2aee[_0x125fb8] = 54;
    for (let _0x3d15e0 = 0; _0x3d15e0 < 64; _0x3d15e0++) _0x2d4e0c[_0x3d15e0] = 92;
    for (let _0x413950 = 0; _0x413950 < _0x3d0ec7.length; _0x413950++) {
      _0x4d2aee[_0x413950] ^= _0x3d0ec7[_0x413950];
      _0x2d4e0c[_0x413950] ^= _0x3d0ec7[_0x413950];
    }
    const _0x20a2d5 = new Uint8Array(_0x4d2aee.length + _0x1a32c5.length);
    _0x20a2d5.set(_0x4d2aee);
    _0x20a2d5.set(_0x1a32c5, _0x4d2aee.length);
    const _0x477d7b = new Uint8Array(_0x2d4e0c.length + 32);
    _0x477d7b.set(_0x2d4e0c);
    _0x477d7b.set(_0x3aafdb(_0x3b1061(_0x20a2d5)), _0x2d4e0c.length);
    return _0x3b1061(_0x477d7b);
  },
  _0x3939a5 = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  _0x4bd563 = () => {
    const _0x4a357f = _0x3939a5.slice(),
      _0x39ba92 = [[0, 99], [82, 120], [160, 224], [27, 212]];
    for (const [_0x37088a, _0x4e9c84] of _0x39ba92) {
      const _0x1f4b44 = _0x4a357f[_0x37088a];
      _0x4a357f[_0x37088a] = _0x4a357f[_0x4e9c84];
      _0x4a357f[_0x4e9c84] = _0x1f4b44;
    }
    return _0x4a357f;
  },
  _0x5cd5d0 = _0x5cb22e([75, 114, 154, 243, 29, 136, 197, 7, 190, 52, 97, 170, 9, 85, 226, 124]),
  _0x2d4ac3 = _0x5cb22e([63, 145, 109, 4, 186, 39, 204, 88, 20, 249, 139, 224, 114, 74, 214, 1]),
  _0x619e04 = _0x5cb22e([156, 78, 113, 178, 218, 56, 6, 245, 131, 204, 26, 71, 41, 232, 93, 191]),
  _0xf00d41 = _0x5cb22e([90, 31, 142, 60, 183, 146, 100, 13, 250, 72, 21, 123, 227, 201, 42, 134]),
  _0x6fa7b5 = _0x4e5dd3 => {
    const _0x57c1f1 = _0x2ccfe9(_0x4e5dd3),
      _0x39a6d1 = 16 - _0x57c1f1.length % 16,
      _0x500d0b = _0x39a6d1 ^ 90,
      _0xff3a4e = new Uint8Array(_0x57c1f1.length + _0x39a6d1);
    _0xff3a4e.set(_0x57c1f1);
    for (let _0x983a4 = _0x57c1f1.length; _0x983a4 < _0xff3a4e.length; _0x983a4++) _0xff3a4e[_0x983a4] = _0x500d0b;
    const _0x2a002e = _0x4bd563(),
      _0x4ad4ed = _0x5cd5d0,
      _0x4b9fa1 = _0x2d4ac3.slice(),
      _0x378519 = new Uint8Array(_0xff3a4e.length);
    for (let _0x28af72 = 0; _0x28af72 < _0xff3a4e.length; _0x28af72 += 16) {
      const _0x5da330 = new Array(16);
      for (let _0x2e78b5 = 0; _0x2e78b5 < 16; _0x2e78b5++) _0x5da330[_0x2e78b5] = _0xff3a4e[_0x28af72 + _0x2e78b5] & 255 ^ _0x4b9fa1[_0x2e78b5];
      for (let _0x14a6db = 0; _0x14a6db < 16; _0x14a6db++) _0x5da330[_0x14a6db] = _0x2a002e[_0x5da330[_0x14a6db]];
      for (let _0x393cb8 = 0; _0x393cb8 < 16; _0x393cb8++) _0x5da330[_0x393cb8] = _0x5da330[_0x393cb8] ^ _0x4ad4ed[_0x393cb8];
      const _0x2e868d = new Array(16);
      for (let _0x3b56c8 = 0; _0x3b56c8 < 4; _0x3b56c8++) for (let _0x43e699 = 0; _0x43e699 < 4; _0x43e699++) _0x2e868d[_0x3b56c8 * 4 + _0x43e699] = _0x5da330[_0x3b56c8 * 4 + (_0x43e699 + _0x3b56c8) % 4];
      for (let _0x472136 = 0; _0x472136 < 16; _0x472136++) {
        _0x378519[_0x28af72 + _0x472136] = _0x2e868d[_0x472136];
        _0x4b9fa1[_0x472136] = _0x2e868d[_0x472136];
      }
    }
    return _0x4fb457(_0x378519);
  },
  _0x20d4df = _0x15c57a => {
    const _0x363bed = _0xc803e2(_0x15c57a),
      _0x30d390 = _0x619e04,
      _0x28ca7e = new Array(256);
    for (let _0x2eb43d = 0; _0x2eb43d < 256; _0x2eb43d++) _0x28ca7e[_0x2eb43d] = _0x2eb43d;
    let _0x495c2c = 0;
    for (let _0x5ba607 = 0; _0x5ba607 < 256; _0x5ba607++) {
      {
        _0x495c2c = _0x495c2c + _0x28ca7e[_0x5ba607] + _0x30d390[_0x5ba607 % _0x30d390.length] & 255;
        const _0x5b438e = _0x28ca7e[_0x5ba607];
        _0x28ca7e[_0x5ba607] = _0x28ca7e[_0x495c2c];
        _0x28ca7e[_0x495c2c] = _0x5b438e;
      }
    }
    const _0x54cfb3 = new Uint8Array(_0x363bed.length);
    let _0x4d4d45 = 0;
    _0x495c2c = 0;
    for (let _0x45fa62 = 0; _0x45fa62 < _0x363bed.length; _0x45fa62++) {
      {
        _0x4d4d45 = _0x4d4d45 + 1 & 255;
        _0x495c2c = _0x495c2c + _0x28ca7e[_0x4d4d45] & 255;
        const _0x57b4cb = _0x28ca7e[_0x4d4d45];
        _0x28ca7e[_0x4d4d45] = _0x28ca7e[_0x495c2c];
        _0x28ca7e[_0x495c2c] = _0x57b4cb;
        _0x54cfb3[_0x45fa62] = _0x363bed[_0x45fa62] ^ _0x28ca7e[_0x28ca7e[_0x4d4d45] + _0x28ca7e[_0x495c2c] & 255];
      }
    }
    let _0xebebe8 = "";
    for (let _0x20ac08 = 0; _0x20ac08 < _0x54cfb3.length;) {
      const _0x302efc = _0x54cfb3[_0x20ac08];
      if (_0x302efc < 128) {
        _0xebebe8 += String.fromCharCode(_0x302efc);
        _0x20ac08++;
      } else {
        if (_0x302efc >= 192 && _0x302efc < 224) _0xebebe8 += String.fromCharCode((_0x302efc & 31) << 6 | _0x54cfb3[_0x20ac08 + 1] & 63), _0x20ac08 += 2;else {
          if (_0x302efc >= 224 && _0x302efc < 240) _0xebebe8 += String.fromCharCode((_0x302efc & 15) << 12 | (_0x54cfb3[_0x20ac08 + 1] & 63) << 6 | _0x54cfb3[_0x20ac08 + 2] & 63), _0x20ac08 += 3;else {
            {
              const _0x441ade = (_0x302efc & 7) << 18 | (_0x54cfb3[_0x20ac08 + 1] & 63) << 12 | (_0x54cfb3[_0x20ac08 + 2] & 63) << 6 | _0x54cfb3[_0x20ac08 + 3] & 63;
              _0xebebe8 += String.fromCharCode(55296 + (_0x441ade - 65536 >> 10), 56320 + (_0x441ade - 65536 & 1023));
              _0x20ac08 += 4;
            }
          }
        }
      }
    }
    return _0xebebe8;
  },
  _0x3d1e79 = {
    "128k": "128k",
    "192k": "128k",
    "320k": "320k",
    "flac": "flac",
    "flac24bit": "flac",
    "hires": "hires",
    "atmos": "atmos",
    "atmos_plus": "atmos_plus",
    "master": "master"
  },
  _0x1259f9 = [{
    "name": "baimusic QQ",
    "fetch": async (_0x38b471, _0x4beb98, _0xc59ab4) => {
      const _0x3d5715 = String(_0xc59ab4?.["songmid"] ?? "");
      if (!_0x3d5715) throw new Error("baimusic QQ: 缺少歌曲ID");
      const _0x9e5dd2 = _0x4beb98 === "hires" ? "flac24bit" : _0x4beb98,
        _0x18c8d4 = JSON.stringify({
          "mid": _0x3d5715,
          "quality": _0x9e5dd2
        }),
        _0x3b7ec5 = _0x6fa7b5(_0x18c8d4),
        _0x13e7f8 = _0x44a056(_0xf00d41, _0x2ccfe9(_0x3b7ec5)),
        _0x5012aa = await _0x171f7e("http://106.55.0.102/baimusic/qqhoturl.php", {
          "method": "POST",
          "timeout": 15000,
          "headers": {
            "User-Agent": "Mozilla/5.0 (Linux; Android 15; V2453A Build/AP3A.240905.015.A2_V000L1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.7390.5 Mobile Safari/537.36",
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Content-Type": "application/octet-stream",
            "X-Sig": _0x13e7f8
          },
          "body": _0x3b7ec5
        }),
        _0x2f8c7f = _0x5012aa.body;
      if (!_0x2f8c7f || typeof _0x2f8c7f !== "object" || !_0x2f8c7f.d) throw new Error("baimusic QQ: 响应缺少d字段" + (_0x2f8c7f?.["error"] ? ": " + _0x2f8c7f.error : ""));
      const _0xf4da8e = JSON.parse(_0x20d4df(_0x2f8c7f.d));
      if (!_0xf4da8e.url) throw new Error("baimusic QQ: " + (_0xf4da8e.error || "获取URL失败"));
      return _0xf4da8e.url;
    }
  }],
  _0x50ec18 = [{
    "name": "ikun网易云",
    "fetch": async (_0x2685fc, _0x499d75, _0x508252) => {
      const _0x349ad5 = _0x508252?.["hash"] ?? _0x2685fc,
        _0x250951 = await _0x171f7e("https://c.wwwweb.top/music/url", {
          "method": "POST",
          "timeout": 10000,
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "lx-music-request/2.9.0",
            "X-Api-Key": ""
          },
          "body": {
            "source": "wy",
            "musicId": _0x349ad5,
            "quality": _0x499d75
          },
          "follow_max": 5
        }),
        _0x56daa8 = _0x250951.body;
      if (!_0x56daa8 || isNaN(Number(_0x56daa8.code))) throw new Error("ikun网易云: 未知错误");
      if (_0x56daa8.code === 200 && _0x56daa8.url) return _0x56daa8.url;
      if (_0x56daa8.code === 403) throw new Error("ikun网易云: 鉴权失败");
      if (_0x56daa8.code === 429) throw new Error("ikun网易云: 请求过速");
      throw new Error("ikun网易云: " + (_0x56daa8.message || "获取URL失败"));
    }
  }],
  _0xeaf504 = [{
    "name": "酷我流媒体",
    "fetch": async (_0x5f191c, _0x32acaf, _0x2972af) => {
      const _0x2c2a15 = _0x3d1e79[_0x32acaf] || "master",
        _0x412edb = _0x2972af?.["songmid"] || _0x2972af?.["id"] || _0x2972af?.["hash"] || _0x2972af?.["songId"] || _0x2972af?.["musicId"] || _0x5f191c;
      if (!_0x412edb) throw new Error("酷我流媒体: 找不到歌曲ID");
      const _0x5ce596 = String(_0x412edb).trim();
      return "http://175.27.166.236:8928/kwstream?id=" + encodeURIComponent(_0x5ce596) + "&level=" + _0x2c2a15 + "&stream=1";
    }
  }, {
    "name": "HelloWorld KW 主API",
    "fetch": async (_0x5e0dc3, _0x52b70b, _0x43adc0) => {
      const _0x3707db = _0x43adc0?.["hash"] || _0x43adc0?.["songmid"] || _0x43adc0?.["rid"] || _0x43adc0?.["id"] || _0x5e0dc3;
      if (!_0x3707db) throw new Error("HelloWorld KW 主API: 找不到歌曲ID");
      const _0x4933eb = {
          "atmos": "atmos",
          "atmos_plus": "atmos_plus",
          "master": "master"
        },
        _0x47fc5f = _0x4933eb[_0x52b70b];
      if (!_0x47fc5f) throw new Error("HelloWorld KW 主API: 不支持音质");
      const _0xd89b70 = await _0x171f7e("https://musicserver.haitangw.cc/v1/music/resolve-url", {
          "method": "POST",
          "timeout": 10000,
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
          },
          "body": {
            "source": "kw",
            "rid": _0x3707db,
            "level": _0x47fc5f
          }
        }),
        _0x146568 = _0xd89b70.body;
      if (_0x146568?.["data"]?.["url"]) return _0x146568.data.url;
      throw new Error("HelloWorld KW 主API: 无数据");
    }
  }, {
    "name": "HelloWorld KW 备用API",
    "fetch": async (_0xc773d8, _0x335657, _0x22e7cd) => {
      const _0x32bf1a = _0x22e7cd?.["hash"] || _0x22e7cd?.["songmid"] || _0x22e7cd?.["rid"] || _0x22e7cd?.["id"] || _0xc773d8;
      if (!_0x32bf1a) throw new Error("HelloWorld KW 备用API: 找不到歌曲ID");
      const _0x5e3dc3 = {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "flac24bit": "flac24bit",
          "hires": "hires"
        },
        _0x2be857 = _0x5e3dc3[_0x335657];
      if (!_0x2be857) throw new Error("HelloWorld KW 备用API: 不支持音质");
      const _0x2f7219 = await _0x171f7e("https://c.wwwweb.top/music/url", {
          "method": "POST",
          "timeout": 10000,
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "lx-music-desktop/2.10.1",
            "X-Api-Key": ""
          },
          "body": {
            "source": "kw",
            "musicId": _0x32bf1a,
            "quality": _0x2be857
          },
          "follow_max": 5
        }),
        _0x2ea2a2 = _0x2f7219.body;
      if (!_0x2ea2a2 || isNaN(Number(_0x2ea2a2.code))) throw new Error("HelloWorld KW 备用API: 未知错误");
      if (_0x2ea2a2.code === 200 && _0x2ea2a2.url) return _0x2ea2a2.url;
      if (_0x2ea2a2.code === 403) throw new Error("HelloWorld KW 备用API: 鉴权失败");
      if (_0x2ea2a2.code === 429) throw new Error("HelloWorld KW 备用API: 请求过速");
      throw new Error("HelloWorld KW 备用API: " + (_0x2ea2a2.message || "获取URL失败"));
    }
  }],
  _0x53ce2e = [{
    "name": "海堂KG",
    "fetch": async (_0x44f33c, _0x125f73, _0x170a47) => {
      const _0x1ef864 = _0x170a47?.["hash"] || _0x170a47?.["songmid"] || _0x170a47?.["id"] || _0x44f33c;
      if (!_0x1ef864) throw new Error("海堂KG: 找不到歌曲ID");
      const _0x1b1b38 = {
          "128k": "standard",
          "320k": "exhigh",
          "flac": "lossless",
          "hires": "hires",
          "atmos": "atmos",
          "master": "clear"
        },
        _0x3ff636 = _0x1b1b38[_0x125f73];
      if (!_0x3ff636) throw new Error("海堂KG: 不支持音质");
      const _0x3965a3 = await _0x171f7e("https://musicserver.haitangw.cc/v1/music/resolve-url", {
          "method": "POST",
          "timeout": 10000,
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
          },
          "body": {
            "source": "kg",
            "rid": _0x1ef864,
            "level": _0x3ff636
          }
        }),
        _0x48eabf = _0x3965a3.body;
      if (_0x48eabf?.["data"]?.["url"]) return _0x48eabf.data.url;
      throw new Error("海堂KG: 无数据");
    }
  }, {
    "name": "白姬KG",
    "fetch": async (_0x3fa02b, _0x45baf0, _0x2a75ad) => {
      const _0x1a5960 = _0x2a75ad?.["hash"] || _0x2a75ad?.["songmid"] || _0x2a75ad?.["id"] || _0x3fa02b;
      if (!_0x1a5960) throw new Error("白姬KG: 找不到歌曲ID");
      const _0x2c6226 = {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac"
        },
        _0x3ba3af = _0x2c6226[_0x45baf0];
      if (!_0x3ba3af) throw new Error("白姬KG: 不支持音质");
      const _0x1c3813 = "http://103.79.184.97/api/music/url?source=kg&songId={id}&quality={quality}&key=MOLAN-BAIJI".replace("{id}", encodeURIComponent(_0x1a5960)).replace("{quality}", encodeURIComponent(_0x3ba3af)),
        _0x32e481 = await _0x171f7e(_0x1c3813, {
          "method": "GET",
          "timeout": 10000,
          "headers": {
            "User-Agent": "Mozilla/5.0",
            "X-Card-Key": "MOLAN-BAIJI"
          }
        }),
        _0x542236 = _0x32e481.body;
      if (_0x542236 && _0x542236.url) return _0x542236.url;
      if (_0x542236 && _0x542236.data && _0x542236.data.url) return _0x542236.data.url;
      throw new Error("白姬KG: 无数据");
    }
  }, {
    "name": "星海KG",
    "fetch": async (_0x1e2a3f, _0x85ff28, _0x180284) => {
      const _0x35b1d8 = _0x180284?.["hash"] || _0x180284?.["songmid"] || _0x180284?.["id"] || _0x1e2a3f;
      if (!_0x35b1d8) throw new Error("星海KG: 找不到歌曲ID");
      const _0x1992c9 = {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "hires": "hires",
          "atmos": "atmos",
          "master": "master"
        },
        _0x49bdcd = _0x1992c9[_0x85ff28];
      if (!_0x49bdcd) throw new Error("星海KG: 不支持音质");
      const _0x40c95d = "https://yy.zddyr.top/lx/api/?source=kg&quality={quality}&mainHash={id}".replace("{id}", encodeURIComponent(_0x35b1d8)).replace("{quality}", encodeURIComponent(_0x49bdcd)),
        _0x553b42 = await _0x171f7e(_0x40c95d, {
          "method": "GET",
          "timeout": 10000,
          "headers": {
            "User-Agent": "Mozilla/5.0"
          }
        }),
        _0x52ea6b = _0x553b42.body;
      if (_0x52ea6b?.["url"]) return _0x52ea6b.url;
      throw new Error("星海KG: " + (_0x52ea6b?.["msg"] || "无数据"));
    }
  }],
  _0x2eb400 = [{
    "name": "星海主后端",
    "fetch": async (_0x25d1b7, _0x3bc129) => {
      const _0x43490d = await _0x171f7e("https://yy.zddyr.top/lx/api/?source=migu&songmid=" + _0x25d1b7 + "&quality=" + _0x3bc129, {
          "method": "GET",
          "timeout": 8000,
          "headers": {
            "User-Agent": "Mozilla/5.0"
          }
        }),
        _0x489852 = _0x43490d.body;
      if (_0x489852 && _0x489852.code === 200 && _0x489852.url) return _0x489852.url;
      throw new Error("星海主后端: " + (_0x489852?.["msg"] || "无数据"));
    }
  }],
  _0x2dcd58 = async (_0x10330b, _0x56b566, _0x3b3be5) => {
    const _0x5e8aeb = _0x56b566.hash ?? _0x56b566.songmid ?? _0x56b566.id;
    if (!_0x5e8aeb) throw new Error("无法获取歌曲ID");
    let _0x7a198d = {
      "tx": _0x1259f9,
      "wy": _0x50ec18,
      "kw": _0xeaf504,
      "kg": _0x53ce2e,
      "mg": _0x2eb400
    }[_0x10330b];
    if (!_0x7a198d) throw new Error("未知音源: " + _0x10330b);
    if (_0x10330b === "kw") {
      {
        const _0x391384 = ["atmos", "atmos_plus", "master"];
        _0x391384.includes(_0x3b3be5) ? _0x7a198d = [_0x7a198d[0]] : _0x7a198d = _0x7a198d.filter((_0x2067c3, _0x39711f) => _0x39711f !== 0);
      }
    }
    const _0xdb57fc = [];
    for (const _0x2a07aa of _0x7a198d) {
      try {
        console.log("[" + _0x10330b + "] 尝试后端: " + _0x2a07aa.name + " ID: " + _0x5e8aeb + " 音质: " + _0x3b3be5);
        const _0x58bdda = await _0x2a07aa.fetch(_0x5e8aeb, _0x3b3be5, _0x56b566);
        if (_0x58bdda) return console.log("[" + _0x10330b + "] " + _0x2a07aa.name + " 成功"), _0x58bdda;
      } catch (_0x95694a) {
        _0xdb57fc.push(_0x2a07aa.name + ": " + _0x95694a.message);
        console.log("[" + _0x10330b + "] " + _0x2a07aa.name + " 失败: " + _0x95694a.message);
      }
    }
    throw new Error("所有后端均失败（共" + _0x7a198d.length + "个）\n" + _0xdb57fc.join("\n"));
  };
_0xd8c033(_0x3eb169.request, ({
  action: _0x2d2666,
  source: _0x5c4542,
  info: _0x1aaf67
}) => {
  switch (_0x2d2666) {
    case "musicUrl":
      return _0x2dcd58(_0x5c4542, _0x1aaf67.musicInfo, _0x1aaf67.type).then(_0x2cce98 => Promise.resolve(_0x2cce98)).catch(_0x22687c => Promise.reject(_0x22687c));
    default:
      return Promise.reject("action not support: " + _0x2d2666);
  }
});
const _0x4e687f = {};
_0x24b339.forEach(_0x2acf39 => {
  const _0x4064fa = {
    "tx": "QQ音乐",
    "wy": "网易云音乐",
    "kw": "酷我音乐",
    "kg": "酷狗音乐",
    "mg": "咪咕音乐"
  };
  _0x4e687f[_0x2acf39] = {
    "name": _0x4064fa[_0x2acf39] || _0x2acf39,
    "type": "music",
    "actions": ["musicUrl"],
    "qualitys": _0x33c9a7[_0x2acf39]
  };
});
_0x3836f7(_0x3eb169.inited, {
  "status": true,
  "openDevTools": false,
  "sources": _0x4e687f
});
console.log("[QQ音乐+网易云音乐+酷我+酷狗+咪咕聚合音源 v4.5.1] 已加载完成");
console.log("[QQ音乐] 后端数: " + _0x1259f9.length + " Cookie: " + (_0x48fab0 ? "已配置" : "未配置"));
console.log("[网易云音乐] 后端数: " + _0x50ec18.length + " Cookie: " + (_0x30efd5 ? "已配置" : "未配置"));
console.log("[酷我音乐] 后端数: " + _0xeaf504.length);
console.log("[酷狗音乐] 后端数: " + _0x53ce2e.length);
console.log("[咪咕音乐] 后端数: " + _0x2eb400.length);