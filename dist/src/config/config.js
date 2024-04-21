"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "curtain smoke release afford hard faculty comfort caught unhappy oil remind addict town cause grit put glow bubble sauce spend diagram nose finger about coyote";
function getClient() {
    let client = new algosdk_1.default.Algodv2(algodToken, server, port);
    return client;
}
exports.getClient = getClient;
function getAccount() {
    let account = algosdk_1.default.mnemonicToSecretKey(mnemonic);
    return account;
}
exports.getAccount = getAccount;
//# sourceMappingURL=config.js.map