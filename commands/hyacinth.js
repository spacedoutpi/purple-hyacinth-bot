const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var randomPHImage = Math.floor((Math.random() * 15) + 1);

    const displayPH = new Discord.MessageEmbed().setColor('#aba9e6');

    // season 1 hyacinths
    if (randomPHImage == 1) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957411-65edb900-a836-11ea-8cc1-3b7553e7250c.png');
    }
    else if (randomPHImage == 2) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957413-68501300-a836-11ea-8509-b8f2e1eaa733.png');
    }
    else if (randomPHImage == 3) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957414-6a19d680-a836-11ea-8162-d4ef36242c36.png');
    }
    else if (randomPHImage == 4) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957415-6dad5d80-a836-11ea-8908-91e7ff4f6832.png');
    }
    else if (randomPHImage == 5) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957416-7140e480-a836-11ea-9494-7e469e19886a.png');
    }
    else if (randomPHImage == 6) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957418-743bd500-a836-11ea-8d09-894a5d208e13.png');
    }
    else if (randomPHImage == 7) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957419-77cf5c00-a836-11ea-9f4a-be34a796bdc9.png');
    }
    else if (randomPHImage == 8) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957420-7a31b600-a836-11ea-839b-f572582a472a.png');
    }
    else if (randomPHImage == 9) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957442-7d2ca680-a836-11ea-8a91-ce27cfb1a207.png');
    }
    else if (randomPHImage == 10) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957481-80279700-a836-11ea-9d4a-04da4eff861a.png');
    }
    else if (randomPHImage == 11) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957527-8453b480-a836-11ea-92cf-26354cfa0b9b.png');
    }
    else if (randomPHImage == 12) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957539-87e73b80-a836-11ea-938b-873bdc5cec01.png');
    }
    else if (randomPHImage == 13) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957540-8a499580-a836-11ea-8e69-abc6ac08e78c.png');
    }
    else if (randomPHImage == 14) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957541-8cabef80-a836-11ea-9689-5b11d3e0732f.png');
    }
    else if (randomPHImage == 15) {
        displayPH.setImage('https://user-images.githubusercontent.com/60800540/83957542-8f0e4980-a836-11ea-998c-4fa3e284e09b.png');
    }
    
    message.channel.send(displayPH);
}
