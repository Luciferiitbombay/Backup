// import React from 'react'
import styled from "@emotion/styled";
import { ethers } from "ethers";
import { useState } from "react";
// import styled from "styled-components";

const networks = {
  polygon: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon TestNet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState("");
  const [balance,setBalance]=useState("");

  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    if (provider.network != "matic") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"],
          },
        ],
      });
      const account = provider.getSigner();
      const Address = await account.getAddress();
      setAddress(Address);
      const Balance=ethers.utils.formatEther(await account.getBalance());
      setBalance(Balance);
    }
  };
  return( 
    <ConnectWalletWrapper onClick={connectWallet}>
        {address==''? <ad>CONNECT WALLET</ad> : <ad>{address.slice(0,6)}...{address.slice(39)}</ad>}
        {balance==''? <ba></ba>:<ba>{balance.slice(0,4)} Matic</ba>}
    </ConnectWalletWrapper>
  )

};

const ConnectWalletWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=>props.theme.bgSubDiv};
    height: 50%;
    padding: 10px;
    color:${(props)=>props.theme.color};
    border-radius: 20px;
    margin-right: 60px;
    font-size: 25px;
`
const ad=styled.div`
  display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=>props.theme.bgSubDiv};
    height: 50%;
    padding: 10px;
    color:${(props)=>props.theme.color};
    border-radius: 20px;
    margin-right: 60px;
    font-size: 15px;


`

const ba =styled.div`
    display: flex;

`

export default Wallet;
