"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buy = void 0;
const axios = require("axios");
const buy = (ctx, bot) => {
    try {
        const message = "Buy command";
        const chat_id = ctx.chat.id;
        console.log("Chat id :", chat_id);
        bot.telegram.sendMessage(ctx.chat.id, message, {});
    }
    catch (e) { }
};
exports.buy = buy;
