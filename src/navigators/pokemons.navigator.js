import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokemons from '../components/Pokemons';
import PokemonDetails from '../components/Details';
import {POKEMONS_LIST_ROUTE, POKEMON_DETAILS_ROUTE} from '../global';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={POKEMONS_LIST_ROUTE} component={Pokemons} />
      <Stack.Screen name={POKEMON_DETAILS_ROUTE} component={PokemonDetails} />
    </Stack.Navigator>
  );
};
