// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import {ThemeP}

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
