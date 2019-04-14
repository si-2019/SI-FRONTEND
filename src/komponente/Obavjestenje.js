import react,{useState} from 'react'

function Obavjestenje(props){
    //logika citanja/konverzije props
   var porukica=JSON.stringify(props);
     
     console.log(porukica);

    if(porukica==="message: \"OK\"") 
        alert("Vaš issue je uspješno poslan!")
    
       
        else {
             alert("Greška!\nVaš issue nije poslan. Pokušajte ponovo!")
        }
        console.log(porukica)
}

export default Obavjestenje


