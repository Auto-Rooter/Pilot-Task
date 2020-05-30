import React from 'react';
import HeaderComponent from '../src/components/HeaderComponent'
import FooterComponent from '../src/components/FooterComponent'
import RegisterComponent from '../src/components/RegisterComponent'
import './App.css';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <RegisterComponent/>
        <FooterComponent/>
    </div>
  );
}

export default App;
