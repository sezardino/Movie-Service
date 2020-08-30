const initState = {
	activeFilter: `All genres`,
	showCountOnStart: 8,
	showCount: 8,
};

const ActionType = {
	CHANGE_FILTER: 'CHANGE_FILTER',
	CHANGE_SHOW_COUNT: 'CHANGE_SHOW_COUNT',
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
	}
	return state;
};

export {reducer, ActionCreator, ActionType};
