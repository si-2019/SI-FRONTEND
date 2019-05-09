import React from 'react';
import url from '../url'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        }
    }
    render() {
        const items = this.state.items
        return (
            <div>
                <nav class="NavPadding">
                <h2>POPUNJENE ANKETE</h2>
                <div class="collapse navbar-collapse" id="navbarAnkete"> </div>
            </nav>

            <br></br>

                {items.ankete ? items.ankete.map(anketa => (
                    <div>
                        {anketa.naziv}
                    </div>
                )) : "Loading..."}
            </div>
        )
    }
    componentDidMount() { 
        fetch(url + '/dajAnkete', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(result => {
            this.setState({
                items: result
            })
        }, error => {
            this.setState({
                items: [error, "error"]
            })
        })
    }
}

export default App;