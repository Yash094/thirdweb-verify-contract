import { getContract } from "thirdweb/contract";
import { verifyContract } from "thirdweb/contract";
import { ethereum } from "thirdweb/chains";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID,
});
const contractAddress = ""
const explorerAPIUrl = ""; // e.g. https://api.etherscan.io/api
const explorerAPIKey = ""; // Generate API key on the explorer


const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: ethereum,
  // the contract's address
  address: contractAddress
});
async function verifyContract() {
const verificationResult = await verifyContract({
 contract,
 explorerApiUrl: explorerAPIUrl,
 explorerApiKey: explorerAPIKey,
});
}
verifyContract()
