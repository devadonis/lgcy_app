import { View } from 'react-native';
import styled from 'styled-components/native';
import { ButtonType } from './Type';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default ({
  makeStyle,
  icon,
  isFontAwesome = true,
  svgIcon,
  ...props
}: ButtonType) => {
  return (
    <View style={makeStyle}>
      <CustomButton {...props}>
        {isFontAwesome ? (
          <FontAwesomeIcon icon={icon as IconProp} style={{ color: '#FFF' }} />
        ) : (
          svgIcon
        )}
      </CustomButton>
    </View>
  );
};

const CustomButton = styled.TouchableHighlight`
  width: 100%;
  font-family: Radley;
  border-radius: 50px;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  padding: 7px;
`;
