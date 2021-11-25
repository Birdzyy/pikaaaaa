const Discord = require("discord.js");

exports.run = (client, message) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("RED")
   .addField("**\<:6007_Toucan:909401732591804427> Toplam Kullanıcı**",message.guild.memberCount )
    .addField("**\<:9852_Online_Status:909401728603004948> Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField("**\<:9693_Idle_Status:909401728070328381> Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
.addField("**\<:6290_DND_Status:909401732960907304> Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
.addField("**\<:9487_Offline_Status:909401736018526249> Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
