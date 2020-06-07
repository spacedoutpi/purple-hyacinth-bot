const Discord = require('discord.js');

exports.run = (client, message, args) => {
	var corpseRate = Math.floor((Math.random() * 5) + 1);

	const rateCorpse = new Discord.MessageEmbed().setColor('#aba9e6');
	rateCorpse.setAuthor('Corpse Rate for '+message.author.username+"#"+message.author.discriminator, message.author.avatarURL({dynamic:true}));

	if(corpseRate == 1) {
		rateCorpse.setDescription('Your corpse rate is **'+corpseRate+'**! You can relax knowing that you\'re not going to be killed.');
	}
	else if(corpseRate == 2) {
		rateCorpse.setDescription('Your corpse rate is **'+corpseRate+'**! You\'re safe for now . . .');
	}
	else if(corpseRate == 3) {
		rateCorpse.setDescription('Your corpse rate is **'+corpseRate+'**! You *could* be a corpse; it just depends on how much the Phantom Scythe wants you dead.');
	}
	else if(corpseRate == 4) {
		rateCorpse.setDescription('Your corpse rate is **'+corpseRate+'**! You\'re more likely to become a corpse at this point.');
	}
	else if(corpseRate == 5) {
		rateCorpse.setDescription('Your corpse rate is **'+corpseRate+'**! ~~Time to meet your inevitable death.~~');
	}

	message.channel.send(rateCorpse);
}
