// import React from 'react'
import styled from "styled-components"
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import { App } from "../Layout";
import { useContext } from "react";

const HeaderRight = () => {
    const ThemeToggler=useContext(App);
    return (
    <HeaderRightWrapper>
    <ThemeToggle>
        {ThemeToggler.theme=='light'? <DarkModeSharpIcon <DarkModeSharpIcon onClick={ThemeToggler.changeTheme}/>/>
        
    </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper=styled.div`
margin-right: 20px;
border-radius: 20px;
height: 45%;
display: flex;
justify-items: center;
align-items: center;





`
const ThemeToggle=styled.div`
    display: flex;
    background-color: ${(props)=>props.theme.bgDiv};
    height: 100%;
    justify-items: center;
    align-items: center;
    border-radius: 20px;
    padding: 4px 4px;
    



`

export default HeaderRight