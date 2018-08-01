var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Configure Logger settings
logger.remove(logger.transports.Console);
logger.add (
    logger.transports.Console, {
        colorize: true
    }
);
logger.level = 'debug';
//Initialize bot
var bot = new Discord.Client({
    token: NDc0MDc4NTU1NTkzMjQ0Njgz.DkLVMQ.tUsBI5KWz764SLOjZJwg11XZWYE,
    autorun: true
});
bot.on('ready', function (event) {
    logger.info('Connected');
    logger.info('logged in as: ');
    logger.info(bot.username + ' - ('+ bot.id +')');
});
bot.on('message', function (user, userID, channelID, message, event) {
    //bot needs to know if it will exe a cmd
    // this sets it to listen 4 anything starting with `!`
    if (message.substring(0,1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            //!ping command
            case 'ping':
            bot.sendMessage({
                to:channelID,
                message:'Pong!'
            });
            break;
            //add case commands like above to create message cmds from users.
            //still need to understand how to get this to react w youtube.com for the music player, or how to get that into the voice channel. This is gonna get weird fast. Wish me luck, future me.
        }
    }
});