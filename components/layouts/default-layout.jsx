import React from "react";
import FooterTop from "./module/footerTop";
import FooterBottom from "./module/footerBottom";
import HeaderMain from "./module/header";
import Heads from "./module/head";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Heads />
      <HeaderMain />
      {children}
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
