import {View} from 'react-native';
import styled from 'styled-components/native';
import {ButtonType} from './Type';

export default ({title, style, ...props}: ButtonType) => {
  return (
    <View style={style}>
      <CustomButton {...props}>
        <CustomText>{title}</CustomText>
      </CustomButton>
    </View>
  );
};

const CustomButton = styled.TouchableHighlight`
  width: 100%;
  font-family: Radley;
  border-radius: 0px;
  background-color: #000;
`;

const CustomText = styled.Text`
  color: white;
  font-size: 12px;
  margin: 10px;
  text-align: center;
`;
