// import React from 'react'
import Header from "./Header";
import themes from "./theme";
import {}

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
