const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf-8");

const input = {
    language: "Solidity",
    sources: {
        "Lottery.sol": {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const compiledContract = output.contracts["Lottery.sol"].Lottery;

module.exports = {
    abi: compiledContract.abi,
    bytecode: compiledContract.evm.bytecode.object,
};
