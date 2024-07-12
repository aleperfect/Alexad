const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*⇢Mensaje:* ${pesan}`;
  let teks = `*_𝗚𝗛𝗢𝗦𝗧 𝗕𝗢𝗧_ 🤍*\n\n ${oi}\n\n ⇢𝗘𝘁𝗶𝗾𝘂𝗲𝘁𝗮:\n`;
  for (const mem of participants) {
    teks += `👻･ @${mem.id.split('@')[0]}\n`;
  }
  teks += `— _𝗚𝗛𝗢𝗦𝗧 𝗕𝗢𝗧_\n\n*🏴‍☠️*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>', 'ghost <mesaje>'];
handler.tags = ['group'];
handler.command = /^(todos|ghost)$/i;
handler.admin = true;
handler.group = true;
export default handler;