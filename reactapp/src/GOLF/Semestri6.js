import React, { Component } from 'react'
import'./golf.css'

class Semestri6 extends Component{
    render(){
        return(
            <div className="treci">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/prvi'}> 1. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/drugi'}> 2. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/treci'}> 3. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/cetvrti'}> 4. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/peti'}> 5. semestar</a>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                     <a href={'/Golf/semestarPredmeti/'+this.props.ciklus+'/'+this.props.odsjek+'/sesti'}> 6. semestar</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Semestri6
