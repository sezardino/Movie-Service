import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
	const {genres, activeFilter, onFilterClick} = props;
	return (
		<ul className="catalog__genres-list">
			{genres.map((item) => (
				<li
					className={`catalog__genres-item ${
						activeFilter === item.key ? `catalog__genres-item--active` : ``
					}`}
					key={item.key}>
					<a
						href="#"
						className="catalog__genres-link"
						onClick={(evt) => {
							evt.preventDefault();
							onFilterClick(item.key);
						}}>
						{item.title}
					</a>
				</li>
			))}
		</ul>
	);
};

GenreList.propTypes = {
	genres: PropTypes.array.isRequired,
	activeFilter: PropTypes.string.isRequired,
	onFilterClick: PropTypes.func.isRequired,
};

export default GenreList;
