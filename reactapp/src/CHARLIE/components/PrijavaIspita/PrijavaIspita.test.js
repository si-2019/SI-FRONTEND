import React from 'react';
import {shallow} from 'enzyme';
import PrijavaIspita from './PrijavaIspita';

describe('<PrijavaIspita />', () => {
 
  it('da li postoje usmeni ispiti', () => {
    const wrapper = shallow(<PrijavaIspita/>)
   
    expect(wrapper.find('#usmeniIspiti').exists()).toBe(true)
  })
}) 