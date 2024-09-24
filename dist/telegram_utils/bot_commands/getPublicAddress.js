"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicAddress = void 0;
const axios = require("axios");
const getPublicAddress = (ctx, bot) => {
    try {
        const message = "Get public address command";
        const chat_id = ctx.chat.id;
        console.log("Chat id :", chat_id);
        console.log(ctx);
        bot.telegram.sendMessage(ctx.chat.id, message, {});
    }
    catch (e) { }
};
exports.getPublicAddress = getPublicAddress;
