
const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**Kendy**")
.setDescription('**• Komutlar**')
.addField('> k!abonelog ',' → Abone Logunu Ayarlarsınız')
.addField('> k!abone ',' → Abone Rolü Verirsiniz')
.addField('> k!aboneyrol ',' → Abone Rolünü verecek Yetkili rolünü ayarlarsınız')
.addField('> k!abonerol','  → Abone Rolünü Ayarlarsınız (YETKİLİ KANALINDA YAPMANIZ TAVSİTE EDİLİR)')
return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'aboneyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};