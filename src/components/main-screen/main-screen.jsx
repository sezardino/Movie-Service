import React from 'react';
import {ActionCreator} from '../../reducer/logic/logic';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import PromoMovie from '../promo-movie/promo-movie.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import ShowMore from '../show-more/show-more.jsx';

import withActivePlayer from '../../hocs/with-active-player/with-active-player';

const MovieListWrapped = withActivePlayer(MovieList);

const MainScreen = (props) => {
	const {
		changeFilterHandler,
		movies,
		activeFilter,
		showCount,
		showMoreClickHandler,
		onTitleClick,
		promoMovie,
		onPlayButtonClick,
	} = props;
	const genresSet = new Set([`All genres`, ...movies.map((item) => item.genre).sort()]);
	const genres = [];
	genresSet.forEach((item) => genres.push(item));
	const filteredList = movies.filter((item) => {
		if (activeFilter === `All genres`) {
			return item;
		}
		return item.genre === activeFilter;
	});

	return (
		<>
			<PromoMovie movie={promoMovie} onPlayButtonClick={onPlayButtonClick} />
			<div className="page-content">
				<section className="catalog">
					<h2 className="catalog__title visually-hidden">Catalog</h2>
					<GenreList
						genres={genres}
						activeFilter={activeFilter}
						onFilterClick={changeFilterHandler}
					/>

					<MovieListWrapped
						movies={filteredList}
						count={showCount}
						activeFilter={activeFilter}
						onTitleClick={onTitleClick}
					/>
					{showCount < filteredList.length && <ShowMore onShowMoreClick={showMoreClickHandler} />}
				</section>

				<PageFooter mainScreen={true} />
			</div>
		</>
	);
};

MainScreen.propTypes = {
	// onPlayButtonClick: PropTypes.func.isRequired,
	changeFilterHandler: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	activeFilter: PropTypes.string.isRequired,
	showCount: PropTypes.number.isRequired,
	showMoreClickHandler: PropTypes.func.isRequired,
	// onTitleClick: PropTypes.func.isRequired,
	promoMovie: PropTypes.object.isRequired,
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

const mapDispatchToProps = (dispatch) => {
	return {
		changeFilterHandler(filter) {
			dispatch(ActionCreator.changeFilter(filter));
		},
		showMoreClickHandler() {
			dispatch(ActionCreator.changeShowCount());
		},
	};
};

export {MainScreen};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
