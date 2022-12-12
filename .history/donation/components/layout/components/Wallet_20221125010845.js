// import React from 'react'
import styled from "@emotion/styled";
import { ethers } from "ethers";
import { useState } from "react";

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
        {address==' '? CONNECT WALLET <h2></h2>:{address};
    </ConnectWalletWrapper>
  )

};

const ConnectWalletWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props)=>props.theme.bgDiv};
    height: 50%;
    padding: 10px;
    color:${(props)=>props.theme.color};
    border-radius: 20px;
    margin-right: 60px;
    font-size: 20px;




`



export default Wallet;
