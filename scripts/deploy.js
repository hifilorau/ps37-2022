async function main() {
  const VaporPlanes = await ethers.getContractFactory("VaporPlanes")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await VaporPlanes.deploy()
  console.log("Contract deployed to address:", myNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
