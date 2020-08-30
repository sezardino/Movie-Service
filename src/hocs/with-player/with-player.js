import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withPlayer = (Component) => {
	class WithPlayer extends PureComponent {
		constructor(props) {
			super(props);
			this.playerRef = React.createRef();
			this.renderVideo = this.renderVideo.bind(this);
		}

		componentDidMount() {
			const {previewImage, previewVideoLink} = this.props.movie;
			const player = this.playerRef.current;
			player.src = previewVideoLink;
			player.poster = previewImage;
		}

		componentDidUpdate() {
			const {isPlaying} = this.props;
			const player = this.playerRef.current;
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

		renderVideo() {
			return <video ref={this.playerRef} width="280" height="175" />;
		}
		render() {
			return <Component {...this.props} renderVideo={this.renderVideo} />;
		}
	}

	WithPlayer.propTypes = {
		movie: PropTypes.object.isRequired,
		isPlaying: PropTypes.bool.isRequired,
	};

	return WithPlayer;
};

export default withPlayer;
