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
exports.championshipWinnerIntent = function (conv, params) {
    conv.ask(constants_1.championshipWinners[params.category][params.year.startDate.slice(0, 4)]);
};
//# sourceMappingURL=base.intent.js.map