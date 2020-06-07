const Discord = require('discord.js');
const client = new Discord.Client();
const token = BOT_TOKEN;
const prefix = 'ph!'

client.on('ready', () =>{
    console.log(client.user.username+' is currently online! Woo hoo!! >o<');
    client.user.setStatus('Online');
    client.user.setActivity('with blood 🩸| ph!help');
});

client.on('message', message =>{
    let args = message.content.slice((prefix).length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args);
    } catch (e) {
        console.log(e.stack);
    }
});

client.login(token);
