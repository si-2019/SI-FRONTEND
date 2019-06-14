import * as dummy from "./static/dummy.js";

/*
    !!!!!!!!!!!!!!!!!!!!!!!! 
    !        BITNO         !
    !!!!!!!!!!!!!!!!!!!!!!!!
    Istraziti kako rade promise-i
    Svaka funckija mora vracati promise
    Ako je request uspio resolvati promise sa podacima kao u primjerima ispod
    Ako request faila (nema neta, user nema pristup, itd), tada rejectati promise sa objektom
    {
        message: "zasto je failalo"
    } 
    primjer za fail je pod sacuvaniIzvjestaji.delete ispod

*/

let sacuvaniIzvjestajiNiz = [
  { naziv: "IM2 2016/2017", godinaId: 12, predmetId: 12 },
  { naziv: "IF1 2017/2018", godinaId: 13, predmetId: 4 }
];

let predmetiNiz = [
  { naziv: "Inzenjerska matematika 1", id: 8 },
  { naziv: "Inzenjerska matematika 2", id: 12 },
  { naziv: "Inzenjerska fizika 1", id: 4 }
];

let godineNiz = [
  { naziv: "2016/2017", id: 12 },
  { naziv: "2017/2018", id: 13 },
  { naziv: "2018/2019", id: 14 }
];

export const dataPredmetPoGodini = {
  get: (predmetId, godinaId, filter = null, datum = null) => {
    return fetch(
      "http://localhost:31912/Izvjestaji/dajPredmetPoGodini/" +
        predmetId +
        "/" +
        godinaId +
        "/" +
        filter +
        "/" +
        datum
    ).then(podaci => podaci.json());
    //filter oznacava koju data-u treba pokupit sa servera
    //u switchu ispod vidjeti koji sve tip postoji i kojeg formata su podaci
    //datum je string oblika DD.MM.YYYY. i koristi se u ispitima
    /* switch (filter) {
      case "Prvi parcijalni":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              izasloNaIspit: 9,
              ukupnoStudenata: 12,
              polozilo: 9,
              data: [10, 10, 10, 10, 10, 13, 13, 13, 13]
            }); //5 ljudi imalo 10 bodova, 4 imalo 13 bodova na 1. parcijali
          }, 100);
        });
      case "Drugi parcijalni":
        return new Promise((resolve, reject) => {
          fetch(
            "http://localhost:31912/izvjestaj/drugiParcijalni/8/11/10.06.2019"
          )
            .then(res => res.json())
            .then(
              result => {
                if (result[0].message !== undefined) {
                  reject(result[0].message);
                } else {
                  resolve(result[0]);
                }
              },
              error => reject({ message: "Ne može se konektovati na bazu" })
            );
          /* setTimeout(() => {
                        resolve({
                            izasloNaIspit: 9,
                            ukupnoStudenata: 12,
                            polozilo: 9,
                            data: [10, 10, 10, 10, 11, 11, 11, 11, 11]
                        });//4 ljudi imalo 10 bodova, 5 imalo 11 bodova na 2. parcijali
                    }, 100);*/
    /*  });
      case "Usmeni":
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              izasloNaIspit: 9,
              ukupnoStudenata: 12,
              polozilo: 4,
              data: [30, 20, 21, 21, 25, 30, 30, 30, 20]
            }); //2 ljudi imalo 20 bodova, 2 imalo 21 bodova, i 4 imalo 30 bodova na usmenom
          }, 100);
        });
      case "Prisustvo": //vraca se niz bodova prisustva
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([10, 10, 10, 10, 10, 0, 0, 5, 5]); //5 ljudi imalo 10, 2 imalo 0 i 2 imalo 5 bodova na prisustvo
          }, 100);
        });
      case "Zadaca": //vraca se niz bodova zadaca
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([10, 9, 9, 9, 9, 9, 9, 8, 8]); //1 student imao 10, 6 imalo 9 i 2 imalo 8 bodova na zadacu
          }, 100);
        });
      case "Bodovi": //vraca se niz ukupnih bodova
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([90, 90, 65, 65, 65, 55, 55, 55, 55]); //2 studenta imala 90, 3 imalo 65 i 4 imalo 55 bodova ukupno
          }, 100);
        });
      case "Ocjena": //vraca se niz ocjena, ako neki student nije polozio za njega se vraca "Nije polozio"
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(["Nije polozio", "Nije polozio", 6, 6, 6, 6, 7, 7, 7]); //2 studenta palo, 4 imalo 6 i 3 imalo 7 ocjenu
          }, 100);
        });
      case null: //vraca se objekat koji sadrzi naziv predmeta i niz stavki koje godina posjeduje npr. zadace, prisustvo, bodovi, ocjena, rokovi ispita
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            let postojiPredmet = false,
              postojiGodina = false;
            let nazivPredmeta, nazivGodine;
            for (let i = 0; i < predmetiNiz.length; i++) {
              if (predmetiNiz[i].id == predmetId) {
                postojiPredmet = true;
                nazivPredmeta = predmetiNiz[i].naziv;
                break;
              }
            }
            for (let i = 0; i < godineNiz.length; i++) {
              if (godineNiz[i].id == godinaId) {
                postojiGodina = true;
                nazivGodine = godineNiz[i].naziv;
                break;
              }
            }
            if (postojiGodina && postojiPredmet) {
              resolve({
                nazivPredmeta: nazivPredmeta,
                nazivGodine: nazivGodine,
                nizStavki: [
                  { tip: "Prisustvo" },
                  { tip: "Zadaca" },
                  { tip: "Bodovi" },
                  { tip: "Ocjena" },
                  { tip: "Prvi parcijalni", datum: "02.03.2019." },
                  { tip: "Drugi parcijalni", datum: "10.06.2019." },
                  { tip: "Usmeni", datum: "02.06.2019." },
                  { tip: "Prvi parcijalni", datum: "02.09.2019." },
                  { tip: "Drugi parcijalni", datum: "07.09.2019." },
                  { tip: "Usmeni", datum: "11.09.2019." }
                ]
              });
            }
            reject({ message: "Izvjestaj ne postoji." });
          }, 100);
        });
      default:
    }*/
  }
};

