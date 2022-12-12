// import React from 'react'
import styled from "styled-components"
import DarkModeIcon from '@mui/icons-material/DarkMode';

const HeaderRight = () => {
  return (
    <HeaderRightWrapper>
    <ThemeToggle>
        <da
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