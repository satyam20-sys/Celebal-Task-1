import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Container from './Components/Container';
import CardContainer from './Components/CardContainer';
import Banner from './Components/Banner';
import Instruction from './Components/Instruction';
import Company from './Components/Company';
import GetInTouch from './Components/GetInTouch';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Container />
      <CardContainer />
      <Banner />
      <Instruction />
      <Company />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
