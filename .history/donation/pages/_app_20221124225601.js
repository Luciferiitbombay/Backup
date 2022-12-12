// import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import second from 'first'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
