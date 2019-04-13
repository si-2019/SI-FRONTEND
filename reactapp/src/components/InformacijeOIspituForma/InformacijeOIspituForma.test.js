import React from 'react';
import {shallow} from 'enzyme';
import InformacijeOIspituForma from './InformacijeOIspituForma'

describe('<InformacijeOIspituForma />', () => {
  it('renderuje formu za informacije o ispitu', () => {
    const wrapper = shallow(<InformacijeOIspituForma/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('da li ima date time picker', () => {
    const wrapper = shallow(<InformacijeOIspituForma/>)
    expect(wrapper.find('#datetimep').exists()).toBe(true)
  })

  it('da li ima input polje za unos vremena', () => {
    const wrapper = shallow(<InformacijeOIspituForma/>)
    expect(wrapper.find('#vrijemeT').exists()).toBe(true)
  })
})