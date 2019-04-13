import React from 'react';
import {shallow} from 'enzyme';
import KreirajIspitForma from './KreirajIspitForma'

describe('<KreirajIspitForma />', () => {
  it('renderuje formu za unos podataka', () => {
    const wrapper = shallow(<KreirajIspitForma/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })
})