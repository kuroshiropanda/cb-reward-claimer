import Tx from 'ethereumjs-tx';
import Web3 from 'web3';
import { config } from './config.js';
import CryptoBlades from './contracts/CryptoBlades.js';
import SkillToken from './contracts/SkillToken.js';

const web3 = new Web3('https://bsc-dataseed1.binance.org/');
const defaultAddress = '0x0000000000000000000000000000000000000000';
const gameAddress = '0x39bea96e13453ed52a734b6aceed4c41f57b2271';
const tokenAddress = '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab';
const taxAddress = '0x9ca07328D7b8E36eb747Ec60A83fa98Cf7c70D53';
const GameContract = new web3.eth.Contract(CryptoBlades, gameAddress, { from: defaultAddress });
const TokenContract = new web3.eth.Contract(SkillToken, tokenAddress, { from: defaultAddress });
const address = config.address;
const key = config.key;
const tax = config.tax;

const claim = async () => {
  if (!address || address === '') {
    throw new Error('can\'t find ADDRESS on .env file');
  }

  if (!key || key === '') {
    throw new Error('can\'t find KEY on .env file');
  }

  const accountTokenReward = await GameContract.methods.getTokenRewardsFor(address).call();
  const accountBalance = web3.utils.fromWei(accountTokenReward, 'ether');
  console.log(`account claimable reward: ${accountBalance}`);
  const taxFee = parseFloat(accountBalance) * 0.01;
  if (tax) {
    console.log(`tax fee: ${taxFee}`);
  }

  const interval = setInterval(async () => {
    const balance = web3.utils.fromWei(await TokenContract.methods.balanceOf(gameAddress).call(), 'ether');
    const time = new Date();
    process.stdout.write(
      `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${parseFloat(balance)}\r`
    );
    if (parseFloat(balance) > parseFloat(accountBalance)) {
      clearInterval(interval);
      console.log(
        `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} claiming ${accountBalance} from reward pool balance ${balance}`
      );

      const data = await GameContract.methods.claimTokenRewards().encodeABI();
      const gasLimit = await GameContract.methods.claimTokenRewards().estimateGas({ from: address, gas: 500000 });

      const txCount = await web3.eth.getTransactionCount(address);
      const txObject = {
        nonce: web3.utils.toHex(txCount),
        from: address,
        to: gameAddress,
        data,
        value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex(gasLimit),
        gasPrice: web3.utils.toHex(web3.utils.toWei('5', 'gwei')),
      };

      const privateKey = Buffer.from(key, 'hex');
      const tx = new Tx(txObject);
      tx.sign(privateKey);
      const stx = tx.serialize();
      const raw = `0x${stx.toString('hex')}`;

      const txReceipt = await web3.eth.sendSignedTransaction(raw);
      console.log(`https://bscscan.com/tx/${txReceipt.transactionHash}`);
      if (txReceipt.status && tax) {
        const data = await TokenContract.methods.transfer(taxAddress, web3.utils.toWei(taxFee.toString(), 'ether')).encodeABI();

        const txCount = await web3.eth.getTransactionCount(address);
        const txObject = {
          nonce: web3.utils.toHex(txCount),
          from: address,
          to: tokenAddress,
          data,
          value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          gasLimit: web3.utils.toHex(100000),
          gasPrice: web3.utils.toHex(web3.utils.toWei('5', 'gwei')),
        };

        const privateKey = Buffer.from(key, 'hex');
        const tx = new Tx(txObject);
        tx.sign(privateKey);
        const stx = tx.serialize();
        const raw = `0x${stx.toString('hex')}`;

        const txReceipt = await web3.eth.sendSignedTransaction(raw);
        if (txReceipt.status) {
          console.log(`${taxFee} SKILL has been sent to ${taxAddress} as tax for using this script`);
        }
      }
    }
  }, 500);
};

claim();
