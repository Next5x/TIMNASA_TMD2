
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: "lyrics",
  alias: ["liri", "lyric"],
  react: "💜",
  desc: "Get song lyrics.",
  category: "music",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please provide a song title or artist name.");
    let data = await fetchJson(`https://api.giftedtech.web.id/api/search/lyrics?apikey=gifted&query=${q}`);
    if (!data.result) return reply("No lyrics found for that song.");
    return reply(data.result);
  } catch (e) {
    console.error(e);
    reply("An error occurred while fetching lyrics.");
  }
});
