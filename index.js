import dotenv from 'dotenv';
import EthereumTx from 'ethereumjs-tx';
import Web3 from 'web3';
import CryptoBlades from './contracts/CryptoBlades.js';
import SkillToken from './contracts/SkillToken.js';

dotenv.config();

const Tx = EthereumTx.Transaction;

const web3 = new Web3('https://bsc-dataseed1.binance.org/');
const defaultAddress = '0x0000000000000000000000000000000000000000';
const gameAddress = '0x39bea96e13453ed52a734b6aceed4c41f57b2271';
const tokenAddress = '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab';
const GameContract = new web3.eth.Contract(CryptoBlades, gameAddress, { from: defaultAddress });
const TokenContract = new web3.eth.Contract(SkillToken, tokenAddress, { from: defaultAddress });
const account = process.env.ADDRESS || '';
const key = process.env.KEY || '';

const claim = async () => {
  if (!account || account === '') {
    throw new Error('can\'t find ADDRESS on .env file');
  }

  if (!key || key === '') {
    throw new Error('can\'t find KEY on .env file');
  }
  const accountBalance = web3.utils.fromWei(await GameContract.methods.getTokenRewardsFor(account).call(), 'ether');
  console.log(`current account balance: ${accountBalance}`);

  const interval = setInterval(async () => {
    const balance = web3.utils.fromWei(await TokenContract.methods.balanceOf(gameAddress).call(), 'ether');
    const time = new Date();
    process.stdout.write(
      `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${balance}\r`
    );
    if (parseFloat(balance) >= parseFloat(accountBalance)) {
      clearInterval(interval);
      console.log(`${time.getHours} ${time.getMinutes()} ${time.getSeconds()} ${balance}`);

      const data = await GameContract.methods.claimTokenRewards().encodeABI();

      const txCount = await web3.eth.getTransactionCount(account);
      const txObject = {
        nonce: web3.utils.toHex(txCount),
        from: account,
        to: gameAddress,
        data,
        value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex(96556),
        gasPrice: web3.utils.toHex(web3.utils.toWei('5', 'gwei')),
      };

      const privateKey = Buffer.from(key, 'hex');
      const tx = new Tx(txObject);
      tx.sign(privateKey);
      const stx = tx.serialize();
      const raw = `0x${stx.toString('hex')}`;

      const txReceipt = await web3.eth.sendSignedTransaction(raw);
      console.log(txReceipt);
    }
  }, 1000);
};

claim();
