import axios from 'axios';
let id=1;

class papaApi{
   
    static trenutniPredmeti(){
        return axios.get('http://localhost:31916/papa/trenutniPredmeti', {params : {idStudent:id}});
    }
    static trenutniSaDrugihSemestara(){
        return axios.get('http://localhost:31916/papa/trenutniSaDrugihSemestara', {params : {idStudent:id}});
    }
    static polozeniPredmeti(){
        return axios.get('http://localhost:31916/papa/polozeniPredmeti', {params : {idStudent:id}});
    }
    static ispitiPrijava(){
        return axios.get('http://localhost:31916/papa/ispitiPrijava', {params : {idStudent:id}});
    }
    static obavjestenjaProfesor(){
        return axios.get('http://localhost:31916/papa/obavjestenjaProfesor', {params : {idStudent:id}});
    }
    static trenutniProfesori(){
        return axios.get('http://localhost:31916/papa/trenutniProfesori', {params : {idStudent:id}});
    }
    static sviIspita(){
        return axios.get('http://localhost:31916/papa/sviIspiti');
    }

}
export default papaApi;