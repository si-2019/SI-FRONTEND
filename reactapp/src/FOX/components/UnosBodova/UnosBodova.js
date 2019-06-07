import React, { Component} from 'react';
import TabelaUnosa from '../TabelaUnosa/TabelaUnosa';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class UnosBodova extends  Component {
state = {
        ispit: [
            {
             prvirok1: "I parcijalni",
             datum1:   "10.4.2019.",
             prvirok2:  "II parcijalni",
             datum2: "20.5.2019",
             drugirok1: "Popravni I parcijalni",
             datum3: "20.6.2019.",
             drugirok2:  "Popravni II parcijalni",
             datum4: "20.7.2019",
             trecirok: "Septembarski popravni",
             datum: "1.9.2019"
            }
        ]
}

render() {
    return(
        <div>
            <Header isPocetna={false}/>
            <TabelaUnosa/>
            <Footer/>
          </div>
        );
    }
}
export default UnosBodova;






