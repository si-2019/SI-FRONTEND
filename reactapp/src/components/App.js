import React from 'react'

import KreirajIspitForma from './KreirajIspitForma'
import InformacijeOIspituForma from './InformacijeOIspituForma/InformacijeOIspituForma';

class App extends React.Component{

  render(){
    return(
      <div className='container'>
        Hi
        {/* <KreirajIspitForma/> */}
        <InformacijeOIspituForma />
      </div>
    )
  }
}

export default App