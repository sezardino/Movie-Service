import React from 'react';
import PropTypes from 'prop-types';

const PageFooter = (props) => {
	const {mainScreen} = props;
	return (
		<footer className="page-footer">
			<div className="logo">
				{mainScreen && (
					<a className="logo__link logo__link--light">
						<span className="logo__letter logo__letter--1">W</span>
						<span className="logo__letter logo__letter--2">T</span>
						<span className="logo__letter logo__letter--3">W</span>
					</a>
				)}
				{!mainScreen && (
					<a href="#" className="logo__link logo__link--light" onClick={props.onLogoClick}>
						<span className="logo__letter logo__letter--1">W</span>
						<span className="logo__letter logo__letter--2">T</span>
						<span className="logo__letter logo__letter--3">W</span>
					</a>
				)}
			</div>

			<div className="copyright">
				<p>© 2019 What to watch Ltd.</p>
			</div>
		</footer>
	);
};

PageFooter.propTypes = {
	mainScreen: PropTypes.bool,
	onLogoClick: PropTypes.func,
};

export default PageFooter;
