const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var randomEpisode = Math.floor((Math.random()*50));

    const displayEpisode = new Discord.MessageEmbed().setColor('#aba9e6');
    // season 1 episodes
    if (randomEpisode == 0) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957730-45266300-a838-11ea-94a9-a48a9deab71b.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 0 - Prologue](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-0-prologue/viewer?title_no=1621&episode_no=1)');
    }
    else if (randomEpisode == 1) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957731-46f02680-a838-11ea-886e-4cc5738303fe.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 1 - Lovely Lady](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-1-lovely-lady/viewer?title_no=1621&episode_no=2)');
    }
    else if (randomEpisode == 2) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957733-48b9ea00-a838-11ea-9646-d1fa5ac2052d.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 2 - Somber Silhouette](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-2-somber-silhouette/viewer?title_no=1621&episode_no=3)');
    }
    else if (randomEpisode == 3) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957734-49eb1700-a838-11ea-8064-a9255bf67e87.png');
        displayEpisode.setDescription('**Read**\n[Ep. 3 - Elusive Encounter](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-3-elusive-encounter/viewer?title_no=1621&episode_no=4)');
    }
    else if (randomEpisode == 4) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957737-4bb4da80-a838-11ea-8a51-ea6cfc79bf76.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 4 - Merciless Murderer](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-4-merciless-murderer/viewer?title_no=1621&episode_no=5)');
    }
    else if (randomEpisode == 5) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957739-51aabb80-a838-11ea-8d0c-de5683186fa2.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 5 - Rogue Rebel](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-5-rogue-rebel/viewer?title_no=1621&episode_no=6)');
    }
    else if (randomEpisode == 6) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957740-52dbe880-a838-11ea-9b33-07fe0234be96.png');
        displayEpisode.setDescription('**Read**\n[Ep. 6 - Troubling Truth](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-6-troubling-truth/viewer?title_no=1621&episode_no=7)');
    }
    else if (randomEpisode == 7) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957741-553e4280-a838-11ea-8086-96c81d4c6cca.png');
        displayEpisode.setDescription('**Read**\n[Ep. 7 - Burning Burden](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-7-burning-burden/viewer?title_no=1621&episode_no=8)');
    }
    else if (randomEpisode == 8) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957742-566f6f80-a838-11ea-9185-1354476fcea8.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 8 - Challenging Choice](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-8-challenging-choice/viewer?title_no=1621&episode_no=9)');
    }
    else if (randomEpisode == 9) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957743-58393300-a838-11ea-876b-0fddd781bcc6.png');
        displayEpisode.setDescription('**Read**\n[Ep. 9 - Unexpected Uprising](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-9-unexpected-uprising/viewer?title_no=1621&episode_no=10)');
    }
    else if (randomEpisode == 10) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957745-5a02f680-a838-11ea-8921-cbd2ebc54e13.png');
        displayEpisode.setDescription('**Read**\n[Ep. 10 - Dreadful Deal](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-10-dreadful-deal/viewer?title_no=1621&episode_no=11)');
    }
    else if (randomEpisode == 11) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957746-5ff8d780-a838-11ea-8486-e6250f178bbc.png');
        displayEpisode.setDescription('**Read**\n[Ep. 11 - Hidden Home](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-11-hidden-home/viewer?title_no=1621&episode_no=12)');
    }
    else if (randomEpisode == 12) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957747-625b3180-a838-11ea-96eb-7c905e2e8a2a.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 12 - Perilous Plan](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-12-perilous-plan/viewer?title_no=1621&episode_no=13)');
    }
    else if (randomEpisode == 13) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957749-68511280-a838-11ea-854f-edb152694e82.png');
        displayEpisode.setDescription('**Read**\n[Ep. 13 - Exposing Envelope](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-13-exposing-envelope/viewer?title_no=1621&episode_no=14)');
    }
    else if (randomEpisode == 14) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957750-6a1ad600-a838-11ea-8da8-5f9536e8dec0.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 14 - La Lune](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-14-la-lune/viewer?title_no=1621&episode_no=15)');
    }
    else if (randomEpisode == 15) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957751-6be49980-a838-11ea-9dd3-565f00e3fde5.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 15 - Illicit Interrogation](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-15-illicit-interrogation/viewer?title_no=1621&episode_no=16)');
    }
    else if (randomEpisode == 16) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957752-6e46f380-a838-11ea-8ee3-cd32b9e7b4cc.png');
        displayEpisode.setDescription('**Read**\n[Ep. 16 - Persuasive Psychic](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-16-persuasive-psychic/viewer?title_no=1621&episode_no=17)');
    }
    else if (randomEpisode == 17) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957754-70a94d80-a838-11ea-8985-9a06809aea15.png');
        displayEpisode.setDescription('**Read**\n[Ep. 17 - New Nemesis](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-17-new-nemesis/viewer?title_no=1621&episode_no=18)');
    }
    else if (randomEpisode == 18) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957755-72731100-a838-11ea-92af-f84efff98188.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 18 - Lunatic Lovers](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-18-lunatic-lovers/viewer?title_no=1621&episode_no=19)');
    }
    else if (randomEpisode == 19) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957756-743cd480-a838-11ea-8c5e-1f21b69ae090.png');
        displayEpisode.setDescription('**Read**\n[Ep. 19 - Laconic Lass](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-19-laconic-lass/viewer?title_no=1621&episode_no=20)');
    }
    else if (randomEpisode == 20) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957758-756e0180-a838-11ea-8e7c-3b49c3f5db9f.png');
        displayEpisode.setDescription('**Read**\n[Ep. 20 - Dancing Devil](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-20-dancing-devil/viewer?title_no=1621&episode_no=21)');
    }
    else if (randomEpisode == 21) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957761-79018880-a838-11ea-9cfc-8baad01a9402.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 21 - Tricky Teamwork](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-21-tricky-teamwork/viewer?title_no=1621&episode_no=22)');
    }
    else if (randomEpisode == 22) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957762-7b63e280-a838-11ea-9470-bcd3460c1e87.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 22 - Disruptive Discovery](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-22-disruptive-discovery/viewer?title_no=1621&episode_no=23)');
    }
    else if (randomEpisode == 23) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957763-7d2da600-a838-11ea-8235-914467582a40.png');
        displayEpisode.setDescription('**Read**\n[Ep. 23 - Aftermath Anger](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-23-aftermath-anger/viewer?title_no=1621&episode_no=24)');
    }
    else if (randomEpisode == 24) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957764-7f900000-a838-11ea-9c9f-39e48f3ea85e.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 24 - Deceitful Dream](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-24-deceitful-dream/viewer?title_no=1621&episode_no=25)');
    }
    else if (randomEpisode == 25) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957766-8159c380-a838-11ea-8daf-514e4fbf68d8.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 25 - Faithful Friend](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-25-faithful-friend/viewer?title_no=1621&episode_no=26)');
    }
    else if (randomEpisode == 26) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957767-83238700-a838-11ea-8a5d-cd28e3bc4dd9.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 26 - Thorny Truce](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-26-thorny-truce/viewer?title_no=1621&episode_no=27)');
    }
    else if (randomEpisode == 27) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957768-84ed4a80-a838-11ea-8bf1-43f74dcc264f.png');
        displayEpisode.setDescription('**Read**\n[Ep. 27 - Perplexing Paradox](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-27-perplexing-paradox/viewer?title_no=1621&episode_no=28)');
    }
    else if (randomEpisode == 28) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957769-86b70e00-a838-11ea-9f01-4521f9a1c7a8.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 28 - Prying Partner](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-28-prying-partner/viewer?title_no=1621&episode_no=29)');
    }
    else if (randomEpisode == 29) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957773-89196800-a838-11ea-94d0-661c1c818230.png');
        displayEpisode.setDescription('**Read**\n[Ep. 29 - Deft Duo](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-29-deft-duo/viewer?title_no=1621&episode_no=30)');
    }
    else if (randomEpisode == 30) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957776-8b7bc200-a838-11ea-9caf-7d40cec87b24.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 30 - Sanguinary Snake](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-30-sanguinary-snake/viewer?title_no=1621&episode_no=31)');
    }
    else if (randomEpisode == 31) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957777-8d458580-a838-11ea-8668-40f5dd803bc5.png');
        displayEpisode.setDescription('**Read**\n[Ep. 31 - Sordid Surprise](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-31-sordid-surprise/viewer?title_no=1621&episode_no=32)');
    }
    else if (randomEpisode == 32) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957780-90d90c80-a838-11ea-949e-bbff166cc15c.png');
        displayEpisode.setDescription('**Read**\n[Ep. 32 - Lonely Lullaby](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-32-lonely-lullaby/viewer?title_no=1621&episode_no=33)');
    }
    else if (randomEpisode == 33) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957781-920a3980-a838-11ea-8dc7-aa55d91b13f5.png');
        displayEpisode.setDescription('**Read**\n[Ep. 33 - Mad Maid](https://www.webtoons.com/en/mystery/purple-hyacinth/ep33-mad-maid/viewer?title_no=1621&episode_no=34)');
    }
    else if (randomEpisode == 34) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957782-93d3fd00-a838-11ea-8262-f5df3cf46deb.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 34 - Baneful Belladona](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-34-baneful-belladona/viewer?title_no=1621&episode_no=35)');
    }
    else if (randomEpisode == 35) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957786-959dc080-a838-11ea-862f-a06e1003d7dd.png');
        displayEpisode.setDescription('**Read**\n[Ep. 35 - Free Fall](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-35-free-fall/viewer?title_no=1621&episode_no=36)');
    }
    else if (randomEpisode == 36) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957788-98001a80-a838-11ea-9db6-7a6f5441ab92.png');
        displayEpisode.setDescription('**Read**\n[Ep. 36 - Impeached Innocence](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-36-impeached-innocence/viewer?title_no=1621&episode_no=37)');
    }
    else if (randomEpisode == 37) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957790-99314780-a838-11ea-9335-8ee753a2748e.png');
        displayEpisode.setDescription('**Read**\n[Ep. 37 - Nettlesome Nurse](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-37-nettlesome-nurse/viewer?title_no=1621&episode_no=38)');
    }
    else if (randomEpisode == 38) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957792-9b93a180-a838-11ea-899f-6a3c96b872f2.png');
        displayEpisode.setDescription('**Read**\n[Ep. 38 - Humble Human](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-38-humble-human/viewer?title_no=1621&episode_no=39)');
    }
    else if (randomEpisode == 39) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957794-9d5d6500-a838-11ea-8aaa-46a866ef8ac4.png');
        displayEpisode.setDescription('**Read**\n[Ep. 39 - Bitter Burial](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-39-bitter-burial/viewer?title_no=1621&episode_no=40)');
    }
    else if (randomEpisode == 40) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957796-9fbfbf00-a838-11ea-9c4b-584e6bc63e9c.png');
        displayEpisode.setDescription('**Read**\n[Ep. 40 - Blood Bath](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-40-blood-bath/viewer?title_no=1621&episode_no=41)');
    }
    else if (randomEpisode == 41) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957797-a0f0ec00-a838-11ea-8453-4c1a6240af00.png');
        displayEpisode.setDescription('**Read**\n[Ep. 41 - Royal Retailiation](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-41-royal-retaliation/viewer?title_no=1621&episode_no=42)');
    }
    else if (randomEpisode == 42) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957798-a2baaf80-a838-11ea-8155-3255ef3ab54b.png');
        displayEpisode.setDescription('**Read**\n[Ep. 42 - Simmering Storm](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-42-simmering-storm/viewer?title_no=1621&episode_no=43)');
    }
    else if (randomEpisode == 43) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957799-a4847300-a838-11ea-97b7-d47a3ab42c1b.png');
        displayEpisode.setDescription('**Read**\n[Ep. 43 - Murderous Monster](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-43-murderous-monster/viewer?title_no=1621&episode_no=44)');
    }
    else if (randomEpisode == 44) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957800-a64e3680-a838-11ea-88bc-3670c0e62ae4.png');
        displayEpisode.setDescription('**Read**\n[Ep. 44 - Culpable Confession](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-44-culpable-confession/viewer?title_no=1621&episode_no=45)');
    }
    else if (randomEpisode == 45) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957802-a8b09080-a838-11ea-92e3-5de24df36f64.png');
        displayEpisode.setDescription('**Read**\n[Ep. 45 - Misdirected Mission](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-45-misdirected-mission/viewer?title_no=1621&episode_no=46)');
    }
    else if (randomEpisode == 46) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957803-aa7a5400-a838-11ea-958a-8506e90a79c8.png');
        displayEpisode.setDescription('**Read**\n[Ep. 46 - Skeptical Spies](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-46-skeptical-spies/viewer?title_no=1621&episode_no=47)');
    }
    else if (randomEpisode == 47) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957805-ac441780-a838-11ea-9ff1-b249ecf9d50f.png');
        displayEpisode.setDescription('**Read**\n[Ep. 47 - Foul Foe](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-47-foul-foe/viewer?title_no=1621&episode_no=48)');
    }
    else if (randomEpisode == 48) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957807-ae0ddb00-a838-11ea-817c-28577ff2f434.jpg');
        displayEpisode.setDescription('**Read**\n[Ep. 48 - Memorable Mistake](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-48-memorable-mistake/viewer?title_no=1621&episode_no=49)');
    }
    else if (randomEpisode == 49) {
        displayEpisode.setImage('https://user-images.githubusercontent.com/60800540/83957809-afd79e80-a838-11ea-9482-2d67305a0d95.png');
        displayEpisode.setDescription('**Read**\n[Ep. 49 - Cruel Curse](https://www.webtoons.com/en/mystery/purple-hyacinth/ep-49-cruel-curse-season-1-finale/viewer?title_no=1621&episode_no=50)');
    }

    message.channel.send(displayEpisode);
}
