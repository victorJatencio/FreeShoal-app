import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </Head>;
  return <Component {...pageProps} />;
};

export default App;
