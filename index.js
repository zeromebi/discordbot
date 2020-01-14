const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjY0NzkxODc4OTk4Mjk0NTU5.XhcOeQ.lzuIld0HjwHuPZK7DXcIUnHHtmc';
client.on('ready', () => {
    console.log('ready...');
});
//Bot自身の発言を無視する呪い
client.on('message', message =>{
    if(message.author.bot){
        return;
   }
//↓ここに後述のコードをコピペする↓
   if (message.content === 'サイコロ') {
        let channel = message.channel;
        //console.log(channel);
        let author = message.author.username;
        let dice1 = Math.floor(Math.random() * 6);
        dice1 += 1;
        console.log(dice1);          ;
        message.reply(dice1)
            .then(message => console.log(`Sent message: ${dice1}`))
            .catch(console.error);
        return;
    }
    if (message.content.match(/discord.gg/)) {
        message.delete(100)
   }
//↑ここに後述のコードをコピペする↑
});
client.login(token);

