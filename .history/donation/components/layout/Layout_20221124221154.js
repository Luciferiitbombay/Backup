// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import { ThemeProvider, createGlobalStyle} from "styled-components";
import { useState, createContext } from "react";

const Layout = ({children}) => {
    const [theme, setTheme]=useState('light');
  return (

    <ThemeProvider theme={themes[theme]}>
    <layoutWrapper>

      <Header />
      {children}
    </layoutWrapper>
    </ThemeProvider>
  );
};

const layoutWrapper =styled.div`
    background-color: ${{props}=> props.theme;.bgColor};
    background-image: ${props}=> props: .theme;.bgImage;
`

export default Layout;
