import React, { Component, Fragment } from 'react';
import { Form, Label } from 'reactstrap';
import './bootstrapflatly.css';
import BrisanjeClanova from './BrisanjeClanovaGrupe';


class IzborVodje extends Component {
    constructor(props){
        super(props);
        this.state={
          forma:"null"
        }
        this.sacuvajVodju=this.sacuvajVodju.bind(this);
        this.brisanjeClanova=this.brisanjeClanova.bind(this);
    }

    kreirajFormu() {
        
        return (
            <div className="col-lg-4"> 
                <form class="forma" id="formaIzbor">

                <label >Projektna grupa</label>
                            <div class="select-option">
                                    <select  className="form-control" id="selectGrupe"  >
                                        <option  className="list-group-item" value="" selected="selected">Odaberite grupu</option>
                                        <option className="list-group-item" value="grupa1" >Grupa 1</option>
                                        <option className="list-group-item" value="grupa2" >Grupa 2</option>
                                        <option className="list-group-item" value="grupa3" >Grupa 3</option>
                                    </select>

                                    
                            </div>
                           
                        <br/>
                            <label  for="name">Unesite vodju za odabranu grupu:</label>
                            
                       
                           
                            <input type="text" className="form-control inputText"  />

                            <br/>
                            <button className="btn btn-primary" onClick={this.brisanjeClanova}>Nazad</button>
                            <input type="submit" className="btn btn-primary" value="Potvrdi" onClick={this.sacuvajVodju}/>
                           
                       
                            
                       
                       
                </form>
            </div>
                
        );
            
      }  
      render(){
        if(this.state.forma=="null") {
          return(
            <Fragment>
                <Form>
                    <h3 >Izbor vodje: </h3>
                    {this.kreirajFormu()}
                </Form>
            </Fragment>
          );
        }
        else if (this.state.forma=="brisanjeClanova") {
            return( 
                <BrisanjeClanova/>
            )
        }
      }

      sacuvajVodju() {
      /*  var ajax=new XMLHttpRequest();
        ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && ajax.status=="200"){
                
            }
        }
        ajax.open("POST","http://localhost:31913/services/group/selectleader",true);
        ajax.setRequestHeader("Content-type", "application/json");
        ajax.send();*/
        alert("Uspjesno odabran!");
      }

      brisanjeClanova() {
        this.setState({forma:"brisanjeClanova"});
      }
      
}
export default IzborVodje;
