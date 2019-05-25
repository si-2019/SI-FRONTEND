import React, {Component} from 'react';

class DugmeZaSort extends Component{
    constructor(props) {
        super(props);
        this.state={
            select_1: '1',
            select_2: '1'
        }
      }
    
    handleSelectPrvi = (event) => {
        this.setState({select_1:event.target.value});
    }

    handleSelectDrugi = (event) => {
        this.setState({select_2:event.target.value});
    }
    
    sortirajAZ = (niz) => {
        niz.sort(function(a,b){
          var textA = a.title.toUpperCase();
          var textB = b.title.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    
    sortirajPoBrojuKomentara = (niz) => {
        niz.sort(function(a,b){
                      var textA = a.brojKomentara
                      var textB = b.brojKomentara
                      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
    }
    
    sortirajPoDatumuKreiranja = (niz) =>{
        niz.sort(function(a,b){
                      var textA = a.timeCreated;
                      var textB = b.timeCreated;
                      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
    }
    
    
    pozoviFunkcijeSortiranja = (event) => {
        const odDo = this.state.select_1;
        const sort = this.state.select_2;
        let niz= this.props.teme;
        let obrnut= this.props.obrnut;
        if(odDo==='1' && sort==='1'){
            this.sortirajAZ(niz);
             if(obrnut) {niz.reverse(); obrnut=false;}
        }
        if(odDo==='1' && sort==='2') {
            this.sortirajPoDatumuKreiranja(niz);
            if(obrnut) {niz.reverse(); obrnut=false;}
        }
        if(odDo==='1' && sort==='3') {
            this.sortirajPoBrojuKomentara(niz);
            if(obrnut) {niz.reverse(); obrnut=false;}
        }
        if(odDo==='2' && sort==='1') {
            this.sortirajAZ(niz);
            if(!obrnut) {niz.reverse(); obrnut=true;}
        }
        if(odDo==='2' && sort==='2'){
            this.sortirajPoDatumuKreiranja(niz);
            if(!obrnut) {niz.reverse(); obrnut=true;}
        }
        if(odDo==='2' && sort==='3') {
            this.sortirajPoBrojuKomentara(niz);
            if(!obrnut) {niz.reverse(); obrnut=true;}
        }
        this.props.sortirajNiz(niz, obrnut);
        
    }
    
    render() {

          return(
            <form className="d-inline-flex justify-content-end p-2 bd-highlight">
                <select value={this.state.select_1} onChange={this.handleSelectPrvi} className="form-control" id='sr' >
                    <option value='1'>Manji -> veci</option>
                    <option value='2'>Veci -> manji</option>
                </select>
  
                <select value={this.state.select_2} onChange={this.handleSelectDrugi} className="form-control" id='ss' >
                    <option value='1'>A-Z</option>
                    <option value='2'>Datum</option>
                    <option value='3'>Komentari</option>
                </select>
  
                <input className="btn btn-info" type='button' value='sortiraj' 
                    onClick={this.pozoviFunkcijeSortiranja}></input> 
            </form>
          );
    }
    

}

export default DugmeZaSort;