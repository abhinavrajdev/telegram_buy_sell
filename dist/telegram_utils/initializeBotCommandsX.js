"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeBotCommandsX = void 0;
const bot_commands_1 = require("./bot_commands");
const initializeBotCommandsX = (bot) => {
    bot.command("buy", (ctx) => {
        (0, bot_commands_1.buy)(ctx, bot);
    });
    bot.command("sell", (ctx) => {
        (0, bot_commands_1.sell)(ctx, bot);
    });
    bot.command("buwithdrawy", (ctx) => {
        (0, bot_commands_1.withdraw)(ctx, bot);
    });
    bot.command("createNew", (ctx) => {
        (0, bot_commands_1.createNew)(ctx, bot);
    });
    bot.command("getPublicAddress", (ctx) => {
        (0, bot_commands_1.getPublicAddress)(ctx, bot);
    });
    bot.command("getBalance", (ctx) => {
        (0, bot_commands_1.getBalance)(ctx, bot);
    });
    bot.command("getBalanceAll", (ctx) => {
        (0, bot_commands_1.getBalanceAll)(ctx, bot);
    });
};
exports.initializeBotCommandsX = initializeBotCommandsX;
