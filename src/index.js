import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { GlobalContext } from 'stateContext/GlobalContext';
import { Provider } from 'react-redux';
import { persistor, store, }  from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
  {/* <GlobalContext> */}
    <App />
    <ToastContainer/>
  {/* </GlobalContext> */}
  </BrowserRouter>
  </PersistGate>
  </Provider>
);
