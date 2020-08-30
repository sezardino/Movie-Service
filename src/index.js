import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from './reducer/reducer';
import {Operation} from './reducer/data/data';
import {createAPI} from './api';
import App from './components/app/app.jsx';

const init = () => {
	const api = createAPI((...args) => store.dispatch(...args));
	const store = createStore(
		reducer,
		compose(
			applyMiddleware(thunk.withExtraArgument(api)),
			window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
		)
	);

	store.dispatch(Operation.loadPromoMovie());
	store.dispatch(Operation.loadMovies());
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		document.getElementById(`root`)
	);
};

init();
