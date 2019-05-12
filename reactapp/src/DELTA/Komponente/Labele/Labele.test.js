import React from "react";
import Labele from "./Labele";
import { mount, shallow, render } from "enzyme";
import "../../../setupTests"


it("Da li se prikazuju komponente", () => {
    const component = shallow(<Labele />);
    expect(component).toMatchSnapshot();
  });

  it('da li ima tag za labele', () => {
    const wrapper = shallow(<Labele/>)
    expect(wrapper.find('h3').exists()).toBe(true)
  })