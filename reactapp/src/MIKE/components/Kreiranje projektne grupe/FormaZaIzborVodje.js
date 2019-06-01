import React, { Component, Fragment } from 'react';
import { Form, Label } from 'reactstrap';


class IzborVodje extends Component {
    kreirajFormu() {
        return (
            <div> 
                <form class="forma" id="formaIzbor">

                <label for="assistent">Projektna grupa</label>
                            <div class="select-option">
                                    <select id="selectGrupe" >
                                        <option value="" selected="selected">Odaberite grupu</option>
                                        <option value="grupa1" >Grupa 1</option>
                                        <option value="grupa2" >Grupa 2</option>
                                        <option value="grupa3" >Grupa 3</option>
                                    </select>
                            </div>
                           
                        <br/>
                            <label for="name">Unesite vodju za odabranu grupu:</label>
                            
                       
                           
                            <textarea id="textVodja"></textarea>
                            <br/>
                            <input type="submit" value="Potvrdi" />
                           
                       
                            
                       
                       
                </form>
            </div>
                
        );
            
      }  
      render(){
          return(
            <Fragment>
                <Form>
                    <label class ="headerForm" >Izbor vodje:</label>
                    {this.kreirajFormu()}
                </Form>
            </Fragment>
          );
      }
}
export default IzborVodje;
