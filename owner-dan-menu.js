const fs = require('fs')

global.namabot = "ZeniBot"
global.namaowner = "KSRCLOUD"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6289653898291']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay
Dan yang lainnya.
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• !pay
• !list
• !addlist
• !updatelist
• !dellist
• !jeda
• !tambah
• !kurang
• !kali
• !bagi
• !setproses
• !changeproses
• !delsetproses
• !setdone
• !changedone
• !delsetdone
• !proses
• !done
• !welcome
• !goodbye
• !setwelcome
• !changewelcome
• !delsetwelcome
• !setleft
• !changeleft
• !delsetleft
• !antiwame
• !antilink
• !open
• !close
• !hidetag
\`\`\`

📝 *NOTE*: 
Jangan Spam BOT
`
}