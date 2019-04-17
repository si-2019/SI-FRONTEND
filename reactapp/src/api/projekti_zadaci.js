const sviProjektiTrenutnogUsera = () => {

    //slanje zahtjeva...

    //placeholder
    let projekti = {projekti: [
        {id: "1", 
        naziv_predmeta: "Predmet 1",
        opis_projekta: "opis projekta 1",
        zadaci:  [
          {id: "1", opis: "opis projektnog zadatka 1", prioritet: "1", od_kad: "11.4.2019", do_kad: "23.4.2019", zavrsen: "NE", komentar: "" }, 
          {id: "2", opis: "opis projektnog zadatka 2", prioritet: "3", od_kad: "12.4.2019", do_kad: "17.4.2019", zavrsen: "DA", komentar: "" }
        ]}, 
        {id: "2",
        naziv_predmeta: "Predmet 2", 
        opis_projekta: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        zadaci:  []}
      ]};

    return projekti;
}

export { sviProjektiTrenutnogUsera };
