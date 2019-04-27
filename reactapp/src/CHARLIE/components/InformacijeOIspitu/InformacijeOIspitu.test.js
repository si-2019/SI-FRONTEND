import React from 'react';
import {shallow} from 'enzyme';
import InformacijeOIspitu from './InformacijeOIspitu'

describe('<InformacijeOIspitu />', () => {
  it('renderuje formu za informacije o ispitu', () => {
    const wrapper = shallow(<InformacijeOIspitu/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('da li ima date time picker', () => {
    const wrapper = shallow(<InformacijeOIspitu/>)
    expect(wrapper.find('#datetimep').exists()).toBe(true)
  })

  it('da li ima input polje za unos vremena', () => {
    const wrapper = shallow(<InformacijeOIspitu/>)
    expect(wrapper.find('#vrijemeT').exists()).toBe(true)
  })
  it('da li ima input polje za unos datuma ispita', () =>{
    const wrapper = shallow(<InformacijeOIspituForma/>)
    expect(wrapper.find('#datetimep2').exists().toBe(true))
  })
})