import React, { Component, Fragment } from 'react';
import { Form, Label } from 'reactstrap';
import './FormaZaKreiranjeProjektaNaNivouPredmeta.css';
import { format } from 'url';

class KreiranjeProjekta extends Component {
    
    kreirajFromu() {
        return (
            <div> 
                <form class="form-style-7">
                    <ul>
                        <li>
                            <label for="name">Naziv projekta</label>
                            <input type="text" name="name" maxlength="100"/> 
                            <span>Unesite naziv projekta</span>
                        </li>
                        <li>
                            <label for="description">Opis projekta</label>
                            <textarea name="projectDescription"  maxlength="500"></textarea>
                            <span>Unesite opis projekta</span>
                        </li>
                        <li>
                            <label for="assistent">Predmetni asistent</label>
                            <div class="select-option">
                                    <select id="pickupAssistent" name="pickupAssistent">
                                        <option value="" selected="selected">Odaberite asistenta</option>
                                        <option value="assistent1" >Haso Hasic</option>
                                        <option value="assistent2" >Mujo Mujic</option>
                                        <option value="assistent3" >Huso Husic</option>
                                    </select>
                            </div>
                            <span>Odaberite predmetnog asistenta</span>
                        </li>
                        <li class="points">
                            <label >Broj moguće ostvarenih bodova</label>
                            <input type="number" name="count" /> 
                            <span>Unesite broj bodova</span>
                        </li>
                        <li class="points">
                            <label >Broj trenutno ostvarenih bodova</label>
                            <input type="number" name="count" /> 
                            <span>Unesite broj bodova</span>
                        </li>
                        <li class="input-append date form_datetime">
                            <label >Rok završetka projekta</label>
                                <input size="16" type="date" />
                                <span class="add-on"><i class="icon-th"></i></span>
                            <span>Unesite rok završetka projekta</span>
                        </li>
                        <li>
                            <label for="comment">Komentar na projekat</label>
                            <textarea name="projectComment"  maxlength="500"></textarea>
                            <span>Unesite komentar na projekat</span>
                        </li>
                        <li>
                            <input type="submit" value="Uredu" />
                        </li>
                    </ul>
                </form>
            </div>
                
        );
            
      }  
      render(){
          return(
            <Fragment>
                <Form>
                    <label class ="headerForm" >Kreiranje novog projekta:</label>
                    {this.kreirajFromu()}
                </Form>
            </Fragment>
          );
      }
}
export default KreiranjeProjekta;