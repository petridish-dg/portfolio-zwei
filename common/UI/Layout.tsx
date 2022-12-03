import React from "react";
import { SemicolonPreference } from "typescript";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Seo from "./Seo";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Seo />
      <Navbar />
      {children}
      <Footer contain />
    </>
  );
};

export default Layout;
