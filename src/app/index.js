import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import productReducer from './reducers/productReducer';

const reducers = combineReducers({
  product: productReducer,
});

const store = createStore(reducers);

const App = ({ pages }) => (
  <Provider store={ store } >
    <BrowserRouter>
      <Layout>
        <Switch>
          {pages.map((page) =>
            <Route key={ page.path } exact path={ page.path } component={ page.component } />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func,
  })).isRequired,
};

export default App;

