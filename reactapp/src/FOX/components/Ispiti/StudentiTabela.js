import React from 'react'
import {withRouter} from 'react-router-dom';
import ReactTable from 'react-table'

class TabelaPredmeti extends  React.Component {
    constructor(props){
        super(props);
        var dataY;
        if(this.props.tipIspita === 'I parcijalni'){
            dataY = [{
                Ime: 'Amer',
                Prezime: 'Abaz',
                Bodovi: '4',
                Index: '17468'                
              },
              {
                Ime: 'Azra',
                Prezime: 'Abazović',
                Bodovi: '9',
                Index: '17320'                
              },
              {
                Ime: 'Adna ',
                Prezime: 'Aličić',
                Bodovi: '12',
                Index: '17664'                
              },
              {Prezime:'Abaz', Ime:'Amer', Bodovi:'10', Index:'17468' }, 
              {Prezime:'Abazović', Ime:'Azra', Bodovi:'12', Index:'17320' }, 
              {Prezime:'Abazović', Ime:'Dženir', Bodovi:'1', Index:'17290' }, 
              {Prezime:'Aćimović', Ime:'Dejan', Bodovi:'19', Index:'17328' }, 
              {Prezime:'Adilović', Ime:'Belmin', Bodovi:'13', Index:'17602' }, 
              {Prezime:'Aganović', Ime:'Tarik', Bodovi:'10', Index:'17391' }, 
              {Prezime:'Ahmetspahić', Ime:'Jan', Bodovi:'20', Index:'17441' }, 
              {Prezime:'Ajdinović', Ime:'Haris', Bodovi:'10', Index:'17510' }
            ];
        }
        else if(this.props.tipIspita === 'II parcijalni'){
            dataY = [{
                Ime: 'Ajla',
                Prezime: 'Abazović',
                Bodovi: '17',
                Index: '17585'                
              },
              {
                Ime: 'Edin',
                Prezime: 'Brkić',
                Bodovi: '13',
                Index: '17300'                
              },
              {
                Ime: 'Benjamin',
                Prezime: 'Čovčić',
                Bodovi: '6',
                Index: '17435'                
              },
              {Prezime:'Kapić', Ime:'Amna', Bodovi:'10', Index:'17669' }        ,  
                {Prezime:'Karakaš', Ime:'Dino', Bodovi:'2', Index:'17454' }     ,
                {Prezime:'Muzurović', Ime:'Amina', Bodovi:'12', Index:'17519' }   ,  
                {Prezime:'Nišić', Ime:'Esma', Bodovi:'19', Index:'17677' }        ,  
                {Prezime:'Karadža', Ime:'Adil', Bodovi:'13', Index:'17317' }      ,  
                {Prezime:'Aganović', Ime:'Tarik', Bodovi:'10', Index:'17391' }    ,  
                {Prezime:'Kapo', Ime:'Muhamed', Bodovi:'20', Index:'17384' }      ,  
                {Prezime:'Kapetanović', Ime:'Eldin', Bodovi:'10', Index:'17412' } 
            ];
        }
        else{
            dataY = [{
                Ime: 'Hamo',
                Prezime: 'Jazvin',
                Bodovi: '1',
                Index: '17570'                
              },
              {
                Ime: 'Elvin',
                Prezime: 'Jažić',
                Bodovi: '17',
                Index: '17551'                
              },
              {
                Ime: 'Sadik',
                Prezime: 'Jukić',
                Bodovi: '14',
                Index: '17442'                
              },
              {Prezime:'Abaz', Ime:'Amer', Bodovi:'10', Index:'17468' }, 
              {Prezime:'Abazović', Ime:'Azra', Bodovi:'12', Index:'17320' }, 
              {Prezime:'Abazović', Ime:'Dženir', Bodovi:'1', Index:'17290' }, 
              {Prezime:'Aćimović', Ime:'Dejan', Bodovi:'19', Index:'17328' }, 
              {Prezime:'Adilović', Ime:'Belmin', Bodovi:'13', Index:'17602' }, 
              {Prezime:'Aganović', Ime:'Tarik', Bodovi:'10', Index:'17391' }, 
              {Prezime:'Ahmetspahić', Ime:'Jan', Bodovi:'20', Index:'17441' }, 
              {Prezime:'Ajdinović', Ime:'Haris', Bodovi:'10', Index:'17510' }
            ];
        }
        this.state = {
            studenti : false,
            data: dataY
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
          Header: 'Ime',
          accessor: 'Ime',
          Cell: props => <span>{props.value}</span>
        },
        {
          Header: 'Prezime',
          accessor: 'Prezime',
          Cell: props => <span>{props.value}</span>
        },
        {
          Header: 'Bodovi',
          accessor: 'Bodovi',
          Cell: props => <span>{props.value}</span>
        },
        {
          Header: 'Index',
          accessor: 'Index',
          Cell: props => <span>{props.value}</span>
        }]
        return (
            <div>
                <ReactTable
                data={data2}
                columns={columns}
                />
            </div>
        );
      }
      
}


export default withRouter(TabelaPredmeti);