import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player.jsx';

export default class MovieCard extends Component {
	render() {
		const {name} = this.props.movie;
		const {onMovieTitleClick, onCardMouseEnter, onCardMouseLeave} = this.props;
		const {movie, children} = this.props;
		return (
			<article
				className="small-movie-card catalog__movies-card"
				onMouseEnter={onCardMouseEnter}
				onMouseLeave={onCardMouseLeave}>
				<div className="small-movie-card__image">{children}</div>
				<h3 className="small-movie-card__title">
					<a
						href="#"
						className="small-movie-card__link"
						onClick={(evt) => {
							evt.preventDefault();
							onMovieTitleClick(movie);
						}}>
						{name}
					</a>
				</h3>
			</article>
		);
	}
}

MovieCard.propTypes = {
	children: PropTypes.node.isRequired,
	movie: PropTypes.object.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	onMovieTitleClick: PropTypes.func.isRequired,
	onCardMouseEnter: PropTypes.func.isRequired,
	onCardMouseLeave: PropTypes.func.isRequired,
};
