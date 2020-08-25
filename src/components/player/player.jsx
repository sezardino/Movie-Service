import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Player extends Component {
	constructor(props) {
		super(props);

		this.playerRef = React.createRef();
	}

	componentDidMount() {
		const player = this.playerRef.current;
		player.volume = this.props.volume;
		const {isPlaying} = this.props;
		if (isPlaying) {
			player.play();
		} else {
			player.load();
		}
	}

	componentDidUpdate() {
		const player = this.playerRef.current;
		if (isPlaying) {
			player.play();
		} else {
			player.load();
		}
	}

	render() {
		const {img, video} = this.props;
		return <video poster={img} ref={this.playerRef} width="280" height="175" src={video} />;
	}
}

Player.propTypes = {
	img: PropTypes.string.isRequired,
	video: PropTypes.string.isRequired,
	isPlaying: PropTypes.bool.isRequired,
	volume: PropTypes.number.isRequired,
};
