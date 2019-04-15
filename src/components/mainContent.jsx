import React from "react";
import "./mainContent.css";
import OsnovniPodaciKreiranjaZadace from "./osnovniPodaciKreiranjaZadace";
import PrikazZadace from "./prikazZadace";

import { Button } from "reactstrap";

//import DateTimePicker from 'react-widgets/lib/DateTimePicker';
//import Globalize from 'globalize';
//import globalizeLocalizer from 'react-widgets-globalize';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predmetView: false,
      zadacaCreate: true,
      zadacaPreview: false,
      zadacaPreviewData: {
        naziv: "",
        datum: "",
        vrijeme: "",
        listaBodova: [],
        listaTipova: []
      }
    };
  }

  predmetViewClick = () => {
    this.setState({
      predmetView: true,
      zadacaCreate: false,
      zadacaPreview: false
    });
  };
  zadacaCreateClick = (data) => {
    this.setState({
      predmetView: false,
      zadacaCreate: true,
      zadacaPreview: false,
      zadacaPreviewData: data
    });
  };

  zadacaPreviewClick = data => {
    this.setState({
      predmetView: false,
      zadacaCreate: false,
      zadacaPreview: true,
      zadacaPreviewData: data
    });
  };

  render() {
    return (
      <div>
        {this.state.zadacaCreate && (
          <div
            className="formaKreiranjaZadace"
            class="p-1 d-flex justify-content-center"
          >
            <OsnovniPodaciKreiranjaZadace
              onZadacaPreviewDataSet={this.zadacaPreviewClick}     
              data={this.state.zadacaPreviewData}
              brojZadataka={(()=>{
                switch(this.state.zadacaPreviewData.listaBodova.length){
                  case 0 : return 1
                  default: return this.state.zadacaPreviewData.listaBodova.length
                }
              })()}  
            />
           
          </div>
        )}

         
        {this.state.zadacaPreview && (
          <PrikazZadace data={this.state.zadacaPreviewData}
          onZadacaCreateDataSet={this.zadacaCreateClick} 
          />
        )}
        {/*this.state.zadacaCreate && (
          <button
            type="button"
            className="btn bg-primary ml-3 "
            onClick={this.predmetViewClick} id="dugme">
            Povratak 
          </button>
        )*/} 
        

        {this.state.predmetView && (
          <Button
            type="button"
            className="btn bg-primary ml-3 "
            onClick={this.zadacaCreateClick}
          >
            Preview zadaće
          </Button>
        )}
        

      </div>
    );
  }
}

export default MainContent;
