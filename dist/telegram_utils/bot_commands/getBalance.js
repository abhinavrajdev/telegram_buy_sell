"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const axios = require("axios");
const getBalance = (ctx, bot) => {
    try {
        const message = "Get particular token balance command";
        const chat_id = ctx.chat.id;
        console.log("Chat id :", chat_id);
        console.log(ctx);
        bot.telegram.sendMessage(ctx.chat.id, message, {});
    }
    catch (e) { }
};
exports.getBalance = getBalance;