//izvjestaj je u obliku kao objekti iz niza sacuvaniIzvjestajNiz
export const sacuvaniIzvjestaji = {
  //vraca se niz sacuvanih izvjestaja
  get: studentId => {
    studentId = 100;
    return new Promise((resolve, reject) => {
      fetch("http://localhost:31912/izvjestaji/precice?studentId=" + studentId)
        .then(res => res.json())
        .then(
          result => {
            /* if (result[0].message !== undefined) {
              reject(result[0].message);
            } else {*/
            resolve(result);
            //}
          },
          error => reject({ message: "Ne može se konektovati na bazu" })
        );

    });
  },
  delete: (studentId, izvjestaj) => {
    izvjestaj.studentId = 100; //studentId
    return new Promise((resolve, reject) => {
      fetch("http://localhost:31912/izvjestaji/obrisiPrecicu", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(izvjestaj)
      })
        .then(res => res.json())
        .then(rezultat => resolve(rezultat));
    });
  },
  put: (studentId, izvjestaj) => {
    izvjestaj.studentId = 100;
    studentId = 100;
    return new Promise((resolve, reject) => {
      fetch(
        "http://localhost:31912/izvjestaji/dodajPrecicu?studentId=" + studentId,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(izvjestaj)
        }
      )
        .then(res => res.json())
        .then(rezultat => resolve(rezultat));
    });
    
  }
};

export const predmeti = {
  get: () => {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:31912/predmeti")
        .then(res => res.json())
        .then(rezultat => resolve(rezultat));
    });
  },
  getPredmetiStudenta: studentId => {
    //vraca predmete koje student slusa na trenutnoj godini
    return new Promise((resolve, reject) => {
      studentId = 100;
      fetch("http://localhost:31912/predmeti_studenta?studentId=" + studentId)
        .then(res => res.json())
        .then(rezultat => resolve(rezultat));
    });
  }
};

export const godine = {
  get: () => {
    return new Promise((resolve, reject) => {
      fetch("http://si2019siera.herokuapp.com/akademskegodine/")
        .then(res => res.json())
        .then(
          result => {
            if (result.error === true) {
              reject({ message: "Greška!" });
            } else {
              var godine = [];
              var akg = result.data;
              for (var i = 0; i < akg.length; i++) {
                godine.push({ naziv: akg[i].naziv, id: akg[i].id });
              }
              resolve(godine);
            }
          },
          error => reject({ message: "Ne može se konektovati na bazu" })
        );
    });
  },
  getTrenutnaGodina: () => {
    return new Promise((resolve, reject) => {
      fetch("http://si2019siera.herokuapp.com/akademskegodine/trenutna")
        .then(res => res.json())
        .then(
          result => {
            if (result.error === true) {
              reject({ message: "Greška!" });
            } else {
              resolve({ naziv: result.data.naziv, id: result.data.id });
            }
          },
          error => reject({ message: "Ne može se konektovati na bazu" })
        );
      
    });
  }
};

export const student = {
  getProsjeci: studentId => {
    studentId = 100;
    return new Promise((resolve, reject) => {
      fetch("http://localhost:31912/izvjestaj/prosjekPoGodinama/" + studentId)
        .then(res => res.json())
        .then(
          result => {
            resolve(result);
            /*if (result[0].message !== undefined) {
              reject(result[0].message);
            } else {
              resolve(result);
            }*/
          },
          error => reject({ message: "Ne može se konektovati na bazu" })
        );
      /* setTimeout(() => {
        //vraca niz objekata oblika {naziv: "2016/2017", godinaId: "idgodine", prosjek: 6.6}
        resolve([
          { naziv: "2016/2017", godinaId: 12, prosjek: 7.6 },
          { naziv: "2017/2018", godinaId: 13, prosjek: 7.2 },
          { naziv: "2018/2019", godinaId: 14, prosjek: 7.8 }
        ]);

      }, 100);*/
    });
  }
};
