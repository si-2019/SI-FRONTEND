import $ from 'jquery';

export function kreirajNoviIssue(){

    if(document.getElementById("overlay").style.display == "block"){
        document.getElementById("overlay").style.display = "none"
    }
    else{
        document.getElementById("overlay").style.display = "block";
    }    

}

export function zatvoriNoviIssue(){

    document.getElementById("overlay").style.display = "none";
}

export function posaljiIssue(){
  
    var body = {
      idStudenta: "",                                                          //kasnije implementirati
      naslov: document.getElementById('naslovSelect').value,
      sadrzaj: document.getElementById('exampleTextarea').value,
      fajl: document.getElementById('exampleInputFile').value                   //okvirno
  };
  $.post('http://localhost:8080/dodajNoviIssue', body, function(returnedData){});
}