import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withPlayer = (Component) => {
	class WithPlayer extends PureComponent {
		constructor(props) {
			super(props);
			this.playerRef = React.createRef();

			this.state = {
				isPlaying: false,
			};
			this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
			this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
		}

		componentDidUpdate() {
			const player = this.playerRef.current;
			const {isPlaying} = this.state;
			player.volume = 0;
			if (isPlaying) {
				player.play();
			} else {
				player.load();
			}
		}

		componentWillUnmount() {
			const player = this.playerRef.current;
			player.volume = null;
		}

		mouseEnterHandler() {
			this.setState({isPlaying: true});
		}

		mouseLeaveHandler() {
			this.setState({isPlaying: false});
		}

		render() {
			const {poster, trailer} = this.props.movie;
			const {isPlaying} = this.state;
			return (
				<Component
					{...this.props}
					onCardMouseEnter={this.mouseEnterHandler}
					onCardMouseLeave={this.mouseLeaveHandler}
					isPlaying={isPlaying}>
					<video poster={poster} ref={this.playerRef} width="280" height="175" src={trailer} />
				</Component>
			);
		}
	}
	WithPlayer.propTypes = {
		movie: PropTypes.object.isRequired,
	};

	return WithPlayer;
};

export default withPlayer;
