import React, { Component } from 'react';
class Bodovi extends Component {  
    state = {postotakBodova: 55}

    getProgressBarStil = ()=>{
        const stringicBodovi = this.state.postotakBodova+"%";
        var boja = 'red';
        if (this.state.postotakBodova < 55)
            boja = 'red';
        else if (this.state.postotakBodova >= 55 && this.state.postotakBodova < 80)
            boja  = 'yellow';
        else
            boja = 'green';
        return {width: stringicBodovi, background : boja};
    }

    render () {

        return(
            <div className="row">
            <div className="col-3">
                <b>Ispiti</b>
            </div>
            <div className="col-6">
                <div class="progress" style={{width:250, height:25,  margin:5}} >
                    <div class="progress-bar" role="progressbar" style={this.getProgressBarStil()}  aria-valuenow={this.state.postotakBodova} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodova}%</div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Bodovi;