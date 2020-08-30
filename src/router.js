import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Path from './path';
import withVideoPlayer from './hocs/with-video-player/with-video-player';

import MainScreen from './components/main-screen/main-screen.jsx';
import SignIn from './components/sign-in/sign-in.jsx';
import MoviePage from './components/movie-page/movie-page.jsx';
import PlayerScreen from './components/player-screen/player-screen.jsx';

const PlayerScreenWrapped = withVideoPlayer(PlayerScreen);
const Router = () => (
	<Switch>
		<Route path={Path.main()} exact component={MainScreen} />
		<Route path={Path.login()} exact component={SignIn} />
		<Route path={Path.film(`:id`)} exact component={MoviePage} />
		<Route path={Path.showFilm(`:id`)} exact component={PlayerScreenWrapped} />
	</Switch>
);

export default Router;
