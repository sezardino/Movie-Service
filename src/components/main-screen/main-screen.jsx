import React from 'react';
import PropTypes from 'prop-types';
import MovieBg from '../movie-bg/movie-bg.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import ShowMore from '../show-more/show-more.jsx';

const MainScreen = (props) => {
	return (
		<>
			<MovieBg movie={props.movie} onPlayButtonClick={props.onPlayButtonClick} />
			<div className="page-content">
				<section className="catalog">
					<h2 className="catalog__title visually-hidden">Catalog</h2>

					{props.children}
				</section>

				<PageFooter mainScreen={true} />
			</div>
		</>
	);
};

export default MainScreen;
