const Discord = require('discord.js')
const bot = new Discord.Client()
'use strict';
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
const fs = require('fs');

let rawdata = fs.readFileSync('stat.json');
let taille = JSON.parse(rawdata);
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(taille);
let dickystat = taille.ditai
let dickystatfu = taille.difuc
bot.on('ready', function(){
    bot.user.setActivity('vec ses boules qui chamboulent')
})

bot.on('message', function(message){
   fight = message.content
   author = message.author.username
   txtfi = fight
   let vdm = message.mentions.users.first();
   if (message.content === '!dicky help'){
       message.channel.send(':pencil: !dicky help ==> Show the list of commands')
       message.channel.send(':crossed_swords: !ovo @name ==> Do a random fight with your friend')
       message.channel.send(':straight_ruler: !dicky stats ==> Show my stats')
       message.channel.send(':seedling: !dicky grow ==> Make me growing up !')
       message.channel.send(':fallen_leaf: !dicky decrease ==> Make me decrease...')
       message.channel.send(':underage: !dicky fuck ==> Make me fuck')
   }

   else if (fight.includes('!ovo') && author != 'Dicky' && fight.includes('@everyone') ==0  && fight.includes('@here') ==0) {
       de1 = getRandomInt(11)
       de2 = getRandomInt(11)
        
       vie1 = 10 - de2
       vie2 = 10 - de1
      

       if (fight.includes('@everyone') || fight.includes('@here')){
          
          message.reply('U cannot fight with everyone ! :cold_sweat:  ')
        }
       else if (vie1 > vie2){

           message.channel.send('THE WINNER IS: '+author)



            //message.channel.send(author)
       }
       else if (vie1 < vie2){

           message.channel.send('THE WINNER IS: '+vdm.username)

            // message.channel.send(vdm.username)
       }
       else {

           message.channel.send('WE HAVE TWO WINNERS !')

       }

   }
  
   else if (message.content === '!dicky grow'){
       dickystat += 1
       word = "ditai"
       taille[word] = dickystat
       message.channel.send('Now I do: '+dickystat+" cm")
       let data = JSON.stringify(taille);
       fs.writeFileSync('stat.json', data);
   }
   else if (message.content === '!dicky stats'){
      
      message.channel.send(":straight_ruler: I actually do: " +dickystat+ " cm")
      message.channel.send(":underage: I already fuck: " +dickystatfu+ " times ")
   }
   else if (message.content === '!dicky decrease'){
       if ( dickystat === 0 ){
         message.channel.send('I cannot decrease anymore...\nI look like a pussy bruh :frowning: ') 
       }
       else{
          dickystat -= 1
          word = "ditai"
          taille[word] = dickystat
          message.channel.send('Oh no...\nNow I do: '+dickystat+" cm")
          let data = JSON.stringify(taille);
          fs.writeFileSync('stat.json', data);
       }
   }
       else if (message.content === '!dicky fuck'){
           dickystatfu += 1
           word = "difuc"
           taille[word] = dickystatfu
           message.channel.send(':sweat_drops: Hmm that was great !\nSee you later baby ! :smirk:' )
           let data = JSON.stringify(taille);
           fs.writeFileSync('stat.json', data);
       }
       else if (message.content === '!dicky leave'){
            let voiceChannel = message.member.voiceChannel
            voiceChannel
            .leave()
            message.channel.send('Leaving ...')
       }
       else if (message.content === '!pp'){        
          message.channel.send('!ftn ps4 power-azod_-')
          message.edit('.')
          message.edit('..')
          message.edit('...')
          message.delete(2000)
          
       }
       
       
       
})





bot.login(process.env.BOT_TOKEN)
