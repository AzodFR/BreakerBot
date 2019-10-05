const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    const list = bot.guilds.get("596754524392259584"); 
    if (message.channel.id === "619577505606664193"){
        
         message.embeds.forEach((embed) => {
          nms = embed.author.name
          nmss = nms.split(" ");
          console.log(nmss[0]); 
          console.log(nmss[1]); 
          list.members.forEach(member => {
              if(member.user.username === nmss[1]){
            console.log("OK! "+nmss[1]);
            
            }
             
          }); 
          
             
             
    });
        
    

        }   
    else if (message.channel.id === "613684354421620766"){
        message.react("👎");
        message.react("👍");
        
        }
        })



bot.login(process.env.BOT_TOKEN)
