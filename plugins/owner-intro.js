const { Function, getBuffer } = require('../lib/')
const { generateWAMessage, proto } = require('@adiwajshing/baileys');
const image = 'https://i.imgur.com/BsyNXqH.jpeg' //MAIN IMAGE URL HERE
const logo = 'https://i.imgur.com/BsyNXqH.jpeg'

Function(
	{
		pattern: 'intro ?(.*)',
		fromMe: true,
		desc: 'Shows My Intro',
		type: 'misc',
	},   async (message, match) => {
        const jid = message.jid
        const number = message.client.user.jid
        const thumb = await getBuffer(image)
        const thumbnail = await getBuffer(logo)
        const options = {}
	options.contextInfo = {
		forwardingScore: 999, // change it to 999 for many times forwarded
		isForwarded: false,
	}
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        options.linkPreview = {
               renderLargerThumbnail: true,
               showAdAttribution: true,
               title: "iha",
               body: "ᴄʟɪᴄᴋ ʜᴇʀᴇ 🦋 !!",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "http://wa.me/254773216377?text=_៚ʜᴇʟʟᴏ+🪄_"
             }
        // ADDED */ TO REMOVE LINK PREVIEW TYPE
        options.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
			'contactMessage': {
				'displayName': `${message.pushName}`, //ADD `${message.client.user.name}` TO DISPLAY CLIENT USER NAME.
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${message.client.user.name},;;;\nFN:${message.client.user.name},\nitem1.TEL;waid=${number.split('@')[0]}:${number.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				'jpegThumbnail': thumbnail
			}
            }
        }
        
let messages = await generateWAMessage(message.jid, { text: `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
│ *Name      :* iha
│ *Place       :* digitalWorld
│ *Gender   :*  𝙼𝚊𝚕𝚎
│ *Age          :* 24
│ *Phone     :* wa.me/254773216377
│ *IG ID        :* iha
│ *Status     :* _
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`}, {quoted: message.quoted || ''})

await message.client.forwardMessage(message.jid, await proto.WebMessageInfo.fromObject(messages), options)

    }
);
