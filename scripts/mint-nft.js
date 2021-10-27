require("dotenv").config()
const API_URL = process.env.REACT_APP_ALCHEMY
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)
const contract = require("../artifacts/contracts/VaporPlanes.sol/VaporPlanes.json")
console.log(JSON.stringify(contract.abi))

const contractAddress = "0x90fa9714C8e7961F8D703A0a7085D5F29F269c23"

