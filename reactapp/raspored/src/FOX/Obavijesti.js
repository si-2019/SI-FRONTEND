import React, {Component } from 'react';
import Footer from './components/Footer/Footer';

class Obavijesti extends Component {
    render() {
        return (
          <div className="Obavijesti">
           <br> </br>
            <div class="col-sm-6"> 
            </div>
            <div class="col-sm-6">
               <h1> Obavijesti  </h1>
               <br>  </br>
               <br> </br>
               <br> </br>
               <form>
                    <label> Naslov: </label>
                    <input type="text" class="form-control"></input>
                </form>
            </div>
            <div class="col-sm-6">
            </div>
           <br> </br>
            <Footer/>
          </div>
        );
    }

}
export default Obavijesti;
