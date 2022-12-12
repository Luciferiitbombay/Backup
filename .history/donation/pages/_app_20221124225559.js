// import '../styles/globals.css'
import Layout from "../components/layout/Layout";
<i></i>


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
