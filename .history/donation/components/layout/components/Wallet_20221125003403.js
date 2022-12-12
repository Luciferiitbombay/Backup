// import React from 'react'
import styled from "@emotion/styled"

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
        blockExplorerUrls:["https://mumbai.polygon.com/"]
    },
};


const Wallet = () => {
  return (
    <div>
      Wallet
    </div>
  )
}


export default Wallet
