import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string =
"ski avocado glide lava combine person crouch gown cool oval ticket toilet stadium snack stadium off coach frequent step price clock nature system absorb flat";

export function getClient(): algosdk.Algodv2 {
let client = new algosdk.Algodv2(algodToken, server, port);
return client;
}

export function getAccount(): algosdk.Account {
let account = algosdk.mnemonicToSecretKey(mnemonic);
return account;
}