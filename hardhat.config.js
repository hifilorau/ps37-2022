/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { REACT_APP_ALCHEMY, REACT_APP_MM_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: REACT_APP_ALCHEMY,
         accounts: [`0x${REACT_APP_MM_KEY}`]
      }
   },
}
