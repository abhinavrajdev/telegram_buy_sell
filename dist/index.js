"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Telegraf } = require("telegraf");
require("dotenv").config();
const initializeBotCommandsX_1 = require("./telegram_utils/initializeBotCommandsX");
const BOT_TOKEN = "7815772426:AAGKTg-fNyC0l1gbQ49mzvEI5UNLbGx_UN0";
const bot = new Telegraf(BOT_TOKEN);
function main() {
    console.log("BOT STARTED...");
    (0, initializeBotCommandsX_1.initializeBotCommandsX)(bot);
    bot.launch();
}
main();
