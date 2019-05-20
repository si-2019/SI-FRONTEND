import React from 'react';
import App from '../app';
import ObjavaStudent from '../objavaStudent';
import ObjavaProfesor from '../objavaProfesor';
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



