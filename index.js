const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    msg = message.embeds
    var msgn = msg.split("name: '");
    var msgnn = msgn.split("'");
    if (message.channel.id === "619577505606664193"){
        
         console.log(msgnn[0]);
    

        }   
    else if (message.channel.id === "613684354421620766"){
        message.react("👎");
        message.react("👍");
        
        }
        })



bot.login(process.env.BOT_TOKEN)
