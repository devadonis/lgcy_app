import * as React from 'react';
import { ComponentType } from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

export type IconTypes = keyof typeof iconRegistry;

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * If you want ot specify height for icon
   */

  height?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress'];
}

const MemoizedImage = React.memo(Image, (prevProps, nextProps) => {
  return (
    prevProps.source === nextProps.source && prevProps.style === nextProps.style
  );
});

MemoizedImage.displayName = 'MemoizedImage';

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 */

export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    height,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  // @ts-ignore
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View;

  return (
    <Wrapper
      accessibilityRole={isPressable ? 'imagebutton' : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}>
      <MemoizedImage
        style={[
          $imageStyle,
          color ? { tintColor: color } : $defaultColor,
          size ? { width: size, height: height || size } : $defaultDimensions,
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  );
}

export const iconRegistry = {
  home: require('../assets/images/homepage/menu/home.png'),
  contact: require('../assets/images/homepage/menu/contact.png'),
  plus: require('../assets/images/homepage/menu/plus.png'),
  bell: require('../assets/images/homepage/menu/notification.png'),
  user: require('../assets/images/homepage/menu/user.png'),
};

const $imageStyle: ImageStyle = {
  resizeMode: 'contain',
};

const $defaultColor: ImageStyle = { tintColor: 'grey' };
const $defaultDimensions: ImageStyle = { width: 24, height: 24 };
