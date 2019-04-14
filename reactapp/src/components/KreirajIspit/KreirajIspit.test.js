import React from 'react';
import {shallow} from 'enzyme';
import KreirajIspit from './KreirajIspit'

describe('<KreirajIspit />', () => {
  it('renderuje dugme koje ga proslijedjuje na kreirane ispite', () => {
    const wrapper = shallow(<KreirajIspit/>)
    expect(wrapper.find('button').exists()).toBe(true)
  })
})