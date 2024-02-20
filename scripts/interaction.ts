import {ethers} from "hardhat";

async function main() {

    const ercAddress = "0x56B3d432EADB18758dcd0522EDaC3d0C41c04eC9";
    const myAddress = "0xF2E7E2f51D7C9eEa9B0313C2eCa12f8e43bd1855";
    const anotherAccountAddress = "0xe902aC65D282829C7a0c42CAe165D3eE33482b9f";
    
    const ercContract = await ethers.getContractAt("IDean20", ercAddress);
    const balance = await ercContract.balanceOf(myAddress);
    console.log(`Balance = ${balance}`);

    const mintTx = await ercContract.mint(myAddress, 1000000);
    await mintTx.wait();

    const newBalance = await ercContract.balanceOf(myAddress);
    console.log(`New Balance = ${newBalance}`);

    const approveTx = await ercContract.approve(anotherAccountAddress, 1200);
    await approveTx.wait();

    const allow = await ercContract.allowance(myAddress, anotherAccountAddress);
    console.log(allow);

    const transferTx = await ercContract.transfer(anotherAccountAddress, 1200);
    await transferTx.wait();

    const anotherAccountBal = await ercContract.balanceOf(anotherAccountAddress);
    console.log(anotherAccountBal);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});