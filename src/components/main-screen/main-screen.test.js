import React from 'react';
import renderer from 'react-test-renderer';
import MainScreen from './main-screen.jsx';

it(`MainScreen are rendered`, () => {
	const tree = renderer.create(<MainScreen movies={[]} genres={[]} />).toJSON();

	expect(tree).toMatchSnapshot();
});
