import fetch from 'isomorphic-fetch';



export function postRequest(data) {
    return fetch('http://localhost:31901/api/korisnik/updateStudent', {  
        method: 'post',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Nesto", res);
        return res;
    }).catch(err => console.log(err));
}