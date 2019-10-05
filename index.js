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
                     if (member.roles.find('name', 'Aventurier')){
                         console.log(nmss[1] +" est déjà Aventurier sur discord");
                     }
                     else{
                         let role = message.guild.roles.find('name', 'Aventurier')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Aventurier sur discord");
                     }
                 }
                 else if (nmss[0] === "[S]"){
                       if (member.roles.find('name', 'Survivant')){
                         console.log(nmss[1] +" est déjà Survivant sur discord");
                     }
                     else{
                         let role = message.guild.roles.find('name', 'Survivant')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Survivant sur discord");
                     }
                 }
                 else if (nmss[0] === "[C]"){
                       if (member.roles.find('name', 'Chevalier')){
                         console.log(nmss[1] +" est déjà Chevalier sur discord");
                     }
                     else{
                         let role = message.guild.roles.find('name', 'Chevalier')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Chevalier sur discord");
                     }
                 }
                 else if (nmss[0] === "[D]"){
                       if (member.roles.find('name', 'Duc')){
                         console.log(nmss[1] +" est déjà Duc sur discord");
                     }
                     else{
                         let role = message.guild.roles.find('name', 'Duc')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Duc sur discord");
                     }
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
