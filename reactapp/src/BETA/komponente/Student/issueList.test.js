import React from "react";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import issueList from "./issueList.js";

Enzyme.configure({ adapter: new Adapter()});

it("Postoji li tab za pretragu issua?", () => {
    const wrapper = shallow(<issueList />);
    expect(wrapper.find("#search-issue-tab-Beta").exists()).toBe(true);
});


