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