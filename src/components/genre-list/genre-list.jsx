import React from 'react';
import PropTypes from 'prop-types';

const GenreList = (props) => {
	const {genres, activeFilter, onFilterClick} = props;
	return (
		<ul className="catalog__genres-list">
			{genres.map((item, i) => (
				<li
					className={`catalog__genres-item ${
						activeFilter === item ? `catalog__genres-item--active` : ``
					}`}
					key={item + i}>
					<a
						href="#"
						className="catalog__genres-link"
						onClick={(evt) => {
							evt.preventDefault();
							onFilterClick(item);
						}}>
						{item}
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
