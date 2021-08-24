import React from "react";
import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@material-ui/styles";

import styled from "styled-components";

export const LayoutGrid = styled.div`
  max-width: 1440px;
  position: relative;
  margin: auto;
`;

export const HeaderNav = styled.header`
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em 4em;
  color: #fff;

  & a {
    margin: 0 2em;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutGrid>
      <Head>
        <title>Free Shoal</title>
      </Head>

      <ThemeProvider theme={theme}>
        <HeaderNav>
          <Nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/login">
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Link>
          </Nav>
        </HeaderNav>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
      </ThemeProvider>
    </LayoutGrid>
  );
};

export default Layout;
