import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import'./golf.css'

class Semestri6 extends Component{
    render(){
        return(
            <div className="treci">
                    <Link to={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/1'}>
                        <button type="button" class="btn btn-primary" id="mpl">1. semestar</button>
                    </Link>
					<Link to={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/2'}>
                        <button type="button" class="btn btn-primary" id="mpl">2. semestar</button>
                    </Link>
                    <Link to={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/3'}>
                        <button type="button" class="btn btn-primary" id="mpl">3. semestar</button>
                    </Link>
                    <Link to={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/4'}>
                        <button type="button" class="btn btn-primary" id="mpl">4. semestar</button>
                    </Link>    
                    <Link to={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/5'}>
                        <button type="button" class="btn btn-primary" id="mpl">5. semestar</button>
                    </Link>    
                    <Link to={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/6'}>
                        <button type="button" class="btn btn-primary" id="mpl">6. semestar</button>
                    </Link>    
            </div>
        )
    }
}

export default Semestri6
