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
    padding: 10px;
    height: 50%;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;

`

const HeaderNavLinks=styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 6px;
`


export default HeaderNav