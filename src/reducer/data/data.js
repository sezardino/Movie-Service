import {transformData} from '../../services';

const initState = {
	movies: [],
};
const ActionType = {
	LOAD_MOVIES: `LOAD_MOVIES`,
};
const ActionCreator = {
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
const reducer = (state = initState, action) => {
	switch (action.type) {
		case ActionType.LOAD_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
	}
	return state;
};
export {reducer, ActionCreator, ActionType, Operation};
