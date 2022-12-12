// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, createContext } from "react";

const App=createContext();

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    
    <ThemeProvider theme={themes[theme]}>
      <LayoutWrapper onClick={changeTheme}>
        <GlobalStyle/>
        <Header />
        {children}
      </LayoutWrapper>
    </ThemeProvider>
  );
};

const GlobalStyle=createGlobalStyle`
    body{
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }

`

const LayoutWrapper = styled.div`
    min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
`;

export default Layout;
