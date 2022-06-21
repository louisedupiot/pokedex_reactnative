import {StyleSheet} from 'react-native';

export const TextStyle = StyleSheet.create({
  image: {
    width: '50%',
    height: 200,
  },
  imageshiny: {
    width: '50%',
    height: 200,
    marginHorizontal: 100,
  },
  pokeimages: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    backgroundColor: '#F9EDED',
    elevation: 5,
    borderRadius: 30,
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
    color: 'gray',
    textAlign: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginLeft: 50,
  },
  infos: {
    marginHorizontal: 10,
    paddingRight: 50,
    borderRightColor: 'black',
    borderRightWidth: 1,
    marginVertical: 20,
  },

  title: {
    fontSize: 22,
    color: 'black',
    letterSpacing: 1.5,
    fontVariant: ['small-caps'],
    justifyContent: 'center',
  },
  stats: {
    textAlign: 'justify',
    fontSize: 20,
    marginBottom: 15,
    color: 'gray',
    marginVertical: 20,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divstats: {
    marginTop: 25,
    marginLeft: 20,
    justifyContent: 'center',
  },
});
