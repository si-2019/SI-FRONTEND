import react,{useState} from 'react'

function Obavjestenje(props){
    //logika citanja/konverzije props
   // var porukica=JSON.stringify(props); //Kasnije
  //  console.log(porukica);

    if(props) 
        alert("Vaš issue je uspješno poslan!")
    
       
        else {
             alert("Greška!\nVaš issue nije poslan. Pokušajte ponovo!")
        }
        
}

export default Obavjestenje


