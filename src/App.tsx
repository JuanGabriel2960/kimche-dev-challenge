import React from "react";
import "./normalize.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Header } from "./components/header";
import { Input } from "./components/input";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <Input />
  </ApolloProvider>
);
export default App;
