import React from "react";
import { CountryProvider } from './context/CountryContext';
import { Header } from "./components/header";
import { Input } from "./components/input";
import { Results } from "./components/results";
import "./normalize.css";

function App() {

  return (
    <CountryProvider>
      <Header />
      <Input />
      <Results />
    </CountryProvider>
  )
}

export default App;
