// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import { ThemeProvider } from "styled-components";
import theme from "../lib/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider {...theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
