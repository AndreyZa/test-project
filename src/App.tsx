import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apolloClient';
import { Languages, Continents, Countries } from './components/pieces';

// todo make collapsible logic via context
// @TODO: replace and refactor model logic
const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Languages />
    <Continents />
    <Countries />
  </ApolloProvider>
);

export default App;
