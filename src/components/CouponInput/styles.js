import { StyleSheet } from 'react-native';
import global from '../../../config/global_styles';

export default (styles = StyleSheet.create({
  gameContainer: {
    alignItems: 'center',
    padding: 16,
  },
  gameContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: global.white,
    borderRadius: 10,
    position: 'relative',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  gameImage: {
    position: 'absolute',
    bottom: -42,
    left: '45%',
  },
  gameNum: {
    color: global.darkPurple,
  },
  gameText: {
    fontSize: 18,
    letterSpacing: 0.64,
    color: global.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
}));
