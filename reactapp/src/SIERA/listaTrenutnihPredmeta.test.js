import React from 'react';
import ListaTrenutnihPredmeta from './listaTrenutnihPredmeta';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('prvi div ima klasu container-fluid', () => {
    const wrapper = shallow(<ListaTrenutnihPredmeta />);
    expect(wrapper.find('div').first().hasClass('container-fluid')).toBeTruthy();
});

it('postoji lista', () => {
    const wrapper = shallow(<ListaTrenutnihPredmeta />);
    expect(wrapper.find('ul').exists()).toBeTruthy();
});

it('prvi element liste ima klasu list-group-item', () => {
    const wrapper = shallow(<ListaTrenutnihPredmeta />);
    expect(wrapper.find('li').first().hasClass('list-group-item')).toBeTruthy();
});
