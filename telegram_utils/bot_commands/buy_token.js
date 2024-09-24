"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buy_token = void 0;
const axios = require("axios");
const buy_token = (ctx) => {
    try {
        const chat_id = ctx.chat.id;
        console.log("Chat id :", chat_id);
        console.log(ctx);
    }
    catch (e) { }
};
exports.buy_token = buy_token;
