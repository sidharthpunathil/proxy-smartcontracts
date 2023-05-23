const { ethers, upgrades } = require("hardhat");

const PROXY = "0x0D63b65dD365dF9D27C45124973C9459a459B7Bd";

async function main() {
    const BoxV3 = await ethers.getContractFactory("BoxV3");
    console.log("Upgrading Box to V3...");
    await upgrades.upgradeProxy(PROXY, BoxV3);
    console.log("Box upgraded");
}

main();