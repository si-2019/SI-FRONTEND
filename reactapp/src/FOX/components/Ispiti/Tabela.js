import React from 'react'
import {withRouter} from 'react-router-dom';
import ReactTable from 'react-table'
import StudentiTabela from './StudentiTabela';

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
    render() {
        const data2 = this.state.data;
        var brojac = 0;
        console.log(data2);
        const columns = [{
          Header: 'Tip',
          accessor: 'tip',
          Cell: props => <span onClick={this.funkcija} value={data2[brojac++].tip}>{props.value}</span>
        },
        {
          Header: 'Datum',
          accessor: 'datum',
          Cell: props => <span className='datum'>{props.value}</span>
        },
        {
          Header: 'Sala',
          accessor: 'sala',
          Cell: props => <span className='sala'>{props.value}</span>
        },
        {
          Header: 'BrStudenata',
          accessor: 'brstudenata',
          Cell: props => <span className='brstudenata'>{props.value}</span>
        }]
       
        return (
            <div>
                {this.state.studenti===false && <ReactTable
                data={data2}
                columns={columns}
                />}
                {this.state.studenti===true && <StudentiTabela tipIspita={this.state.data.tip}/>}
            </div>
        );
      }
      
}


export default withRouter(TabelaPredmeti);