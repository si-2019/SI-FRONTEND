import React from 'react';
import { shallow } from 'enzyme';
import '../setupTest.ts'

import NoviIssueForma from './NoviIssueForma';


it("Prikazuje formu za unos novog issuea?", () => {
    const component = shallow(<NoviIssueForma />);
    expect(component).toMatchSnapshot();
});
it("Postoji li button za zatvaranje novog issuea?", () => {
    const wrapper = shallow(<NoviIssueForma />);
    expect(wrapper.find("#zatvoriNoviIssue").exists()).toBe(true);
});
