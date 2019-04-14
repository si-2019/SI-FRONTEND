import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

import PregledZadatakaProjekta from './PregledZadatakaProjekta';

describe('PregledZadatakaProjekta', () => {

    it("Postoji li select za odabir projekta", () => {
        const wrapper = shallow(<PregledZadatakaProjekta />);
        expect(wrapper.find("Input").exists()).toBe(true);
    });

    it("Postoji li forma za odabir projekta", () => {
        const wrapper = shallow(<PregledZadatakaProjekta />);
        expect(wrapper.find("Form").exists()).toBe(true);
    });

    it("Postoji li bar jedan option unutar selecta za odabir projekta", () => {
        const wrapper = shallow(<PregledZadatakaProjekta />);
        expect(wrapper.find("option").exists()).toBe(true);
    });

    it("Postoji li tabela za prikaz zadataka", () => {
        const wrapper = shallow(<PregledZadatakaProjekta />);
        expect(wrapper.find("Table").exists()).toBe(true);
    });

    it("Da li select ima 2 opcije (testni podaci)", () => {
        const wrapper = shallow(<PregledZadatakaProjekta />);
        expect(wrapper.find("Input").children().length).toBe(2);
    });
    
    it("Da li tabela ima 2 reda (testni podaci prvog projekta)", () => {
        const wrapper = shallow(<PregledZadatakaProjekta />);
        expect(wrapper.find("tbody").children().length).toBe(2);
    });

});
