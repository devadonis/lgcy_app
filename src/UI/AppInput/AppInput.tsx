import { FC } from "react";
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";

import { styles as globalStyles } from "../../global/styles";
import AppText from "../AppText/AppText";

type AppInputProps = {
    label?: string;
    containerStyle?: StyleProp<ViewStyle>
} & TextInputProps;

const AppInput: FC<AppInputProps> = ({ label, containerStyle, ...inputProps }) => {
    console.log(inputProps);
    return (
        <View style={[appInputStyle.container, containerStyle]}>
            <AppText family="medium" style={{ color: "#000", fontSize: 17 }}>
                {label}
            </AppText>
            <TextInput  {...inputProps} numberOfLines={4} style={[appInputStyle.input, inputProps.style]} />
        </View>
    );
};

export default AppInput;

const appInputStyle = StyleSheet.create({
    container: {
        ...globalStyles.flexColView,
        alignItems: "flex-start"
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000",
        width: "100%",
        marginTop: 10,
        paddingHorizontal: 15,
        height: 40,
        alignItems: "flex-start"
    },
});
