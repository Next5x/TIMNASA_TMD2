const { cmd } = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' simulation message.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const steps = [
            '💻 *✧TIMNASA TMD2✧ HACKING SEQUENCE INITIATED...* 💻',
            '',
            '*Loading encryption bypass modules...* 🔐',
            '*Establishing secure connection to mainframe...* 🌐',
            '*Deploying rootkits...* 🛠️',
            '',
            '```[▓𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙷𝙰𝙲𝙺-𝚈𝙾𝚄▓                    ] 10%``` ⏳',
            '```[▓▓𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙷𝙰𝙲𝙺▓▓▓                ] 30%``` ⏳',
            '```[▓▓▓▓𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙷𝙰𝙲𝙺▓▓▓▓▓           ] 50%``` ⏳',
            '```[▓▓▓▓▓𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙷𝙰𝙲𝙺▓▓▓▓▓▓▓▓       ] 70%``` ⏳',
            '```[▓▓▓▓▓▓▓𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙷𝙰𝙲𝙺▓▓▓▓▓▓▓▓▓▓   ] 90%``` ⏳',
            '```[▓▓▓▓▓▓▓▓▓𝚃𝙸𝙼𝙽𝙰𝚂𝙰-𝙷𝙰𝙲𝙺▓▓▓▓▓▓▓▓▓▓▓] 100%``` ✅',
            '',
            '🔒 *System Breach Successful!* 🔓',
            '*Gaining access to server logs...* 🖥️',
            '*Extracting sensitive data...* 📂',
            '',
            '```[DATA CAPTURED: 3.2GB]``` 📡',
            '```[TRANSMISSION SECURED]``` 🔒',
            '',
            '🚀 *Operation Complete!*',
            '',
            '⚠️ _This is a simulated hacking activity for entertainment purposes._',
            '⚠️ _Remember: Ethical hacking ensures safety._',
            '',
            '> *✧TIMNASA TMD2✧: HACKING YOUR DIVAICE SIMULATION COMPLETE* ☣'
        ];

        for (const step of steps) {
            await conn.sendMessage(from, { text: step }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1200)); // Adjust delay for realism
        }
    } catch (error) {
        console.error(error);
        reply(`❌ *Error:* ${error.message}`);
    }
});
