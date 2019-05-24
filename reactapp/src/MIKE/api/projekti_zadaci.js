const axios = require('axios')

// svi projekti u cijoj projektnoj grupi je trenutni user
const sviProjektiTrenutnogUsera = () => {
  // temporarni ID
  let idStudenta = 1;

  return axios.get(`http://localhost:31913/services/viewS/user-projects/${idStudenta}`);

  //placeholder
  return new Promise(function(resolve, reject)
  {
    let projekti = {
      projekti: [
        {
          id: "1",
          naziv_projekta: "Naziv projekta 1",
          naziv_predmeta: "Predmet 1",
          opis_projekta: "opis projekta 1",
          zadaci: [
            { idProjektnogZadatka: "1", opis: "opis projektnog zadatka 1", otkad: "11.4.2019", dokad: "23.4.2019", zavrsen: "NE", komentarAsistenta: "" },
            { idProjektnogZadatka: "2", opis: "opis projektnog zadatka 2", otkad: "12.4.2019", dokad: "17.4.2019", zavrsen: "DA", komentarAsistenta: "" }
          ]
        },
        {
          id: "2",
          naziv_projekta: "Naziv projekta 2",
          naziv_predmeta: "Predmet 2",
          opis_projekta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          zadaci: []
        }
      ]
    };
  
    resolve(projekti);
  });
}

// svi predmeti na kojima je student, za koje postoji projekat za koji student nije ni u jednoj grupi
const predmetiZaNovuProjektnuGrupu = () => {
  // temporarni ID
  let idStudenta = 36;

  return axios.get(`http://localhost:31913/services/viewS/predmeti-za-generisanje-grupa/${idStudenta}`);

  //placeholder
  return new Promise(function(resolve, reject)
  {
    let predmeti = {
      predmeti: [
        {
          id: "1",
          naziv_predmeta: "Predmet 1",
          projekti: [
            { idProjekat: "1", nazivProjekta: "naziv projekta 1", progress: "0.000", opisProjekta: "opis projekta 1", moguciBodovi: "10", rokProjekta: "2019-01-01 20:20:20" },
            { idProjekat: "2", nazivProjekta: "naziv projekta 2", progress: "0.800", opisProjekta: "opis projekta 2", moguciBodovi: "30", rokProjekta: "2019-01-01 20:20:20" }
          ]
        },
        {
          id: "2",
          naziv_predmeta: "Predmet 2",
          projekti: [
            { idProjekat: "3", nazivProjekta: "naziv projekta 3", progress: "0.000", opisProjekta: "opis projekta 3", moguciBodovi: "10", rokProjekta: "2019-01-01 20:20:20" }
          ]
        }
      ]
    };
  
    resolve(predmeti);
  });
}

export { sviProjektiTrenutnogUsera, predmetiZaNovuProjektnuGrupu };