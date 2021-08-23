import React from "react";
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Free Shoal</title>
      </Head>
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </header>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
