# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# 

```shell
yarn

yarn hardhat run scripts/deploy.js --network hardhat

npx hardhat node
yarn hardhat run scripts/deploy.js --network localhost

yarn hardhat run scripts/deploy.js --network goerli

yarn hardhat block-number --network goerli

yarn hardhat test

yarn hardhat coverage
```