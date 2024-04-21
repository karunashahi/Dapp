import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string =
"curtain smoke release afford hard faculty comfort caught unhappy oil remind addict town cause grit put glow bubble sauce spend diagram nose finger about coyote";

export function getClient(): algosdk.Algodv2 {
let client = new algosdk.Algodv2(algodToken, server, port);
return client;
}

export function getAccount(): algosdk.Account {
let account = algosdk.mnemonicToSecretKey(mnemonic);
return account;
}