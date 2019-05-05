import React, { Component} from 'react'
import Odsjeci from './Odsjeci'

class ciklusi extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kliknut: false,
            kliknut1: false,
            kliknut2: false
        }

        this.Otvori = this.Otvori.bind(this)
    }

    Otvori(br){
       if(br==1)
        this.setState({
            kliknut: !this.state.kliknut
        })
        else if(br==2)  this.setState({
           kliknut1: !this.state.kliknut1
        })
        else {
             this.setState({
            kliknut2: !this.state.kliknut2
         })
        }
    }
  
    render() {
        return(
            <div id="navv" >
                <ul class="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => this.Otvori(1)}>
                        <a href='#'>Prvi ciklus</a>
                    </li>
                    {this.state.kliknut && <Odsjeci parametar = "prvi"/>}
                    <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => this.Otvori(2)}>
                        <a href='#'>Drugi ciklus</a>
                    </li>
                    {this.state.kliknut1 && <Odsjeci parametar = "drugi"/>}
                    <li className="list-group-item d-flex justify-content-between align-items-center" onClick={() => this.Otvori(3)}> 
                        <a href='#'>Treci ciklus</a>
                    </li> 
                    {this.state.kliknut2  && <Odsjeci parametar = "treci"/>}
                </ul>
            </div>
        )
    }
}

export default ciklusi