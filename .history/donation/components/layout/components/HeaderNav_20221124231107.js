// import React from 'react'
import styled from "styled-components"


const HeaderNav = () => {
  return (
    <HeaderNavWrapper>
        <HeaderNavLinks>
            Create Campaign
        </HeaderNavLinks>
        <HeaderNavLinks>
            Campaigns
        </HeaderNavLinks>
        <HeaderNavLinks>
            Dashboard
        </HeaderNavLinks>



    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper=styled.div`
    display: flex;
    background-color: ${(props)=> props.theme.bgDiv};
    pa

`

const HeaderNavLinks=styled.div`

`


export default HeaderNav