import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../AppText/AppText";

type AppButtonProps = {
    text: string
}

const AppButton: FC<AppButtonProps> = ({text}) => {
    return(
        <TouchableOpacity style={appButtonStyle.container}>
            <AppText style={appButtonStyle.text} family="medium">{text}</AppText>
        </TouchableOpacity>
    )
}

export default AppButton;

const appButtonStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: "100%",
        height: 40
    },
    text: {
        color: "#000",
        alignSelf: "center",
        fontSize: 16
    }
});