'use strict'

let Bot = require('./bot.js');
let tmp_token = 'xoxb-207966127462-JtyjOdtUqfxBUFYtrpMpLD5k';

const bot = new Bot({
token: tmp_token,
autoReconnect: true,
autoMark: true
});

// bot respond commands

bot.respondTo('giggle help', (message, channel, user) => {
        // test command to respond to 
        bot.send(' - To make me crack a random joke type \`joke\`\n\
        - To make me joke about a friend or anyone, type \`joke <username>\` ', channel);
    },
     true);

bot.respondTo('joke', (message, channel, user) => {
    let tokenArr = message.text.split(' ');

    if (tokenArr.length === 1) {
        bot.send('Sorry, somebody forgot to put some jokes in me, ok', channel);
    }

    else {
      let args = tokenArr.slice(1);
      bot.send(`${args[0]} looks like ..., arrhh I need some damn jokes`, channel);
    }
    
    },
    true);