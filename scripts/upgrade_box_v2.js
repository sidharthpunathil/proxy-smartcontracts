const { ethers, upgrades } = require("hardhat");

const PROXY = "0x0D63b65dD365dF9D27C45124973C9459a459B7Bd";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();