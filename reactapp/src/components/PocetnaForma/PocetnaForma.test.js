import React from 'react';
import {shallow} from 'enzyme';
import PocetnaForma from './PocetnaForma'

describe('<PocetnaForma />', () => {
  it('renderuje formu za odabir ispita koji se kreira', () => {
    const wrapper = shallow(<PocetnaForma/>)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  

})