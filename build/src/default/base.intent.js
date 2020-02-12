"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
exports.helpIntent = function (conv) {
    conv.ask(constants_1.messages.help);
};
exports.welcomeIntent = function (conv) {
    conv.ask(constants_1.messages.welcome);
};
exports.byeIntent = function (conv) {
    conv.ask(constants_1.messages.goodbye);
};
exports.championShipWinnerIntent = function (conv, params) {
    console.log(params);
    conv.ask("test");
    // conv.ask(championshipWinners[params.category][params.year]);
};
//# sourceMappingURL=base.intent.js.map