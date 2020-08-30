import React from 'react';
import Header from '../header/header.jsx';
import {Link} from 'react-router-dom';
import Path from '../../path';

const PromoMovie = (props) => {
	const {
		movie: {name, genre, released, backgroundImage, posterImage, id},
		onPlayButtonClick,
	} = props;
	return (
		<section className="movie-card">
			<div className="movie-card__bg">
				<img src={backgroundImage} alt={name} />
			</div>
			<h1 className="visually-hidden">WTW</h1>

			<Header />

			<div className="movie-card__wrap">
				<div className="movie-card__info">
					<div className="movie-card__poster">
						<img src={posterImage} alt={`${name} poster`} width="218" height="327" />
					</div>

					<div className="movie-card__desc">
						<h2 className="movie-card__title">{name}</h2>
						<p className="movie-card__meta">
							<span className="movie-card__genre">{genre}</span>
							<span className="movie-card__year">{released}</span>
						</p>

						<div className="movie-card__buttons">
							<Link to={Path.showFilm(id)} className="btn btn--play movie-card__button">
								<svg viewBox="0 0 19 19" width="19" height="19">
									<use xlinkHref="#play-s"></use>
								</svg>
								<span>Play</span>
							</Link>
							<button className="btn btn--list movie-card__button" type="button">
								<svg viewBox="0 0 19 20" width="19" height="20">
									<use xlinkHref="#add"></use>
								</svg>
								<span>My list</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PromoMovie;
