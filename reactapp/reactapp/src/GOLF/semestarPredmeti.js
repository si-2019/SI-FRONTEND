import React, { Component} from 'react'

class semestarPredmeti extends Component {

	 
    render() {
		
	const{match: { params}}=this.props;
	
        return(
            <div>
			
			<h1>{'Ciklus: ' + params.ciklus}</h1>
			<h1>{'Odsjek: ' + params.odsjek}</h1>
            <h1>{'Semestar: ' + params.semestar}</h1> 
            </div>
        )
    }
}

export default semestarPredmeti