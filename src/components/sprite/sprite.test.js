import React from 'react';
import renderer from 'react-test-renderer';
import Sprite from './sprite.jsx';

it(`Sprite are rendered`, () => {
	const tree = renderer.create(<Sprite />).toJSON();

	expect(tree).toMatchSnapshot();
});
