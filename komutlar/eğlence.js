const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail('')
 .setColor('RANDOM')
 .setDescription(`

 > \`p!ilginçbilgi -> İlginç Bilgi Söyler.\`

 > \`p!aşkölç-> Aşkınızı Ölçer.\`

 > \`p!mcskin -> Skin Bakarsınız.\`

 > \`p!şanslısayım -> Size Şanslı Sayınızı Söyler.\`

 > \`p!elyazısı -> Yazdıgınız Kelimeyi El Yazısı Olarak Sunar.\`

 > \`p!şifreoluştur -> Belirlediginiz Sayı Kadar Sifre Olusturur.\`

 > \`p!şanslısayım -> Şanslı Sayınıza Bakarsınız.\`


**[Davet Et](https://discord.com/api/oauth2/authorize?client_id=908373544596029511&permissions=8&scope=bot)**`)
 .setFooter(`Kendy Sunar .`)
    .setTimestamp()
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',   //abo
  description: '',
  usage: ''
};
