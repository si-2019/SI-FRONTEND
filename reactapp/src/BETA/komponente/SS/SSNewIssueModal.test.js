import React from "react";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import SSNewIssueModal from "./SSNewIssueModal.js";

Enzyme.configure({ adapter: new Adapter()});

it("Postoji li dropdown za odabir studenta?", () => {
    const wrapper = shallow(<SSNewIssueModal />);
    expect(wrapper.find("#BETA_Students_Component").exists()).toBe(true);
});

it("Postoji li dropdown za odabir kategorije?", () => {
    const wrapper = shallow(<SSNewIssueModal />);
    expect(wrapper.find("#BETA_Category_Component").exists()).toBe(true);
});

