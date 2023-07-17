const shuffle = () => {
	const assets = [
		{ image: '/assets/dog1.jpg' },
		{ image: '/assets/dog2.jpg' },
		{ image: '/assets/dog3.jpg' },
		{ image: '/assets/dog4.jpg' },
		{ image: '/assets/dog5.jpg' },
		{ image: '/assets/dog6.jpg' },
		{ image: '/assets/dog7.jpg' },
		{ image: '/assets/dog8.jpg' },
	];
	return [...assets, ...assets]
		.sort(() => Math.random() - 0.5)
		.map(card => ({ ...card, id: Math.random() }));
};

export default shuffle;
