// import React from 'react'
import styled from "styled-components"
import {useRouter} from 'next/router'


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
    margin: 12px;
    font-weight: lighter;
    font-size: 20px;
    font-family: 'Silkscreen', cursive;
    background-color: ${(props)=> props.theme.bgSubDiv};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 2px 4px;
    cursor: pointer;
`


export default HeaderNav