// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import { ThemeProvider, createGlobalStyle} from "styled-components";
import 

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
