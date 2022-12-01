import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      {children}
      <Footer contain />
    </>
  );
};

export default Layout;
