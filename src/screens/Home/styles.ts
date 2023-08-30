import {NativeModules, StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from '../../global/constants';
const {StatusBarManager} = NativeModules;

export const styles = StyleSheet.create({
  homeMenu: {
    // position: 'absolute',
    width: SCREEN_WIDTH,
    backgroundColor: '#eee',
    borderColor: 'grey',
    borderTopWidth: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: StatusBarManager.HEIGHT * 0.5,
  },
  menuList: {
    width: 40,
    height: 40,
  },
});
