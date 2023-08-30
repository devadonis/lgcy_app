import { View, TextInputProps } from 'react-native';
import styled from "styled-components/native";

export default ({ style, ...otherProps  }: TextInputProps): JSX.Element => {
    return (
        <View style={style}>
            <CustomTextInput {...otherProps} />
        </View>
    )
}

const CustomTextInput = styled.TextInput`
    width: 90%;
    padding: 10px;
    color: ${({theme}) => theme.colors.dark};
    border-bottom-width: 1px;
    font-size: 18px;
    text-align: center;
    font-family: Radley;
    margin: auto;
`