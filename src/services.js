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

export {formatTime, randomElInArr};
