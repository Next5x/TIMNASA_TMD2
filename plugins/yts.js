const {
  cmd
} = require('../command');
const yts = require('yt-search');
const path = require('path');
const axios = require("axios");
const fs = require('fs');
cmd({
  'pattern': 'play',
  'react': '🎵',
  'desc': "download audio from youtube by searching for keywords.",
  'category': "music",
  'use': ".play <song name or keywords>",
  'filename': __filename
}, async (_0x1a7c38, _0x4dc8df, _0x1161c6, {
  from: _0x18a278,
  args: _0x28a0ca,
  reply: _0x2ad359
}) => {
  try {
    const _0x34a504 = _0x28a0ca.join(" ");
    if (!_0x34a504) {
      return _0x2ad359("*please provide a song name or keywords to search for.*");
    }
    _0x2ad359("*🎧 fredie is searching for the song...*");
    const _0x1774c9 = await yts(_0x34a504);
    if (!_0x1774c9.videos || _0x1774c9.videos.length === 0x0) {
      return _0x2ad359("❌ no results found for \"" + _0x34a504 + "\".");
    }
    const _0x3ebbc5 = _0x1774c9.videos[0x0];
    const _0x3e49f5 = _0x3ebbc5.url;
    const _0x5d9b22 = "https://api.davidcyriltech.my.id/download/ytmp3?url=" + _0x3e49f5;
    const _0xd9d42e = await axios.get(_0x5d9b22);
    if (!_0xd9d42e.data.success) {
      return _0x2ad359("❌ failed to fetch audio for \"" + _0x34a504 + "\".");
    }
    const {
      title: _0x4355fb,
      download_url: _0x4f4bcf
    } = _0xd9d42e.data.result;
    await _0x1a7c38.sendmessage(_0x18a278, {
      'audio': {
        'url': _0x4f4bcf
      },
      'mimetype': "audio/mp4",
      'ptt': false
    }, {
      'quoted': _0x4dc8df
    });
  } catch (_0x29bd8d) {
    console.error(_0x29bd8d);
    _0x2ad359("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': "song",
  'react': '🎵',
  'desc': "download audio from youtube by searching for keywords.",
  'category': 'music',
  'use': ".song <song name or keywords>",
  'filename': __filename
}, async (_0x25a44c, _0x57d711, _0x4439e2, {
  from: _0x3132bb,
  args: _0x46b0fa,
  reply: _0x395436
}) => {
  try {
    const _0x261c6e = _0x46b0fa.join(" ");
    if (!_0x261c6e) {
      return _0x395436("*please provide a song name or keywords to search for.*");
    }
    _0x395436("*🎧fredie is searching for the song...*");
    const _0x5cc50d = await yts(_0x261c6e);
    if (!_0x5cc50d.videos || _0x5cc50d.videos.length === 0x0) {
      return _0x395436("❌ no results found for \"" + _0x261c6e + "\".");
    }
    const _0x51df35 = _0x5cc50d.videos[0x0];
    const _0x4ae6d3 = _0x51df35.url;
    const _0x2de6e2 = 'https://api.davidcyriltech.my.id/youtube/mp3?url=' + _0x4ae6d3;
    const _0x4c747b = await axios.get(_0x2de6e2);
    if (!_0x4c747b.data.success) {
      return _0x395436("❌ failed to fetch audio for \"" + _0x261c6e + "\".");
    }
    const {
      title: _0xf41539,
      downloadurl: _0x533b57
    } = _0x4c747b.data.result;
    await _0x25a44c.sendmessage(_0x3132bb, {
      'audio': {
        'url': _0x533b57
      },
      'mimetype': 'audio/mp4',
      'ptt': false
    }, {
      'quoted': _0x57d711
    });
  } catch (_0x456fb1) {
    console.error(_0x456fb1);
    _0x395436("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'video2',
  'react': '🎬',
  'desc': "download video from youtube by searching for keywords.",
  'category': "media",
  'use': ".video <keywords>",
  'filename': __filename
}, async (_0x24c315, _0x3a6d67, _0x1fe974, {
  from: _0x767c92,
  args: _0x55bbc3,
  reply: _0x5b120e
}) => {
  try {
    const _0x4d3a95 = _0x55bbc3.join(" ");
    if (!_0x4d3a95) {
      return _0x5b120e("*please provide a video title or keywords to search for.*");
    }
    _0x5b120e("*🎬 searching for the video...*");
    const _0x2110e1 = await yts(_0x4d3a95);
    if (!_0x2110e1.videos || _0x2110e1.videos.length === 0x0) {
      return _0x5b120e("❌ no results found for \"" + _0x4d3a95 + "\".");
    }
    const _0x4ed4c1 = _0x2110e1.videos[0x0];
    const _0x2ef690 = _0x4ed4c1.url;
    const _0x23109c = "https://api.davidcyriltech.my.id/download/ytmp4?url=" + _0x2ef690;
    const _0x567fa0 = await axios.get(_0x23109c);
    if (!_0x567fa0.data.success) {
      return _0x5b120e("❌ failed to fetch video for \"" + _0x4d3a95 + "\".");
    }
    const {
      title: _0x390c02,
      download_url: _0x519f84
    } = _0x567fa0.data.result;
    await _0x24c315.sendmessage(_0x767c92, {
      'video': {
        'url': _0x519f84
      },
      'mimetype': 'video/mp4',
      'caption': _0x390c02
    }, {
      'quoted': _0x3a6d67
    });
  } catch (_0x5e8828) {
    console.error(_0x5e8828);
    _0x5b120e("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': "apk2",
  'react': '📥',
  'desc': "download apk files for android apps.",
  'category': "tools",
  'use': ".apk <appname>",
  'filename': __filename
}, async (_0x49f470, _0xbcf4f4, _0x5f1fab, {
  from: _0x56f751,
  args: _0x542e57,
  reply: _0x19c997
}) => {
  try {
    const _0x2b8ead = _0x542e57.join(" ");
    if (!_0x2b8ead) {
      return _0x19c997("*please provide the name of the app to download.*");
    }
    _0x19c997("*🔍 searching for apk of \"" + _0x2b8ead + "\"...*");
    const _0x44f924 = "https://api.giftedtech.web.id/api/download/apkdl?apikey=gifted&appname=" + encodeuricomponent(_0x2b8ead);
    const _0x326611 = await axios.get(_0x44f924);
    if (!_0x326611.data.success) {
      return _0x19c997("❌ failed to fetch apk for \"" + _0x2b8ead + "\".");
    }
    const {
      appname: _0x2a558c,
      appicon: _0x225d73,
      developer: _0x190ec8,
      download_url: _0x7beebe,
      mimetype: _0x4b16b7
    } = _0x326611.data.result;
    const _0xe90ffe = path.resolve(__dirname, _0x2a558c + ".apk");
    const _0x8de27 = await axios({
      'url': _0x7beebe,
      'method': "get",
      'responsetype': 'stream'
    });
    const _0x137d03 = fs.createwritestream(_0xe90ffe);
    _0x8de27.data.pipe(_0x137d03);
    await new promise((_0x5c8698, _0x1477d4) => {
      _0x137d03.on("finish", _0x5c8698);
      _0x137d03.on("error", _0x1477d4);
    });
    await _0x49f470.sendmessage(_0x56f751, {
      'document': {
        'url': _0xe90ffe
      },
      'mimetype': _0x4b16b7,
      'filename': _0x2a558c + '.apk',
      'caption': "*📱 app name:* " + _0x2a558c + "\n*👨‍💻 developer:* " + _0x190ec8 + "\n*🔗 downloaded via jawad techx 💜*",
      'jpegthumbnail': _0x225d73 ? await axios({
        'url': _0x225d73,
        'responsetype': "arraybuffer"
      }).then(_0x2b695b => _0x2b695b.data)["catch"](() => null) : null,
      'contextinfo': {
        'mentionedjid': [_0xbcf4f4.sender],
        'forwardingscore': 0x3e7,
        'isforwarded': true,
        'forwardednewslettermessageinfo': {
          'newsletterjid': "120363354023106228@newsletter",
          'newslettername': 'jawadtechx',
          'servermessageid': 0x8f
        }
      }
    }, {
      'quoted': _0xbcf4f4
    });
    fs.unlinksync(_0xe90ffe);
  } catch (_0x2976a9) {
    console.error(_0x2976a9);
    _0x19c997("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': "play6",
  'react': '🎵',
  'desc': "download mp3 audio from youtube by searching for song names.",
  'category': "music",
  'use': ".play7 <song name>",
  'filename': __filename
}, async (_0xbdeed3, _0x1a1f32, _0x3f48d8, {
  from: _0x1f7d88,
  args: _0x4a1b3c,
  reply: _0x14fab0
}) => {
  try {
    const _0x3cf9fb = _0x4a1b3c.join(" ");
    if (!_0x3cf9fb) {
      return _0x14fab0("*please provide a song name to search for.*");
    }
    _0x14fab0("*🎧 searching for the song...*");
    const _0x3698b5 = await yts(_0x3cf9fb);
    if (!_0x3698b5.videos || _0x3698b5.videos.length === 0x0) {
      return _0x14fab0("❌ no results found for \"" + _0x3cf9fb + "\".");
    }
    const _0x1f216b = _0x3698b5.videos[0x0];
    const _0x3b2f99 = _0x1f216b.url;
    const _0xf8933d = "https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=" + encodeuricomponent(_0x3b2f99);
    const _0x5c5e2d = await axios.get(_0xf8933d);
    if (!_0x5c5e2d.data.success) {
      return _0x14fab0("❌ failed to fetch audio for \"" + _0x3cf9fb + "\".");
    }
    const {
      download_url: _0xb4c50c
    } = _0x5c5e2d.data.result;
    await _0xbdeed3.sendmessage(_0x1f7d88, {
      'audio': {
        'url': _0xb4c50c
      },
      'mimetype': "audio/mp4",
      'ptt': false
    }, {
      'quoted': _0x1a1f32
    });
  } catch (_0x334732) {
    console.error(_0x334732);
    _0x14fab0("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': "video5",
  'react': '🎥',
  'desc': "download mp4 video from youtube by searching for video names.",
  'category': 'video',
  'use': ".play8 <video name>",
  'filename': __filename
}, async (_0xd5951b, _0x3f889b, _0x489734, {
  from: _0x49ed9f,
  args: _0x18c4ef,
  reply: _0x2951d1
}) => {
  try {
    const _0x318e14 = _0x18c4ef.join(" ");
    if (!_0x318e14) {
      return _0x2951d1("*please provide a video name to search for.*");
    }
    _0x2951d1("*🎥 searching for the video...*");
    const _0x4c3b77 = await yts(_0x318e14);
    if (!_0x4c3b77.videos || _0x4c3b77.videos.length === 0x0) {
      return _0x2951d1("❌ no results found for \"" + _0x318e14 + "\".");
    }
    const _0x34bc2e = _0x4c3b77.videos[0x0];
    const _0x13d9a0 = _0x34bc2e.url;
    const _0x2d3aa0 = "https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=" + encodeuricomponent(_0x13d9a0);
    const _0x3fd014 = await axios.get(_0x2d3aa0);
    if (!_0x3fd014.data.success) {
      return _0x2951d1("❌ failed to fetch video for \"" + _0x318e14 + "\".");
    }
    const {
      download_url: _0x49d8b5
    } = _0x3fd014.data.result;
    await _0xd5951b.sendmessage(_0x49ed9f, {
      'video': {
        'url': _0x49d8b5
      },
      'mimetype': "video/mp4",
      'caption': _0x3fd014.data.result.title
    }, {
      'quoted': _0x3f889b
    });
  } catch (_0x3a4782) {
    console.error(_0x3a4782);
    _0x2951d1("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'fb2',
  'react': '🎬',
  'desc': "download video from facebook by url.",
  'category': "media",
  'use': ".facebookdl <facebook video url>",
  'filename': __filename
}, async (_0x2b5a01, _0x3008c7, _0x214e5b, {
  from: _0x329c2d,
  args: _0x304664,
  reply: _0x2351ed
}) => {
  try {
    const _0x1347bf = _0x304664[0x0];
    if (!_0x1347bf) {
      return _0x2351ed("*please provide a facebook video url.*");
    }
    _0x2351ed("*🎬 fetching video from facebook...*");
    const _0x14810b = "https://api.giftedtech.web.id/api/download/facebook?apikey=gifted&url=" + encodeuricomponent(_0x1347bf);
    const _0x4aef09 = await axios.get(_0x14810b);
    if (!_0x4aef09.data.success) {
      return _0x2351ed("❌ failed to fetch video from facebook.");
    }
    const {
      hd_video: _0x2a7e37,
      sd_video: _0x1c3db9,
      title: _0x4c9b63
    } = _0x4aef09.data.result;
    const _0x2fc4d0 = _0x2a7e37 || _0x1c3db9;
    await _0x2b5a01.sendmessage(_0x329c2d, {
      'video': {
        'url': _0x2fc4d0
      },
      'mimetype': "video/mp4",
      'caption': _0x4c9b63
    }, {
      'quoted': _0x3008c7
    });
  } catch (_0x444bb1) {
    console.error(_0x444bb1);
    _0x2351ed("❌ an error occurred while processing your request.");
  }
});
cmd({
  'pattern': 'tinyurl',
  'react': '🔗',
  'desc': "generate a tinyurl from a long url.",
  'category': 'tools',
  'use': ".tinyurl <long url>",
  'filename': __filename
}, async (_0x22909d, _0x314c8a, _0x2415c2, {
  from: _0x3c8bb9,
  args: _0x5c9f06,
  reply: _0x2f1cca
}) => {
  try {
    const _0x3eb356 = _0x5c9f06[0x0];
    if (!_0x3eb356) {
      return _0x2f1cca("*please provide a long url to shorten.*");
    }
    _0x2f1cca("*🔗 generating tinyurl...*");
    const _0x554213 = "https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=" + encodeuricomponent(_0x3eb356);
    const _0x5d082b = await axios.get(_0x554213);
    if (!_0x5d082b.data.success) {
      return _0x2f1cca("❌ failed to generate tinyurl.");
    }
    const {
      result: _0x4a4b00
    } = _0x5d082b.data;
    await _0x2f1cca("here's your tinyurl: " + _0x4a4b00);
  } catch (_0x3647e6) {
    console.error(_0x3647e6);
    _0x2f1cca("❌ an error occurred while processing your request.");
  }
}); 