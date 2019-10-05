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
         /// console.log(nmss[0]); 
         /// console.log(nmss[1]); 
          list.members.forEach(member => {
              mbm = nmss[1]
              if(member.user.username === nmss[1]){
                 if (nmss[0] === "[A]"){
                     member.user.roles.add('619570647936401413');
                     console.log(nmss[1] +" est passé Aventurier sur discord");
                 }
                 else if (nmss[0] === "[S]"){
                     member.user.roles.add('619561591230300181');
                     console.log(nmss[1] +" est passé Survivant sur discord");
                 }
                 else if (nmss[0] === "[C]"){
                     member.user.roles.add('619681329881022485');
                     console.log(nmss[1] +" est passé Chevalier sur discord");
                 }
                 else if (nmss[0] === "[D]"){
                     member.user.roles.add('619681398126542868');
                     console.log(nmss[1] +" est passé Duc sur discord");
                 }
              
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
