// import React from 'react'
import styled from "styled-components"
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo/>
      <HeaderNav/>
      <HeaderRight/>
    </HeaderWrapper>
  )
}

const HeaderWrapper=styled.div`
    width: 100%;
    height: 60px;
    border: 2px solid red;
    display: flex;
    justify-content: s;
    
    
`

export default Header
