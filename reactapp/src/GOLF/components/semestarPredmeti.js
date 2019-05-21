import React, { Component} from 'react'
import SviPredmeti from './SviPredmeti';
import axios from 'axios';


class semestarPredmeti extends Component {

  state={
    predmeti: []
  }

  componentDidMount(){
  }

  componentWillReceiveProps(props){
    let { ciklus, odsjek, semestar } = props.match.params;
    axios.get(`http://localhost:31907/r1/predmeti/${ciklus}/${odsjek}/${semestar}`).then(res => {
      const predmeti = res.data;
      this.setState({
        predmeti:predmeti.predmeti
      });
    })
  }
	 
  render() {

    return(
      <div>
        <SviPredmeti predmeti={this.state.predmeti}/>
      </div>  
    )
  }
}

export default semestarPredmeti