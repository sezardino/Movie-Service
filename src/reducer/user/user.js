const initState = {
	authorizationStatus: false,
};

const ActionType = {
	LOGIN: `LOGIN`,
};

const ActionCreator = {
	login: (status) => ({type: ActionType.LOGIN, payload: status}),
};

const Operation = {
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
		case ActionType.LOGIN:
			return {
				...state,
				authorizationStatus: action.payload,
			};
	}
	return state;
};

export {reducer, ActionCreator, ActionType, Operation};
