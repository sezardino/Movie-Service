import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';

it(`GenreList are rendered`, () => {
	const arr = [
		{key: `all`, title: `All genres`},
		{key: `comedy`, title: `Comedies`},
		{key: `crime`, title: `Crime`},
	];
	const tree = renderer.create(<GenreList genres={arr} />).toJSON();

	expect(tree).toMatchSnapshot();
});
