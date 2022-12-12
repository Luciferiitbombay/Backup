// import React from 'react'
import styled from "@emotion/styled"
import {ethers} from 'ethers';
import { useState } from "react";

const networks={
    polygon:{
        chainId: `0x${Number(80001).toString(16)}`,
        chainName:"Polygon TestNet",
        nativeCurrency:{
            name:"MATIC",
            symbol:"MATIC",
            decimals:18
        },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls:["https://mumbai.polygonscan.com/"]
    },
};


const Wallet = () => {
    const {address, setAddress}=useState('');
    
    
    const connectWallet=async()=>{
        await window.ethereum.request({method:"eth_requestAccounts"});
        const provider=new ethers.providers.Web3Provider(window.ethereum,"Any");
        const account= provider.getSigner();
        const Address= await account.getAddress();
        
        setAddress(Address);

    }
  return (
    <div onClick={connectWallet}>
      Wallet
    </div>
  )
}


export default Wallet
