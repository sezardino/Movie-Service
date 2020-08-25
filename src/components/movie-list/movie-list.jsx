import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withPlayer from '../../hocs/with-player/with-player';

const MovieCardWrapped = withPlayer(MovieCard);

// const MovieList = (props) => {
// 	const {movies, onMovieTitleClick} = props;
// 	let {count, activeFilter} = props;
// 	count = count ? count : movies.length;
// 	return (
// 		<>
// 			<div className="catalog__movies-list">
// 				{movies.map((item, i) => {
// 					if (i < count)
// 						return (
// 							<MovieCardWrapped
// 								movie={item}
// 								key={item.key + i}
// 								onMovieTitleClick={onMovieTitleClick}
// 							/>
// 						);
// 				})}
// 			</div>
// 		</>
// 	);
// };
const MovieList = (props) => {
	const {movies, onMovieTitleClick} = props;
	let {count, activeFilter} = props;
	count = count ? count : movies.length;
	return (
		<>
			<div className="catalog__movies-list">
				{movies.map((item, i) => {
					if (i < count)
						return (
							<MovieCardWrapped
								movie={item}
								key={item.key + i}
								onMovieTitleClick={onMovieTitleClick}
							/>
						);
				})}
			</div>
		</>
	);
};

MovieList.propTypes = {
	movies: PropTypes.array.isRequired,
	onMovieTitleClick: PropTypes.func.isRequired,
	count: PropTypes.number,
};

export default MovieList;
