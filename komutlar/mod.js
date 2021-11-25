const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Moderasyon Menüsü`,client.user.avatarURL())
 .setThumbnail('')
 .setColor('RANDOM')
 .setDescription(`

 > \`p!eğlence -> Eğlence komutlarını gösterir.\`

 > \`p!mod -> Moderasyon Komutlarını Gösterir.\`

 > \`p!gifyardım -> Gif Komutlarını Gösterir.\`

 > \`p!Eklencek -> Eklencek.\`

 > \`p!logo -> Kendinize Logo Yakabilirsiniz.\`


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
  name: 'mod',   //abo
  description: '',
  usage: ''
};
