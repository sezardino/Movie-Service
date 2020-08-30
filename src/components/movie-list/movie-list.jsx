import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withPlayer from '../../hocs/with-player/with-player';
import Player from '../player/player.jsx';

const PlayerWrapped = withPlayer(Player);
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
	const {movies, onMovieTitleClick, onCardMouseEnter, onCardMouseLeave} = props;
	let {count, activeFilter, renderPlayer} = props;
	count = count ? count : movies.length;
	return (
		<>
			<div className="catalog__movies-list">
				{movies.map((item, i) => {
					if (i < count)
						return (
							<article
								key={`movie-${item.id}`}
								className="small-movie-card catalog__movies-card"
								onMouseEnter={() => onCardMouseEnter(i)}
								onMouseLeave={onCardMouseLeave}>
								{/* <PlayerWrapped movie={item} /> */}
								{renderPlayer(item, i)}
								<h3 className="small-movie-card__title">
									<a
										href="#"
										className="small-movie-card__link"
										onClick={(evt) => {
											evt.preventDefault();
											onMovieTitleClick(item);
										}}>
										{item.name}
									</a>
								</h3>
							</article>
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
