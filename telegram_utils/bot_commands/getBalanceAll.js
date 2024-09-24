"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceAll = void 0;
const axios = require("axios");
const getBalanceAll = (ctx, bot) => {
    try {
        const message = "Buy test";
        const chat_id = ctx.chat.id;
        console.log("Chat id :", chat_id);
        console.log(ctx);
        bot.telegram.sendMessage(ctx.chat.id, message, {});
    }
    catch (e) { }
};
exports.getBalanceAll = getBalanceAll;
