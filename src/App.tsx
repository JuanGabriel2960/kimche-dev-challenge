import React from "react";
import { CountryProvider } from './context/CountryContext';
import { Header } from "./components/header";
import { Form } from "./components/form";
import { Results } from "./components/results";
import { Details } from "./components/details";
import "./normalize.css";

function App() {

  return (
    <CountryProvider>
      <Header />
      <Form />
      <Results />
      <Details />
    </CountryProvider>
  )
}

export default App;
