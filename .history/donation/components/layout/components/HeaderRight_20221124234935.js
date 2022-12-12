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




`
const ThemeToggle=styled.div`
    background-color: ${(props)=>props.theme.bgDiv};
    height: 100%;
    justify-items: center;
    align



`

export default HeaderRight