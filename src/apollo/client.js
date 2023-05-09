import { ApolloClient, InMemoryCache } from '@apollo/client';
// reference https://www.apollographql.com/docs/react/get-started
const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });

  export default client