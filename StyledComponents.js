// StyledComponents.js
import styled from 'styled-components/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, GuessButton } from './StyledComponents'; // Import your styled components

const Game = () => {
  return (
    <Container>
      <Header>Guess the Next Card Game</Header>
      {/* ...other components... */}
      <GuessButton title="Higher" onPress={() => handleGuess('Higher')} />
      {/* ...other buttons... */}
    </Container>
  );
};



export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const GuessButton = styled.Button`
  /* Add custom styles for your buttons here */
`;
export default Game;