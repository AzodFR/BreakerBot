const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    console.log(message.channel.id);
    if (message.channel.id === "629054688851001384"){
        message.react("👍");
        message.react("👎");
        }
        })


bot.login(process.env.BOT_TOKEN)
