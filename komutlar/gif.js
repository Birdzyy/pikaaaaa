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
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar**
**[Destek Sunucusu](https://discord.gg/f9EdEJgNs5)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=908373544596029511&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **p!yardım**

**• Komutlar**
> p!NSFW → NSFW gifler.
> p!Woman → Kadın gif xd
> p!Man → erkek gif xd
> p!Baby → bebek gif xd
> p!gifara → gif ararsınız
> p!hayvan→ Hayvan gifleri.
> p!kemalsunal → **Kemal Sunal** gifleri.
> p!gifara → Gif Ararsınız.

`)


return message.channel.send(NARCOSEMBED)
.then;

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: 0
};

  exports.help = {
    name: 'gifyardım',
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'p!yardım'
};
