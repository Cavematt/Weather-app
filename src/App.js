import React from 'react'
import Home from "./Pages/Home"
import {  ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"; 

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/" 
  })

  // so all pages with apollo in needs to be wrapped in the provider. along with where to make the calls
  return (
    <ApolloProvider client={client}>
        <Home />
    </ApolloProvider>
  )
}

export default App
