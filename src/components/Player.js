import React from 'react';
import { View, Text } from 'react-native';

const Player = ({ name, score }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
};

export default Player;
