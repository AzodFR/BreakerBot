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
              console.log(mbm + " >> test");
              if(mbm.includes("Modo") || mbm.includes("Guide") || mbm.includes("Archi") || mbm.includes("Scribe")){
                    mbm = nmss[2]   
              }
              else if(mbm.includes("✮")){
                  mbm.replace("✮", "");
              }
              else{
               mbm = nmss[1]   
              }
              
              if(member.displayName === mbm || member.user.username === mbm){
                 
                 if (nmss[0] === "[A]"){
                     if (member.roles.find(x => x.name === 'Aventurier')){
                         console.log(nmss[1] +" est déjà Aventurier sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Aventurier')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Aventurier sur discord");
                     }
                 }
                 else if (nmss[0] === "[S]"){
                       if (member.roles.find(x => x.name === 'Survivant')){
                         console.log(nmss[1] +" est déjà Survivant sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Survivant')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Survivant sur discord");
                     }
                 }
                 else if (nmss[0] === "[B]"){
                       if (member.roles.find(x => x.name === 'Baron')){
                         console.log(nmss[1] +" est déjà Baron sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Baron')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Baron sur discord");
                     }
                 }
                 else if (nmss[0] === "[D]"){
                       if (member.roles.find(x => x.name === 'Duc')){
                         console.log(nmss[1] +" est déjà Duc sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Duc')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Duc sur discord");
                     }
                 }
                 else if (nmss[0] === "[M]"){
                       if (member.roles.find(x => x.name === 'Marquis')){
                         console.log(nmss[1] +" est déjà Marquis sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Marquis')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Marquis sur discord");
                     }
                 }
                  else if (nmss[0] === "[C]"){
                       if (member.roles.find(x => x.name === 'Comte')){
                         console.log(nmss[1] +" est déjà Comte sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Comte')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Comte sur discord");
                     }
                 }
                  else if (nmss[0] === "[H]"){
                       if (member.roles.find(x => x.name === 'Héro')){
                         console.log(nmss[1] +" est déjà Héro sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Héro')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Héro sur discord");
                     }
                 }
                  else if (nmss[0] === "[L]"){
                       if (member.roles.find(x => x.name === 'Légende')){
                         console.log(nmss[1] +" est déjà Légende sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Légende')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Légende sur discord");
                     }
                 }
                  else if (nmss[0] === "[F]"){
                       if (member.roles.find(x => x.name === 'Fantôme')){
                         console.log(nmss[1] +" est déjà Fantôme sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Fantôme')
                         member.addRole(role);
                         console.log(nmss[1] +" est passé Fantôme sur discord");
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
     else if (message.channel.id === "629054688851001384" && message.content === ".djoff"){
        message.channel.send("!settings djonly off");

        }

        })



bot.login(process.env.BOT_TOKEN)
