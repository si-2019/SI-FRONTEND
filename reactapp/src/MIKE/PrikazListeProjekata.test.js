import React from 'react';
import PregledListeProjekata from './PregledListeProjekata';
import Enzyme, {configure,shallow,mount,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure ({adapter: new Adapter()});
describe('Prikaz liste projekata', ()=> {

    it ("Da li se prikazuje komponenta",()=>{
        const component=shallow(<PregledListeProjekata />);
        expect(component).toMatchSnapshot();
    });
    
    it ("Da li se prikazuje tabela",()=>{
        const wrapper=shallow(<PregledListeProjekata />);
        expect(wrapper.find("#tabelaProjekata")).toBeDefined();
    });
});
