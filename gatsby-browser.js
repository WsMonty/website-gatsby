import Layout from './src/pages/components/layout';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store.js';

export function wrapPageElement({ element, props }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout {...props}>{element}</Layout>
      </PersistGate>
    </Provider>
  );
}
