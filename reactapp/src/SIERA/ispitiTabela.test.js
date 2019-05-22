import React from "react";
import IspitiTabela from "./ispitiTabela";
import Enzyme, { shallow } from "enzyme";
import { render } from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("postoji div", () => {
  const wrapper = shallow(<IspitiTabela />);
  expect(wrapper.find("div").exists()).toBeTruthy();
});

it("postoji tabela", () => {
  const wrapper = shallow(<IspitiTabela />);
  expect(wrapper.find("table").exists()).toBeTruthy();
});

it('tabela ima klasu "table table-hover"', () => {
  const wrapper = shallow(<IspitiTabela />);
  expect(
    wrapper
      .find("table")
      .first()
      .hasClass("table table-hover")
  ).toBeTruthy();
});
