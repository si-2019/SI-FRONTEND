import React from 'react';
import ListaOdslusanihPredmeta from './listaOdslusanihPredmeta';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('prvi div ima klasu container-fluid', () => {
    const wrapper = shallow(<ListaOdslusanihPredmeta />);
    expect(wrapper.find('div').first().hasClass('container-fluid')).toBeTruthy();
});

it('postoji naslov', () => {
    const wrapper = shallow(<ListaOdslusanihPredmeta />);
    expect(wrapper.find('h5').exists()).toBeTruthy();
});

it('postoji dugme', () => {
    const wrapper = shallow(<ListaOdslusanihPredmeta />);
    expect(wrapper.find('input').first().hasClass('btn')).toBeTruthy();
});