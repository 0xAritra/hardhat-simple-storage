const { ethers } = require("hardhat")
const { assert, expect } = require("chai")

describe("Simple Storage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
        await simpleStorage.deployed()
    })

    it("Should start with favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("Should update the favorite number on calling store", async function () {
        const expectedValue = "5"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()
        assert.equal(updatedValue.toString(), expectedValue)
    })
    it("Should add person and favorite number to the mapping and array", async function () {
        const expNum = "1"
        const expName = "Ari"
        const transactionResponse = await simpleStorage.addPerson("Ari", expNum)
        await transactionResponse.wait(1)
        const res = await simpleStorage.nameToFavNum("Ari")
        const [resNum, resName] = await simpleStorage.person(0)
        assert.equal(res, expNum)
        assert.equal(resName, expName)
        assert.equal(resNum, expNum)
    })
})
