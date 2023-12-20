import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
      <Header/>
        <Landing/>
    </div>
  );
}

export default App;
