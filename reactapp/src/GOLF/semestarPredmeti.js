import React, { Component} from 'react'
import SviPredmeti from './SviPredmeti';

class semestarPredmeti extends Component {

	 
    render() {
		
	const{match: { params}}=this.props;
	this.state={
      predmetisemestra: [
        {
          id: 11,
          naziv: 'Softver inženjering',
          opis: 'A discipline that deals with the building of software systems which are so large that they are built by a team or teams of engineers.'
        },
        {
          id: 12,
          naziv: 'Vještačka inteligencija',
          opis: 'Mogućnost primjere napredne tehnologije kao što je MATLAB –SIMULINK-FUZZY LOGIC TOOLBOX-NEURAL NETWORK TOOLBOX-GENETIC ALGORITHM TOOLBOX razvojno okruženje pri implementaciji sistema VI.'
        }
      ]
  }
	
        return(
            <div>
			
			<h1>{'Ciklus: ' + params.ciklus}</h1>
			<h1>{'Odsjek: ' + params.odsjek}</h1>
            <h1>{'Semestar: ' + params.semestar}</h1>

            <SviPredmeti predmeti={this.state.predmetisemestra} />
            </div>
        )
    }
}

export default semestarPredmeti