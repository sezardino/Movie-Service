import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movie-list.jsx';

it(`MovieList are rendered`, () => {
	const tree = renderer.create(<MovieList movies={[]} />).toJSON();

	expect(tree).toMatchSnapshot();
});
