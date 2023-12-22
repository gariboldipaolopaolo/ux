import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
import PcSection from "./components/pc/PcSection";
import PcModding from "./components/modding/PcModding";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <div>
            <Landing/>
            <Services/>
            <PcSection/>
            <PcModding/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
