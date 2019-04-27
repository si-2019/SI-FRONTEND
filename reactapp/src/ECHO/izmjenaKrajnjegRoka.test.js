import React from 'react';
import { shallow } from 'enzyme';
import IzmjenaKrajnjegRoka from "./izmjenaKrajnjegRoka.js";
import "./setupTests.js";


it('Provjerava da li postoji naslov.', () => {
    const wrapper = shallow(<IzmjenaKrajnjegRoka />);
    const tekst = <label>Izmijenite trenutni krajnji rok za unos i promjenu slobodnih termina za nastavno osoblje:</label>;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(tekst)).toEqual(true);
  });

 
  it("Da li se prikazuju sve komponente", () => {
    const component = shallow(<IzmjenaKrajnjegRoka />);
    expect(component).toMatchSnapshot();
  });

  it("Da li ima kalendar za unos roka?", () => {
    const wrapper = shallow(<IzmjenaKrajnjegRoka />);
    expect(wrapper.find("#KalendarZaUnos").exists()).toBe(true);
  });

  it("Da li postoji dugme za unos?", () => {
    const wrapper = shallow(<IzmjenaKrajnjegRoka />);
    expect(wrapper.find("#Potvrda").exists()).toBe(true);
  });