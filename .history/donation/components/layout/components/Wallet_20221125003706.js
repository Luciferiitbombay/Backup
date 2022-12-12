// import React from 'react'
import styled from "@emotion/styled"
import {ethers} from 'ethers';

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
    const connectWallet=async()=>{
        await window
    }
  return (
    <div onClick={connectWallet}>
      Wallet
    </div>
  )
}


export default Wallet
