const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
bot.on('ready', function(){
    bot.user.setActivity('BreakerLand !')
    console.log('Connected');
})

bot.on('message', function(message){
    const list = bot.guilds.get("596754524392259584");
    const filter = (reaction, user) => ["👍"].includes(reaction.emoji.name);
    if (message.channel.id === "619577505606664193"){
        
         message.embeds.forEach((embed) => {
          nms = embed.author.name
          nmss = nms.split(" ");
         /// console.log(nmss[0]); 
         /// console.log(nmss[1]); 
        
          if(nmss[1].includes("[")){
                    
                    mbma = nmss[2] 
                    
              }
              
              else{
                mbma = nmss[1] 
                
              }
              
          list.members.forEach(member => {
              
              if(mbma.includes("✮")){
                 mbma.replace("✮", "");
                  console.log(mbma + " est premium");
                 if(member.displayName === mbma || member.user.username === mbma){
                     if(member.roles.find(x => x.name === 'Premium')){
                         console.log(mbma +" est déjà Premium sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Premium')
                         member.addRole(role);
                         console.log(mbma +" est passé Premiuum sur discord");
                     }
                 }
              }
              
              
              if(member.displayName === mbma || member.user.username === mbma){
                 console.log(mbma);
                 if (nmss[0] === "[A]"){
                     if (member.roles.find(x => x.name === 'Aventurier')){
                         console.log(mbma +" est déjà Aventurier sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Aventurier')
                         member.addRole(role);
                         console.log(mbma +" est passé Aventurier sur discord");
                     }
                 }
                 else if (nmss[0] === "[S]"){
                       if (member.roles.find(x => x.name === 'Joueur')){
                         console.log(mbma +" est déjà Joueur sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Joueur')
                         member.addRole(role);
                         console.log(mbma +" est passé Joueur sur discord");
                     }
                 }
                 else if (nmss[0] === "[B]"){
                       if (member.roles.find(x => x.name === 'Baron')){
                         console.log(mbma +" est déjà Baron sur discord");
                     }
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Baron')
                         member.addRole(role);
                         console.log(mbma +" est passé Baron sur discord");
                     }
                 }
                 else if (nmss[0] === "[D]"){
                       if (member.roles.find(x => x.name === 'Duc')){
                         console.log(mbma +" est déjà Duc sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Duc')
                         member.addRole(role);
                         console.log(mbma +" est passé Duc sur discord");
                     }
                 }
                 else if (nmss[0] === "[M]"){
                       if (member.roles.find(x => x.name === 'Marquis')){
                         console.log(mbma +" est déjà Marquis sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Marquis')
                         member.addRole(role);
                         console.log(mbma +" est passé Marquis sur discord");
                     }
                 }
                  else if (nmss[0] === "[C]"){
                       if (member.roles.find(x => x.name === 'Comte')){
                         console.log(mbma +" est déjà Comte sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Comte')
                         member.addRole(role);
                         console.log(mbma +" est passé Comte sur discord");
                     }
                 }
                  else if (nmss[0] === "[H]"){
                       if (member.roles.find(x => x.name === 'Héro')){
                         console.log(mbma +" est déjà Héro sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Héro')
                         member.addRole(role);
                         console.log(mbma +" est passé Héro sur discord");
                     }
                 }
                  else if (nmss[0] === "[L]"){
                       if (member.roles.find(x => x.name === 'Légende')){
                         console.log(mbma +" est déjà Légende sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Légende')
                         member.addRole(role);
                         console.log(mbma +" est passé Légende sur discord");
                     }
                 }
                  else if (nmss[0] === "[F]"){
                       if (member.roles.find(x => x.name === 'Fantôme')){
                         console.log(mbma +" est déjà Fantôme sur discord");
                     }
                     
                     else{
                         let role = message.guild.roles.find(x => x.name === 'Fantôme')
                         member.addRole(role);
                         console.log(mbma +" est passé Fantôme sur discord");
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
    else if (message.content === "/wiki"){
        message.channel.send(":information_source: Lien du wiki: https://breakerland.fr/wiki")
    }
    else if (message.content === "/vote"){
        message.channel.send(":mouse_three_button: Lien pour voter: https://breakerland.fr/vote")
    }
    else if (message.content === "/site"){
        message.channel.send(":desktop: Lien du site: https://breakerland.fr/")
    }
    else if (message.content === "/dynmap"){
        message.channel.send(":earth_americas: Lien de la dynmap: https://map.breakerland.fr/")
    }
    else if (message.content === "/ip"){
        message.channel.send(":joystick: IP du serveur: breakerland.fr")
    }
    else if (message.content === "/boutique"){
        message.channel.send(":moneybag: Boutique du serveur: https://breakerland.fr/shop")
    }
    else if (message.content === "/help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Liste de commandes")
            .addField(":desktop: Pour avoir accès au site","/site")
            .addField(":information_source: Pour avoir accès au wiki","/wiki")
            .addField(":mouse_three_button: Pour aller voter","/vote")
            .addField(":moneybag: Pour avoir accès à la boutique","/boutique")
            .addField(":earth_americas: Pour avoir accès à la dynmap","/dynmap")
            .addField(":joystick: Pour obtenir l'ip du serveur","/ip")
            .addField(":briefcase: Pour que Toryar tienne son serveur","/toryar")
            .setColor("0x2ecc71")
   
        message.channel.send(embed)
    }
   

        })


    bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "👍") {
        if(reaction.message.id === "639055492206952469"){
            let role = message.guild.roles.find(x => x.name === 'approved')
            reaction.users.addRole(role);
            console.log(reaction.users);
        }
    }
});
    bot.on("guildMemberAdd", (member) => {
        const defaultChannel = guild.channels.find(channel => channel.id === '644156102690209825');
        defaultChannel.send("Bienvenue <@"+member.id+"> !")
        defaultChannel.send("Pour avoir accès à tous le serveur merci de mettre un :thumbsup: sous le <#614482156001034270>")
    });



bot.login(process.env.BOT_TOKEN)
