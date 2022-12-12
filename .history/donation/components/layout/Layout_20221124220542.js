// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import { ThemeProvider } from "styled-components";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
