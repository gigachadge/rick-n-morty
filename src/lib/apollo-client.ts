import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "https://rickandmortyapi.com/graphql",
    }),
    cache: new InMemoryCache(),
  });
}
