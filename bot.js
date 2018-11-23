const Discord = require("discord.js");
const client = new Discord.Client();
console.log('By KBOOOOOOOOSH-YT');
client.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
 
client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$bc-bot')){
    if(!message.author.id === '500019474494128139') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });



client.login(process.env.BOT_TOKEN);
