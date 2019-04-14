import * as dummy from './dummy.js';

const baseURL = 'localhost:8080';

export const potvrde = {
    get: (potvrdaId) => (
        new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(dummy.potvrda);
            }, 1000);
        })
    )
};
