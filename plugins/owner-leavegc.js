const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*GoodBye To All I M Leaving This Group👋 I will miss you all*');
  await conn.groupLeave(id);
};
handler.command = /^left$/i;
handler.group = true;
handler.rowner = true;
export default handler;
