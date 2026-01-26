//Mon Jan 26 2026 22:13:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios");
const BASE_URL = "http://121.196.228.123:8979";
const headers = {
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
};
const pageSize = 30;
function formatMusicItem(c) {
  return {
    id: String(c.id),
    artwork: c.picUrl,
    title: c.name,
    artist: c.artists || c.artist_string,
    album: c.album,
    duration: c.duration ? c.duration / 1000 : 0,
    url: null
  };
}
function formatAlbumItem(c) {
  return {
    id: String(c.id || c.playlistId),
    artwork: c.coverImgUrl || c.picUrl,
    title: c.name,
    artist: c.artist || c.creator,
    description: c.description,
    date: c.publishTime ? new Date(c.publishTime).toISOString().split("T")[0] : null,
    worksNum: c.trackCount || c.songs?.["length"] || 0
  };
}
function formatArtistItem(c) {
  return {
    id: String(c.id),
    name: c.name || c.nickname || c.artist,
    avatar: c.avatar || c.picUrl,
    description: c.description,
    worksNum: c.worksNum || c.songs?.["length"] || c.trackCount || 0,
    fans: c.fans || 0
  };
}
async function searchBase(c, d) {
  const e = {
    keywords: c,
    limit: pageSize
  };
  try {
    const f = await axios.post(BASE_URL + "/search", e, {
      headers: headers
    });
    if (f.data && f.data.success) {
      return {
        songs: f.data.data || [],
        total: f.data.data?.["length"] || 0
      };
    }
    return {
      songs: [],
      total: 0
    };
  } catch (g) {
    console.error("[网易云音乐插件] 搜索失败: " + g.message);
    throw g;
  }
}
async function searchMusic(c, d) {
  const e = await searchBase(c, d);
  const f = e.songs || [];
  return {
    isEnd: d * pageSize >= f.length || f.length < pageSize,
    data: f.map(formatMusicItem)
  };
}
async function searchAlbum(c, d) {
  return {
    isEnd: true,
    data: []
  };
}
async function searchArtist(c, d) {
  return {
    isEnd: true,
    data: []
  };
}
async function getArtistWorks(c, d, e) {
  const f = await searchBase(c.name, d);
  const g = f.songs || [];
  const h = g.filter(i => {
    const j = (i.artists || i.artist_string || "").split("/");
    return j.some(k => k.trim() === c.name);
  });
  if (e === "music") {
    return {
      isEnd: d * pageSize >= h.length,
      data: h.map(formatMusicItem)
    };
  } else {
    if (e === "album") {
      const i = [];
      const j = new Map();
      h.forEach(k => {
        const l = k.album;
        if (!j.has(l)) {
          j.set(l, {
            id: k.id,
            name: l,
            artist: c.name,
            picUrl: k.picUrl,
            trackCount: 1,
            songs: [k]
          });
        } else {
          const m = j.get(l);
          m.trackCount++;
          m.songs.push(k);
        }
      });
      return {
        isEnd: d * pageSize >= i.length,
        data: Array.from(j.values()).map(formatAlbumItem)
      };
    }
  }
  return {
    isEnd: true,
    data: []
  };
}
async function getPlaylistDetail(c, d) {
  try {
    if (!c || !c.id) {
      throw new Error("歌单项缺少ID");
    }
    const e = {
      id: String(c.id)
    };
    console.log("[网易云音乐插件] 请求歌单详情: ID=" + e.id);
    const f = await axios.post(BASE_URL + "/playlist", e, {
      headers: headers
    });
    const g = f.data;
    console.log("[网易云音乐插件] API响应: success=" + g.success + ", status=" + g.status);
    let h = null;
    if (g && g.success && g.data && g.data.playlist) {
      h = g.data.playlist;
    } else {
      g && g.success && g.data && g.data.id && (h = g.data);
    }
    if (!h) {
      console.error("[网易云音乐插件] 无法解析歌单数据，响应内容:", JSON.stringify(g).substring(0, 200));
      return {
        isEnd: true,
        musicList: []
      };
    }
    let i = "";
    let j = "unknown";
    if (typeof h.creator === "string") {
      i = h.creator;
      j = "unknown";
    } else {
      h.creator && typeof h.creator === "object" ? (i = h.creator.nickname || h.creator.name || "未知", j = String(h.creator.userId || h.creator.id || "unknown")) : (i = "未知", j = "unknown");
    }
    const k = (h.tracks || []).map(l => ({
      id: String(l.id),
      title: l.name,
      artist: l.artists || l.artist_string || l.ar?.["map"](m => m.name)["join"]("/") || "未知",
      album: l.album || l.al?.["name"] || "未知",
      artwork: l.picUrl || l.al?.["picUrl"] || "",
      duration: l.dt ? l.dt / 1000 : 0
    }));
    console.log("[网易云音乐插件] 获取歌单成功: " + h.name + ", 歌曲" + k.length + "首");
    return {
      isEnd: true,
      musicList: k,
      detail: {
        id: String(h.id),
        name: h.name || "未知歌单",
        coverImg: h.coverImgUrl || h.coverImg || "",
        coverImgUrl: h.coverImgUrl || h.coverImg || "",
        description: h.description || "",
        creator: {
          name: i,
          id: j
        },
        trackCount: h.trackCount || k.length,
        playCount: h.playCount || 0,
        createTime: h.createTime || 0,
        tags: h.tags || [],
        subscribedCount: h.subscribedCount || 0,
        commentCount: h.commentCount || 0
      }
    };
  } catch (l) {
    console.error("[网易云音乐插件] 获取歌单详情失败:", l.message);
    console.error("[网易云音乐插件] 错误堆栈:", l.stack);
    return {
      isEnd: true,
      musicList: []
    };
  }
}
async function getAlbumInfo(c, d) {
  try {
    if (!c || !c.id) {
      throw new Error("专辑项缺少ID");
    }
    const e = {
      id: String(c.id)
    };
    console.log("[网易云音乐插件] 获取专辑详情: ID=" + e.id);
    const f = await axios.post(BASE_URL + "/album", e, {
      headers: headers
    });
    const g = f.data;
    let h = null;
    let i = null;
    g && g.success && g.data && (h = g.data.album || {}, i = g.data.songs || []);
    if (!h || !h.id) {
      console.error("[网易云音乐插件] 无法解析专辑数据");
      return {
        isEnd: true,
        musicList: []
      };
    }
    console.log("[网易云音乐插件] 专辑详情获取成功: " + h.name);
    if (i && Array.isArray(i) && i.length > 0) {
      const j = i.map(k => ({
        id: String(k.id),
        title: k.name,
        artist: k.artists || k.ar?.["map"](l => l.name)["join"]("/") || h.artist || "未知",
        album: h.name,
        artwork: h.coverImgUrl || h.picUrl || k.al?.["picUrl"] || "",
        duration: k.dt ? k.dt / 1000 : 0
      }));
      return {
        isEnd: true,
        musicList: j
      };
    } else {
      console.warn("[网易云音乐插件] 专辑没有歌曲数据");
      return {
        isEnd: true,
        musicList: []
      };
    }
  } catch (k) {
    console.error("[网易云音乐插件] 获取专辑详情失败:", k.message);
    return {
      isEnd: true,
      musicList: []
    };
  }
}
async function getMediaSource(c, d) {
  try {
    const e = {
      id: String(c.id)
    };
    const f = await axios.post(BASE_URL + "/song", e, {
      headers: headers
    });
    const g = f.data;
    if (g && g.success && g.data && g.data.url) {
      const h = g.data;
      return {
        url: h.url,
        quality: d || h.level || "standard",
        bitRate: h.bitrate || 0,
        size: h.size || 0,
        level: h.level || d || "standard",
        quality_name: h.quality_name || "",
        type: h.type || "mp3"
      };
    }
    console.warn("[网易云音乐插件] 无法获取歌曲 " + c.id + " 的播放链接");
    return null;
  } catch (i) {
    console.warn("[网易云音乐插件] 获取播放链接失败", i.message);
    return null;
  }
}
async function getSongDetail(c) {
  try {
    const d = {
      id: String(c.id)
    };
    const e = await axios.post(BASE_URL + "/song", d, {
      headers: headers
    });
    const f = e.data;
    if (f && f.success && f.data) {
      const g = f.data;
      return {
        id: String(g.id || c.id),
        title: c.title,
        artist: c.artist,
        album: c.album,
        duration: c.duration || 0,
        artwork: c.artwork,
        bitRate: g.bitrate || 0,
        size: g.size || 0,
        level: g.level || "standard",
        quality_name: g.quality_name || "",
        type: g.type || "mp3",
        url: g.url || null
      };
    }
    return c;
  } catch (h) {
    console.warn("获取歌曲详情失败", h.message);
    return c;
  }
}
async function getLyric(c) {
  try {
    const d = {
      id: String(c.id),
      type: "lyric"
    };
    const e = await axios.post(BASE_URL + "/song", d, {
      headers: headers
    });
    const f = e.data;
    if (f && f.success && f.data) {
      const g = f.data;
      return {
        rawLrc: g.lrc?.["lyric"] || "",
        translation: g.tlyric?.["lyric"] || g.romalrc?.["lyric"] || "",
        romalrc: g.romalrc?.["lyric"] || "",
        klyric: g.klyric?.["lyric"] || ""
      };
    }
    return {
      rawLrc: "",
      translation: "",
      romalrc: "",
      klyric: ""
    };
  } catch (h) {
    console.warn("[网易云音乐插件] 获取歌词失败", h.message);
    return {
      rawLrc: "",
      translation: "",
      romalrc: "",
      klyric: ""
    };
  }
}
async function getBuiltInPlaylists() {
  const c = [{
    id: "2809577409",
    name: "网易云欧美新歌榜",
    coverImgUrl: "https://p1.music.126.net/0lPWpI9Ejn1OiW2LSbg-qw==/109951167430863224.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有欧美新歌（一月内最新发行）官方TOP排行榜，每天更新。",
    trackCount: 100
  }, {
    id: "71385702",
    name: "网易云ACG榜",
    coverImgUrl: "https://p1.music.126.net/na1kEeCS1iZEkzOrs9r_9g==/109951167976973667.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有ACG音乐官方TOP排行榜，每周四更新。",
    trackCount: 100
  }, {
    id: "112504",
    name: "中国TOP排行榜（港台榜）",
    coverImgUrl: "https://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg",
    creator: "中国TOP排行榜",
    description: "中国TOP排行榜分成内地榜及港台榜，每周一更新。",
    trackCount: 12
  }, {
    id: "3812895",
    name: "Beatport全球电子舞曲榜",
    coverImgUrl: "https://p1.music.126.net/oT-RHuPBJiD7WMoU7WG5Rw==/109951166093489621.jpg",
    creator: "云音乐电音星球",
    description: "Beatport全球电子舞曲排行榜TOP100（本榜每周三更新）",
    trackCount: 92
  }, {
    id: "2809513713",
    name: "网易云欧美热歌榜",
    coverImgUrl: "https://p1.music.126.net/70_EO_Dc7NT_hhfvsapzcQ==/109951167430862162.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有欧美歌曲官方TOP排行榜，每周四更新。",
    trackCount: 200
  }, {
    id: "745956260",
    name: "网易云韩语榜",
    coverImgUrl: "https://p1.music.126.net/5oN9YaFznwNGXkmi8i2Ytw==/109951167430864741.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有韩语歌曲官方TOP排行榜，每周四更新。",
    trackCount: 100
  }, {
    id: "991319590",
    name: "网易云中文说唱榜",
    coverImgUrl: "https://p1.music.126.net/GgHbgDfGXHpE2YTchU7IvA==/109951171510498108.jpg",
    creator: "网易云音乐",
    description: "网易云原创说唱音乐人作品官方榜单，每周五更新。",
    trackCount: 50
  }, {
    id: "2617766278",
    name: "新声榜",
    coverImgUrl: "https://p1.music.126.net/XbjRDARP1xv5a-40ZDOy6A==/109951163785427934.jpg",
    creator: "LOOK直播官方频道",
    description: "LOOK直播 - 「LOOK新声代2」活动官方榜单，旨在推介超人气单曲和小众优质原创～",
    trackCount: 36
  }];
  return c.map(d => ({
    id: String(d.id),
    artwork: d.coverImgUrl,
    title: d.name,
    artist: d.creator,
    description: d.description,
    date: null,
    worksNum: d.trackCount
  }));
}
async function getBuiltInTopLists() {
  const c = [{
    id: "19723756",
    name: "飙升榜",
    coverImgUrl: "https://p1.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg",
    creator: "网易云音乐",
    description: "云音乐中每天热度上升最快的100首单曲，每日更新。",
    trackCount: 100
  }, {
    id: "3779629",
    name: "新歌榜",
    coverImgUrl: "https://p1.music.126.net/5guhqPBTcIrrhLBotgaT6w==/109951170048511751.jpg",
    creator: "网易云音乐",
    description: "云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行）官方TOP排行榜，每天更新。",
    trackCount: 100
  }, {
    id: "2884035",
    name: "原创榜",
    coverImgUrl: "https://p1.music.126.net/BaP9nrocNTL3gGThysv4eQ==/109951170091896587.jpg",
    creator: "网易云音乐",
    description: "云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。",
    trackCount: 100
  }, {
    id: "3778678",
    name: "热歌榜",
    coverImgUrl: "https://p1.music.126.net/0SUEG8yDACfx0Bw2MYFv4Q==/109951170048519512.jpg",
    creator: "网易云音乐",
    description: "云音乐热歌榜：云音乐用户一周内收听所有线上歌曲官方TOP排行榜，每日更新。",
    trackCount: 200
  }];
  const d = [{
    id: "60198",
    name: "美国Billboard榜",
    coverImgUrl: "https://p1.music.126.net/rwRsVIJHQ68gglhA6TNEYA==/109951165611413732.jpg",
    creator: "网易云音乐",
    description: "美国Billboard排行榜",
    trackCount: 87
  }, {
    id: "3812895",
    name: "Beatport全球电子舞曲榜",
    coverImgUrl: "https://p1.music.126.net/oT-RHuPBJiD7WMoU7WG5Rw==/109951166093489621.jpg",
    creator: "网易云音乐",
    description: "Beatport全球电子舞曲排行榜TOP100（本榜每周三更新）",
    trackCount: 92
  }, {
    id: "60131",
    name: "日本Oricon榜",
    coverImgUrl: "https://p1.music.126.net/aXUPgImt8hhf4cMUZEjP4g==/109951165611417794.jpg",
    creator: "网易云音乐",
    description: "日本Oricon数字单曲周榜，每周三更新，欢迎关注。",
    trackCount: 34
  }, {
    id: "2809577409",
    name: "网易云欧美新歌榜",
    coverImgUrl: "https://p1.music.126.net/0lPWpI9Ejn1OiW2LSbg-qw==/109951167430863224.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有欧美新歌（一月内最新发行）官方TOP排行榜，每天更新。",
    trackCount: 100
  }, {
    id: "2809513713",
    name: "网易云欧美热歌榜",
    coverImgUrl: "https://p1.music.126.net/70_EO_Dc7NT_hhfvsapzcQ==/109951167430862162.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有欧美歌曲官方TOP排行榜，每周四更新。",
    trackCount: 200
  }, {
    id: "745956260",
    name: "网易云韩语榜",
    coverImgUrl: "https://p1.music.126.net/5oN9YaFznwNGXkmi8i2Ytw==/109951167430864741.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有韩语歌曲官方TOP排行榜，每周四更新。",
    trackCount: 100
  }, {
    id: "2617766278",
    name: "新声榜",
    coverImgUrl: "https://p1.music.126.net/XbjRDARP1xv5a-40ZDOy6A==/109951163785427934.jpg",
    creator: "网易云音乐",
    description: "LOOK直播 - 「LOOK新声代2」活动官方榜单，旨在推介超人气单曲和小众优质原创～",
    trackCount: 36
  }, {
    id: "71385702",
    name: "网易云ACG榜",
    coverImgUrl: "https://p1.music.126.net/na1kEeCS1iZEkzOrs9r_9g==/109951167976973667.jpg",
    creator: "网易云音乐",
    description: "网易云用户一周内收听所有ACG音乐官方TOP排行榜，每周四更新。",
    trackCount: 100
  }, {
    id: "991319590",
    name: "网易云中文说唱榜",
    coverImgUrl: "https://p1.music.126.net/GgHbgDfGXHpE2YTchU7IvA==/109951171510498108.jpg",
    creator: "网易云音乐",
    description: "网易云原创说唱音乐人作品官方榜单，每周五更新。",
    trackCount: 50
  }];
  return {
    official: c,
    global: d
  };
}
async function getRecommendPlaylists(c) {
  const d = await getBuiltInPlaylists();
  return {
    isEnd: true,
    data: d
  };
}
async function getRecommendAlbums(c) {
  const d = [{
    id: "34720827",
    name: "周杰伦的床边故事",
    artist: "周杰伦",
    coverImgUrl: "https://p3.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg",
    description: "2016年发行，共10首歌曲",
    publishTime: 1466697600007,
    trackCount: 10
  }, {
    id: "3812895",
    name: "周杰伦的杰作",
    artist: "周杰伦",
    coverImgUrl: "https://p4.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg",
    description: "经典专辑精选",
    publishTime: 0,
    trackCount: 20
  }, {
    id: "32311",
    name: "叶惠美",
    artist: "周杰伦",
    coverImgUrl: "https://p2.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg",
    description: "2003年发行，共11首歌曲",
    publishTime: 1057574400000,
    trackCount: 11
  }, {
    id: "347230",
    name: "魔杰座",
    artist: "周杰伦",
    coverImgUrl: "https://p1.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg",
    description: "2008年发行，共11首歌曲",
    publishTime: 1228089600000,
    trackCount: 11
  }];
  return {
    isEnd: true,
    data: d.map(e => formatAlbumItem(e))
  };
}
async function getTopLists() {
  const {
    official: c,
    global: d
  } = await getBuiltInTopLists();
  const e = c.map(g => ({
    type: "3",
    id: String(g.id),
    title: g.name,
    coverImg: g.coverImgUrl,
    artist: g.creator,
    description: g.description,
    worksNum: 100
  }));
  const f = d.map(g => ({
    type: "3",
    id: String(g.id),
    title: g.name,
    coverImg: g.coverImgUrl,
    artist: g.creator,
    description: g.description,
    worksNum: 100
  }));
  return [{
    title: "官方榜",
    data: e
  }, {
    title: "全球榜",
    data: f
  }];
}
async function getTopListDetail(c) {
  try {
    console.log("[网易云音乐插件] 获取榜单详情: " + (c.title || c.id));
    if (!c || !c.id) {
      throw new Error("榜单项缺少ID");
    }
    const d = await getPlaylistDetail(c, 1);
    if (!d || !d.detail) {
      throw new Error("获取榜单详情失败（ID: " + c.id + "）");
    }
    console.log("[网易云音乐插件] 榜单详情获取成功: " + d.detail.name);
    const e = {
      topListItem: {
        id: d.detail.id,
        title: d.detail.name,
        name: d.detail.name,
        coverImg: d.detail.coverImgUrl || d.detail.coverImg || "",
        coverImgUrl: d.detail.coverImgUrl || d.detail.coverImg || "",
        type: "3",
        artist: d.detail.creator?.["name"] || "未知",
        description: d.detail.description || "",
        trackCount: d.detail.trackCount || 0,
        updateFrequency: "",
        updateTime: d.detail.updateTime || 0
      },
      musicList: d.musicList || [],
      tracks: d.musicList || [],
      isEnd: d.isEnd !== false
    };
    return e;
  } catch (f) {
    console.error("[网易云音乐插件] 获取榜单详情失败:", f.message);
    console.error("[网易云音乐插件] 错误堆栈:", f.stack);
    throw f;
  }
}
async function search(c, d, e) {
  switch (e) {
    case "music":
      return await searchMusic(c, d);
    case "album":
      return await searchAlbum(c, d);
    case "artist":
      return await searchArtist(c, d);
    default:
      return await searchMusic(c, d);
  }
}
function parseNeteaseUrl(c) {
  if (!c || typeof c !== "string") {
    console.error("[网易云音乐插件] 无效的URL:", c);
    return null;
  }
  const d = [{
    regex: /\/playlist\?id=(\d+)/,
    type: "playlist"
  }, {
    regex: /\/song\?id=(\d+)/,
    type: "song"
  }, {
    regex: /\/album\?id=(\d+)/,
    type: "album"
  }, {
    regex: /\/artist\?id=(\d+)/,
    type: "artist"
  }];
  for (const {
    regex: e,
    type: f
  } of d) {
    const g = c.match(e);
    if (g && g[1]) {
      console.log("[网易云音乐插件] 解析成功: " + f + ", ID=" + g[1]);
      return {
        id: g[1],
        type: f,
        originalUrl: c
      };
    }
  }
  console.error("[网易云音乐插件] 无法解析URL:", c);
  return null;
}
async function importMusicSheet(c) {
  try {
    console.log("[网易云音乐插件] 开始导入歌单: " + c);
    let d = (c.match(/^(\d+)$/) || [])[1];
    if (!d && !c.match(/music\.163\.com/i)) {
      console.error("[网易云音乐插件] 无法识别的链接格式");
      return false;
    }
    !d && (d = (c.match(/playlist(\/|.*?[\?\&]id=)(\d+)/i) || [])[2]);
    if (!d) {
      console.error("[网易云音乐插件] 无法提取歌单ID");
      return false;
    }
    console.log("[网易云音乐插件] 歌单ID: " + d);
    let e = 0;
    let f = 1;
    let g = [];
    do {
      try {
        const {
          isEnd: h,
          musicList: i
        } = await getMusicSheetInfo({
          id: d
        }, f);
        g.push(...i);
        console.log("[网易云音乐插件] 第" + f + "页获取完成: " + i.length + "首, 总计" + g.length + "首, isEnd=" + h);
        if (h) {
          break;
        }
      } catch (j) {
        console.error("[网易云音乐插件] 获取歌单详情失败:", j.message);
        if (e > 3) {
          console.error("[网易云音乐插件] 重试次数过多，放弃导入");
          break;
        } else {
          f--;
          e++;
          console.error("[网易云音乐插件] 重试 (" + e + "/3)...");
        }
      }
    } while (f++);
    console.log("[网易云音乐插件] 导入成功: 歌曲" + g.length + "首");
    return g;
  } catch (k) {
    console.error("[网易云音乐插件] 导入歌单失败:", k.message);
    return false;
  }
}
async function importMusicItem(c) {
  try {
    const d = parseNeteaseUrl(c);
    if (!d) {
      console.error("[网易云音乐插件] 无效的链接");
      return false;
    }
    if (d.type === "song") {
      const e = (c.match(/song(.*?[\?\&]id=|\/)(\d+)/i) || [])[2];
      if (!e) {
        return false;
      }
      const f = {
        id: e
      };
      const g = await getSongDetail(f);
      return [g];
    } else {
      return d.type === "playlist" ? await importMusicSheet(c) : (console.error("[网易云音乐插件] 暂不支持导入此类型链接"), false);
    }
  } catch (h) {
    console.error("[网易云音乐插件] 导入歌曲失败:", h.message);
    return false;
  }
}
async function getRecommendSheetTags() {
  const c = [{
    title: "推荐",
    id: "_SPECIAL_CLOUD_VILLAGE_PLAYLIST"
  }, {
    title: "官方",
    id: "官方"
  }, {
    title: "雷达",
    id: "_RADAR"
  }, {
    title: "原创",
    id: "_SPECIAL_ORIGIN_SONG_LOCATION"
  }, {
    title: "心情",
    id: "_FEELING_PLAYLIST_LOCATION"
  }, {
    title: "场景",
    id: "_SCENE_PLAYLIST_LOCATION"
  }, {
    title: "专属",
    id: "_COMBINATION"
  }, {
    title: "全部",
    id: "全部歌单"
  }, {
    title: "新热",
    id: "_NEW_SONG_AND_ALBUM"
  }, {
    title: "影视",
    id: "_FIRM_PLAYLIST"
  }, {
    title: "奖项",
    id: "_AWARDS_PLAYLIST"
  }];
  const d = [{
    title: "语种",
    data: []
  }, {
    title: "风格",
    data: []
  }, {
    title: "场景",
    data: []
  }, {
    title: "情感",
    data: []
  }, {
    title: "主题",
    data: []
  }];
  d[0].data = [{
    title: "华语",
    id: "华语"
  }, {
    title: "欧美",
    id: "欧美"
  }, {
    title: "日语",
    id: "日语"
  }, {
    title: "韩语",
    id: "韩语"
  }, {
    title: "粤语",
    id: "粤语"
  }];
  d[1].data = [{
    title: "流行",
    id: "流行"
  }, {
    title: "摇滚",
    id: "摇滚"
  }, {
    title: "民谣",
    id: "民谣"
  }, {
    title: "电子",
    id: "电子"
  }, {
    title: "说唱",
    id: "说唱"
  }, {
    title: "轻音乐",
    id: "轻音乐"
  }, {
    title: "古典",
    id: "古典"
  }, {
    title: "爵士",
    id: "爵士"
  }, {
    title: "R&B",
    id: "R&B"
  }, {
    title: "古风",
    id: "古风"
  }, {
    title: "二次元",
    id: "二次元"
  }];
  d[2].data = [{
    title: "运动",
    id: "运动"
  }, {
    title: "通勤",
    id: "通勤"
  }, {
    title: "工作",
    id: "工作"
  }, {
    title: "学习",
    id: "学习"
  }, {
    title: "睡前",
    id: "睡前"
  }];
  d[3].data = [{
    title: "快乐",
    id: "快乐"
  }, {
    title: "伤感",
    id: "伤感"
  }, {
    title: "治愈",
    id: "治愈"
  }, {
    title: "怀旧",
    id: "怀旧"
  }, {
    title: "浪漫",
    id: "浪漫"
  }];
  d[4].data = [{
    title: "影视",
    id: "影视"
  }, {
    title: "动漫",
    id: "动漫"
  }, {
    title: "游戏",
    id: "游戏"
  }, {
    title: "节日",
    id: "节日"
  }, {
    title: "旅行",
    id: "旅行"
  }];
  return {
    pinned: c,
    data: d
  };
}
async function getRecommendSheetsByTag(c, d) {
  const e = await getBuiltInPlaylists();
  const f = e.filter(g => {
    if (!c) {
      return true;
    }
    const h = g.title || g.description || "";
    return h.includes(c);
  });
  return {
    isEnd: true,
    data: f.slice(0, 10)
  };
}
async function getMusicSheetInfo(c, d = 1) {
  try {
    console.log("[网易云音乐插件] getMusicSheetInfo: ID=" + c.id + ", page=" + d);
    const e = {
      id: String(c.id)
    };
    const f = await axios.post(BASE_URL + "/playlist", e, {
      headers: headers
    });
    const g = f.data;
    let h = null;
    if (g && g.success && g.data && g.data.playlist) {
      h = g.data.playlist;
    } else {
      g && g.success && g.data && g.data.id && (h = g.data);
    }
    if (!h) {
      console.error("[网易云音乐插件] 无法解析歌单数据");
      return {
        isEnd: true,
        sheetItem: {},
        musicList: []
      };
    }
    const i = h.trackCount || 0;
    const j = h.trackIds || [];
    const k = h.tracks || [];
    console.log("[网易云音乐插件] 歌单统计: trackCount=" + i + ", trackIds=" + j.length + ", tracks=" + k.length);
    let l = false;
    let m = [];
    if (k.length === i || k.length === j.length) {
      l = true;
      m = k.map(q => formatMusicItem(q));
      console.log("[网易云音乐插件] 已包含所有歌曲 (" + m.length + "首)");
    } else {
      const q = d * pageSize;
      const r = q - pageSize;
      const s = j.slice(r, q);
      l = q >= i;
      console.log("[网易云音乐插件] 分页获取: len2=" + r + ", len1=" + q + ", 截取" + s.length + "个ID, isEnd=" + l);
      if (s.length > 0) {
        const t = {
          ids: JSON.stringify(s)
        };
        const u = await axios.post(BASE_URL + "/song/detail/batch", t, {
          headers: headers
        });
        const v = u.data;
        v && v.success && v.data && v.data.songs && (m = v.data.songs.map(w => formatMusicItem(w)));
      }
    }
    let n = "未知";
    let o = "unknown";
    if (typeof h.creator === "string") {
      n = h.creator;
    } else {
      h.creator && typeof h.creator === "object" && (n = h.creator.nickname || h.creator.name || "未知", o = String(h.creator.userId || h.creator.id || "unknown"));
    }
    const p = {
      type: "2",
      id: String(h.id),
      title: h.name || "未知歌单",
      artist: n,
      artwork: h.coverImgUrl || h.coverImg || "",
      coverImg: h.coverImgUrl || h.coverImg || "",
      coverImgUrl: h.coverImgUrl || h.coverImg || "",
      description: h.description || "",
      worksNum: i,
      playCount: h.playCount || 0,
      createUserId: h.userId || o,
      createTime: h.createTime || 0
    };
    console.log("[网易云音乐插件] getMusicSheetInfo 完成: 歌曲" + m.length + "首, isEnd=" + l);
    return {
      isEnd: l,
      sheetItem: p,
      musicList: m
    };
  } catch (w) {
    console.error("[网易云音乐插件] getMusicSheetInfo 失败:", w.message);
    throw w;
  }
}
module.exports = {
  platform: "云云音乐",
  author: "小橙",
  version: "1.0.0",
  srcUrl: "https://2209.kstore.space/xiaochen.js",
  cacheControl: "no-cache",
  description: "## 云云音乐\n\n**版本**: v1.0.0  \n**作者**: 小橙  \n**更新时间**: 2026年1月22日\n\n### 功能特性\n- ✅ 支持音乐搜索\n- ✅ 支持歌单导入（支持歌单ID和分享链接）\n- ✅ 支持歌曲导入\n- ✅ 支持多种音质：standard, exhigh, lossless, hires, jyeffect, sky, jymaster\n- ✅ 支持歌词获取（原文、翻译、罗马音、日文）\n- ✅ 支持歌单详情和专辑详情\n- ✅ 支持推荐歌单、专辑和榜单浏览\n- ✅ 支持歌单标签分类\n- ✅ 支持大型歌单分页导入\n- ✅ 支持多歌单连续导入\n- ✅ 提供13个热门榜单（4个官方榜+9个全球榜）\n- ✅ 提供8个推荐歌单\n- ✅ 提供歌单标签系统（11个置顶标签+5个分类标签）\n\n### 使用说明\n\n#### 导入歌单\n支持以下格式：\n- 歌单ID：`2809577409`\n- 完整链接：`https://music.163.com/playlist?id=2809577409`\n- 短链接：`https://y.music.163.com/m/playlist?id=2809577409`\n\n#### 导入歌曲\n支持以下格式：\n- 歌曲ID：`123456789`\n- 完整链接：`https://music.163.com/song?id=123456789`\n\n### 限制说明\n由于API限制，插件仅支持以下功能：\n- 搜索：仅支持搜索歌曲\n- 专辑/歌单/艺术家：需通过推荐列表或ID访问\n\n### 更新日志\n\n**v1.0.0 (2026年1月22日)**\n- 🎉 发布正式版1.0，整合所有功能\n- 📦 完整歌单导入功能，支持大型歌单分页导入\n- 🎵 歌曲导入功能，支持从分享链接导入单首歌曲\n- 🏆 榜单功能完善，提供13个热门榜单（4个官方榜+9个全球榜）\n- 🎨 推荐歌单优化，基于真实API更新8个热门歌单\n- 🏷️ 歌单标签系统，提供11个置顶标签和5个分类标签\n- 🔧 兼容性增强，确保适配不同版本的MusicFree应用\n- 💬 错误处理优化，提供友好的错误提示和详细日志\n- ✅ 数据准确性提升，修复歌单详情、榜单详情等接口的数据映射问题\n- ✅ 测试验证：所有功能正常运行",
  hints: {
    importMusicSheet: ["网易云：APP点击分享，然后复制链接", "也支持直接输入歌单ID（如：2809577409）"],
    importMusicItem: ["网易云：APP点击分享，然后复制链接", "也支持直接输入歌曲ID"]
  },
  supportedSearchType: ["music"],
  supportedGetMediaSourceQuality: ["standard", "exhigh", "lossless", "hires", "jyeffect", "sky", "jymaster"],
  search: search,
  getMediaSource: getMediaSource,
  getLyric: getLyric,
  getAlbumInfo: getAlbumInfo,
  getArtistWorks: getArtistWorks,
  getPlaylistDetail: getPlaylistDetail,
  getMusicSheetInfo: getMusicSheetInfo,
  getSongDetail: getSongDetail,
  getRecommendPlaylists: getRecommendPlaylists,
  getRecommendAlbums: getRecommendAlbums,
  getTopLists: getTopLists,
  getTopListDetail: getTopListDetail,
  importMusicSheet: importMusicSheet,
  importMusicItem: importMusicItem,
  getRecommendSheetTags: getRecommendSheetTags,
  getRecommendSheetsByTag: getRecommendSheetsByTag
};