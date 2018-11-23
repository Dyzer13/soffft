const Discord = require("discord.js");
const client = new Discord.Client();
console.log('By KBOOOOOOOOSH-YT');

client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
if(!message.author.id === '515474180603641866') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.login(process.env.BOT_TOKEN);
