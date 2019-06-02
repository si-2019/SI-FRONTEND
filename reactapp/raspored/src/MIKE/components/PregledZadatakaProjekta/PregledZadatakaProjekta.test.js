import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import PregledZadatakaProjekta from './PregledZadatakaProjekta';
import { sviProjektiTrenutnogUsera } from '../../api/projekti_zadaci';

describe('PregledZadatakaProjekta', () => {

    it('Da li rendera uspjesno', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it("Postoji li select za odabir projekta", () => {
        const wrapper = shallow(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>);
        expect(wrapper.find("Input").exists()).toBe(true);
    });

    it("Postoji li forma za odabir projekta", () => {
        const wrapper = shallow(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>);
        expect(wrapper.find("Form").exists()).toBe(true);
    });

    it("Postoji li bar jedan option unutar selecta za odabir projekta", () => {
        const wrapper = shallow(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>);
        expect(wrapper.find("option").exists()).toBe(true);
    });

    it("Postoji li tabela za prikaz zadataka", () => {
        const wrapper = shallow(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>);
        expect(wrapper.find("Table").exists()).toBe(true);
    });

    it("Da li select ima 2 opcije (testni podaci)", () => {
        const wrapper = shallow(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>);
        expect(wrapper.find("Input").children().length).toBe(2);
    });
    
    it("Da li tabela ima 2 reda (testni podaci prvog projekta)", () => {
        const wrapper = shallow(<PregledZadatakaProjekta projekti={sviProjektiTrenutnogUsera().projekti}/>);
        expect(wrapper.find("tbody").children().length).toBe(2);
    });

});
