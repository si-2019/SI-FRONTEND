import React from "react";
import BodoviNaIspitima from "./BodoviNaIspitima";
import { mount, shallow, render } from "enzyme";
import "../../../setupTests"


it("Da li se prikazuje komponenta sa svim ispitima", () => {
    const component = shallow(<BodoviNaIspitima />);
    expect(component).toMatchSnapshot();
  });

  it('da li se prikazuje komponenta za jedan ispit', () => {
    const wrapper = shallow(<BodoviNaIspitima/>)
    expect(wrapper.find('BodoviNaIspitu').exists()).toBe(true)
  })