import React, { Component} from 'react'
import SviPredmeti from './SviPredmeti';
import axios from 'axios';


class semestarPredmeti extends Component {

  state={
    predmeti: []
  }

  componentDidMount(){
    axios.get(`http://localhost:31907/r1/predmeti/${this.props.match.params.ciklus}/${this.props.match.params.odsjek}/${this.props.match.params.semestar}`).then(res => {
      const predmeti = res.data;
      this.setState({
        predmeti:predmeti.predmeti
      });
    })
  }
	 
  render() {

    return(
      <div>
        <SviPredmeti predmeti={this.state.predmeti} semestar={this.props.match.params.semestar}/>
      </div>  
    )
  }
}

export default semestarPredmeti