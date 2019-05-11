import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TabelaPregledaZadaca from "./tabelaPregledaZadaca";
import { taggedTemplateExpression } from "@babel/types";
import PrviPutSlanjeZadatka from "./prviPutSlanjeZadatka";
import ZadatakVecPoslan from "./zadatakVecPoslan";

//user story 68 i user story 66 pushani skupa
class Student extends Component{
    constructor(props) {
        super(props);
    }
    
      render() {
        
        return (
          <div>
           
           <ZadatakVecPoslan></ZadatakVecPoslan>
          </div>
        ); 
    }
}

export default Student;