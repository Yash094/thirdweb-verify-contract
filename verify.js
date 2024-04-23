import { getContract } from "thirdweb/contract";
import { verifyContract } from "thirdweb/contract/verification";
import { ethereum } from "thirdweb/chains";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID,
});

const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: ethereum,
  // the contract's address
  address: "YOUR_CONTRACT_ADDRESS_TO_VERIFY"
});
async function verifyContract() {
const verificationResult = await verifyContract({
 contract,
 explorerApiUrl: "https://api.polygonscan.com/api",
 explorerApiKey: process.env.EXPLORER_API_KEY,
});
}
verifyContract()
