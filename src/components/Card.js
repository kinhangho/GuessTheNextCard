import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ card }) => {
  return (
    <View>
      <Text>{card.value} of {card.suit}</Text>
    </View>
  );
};

export default Card;
