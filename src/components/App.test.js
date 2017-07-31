import React from 'react';
import { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { PureApp as App } from './App';

it('renders without crashing', () => {
  const component = renderer.create(
    <App count={1} />
  );
  expect(component).toMatchSnapshot();
});
