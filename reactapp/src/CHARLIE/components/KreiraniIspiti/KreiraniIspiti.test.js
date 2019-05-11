import React from 'react';
import {shallow} from 'enzyme';
import KreiraniIspiti from './KreiraniIspiti'

describe('<KreiraniIspiti />', () => {
 
  const mockData = { ispiti: { idIspit: 5, tipIspita: 'Usmeni', termin: '09:00'} };
    beforeEach(() => {
      const mock = new MockAdapter(axios);
       mock
        .onGet("http://localhost:31903/ispiti")
        .reply(200, mockData);
    });

  it('da li ima tabele za prikazivanje ispita', () => {
    const wrapper = shallow(<KreiraniIspiti/>)
   
    expect(wrapper.find('#tabelica').exists()).toBe(true)
  })
  it('da li ima dugme za uredjivanje ispita', () => {
    const wrapper = shallow(<KreiraniIspiti/>)
    expect(wrapper.find('#btnUredi').exists()).toBe(true)
  })
}) 