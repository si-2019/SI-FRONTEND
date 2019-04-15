import React from 'react';
import { shallow } from 'enzyme';
import '../setupTest.ts'

it("Postoji li dropdown za prikaz liste zadataka?", () => {
    const wrapper = shallow(<prikazListeZadataka />);
    expect(wrapper.find("#dropdown").exists()).toBe(true);
});

