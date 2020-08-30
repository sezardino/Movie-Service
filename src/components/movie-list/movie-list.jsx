import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import withPlayer from '../../hocs/with-player/with-player';
import Player from '../player/player.jsx';
import {Link} from 'react-router-dom';
import Path from '../../path';

const PlayerWrapped = withPlayer(Player);
const MovieCardWrapped = withPlayer(MovieCard);

const MovieList = (props) => {
	const {movies, onCardMouseEnter, onCardMouseLeave, count, renderPlayer} = props;
	const showCount = count ? count : movies.length;

	return (
		<>
			<div className="catalog__movies-list">
				{movies.map((item, i) => {
					const {id, name} = item;
					if (i < showCount)
						return (
							<article
								key={`movie-${id}`}
								className="small-movie-card catalog__movies-card"
								onMouseEnter={() => onCardMouseEnter(i)}
								onMouseLeave={onCardMouseLeave}>
								{/* <PlayerWrapped movie={item} /> */}
								{renderPlayer(item, i)}
								<h3 className="small-movie-card__title">
									<Link
										to={Path.film(id)}
										className="small-movie-card__link"
										// onClick={(evt) => {
										// 	evt.preventDefault();
										// 	onTitleClick(item);
										// }}
									>
										{name}
									</Link>
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
	count: PropTypes.number,
	// onTitleClick: PropTypes.func.isRequired,
	onCardMouseEnter: PropTypes.func.isRequired,
	onCardMouseLeave: PropTypes.func.isRequired,
	renderPlayer: PropTypes.func.isRequired,
};

export default MovieList;
