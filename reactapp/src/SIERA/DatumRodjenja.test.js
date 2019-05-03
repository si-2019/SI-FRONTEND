import {shallow} from "enzyme";
import DatumRodjenja from "./DatumRodjenja";
import React from "react";

describe('<DatumRodjenja/>', ()=>{
    it('postoji dugme za prikaz datuma rodjenja', ()=>{
        const wrapper = shallow(<DatumRodjenja/>)
        expect(wrapper.find('#datumRodjenja').exists()).toBe(true)
        
    })
})