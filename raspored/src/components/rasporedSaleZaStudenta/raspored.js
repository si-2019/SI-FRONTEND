import React, { Component } from 'react'

export class Raspored extends Component {
  render() {
    return (
      <React.Fragment>
        
      </React.Fragment>
    )
  }
}

const sortCriteria = (a,b) =>
  {  
    // sortiramo hronoloski  
      if ((a.datum<b.datum) || (a.datum===b.datum && a.vrijeme <b.vrijeme))
        return -1;
      if (a.datum===b.datum && a.vrijeme ===b.vrijeme)
        return 0;
      return 1;    
  }

const povecajVrijemePolaSata = (vrijeme) =>
  {
    // vrijeme je string
    // pretpostavljamo da je vrijeme polusatno npr. 09:30 ili 17:00
    // pretpostavljamo da je u validnom formatu

    if(vrijeme[0]==='2' && vrijeme[1]==='3')
    {
      if(vrijeme[3]==='3')
      vrijeme='00:00';
      else
      vrijeme='23:30';   
    }
    else
    {
      if(vrijeme[1]==='9')
      {
        if(vrijeme[3]==='3')
        vrijeme=(parseInt(vrijeme[0])+1).toString()+'0:00';
        else
        vrijeme=vrijeme[0]+'9:30';
      }
      else
      {
        if(vrijeme[3]==='3')
        vrijeme=vrijeme[0]+(parseInt(vrijeme[1])+1).toString()+':00';
        else
        vrijeme=vrijeme[0]+vrijeme[1]+':30';
      }
    }
    return vrijeme; 
  }

  const sljedeciDan = (datum) =>// funkcija vraca datum sljedeceg dana
  {
    var today = new Date(datum);
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    
    var dd = String(tomorrow.getDate()).padStart(2, '0');
    var mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //Januar je 0!
    var yyyy = tomorrow.getFullYear();

    datum = yyyy + '/' + mm + '/' + dd;
    
    return datum;

    
  }
  const prethodniDan = (datum) =>// funkcija vraca datum prethodnog dana
  {
    var today = new Date(datum);
    var yesterday = new Date();
    yesterday.setDate(today.getDate()-1);
    
    var dd = String(yesterday.getDate()).padStart(2, '0');
    var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //Januar je 0!
    var yyyy = yesterday.getFullYear();

    datum = yyyy + '/' + mm + '/' + dd;
    
    return datum;
    
  }

  const prviDanuSedmici = (datum) => //funkcija vraca prvi dan u sedmici u kojoj je taj datum
  {
    let datumNovi = new Date(datum);
    let brojIteracija = datumNovi.getDay()-1;
    if(brojIteracija == -1)
      brojIteracija = 6;    
    while(brojIteracija!=0)
    {
      datum=prethodniDan(datum);
      brojIteracija--;
    }
    return datum;
  }

// uuid nije obavezan al kreira unique id kad ga god pozoves
const days =[
  {
    id: uuid.v4(),
    title:'Ponedjeljak'
  },
  {
    id: uuid.v4(),
    title:'Utorak'
  },
  {
    id: uuid.v4(),
    title:'Srijeda'
  },
  {
    id: uuid.v4(),
    title:'Četvrtak'
  },
  {
    id: uuid.v4(),
    title:'Petak'
  },
  {
    id: uuid.v4(),
    title:'Subota'
  },
  {
    id: uuid.v4(),
    title:'Nedjelja'
  }
];


export default Raspored;
