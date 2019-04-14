import React from 'react';
import {shallow} from 'enzyme';
import PocetnaForma from './PocetnaForma'

describe('<PocetnaForma />', () => {
  it('renderuje formu za odabir ispita koji se kreira', () => {
    const wrapper = shallow(<PocetnaForma/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })
  it('da li postoji select za odabir predmeta', () => {
    const wrapper = shallow(<PocetnaForma/>)
    expect(wrapper.find('#odabirPredmeta').exists()).toBe(true)
  })
  

})

describe('<PocetnaForma/>', () =>{
  it('renderuje formu za odabir ispitnog tipa', () =>{
      const wrapper=shallow(<PocetnaForma/>)
  expect(wrapper.find('form').exists()).toBe(true)
  })
  it('renderuje formu za odabir ispitnog tipa', () =>{
    const wrapper=shallow(<PocetnaForma/>)
    expect(wrapper.find('#odabirTipIspita').exists()).toBe(true)
  })
})
  