let handler = async (m, { conn, usedPrefix, command}) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
    let pp = './Abhi.jpg'
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let lkr = `Hello. You are chatting with iha, what can I do for you?
    For save for save, save me I will save back
    Am a Software Developer and a Graphics Designer
    Lets talk!
    `  
    conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
    m.react('.')
    }
    handler.help = ['salamu ni bure']
    handler.tags = ['hi']
    handler.command = ['hi','Hi'] 
    
    export default handler
    