import React from 'react';
import {shallow} from 'enzyme';
import KreirajIspit from './KreirajIspit'

describe('<KreirajIspitForma />', () => {
  it('renderuje formu za unos podataka', () => {
    const wrapper = shallow(<KreirajIspit/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('da li ima input za napomenu', () => {
    const wrapper = shallow(<KreirajIspit/>)
    expect(wrapper.find('#ispitnaNapomena').exists()).toBe(true)
  })
})