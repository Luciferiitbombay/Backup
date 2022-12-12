// import React from 'react'
import styled from "styled-components"
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';

const HeaderRight = () => {
  return (
    <HeaderRightWrapper>
    <ThemeToggle>
        <DarkModeSharpIcon/>
    </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper=styled.div`
margin-right: 20px;
border-radius: 20px;
height: 5700%;







`
const ThemeToggle=styled.div`
    display: flex;
    background-color: ${(props)=>props.theme.bgDiv};
    height: 100%;
    justify-items: center;
    align-items: center;
    border-radius: 20px;
    



`

export default HeaderRight