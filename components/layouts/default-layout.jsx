import React from "react";

import HeaderMain from "./headers/header";
import Heads from "./module/head";
import DefaultFooter from "./module/default-footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Heads />
      <HeaderMain />
      {children}
      <DefaultFooter />
    </div>
  );
}
