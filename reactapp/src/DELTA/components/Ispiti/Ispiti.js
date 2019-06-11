import React, { Component } from 'react';
import axios from 'axios';

class Ispiti extends Component {  
    state = {postotakBodovaZadace:33, postotakBodovaIspiti:70, ispitiObavjestenje:""}

    async componentDidMount(){
        //hardkoridana vrijednost dok se ne kreira bekend za listu predmeta
        const idPredmeta=8;
        
        const {data} = await axios.get('http://localhost:31904/ispitObavjestenje/'+idPredmeta);
        this.setState({ispitiObavjestenje:data});
      }

    getProgressBarStil = ()=>{
        const stringicIspiti = this.state.postotakBodovaIspiti+"%";
        var boja = 'red';
        if (this.state.postotakBodovaIspiti < 40)
            boja = 'red';
        else if (this.state.postotakBodovaIspiti >= 40 && this.state.postotakBodovaIspiti < 70)
            boja  = 'yellow';
        else
            boja = 'green';
        return {width: stringicIspiti, background : boja};
    }

    render () {
        

        return(
            <div className="row">
            <div className="col-3">
                <b className="text-left">Ispiti</b>
            </div>
            <div className="col-6">
                <div class="progress" style={{width:250, height:25,  margin:5}} >
                  <div class="progress-bar" role="progressbar" style={this.getProgressBarStil()}  aria-valuenow={this.state.postotakBodovaIspiti} aria-valuemin="0" aria-valuemax="100">{this.state.postotakBodovaIspiti}%</div>
                </div>
            </div>
              <div className="col-3">
                
                        <a class="btn btn-primary btn-block" href="/Charlie" role="button">Ispiti</a>
                        <div className="row">
                        <p class="text-danger" style={{padding:"10px"}}>{this.state.ispitiObavjestenje}</p>
                  </div>
                  
              
            </div>
           </div>
        );
    }
}

export default Ispiti;