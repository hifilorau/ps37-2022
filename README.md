### BUILD AND DEPLOY CONTRACT

1. Compile Contract with 

npx hardhat compile


2. Deploy Contract with 

npx hardhat run scripts/deploy.js --network ropsten

3. Update the contract address
Get contract address from return statement in console and put into .env
Update /utils abi.js with new api that you will get from running

node scripts/mint-nft.js


