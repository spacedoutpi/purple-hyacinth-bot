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
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    var test = message.content.slice((prefix).length).trim().split(" ");

    // figure out how to make quotes command concise
    if (test.indexOf('lauren') != -1) {
        let args = 'lauren';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('kieran') != -1) {
        let args = 'kieran';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('kym') != -1) {
        let args = 'kym';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('william') != -1) {
        let args = 'william';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('miscchar') != -1) {
        let args = 'miscchar';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('lauki') != -1) {
        let args = 'lauki';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('kywi') != -1) {
        let args = 'kywi';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else if (test.indexOf('miscinter') != -1) {
        let args = 'miscinter';
        try {
            let commandFile = require(`./quotes/${args}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
    else {
        let args = test;
        let cmd = args.shift().toLowerCase();
        try {
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(client, message, args);
        }
        catch (e) {
            console.log(e.stack);
        }
    }
});

client.login(token);
