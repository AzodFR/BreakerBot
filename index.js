const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.login(process.env.BOT_TOKEN)
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected')
})


   

