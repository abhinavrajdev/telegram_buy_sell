"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buy_token = void 0;
const axios = require("axios");
const buy_token = (ctx) => {
    axios
        .get(`https://api.coingecko.com/api/v3/simple/price?ids=${ctx.text.split(" ")[1]}&vs_currencies=usd`)
        .then((response) => {
        try {
            const rate = response.data[ctx.text.split(" ")[1]].usd;
            const message = `Price of ${ctx.text.split(" ")[1]} is $${rate}`;
            // bot.telegram.sendMessage(ctx.chat.id, message, {});
        }
        catch (e) { }
    });
};
exports.buy_token = buy_token;
