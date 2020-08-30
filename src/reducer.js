import {transformData} from './services';

const initState = {
	activeFilter: `All genres`,
	showCountOnStart: 8,
	showCount: 8,
	movies: [],
	authorizationStatus: false,
};

const ActionType = {
	CHANGE_FILTER: 'CHANGE_FILTER',
	CHANGE_SHOW_COUNT: 'CHANGE_SHOW_COUNT',
	LOAD_MOVIES: `LOAD_MOVIES`,
	LOGIN: `LOGIN`,
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
	login: (status) => ({type: ActionType.LOGIN, payload: status}),
};

const Operation = {
	loadMovies: () => (dispatch, _getState, api) => {
		return api
			.get(`/films`)
			.then((response) => transformData(response.data))
			.then((response) => dispatch(ActionCreator.loadMovies(response)));
	},
	login: (authData) => (dispatch, _getState, api) => {
		return api
			.post(`/login`, {
				email: authData.login,
				password: authData.password,
			})
			.then((response) => dispatch(ActionCreator.requiredAuthorization(response.data)));
	},
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
		case ActionType.LOGIN:
			return {
				...state,
				authorizationStatus: action.payload,
			};
	}
	return state;
};

export {reducer, ActionCreator, ActionType, Operation};
