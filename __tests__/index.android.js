import 'react-native';
import React from 'react';
import Header from '../src/components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('components render', function () {
  it('should render Header', () => {
    const tree = renderer.create(
      <Header />
    );
  });
});
