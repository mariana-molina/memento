import React, { useEffect, useState } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';
import Header from './components/Header';

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

	const handlerNewGame = () => {
		setWins(0);
		handleTurn();
		setCards(shuffle);
	};

	useEffect(() => {
		let pickTimer;
		//if 2 cards have been click
		if (pickOne && pickTwo) {
			//check if they are the same
			if (pickOne.image === pickTwo.image) {
				setCards(prevCard => {
					return prevCard.map(card => {
						if (card.image === pickOne.image) {
							return { ...card, matched: true };
							//no match:
						} else {
							return card;
						}
					});
				});
				handleTurn();
			} else {
				setDisable(true);
				//add delay between the 2 turns
				pickTimer = setTimeout(() => {
					handleTurn();
				}, 1000);
			}
		}
		return () => {
			clearTimeout(pickTimer);
		};
	}, [cards, pickOne, pickTwo]);

	useEffect(() => {
		const checkWin = cards.filter(card => !card.matched);
		if (cards.length && checkWin.length < 1) {
			console.log('You WIN');
			setWins(wins + 1);
			handleTurn();
			setCards(shuffle);
		}
	}, [cards, wins]);

	return (
		<>
			<Header wins={wins} handlerNewGame={handlerNewGame} />
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
		</>
	);
}

export default App;
