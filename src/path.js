const Path = {
	main: () => `/`,
	login: () => `/login`,
	film: (id) => `/film/${id}`,
	showFilm: (id) => `/film/${id}/play`,
	favorites: () => `/favorites`,
	review: (id) => `/film/${id}/review`,
};

export default Path;
