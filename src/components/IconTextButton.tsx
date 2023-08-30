import {View} from 'react-native';
import styled from 'styled-components/native';
import {ButtonType} from './Type';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

export default ({title, styles, icon, ...props}: ButtonType) => {
  return (
    <View style={styles}>
      <CustomButton {...props}>
        <CustomText>
          <FontAwesomeIcon icon={icon} style={{color: '#FFF'}} />
          &nbsp;&nbsp;{title}
        </CustomText>
      </CustomButton>
    </View>
  );
};

const CustomButton = styled.TouchableHighlight`
  width: 100%;
  font-family: Radley;
  border-radius: 50px;
  background-color: #282c34;
  padding: 9px 12px;
`;

const CustomText = styled.Text`
  color: white;
  font-size: 16px;
  display: flex;
`;
