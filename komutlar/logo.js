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
.setTitle("Kendy")
.setThumbnail("")
.setDescription(`
**» Bağlantılar**
**[Destek Sunucusu](https://discord.gg/f9EdEJgNs5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=810876429981974588&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **p!yardım**

**• Komutlar**
> [p!grafiti](https://discord.gg/f9EdEJgNs5) → grafiti logo oluşturur.
> [p!discord](https://discord.gg/f9EdEJgNs5) → discord logo oluşturur.
> [p!gold](https://discord.gg/f9EdEJgNs5) → gold logo oluşturur.
> [p!comic](https://discord.gg/f9EdEJgNs5) → comic logo oluşturur.
> [p!bubble](https://discord.gg/f9EdEJgNs5) → bubble logo oluşturur.
> [p!bubble2](https://discord.gg/f9EdEJgNs5) → bubble2 logo oluşturur.
> [p!dinamik](https://discord.gg/f9EdEJgNs5) → dinamik logo oluşturur.
> [p!altın](https://discord.gg/f9EdEJgNs5) → altın logo oluşturur.
> [p!banner](https://discord.gg/f9EdEJgNs5) → banner logo oluşturur.
> [p!basit](https://discord.gg/f9EdEJgNs5) → basit logo oluşturur.
> [p!elmas](https://discord.gg/f9EdEJgNs5) → elmas logo oluşturur.
> [p!neonmavi](https://discord.gg/f9EdEJgNs5) → neonmavi logo oluşturur.
> [p!kalın](https://discord.gg/f9EdEJgNs5) → kalın logo oluşturur.
> [p!anime](https://discord.gg/f9EdEJgNs5) → anime logo oluşturur.
> [p!habbo](https://discord.gg/f9EdEJgNs5) → habbo logo oluşturur.
> [p!arrow](https://discord.gg/f9EdEJgNs5) → arrow logo oluşturur.
> [p!green](https://discord.gg/f9EdEJgNs5) → green logo oluşturur.
> [p!alev](https://discord.gg/f9EdEJgNs5) → alev logo oluşturur.
> [p!red](https://discord.gg/f9EdEJgNs5) → red logo oluşturur.
> [p!kalp](https://discord.gg/f9EdEJgNs5) → kalp logo oluşturur.
`)



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
    name: 'logo',
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'p!logo'
};
