import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Path from '../../path';
import {formatTime} from '../../services';

const PlayerScreen = (props) => {
	const {
		currentTime,
		duration,
		children,
		progress,
		onFullScreenClick,
		onPlayButtonClick,
		movie: {title, id},
	} = props;
	const current = formatTime(currentTime);
	const durationTime = formatTime(duration);
	return (
		<div className="player">
			<div className="player__video">{children}</div>
			<Link to={Path.film(id)} className="player__exit">
				Exit
			</Link>
			<div className="player__controls">
				<div className="player__controls-row">
					<div className="player__time">
						<progress className="player__progress" value={progress} max={100} />
						<div className="player__toggler" style={{left: `${progress}%`}}>
							Toggler
						</div>
					</div>
					<div className="player__time-value">{`${durationTime.hours}:${durationTime.minutes}:${durationTime.seconds}`}</div>
				</div>
				<div className="player__controls-row">
					<button type="button" className="player__play" onClick={onPlayButtonClick}>
						<svg viewBox="0 0 19 19" width={19} height={19}>
							<use xlinkHref="#play-s" />
						</svg>
						<span>Play</span>
					</button>
					<div className="player__name">{title}</div>
					<button type="button" className="player__full-screen" onClick={onFullScreenClick}>
						<svg viewBox="0 0 27 27" width={27} height={27}>
							<use xlinkHref="#full-screen" />
						</svg>
						<span>Full screen</span>
					</button>
				</div>
			</div>
		</div>
	);
};

PlayerScreen.propTypes = {
	currentTime: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	progress: PropTypes.number.isRequired,
	onFullScreenClick: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired,
};

export default PlayerScreen;
