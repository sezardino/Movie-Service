import {movies, genres} from './mock/mock';

const FILTERS = {
	ALL: 'all',
	COMEDIES: 'comedy',
	CRIME: 'crime',
	DOCUMENTARY: 'documentary',
	DRAMAS: 'drama',
	HORROR: 'horror',
	KIDS_FAMILY: 'kf',
	ROMANCE: 'romance',
	SCI_FI: 'sf',
	TRILLER: 'triller',
};

const initState = {
	activeFilter: FILTERS.ALL,
	showCountOnStart: 8,
	showCount: 8,
	movies: [],
	genreList: genres,
};

const ActionType = {
	CHANGE_FILTER: 'CHANGE_FILTER',
	CHANGE_SHOW_COUNT: 'CHANGE_SHOW_COUNT',
	LOAD_MOVIES: `LOAD_MOVIES`,
};

const ActionCreator = {
	changeFilter: (filter) => ({
		type: ActionType.CHANGE_FILTER,
		payload: filter,
	}),
	changeShowCount: () => ({
		type: ActionType.CHANGE_SHOW_COUNT,
		payload: 20,
	}),
	loadMovies: (movies) => ({type: ActionType.LOAD_MOVIES, payload: movies}),
};

const Operation = {
	loadMovies: () => (dispatch, _getState, api) => {
		return api
			.get(`/films`)
			.then((response) => transformData(response.data))
			.then((response) => dispatch(ActionCreator.loadMovies(response)));
	},
};

const transformData = (data) => {
	return data.map((item) => {
		return {
			description: item.description,
			director: item.director,
			genre: item.genre,
			id: item.id,
			name: item.name,
			rating: item.rating,
			released: item.released,
			starring: item.starring,
			backgroundColor: item.background_color,
			backgroundImage: item.background_image,
			isFavorite: item.is_favorite,
			posterImage: item.poster_image,
			previewImage: item.preview_image,
			previewVideoLink: item.preview_video_link,
			runTime: item.run_time,
			scoresCount: item.scores_count,
			videoLink: item.video_link,
		};
	});
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case ActionType.CHANGE_FILTER:
			return {
				...state,
				activeFilter: action.payload,
				showCount: state.showCountOnStart,
			};
		case ActionType.CHANGE_SHOW_COUNT:
			return {
				...state,
				showCount: state.showCount + action.payload,
			};
		case ActionType.LOAD_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
	}
	return state;
};

export {reducer, ActionCreator, ActionType, Operation};
