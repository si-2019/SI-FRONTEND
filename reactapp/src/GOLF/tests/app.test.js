import React from 'react';
import App from '../app';
import ObjavaStudent from '../objavaStudent';
import ObjavaProfesor from '../objavaProfesor';
import StranicaPredmetaStudent from '../stranicaPredmetaStudent';
import StranicaPredmetaProfesor from '../stranicaPredmetaProfesor';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    shallow(<App/>);
});

test('prikazuje link Moji predmeti', () => {
    const mojiPredmeti = shallow(<App/>)
    const link = mojiPredmeti.find('a[id="mpl"]')
    expect(link.length).toEqual(1);
})

test('prikazuje fileove za studenta', () => {
    let fileovi=['prvi.pdf','drugi.pdf','treci.pdf']
    const objavaStudent = shallow(<ObjavaStudent naslov='Tutorijal' opisMaterijala='opis' fileovi={fileovi}/>)
    const files = objavaStudent.find('a[class="card-link"]');
    expect(files.length).toEqual(3)
})

test('prikazuje fileove za profesora', () => {
    let fileovi=['prvi.pdf','drugi.pdf']
    const objavaStudent = shallow(<ObjavaProfesor naslov='Tutorijal' opisMaterijala='opis' fileovi={fileovi}/>)
    const files = objavaStudent.find('a[class="card-link"]');
    expect(files.length).toEqual(2)
})

test('ne prikazuje dugme za dodavanje u moje predmete - profesor', () => {
    let m={
        params:{
            idPredmeta: "239",
            idKorisnika: "235"
        }
    }
    const stranica = shallow(<StranicaPredmetaProfesor match={m} />);
    const dugme = stranica.find('button[id="dd"]');
    expect(dugme.length).toEqual(0)
})

test('prikazuje dugme za dodavanje u moje predmete - student', () => {
    let m={
        params:{
            idPredmeta: "9",
            idKorisnika: "1"
        }
    }
    const stranica = shallow(<StranicaPredmetaStudent match={m} />);
    const dugme = stranica.find('button[id="dd"]');
    expect(dugme.length).toEqual(1)
})



