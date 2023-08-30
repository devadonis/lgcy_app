import {View} from 'react-native';
import styled from 'styled-components/native';
import {ButtonType} from './Type';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

export default ({makeStyle, icon, ...props}: ButtonType) => {
  return (
    <View style={makeStyle}>
      <CustomButton {...props}>
        <FontAwesomeIcon icon={icon} style={{color: '#FFF'}} />
      </CustomButton>
    </View>
  );
};

const CustomButton = styled.TouchableHighlight`
  width: 100%;
  font-family: Radley;
  border-radius: 50px;
  background-color: #1e7fc9;
  display: flex;
  justify-content: center;
  padding: 12px;
`;
