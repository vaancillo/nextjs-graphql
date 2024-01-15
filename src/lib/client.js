// lib/client.js
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://rickandmortyapi.com/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

export const getClient = createApolloClient;
