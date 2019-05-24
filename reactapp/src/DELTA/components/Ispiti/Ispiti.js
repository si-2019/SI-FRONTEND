import React, { Component } from 'react';
class Ispiti extends Component {  
    state = {postotakBodovaZadace:33, postotakBodovaIspiti:70}


    render () {
        const stringicIspiti = this.state.postotakBodovaIspiti+"%";

        return(
            <div className="row">
            <div className="col-3">
                <b>Ispiti</b>
            </div>
            <div className="col-6">
                <div class="progress" style={{width:250, height:25,  margin:5}} >
                  <div class="progress-bar" role="progressbar" style={{width: stringicIspiti}}  aria-valuenow={this.state.postotakBodovaIspiti} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodovaZadace}%</div>
                </div>
            </div>
              <div className="col-3">
              <a class="btn btn-primary btn-block" href="/Charlie" role="button">Ispiti </a>
            </div>
           </div>
        );
    }
}

export default Ispiti;