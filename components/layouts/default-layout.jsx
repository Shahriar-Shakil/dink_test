import React from "react";
import Footer from "./module/footer";
import HeaderMain from "./module/header";
import Heads from "./module/head";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Heads />
      <HeaderMain />
      {children}
      <Footer />
    </div>
  );
}
