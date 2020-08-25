import React from 'react';
import renderer from 'react-test-renderer';
import MovieBg from './movie-bg.jsx';

it(`MovieBg are rendered`, () => {
	const tree = renderer.create(<MovieBg />).toJSON();

	expect(tree).toMatchSnapshot();
});
