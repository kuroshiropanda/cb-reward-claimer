# USE AT YOUR OWN RISK
## how to use
1. git clone https://github.com/kuroshiropanda/cb-reward-claimer.git
2. run `npm ci`
3. add .env file on root with this parameters
```
ADDRESS= wallet address
KEY= wallet private key
```
4. run with `node index`
5. wait until the script returns the transaction url

---
### sample transaction
---
```dos
account claimable reward: 0.992237132587163435
13:28:26 claiming 0.992237132587163435 from reward pool balance 1.126895851440446724
https://bscscan.com/tx/0x58ab1dd3a53f2ec6be7153ad4dd320e0052d0ad37a0b131c35199709cc70d043
0.009922371325871635 SKILL has been sent to 0x9ca07328D7b8E36eb747Ec60A83fa98Cf7c70D53 as tax for using this script
```
---

## note
*using this script will transfer 1% of your claimed reward (upon successful claim) to me, feel free to set `tax.json` accept to false if you don't want to support me :(*