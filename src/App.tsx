import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apolloClient';
import Languages from './components/Languages';
import Continents from './components/Continents';

// todo make collapsible logic via context
// replace and refactor model logic
const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Languages />
    <Continents />
  </ApolloProvider>
);

export default App;
