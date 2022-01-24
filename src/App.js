import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Create from './pages/Create';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {

  const [cryptos, setCryptos] = useState([]);
  const api = () => {
    

    fetch("http://localhost:3001/api/listCryptos")
      .then(response => response.json())
      .then(data => setCryptos(data))
      .catch(error => console.log(error))
   }

   useEffect(() => {
    api()
  }, []);


   return (
 
    <div  >
    <div className='container'>  <Nav />  </div> 
    <div className='container' style={{padding: '6px', color:'white'}}> <h5> Agregar una Cryptomoneda </h5> </div> 
    <div className='container' style={{padding: '12px'}}>  <Create /> </div> 
    <div className='container' style={{padding: '12px', color:'white', textAlign:'center'}}> <h5> Cryptomonedas disponibles</h5> </div> 
    <div className='container'>  <Cards cryptos={cryptos} /> </div>  
    <div className='container'>  <Footer /> </div>  
   
    
    </div>
  );
};



export default App;
