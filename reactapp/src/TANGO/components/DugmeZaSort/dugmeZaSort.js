import React, {Component} from 'react';

class DugmeZaSort extends Component{
    constructor(props) {
        super(props);
        this.pozoviFunkcijeSortiranja.bind(this);
        
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
    
    
    pozoviFunkcijeSortiranja(niz, obrnut,selectRedosljed, selectSort) {
        const sr=document.getElementById(selectRedosljed);
        const ss=document.getElementById(selectSort);
        //console.log(this.ss)
        var odDo=sr.options[sr.selectedIndex].value;
        var sort=ss.options[ss.selectedIndex].value;
        console.log(odDo);
        console.log(sort);
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
    componentDidMount(){
        // const sr=document.getElementById('sr');
        // const ss=document.getElementById('ss');
        // const odDo=sr.selectedIndex;
        // const sort=ss.selectedIndex;
        // this.setState({indexSr:odDo, indexSs:sort});
        // console.log(this.state.indexSr);
    }
    
    render() {
          return(
            <div className="d-inline-flex justify-content-end p-2 bd-highlight">
                <select className="form-control" id='sr' >
                    <option value='1'>Manji -> veci</option>
                    <option value='2'>Veci -> manji</option>
                </select>
  
                <select className="form-control" id='ss' >
                    <option value='1'>A-Z</option>
                    <option value='2'>Datum</option>
                    <option value='3'>Komentari</option>
                </select>
  
                <input className="btn btn-info" type='button' value='sortiraj' 
                    onClick={()=>{this.pozoviFunkcijeSortiranja(this.props.teme, this.props.obrnut,'sr','ss')}}></input> 
            </div>
          );
    }
    

}

export default DugmeZaSort;