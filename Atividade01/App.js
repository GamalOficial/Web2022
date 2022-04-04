import logo from './logo.svg';
import './App.css';
import IMC from "./components/imc/IMC"
import { Tweet } from './componentsteste/Tweet';
import { useState } from 'react';
import Hero from './trab/Hero';
import Enemy from './trab/Enemy';
import Arena from './trab/Arena';
import Mundo from './trab/Mundo';

function App() {
  return(
    <Mundo mundo="Terra">
      <Arena arena='Jurubeba'>
        <Hero nome="José, o Bonzinho"/>
        <Enemy nome="Mário, o Malvadão"/>
      </Arena>
    </Mundo> 
  )
  



}

  
  
    // <div className="App">
    //   <IMC altura = {1.90} e o peso é = {80} quilogramas/>
    
    // </div>
  

export default App;
