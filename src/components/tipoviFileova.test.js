import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DodavanjeTipovaFileova from "./dodavanjeTipovaFileova";

Enzyme.configure({ adapter: new Adapter() })

import { shallow } from 'enzyme';


it("Da li postoji forma za dodavanje liste tipova fileova", () => {
    var kom = {
        ime: "Zadaca",
        zadaci:5
      };
    const component = shallow(<DodavanjeTipovaFileova komponente={kom}/>);
    expect(component).toMatchSnapshot();
});

it("Da li postoji switch za odabir jedne liste tipova fileova", () => {
  var kom = {
    ime: "kk",
    zadaci:5
  };
  const wrapper = shallow(<DodavanjeTipovaFileova komponente={kom}/>);
  expect(wrapper.find("CustomInput.switchDa").exists());
});
