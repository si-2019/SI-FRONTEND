import React from 'react'
import {withRouter} from 'react-router-dom';
import ReactTable from 'react-table'
import StudentiTabela from './StudentiTabela';
import Table from 'react-bootstrap/Table';

const dataX = [{
    tip: 'I parcijalni',
    datum: '22.03.2019.',
    sala: 'S-01',
    brstudenata: '100'
    
  },
  {
      tip: 'II parcijalni',
      datum: '28.06.2019.',
      sala: 'S-09',
      brstudenata: '120'  
  },
  {
      tip: 'Usmeni',
      datum: '03.07.2019',
      sala: 'VA',
      brstudenata: '47'
      
  }];
class TabelaPredmeti extends  React.Component {
    constructor(props){
        super(props);
        this.state = {
            studenti : false,
            data: dataX
        }
    }
    funkcija = (e) =>{
        console.log("X",e.target.getAttribute('value'));
        let dataNova;
        for(let i = 0; i<3; i++){
            if(this.state.data[i].tip === e.target.getAttribute('value')){
                dataNova = {
                    tip: this.state.data[i].tip,
                    datum: this.state.data[i].datum,
                    sala: this.state.data[i].sala,
                    brstudenata: this.state.data[i].brstudenata
                }
            }
        }
        if(dataNova !== null){
            this.setState({
                studenti: true,
                data: dataNova
            })
        }
        
    }
    redirectt = (e) => {
        window.location.replace("/charlie/kreiraj-ispit-detalji");
        //this.props.history.push('/charlie/kreiraj-ispit-detalji');
    }
    render() {
        const data2 = this.state.data;
        var brojac = 0;
        console.log(data2);       
        return (
            <div className="text-center">
                {this.state.studenti === false && 
                    <Table striped bordered responsive bsPrefix="table">
                    <thead>
                        <tr className="table-primary">
                            <th>Tip</th>
                            <th>Datum</th>
                            <th>Sala</th>
                            <th>BrStudenata</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data2.map((dataf, i) => {
                            return <tr>
                                <td onClick={this.funkcija} value={data2[brojac++].tip}>{dataf.tip}</td>
                                <td>{dataf.datum}</td>
                                <td>{dataf.sala}</td>
                                <td>{dataf.brstudenata}</td>
                            </tr>                            
                        })
                        }
                    </tbody>
                    </Table>
                }

                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.redirectt}> Registruj novi ispit
                </button>

                {this.state.studenti===true && <StudentiTabela tipIspita={this.state.data.tip}/>}
            </div>
        );
      }
      
}



export default withRouter(TabelaPredmeti);