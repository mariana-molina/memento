import React, { useEffect, useState } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';

function App() {
	const [cards, setCards] = useState(shuffle);
	const [pickOne, setPickOne] = useState(null);
	const [pickTwo, setPickTwo] = useState(null);
	const [disable, setDisable] = useState(false);
	const [wins, setWins] = useState(0);

	const handleClick = card => {
		if (!disable) {
			pickOne ? setPickTwo(card) : setPickOne(card);
		}
	};

	const handleTurn = () => {
		setPickOne(null);
		setPickTwo(null);
		setDisable(false);
	};

	useEffect(() => {
		let pickTimer;
		//if 2 cards have been click
		if (pickOne && pickTwo)

	}, [cards, pickOne, pickTwo]);

	return (
		<div className="grid">
			{cards.map(card => {
				const { id, image, matched } = card;

				return (
					<Card
						key={id}
						image={image}
						selected={card === pickOne || card === pickTwo || matched}
						onClick={() => {
							handleClick(card);
						}}
					/>
				);
			})}
		</div>
	);
}

export default App;
