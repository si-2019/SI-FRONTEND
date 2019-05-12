import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

  class ListaGrupa extends Component {
    constructor(props){
      super();
    }
    state={ redirect:false}
    setRedirect = ()=>{
        this.setState({
            redirect:true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/#' />
        }
      }
    render(){
      return (
        <form>
          <fieldset>
            <div>
              <Select />        
            </div>
          </fieldset>
         </form>
      )
    }
  }
  
  class Select extends Component {
    constructor(props){
      super();
      this.state = {
        tech: 'Grupe: '
      };
    }
    handleChange(e){
      this.setState({
        tech: e.target.value
      })
    }
    render(){
      return (
        <div>
         <h2>{this.state.tech}</h2>
          <select id="dropdown" onChange={this.handleChange.bind(this)} value={this.state.tech}>
            <option value="Lista grupa">Odaberite grupu</option>
            <option value="Grupa 1">Grupa 1</option>
            <option value="Grupa 2">Grupa 2</option>
            <option value="Grupa 3">Grupa 3</option>
            <option value="Grupa 3">Grupa 4</option>
          </select>
          <button id="dugme" style={{ "margin": "2%", "height":"20px" , "width": "80px"}}  onClick={this.setRedirect}> OK</button>
         
        </div>
      )
    }
  }

  export default ListaGrupa;