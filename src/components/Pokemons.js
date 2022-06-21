import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {POKEMON_DETAILS_ROUTE} from '../global.js';

import {styles} from '../styles/styles.js';

const Pokemons = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchfield, setsearchfield] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results))
      .catch(error => console.error(error));
  };

  return (
    <View>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfield}
          placeholder="Chercher un Pokemon"
          onChangeText={value => setsearchfield(value)}
          value={searchfield}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfield.toLowerCase()),
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    navigation.navigate(POKEMON_DETAILS_ROUTE, {
                      pokemon: pokemon.name,
                    })
                  }>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon.name}.png`,
                    }}
                  />
                  <Text style={styles.pokename}>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;
