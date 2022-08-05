const { task } = require("hardhat/config")

task("block-number", "Prints block number of provider").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Block Number: ${blockNumber}`)
    }
)

module.exports = {}
