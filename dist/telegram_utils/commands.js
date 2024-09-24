"use strict";
const { search, trending, price } = require("./bot_commands");
const initializeBotCommands = (bot) => {
    bot.command("buy_token", search);
};
module.exports = { initializeCommands };
