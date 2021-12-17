import { DataUserProvider } from '../context/dataUserProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <DataUserProvider>
      <Component {...pageProps} />
    </DataUserProvider>
  );
}

export default MyApp;
