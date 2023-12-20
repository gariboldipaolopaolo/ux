import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
import PcSection from "./components/pc/PcSection";

function App() {
  return (
    <div className="App">
      <Header/>
        <div>
            <Landing/>
            <Services/>
            <PcSection/>
        </div>
    </div>
  );
}

export default App;
