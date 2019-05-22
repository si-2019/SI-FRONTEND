import React, { Component } from 'react'
import'./golf.css'

class Semestri6 extends Component{
    render(){
        return(
            <div className="treci">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/1'}> 1. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/2'}> 2. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/3'}> 3. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/4'}> 4. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/5'}> 5. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/6'}> 6. semestar</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Semestri6
