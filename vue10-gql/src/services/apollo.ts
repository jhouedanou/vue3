import {
    ApolloClient,
    ApolloLink,
    concat,
    HttpLink,
    InMemoryCache,
  } from "@apollo/client/core";
  
  const cache = new InMemoryCache();
  
  const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`,
  });
  
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    //const token = `${import.meta.env.VITE_API_KEY}`;
  
    operation.setContext({
      headers: {
        //authorization: `Bearer ${token}`,
      },
    });
    return forward(operation);
  });
  
  const apolloClient = new ApolloClient({
    cache,
    link: concat(authMiddleware, httpLink),
  });
  
  export default apolloClient;
  