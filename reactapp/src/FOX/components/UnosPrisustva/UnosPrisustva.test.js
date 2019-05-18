import React from 'react';
import ReactDOM from 'react-dom';
import UnosPrisustva from './UnosPrisustva';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnosPrisustva />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('renders <UnosPrisustvaForma /> component inside <UnosPrisustva /> component', () => {
    const wrapper = shallow(<UnosPrisustva />);
    expect(wrapper.find("#UnosPrisustvaFroma").exists());
})