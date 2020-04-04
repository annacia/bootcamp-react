import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import React from 'react';
import Routes from './Routes';
import Home from './pages/Home';
import App from './App';


test('path should go to Home', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );

  console.log(wrapper.html())

  setTimeout(() => {
    wrapper.update();
    console.log(wrapper.html())
    expect(wrapper.find(Home)).toHaveLength(1);
  }, 1000);
});

