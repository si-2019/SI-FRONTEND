import React from "react";
import {shallow} from "enzyme";
import Modal from "./Modal1";


describe('<Modal/>', ()=>{
    it("postoji dugme za spasavanje izmjena", ()=>{
        const wrapper = shallow(<Modal/>)
        expect(wrapper.find("#spasiBtn").exists()).toBe(true);
    })
});