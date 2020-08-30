import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import PropTypes from 'prop-types';
import Sprite from '../sprite/sprite.jsx';
import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import ShowMore from '../show-more/show-more.jsx';
import withActivePlayer from '../../hocs/with-active-player/with-active-player';

import PlayerScreen from '../player-screen/player-screen.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {randomElInArr} from '../../services';

const MovieListWrapped = withActivePlayer(MovieList);
const PlayerScreenWrapped = withVideoPlayer(PlayerScreen);
class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			authorization: props.authorizationStatus,
			mainScreen: true,
			moviePage: false,
			activePlayer: false,
			movieData: randomElInArr(props.movies),
		};
		this.movieTitleClickHandler = this.movieTitleClickHandler.bind(this);
		this.toMainScreenHolder = this.toMainScreenHolder.bind(this);
		this.launchMovie = this.launchMovie.bind(this);
		this.exitMovie = this.exitMovie.bind(this);
	}

	componentDidMount() {
		if (this.state.authorization) {
			this.setState(() => ({mainScreen: false}));
		}
	}

	launchMovie() {
		this.setState({moviePage: false, activePlayer: true, mainScreen: false});
	}

	exitMovie() {
		this.setState({moviePage: true, activePlayer: false});
	}

	movieTitleClickHandler(data) {
		this.setState({moviePage: true, mainScreen: false, movieData: data});
	}

	toMainScreenHolder() {
		this.setState({mainScreen: true, moviePage: false, authorization: false});
	}

	render() {
		const {movies, showCount, changeFilterHandler, activeFilter, showMoreClickHandler} = this.props;
		const genresSet = new Set([`All genres`, ...movies.map((item) => item.genre).sort()]);
		const genres = [];
		genresSet.forEach((item) => genres.push(item));
		const {mainScreen, moviePage, movieData, activePlayer, authorization} = this.state;
		const filteredList = movies.filter((item) => {
			if (activeFilter === `All genres`) {
				return item;
			}
			return item.genre === activeFilter;
		});
		return (
			<>
				<Sprite />
				{authorization && <SignIn onLogoClick={this.toMainScreenHolder} />}
				{mainScreen && (
					<MainScreen movie={movieData} onPlayButtonClick={this.launchMovie}>
						<GenreList
							genres={genres}
							activeFilter={activeFilter}
							onFilterClick={changeFilterHandler}
						/>
						<MovieListWrapped
							movies={filteredList}
							count={showCount}
							activeFilter={activeFilter}
							onMovieTitleClick={this.movieTitleClickHandler}
						/>
						{showCount < filteredList.length && <ShowMore onShowMoreClick={showMoreClickHandler} />}
					</MainScreen>
				)}
				{moviePage && (
					<MoviePage
						movie={movieData}
						movies={movies}
						onLogoClick={this.toMainScreenHolder}
						onMovieTitleClick={this.movieTitleClickHandler}
						onPlayButtonClick={this.launchMovie}
					/>
				)}
				{activePlayer && <PlayerScreenWrapped movie={movieData} onExitClick={this.exitMovie} />}
			</>
		);
	}
}

App.propTypes = {
	movies: PropTypes.array,
	activeFilter: PropTypes.string.isRequired,
	changeFilterHandler: PropTypes.func.isRequired,
	showCount: PropTypes.number.isRequired,
	showMoreClickHandler: PropTypes.func.isRequired,
	authorizationStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
		activeFilter: state.activeFilter,
		showCount: state.showCount,
		authorizationStatus: state.authorizationStatus,
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

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
