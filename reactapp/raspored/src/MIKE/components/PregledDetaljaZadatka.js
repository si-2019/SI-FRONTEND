import React from "react";

class DetaljiZadatka extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }
    
     
    
      
    render() {
       
        return (
          <form  >
            <label class = "text">
              idProjekta:
            </label> 
              <label></label>
              <br/>
            <label class = "text">
              Opis projekta:
            </label>
            <label></label>
            <br/>
            <label class = "text">
            Datum pocetka:
            </label>
            <label></label>
            <br/>
            <label class = "text">
            Datum zavrsetka:
            </label>
            <label></label>
            <br/>
            <label class = "text">
            Komentar asistenta:
            </label>
            <label></label>
            <br/>
           
          </form>
        );
      }

}
export default DetaljiZadatka;
