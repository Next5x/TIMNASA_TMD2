const {
  cmd,
  commands
} = require('../command');
const yts = require("yt-search");
const axios = require("axios");
cmd({
  'pattern': "video2",
  'alias': ["ytvid2", "ytv2", "ytmp4", 'ytvideo2'],
  'react': '⏳',
  'desc': "Download videos from YouTube by searching for keywords.",
  'category': "video",
  'use': ".vidx <keywords>",
  'filename': __filename
}, async (_0x443755, _0x543ba8, _0xb49b84, {
  from: _0x33c56a,
  args: _0x145006,
  reply: _0x2710af
}) => {
  try {
    const _0x180808 = _0x145006.join(" ");
    if (!_0x180808) {
      return _0x2710af("*Please provide a video tital or url*");
    }
    _0x2710af("```© ✧TIMNASA TMD2✧ Gᴇɴᴇʀᴀᴛɪɴɢ Vɪᴅᴇᴏ Pʟᴇᴀsᴇ Wᴀɪᴛ...```");
    const _0x1c3fd5 = await yts(_0x180808);
    if (!_0x1c3fd5.videos || _0x1c3fd5.videos.length === 0x0) {
      return _0x2710af("❌ No results found for \"" + _0x180808 + "\".");
    }
    const _0x3e0ad8 = _0x1c3fd5.videos[0x0];
    const _0x898f76 = _0x3e0ad8.url;
    const _0x4200bd = "https://api.gifted.my.id/api/download/dlmp4?apikey=gifted&url=" + _0x898f76;
    const _0x487ed3 = await axios.get(_0x4200bd);
    if (!_0x487ed3.data.success) {
      return _0x2710af("❌ Failed to fetch video for \"" + _0x180808 + "\".");
    }
    const {
      download_url: _0xd424ba
    } = _0x487ed3.data.result;
    await _0x443755.sendMessage(_0x33c56a, {
      'video': {
        'url': _0xd424ba
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x543ba8
    });
  } catch (_0x4921e0) {
    console.error(_0x4921e0);
    _0x2710af("❌ An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "play2",
  'alias': ["yta2", "ytplay2"],
  'react': '⏳',
  'desc': "Download audio from YouTube by searching for keywords.",
  'category': "music",
  'use': ".playx <keywords>",
  'filename': __filename
}, async (_0x222018, _0x5bc6a4, _0x2b481b, {
  from: _0x35d246,
  args: _0x3a1931,
  reply: _0x31fd3f
}) => {
  try {
    const _0x2b4b83 = _0x3a1931.join(" ");
    if (!_0x2b4b83) {
      return _0x31fd3f("*Please Rhodvick an audio title or url*");
    }
    _0x31fd3f("```© ✧TIMNASA TMD2✧ Gᴇɴᴇʀᴀᴛɪɴɢ Sᴏɴɢ Pʟᴇᴀs Wᴀɪᴛ...```");
    const _0x116e0a = await yts(_0x2b4b83);
    if (!_0x116e0a.videos || _0x116e0a.videos.length === 0x0) {
      return _0x31fd3f("❌ No results found for \"" + _0x2b4b83 + "\".");
    }
    const _0x50d4d8 = _0x116e0a.videos[0x0];
    const _0x228b87 = _0x50d4d8.url;
    const _0xd4aee7 = "https://api.gifted.my.id/api/download/dlmp3?apikey=gifted&url=" + _0x228b87;
    const _0x4c55a0 = await axios.get(_0xd4aee7);
    if (!_0x4c55a0.data.success) {
      return _0x31fd3f("❌ Failed to fetch audio for \"" + _0x2b4b83 + "\".");
    }
    const {
      download_url: _0x95f653
    } = _0x4c55a0.data.result;
    await _0x222018.sendMessage(_0x35d246, {
      'audio': {
        'url': _0x95f653
      },
      'mimetype': 'audio/mp4',
      'ptt': false
    }, {
      'quoted': _0x5bc6a4
    });
  } catch (_0x40de03) {
    console.error(_0x40de03);
    _0x31fd3f("❌ An error occurred while processing your request.");
  }
});
