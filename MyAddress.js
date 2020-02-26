const Web3 = require('web3')

const provider = require('./config.js')['config']['provider']
const web3 = new Web3(provider)
//enter your private Key
const privateKey = "";
//enter your password
const password ="";

const keystore = web3.eth.accounts.encrypt(privateKey, password);

//const keystore = require('./config.js')['config']['keystore']
//const password = require('./config.js')['config']['password']
const NewAccount = web3.eth.accounts.decrypt(keystore, password)
const myAddress = NewAccount['address']
exports.NewAccount = NewAccount