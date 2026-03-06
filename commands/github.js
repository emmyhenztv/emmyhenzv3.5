async function githubCommand(sock, chatId) {
    const repoInfo = `*Vanta_M𝐝*

*Github:*
╭━━━❰⚡ *ᗰᗴTᗩ ᗰᗪ V1 IS HERE!* ⚡❱━━━╮  
┃  
┃ 🚀 *New Commands Unlocked!*  
┃ 🎮 Fun Menu  
┃ 📥 Download Menu  
┃ 👑 Owner Menu  
┃ 👥 Group Menu  
┃  
┃ 🔗 *Pair now & get FREE access to*  
┃ 💠 *500 Servers* – Limited slots!  
┃  
┃ 🤖 *Pair Using Any Server Below:*  
┃ ┗t.me/MetaMdv2_bot    
┃  
┃ ⏳ *Hurry before server is full!*  
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯
Follow Rules and enjoy ✍️`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363407204279285@newsletter',
                    newsletterName: 'ᗰᗴTᗩ ᗰᗪ',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 