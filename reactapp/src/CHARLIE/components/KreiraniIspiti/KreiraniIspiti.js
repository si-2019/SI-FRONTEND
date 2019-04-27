import React from 'react'
import axios from 'axios'

class KreiraniIspiti extends React.Component{
  state = {response:[]}

  async componentDidMount(){ //Data sta renda
    const {data} = await axios.get('http://localhost:3001/api/ispit')
    this.setState({response:data})
  }

  renderItems = () => {
    if(!this.state.response) return 
    return this.state.response.map(element => 
      <div className='container'>
      <form>
        <div className='row'>
        <div className='col-4'>
          <li style={{ listStyleType: "none" }}>{element.naziv}</li>
        </div>
        <div className='col-4'>
          <li style={{ listStyleType: "none" }}>{element.tip_ispita}</li>
        </div>
        <div className='col-4'>
          
        </div>
         
        </div>
        </form>
        </div>

    );
  }

  render(){
    
    return(
      <div>
        Kreirani ispiti
        <ul className="lista" id="listaIspita" >
            {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default KreiraniIspiti