import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql/apolloClient';
import { LanguagesPage } from './pages/LanguagesPage';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <LanguagesPage />
  </ApolloProvider>
);

export default App;
