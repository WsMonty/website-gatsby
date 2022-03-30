import Layout from './src/pages/components/layout';
import React from 'react';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
