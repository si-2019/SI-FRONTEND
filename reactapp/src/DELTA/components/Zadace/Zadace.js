

import React, { Component } from 'react';
import { object } from 'prop-types';
class Zadace extends Component {  
    state = {postotakBodovaZadace:33, postotakBodovaIspiti:70}

    getProgressBarStil = ()=>{
        const stringicZadace = this.state.postotakBodovaZadace+"%";
        var boja = 'red';
        if (this.state.postotakBodovaZadace < 40)
            boja = 'red';
        else if (this.state.postotakBodovaIspiti >= 40 && this.state.postotakBodovaZadace < 70)
            boja  = 'yellow';
        else
            boja = 'green';
        return {width: stringicZadace, background : boja};
    }

    render () {
        

        return(
            <div className="row">
            <div className="col-3">
                <b>Zadaće i projekti</b>
            </div>
            <div className="col-6">
                <div class="progress"  style={{width:250, height:25,  margin:5}}>
                  <div class="progress-bar" role="progressbar" style={this.getProgressBarStil()}  aria-valuenow={this.state.postotakBodovaZadace} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodovaZadace}%</div>
                </div>
            </div>
              <div className="col-3">
              <a class="btn btn-primary btn-block" href="/Kilo/student" role="button">Zadaće</a>
            </div>
           </div>
        );
    }
}

export default Zadace;



