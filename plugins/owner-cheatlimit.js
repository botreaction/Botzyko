let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].limit = Infinity
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUKSES CHEAT LIMIT*', 'status@broadcast')
}
handler.tags = ['owner']
handler.help = ['cheatlimit']
handler.command = /^(cheatlimit)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
