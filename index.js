const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
})

bot.on('message', function(message){

    if (channel.id === 613684354421620766){
        message.react("👍")
        message.react("👎")
    }
    }





}






bot.login(process.env.BOT_TOKEN)