const CampaignFactory=require("./artifacts/contracts/Campaign.sol/CampaignFactory.json")
const {ethers}= require('ethers');
require ('dotenv').config({path:'./.env.local'})
const main=async()=>{
    const provider=new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);
    const contract
}