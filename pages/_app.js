import '../styles/globals.css'
import dynamic from "next/dynamic";
import { Appprovider } from '../components/cocktail/Context';

const Layout = dynamic(
  () => {
    return import("../components/Layout/Layout");
  },
  { ssr: false }
);


function MyApp({ Component, pageProps }) {
  
  return(
    <Appprovider>
      <Layout> 
        <Component {...pageProps} />
        </Layout>
      </Appprovider>
      )
  
}

export default MyApp
