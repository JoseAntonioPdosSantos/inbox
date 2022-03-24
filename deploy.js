const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const Inbox = require("./compile");

const provider = new HDWalletProvider(
    'level ready nose asset slide vital spend satisfy oppose bar silver luxury',
    'https://kovan.infura.io/v3/84a483a329d14066b7345be6db509769'
);
const web3 = new Web3(provider);
const bytecode = Inbox.evm.bytecode.object;
const abi = Inbox.abi;

const deploy = async () => {
    const accounts =  await web3.eth.getAccounts();
    
    console.log('Attempting to depoy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deploy to', result.options.address);

    provider.engine.stop();
};

deploy();