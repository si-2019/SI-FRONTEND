import * as dummy from './static/dummy.js';

export const dataPredmetPoGodini = {
    get: (predmetId, godina, filter = null) => (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                let data = [
                    {
                        "Prvi parcijalni":12, 
                        "Drugi parcijalni":10, 
                        "Prisustvo":10, 
                        "Zadace":10, 
                        "Usmeni":23, 
                        "Kviz":3
                    },
                    {
                        "Prvi parcijalni":14, 
                        "Drugi parcijalni":11, 
                        "Prisustvo":0, 
                        "Zadace":9, 
                        "Usmeni":28, 
                        "Kviz":1
                    },
                    {
                        "Prvi parcijalni":18, 
                        "Drugi parcijalni":19, 
                        "Prisustvo":0, 
                        "Zadace":3, 
                        "Usmeni":12, 
                        "Kviz":5
                    }
                ]
                if(filter == null){
                    resolve(data);
                } else {
                    resolve(data.map((item => item[filter])));
                }
            }, 1000);
        })
    )
};