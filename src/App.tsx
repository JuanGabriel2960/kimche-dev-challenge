import React from "react";
import { CountryProvider } from './context/CountryContext';
import { Header } from "./components/header";
import { Form } from "./components/form";
import { Results } from "./components/results";
import "./normalize.css";

function App() {

  return (
    <CountryProvider>
      <Header />
      <Form />
      <Results />
    </CountryProvider>
  )
}

export default App;
