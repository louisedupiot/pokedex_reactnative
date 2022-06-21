import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokename: {
    fontSize: 20,
    letterSpacing: 1.5,
    color: 'black',
    fontStyle: 'normal',
    fontVariant: ['small-caps'],
    textAlign: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: 60,
    paddingTop: 50,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 30,
    marginVertical: 20,
    paddingBottom: 8,
  },
  searchCont: {
    position: 'absolute',
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  searchfield: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },

  safe: {
    flex: 1,
  },
  hometext: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 150,
  },

  homeimg: {
    width: '50%',
    height: 200,
    opacity: 1,
    resizeMode: 'contain',
    position: 'relative',
  },

  backcard: {},
});
