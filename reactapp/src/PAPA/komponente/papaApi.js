import axios from 'axios';
let id=1;

class papaApi{
   
    static trenutniSaDrugihSemestara(){
        return axios.get('http://localhost:31916/papa/trenutniSaDrugihSemestara', {params : {idStudent:id}});
    }
    static ispitiPrijava(){
        return axios.get('http://localhost:31916/papa/ispitiPrijava', {params : {idStudent:id}});
    }

}
export default papaApi;