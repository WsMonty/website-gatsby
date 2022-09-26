import React from 'react';
import './src/scss/main.scss';
import { store, persistor } from './src/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {element}
      </PersistGate>
    </Provider>
  );
};
