const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var displayHelp = new Discord.MessageEmbed()
    .setAuthor('List of Commands for '+message.guild.name, message.guild.iconURL())
    .setColor(0xaba9e6)
    .setImage('https://user-images.githubusercontent.com/60800540/83957558-d1d02180-a836-11ea-8350-e11f3e82c1ac.png')
    .setDescription('Command Prefix: `ph!` \n\n  🖼️ **Visuals** \n `aesthetics` - sends you some pretty pictures from *Purple Hyacinth* \n `hyacinth` - sends you a hyacinth \n\n 🔪 **Fun** \n `quote [character/interaction]` - sends a quote from a character (`lauren` `kieran` `kym` `william` `character` [for miscellaneous character]) or from an interaction among characters (`lauki` `kywi` `interaction` [for miscellaneous interaction]) \n `botinfo` - info about the bot \n `info` - info about the webtoon and creators \n `ping` - the bot sends you a pong \n `episode` - randomly generates an episode to read \n `ratecorpse` - rates how likely you are to become one of the Purple Hyacinth\'s corpses');
    message.channel.send(displayHelp);
}
