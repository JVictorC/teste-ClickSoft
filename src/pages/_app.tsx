import { DataUserProvider } from '../context/dataUserProvider';
import { HistorySearchUsers } from '../context/historySearchUsers';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <HistorySearchUsers>
      <DataUserProvider>
        <Component {...pageProps} />
      </DataUserProvider>
    </HistorySearchUsers>
  );
}

export default MyApp;
