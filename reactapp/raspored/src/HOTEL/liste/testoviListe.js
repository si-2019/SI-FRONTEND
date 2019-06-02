import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Liste from './liste';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Postoji li naslov", () => {
  const wrapper = shallow(<Liste />);
  expect(wrapper.find("#naslov").exists()).toBe(true);
});
it("Postoji li prikazana anketa", () => {
  const wrapper = shallow(<Liste />);
  expect(wrapper.find(".anketa").exists()).toBe(true);
});
it("Postoji li button za uredjivanje ankete", () => {
  const wrapper = shallow(<Liste />);
  expect(wrapper.find(".dugmeUredi").exists()).toBe(true);
});
it("Postoji li button za brisanje ankete", () => {
  const wrapper = shallow(<Liste />);
  expect(wrapper.find(".dugmeObrisi").exists()).toBe(true);
});