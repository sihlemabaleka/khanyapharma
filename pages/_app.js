import 'tailwindcss/tailwind.css';
import { Provider as AuthProvider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';

import store from './../core/redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
