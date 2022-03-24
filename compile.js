const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, { encoding: "utf8" });

var input = {
  language: "Solidity",
  sources: {
    Inbox: {
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

const inputJson = JSON.stringify(input);

const compiledFile = solc.compile(inputJson);

const contract = JSON.parse(compiledFile);

module.exports = contract.contracts.Inbox.Inbox;
