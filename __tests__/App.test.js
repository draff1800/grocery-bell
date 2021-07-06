import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

describe('Landing page: ', () => {
  test('Given the app exists, when rendered, it renders successfully.', () => {
    renderer.create(<App />);
  });
});
