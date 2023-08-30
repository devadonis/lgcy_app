import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactElement } from 'react';
import {TouchableHighlightProps} from 'react-native';

export interface ButtonType extends TouchableHighlightProps {
  makeStyle?: any;
  icon?: IconDefinition,
  svgIcon?: ReactElement,
  title?: string;
  isFontAwesome?: boolean
}

export interface ToggleButtonType {
  title?: string;
}
