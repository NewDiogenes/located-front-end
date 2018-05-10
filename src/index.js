import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import ProductListPage from './app/containers/ProductListPageContainer';

const pages = [
  {
    path: '/',
    component: ProductListPage,
  },
];
ReactDOM.render(<App pages={ pages } />, document.getElementById('root'));
