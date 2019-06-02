import React, { Component} from 'react'
import'./golf.css'
import Semestri6 from './Semestri6'
import Semestri4 from './Semestri4'

class Odsjeci extends Component {

    constructor(props){
        super(props)

        this.state = {
            kliknutRI: false,
            kliknutAiE: false,
            kliknutEE: false,
            kliknutTK: false
        }
    }

    Otvori(br){
        if(br==1) {
            this.setState({
                kliknutRI: !this.state.kliknutRI
            })
        }
        else if(br==2){
                this.setState({
                    kliknutAiE: !this.state.kliknutAiE
            })
        }
        else if(br==3){
            this.setState({
                kliknutEE: !this.state.kliknutEE
            })
        }
        else {
            this.setState({
                kliknutTK: !this.state.kliknutTK
            })
        }
    } 

    render(){
        return(
            <div id="drugi">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(1)}>
                    <a href='#'>   Računarstvo i informatika</a>
                    </li>
                    {this.state.kliknutRI && this.props.ciklus == "prvi" &&<Semestri6 ciklus={this.props.ciklus} odsjek='ri'> </Semestri6> || this.state.kliknutRI  && <Semestri4 ciklus={this.props.ciklus} odsjek='ri'></Semestri4>}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(2)}>
                    <a href='#'>     Automatika i elektronika</a>
                    </li>
                    {this.state.kliknutAiE && this.props.ciklus == "prvi" && <Semestri6 ciklus={this.props.ciklus} odsjek='aie'> </Semestri6> || this.state.kliknutAiE  && <Semestri4 ciklus={this.props.ciklus} odsjek='aie'></Semestri4>}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(3)}>
                    <a href='#'> Elektroenergetika</a>
                    </li>
                    {this.state.kliknutEE && this.props.ciklus == "prvi" && <Semestri6 ciklus={this.props.ciklus} odsjek='ee'> </Semestri6> || this.state.kliknutEE  && <Semestri4 ciklus={this.props.ciklus} odsjek='ee'></Semestri4>}
                    <li class="list-group-item d-flex justify-content-between align-items-center" onClick = {() => this.Otvori(4)}>
                    <a href='#'> Telekomunikacije</a>
                    </li>
                    {this.state.kliknutTK && this.props.ciklus == "prvi" && <Semestri6 ciklus={this.props.ciklus} odsjek='tk'> </Semestri6> || this.state.kliknutTK  && <Semestri4 ciklus={this.props.ciklus} odsjek='tk'></Semestri4>}
                </ul>
            </div>
        )
    }
}

export default Odsjeci