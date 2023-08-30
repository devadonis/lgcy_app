import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const FontFamily = {
  regular: 'Montserrat-Regular',
  italic: 'Montserrat-Italic',
  black: 'Montserrat-Black',
  blackItalic: 'Montserrat-BlackItalic',
  bold: 'Montserrat-Bold',
  boldItalic: 'Montserrat-BoldItalic',
  extraBold: 'Montserrat-ExtraBold',
  extraBoldItalic: 'Montserrat-ExtraBoldItalic',
  light: 'Montserrat-Light',
  lightItalic: 'Montserrat-LightItalic',
  extraLight: 'Montserrat-ExtraLight',
  extraLightItalic: 'Montserrat-ExtraLightItalic',
  medium: 'Montserrat-Medium',
  mediumItalic: 'Montserrat-MediumItalic',
  semiBold: 'Montserrat-SemiBold',
  semiBoldItalic: 'Montserrat-SemiBoldItalic',
  thin: 'Montserrat-Thin',
  thinItalic: 'Montserrat-ThinItalic',
};

const ApplicationStyle = StyleSheet.create({
  backArrowContainer: { paddingLeft: 10 },
  screenTitleText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 160,
    marginBottom: 30,
  },
  backArrow: {
    height: 25,
    width: 25,
  },
  nextBtn: {
    display: 'flex',
    marginTop: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    marginBottom: 75,
  },
  nextBtnTitle: { fontSize: 22 },
  title20Normal: {
    color: colors.black,
    fontSize: 20
  },
  itle18Normal: {
    color: colors.black,
    fontSize: 18
  },
});

export { ApplicationStyle };
