import React from 'react'

import KreirajIspitForma from './KreirajIspitForma'
import InformacijeOIspituForma from './InformacijeOIspituForma/InformacijeOIspituForma';
import PocetnaForma from './PocetnaForma/PocetnaForma';

class App extends React.Component{

  render(){
    return(
      <div className='container'>
        
        {/* <KreirajIspitForma/> */}
       { /* <InformacijeOIspituForma /> */} 
        <PocetnaForma />
      </div>
    )
  }
}

export default App