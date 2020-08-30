import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideoPlayer = (Component) => {
	class WithVideoPlayer extends PureComponent {
		constructor(props) {
			super(props);
			this.playerRef = React.createRef();
			this.state = {
				isPlaying: false,
				duration: null,
				progress: null,
				currentTime: null,
				fullScreen: false,
			};
			this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
			this.playButtonHandler = this.playButtonHandler.bind(this);
			this.playButtonHandler = this.playButtonHandler.bind(this);
			this.fullScreenButtonHandler = this.fullScreenButtonHandler.bind(this);
			this.onExitButtonClick = this.onExitButtonClick.bind(this);
		}

		componentDidMount() {
			console.log(this.props);
			const player = this.playerRef.current;
			player.src = this.props.movie.videoLink;
			console.log(player);

			player.oncanplay = () => {
				this.setState(() => ({duration: Math.floor(player.duration)}));
			};

			player.onfullscreenchange = () => {
				this.setState((state) => ({fullScreen: !state.fullScreen}));
			};

			player.ontimeupdate = () => {
				this.setState((state) => {
					const currentTime = Math.floor(player.currentTime);
					const progress = (currentTime * 100) / state.duration;
					return {
						currentTime,
						progress,
					};
				});
			};
		}

		componentDidUpdate() {
			const player = this.playerRef.current;
			const {isPlaying} = this.state;
			isPlaying ? player.play() : player.pause();
		}

		componentWillUnmount() {
			const player = this.playerRef.current;
			player.volume = null;
		}

		playButtonHandler() {
			this.setState((state) => ({isPlaying: !state.isPlaying}));
		}

		fullScreenButtonHandler() {
			const player = this.playerRef.current;
			player.requestFullscreen();
		}

		mouseLeaveHandler() {
			this.setState({isPlaying: false});
		}

		onExitButtonClick() {
			this.setState(() => ({isPlaying: false}));
			this.props.onExitClick();
		}

		render() {
			const {poster} = this.props.movie;
			const {isPlaying, duration, currentTime, progress} = this.state;
			return (
				<Component
					{...this.props}
					onPlayButtonClick={this.playButtonHandler}
					isPlaying={isPlaying}
					onFullScreenClick={this.fullScreenButtonHandler}
					onExitButtonClick={this.onExitButtonClick}
					duration={duration}
					currentTime={currentTime}
					progress={progress}>
					<video poster={poster} ref={this.playerRef} width="100%" height="100%" />
				</Component>
			);
		}
	}
	WithVideoPlayer.propTypes = {
		movie: PropTypes.object.isRequired,
	};

	return WithVideoPlayer;
};

export default withVideoPlayer;
