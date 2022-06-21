import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from '../styles/styles.js';
const HomeScreen = () => {
  return (
    <View style={styles.hometext}>
      <Image
        style={styles.homeimg}
        source={require('../assets/icons/pokeball.png')}
      />
      <Text style={styles.title}> POKEMONS </Text>
    </View>
  );
};

export default HomeScreen;
