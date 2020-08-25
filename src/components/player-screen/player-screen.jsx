import React from 'react';
import {formatTime} from '../../services';
const PlayerScreen = (props) => {
	const currentTime = formatTime(props.currentTime);
	const duration = formatTime(props.duration);
	return (
		<div className="player">
			<div className="player__video">{props.children}</div>
			{/* <video src="#" className="player__video" poster="img/player-poster.jpg" /> */}
			<button type="button" className="player__exit" onClick={props.onExitButtonClick}>
				Exit
			</button>
			<div className="player__controls">
				<div className="player__controls-row">
					<div className="player__time">
						<progress className="player__progress" value={props.progress} max={100} />
						<div className="player__toggler" style={{left: `${props.progress}%`}}>
							Toggler
						</div>
					</div>
					<div className="player__time-value">{`${duration.hours}:${duration.minutes}:${duration.seconds}`}</div>
				</div>
				<div className="player__controls-row">
					<button type="button" className="player__play" onClick={props.onPlayButtonClick}>
						<svg viewBox="0 0 19 19" width={19} height={19}>
							<use xlinkHref="#play-s" />
						</svg>
						<span>Play</span>
					</button>
					<div className="player__name">{props.movie.title}</div>
					<button type="button" className="player__full-screen" onClick={props.onFullScreenClick}>
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

export default PlayerScreen;
