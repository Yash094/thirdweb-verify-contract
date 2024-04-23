# Verify thirdweb Prebuilt contracts

Verify any thirdweb prebuilt contract deployed from the thirdweb dashboard.

## Usage

- Install dependencies
  
  ```bash
  npm install
  # or
  yarn
  ```

- Replace `ethereum` on `import { ethereum } from "thirdweb/chains";"` with the Chain you're using, if your chain is not available by default, you can use defineChain - https://portal.thirdweb.com/references/typescript/v5/defineChain
- Update `explorerAPIUrl` e.g. https://api.etherscan.io/api
- Update `explorerAPIKey` with your apiKey `Generate API key on the explorer`.
- Update `contractAddress` with the contract you want to verify
  
- Run with `node verify.js`
