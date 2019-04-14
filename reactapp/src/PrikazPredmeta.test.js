import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import PrikazPredmeta from './PrikazPredmeta';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
describe('Testiranje prikaza predmeta', function() {
  it('ispis pocetnog teksta', function() {
    const wrapper = shallow(<PrikazPredmeta />); 
    const tekst = <p>Test prikaza predmeta</p>;
    expect(wrapper.contains(tekst)).to.equal(true);
  });
});