import React from 'react';
import renderer from 'react-test-renderer';
import PromoMovie from './promo-movie.jsx';

it(`MovieBg are rendered`, () => {
	const tree = renderer.create(<PromoMovie />).toJSON();

	expect(tree).toMatchSnapshot();
});
