// import React from 'react'
import Header from "./Header";
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
