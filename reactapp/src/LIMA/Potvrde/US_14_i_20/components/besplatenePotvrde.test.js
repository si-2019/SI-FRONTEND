import React from "react";
import BesplatnePotvrde from "./besplatnePotvrde";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Komponenta svrha potvrde se ispravno renda", () => {
  const komponenta = shallow(<BesplatnePotvrde />);
  expect(komponenta).toMatchSnapshot();
});
it("U komponenti se nalazi broj potvrda", () => {
  const komponenta = shallow(<BesplatnePotvrde />);
  expect(komponenta.find("#broj_potvrda").exists()).toBe(true);
});
