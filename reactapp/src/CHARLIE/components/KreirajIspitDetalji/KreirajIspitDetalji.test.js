import React from 'react';
import {shallow} from 'enzyme';
import KreirajIspitDetalji from './KreirajIspitDetalji'

describe('<KreirajIspitDetalji />', () => {
  it('renderuje formu za unos podataka', () => {
    const wrapper = shallow(<KreirajIspitDetalji/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('da li ima input za napomenu', () => {
    const wrapper = shallow(<KreirajIspitDetalji/>)
    expect(wrapper.find('#ispitnaNapomena').exists()).toBe(true)
  })
})