import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Router from '../../router';
import Sprite from '../sprite/sprite.jsx';
import MainScreen from '../main-screen/main-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';

import PlayerScreen from '../player-screen/player-screen.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

const PlayerScreenWrapped = withVideoPlayer(PlayerScreen);
class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			authorization: props.authorizationStatus,
			mainScreen: true,
			moviePage: false,
			activePlayer: false,
			movieData: {},
		};
		this.titleClickHandler = this.titleClickHandler.bind(this);
		this.toMainScreenHolder = this.toMainScreenHolder.bind(this);
		this.launchMovie = this.launchMovie.bind(this);
		this.launchPromoMovie = this.launchPromoMovie.bind(this);
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

	launchPromoMovie() {
		this.setState({
			moviePage: false,
			activePlayer: true,
			mainScreen: false,
			movieData: this.props.promoMovie,
		});
	}

	exitMovie() {
		this.setState({moviePage: true, activePlayer: false});
	}

	titleClickHandler(data) {
		this.setState({moviePage: true, mainScreen: false, movieData: data});
	}

	toMainScreenHolder() {
		this.setState({
			mainScreen: true,
			moviePage: false,
			authorization: false,
			movieData: this.props.promoMovie,
		});
	}

	render() {
		const {mainScreen, moviePage, movieData, activePlayer, authorization} = this.state;
		return (
			<>
				<Sprite />
				<Router />
				{/* {authorization && <SignIn onLogoClick={this.toMainScreenHolder} />}
				{mainScreen && (
					<MainScreen
						onTitleClick={this.titleClickHandler}
						onPlayButtonClick={this.launchPromoMovie}
					/>
				)}
				{moviePage && (
					<MoviePage
						movie={movieData}
						// movies={movies}
						onLogoClick={this.toMainScreenHolder}
						onMovieTitleClick={this.movieTitleClickHandler}
						onPlayButtonClick={this.launchMovie}
					/>
				)}
				{activePlayer && <PlayerScreenWrapped movie={movieData} onExitClick={this.exitMovie} />} */}
			</>
		);
	}
}

App.propTypes = {
	authorizationStatus: PropTypes.bool.isRequired,
	promoMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		authorizationStatus: state.user.authorizationStatus,
		promoMovie: state.data.promoMovie,
	};
};

export {App};

export default connect(mapStateToProps, null)(App);
