import {transformData} from '../../services';

const initState = {
	movies: [],
	promoMovie: {},
};

const ActionType = {
	LOAD_MOVIES: `LOAD_MOVIES`,
	LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
};

const ActionCreator = {
	loadMovies: (movies) => ({type: ActionType.LOAD_MOVIES, payload: movies}),
	loadPromoMovie: (movie) => ({type: ActionType.LOAD_PROMO_MOVIE, payload: movie}),
};

const Operation = {
	loadMovies: () => (dispatch, _getState, api) => {
		return api
			.get(`/films`)
			.then((response) => transformData(response.data))
			.then((response) => dispatch(ActionCreator.loadMovies(response)));
	},
	loadPromoMovie: () => (dispatch, _getState, api) => {
		return api
			.get(`/films/promo`)
			.then((response) => transformData(Array(response.data)))
			.then((response) => dispatch(ActionCreator.loadPromoMovie(response)));
	},
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case ActionType.LOAD_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case ActionType.LOAD_PROMO_MOVIE:
			return {
				...state,
				promoMovie: action.payload[0],
			};
	}
	return state;
};
export {reducer, ActionCreator, ActionType, Operation};
