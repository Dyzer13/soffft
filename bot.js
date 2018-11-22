const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "M";



client.on("message", message => { 
  if (message.content.startsWith(prefix + "bc")) { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return; 
  let args = message.content.split(" ").slice(1); 
   var argresult = args.join(' '); 
      message.guild.members.filter
      (m => m.presence.status !== 'all')
             .forEach(m => { 
         m.send(`${argresult}\n ${m}`);}) 
    message.channel.send(`\`${message.guild.members.filter(m => 
                                                           
      m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
    
    message.delete(); 
  }; 
}); 




client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@461766920400535552> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: ???? ??? ???????');
        client.user.setStatus(argresult);


    }

  });


client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
if(!message.author.id === '500019474494128139') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN);
