// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import { ThemeProvider, createGlo } from "styled-components";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
