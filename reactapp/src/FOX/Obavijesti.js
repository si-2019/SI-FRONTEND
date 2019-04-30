import React, {Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Obavijesti extends Component {
    render() {
        return (
          <div className="Obavijesti">
            <Header isPocetna={false } />
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
                <br>
                Obavijesti
                </br>
            </div>
            <div class= "col-sm-6">
            </div>
            <Footer/>
          </div>

        );
    }

}
export default Obavijesti;