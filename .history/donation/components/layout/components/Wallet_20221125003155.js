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
        
    }
}


const Wallet = () => {
  return (
    <div>
      Wallet
    </div>
  )
}


export default Wallet
