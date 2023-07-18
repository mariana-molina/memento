const shuffle = () => {
	const assets = [
		{ image: `${process.env.PUBLIC_URL}/assets/dog1.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog2.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog3.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog4.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog5.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog6.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog7.jpg` },
		{ image: `${process.env.PUBLIC_URL}/assets/dog8.jpg` },
	];
	return [...assets, ...assets]
		.sort(() => Math.random() - 0.5)
		.map(card => ({ ...card, id: Math.random() }));
};

export default shuffle;
