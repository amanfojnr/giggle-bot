'use strict'

const Bot = require('./bot.js');

/* get token from env variable for security reasons
    eg.
       when running the bot process use 
       
       SLACK_TOKEN = <BOT_SLACK_TOKEN_HERE> node index.js
*/

const token = process.env.SLACK_TOKEN; 

// create bot instance
const bot = new Bot({
                     token: token,
                     autoReconnect: true,
                     autoMark: true
                     });

/* 
bot respond commands
giggle-bot listens on message events incoming and looks for 
specific string patterns if found giggle-bot responds based on 
particular pattern
*/

bot.respondTo('giggle help', (message, channel, user) => { 
        bot.send(' - To make me crack a random joke type \`joke\`\n\
        - To make me joke about a friend or anyone, type \`joke <username>\` ', channel);
    },
     true);

bot.respondTo('joke', (message, channel, user) => {

    let tokenArr = message.text.split(' ');

    if (tokenArr.length === 1) {
        /* 
        making giggle bot send joke to channel if no argument is specified

        eg.
        bot.send('Sorry, somebody forgot to put some jokes in me, ok', channel);

        write send message code here
        */
    }

    else {
      /* 
      taking argument and cracking a joke with the given argument

      eg. 
      let args = tokenArr.slice(1);
      bot.send(`${args[0]} looks like ..., arrhh I need some damn jokes`, channel);

      write send message code here
      */ 
    }
    
    },
    true);


// api wrapper functions can go here (optional)