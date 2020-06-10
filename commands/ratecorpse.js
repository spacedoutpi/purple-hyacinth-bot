const Discord = require('discord.js');

exports.run = (client, message, args) => {
	var corpseMessages = [
		'You can relax knowing that you\'re not going to be killed.',
		'You\'re safe for now . . .',
		'You *could* be a corpse; it just depends on how much the Phantom Scythe wants you dead.',
		'You\'re more likely to become a corpse at this point.',
		'~~Time to meet your inevitable death.~~'
	];
	var corpseRate = Math.floor((Math.random()*corpseMessages.length));

	const rateCorpse = new Discord.MessageEmbed()
	.setAuthor('Corpse Rate for '+message.author.username+"#"+message.author.discriminator, message.author.avatarURL({dynamic:true}))
	.setColor('#aba9e6')
	.setDescription('Your corpse rate is **'+(corpseRate+1)+'**! '+corpseMessages[corpseRate]);

	message.channel.send(rateCorpse);
}
