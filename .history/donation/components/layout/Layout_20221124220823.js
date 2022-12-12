// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import { ThemeProvider, createGlobalStyle} from "styled-components";
import { useState, createContext } from "react";

const Layout = ({children}) => {
    const [theme, setTheme]=useState('light');
  return (

    <ThemeProvider theme={themes[theme]}>
    <layout
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
