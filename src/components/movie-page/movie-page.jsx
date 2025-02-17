import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Path from '../../path';
import Tabs from '../tabs/tabs.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import MovieList from '../movie-list/movie-list.jsx';

const MoviePage = (props) => {
	const {
		movies,
		match: {params},
	} = props;
	const movie = movies[params.id - 1];
	const {genre, name, released, backgroundColor, backgroundImage, posterImage, id} = movie;
	// const {onLogoClick, onPlayButtonClick} = props;
	return (
		<>
			<section className="movie-card movie-card--full" style={{background: backgroundColor}}>
				<div className="movie-card__hero">
					<div className="movie-card__bg">
						<img src={backgroundImage} alt={name} />
					</div>

					<h1 className="visually-hidden">WTW</h1>

					<header className="page-header movie-card__head">
						<div className="logo">
							<Link
								to={Path.main()}
								className="logo__link"
								// onClick={onLogoClick}
							>
								<span className="logo__letter logo__letter--1">W</span>
								<span className="logo__letter logo__letter--2">T</span>
								<span className="logo__letter logo__letter--3">W</span>
							</Link>
						</div>

						<div className="user-block">
							<div className="user-block__avatar">
								<img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
							</div>
						</div>
					</header>

					<div className="movie-card__wrap">
						<div className="movie-card__desc">
							<h2 className="movie-card__title">{name}</h2>
							<p className="movie-card__meta">
								<span className="movie-card__genre">{genre}</span>
								<span className="movie-card__year">{released}</span>
							</p>

							<div className="movie-card__buttons">
								<Link
									to={Path.showFilm(id)}
									className="btn btn--play movie-card__button"
									// onClick={onPlayButtonClick}
								>
									<svg viewBox="0 0 19 19" width="19" height="19">
										<use xlinkHref="#play-s" />
									</svg>
									<span>Play</span>
								</Link>
								<button className="btn btn--list movie-card__button" type="button">
									<svg viewBox="0 0 19 20" width="19" height="20">
										<use xlinkHref="#add" />
									</svg>
									<span>My list</span>
								</button>
								<a href="add-review.html" className="btn movie-card__button">
									Add review
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="movie-card__wrap movie-card__translate-top">
					<div className="movie-card__info">
						<div className="movie-card__poster movie-card__poster--big">
							<img
								src={posterImage}
								alt="The Grand Budapest Hotel poster"
								width="218"
								height="327"
							/>
						</div>

						<Tabs movieData={movie} />
					</div>
				</div>
			</section>

			<div className="page-content">
				<section className="catalog catalog--like-this">
					<h2 className="catalog__title">More like this</h2>

					{/* <MovieList movies={movies} count={4} onMovieTitleClick={props.onMovieTitleClick} /> */}
				</section>

				<PageFooter />
			</div>
		</>
	);
};

MoviePage.propTypes = {
	// onLogoClick: PropTypes.func.isRequired,
	// onPlayButtonClick: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired,
	// onMovieTitleClick: PropTypes.func.isRequired,
	// movies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
	return {
		movies: state.data.movies,
		promoMovie: state.data.promoMovie,
		activeFilter: state.logic.activeFilter,
		showCount: state.logic.showCount,
		authorizationStatus: state.user.authorizationStatus,
	};
};

export {MoviePage};

export default connect(mapStateToProps)(MoviePage);
