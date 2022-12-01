import React from "react";

import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div>Layout</div>
      {children}
    </>
  );
};

export default Layout;
