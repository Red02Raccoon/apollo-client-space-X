import React from 'react';
import ReactDOM from 'react-dom';
import {Query, ApolloProvider} from 'react-apollo';

import {client, queries} from './store'

import { PagesContainer } from './containers';
import { Login } from './pages';

import injectStyles from './styles/global';

const { IS_LOGGED_IN } = queries

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>
      {({data}) => (data.isLoggedIn ? <PagesContainer /> : <Login />)}
    </Query>
  </ApolloProvider>,
  document.getElementById('root'),
);
