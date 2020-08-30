import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
	const {renderVideo} = props;
	return <div className="small-movie-card__image">{renderVideo()}</div>;
};

Player.propTypes = {
	renderVideo: PropTypes.func.isRequired,
};
export default Player;
