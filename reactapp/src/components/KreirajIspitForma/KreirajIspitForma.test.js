import React from 'react';
import {shallow} from 'enzyme';
import KreirajIspitForma from './KreirajIspitForma'

describe('<KreirajIspitForma />', () => {
  it('renderuje formu za unos podataka', () => {
    const wrapper = shallow(<KreirajIspitForma/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('da li ima input za napomenu', () => {
    const wrapper = shallow(<KreirajIspitForma/>)
    expect(wrapper.find('#ispitnaNapomena').exists()).toBe(true)
  })
})