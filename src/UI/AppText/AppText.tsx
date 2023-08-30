import {FC, JSXElementConstructor, ReactElement} from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {FontFamily} from '../../themes/ApplicationStyle';

type AppTextProps = {
  family: keyof typeof FontFamily;
  style?: StyleProp<TextStyle>;
  children?:  number | string[] | string | JSX.Element | JSX.Element[];
  textProps?: TextProps;
};

type AppText = AppTextProps & TextProps;

const AppText: FC<AppText> = ({family, style, children, textProps}) => {
  return (
    <Text style={[style, {fontFamily: FontFamily[family]}]} {...textProps}>
      {children}
    </Text>
  );
};

export default AppText;
