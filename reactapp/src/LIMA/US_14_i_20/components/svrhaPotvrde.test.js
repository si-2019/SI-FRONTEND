import React from "react";
import SvrhePotvdre from "./svrhaPotvrde";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Komponenta besplatne potvrde se ispravno renda", () => {
  const komponenta = shallow(<SvrhePotvdre />);
  expect(komponenta).toMatchSnapshot();
});
it("U komponenti se nalazi dropdown button", () => {
  const komponenta = shallow(<SvrhePotvdre />);
  expect(komponenta.find("#svrha_potvrde").exists()).toBe(true);
});

/*it("Promijenom selektovane vrijedosti i svrha se mijenja", () => {
  const komponenta = shallow(<SvrhePotvdre />);
  const odabrana_svrha = komponenta.find("#svrha1");
  odabrana_svrha.simulate("click");
  komponenta.update();
  expect(komponenta.state().svrha).notEqual("Izaberi svrhu");
});*/
