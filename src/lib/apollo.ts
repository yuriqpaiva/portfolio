import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl65ddb978zzb01utb8cia6vy/master',
  cache: new InMemoryCache(),
});
