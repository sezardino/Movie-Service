import axios from 'axios';

export const createAPI = (dispatch) => {
	const api = axios.create({
		baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
		timeout: 5000,
		withCredentials: true,
	});

	const onSuccess = (response) => response;
	const onFail = (err) => {
		if (err.response.status === 403) {
			dispatch(ActionCreator.requireAuthorization(true));
		}
		return err;
	};

	api.interceptors.response.use(onSuccess, onFail);

	return api;
};
