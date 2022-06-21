import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, ActivityIndicator} from 'react-native';
import {Title} from 'react-native-paper';
import {TextStyle} from '../styles/TextStyle.js';
const Details = ({navigation, route}) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    const {pokemon} = route.params;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(details => {
        navigation.setOptions({title: details.name.toUpperCase()});
        setDetails(details);
      });
  };

  return details.name ? (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', marginBottom: 20}}>
        <View style={TextStyle.pokeimages}>
          <Image
            style={TextStyle.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`,
            }}
          />
          <Image
            style={TextStyle.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${details.id}.png`,
            }}
          />
          <Image
            style={TextStyle.imageshiny}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`,
            }}
          />
        </View>
        <View style={TextStyle.details}>
          <View style={TextStyle.infos}>
            <Text style={TextStyle.text}>
              <Title style={TextStyle.title}>name</Title>
              {'\n'}
              {details.name}
            </Text>
            <Text style={TextStyle.text}>
              <Title style={TextStyle.title}>height</Title>
              {'\n'}
              {details.height}
            </Text>
            <Text style={TextStyle.text}>
              <Title style={TextStyle.title}>weight</Title>
              {'\n'}
              {details.weight}
            </Text>
            <Text style={TextStyle.text}>
              <Title style={TextStyle.title}>ability</Title>
              {'\n'}
              {details.abilities[0].ability.name}
              {'\n'}
              {details.abilities[1].ability.name}
            </Text>
            <Text style={TextStyle.text}>
              <Title style={TextStyle.title}>type</Title>
              {'\n'}
              {details.types[0].type.name}
            </Text>
          </View>
          <View style={TextStyle.divstats}>
            <Text>
              <Title style={TextStyle.title}>stats</Title>
              {'\n'}
            </Text>
            <Text style={TextStyle.stats}>
              {details.stats[0].stat.name.toUpperCase()}{' '}
              {details.stats[0].base_stat}
              {'\n'}
              {details.stats[1].stat.name} {details.stats[1].base_stat}
              {'\n'}
              {details.stats[2].stat.name} {details.stats[2].base_stat}
              {'\n'}
              {details.stats[3].stat.name} {details.stats[3].base_stat}
              {'\n'}
              {details.stats[4].stat.name} {details.stats[4].base_stat}
              {'\n'}
              {details.stats[5].stat.name} {details.stats[5].base_stat}
              {'\n'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  ) : (
    <View style={TextStyle.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default Details;
