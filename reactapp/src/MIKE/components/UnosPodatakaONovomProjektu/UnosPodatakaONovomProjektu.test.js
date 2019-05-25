import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import UnosPodatakaONovomProjektu from './UnosPodatakaONovomProjektu';

describe('Testovi ya provjeru ispravnosti rada komponente', () => {
    it("Provjera da li postoji forma za unos podataka", () => {
        const wrapper = shallow(<UnosPodatakaONovomProjektu />);
        expect(wrapper.find("#formaUnosProjekta").exists()).toBe(true);
    });

    it("Provjera da li postoji button za potvrdu unosa podataka u bazu", () => {
        const wrapper = shallow(<UnosPodatakaONovomProjektu />);
        expect(wrapper.find("#potvrdaUnosa").exists()).toBe(true);
    });

});
