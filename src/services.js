const formatTime = (time) => {
	const hours = Math.floor(time / 600),
		minutes = Math.floor(time / 60),
		seconds = Math.floor(time % 60);
	return {hours, minutes, seconds};
};

const randomElInArr = (arr) => {
	const randomNum = Math.floor(Math.random() * arr.length);
	return arr[randomNum];
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

export {formatTime, randomElInArr, transformData};
