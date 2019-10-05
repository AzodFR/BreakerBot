const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    
    if (message.channel.id === "619577505606664193"){
        
         message.embeds.forEach((embed) => {
          nms = embed.author.name
          nmss = nms.split(" ");
          console.log(nmss[0]); 
          console.log(nmss[1]); 
    });
        
    

        }   
    else if (message.channel.id === "613684354421620766"){
        message.react("👎");
        message.react("👍");
        
        }
        })



bot.login(process.env.BOT_TOKEN)
