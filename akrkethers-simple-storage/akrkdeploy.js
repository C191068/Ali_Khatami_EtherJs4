const ethers = require("ethers");

const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );

  const abi = fs.readFileSync();

  const wallet = new ethers.Wallet(
    "0x1cd5a540d56cb150d4b870ab0cb624b1181b0885aa0e12ea2e46ca74515b5b33",
    provider
  );
}
// http://127.0.0.1:7545

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
