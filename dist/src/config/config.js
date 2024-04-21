"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.getClient = void 0;
const tslib_1 = require("tslib");
const algosdk_1 = tslib_1.__importDefault(require("algosdk"));
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "ski avocado glide lava combine person crouch gown cool oval ticket toilet stadium snack stadium off coach frequent step price clock nature system absorb flat";
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