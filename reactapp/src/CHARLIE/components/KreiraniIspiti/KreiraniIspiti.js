import React from 'react'
import axios from 'axios'

class KreiraniIspiti extends React.Component{
  state = {response:[]}

  async componentDidMount(){ //Data sta renda
    const {data} = await axios.get('http://localhost:3001/api/ispit')
    this.setState({response:data})
  }

 

  render(){
    
    return(
      <div>
        Kreirani ispiti
          
      </div>
    )
  }
}

export default KreiraniIspiti