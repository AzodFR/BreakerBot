const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.login(process.env.BOT_TOKEN)
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected')
})

bot.on('message', function(message){
    if (message.channel.id === 613684354421620766){
        message.react("👍")
        message.react("👎")
    
    }
    }




}






