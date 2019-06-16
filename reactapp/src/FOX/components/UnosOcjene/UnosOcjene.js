import React, { Component} from 'react';
import Ocjena from '../Ocjena/Ocjena';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class UnosOcjene extends Component {
     render()
     {
         return (
            <div>
                <Header isPocetna={false}/>
                <Ocjena/>
                <Footer/>
            </div>        
         );
     }
}
export default UnosOcjene;