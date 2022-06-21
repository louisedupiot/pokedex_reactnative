/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import pokemonsNavigator from './src/navigators/pokemons.navigator';
import {styles} from './src/styles/styles';

const MaterialBottomTab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#CE0000"
        barStyle={{backgroundColor: '#F52F2F'}}>
        <MaterialBottomTab.Screen
          name="Home"
          children={HomeScreen}
          style={styles.test}
        />
        <MaterialBottomTab.Screen
          name="Pokemons"
          component={pokemonsNavigator}
        />
      </MaterialBottomTab.Navigator>
    </NavigationContainer>
  );
};
export default App;
