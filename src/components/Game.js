import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Game = () => {
  // Define the deck of cards
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const jokers = ['Red Joker', 'Black Joker'];
  const healthCards = ['Health 1', 'Health 2'];

  // Create an array to represent the deck
  const deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ suit, value });
    });
  });
  deck.push(...jokers, ...healthCards);

  // Shuffle the deck (you can use a shuffle function)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Set up initial game state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({});
  const [guess, setGuess] = useState('');
  const [playerScores, setPlayerScores] = useState({});
  const [playerHealthCards, setPlayerHealthCards] = useState({});
  const players = ['Player 1', 'Player 2', 'Player 3'];
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  // Function to handle user guesses
  const handleGuess = (guess) => {
    // Determine if the guess is correct
    const nextCard = shuffledDeck[currentCardIndex + 1];
    let isCorrect = false;

    if (
      (guess === 'Higher' && values.indexOf(nextCard.value) > values.indexOf(currentCard.value)) ||
      (guess === 'Lower' && values.indexOf(nextCard.value) < values.indexOf(currentCard.value)) ||
      (guess === 'Joker' && (nextCard === 'Red Joker' || nextCard === 'Black Joker'))
    ) {
      isCorrect = true;
    }

    // Handle the result
    if (isCorrect) {
      // Update the current card and index
      setCurrentCard(nextCard);
      setCurrentCardIndex(currentCardIndex + 1);

      // Add logic to check for Health cards, same number, and same number & color here

      // Clear the previous guess
      setGuess('');
    } else {
      // Handle incorrect guess (push-up logic)
      // Add your push-up logic here
    }
  };

  // Function to handle using health cards
 const useHealthCard = (playerName) => {
    // Check if the current player has health cards
    if (playerHealthCards[playerName] && playerHealthCards[playerName] > 0) {
      // Implement the logic for using health cards here
      // For example, you can skip a penalty or perform other actions
  
      // Reduce the number of health cards the player has by 1
      setPlayerHealthCards({
        ...playerHealthCards,
        [playerName]: playerHealthCards[playerName] - 1,
      });
  
      // Update the game state accordingly
      // For example, you can clear penalties or apply other effects
    } else {
      // Handle the case where the player doesn't have any health cards left
      alert('You do not have any health cards left to use.');
    }
  };
  

  // Function to handle the "Skip - 1" option
 const skipPenalty = () => {
    // Assume there's a penalty counter in your game state
    const penaltyCounter = playerPenaltyCounter; // Replace with your actual state variable
  
    // Check if the penalty counter is greater than 0
    if (penaltyCounter > 0) {
      // Decrement the penalty counter by 1
      const updatedPenaltyCounter = penaltyCounter - 1;
  
      // Update the game state with the new penalty counter
      setPlayerPenaltyCounter(updatedPenaltyCounter);
  
      // You can also update other game state related to the penalty
      // For example, clear the current penalty state
      setPlayerCurrentPenalty(null);
      
      // Add any other logic specific to clearing the penalty
    } else {
      // Handle the case where there's no penalty to skip or the penalty is already cleared
      alert('There is no penalty to skip or the penalty is already cleared.');
    }
  };
  

  // Function to handle the "Flip - 2" option
 // Inside the Game component
const flipCard = () => {
    // Check if the current player has health cards
    if (playerHealthCards[currentPlayer] > 0) {
      // Decrement the player's health card count by 1
      const updatedHealthCards = { ...playerHealthCards };
      updatedHealthCards[currentPlayer]--;
  
      // Reveal the next card from the shuffled deck
      const nextCardIndex = currentCardIndex + 1;
      if (nextCardIndex < shuffledDeck.length) {
        const nextCard = shuffledDeck[nextCardIndex];
  
        // Update the game state to show the revealed card as a hint
        setRevealedCard(nextCard);
  
        // Update the player's health card count
        setPlayerHealthCards(updatedHealthCards);
  
        // You can also add any other logic related to using a health card here
  
        // Increment the current card index
        setCurrentCardIndex(nextCardIndex);
      } else {
        // Handle the case where there are no more cards to reveal
        alert('There are no more cards to reveal.');
      }
    } else {
      // Handle the case where the player doesn't have any health cards left
      alert('You do not have any health cards left to use.');
    }
  };
  
  // Shuffle the deck when the component mounts
  useEffect(() => {
    // Shuffle the deck when the component mounts
    const shuffledDeck = shuffleArray(deck);
  
    // Initialize the current card and other related state variables
    setCurrentCard(shuffledDeck[0]); // Initialize current card to the first card in the shuffled deck
    setCurrentCardIndex(0); // Initialize the current card index to 0
  
    // You can also initialize other state variables here, if needed
  
  }, []); // Empty dependency array to run the effect once on mount
  

  return (
    <View>
      <Text>Current Player: {players[currentPlayerIndex]}</Text>
      <Text>Current Card: {currentCard.value} of {currentCard.suit}</Text>

      {/* Buttons for guessing */}
      <Button title="Higher" onPress={() => handleGuess('Higher')} />
      <Button title="Lower" onPress={() => handleGuess('Lower')} />
      <Button title="Joker" onPress={() => handleGuess('Joker')} />

      {/* Button for skipping a penalty */}
      <Button title="Skip - 1" onPress={() => skipPenalty()} />

      {/* Button for flipping a card */}
      <Button title="Flip - 2" onPress={() => flipCard()} />

      {/* Button for using health cards */}
      <Button title="Use Health Card" onPress={() => useHealthCard(players[currentPlayerIndex])} />
    </View>
  );
};

export default Game;
