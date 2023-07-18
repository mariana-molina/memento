const shuffle = () => {
	const assets = [
		{
			image: `https://images.pexels.com/photos/14531531/pexels-photo-14531531.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/13085125/pexels-photo-13085125.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/17407385/pexels-photo-17407385.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/40986/dog-bulldog-white-tongue-40986.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/15824643/pexels-photo-15824643/free-photo-of-madera-naturaleza-animal-perro.png?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/8895723/pexels-photo-8895723.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
		{
			image: `https://images.pexels.com/photos/5321441/pexels-photo-5321441.jpeg?auto=compress&cs=tinysrgb&w=600`,
		},
	];
	return [...assets, ...assets]
		.sort(() => Math.random() - 0.5)
		.map(card => ({ ...card, id: Math.random() }));
};

export default shuffle;
