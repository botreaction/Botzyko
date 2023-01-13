let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].level = Infinity
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUKSES CHEAT LEVEL*', 'status@broadcast')
}
handler.tags = ['owner', 'exp']
handler.help = ['cheatlevel']
handler.command = /^(cheatlevel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
