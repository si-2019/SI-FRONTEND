import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Predmet from '../Predmet/Predmet';
import DanDatum from '../PocetnaStranica/DanDatum';
import PozdravnaPoruka from '../PocetnaStranica/PozdravnaPoruka';
import UnosPrisustva from '../UnosPrisustva/UnosPrisustva';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header isPocetna={true}/>
        <PozdravnaPoruka/>
        <DanDatum/>
        <Predmet/>
        <UnosPrisustva/>  
        <Footer/>
      </div>
    );
  }
}

export default App;
