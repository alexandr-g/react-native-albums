import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AlbumList from '../src/components/AlbumList';
import Card from '../src/components/Card';

describe('basic components render', function () {
  it('should render AlbumList correctly', () => {
    const tree = renderer.create(
      <AlbumList />
    );
  });

  it('should render Card correctly', () => {
    const tree = renderer.create(
      <Card />
    );
  });
});
