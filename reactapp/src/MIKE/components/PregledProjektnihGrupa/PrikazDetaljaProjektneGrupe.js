import React from "react";

class DetaljiProjektneGrupe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }
    
     
    
      
    render() {
       
        return (
          <form  >
            <label class = "text">
              idProjektneGrupe:
            </label> 
            <br></br>
            <label>
                ID projekta:
            </label>
            <br></br>
            <label>
                Opis:
            </label>
            <br></br>
            <label>
                Prioritet:
            </label>
            <br></br>
            <label>
                Od kad:
            </label>
            <br></br>
            <label>
                Do kad:
            </label>
            <br></br>
            <labe>
                Zavrsen:
            </labe>
            <br></br>
            <label>
                Komentar asistenta:
            </label>
            
           
          </form>
        );
      }

}
export default DetaljiZadatka;
