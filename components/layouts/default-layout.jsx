import React from "react";
import Footer from "./footer";
import Header from "./header";
import Heads from "./module/head";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Heads />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
