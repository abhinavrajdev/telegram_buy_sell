"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNew = void 0;
const axios = require("axios");
const createNew = (ctx, bot) => {
    try {
        const message = "Create new wallet command";
        const chat_id = ctx.chat.id;
        console.log("Chat id :", chat_id);
        console.log(ctx);
        bot.telegram.sendMessage(ctx.chat.id, message, {});
    }
    catch (e) { }
};
exports.createNew = createNew;
