// import React from 'react'
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {childen}
    </div>
  );
};

export default Layout;
