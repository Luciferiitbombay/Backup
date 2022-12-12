// import React from 'react'
import styled from "styled-components"
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';

const HeaderRight = () => {
  return (
    <HeaderRightWrapper>
    <ThemeToggle>
        <DarkModeSharpIconn/>
    </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper=styled.div`




`
const ThemeToggle=styled.div`
    background-color: ${(props)=>props.theme.bgDiv};


`

export default HeaderRight